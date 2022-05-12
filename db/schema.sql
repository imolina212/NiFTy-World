DROP DATABASE IF EXISTS nifty_world_dev;
CREATE DATABASE nifty_world_dev;
\c nifty_world_dev;
CREATE TABLE content (
    id SERIAL PRIMARY KEY,
    lesson_categories TEXT,
    videos TEXT,
    reading_material TEXT
)