CREATE TABLE book(
 id SERIAL PRIMARY KEY,
 author_id int,
 CONSTRAINT fk_author
      FOREIGN KEY(author_id) 
	  REFERENCES author(id),
       catagory_id int,
CONSTRAINT fk_catagory
      FOREIGN KEY(catagory_id) 
	  REFERENCES catagory(id),
title TEXT ,
isbn int,
discription TEXT,
price int
);