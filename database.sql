CREATE TABLE IF NOT EXIST users(
   id Serial PRIMARY KEY,
   username VARCHAR(255),
   email VARCHAR(255),
   password VARCHAR(255));