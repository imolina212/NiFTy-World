\c nifty_world_dev;

INSERT INTO categories (name) VALUES
('NFT'),
('Cryptocurrency'),
('Finances: Money Matters!');

INSERT INTO lessons (lesson_title, videos, reading_material, categories_id) VALUES
('What is an NFT?', 'opensea.com', 'An NFT is a non-fungible token', 1),
('What is an NFT2?', 'opensea.com', 'An NFT is a non-fungible token', 1),
('What is an NFT3?', 'opensea.com', 'An NFT is a non-fungible token', 1),
('Crypto', 'Cryprocurrency.com', 'Crypto helps you buy toys', 2),
('Finance', 'Finance.com', 'Finance helps you buy toys', 3);

INSERT INTO questions ( question_text, answer, lessons_id) VALUES
('What is a NFT?', 'An NFT is a non-fungible token', 1),
('What is a NFT Marketplace?', 'An NFT Marketplace is a platform where you can buy, sell or auction NFTs', 1),
('What is a Crypto?', 'An NFT is a non-fungible token', 2),
('What is a Finance?', 'An NFT is a non-fungible token', 3);

INSERT INTO comments (name, post, date) VALUES
('Shawnee', 'I need some cryto, gimme some now!!', '2022-05-17'),
('Taylor', 'I like bacon!', '2022-05-18')
