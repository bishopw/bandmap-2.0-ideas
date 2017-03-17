/*

Seattle Bandmap DB 2.0

This schema is a data normalization and redesign of the original Bandmap data
model.  I've tried to:

1) Deduplicate and decouple discrete entities (members and cities in bands
   mostly) so each person or city or whatever only appears in the database once
   under one specific id.

2) Add more flexibility so we can easily add new types of band connections and
   new types of info about bands in the future.

3) Add support for seeing band members' roles and for seeing changes in band
   locations and members and their roles over time.  Also for optional user
   accounts and role based access control and logging edits to the database
   so we can have a more fully-featured web app.

4) Remove the concept of "pending" stuff and manually verifying it in the admin
   page in favor of an auditable edit trail associated with app sessions
   (both user-associated and anonymous).

Tables in the new model can be organized into the following groups:

PEOPLE
LOCATIONS
WEB
BANDS
ADMIN

I included commentary on some of my design thoughts in inline comments and
expansion ideas for the future in ((double parens)).

*/

create schema if not exists `bandmap` default character set utf8;

use `bandmap`;

set default_storage_engine = InnoDB;


-- PEOPLE

create table if not exists `people` (
  `id` int not null,
  `name` varchar(255) not null,
  `click_count` int not null,
  -- ((web_links))?  Kinda wanna resist going in the direction of personal data
  -- collection on individuals though... although the below would definitely
  -- be interesting for aggregate music community surveys/specialized maps:
  -- ((gender, ethnicity, nationality, birthday))?
  primary key (id)
);


-- LOCATIONS

create table if not exists `countries` (
  `id` int not null,
  `name` varchar(255) not null,
  primary key (`id`)
);

create table if not exists `states` ( -- Or province/prefecture/what-have-you.
  `id` int not null,
  `name` varchar(255) not null,
  `country_id` int,
  primary key (`id`),
  index (`country_id`),
  foreign key (`country_id`)
    references `countries`(`id`)
    on delete set null -- Deleting a country orphans all its states.
);

create table if not exists `cities` (
  `id` int not null,
  `name` varchar(255) not null,
  `state_id` int,
  primary key (`id`),
  index (`state_id`),
  foreign key (`state_id`)
    references `states`(`id`)
    on delete set null -- Deleting a state orphans all its cities.
);

create table if not exists `regions` ( -- Like "Pacific Northwest".
  `id` int not null,
  `name` varchar(255) not null,
  primary key (`id`)
);

create table if not exists `region_cities` (
  `region_id` int not null,
  `city_id` int not null,
  primary key (`region_id`, `city_id`),
  index (`city_id`),
  foreign key (`region_id`)
    references `regions`(`id`)
    on delete cascade, -- Deleting a region deletes its region-city definitions.
  foreign key (`city_id`)
    references `cities`(`id`)
    on delete cascade -- Deleting a city deletes its region-city definitions.
);

create table if not exists `region_states` (
  `region_id` int not null,
  `state_id` int not null,
  primary key (`region_id`, `state_id`),
  index (`state_id`),
  foreign key (`region_id`)
    references `regions`(`id`)
    on delete cascade, -- Deleting a region deletes its region-state definitions.
  foreign key (`state_id`)
    references `states`(`id`)
    on delete cascade -- Deleting a state deletes its region-state definitions
);

create table if not exists `region_countries` (
  `region_id` int not null,
  `country_id` int not null,
  primary key (`region_id`, `country_id`),
  index (`country_id`),
  foreign key (`region_id`)
    references `regions`(`id`)
    on delete cascade, -- Deleting a region deletes region-country definitions.
  foreign key (`country_id`)
    references `countries`(`id`)
    on delete cascade -- Deleting a country deletes region-country definitions.
);

-- Let's allow regions composed of other regions, just be sure to check for
-- and reject circularly defined regions in the app.
create table if not exists `region_regions` (
  `region1_id` int not null,
  `region2_id` int not null,
  primary key (`region1_id`, `region2_id`),
  index (`region2_id`),
  foreign key (`region1_id`)
    references `regions`(`id`)
    on delete cascade, -- Deleting a region deletes its parent regions.
  foreign key (`region2_id`)
    references `regions`(`id`)
    on delete cascade -- Deleting a region deletes its parent regions.
);

-- ((google_maps_info/geophysical_info))?


-- WEB

create table if not exists `web_links` (
  `id` int not null,
  `url` text not null,
  `description` varchar(255),
  primary key (id)
);


-- BANDS

create table if not exists `bands` (
  `id` int not null,
  -- For solo artists, either a duplicate of the 
  -- person name field or their performing name:
  `name` varchar(255) not null, 
  `click_count` int not null,
  `from` date,  --
  `until` date, -- When was the band active.
  -- The app should probably deduplicate (delete) from/until entries in this 
  -- table in preference of the more specific timespans in band_cities or
  -- band_person_roles when they overlap.  In general I'm having second thoughts
  -- about my representation of these timespans - what if bands had hiatuses or
  -- people had gaps in their times at bands for example?  Seems like if we want
  -- to do this right we need a one-[band/person/whatever]to-many-timespans
  -- relation here.
  primary key (id)
);

create table if not exists `roles` ( -- 0="Member", "Vocalist", "Bassist", ...
  `id` int not null,
  -- Person-role relations should be kept as minimal as possible: a "Vocalist"
  -- doesn't also need a "Member" entry.
  `name` varchar(255) not null,
  primary key (id)
);

create table if not exists `person_roles` (
  `person_id` int not null,
  `role_id` int not null default 0, -- Default is "Member".
  `from` date,  --
  `until` date, -- When did this person have this role.
  primary key (`person_id`, `role_id`),
  index (`role_id`),
  foreign key (`person_id`)
    references `people`(`id`)
    on delete cascade, -- Deleting a person deletes their role definitions.
  foreign key (`role_id`)
    references `roles`(`id`)
    on delete restrict -- No deleting a role that a person has.
);

create table if not exists `band_person_roles` (
  `band_id` int not null,
  `person_id` int not null,
  `role_id` int not null,
  `from` date,  --
  `until` date, -- When did this person have this role in this band.
  primary key (`band_id`, `person_id`, `role_id`),
  index (`person_id`),
  index (`role_id`),
  foreign key (`band_id`)
    references `bands`(`id`)
    -- Deleting a band deletes their associated band person roles.
    on delete cascade,
  foreign key (`person_id`)
    references `people`(`id`)
    -- Deleting a person deletes their associated band person roles.
    on delete cascade,
  foreign key (`role_id`)
    references `roles`(`id`)
    on delete restrict -- No deleting a role if a person has it in a band.
);

create table if not exists `band_cities` (
  `band_id` int not null,
  `city_id` int not null,
  `from` date,  --
  `until` date, -- When was this band based in this city.
  primary key (`band_id`, `city_id`),
  index (`city_id`),
  foreign key (`band_id`)
    references `bands`(`id`)
    on delete cascade, -- Deleting a band deletes their relations to cities.
  foreign key (`city_id`)
    references `cities`(`id`)
    on delete restrict -- No deleting cities with bands in them.
);

create table if not exists `band_web_links` (
  `band_id` int not null,
  `web_link_id` int not null,
  primary key (`band_id`, `web_link_id`),
  index (`web_link_id`),
  foreign key (`band_id`)
    references `bands`(`id`)
    on delete cascade, -- Deleting a band deletes their relations to web links.
  foreign key (`web_link_id`)
    references `web_links`(`id`)
    on delete cascade -- Deleting a web link deletes its associations with bands.
);

/*
If "connections" are just shared members, the new database design allows easy
lookup of that by joining the bands and people tables.  But bandmap.com says
bands are also connected if "b) two artists have collaborated on a project",
which I'm not clear on the exact meaning of that.  I'm also not sure after
looking through some of the pending connection rows whether people ever submit
connections besides shared members connections.
Although there seem to be least a few connections in the DB that are not shared
members connections, like Bikini Kill<->Sleater-Kinney.  And these connections
are not annotated, so we have to guess what they are.
In any case, about 2/3 of bands in the DB currently have no listed members,
just unannotated connections.  So we need to preserve these connections until
we can classify them better (hopefully with bots and not by hand).
*/
create table if not exists `connections` (
  `band_1_id` int not null,
  `band_2_id` int not null,
  `description` text not null,
  `from` date,  --
  `until` date, -- When did these bands have this connection.
  primary key (`band_1_id`, `band_2_id`),
  index (`band_2_id`),
  foreign key (`band_1_id`)
    references `bands`(`id`)
	-- Deleting a band deletes their connections to other bands.
    on delete cascade,
  foreign key (`band_2_id`)
    references `bands`(`id`)
    -- Deleting a band deletes their connections to other bands.
    on delete cascade
);


-- ADMIN

-- Types of account identity used by Band Map - just "bandmap" for now, possibly
-- "Google" or "Facebook" or whatever in future so you could log in with your
-- account on those sites.
-- To clarify, I still want to allow anonymous users to edit/submit bands and
-- info, but I think we should also implement accounts and identity to support
-- potential features like administrator-only functionality in the web app and
-- users browsing or taking credit for their own editing histories.

create table if not exists `identity_types` (
  `id` int not null,
  `name` varchar(255) not null,
  primary key (id)
);

create table if not exists `app_roles` ( -- "user", or "admin".
  `id` int not null,
  `name` varchar(255) not null,
  primary key (id)
);

create table if not exists `accounts` (
  `id` int not null,
  `identity_type_id` int not null,
  `app_role_id` int not null,
  `person_id` int, -- In case a user wants to also identify as a band person(!)
  -- Edits and session logs will appear under this username, rather than the
  -- associated person name.  Email/password fields below could be null for
  -- future non-"bandmap" identities.
  `username` varchar(255) not null,
  `email_address` text,
  `password_hash` text, -- salted, hashed password
  -- For doing that 'click the link in your email to verify' thing for new users:
  `is_account_verified` boolean not null default false,
  -- Allow deleting accounts without invalidating session/edit records:
  `is_deleted` boolean not null default false,
  primary key (`id`),
  index (`identity_type_id`),
  index (`app_role_id`),
  index (`person_id`),
  foreign key (`identity_type_id`)
	references `identity_types`(`id`)
    on delete restrict, -- No deleting an identity type that an account uses.
  foreign key (`app_role_id`)
	references `app_roles`(`id`)
    on delete restrict, -- No deleting an app role that an account has.
  foreign key (`person_id`)
	references `people`(`id`)
    on delete set null -- Deleting a person orphans their associated account.
);

create table if not exists `sessions` (
  `id` int not null,
  `account_id` int, -- Null for anonymous sessions.
  `ip_address` text,
  -- Value of "Set-Cookie" sessionToken last sent to client maybe.  Actually,
  -- haven't looked enough into how OAuth2 or whatever we want to use works yet.
  `cookie` text,
  `last_request` datetime,
  `start` datetime not null,
  `end` datetime,
  primary key (`id`),
  index (`account_id`),
  foreign key (`account_id`)
	references `accounts`(`id`)
    on delete set null -- Deleting an account orphans its session records.
);

/*
This one's kind of sketchy since it adds an extra table insert (to this table)
for every DB modification, and also since we're keeping text values for dates
and integers in "old_value" and "new_value".  But it's the lightest-weight way
I could think to do both:
 - Wiki-style record keeping of data change over time.
 - Quickly audit recent edits from the public - wouldn't want to allow
   unverified modifications without this, especially from anonymous sessions.
*/
create table if not exists `edits` (
  `id` int not null,
  `datetime` datetime not null,
  `session_id` int,
  `type` varchar(255) not null, -- "insert", "update", or "delete".
  `table` varchar(255) not null,
  `target_row_id` int not null,
  `column` varchar(255),
  `old_value` text,
  `new_value` text,
  primary key (`id`),
  index (`session_id`),
  foreign key (`session_id`)
    references `sessions`(`id`)
    on delete set null -- Deleting a session orphans its associated edits.
);


-- ((Future ideas:))

-- VENUES

-- SHOWS

-- ALBUMS

-- RECORD LABELS

-- GENRES

-- BIOGRAPHIES AND ANNOTATIONS

-- IMAGES

-- AUDIO

-- VIDEO
