CREATE TABLE orders(
id SERIAL PRIMARY KEY,
book_id int,
 CONSTRAINT fk_book
      FOREIGN KEY(book_id) 
	  REFERENCES book(id),
       purchase_id INT,
CONSTRAINT fk_purchase
      FOREIGN KEY(purchase_id) 
	  REFERENCES purchase(id),
quantity INT
);