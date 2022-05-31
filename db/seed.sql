\c nifty_world_dev;

INSERT INTO categories (name) VALUES
('NFT'),
('Cryptocurrency'),
('Finances: Money Matters!');

INSERT INTO lessons (lesson_title, videos, reading_material, categories_id) VALUES
("What is an NFT?", "opensea.com", "An NFT is a non-fungible token", 1),
("What is fungibility?", "opensea.com", "Fungibility is the ability of a good or asset to be interchanged with other individual goods or assets of the same type.", 1),
("What are some examples of NFT?", "opensea.com", "Tweets, videos, digital art and even source code.", 1),
("Where can I show off my NFT?", "opensea.com", "NFTs can be shown off almost anywhere a user chooses in the digital metaverse", 1),
("What is cryptocurrency?", "Cryprocurrency.com", "A digital currency in which transactions are verified and records maintained by a decentralized system using cryptography.", 2),
("Where can I store my cryptocurrency?", "https://cryptonews.com/guides/how-to-store-cryptocurrency-safely.htm", "In order to store your cryptocurrency safely you will need to get a crypto wallet. There are four types of cryptocurrency wallets: paper, hardware, cloud, and online. Each have there own pros and cons like wallets always being connected to the internet ('hot' wallet) for quick and easy access but might not be the most secure option. On the other hand, if you went with an offline ('cold' wallet), its pros will be that its one of the more secure options while cons being its not the quickest option available so it might negatively affect those who buy and sell crypto very frequently so choose wisely!", 2),
("The History of BitCoin...", "https://app.animaker.com/animo/47af48uXkeWkaApu/", "Bitcoin was created in 2008, by Satoshi Nakamoto.", 2),
("What is finance?", "Finance.com" , "The management of large amounts of money, especially by governments or large companies.", 3),
("What are assets and liabilities?", "Finance.com", "An asset is any resource or good used to create cash flow, reduce expenses, or provide future economic benefits for someone or business. Assets have economic value and can benefit a company’s operations, increase the value of a business, or raise your net worth!", 3),
("What is net worth?", "Finance.com", "Your net worth is the amount of assets you currently have minus the amount of liabilities you currently own. It's a great way to measure where your overall finances are at to allow yourself to better manage your money.", 3),
("What are debits and credits", "https://app.animaker.com/animo/KVTvmpmZrgWpnaNf/" , "A debit is when you use the money you currently have to purchase something. A credit purchase is when you are given the item you want but promise to pay it back at a later time.", 3);

INSERT INTO questions ( question_text, answer, lessons_id) VALUES
('What is a NFT?', 'An NFT is a non-fungible token', 1),
('What is a NFT Marketplace?', 'An NFT Marketplace is a platform where you can buy, sell or auction NFTs', 1),
('What is a Crypto?', 'An NFT is a non-fungible token', 2),
('What is a Finance?', 'An NFT is a non-fungible token', 3);

INSERT INTO comments (name, post, date) VALUES
('Shawnee', 'I need some cryto, gimme some now!!', '2022-05-17'),
('Taylor', 'I like bacon!', '2022-05-18')
