DROP DATABASE IF EXISTS rubber_duckiesDB;
CREATE database rubber_duckiesDB;

USE rubber_duckiesDB;


CREATE TABLE CAREGIVER (
caregiverid INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NULL,
firstname VARCHAR(50) NULL,
lastname VARCHAR(50) NULL,
email VARCHAR(100) NULL,
password VARCHAR(100)NOT NULL,
PRIMARY KEY(caregiverid)

);

CREATE TABLE USERS  (

Userid INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NULL,
firstname VARCHAR(50) NULL,
lastname VARCHAR(50) NULL,
email VARCHAR(100) NULL,
caregiverid  INT NULL,
happy VARCHAR(256) NULL,
sad VARCHAR(256) NULL,
nervous VARCHAR(256) NULL,
hungry VARCHAR(256) NULL,
thirsty VARCHAR(256) NULL,
restroom VARCHAR(256) NULL,
password VARCHAR(100)NOT NULL,
PRIMARY KEY (userid),
FOREIGN KEY (caregiverid) REFERENCES CAREGIVER (caregiverid) 
);



CREATE TABLE USERACTIONDETAIL (

userActionDetailId INT NOT NULL AUTO_INCREMENT,
userInput VARCHAR(50) NULL,
createdDate date NOT NULL,
userid INT NOT NULL,
PRIMARY KEY (UserActionDetailId),
FOREIGN KEY (userid) REFERENCES USERS (userid) 

);

