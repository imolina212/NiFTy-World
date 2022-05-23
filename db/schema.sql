DROP DATABASE IF EXISTS nifty_world_dev;
CREATE DATABASE nifty_world_dev;
\c nifty_world_dev;

CREATE TABLE content (
    id SERIAL PRIMARY KEY,
    lesson_categories TEXT,
    videos TEXT,
    reading_material TEXT
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    category TEXT,
    question TEXT,
    answer TEXT,
    content_id INTEGER REFERENCES content (id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    name TEXT,
    post TEXT,
    date DATE
);