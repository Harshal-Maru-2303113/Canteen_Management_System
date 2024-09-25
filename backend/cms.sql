drop database cms;
create database cms;
use cms;
create table users
(
user_id int auto_increment,
user_email varchar(100) not null unique,
user_name varchar(100) not null,
user_password varchar(100) not null,
user_type boolean default 1,
primary key(user_id)
);

create table orders
(
order_id int auto_increment,
user_id int,
ordered_items varchar(200) not null,
order_price int not null,
order_time datetime not null,
order_status enum("Completed","Cancelled","inProgress","notAccepted") not null default "notAccepted",
primary key(order_id),
foreign key(user_id) references users(user_id)
);

create table menu(
	item_id int auto_increment,
    item_name varchar(100) not null,
    item_price int not null,
    item_info varchar(100), 
	item_type enum("SouthIndain","FastFood","Beverages","Dishes") not null,
    item_status boolean default 1,
    primary key(item_id)
); 