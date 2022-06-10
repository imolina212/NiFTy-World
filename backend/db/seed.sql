\c nifty_world_dev;

INSERT INTO categories (name) VALUES
('NFT'),
('Cryptocurrency'),
('Finances: Money Matters!');

INSERT INTO lessons (lesson_title, videos_url, reading_material, categories_id) VALUES
('What is an NFT?', '/videos/nftvideo.mp4', 'An NFT is a non-fungible token', 1),
('What is fungibility?', 'opensea.com', 'Fungibility is the ability of a good or asset to be interchanged with other individual goods or assets of the same type.', 1),
('What are some examples of NFT?', 'opensea.com', 'Tweets, videos, digital art and even source code.', 1),
('Where can I show off my NFTs?', 'opensea.com', 'There are several ways to show off your newly purchased NFT, including digital enviroments such as the metaverse', 1),
('What is cryptocurrency?', 'Cryprocurrency.com', 'A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography.', 2),
('Where can I store my cryptocurrency?', 'https://cryptonews.com/guides/how-to-store-cryptocurrency-safely.htm', 'In order to store your cryptocurrency safely you will need to get a crypto wallet. There are four types of cryptocurrency wallets: paper, hardware, cloud, and online. Each have there own pros and cons like wallets always being connected to the internet (hot wallet) for quick and easy access but might not be the most secure option. On the other hand, if you went with an offline (cold wallet), its pros will be that its one of the more secure options while cons being its not the quickest option available so it might negatively affect those who buy and sell crypto very frequently so choose wisely!', 2),
('The History of BitCoin...', '/videos/BitcoinLesson.mp4', 'Bitcoin was created in 2008, by Satoshi Nakamoto.', 2),
('What is finance?', 'Finance.com' , 'The management of large amounts of money, especially by governments or large companies.', 3),
('What are assets and liabilities?', 'Finance.com', 'An asset is any resource or good used to create cash flow, reduce expenses, or provide future economic benefits for someone or business. Assets have economic value and can benefit a company’s operations, increase the value of a business, or raise your net worth!', 3),
('What is net worth?', 'Finance.com', 'Your net worth is the amount of assets you currently have minus the amount of liabilities you currently own. It is a great way to measure where your overall finances are at to allow yourself to better manage your money.', 3),
('What is debit and credit?', 'Finance.com' , 'A debit purchase is when you have the money for an item that you want and pay for it, a credit purchase is when you recive the item and promise to pay for it at a leter time.', 3);

INSERT INTO questions ( question_text, answer, wrong_answer, lessons_id) VALUES
('What is a NFT?', 'An NFT is a non-fungible token', 'NFT is a toy', 1),
('What is fungibility?', 'Fungibility is the ability of a good or asset to be interchanged with other individual goods or assets of the same type.', 'Fungibility is the ability to manage how many toys you have.', 1),
('What are some examples of NFT?', 'Tweets, videos, digital art and even source code.', 'A quarter, dime, and a nickle.', 1),
('Where can I show off my NFTS?', 'There are several ways to show off your newly purchased NFT, including digital enviroments such as the metaverse', 'I can show off my NFTs on Amazon', 1),
('What is Crypto?', 'A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography.', 'A $20 bill', 2),
('How many type of cryptocurrency wallets are there?', 'Four', 'One', 2),
('Who created Bitcoin?', 'Bitcoin was created by Satoshi Nakamoto', 'Bitcoin was created by Eric Cave', 2),
-- ('Where does crypto live?', 'Crypto lives on the blockchain', 2),
-- ('What is savings?', 'Savings is the ability to compound money', 3),
('What is a Finance?', 'Finance is the management of large amounts of money.', 'Finance is a way to go swimming.', 3),
('What is an asset', 'An asset is any resource or good used to create cash flow.', 'An asset is a good that is guranteed to lose value over time.', 3),
('What is net worth?', 'Your net worth is the amount of assets you currently have minus the amount of liabilities you currently own.', 'Net worth is how much you make in a year.', 3),
('What is a debit purchase?', 'When you purchase something when you actually have the money for it', 'A purchase that you have to pay back', 3);

INSERT INTO comments (name, post, date) VALUES
('Shawnee', 'I need some cryto, gimme some now!!', '2022-05-17'),
('Taylor', 'I like bacon!', '2022-05-18')