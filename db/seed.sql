\c nifty_world_dev;

INSERT INTO categories (name) VALUES
('NFT'),
('Cryptocurrency'),
('Finances: Money Matters!');

INSERT INTO lessons (lesson_title, videos, reading_material) VALUES
('NFT', 'opensea.com', 'An NFT is a non-fungible token');
('Cryptocurrency', 'coinbase.com', 'Unlike NFTs, Physical money and cryptocurrencies are “fungible,” meaning they can be traded or exchanged for one another. They are also equal in value—one dollar is always worth another dollar; one Bitcoin is always equal to another Bitcoin. ');

INSERT INTO questions ( question_text, answer) VALUES
('What is a NFT?', 'An NFT is a non-fungible token'),
('What is Cryptocurrency?', '
A cryptocurrency is an encrypted data string that denotes a unit of currency. It is monitored and organized by a peer-to-peer network called a blockchain, which also serves as a secure ledger of transactions, e.g., buying, selling, and transferring.');

INSERT INTO comments (name, post, date) VALUES
('Shawnee', 'I need some cryto, gimme some now!!', '2022-05-17'),
('Taylor', 'I like bacon!', '2022-05-18')