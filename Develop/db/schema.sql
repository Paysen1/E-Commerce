-- Use the created database
USE ecommerce_db;

-- Categories table
CREATE TABLE categories (
  id INTEGER NOT NULL AUTO_INCREMENT,
  category_name VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

-- Products table
CREATE TABLE products (
  id INTEGER NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INTEGER NOT NULL DEFAULT 10,
  category_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Tags table
CREATE TABLE tags ( 
  id INTEGER NOT NULL AUTO_INCREMENT,
  tag_name VARCHAR(50),
  PRIMARY KEY (id)
);

-- ProductTag table (for the many-to-many relationship between products and tags)
CREATE TABLE product_tags (
  id INTEGER NOT NULL AUTO_INCREMENT,
  product_id INTEGER,
  tag_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (product_id) REFERENCES products (id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE ON UPDATE CASCADE
);
