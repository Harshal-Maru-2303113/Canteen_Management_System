use cms;

INSERT INTO users (user_email, user_name, user_password) VALUES
("admin@iitgoa.ac.in","Admin","Admin@iitgoa"),
  ('user1@iitgoa.ac.in', 'John Doe', 'password1'),
  ('user2@iitgoa.ac.in', 'Jane Smith', 'password2'),
  ('user3@iitgoa.ac.in', 'Alice Johnson', 'password3'),
  ('user4@iitgoa.ac.in', 'Bob Williams', 'password4'),
  ('user5@iitgoa.ac.in', 'Charlie Brown', 'password5'),
  ('user6@iitgoa.ac.in', 'David Lee', 'password6'),
  ('user7@iitgoa.ac.in', 'Emily Baker', 'password7'),
  ('user8@iitgoa.ac.in', 'Frank Carter', 'password8'),
  ('user9@iitgoa.ac.in', 'Grace Davis', 'password9'),
  ('user10@iitgoa.ac.in', 'Henry Evans', 'password10'),
  ('user11@iitgoa.ac.in', 'Isabella Fisher', 'password11'),
  ('user12@iitgoa.ac.in', 'Jack Green', 'password12'),
  ('user13@iitgoa.ac.in', 'Kate Harris', 'password13'),
  ('user14@iitgoa.ac.in', 'Leo Johnson', 'password14'),
  ('user15@iitgoa.ac.in', 'Mia King', 'password15'),
  ('user16@iitgoa.ac.in', 'Noah Lewis', 'password16'),
  ('user17@iitgoa.ac.in', 'Olivia Martin', 'password17'),
  ('user18@iitgoa.ac.in', 'Peter Murphy', 'password18'),
  ('user19@iitgoa.ac.in', 'Queen Taylor', 'password19'),
  ('user20@iitgoa.ac.in', 'Robert Underwood', 'password20'),
  ('user21@iitgoa.ac.in', 'Sarah Valentine', 'password21'),
  ('user22@iitgoa.ac.in', 'Thomas Walker', 'password22'),
  ('user23@iitgoa.ac.in', 'Ursula Wilson', 'password23'),
  ('user24@iitgoa.ac.in', 'Victor Young', 'password24'),
  ('user25@iitgoa.ac.in', 'Wendy Zane', 'password25');
  
insert into category(item_type) values
  ("SouthIndian"),
  ("Dish"),
  ("FastFood"),
  ("Beverage");
  
INSERT INTO southindian (item_name, item_price) VALUES
  ('Masala Dosa', 150),
  ('Idli Sambhar', 100),
  ('Uttapam', 80),
  ('Pongal', 70),
  ('Medu Vada', 50),
  ('Dosa Variety Platter', 200),
  ('Rava Dosa', 120),
  ('Mysore Masala Dosa', 180),
  ('Onion Rava Masala Dosa', 200),
  ('Ghee Roast', 150);
  
insert into fastfood(item_name, item_price) values
  ('Chicken Burger', 200),
  ('French Fries', 80),
  ('Cheese Burger', 250),
  ('Vegetable Burger', 180),
  ('Hot Dog', 100),
  ('Chicken Nuggets', 150),
  ('Fish Fingers', 200),
  ('Pizza', 350),
  ('Pasta', 250),
  ('Shawarma', 200);
  
insert into dish(item_name, item_price) values
  ('Butter Chicken', 300),
  ('Vegetable Curry', 250),
  ('Fried Rice', 150),
  ('Noodles', 200),
  ('Biryani', 250),
  ('Chicken Tikka Masala', 350),
  ('Paneer Tikka Masala', 300),
  ('Mutton Rogan Josh', 400),
  ('Fish Curry', 350),
  ('Vegetable Korma', 250);
  
insert into beverage(item_name, item_price) values
  ('Coke', 30),
  ('Pepsi', 30),
  ('Coffee', 50),
  ('Tea', 30),
  ('Lassi', 50),
  ('Lemonade', 30),
  ('Orange Juice', 40),
  ('Mango Juice', 50),
  ('Watermelon Juice', 40),
  ('Strawberry Milkshake', 80);
  
INSERT INTO orders (user_email, ordered_items, order_price, order_time, order_status) VALUES
  ('user1@iitgoa.ac.in', 'Masala Dosa, Coke', 180, NOW(), 'Completed'),
  ('user2@iitgoa.ac.in', 'Chicken Burger, Fries', 280, NOW(), 'inProgress'),
  ('user3@iitgoa.ac.in', 'Butter Chicken, Rice', 550, NOW(), 'notAccepted'),
  ('user4@iitgoa.ac.in', 'Pizza, Pepsi', 400, NOW(), 'Cancelled'),
  ('user5@iitgoa.ac.in', 'Idli Sambhar, Vada Pav', 150, NOW(), 'Completed'),
  ('user6@iitgoa.ac.in', 'Coffee, Samosa', 80, NOW(), 'inProgress'),
  ('user7@iitgoa.ac.in', 'Paneer Tikka, Soup', 350, NOW(), 'notAccepted'),
  ('user8@iitgoa.ac.in', 'Fish Fingers, Salad', 300, NOW(), 'Cancelled'),
  ('user9@iitgoa.ac.in', 'Biryani, Ice Cream', 300, NOW(), 'Completed'),
  ('user10@iitgoa.ac.in', 'Noodles, Spring Rolls', 250, NOW(), 'inProgress'),
  ('user11@iitgoa.ac.in', 'Vegetable Curry, Tea', 300, NOW(), 'notAccepted'),
  ('user12@iitgoa.ac.in', 'Chicken Tikka, Pakora', 350, NOW(), 'Cancelled'),
  ('user13@iitgoa.ac.in', 'French Fries, Coke', 110, NOW(), 'Completed'),
  ('user14@iitgoa.ac.in', 'Pizza, Pepsi', 400, NOW(), 'inProgress'),
  ('user15@iitgoa.ac.in', 'Masala Dosa, Idli Sambhar', 250, NOW(), 'notAccepted'),
  ('user16@iitgoa.ac.in', 'Butter Chicken, Rice', 550, NOW(), 'Cancelled'),
  ('user17@iitgoa.ac.in', 'Paneer Tikka, Soup', 350, NOW(), 'Completed'),
  ('user18@iitgoa.ac.in', 'Fish Fingers, Salad', 300, NOW(), 'inProgress'),
  ('user19@iitgoa.ac.in', 'Biryani, Ice Cream', 300, NOW(), 'notAccepted'),
  ('user20@iitgoa.ac.in', 'Noodles, Spring Rolls', 250, NOW(), 'Cancelled'),
  ('user21@iitgoa.ac.in', 'Vegetable Curry, Tea', 300, NOW(), 'Completed'),
  ('user22@iitgoa.ac.in', 'Chicken Tikka, Pakora', 350, NOW(), 'inProgress'),
  ('user23@iitgoa.ac.in', 'French Fries, Coke', 110, NOW(), 'notAccepted'),
  ('user24@iitgoa.ac.in', 'Pizza, Pepsi', 400, NOW(), 'Cancelled'),
  ('user25@iitgoa.ac.in', 'Masala Dosa, Idli Sambhar', 250, NOW(), 'Completed');