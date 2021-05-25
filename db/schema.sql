DROP DATABASE IF EXISTS rubber_duckiesDB;
CREATE database rubber_duckiesDB;

USE rubber_duckiesDB;


CREATE TABLE CAREGIVER (
caregiverid INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NULL,
firstname VARCHAR(50) NULL,
lastname VARCHAR(50) NULL,
email VARCHAR(100) NULL,
password VARCHAR(8)NOT NULL,
PRIMARY KEY(caregiverid)

);

CREATE TABLE USERS  (

Userid INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NULL,
firstname VARCHAR(50) NULL,
lastname VARCHAR(50) NULL,
email VARCHAR(100) NULL,
caregiverid  int null,
happy VARCHAR(256) null,
sad VARCHAR(256) null,
nervous VARCHAR(256) null,
hungry VARCHAR(256) null,
thirsty VARCHAR(256) null,
restroom VARCHAR(256) null,
password VARCHAR(8)NOT NULL,
PRIMARY KEY (userid),
FOREIGN KEY (caregiverid) REFERENCES CAREGIVER (caregiverid) 
);



CREATE TABLE USERACTIONDETAIL (

UserActionDetailId INT NOT NULL AUTO_INCREMENT,
UserEmotion VARCHAR(50) NULL,
UserNeeds  VARCHAR(50) NULL,
createdDate date NOT NULL,
userid INT NOT NULL,
PRIMARY KEY (UserActionDetailId),
FOREIGN KEY (userid) REFERENCES USERS (userid) 

);

