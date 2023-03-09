CREATE DATABASE produucts_ferreteria;
use products_ferreteria;
CREATE TABLE product(
    id INTEGER NOT NULL AUTO_INCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)

);

DESCRIBE product;