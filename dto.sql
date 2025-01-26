create database wearhaus;


create table user_s(
    id serial primary key,
    email varchar(200) not null unique,
    password text not null,
    role varchar(30) not null 
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name varchar(50) not null,
    price int default 0,
    count int default 0
);

CREATE TABLE category (
    id SERIAL PRIMARY KEY,
    name varchar(300) not null
);