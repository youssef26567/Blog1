CREATE TABLE purchase(
    id SERIAL  PRIMARY KEY,
    user_id INT,
    CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id),
    date Date,
    address TEXT
);