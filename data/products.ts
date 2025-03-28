import { v4 as uuidv4 } from "uuid";
export interface ProductType {
  id: string;
  name: string;
  category: string;
  price: string;
  img: string;
  description: string;
  reviews?: number;
  ratings?: number;
  additionalInfo: {
    weight?: string;
  };
}

export const products: ProductType[] = [
  // Biscuits
  {
    id: uuidv4(),
    name: "Bourbon",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Bourbon.png",
    description:
      "The Bourbon Biscuit is a sandwich style biscuit consisting of two thin oblong dark chocolate biscuits with sugar sprinkled top. The Biscuits has won the heart of every age of group people.",
    reviews: 0,
    additionalInfo: { weight: "216 g" },
  },
  {
    id: uuidv4(),
    name: "Butter Nutty Yellow",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Butter-Nutty.png",
    description:
      "We stand for good food and the good things it does for people – for you, for the farmer, for our kids… and their kids too. We don’t just bring you amazing foods, we do it at great prices. Food is a remarkable thing – it brings families together, supports communities. and gives farmers a means. It nourishes our bodies and brings joy to our tastebuds.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Chocolate Pop",
    category: "Biscuits",
    price: "15.00",
    img: "/images/products/biscuits/Choco-pop.png",
    description:
      "No matter what size, the choco pop is made primarily of sugar, water, corn syrup, and flavorings.",
    reviews: 0,
    additionalInfo: { weight: "50 g" },
  },
  {
    id: uuidv4(),
    name: "Cream Crackers",
    category: "Biscuits",
    price: "35.00",
    img: "/images/products/biscuits/Cream-Crackers.png",
    description:
      "It is a fermented dough biscuit with low sugar and fat content. It is suitable for diabetic and high cholesterol people. the Sugar Free Cream Crackers are tasty and crunchy, the perfect treat for special occasions. Sugar Free Cream Crackers Biscuit is a fermented dough biscuit with low sugar and fat content.",
    reviews: 0,
    additionalInfo: { weight: "125 g" },
  },
  {
    id: uuidv4(),
    name: "Crunch",
    category: "Biscuits",
    price: "5.00",
    img: "/images/products/biscuits/Crunch.png",
    description: "Flavored Wafer biscuit with captivating taste and crunch.",
    reviews: 0,
    additionalInfo: { weight: "10 g" },
  },
  {
    id: uuidv4(),
    name: "Dark Chocolate Digestive",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Dark-Choco-Digestive.png",
    description:
      "Dark Chocolate Digestive Biscuits has won the heart of every age of group people. · By enrobing one side of the digestive biscuit with chocolate.",
    reviews: 0,
    additionalInfo: { weight: "125 g" },
  },
  {
    id: uuidv4(),
    name: "Fruit Moza",
    category: "Biscuits",
    price: "10.00",
    img: "/images/products/biscuits/Fruit-moza.png",
    description:
      "Fruity Moza is every sweet bite on the biscuits, you will feel the delicious taste.",
    reviews: 0,
    additionalInfo: { weight: "48 g" },
  },
  {
    id: uuidv4(),
    name: "Fruity Cream",
    category: "Biscuits",
    price: "10.00",
    img: "/images/products/biscuits/Fruity-Cream.png",
    description:
      "It is a simple mixture of cream and yogurt that is loaded with fresh fruits and nuts. It is an instant dessert.",
    reviews: 0,
    additionalInfo: { weight: "48 g" },
  },
  {
    id: uuidv4(),
    name: "Gem Biscuit White",
    category: "Biscuits",
    price: "30.00",
    img: "/images/products/biscuits/Gem-Biscuit-white.png",
    description:
      "Gem Biscuit is a one bite biscuit that tastes delicious! The sweetness is very mild thus suitable for kids and adults both.",
    reviews: 0,
    additionalInfo: { weight: "150 g" },
  },
  {
    id: uuidv4(),
    name: "Glucose Biscuit",
    category: "Biscuits",
    price: "5.00",
    img: "/images/products/biscuits/Glucose-Buscuit.png",
    description:
      "Glucose represents from the house of Haque. This type of biscuits is very good not only for instant energy gaining after sports or exercises.",
    reviews: 0,
    additionalInfo: { weight: "27 g" },
  },
  {
    id: uuidv4(),
    name: "Haque-G",
    category: "Biscuits",
    price: "2.00",
    img: "/images/products/biscuits/Haque-G.png",
    description:
      "Haque-G biscuit the sweetness is very mild thus suitable for kids and adults both.",
    reviews: 0,
    additionalInfo: { weight: "11 g" },
  },
  {
    id: uuidv4(),
    name: "Honey Bite",
    category: "Biscuits",
    price: "15.00",
    img: "/images/products/biscuits/Honey-Bite.png",
    description:
      "Honey bites are made from canned biscuits and finished with a honey-butter glaze. These compete with glazed doughnut holes for a special treat.",
    reviews: 0,
    additionalInfo: { weight: "85 g" },
  },
  {
    id: uuidv4(),
    name: "Lemon Chocolate Biscuit",
    category: "Biscuits",
    price: "5.00",
    img: "/images/products/biscuits/Lemon-Chocolate-biscuit.png",
    description:
      "The Ingredients For Chocolate Lemon Cookies. Lemon zest and fresh lemon juice– for the lemon flavor; Cornstarch– for softness and delicious.",
    reviews: 0,
    additionalInfo: { weight: "18 g" },
  },
  {
    id: uuidv4(),
    name: "Lemon Puff",
    category: "Biscuits",
    price: "35.00",
    img: "/images/products/biscuits/Lemon-Puff.png",
    description:
      "These melt in your mouth, Lemon Puff are tasty, sweet and crunchy, the perfect treat for special occasions.",
    reviews: 0,
    additionalInfo: { weight: "150 g" },
  },
  {
    id: uuidv4(),
    name: "Lexus",
    category: "Biscuits",
    price: "15.00",
    img: "/images/products/biscuits/Lexus.png",
    description:
      "Lexus Vegetable crackers is smooth nutritious crackers that is enriched with vegetable flakes. With high fiber it ensures healthy snacks which boost up immune.",
    reviews: 0,
    additionalInfo: { weight: "58 g" },
  },
  {
    id: uuidv4(),
    name: "Milk Marie",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Milk-Marie.png",
    description:
      "Delicious biscuits, Milk Marie biscuits are so tasty, sweet and yummy, the perfect treat for any occasion.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Coconut",
    category: "Biscuits",
    price: "10.00",
    img: "/images/products/biscuits/Mr.-Coconut.png",
    description:
      "Mr. Coconut is a crispy & tasty sugar glazed biscuit with coconut-flex.",
    reviews: 0,
    additionalInfo: { weight: "58 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Cookie",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Mr.-Cookie.png",
    description:
      "Mr. Cookie is a crispy & tasty sugar glazed biscuit with coconut-flex.",
    reviews: 0,
    additionalInfo: { weight: "220 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Cookie lite",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Mr.-Cookie-lite.png",
    description:
      "Mr. Cookie lite is a deliciously crunchy crispy & tasty sugar glazed biscuit with coconut-flex.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Energy",
    category: "Biscuits",
    price: "40.00",
    img: "/images/products/biscuits/Mr.-Energy.png",
    description:
      "Mr. Energy Biscuit is a short dough biscuit with the power of liquid glucose which ensures prompt energy gain of the body.",
    reviews: 0,
    additionalInfo: { weight: "240 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Ginger Cookies",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Mr.-Ginger-Cookies.png",
    description: "These cookies are not too sweet with subtle hints of ginger.",
    reviews: 0,
    additionalInfo: { weight: "230 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Milk",
    category: "Biscuits",
    price: "35.00",
    img: "/images/products/biscuits/Mr.-Milk.png",
    description:
      "Our milk is free from preservatives and additives. Similarly, we don’t give our cows any growth hormones, ensuring pure milk, without any chemicals.",
    reviews: 0,
    additionalInfo: { weight: "175 g" },
  },
  {
    id: uuidv4(),
    name: "Orange Energy",
    category: "Biscuits",
    price: "2.00",
    img: "/images/products/biscuits/Orange-Energy.png",
    description: "",
    reviews: 0,
    additionalInfo: { weight: "3 g" },
  },
  {
    id: uuidv4(),
    name: "Salty Star",
    category: "Biscuits",
    price: "60.00",
    img: "/images/products/biscuits/Salty-star.png",
    description:
      "Haque Salty Star biscuit gives you the salty delight which you can’t stop eating.",
    reviews: 0,
    additionalInfo: { weight: "320 g" },
  },
  {
    id: uuidv4(),
    name: "Sor Malai",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/Sor-Malai.png",
    description:
      "Sor Malai is the biscuit with full of real taste of milk. One family pack of Sor Malai fulfill the milk nutrition requirement of a full family.",
    reviews: 0,
    additionalInfo: { weight: "210 g" },
  },
  {
    id: uuidv4(),
    name: "Vitamin Plus Biscuit",
    category: "Biscuits",
    price: "10.00",
    img: "/images/products/biscuits/Vitamin-Plus-Biscuit.png",
    description:
      "Vitamin Plus Biscuit is a short dough biscuit with the power of liquid glucose which ensures prompt energy gain of the body.",
    reviews: 0,
    additionalInfo: { weight: "58 g" },
  },
  {
    id: uuidv4(),
    name: "White Chocolate Digestive Biscuit",
    category: "Biscuits",
    price: "50.00",
    img: "/images/products/biscuits/White-Choco-Digestive-biscuit.png",
    description:
      "Chocolate Digestive Biscuits has won the heart of every Boys & Girls of group people. By enrobing one side of the digestive biscuit with chocolate.",
    reviews: 0,
    additionalInfo: { weight: "125 g" },
  },

  // Snacks
  {
    id: uuidv4(),
    name: "Jhal Chanachur",
    category: "Snacks",
    price: "80.00",
    img: "",
    description:
      "This crispy delight is the perfect combination of various tastes. Its bit sour, bit hot & spicy – all the tastes, perfectly blended together to give it a very mystic flavour of its own.",
    reviews: 0,
    additionalInfo: { weight: "300 g" },
  },
  {
    id: uuidv4(),
    name: "Motor Vaja",
    category: "Snacks",
    price: "5.00",
    img: "/images/products/snacks/Motor-Vaja.png",
    description:
      "Made from the fresh peas from farm best quality fried peas. Its bit sour, bit hot & spicy – all the tastes, perfectly blended together to give it a very mystic flavour of its own.",
    reviews: 0,
    additionalInfo: { weight: "15 g" },
  },
  {
    id: uuidv4(),
    name: "Mukhorochok Jhal Chanachur",
    category: "Snacks",
    price: "80.00",
    img: "/images/products/snacks/M-Jhal-Chanachur.png",
    description:
      "This crispy delight is the perfect combination of various tastes. Its bit sour, bit hot & spicy – all the tastes, perfectly blended together to give it a very mystic flavour of its own.",
    reviews: 0,
    additionalInfo: { weight: "300 g" },
  },
  {
    id: uuidv4(),
    name: "Mukhorochok Jhal Motor vaja",
    category: "Snacks",
    price: "5.00",
    img: "/images/products/snacks/Jhal-Motor-Vaja.png",
    description:
      "Made from the fresh peas from farm best quality fried peas. Its bit sour, bit hot & spicy – all the tastes, perfectly blended together to give it a very mystic flavour of its own.",
    reviews: 0,
    additionalInfo: { weight: "15 g" },
  },
  {
    id: uuidv4(),
    name: "NicNac",
    category: "Snacks",
    price: "15.00",
    img: "/images/products/snacks/NicNac.png",
    description:
      "The standard bars consist of two or four pieces composed of three layers of wafer, separated and covered by an outer layer of chocolate. Each finger can be snapped from the bar separately. There are many flavours of Nic Nac, including milk, white, and dark chocolate.",
    reviews: 0,
    additionalInfo: { weight: "18 g" },
  },
  {
    id: uuidv4(),
    name: "Pillow Chocolate Chipes",
    category: "Snacks",
    price: "10.00",
    img: "/images/products/snacks/Pillow-Chocolate-Chips.png",
    description:
      "Pillow Chocolate Chips made from 100% flour. Very crispy, tasty and healthy.",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },
  {
    id: uuidv4(),
    name: "Pingo",
    category: "Snacks",
    price: "10.00",
    img: "/images/products/snacks/Pingo.png",
    description:
      "Pingo Chips is a most one of the tastes delicious for young & children generation.",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },
  {
    id: uuidv4(),
    name: "Potato Chips",
    category: "Snacks",
    price: "10.00",
    img: "/images/products/snacks/Potato-Chips.png",
    description:
      "Potatoes are rich in minerals, vitamins and carbohydrates which have a number of positive health effects.",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },
  {
    id: uuidv4(),
    name: "Potato Crackers",
    category: "Snacks",
    price: "10.00",
    img: "/images/products/snacks/Potato-Crackers.png",
    description:
      "The crackers tasted great, as the wasabi mixed well with the potato-based crackers, and I just about couldn’t stop eating them excellent.",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },
  {
    id: uuidv4(),
    name: "Tarzan Jane",
    category: "Snacks",
    price: "10.00",
    img: "/images/products/snacks/Tarzan-Jane.png",
    description:
      "Tarzan & Jane is a Tomato flavored crispy stick chips. Similer Products. Mango & Mint Lentil Chips.",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },
  {
    id: uuidv4(),
    name: "Tok Jhal Misty Chanachur",
    category: "Snacks",
    price: "80.00",
    img: "/images/products/snacks/Tok-Jhal-Misty-Chanachur.png",
    description:
      "This crispy delight is the perfect combination of various tastes. Its bit sweet, bit sour, bit hot & spicy – all the tastes, perfectly blended together to give it a very mystic flavour of its own.",
    reviews: 0,
    additionalInfo: { weight: "300 g" },
  },
  {
    id: uuidv4(),
    name: "Tom & Jerry Crackers",
    category: "Snacks",
    price: "10.00",
    img: "/images/products/snacks/Tom-Jerry-Crackers.png",
    description:
      "This is a Wasabi and Cheese seasoning based long shaped chips. The packaging is based on famous cartoon character Tom & Jerry.",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },

  // Cookies and Bakery
  {
    id: uuidv4(),
    name: "Bakery Toast",
    category: "Cookies_Bakery",
    price: "30.00",
    img: "/images/products/cookies/Bakery-Toast.png",
    description:
      "In Bangladesh rusk (or toast biscuit) is a traditional dried bread or cake. The need for nutritious, easy-to-store, easy-to-carry, and long-lasting foods on",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Dry Cake",
    category: "Cookies_Bakery",
    price: "10.00",
    img: "/images/products/cookies/Dry-cake.png",
    description:
      "Eggs are cracked by an automated machine and then mixed with other dry ingredients. Dan Cake sources the flour and eggs locally.",
    reviews: 0,
    additionalInfo: { weight: "32 g" },
  },
  {
    id: uuidv4(),
    name: "Kheer Malai",
    category: "Cookies_Bakery",
    price: "50.00",
    img: "/images/products/cookies/Kheer-Malai.png",
    description:
      "Kheer Malai is the biscuit with full of real taste of milk.One family pack of Kheer Malai fulfill the milk nutrition requirement of a full family. Perfect for morning and evening snacks and to take as gift for relatives and friends.",
    reviews: 0,
    additionalInfo: { weight: "210 g" },
  },
  {
    id: uuidv4(),
    name: "La'Butter",
    category: "Cookies_Bakery",
    price: "75.00",
    img: "/images/products/cookies/LaButter.png",
    description:
      "Premium Biscuit – La ‘Butter brings the taste of real butter. With each bite, the soft taste of real butter can compliment the customer.",
    reviews: 0,
    additionalInfo: { weight: "265 g" },
  },
  {
    id: uuidv4(),
    name: "Laccha Semai",
    category: "Cookies_Bakery",
    price: "40.00",
    img: "/images/products/cookies/Laccha-Semai.png",
    description:
      "Laccha Semai is a renowned Asian Food; very popular among the people of any classes. This special Semai is a delicious food item – has been consumed by people historically. In different occasions and family get together it is highly demanded by the people as a common dessert.",
    reviews: 0,
    additionalInfo: { weight: "180 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Checkers",
    category: "Cookies_Bakery",
    price: "60.00",
    img: "/images/products/cookies/Mr.-Checkers.png",
    description:
      "Mr. Checkers Cookies comes with a combination of Vanilla & Chocolate flavor. Its tasty and crunchy both.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Salty",
    category: "Cookies_Bakery",
    price: "50.00",
    img: "/images/products/cookies/Mr.-Salty.png",
    description:
      "The moment you take a bite your tongue starts finding cookies flex in lovely sugar-embedded crispy, puffy biscuit. The melting sugar and coconut will tempt you.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Priemium Toast",
    category: "Cookies_Bakery",
    price: "50.00",
    img: "/images/products/cookies/Premium-Toast.png",
    description:
      "Savoury snack consisting of tasty and thin cheese flavored potato chips, deliciously crunchy and crispy.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Special Toast",
    category: "Cookies_Bakery",
    price: "50.00",
    img: "/images/products/cookies/Special-Toast.png",
    description:
      "In Bangladesh rusk (or toast biscuit) is a traditional dried bread or cake. The need for nutritious, easy-to-store, easy-to-carry, and long-lasting foods on long journeys, in particular at sea, was initially solved by taking live food along with a butcher/cook. However, this took up additional space on what were either horse-powered treks or small ships, reducing the time of travel before additional food was required. This resulted in early armies’ adopting the style of hunter-foraging.",
    reviews: 0,
    additionalInfo: { weight: "250 g" },
  },
  {
    id: uuidv4(),
    name: "Super Bite Milk Egg Cookies",
    category: "Cookies_Bakery",
    price: "50.00",
    img: "/images/products/cookies/Super-Bite-Milk-Egg-Cookies.png",
    description:
      "Super Bite is the real egg, milk and butter enriched biscuit. With every sweet bite on the biscuits, you will feel the delicious taste of egg, butter and milk. It’s the newest member from the house of Mr. Cookie family. Perfect biscuit as morning and evening snacks or with tea and coffee.",
    reviews: 0,
    additionalInfo: { weight: "235 g" },
  },
  {
    id: uuidv4(),
    name: "Sweet Toast",
    category: "Cookies_Bakery",
    price: "5.00",
    img: "/images/products/cookies/Sweet-Toast.png",
    description:
      "In Bangladesh rusk (or toast biscuit) is a traditional dried bread or cake. The need for nutritious, easy-to-store, easy-to-carry, and long-lasting foods on",
    reviews: 0,
    additionalInfo: { weight: "20 g" },
  },

  // Chocolate & Wafer
  {
    id: uuidv4(),
    name: "Chili Mili Candy",
    category: "Chocolate_Wafer",
    price: "2.00",
    img: "/images/products/chocolates/Chili-Mili-Candy.png",
    description: "",
    reviews: 0,
    additionalInfo: { weight: "4 g" },
  },
  {
    id: uuidv4(),
    name: "Ding Dong",
    category: "Chocolate_Wafer",
    price: "5.00",
    img: "/images/products/chocolates/Ding-Dong.png",
    description:
      "Ding Dong wafer is a most one of the tastes delicious for like in children generation.",
    reviews: 0,
    additionalInfo: { weight: "15 g" },
  },
  {
    id: uuidv4(),
    name: "Ding Dong Roll Wafer",
    category: "Chocolate_Wafer",
    price: "5.00",
    img: "/images/products/chocolates/Ding-Dong-Roll-Wafer.png",
    description:
      "Ding Dong wafer is a most one of the tastes delicious for like in children generation.",
    reviews: 0,
    additionalInfo: { weight: "12 g" },
  },
  {
    id: uuidv4(),
    name: "Masala Mango Candy",
    category: "Chocolate_Wafer",
    price: "2.00",
    img: "/images/products/chocolates/Masalla-mango-candy.png",
    description:
      "A masala flavored candy is made of best quality raw mango collected directly from the local orchard and special masala.",
    reviews: 0,
    additionalInfo: { weight: "4 g" },
  },
  {
    id: uuidv4(),
    name: "Mr. Wafer",
    category: "Chocolate_Wafer",
    price: "5.00",
    img: "/images/products/chocolates/Mr.-Wafer.png",
    description:
      "Chocolate flavored cream wafer biscuit which is fresh and crispy.",
    reviews: 0,
    additionalInfo: { weight: "15 g" },
  },
  {
    id: uuidv4(),
    name: "Rolls Wafer",
    category: "Chocolate_Wafer",
    price: "5.00",
    img: "/images/products/chocolates/Rolls-Wafer.png",
    description:
      "Chocolate flavored Rolls wafer biscuit which is fresh and crispy.",
    reviews: 0,
    additionalInfo: { weight: "12 g" },
  },
  {
    id: uuidv4(),
    name: "Romancio Liquid Choco filled",
    category: "Chocolate_Wafer",
    price: "50.00",
    img: "/images/products/chocolates/Romancio-liquid-Choco-filled.png",
    description:
      "The Best Liquid Filled Chocolates Recipes on Yummly | Tempered Chocolate, Chocolate Affogato, Grilled Chocolate Chip Cookie Bacon S’mores.",
    reviews: 0,
    additionalInfo: { weight: "75 g" },
  },

  // Soaps
  {
    id: uuidv4(),
    name: "Antiseptic Soap",
    category: "Soaps",
    price: "10.00",
    img: "/images/products/soaps/Antiseptic-soap.png",
    description:
      "Antiseptic Soap is more effective than regular soap and water for killing disease-causing germs, according to the CDC .",
    reviews: 0,
    additionalInfo: { weight: "30 g" },
  },
  {
    id: uuidv4(),
    name: "Jasmine Soap",
    category: "Soaps",
    price: "10.00",
    img: "/images/products/soaps/Jesmine-Soap.png",
    description:
      "Jesmine have always been a symbol of beauty, its extracts can be used for all skin types. The fragrant flower helps to revive and replenish skin. The perfect soap for a scented bath.",
    reviews: 0,
    additionalInfo: { weight: "30 g" },
  },
  {
    id: uuidv4(),
    name: "Rose Soap",
    category: "Soaps",
    price: "10.00",
    img: "/images/products/soaps/Rose-Soap.png",
    description:
      "Roses have always been a symbol of beauty, its extracts can be used for all skin types. The fragrant flower helps to revive and replenish skin. The perfect soap for a scented bath.",
    reviews: 0,
    additionalInfo: { weight: "30 g" },
  },

  // Batteries
  {
    id: uuidv4(),
    name: "Haque Battery",
    category: "Batteries",
    price: "24.00",
    img: "/images/products/batteries/Haque-battery.png",
    description:
      "Haque Battery Pencil is most one of the bettary in Bangladesh people.",
    reviews: 0,
    additionalInfo: { weight: "1 g" },
  },
  {
    id: uuidv4(),
    name: "Imperial 786",
    category: "Batteries",
    price: "12.00",
    img: "/images/products/batteries/Imperial-786.png",
    description:
      "Haque Battery Imperial is most one of the bettary in Bangladesh people.",
    reviews: 0,
    additionalInfo: { weight: "" },
  },
  {
    id: uuidv4(),
    name: "Imperial battery",
    category: "Batteries",
    price: "24.00",
    img: "/images/products/batteries/Imperial-battery.png",
    description:
      "Haque Battery Imperial Pencil is most one of the bettary in Bangladesh people.",
    reviews: 0,
    additionalInfo: { weight: "1 g" },
  },
];
