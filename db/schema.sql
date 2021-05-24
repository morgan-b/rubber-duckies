DROP DATABASE IF EXISTS rubber_duckiesDB;
CREATE database rubber_duckiesDB;

USE rubber_duckiesDB;

---USERNEEDS---
CREATE TABLE USERNEEDS (
UserNeedsId INT NOT NULL AUTO_INCREMENT,
UserNeedsDescription VARCHAR(50),
PRIMARY KEY (UserNeedsId)
);
INSERT INTO USERNEEDS (UserNeedsDescription)
VALUES ("Hungry"),("Thirsty"),("Restroom") ;


---USEREMOTIONS---
CREATE TABLE USEREMOTIONS (
UserEmotionId INT NOT NULL AUTO_INCREMENT,
EmotionDescription VARCHAR(50),
PRIMARY KEY(UserEmotionId)
);
INSERT INTO USEREMOTIONS (EmotionDescription)
VALUES ("Happy"),("Sad"),("Nervous") ;



---CAREGIVER----
CREATE TABLE CAREGIVER (
caregiverid INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NULL,
firstname VARCHAR(50) NULL,
lastname VARCHAR(50) NULL,
email VARCHAR(100) NULL,
password VARCHAR(8)NOT NULL,
PRIMARY KEY(caregiverid)

);

--USERS---
CREATE TABLE USERS  (

Userid INT NOT NULL AUTO_INCREMENT,
username VARCHAR(50) NULL,
firstname VARCHAR(50) NULL,
lastname VARCHAR(50) NULL,
email VARCHAR(100) NULL,
caregiverid INT not null,
password VARCHAR(8)NOT NULL,
PRIMARY KEY (userid),
FOREIGN KEY (caregiverid) REFERENCES CAREGIVER (caregiverid) 
);

---USERACTIONDETAIL---
CREATE TABLE USERACTIONDETAIL (

UserActionDetailId INT NOT NULL AUTO_INCREMENT,
UserEmotionId INT NOT NULL,
UserNeedsId INT NOT NULL,
createdDate date NOT NULL,
CreatedTime time NOT NULL,
userid INT NOT NULL,
PRIMARY KEY (UserActionDetailId),
FOREIGN KEY (UserEmotionId) REFERENCES USEREMOTIONS (UserEmotionId) ,
FOREIGN KEY (UserNeedsId) REFERENCES USERNEEDS (UserNeedsId) ,
FOREIGN KEY (userid) REFERENCES USERS (userid) 

);


select * from USERSTAG;
select * from USEREMOTIONS;
select * from CAREGIVER;
select * from USERNEEDS;
SELECT * FROM USERS;
select * from USERACTIONDETAIL;
