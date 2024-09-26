drop database cms;
create database cms;
use cms;
create table users
(
user_email varchar(100),
user_name varchar(100) not null,
user_password varchar(100) not null,
primary key(user_email)
);

create table orders
(
order_id int auto_increment,
user_email varchar(100),
ordered_items varchar(200) not null,
order_price int not null,
order_time datetime not null,
order_status enum("Completed","Cancelled","inProgress","notAccepted") not null default "notAccepted",
primary key(order_id),
foreign key(user_email) references users(user_email)
);

create table menu(
    item_name varchar(100),
    item_price int not null,
	item_type enum("SouthIndain","FastFood","Beverages","Dishes") not null,
    item_status boolean default 1,
    primary key(item_name)
); 