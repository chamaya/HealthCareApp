create database heathcare;
use heathcare;
CREATE TABLE USERS(
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
email VARCHAR(50),
dob DATE
);

INSERT INTO USERS (name, email, dob)
VALUES ("John Martinez", "martinez@gmail.com", "1994-06-15");
SELECT * FROM USERS;


CREATE TABLE MEDICAL_CARDS (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
recId INT UNSIGNED NOT NULL,
issuer VARCHAR(30) NOT NULL,
state VARCHAR(2) NOT NULL,
expirationDate DATE NOT NULL,
imagePath VARCHAR(260) NOT NULL,
user INT UNSIGNED NOT NULL,
FOREIGN KEY (user) 
REFERENCES USERS(id),
UNIQUE(user)
);

INSERT INTO MEDICAL_CARDS (recId, issuer, state, expirationDate, imagePath, user)
VALUES (583276182, "Doctor Smith's Office", "CA", "2030-12-31", "images/User_1/medical_card/card.jpg", 1);
SELECT * FROM MEDICAL_CARDS;

CREATE TABLE GOVERNMENT_IDS (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
govId INT UNSIGNED NOT NULL,
state VARCHAR(2) NOT NULL,
expirationDate DATE NOT NULL,
imagePath VARCHAR(260),
user INT UNSIGNED NOT NULL,
FOREIGN KEY (user) 
REFERENCES USERS(id),
UNIQUE (user)
);

INSERT INTO GOVERNMENT_IDS (govId, state, expirationDate, imagePath, user)
VALUES (12345678, "CA", "2030-09-30", "images/User_1/government_id/card.jpg", 1);
SELECT * FROM GOVERNMENT_IDS;

############################################################