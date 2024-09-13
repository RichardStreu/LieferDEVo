let foods = [
  {
    name: "Italienisch",
    src: "./assets/img/Italienisch/pizza-margherita.jpg",
    dishes: [
      {
        name: "Pizza Margherita",
        dataKey: "ital-pizMar",
        description:
          "Klassische Pizza mit frischem Mozzarella, Tomatensauce und Basilikum.",
        price: "8.99",
        count: 1,
        imgSource: "./assets/img/Italienisch/pizza-margherita.jpg",
      },
      {
        name: "Pizza Salami",
        dataKey: "ital-pizSal",
        description:
          "Knusprige Pizza mit Tomatensauce, Mozzarella und würziger Salami.",
        price: "9.99",
        count: 1,
        imgSource: "./assets/img/Italienisch/pizza-salami.jpg",
      },
      {
        name: "Pizza Hawai",
        dataKey: "ital-pizHaw",
        description:
          "Pizza mit Schinken, Ananas und Tomatensauce, überbacken mit Mozzarella.",
        price: "10.99",
        count: 1,
        imgSource: "./assets/img/Italienisch/pizza-hawaii.jpg",
      },
      {
        name: "Pasta Carbonara",
        dataKey: "ital-pasCar",
        description: "Pasta in cremiger Soße mit Speck und Parmesan.",
        price: "12.99",
        count: 1,
        imgSource: "./assets/img/Italienisch/pasta-carbonara.jpg",
      },
      {
        name: "Pasta Bolognese",
        dataKey: "ital-pasBol",
        description:
          "Pasta mit traditioneller Bolognese-Sauce aus Rinderhack und Tomaten.",
        price: "11.99",
        count: 1,
        imgSource: "./assets/img/Italienisch/pasta-bolognese.jpg",
      },
    ],
  },
  {
    name: "Amerikanisch",
    src: "./assets/img/Amerikanisch/chicken-wings.jpg",
    dishes: [
      {
        name: "Hamburger",
        dataKey: "amer-hamBur",
        description:
          "Klassischer Hamburger mit saftigem Rindfleisch-Patty, Salat und Tomate.",
        price: "7.99",
        count: 1,
        imgSource: "./assets/img/Amerikanisch/hamburger.jpg",
      },
      {
        name: "Cheeseburger",
        dataKey: "amer-cheBur",
        description:
          "Hamburger mit geschmolzenem Käse, Rindfleisch-Patty, Salat und Tomate.",
        price: "8.99",
        count: 1,
        imgSource: "./assets/img/Amerikanisch/cheeseburger.jpg",
      },
      {
        name: "Chicken Wings",
        dataKey: "amer-chiWin",
        description:
          "Knusprige Chicken Wings, serviert mit einer würzigen BBQ-Sauce.",
        price: "6.99",
        count: 1,
        imgSource: "./assets/img/Amerikanisch/chicken-wings.jpg",
      },
      {
        name: "Mac n Cheese",
        dataKey: "amer-mcNChe",
        description: "Cremige Makkaroni in einer reichhaltigen Käsesoße.",
        price: "5.99",
        count: 1,
        imgSource: "./assets/img/Amerikanisch/mac-n-cheese.jpg",
      },
      {
        name: "Pulled Pork",
        dataKey: "amer-pulPor",
        description: "Zartes, langsam gegartes Schweinefleisch in BBQ-Sauce.",
        price: "9.99",
        count: 1,
        imgSource: "./assets/img/Amerikanisch/pulled-pork.jpg",
      },
    ],
  },
  {
    name: "Asiatisch",
    src: "./assets/img/Asiatisch/sushiplatte.jpg",
    dishes: [
      {
        name: "Rotes Thai Curry",
        dataKey: "asia-roThCu",
        description: "Würziges rotes Curry mit Kokosmilch und Gemüse.",
        price: "11.99",
        count: 1,
        imgSource: "./assets/img/Asiatisch/rotes-thai-curry.jpg",
      },
      {
        name: "Bratnudeln",
        dataKey: "asia-braNud",
        description: "Gebratene Nudeln mit Gemüse und einer leichten Sojasoße.",
        price: "7.99",
        count: 1,
        imgSource: "./assets/img/Asiatisch/bratnudeln.jpg",
      },
      {
        name: "Sushiplatte",
        dataKey: "asia-sushiP",
        description:
          "Verschiedene Sushi-Variationen mit frischem Fisch und Reis.",
        price: "14.99",
        count: 1,
        imgSource: "./assets/img/Asiatisch/sushiplatte.jpg",
      },
      {
        name: "Ramen",
        dataKey: "asia-ramen",
        description:
          "Herzhafte Nudelsuppe mit Gemüse, Ei und einer würzigen Brühe.",
        price: "12.99",
        count: 1,
        imgSource: "./assets/img/Asiatisch/ramen.jpg",
      },
      {
        name: "Frühlingsrollen",
        dataKey: "asia-frRoll",
        description:
          "Knusprige Frühlingsrollen, gefüllt mit Gemüse und Glasnudeln.",
        price: "5.99",
        count: 1,
        imgSource: "./assets/img/Asiatisch/fruehlingsrollen.jpg",
      },
    ],
  },
  {
    name: "Beilagen",
    src: "./assets/img/beilagen/suesskartoffelpommes.jpg",
    dishes: [
      {
        name: "Bruschetta",
        dataKey: "beil-brusch",
        description: "Knuspriges Brot mit Tomaten, Basilikum und Olivenöl.",
        price: "4.99",
        count: 1,
        imgSource: "./assets/img/beilagen/bruschetta.jpg",
      },
      {
        name: "Pommes",
        dataKey: "beil-pommes",
        description: "Knusprige Pommes Frites, perfekt als Beilage.",
        price: "3.99",
        count: 1,
        imgSource: "./assets/img/beilagen/pommes.jpg",
      },
      {
        name: "Süßkartoffelpommes",
        dataKey: "beil-suePom",
        description: "Knusprige Süßkartoffelpommes mit einem Hauch von Süße.",
        price: "4.99",
        count: 1,
        imgSource: "./assets/img/beilagen/suesskartoffelpommes.jpg",
      },
      {
        name: "Chili Cheese Nuggets",
        dataKey: "beil-cCheNug",
        description: "Würzige Nuggets mit Chili und Käsefüllung.",
        price: "5.99",
        count: 1,
        imgSource: "./assets/img/beilagen/chili-cheese-nuggets.jpg",
      },
      {
        name: "Wakame",
        dataKey: "beil-wakame",
        description: "Leichter Algensalat mit Sesam und Sojasoße.",
        price: "6.99",
        count: 1,
        imgSource: "./assets/img/beilagen/wakame.jpg",
      },
    ],
  },
  {
    name: "Deserts",
    src: "./assets/img/deserts/brownies.jpg",
    dishes: [
      {
        name: "Panna Cotta",
        dataKey: "dese-panCot",
        description: "Cremiges Dessert aus Sahne mit einem Hauch von Vanille.",
        price: "4.99",
        count: 1,
        imgSource: "./assets/img/deserts/panna-cotta.jpg",
      },
      {
        name: "Tiramisu",
        dataKey: "dese-tirami",
        description:
          "Klassisches Italienisches Dessert mit Mascarpone und Espresso.",
        price: "5.99",
        count: 1,
        imgSource: "./assets/img/deserts/tiramisu.jpg",
      },
      {
        name: "Brownies",
        dataKey: "dese-browni",
        description: "Saftige Schokoladenbrownies mit knackiger Kruste.",
        price: "3.99",
        count: 1,
        imgSource: "./assets/img/deserts/brownies.jpg",
      },
      {
        name: "Churros",
        dataKey: "dese-churro",
        description: "Frittierte Teigstangen, serviert mit Zimt und Zucker.",
        price: "4.99",
        count: 1,
        imgSource: "./assets/img/deserts/churros.jpg",
      },
      {
        name: "Donuts",
        dataKey: "dese-donut",
        description: "Fluffige Donuts mit einer süßen Glasur.",
        price: "2.99",
        count: 1,
        imgSource: "./assets/img/deserts/donuts.jpg",
      },
      {
        name: "Mochi",
        dataKey: "dese-mochi",
        description: "Weiche Reisküchlein mit süßer Füllung.",
        price: "5.99",
        count: 1,
        imgSource: "./assets/img/deserts/mochi.jpg",
      },
    ],
  },
];

let basket = {
  deliveryCosts: 5.8,
  isDeliverySelected: true,
  discount: 5,
  subTotalAmount: 0.0,
  totalAmount: 0.0,
  dishes: [],
};
