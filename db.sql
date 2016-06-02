

CREATE TABLE Users (Uid SERIAL, Username VARCHAR(50),
RealName VARCHAR(100), Password VARCHAR(50), contact character varying(100));

CREATE TABLE loggedin (
    rowide integer,
    Uid integer
);




INSERT INTO Users (Username,Realname,Password,contact) VALUES
('admin','Sally Smith','admin','admin@site.me'),
('m', 'Sally Smith','m','sally@sallys.sally'),
('miten','Miten Chauhan','miten', 'example@example.example');

INSERT INTO loggedin (rowide,Uid) VALUES (1,0);
