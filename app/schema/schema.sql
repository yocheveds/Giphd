DROP DATABASE IF EXISTS gif_tinder2db;

CREATE DATABASE gif_tinder2db;

USE gif_tinder2db;


DROP TABLE gif_tinder2;
CREATE TABLE gif_tinder2(
  id INTEGER(200) AUTO_INCREMENT NOT NULL,
 
  user_name STRING(50) NOT NULL,
 
  user_age NUMBER(10)NOT NULL,
  
  user_gender STRING(10)NOT NULL,

  user_zip NUMBER(10)NOT NULL,

  giphy_url STRING(225)NOT NULL,
  PRIMARY KEY (id)
);
 
 SELECT * FROM gif_tinder2db;
