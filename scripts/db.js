let foods = [
  {
    name: "Italienisch",
    src: "../assets/img/Italienisch/pizza-margherita.jpg",
    dishes: [
      {
        name: "Pizza Margherita",
        description:
          "Klassische Pizza mit frischem Mozzarella, Tomatensauce und Basilikum.",
        price: "8.99",
        count: 1,
        imgSource: "pizza-margherita.jpg",
      },
      {
        name: "Pizza Salami",
        description:
          "Knusprige Pizza mit Tomatensauce, Mozzarella und würziger Salami.",
        price: "9.99",
        count: 1,
        imgSource: "pizza-salami.jpg",
      },
      {
        name: "Pizza Hawai",
        description:
          "Pizza mit Schinken, Ananas und Tomatensauce, überbacken mit Mozzarella.",
        price: "10.99",
        count: 1,
        imgSource: "pizza-hawaii.jpg",
      },
      {
        name: "Pasta Carbonara",
        description: "Pasta in cremiger Soße mit Speck und Parmesan.",
        price: "12.99",
        count: 1,
        imgSource: "pasta-carbonara.jpg",
      },
      {
        name: "Pasta Bolognese",
        description:
          "Pasta mit traditioneller Bolognese-Sauce aus Rinderhack und Tomaten.",
        price: "11.99",
        count: 1,
        imgSource: "pasta-bolognese.jpg",
      },
    ],
  },
  {
    name: "Amerikanisch",
    src: "../assets/img/Amerikanisch/chicken-wings.jpg",
    dishes: [
      {
        name: "Hamburger",
        description:
          "Klassischer Hamburger mit saftigem Rindfleisch-Patty, Salat und Tomate.",
        price: "7.99",
        count: 1,
        imgSource: "hamburger.jpg",
      },
      {
        name: "Cheeseburger",
        description:
          "Hamburger mit geschmolzenem Käse, Rindfleisch-Patty, Salat und Tomate.",
        price: "8.99",
        count: 1,
        imgSource: "cheeseburger.jpg",
      },
      {
        name: "Chicken Wings",
        description:
          "Knusprige Chicken Wings, serviert mit einer würzigen BBQ-Sauce.",
        price: "6.99",
        count: 1,
        imgSource: "chicken-wings.jpg",
      },
      {
        name: "Mac n Cheese",
        description: "Cremige Makkaroni in einer reichhaltigen Käsesoße.",
        price: "5.99",
        count: 1,
        imgSource: "mac-n-cheese.jpg",
      },
      {
        name: "Pulled Pork",
        description: "Zartes, langsam gegartes Schweinefleisch in BBQ-Sauce.",
        price: "9.99",
        count: 1,
        imgSource: "pulled-pork.jpg",
      },
    ],
  },
  {
    name: "Asiatisch",
    src: "../assets/img/Asiatisch/sushiplatte.jpg",
    dishes: [
      {
        name: "Rotes Thai Curry",
        description: "Würziges rotes Curry mit Kokosmilch und Gemüse.",
        price: "11.99",
        count: 1,
        imgSource: "rotes-thai-curry.jpg",
      },
      {
        name: "Bratnudeln",
        description: "Gebratene Nudeln mit Gemüse und einer leichten Sojasoße.",
        price: "7.99",
        count: 1,
        imgSource: "bratnudeln.jpg",
      },
      {
        name: "Sushiplatte",
        description:
          "Verschiedene Sushi-Variationen mit frischem Fisch und Reis.",
        price: "14.99",
        count: 1,
        imgSource: "sushiplatte.jpg",
      },
      {
        name: "Ramen",
        description:
          "Herzhafte Nudelsuppe mit Gemüse, Ei und einer würzigen Brühe.",
        price: "12.99",
        count: 1,
        imgSource: "ramen.jpg",
      },
      {
        name: "Frühlingsrollen",
        description:
          "Knusprige Frühlingsrollen, gefüllt mit Gemüse und Glasnudeln.",
        price: "5.99",
        count: 1,
        imgSource: "fruehlingsrollen.jpg",
      },
    ],
  },
  {
    name: "Beilagen",
    src: "../assets/img/beilagen/suesskartoffelpommes.jpg",
    dishes: [
      {
        name: "Bruschetta",
        description: "Knuspriges Brot mit Tomaten, Basilikum und Olivenöl.",
        price: "4.99",
        count: 1,
        imgSource: "bruschetta.jpg",
      },
      {
        name: "Pommes",
        description: "Knusprige Pommes Frites, perfekt als Beilage.",
        price: "3.99",
        count: 1,
        imgSource: "pommes.jpg",
      },
      {
        name: "Süßkartoffelpommes",
        description: "Knusprige Süßkartoffelpommes mit einem Hauch von Süße.",
        price: "4.99",
        count: 1,
        imgSource: "suesskartoffelpommes.jpg",
      },
      {
        name: "Chili Cheese Nuggets",
        description: "Würzige Nuggets mit Chili und Käsefüllung.",
        price: "5.99",
        count: 1,
        imgSource: "chili-cheese-nuggets.jpg",
      },
      {
        name: "Wakame",
        description: "Leichter Algensalat mit Sesam und Sojasoße.",
        price: "6.99",
        count: 1,
        imgSource: "wakame.jpg",
      },
    ],
  },
  {
    name: "Deserts",
    src: "../assets/img/deserts/brownies.jpg",
    dishes: [
      {
        name: "Panna Cotta",
        description: "Cremiges Dessert aus Sahne mit einem Hauch von Vanille.",
        price: "4.99",
        count: 1,
        imgSource: "panna-cotta.jpg",
      },
      {
        name: "Tiramisu",
        description:
          "Klassisches Italienisches Dessert mit Mascarpone und Espresso.",
        price: "5.99",
        count: 1,
        imgSource: "tiramisu.jpg",
      },
      {
        name: "Brownies",
        description: "Saftige Schokoladenbrownies mit knackiger Kruste.",
        price: "3.99",
        count: 1,
        imgSource: "brownies.jpg",
      },
      {
        name: "Churros",
        description: "Frittierte Teigstangen, serviert mit Zimt und Zucker.",
        price: "4.99",
        count: 1,
        imgSource: "churros.jpg",
      },
      {
        name: "Donuts",
        description: "Fluffige Donuts mit einer süßen Glasur.",
        price: "2.99",
        count: 1,
        imgSource: "donuts.jpg",
      },
      {
        name: "Mochi",
        description: "Weiche Reisküchlein mit süßer Füllung.",
        price: "5.99",
        count: 1,
        imgSource: "mochi.jpg",
      },
    ],
  },
];
