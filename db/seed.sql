\c nifty_world_dev;

INSERT INTO categories (name) VALUES
('NFT'),
('Cryptocurrency'),
('Finances: Money Matters!');

INSERT INTO lessons (lesson_title, videos, reading_material, categories_id) VALUES
('What is an NFT?', 'opensea.com', 'An NFT is a non-fungible token', 1),
('What is fungibility?', 'opensea.com', 'Fungibility is the ability of a good or asset to be interchanged with other individual goods or assets of the same type.', 1),
('What are some examples of NFT?', 'opensea.com', 'Tweets, videos, digital art and even source code.', 1),
('What is cryptocurrency?', 'Cryprocurrency.com', 'A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography.', 2),
('What is finance?', 'Finance.com', 'The management of large amounts of money, especially by governments or large companies.', 3);

INSERT INTO questions ( question_text, answer, lessons_id) VALUES
('What is a NFT?', 'An NFT is a non-fungible token', 1),
('What is a NFT Marketplace?', 'An NFT Marketplace is a platform where you can buy, sell or auction NFTs', 1),
('What is a Crypto?', 'An NFT is a non-fungible token', 2),
('What is a Finance?', 'An NFT is a non-fungible token', 3);

INSERT INTO comments (name, post, date) VALUES
('Shawnee', 'I need some cryto, gimme some now!!', '2022-05-17'),
('Taylor', 'I like bacon!', '2022-05-18')
