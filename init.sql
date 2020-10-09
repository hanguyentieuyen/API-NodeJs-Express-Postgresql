CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);

INSERT INTO users (name, email)
VALUES ('yen', 'tieuyen@athlsolutions.com'), ('hanguyen', 'hanguyentieuyen@gmail.com');