CREATE USER 'Aelita'@'localhost' IDENTIFIED BY '20broKenNIGHT05';
CREATE DATABASE Lyoko;
GRANT ALL ON Lyoko.* TO 'Aelita'@'localhost';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'Aelita'@'localhost';