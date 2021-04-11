CREATE TABLE author (
	author_id serial PRIMARY KEY,
	firstname VARCHAR ( 50 ) NOT NULL,
	lastname VARCHAR ( 50 ) NOT NULL
);


CREATE TABLE category (
	category_id serial PRIMARY KEY,
	name VARCHAR ( 50 ) NOT NULL
);


CREATE TABLE book (
	book_id serial PRIMARY KEY,
	title VARCHAR ( 50 ) NOT NULL,
	author_id int NOT NULL,
	category_id int NOT NULL,
	summary VARCHAR ( 50 ) NOT NULL,
	book_cover_url VARCHAR ( 50 ) NOT NULL,
	price double precision not null
);

CREATE TABLE users (
	user_id serial PRIMARY KEY,
	acceslevel_id int NOT NULL,
	firstname VARCHAR ( 50 ) NOT NULL,
	lastname VARCHAR ( 50 ) NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	phone_number VARCHAR ( 50 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);

CREATE TABLE purchases (
	purchase_id serial PRIMARY KEY,
	book_id int NOT NULL,
	user_id int NOT NULL,
	amount Double precision NOT NULL,
	purchase_date timestamp without time zone not null
);

CREATE TABLE acceslevel (
	acceslevel_id serial PRIMARY KEY,
	acceslevel_name VARCHAR ( 50 ) NOT NULL
);


CREATE TABLE favourite (
	favourite_id serial PRIMARY KEY,
	book_id int NOT NULL,
	user_id int NOT NULL
);


--------------------------------------------------------FOREIGN KEYS------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------

alter table book 
    add constraint fk_book_author
    foreign key (author_id) 
    REFERENCES author (author_id);
	
	alter table book 
    add constraint fk_book_category
    foreign key (category_id) 
    REFERENCES category (category_id);
	
	alter table users 
    add constraint fk_users_acceslevel
    foreign key (acceslevel_id) 
    REFERENCES acceslevel (acceslevel_id);
	
	alter table purchases 
    add constraint fk_purchases_book
    foreign key (book_id) 
    REFERENCES book (book_id);
	
	alter table purchases 
    add constraint fk_purchases_usser
    foreign key (user_id) 
    REFERENCES users (user_id);
	
	alter table favourite 
    add constraint fk_favorite_book
    foreign key (book_id) 
    REFERENCES book (book_id);
	
	alter table favourite 
    add constraint fk_favourite_usser
    foreign key (user_id) 
    REFERENCES users (user_id);


ALTER TABLE users
ADD profile_picture VARCHAR ( 50 ) NOT NULL;

	
