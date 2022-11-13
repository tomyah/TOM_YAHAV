
DROP DATABASE `keeper-sitter`;
CREATE DATABASE `keeper-sitter`;
USE `keeper-sitter`;


CREATE TABLE `ADD_REQUESTS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `SEARCHES` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `latitude` VARCHAR(2000) NULL,
  `longitude` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`));


CREATE TABLE `SITTERS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `latitude` VARCHAR(45) NULL,
  `longitude` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));

INSERT SITTERS (name, phone, latitude, longitude) VALUES ('Sara Sharon', '052-222222', 32.0619003, 34.7653351);
INSERT SITTERS (name, phone, latitude, longitude) VALUES ('roni bat', '054-9546666', 31.2404821, 34.8131947);
INSERT SITTERS (name, phone, latitude, longitude) VALUES ('alma gimel', '054-0540544', 31.2619302, 34.8058412);
INSERT SITTERS (name, phone, latitude, longitude) VALUES ('amit dalet', '052-6789954', 31.2592863,34.7969212);
INSERT SITTERS (name, phone, latitude, longitude) VALUES ('tom yaar', '050-6309922', 31.2595055,34.799279);
INSERT SITTERS (name, phone, latitude, longitude) VALUES ('savta tova', '050-6609924', 31.260828,34.7945716);
INSERT SITTERS (name, phone, latitude, longitude) VALUES ('ron cohen', '052-5381648', 31.2638406,34.7906585);

