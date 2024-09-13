// Check scroll positions --> add classLists

window.addEventListener("scroll", () => {
  if (window.scrollY > 792) {
    document
      .getElementById("foodHeaderNavbar")
      .classList.add("food-header-navbar-sticky");
  } else {
    document
      .getElementById("foodHeaderNavbar")
      .classList.remove("food-header-navbar-sticky");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 72) {
    document.getElementById("basketBox").classList.add("basket-box-fixed");
  } else {
    document.getElementById("basketBox").classList.remove("basket-box-fixed");
  }
});

// render functions

function renderFoodContentContainer() {
  let foodContentRef = document.getElementById("foodContent");
  foodContentRef.innerHTML = "";
  for (let catIndex = 0; catIndex < foods.length; catIndex++) {
    let dishesContainer = renderDishesContainer(catIndex);
    foodContentRef.innerHTML += getfoodContentContainerTemplate(
      catIndex,
      dishesContainer
    );
  }
}

function renderDishesContainer(catIndex) {
  let dishesContainer = "";
  for (
    let dishesIndex = 0;
    dishesIndex < foods[catIndex].dishes.length;
    dishesIndex++
  ) {
    dishesContainer += getDishesContainerTemplate(catIndex, dishesIndex);
  }
  return dishesContainer;
}

renderFoodContentContainer();
renderBasket();

function makeBasketLowerPartVisible() {
  if (basket.dishes.length == 0) {
    document.getElementById("respBasketBoxLower").classList.add("d-none");
    document.getElementById("respEmptyBasketDialog").classList.remove("d-none");
    document.getElementById("basketBoxLower").classList.add("d-none");
    document.getElementById("emptyBasketDialog").classList.remove("d-none");
  } else {
    document.getElementById("respBasketBoxLower").classList.remove("d-none");
    document.getElementById("respEmptyBasketDialog").classList.add("d-none");
    document.getElementById("basketBoxLower").classList.remove("d-none");
    document.getElementById("emptyBasketDialog").classList.add("d-none");
  }
}

function renderBasketDishes() {
  document.getElementById("basketBoxRenderContent").innerHTML = "";
  document.getElementById("respBasketBoxRenderContent").innerHTML = "";
  for (
    let basketDishesIndex = 0;
    basketDishesIndex < basket.dishes.length;
    basketDishesIndex++
  ) {
    let basketDish = getBasketDishesTemplate(basketDishesIndex);
    document.getElementById("basketBoxRenderContent").innerHTML += basketDish;
    document.getElementById("respBasketBoxRenderContent").innerHTML +=
      basketDish;
  }
}

function renderBasketLowerPart() {
  document.getElementById("basketBoxLower").innerHTML =
    getBasketLowerPartTemplate();
  document.getElementById("respBasketBoxLower").innerHTML =
    getBasketLowerPartTemplate();
}

function renderBasket() {
  makeBasketLowerPartVisible();
  renderBasketLowerPart();
  renderBasketDishes();
}

// functions to get total amounts of dishes in basket

function calculateSubTotalAmount() {
  let calculatedSubTotalAmount = 0;
  basket.dishes.forEach((element) => {
    calculatedSubTotalAmount += element.price * element.count;
  });
  return calculatedSubTotalAmount;
}

function calculateDiscount() {
  return (calculateSubTotalAmount() / 100) * -basket.discount;
}

function calculateTotalAmount() {
  let calculatedTotalAmount = 0;
  calculatedTotalAmount = calculateSubTotalAmount();
  if (basket.isDeliverySelected == true) {
    calculatedTotalAmount += basket.deliveryCosts;
  } else {
    calculatedTotalAmount += calculateDiscount();
  }
  return calculatedTotalAmount;
}

// functions de/increase dishes

function addDishesToBasket(catIndex, dishesIndex) {
  if (basket.dishes.includes(foods[catIndex].dishes[dishesIndex])) {
    let foodDish = foods[catIndex].dishes[dishesIndex];
    let dishInBasketIndex = basket.dishes.indexOf(foodDish);
    basket.dishes[dishInBasketIndex].count++;
    renderBasket();
    return;
  }
  basket.dishes.push(foods[catIndex].dishes[dishesIndex]);
  renderBasket();
}

function increaseDishes(basketDishesIndex) {
  basket.dishes[basketDishesIndex].count++;
  renderBasket();
}

function decreaseDishes(basketDishesIndex) {
  if (basket.dishes[basketDishesIndex].count == 1) {
    deleteDishes(basketDishesIndex);
    return;
  }
  basket.dishes[basketDishesIndex].count--;
  renderBasket();
}

function deleteDishes(basketDishesIndex) {
  basket.dishes.splice(basketDishesIndex, 1);
  renderBasket();
}

// function to show counter in add Button

let element = document.querySelector('[data-key="123"]');

// function to scroll in food content container

function scrollToCategory(category) {
  let foodContentContainer = document.getElementById(category);
  let correctur = -98;
  let foodContentContainerPosition =
    foodContentContainer.getBoundingClientRect().top +
    window.scrollY +
    correctur;
  window.scrollTo({ top: foodContentContainerPosition });
}

// function for delivery slider

function chooseDelivery(element) {
  basket.isDeliverySelected = true;
  document
    .getElementById("respDeliverySlider")
    .classList.remove("transform-slider");
  element.classList.add("font-bold");
  document.getElementById("respButtonTakeaway").classList.remove("font-bold");
  document.getElementById("respDeliveryIcon").src =
    "./assets/icon/bike-orange.png";
  document.getElementById("respTakeawayIcon").src =
    "./assets/icon/takeaway-black.png";
  document
    .getElementById("deliverySlider")
    .classList.remove("transform-slider");
  element.classList.add("font-bold");
  document.getElementById("buttonTakeaway").classList.remove("font-bold");
  document.getElementById("deliveryIcon").src = "./assets/icon/bike-orange.png";
  document.getElementById("takeawayIcon").src =
    "./assets/icon/takeaway-black.png";
  renderBasket();
}

function chooseTakeaway(element) {
  basket.isDeliverySelected = false;
  document
    .getElementById("respDeliverySlider")
    .classList.add("transform-slider");
  element.classList.add("font-bold");
  document.getElementById("respButtonDelivery").classList.remove("font-bold");
  document.getElementById("respDeliveryIcon").src =
    "./assets/icon/bike-black.png";
  document.getElementById("respTakeawayIcon").src =
    "./assets/icon/takeaway-orange.png";
  document.getElementById("deliverySlider").classList.add("transform-slider");
  element.classList.add("font-bold");
  document.getElementById("buttonDelivery").classList.remove("font-bold");
  document.getElementById("deliveryIcon").src = "./assets/icon/bike-black.png";
  document.getElementById("takeawayIcon").src =
    "./assets/icon/takeaway-orange.png";
  renderBasket();
}

// function for order ready dialog

function completeOrder() {
  document
    .getElementById("orderReadyDialog")
    .classList.remove("transform-order-ready-dialog");
  document
    .getElementById("respOrderReadyDialog")
    .classList.remove("transform-order-ready-dialog");

  setTimeout(() => {
    basket.dishes = [];
    renderBasket();
  }, 500);

  setTimeout(() => {
    document
      .getElementById("orderReadyDialog")
      .classList.add("transform-order-ready-dialog");
    document
      .getElementById("respOrderReadyDialog")
      .classList.add("transform-order-ready-dialog");
    showUnshowRespBasket();
  }, 2500);
}

// function to show / unshow responsiv basket

function showUnshowRespBasket() {
  document
    .getElementById("responsiveBasket")
    .classList.toggle("transform-resp-basket");
}

// function to limt basket max-height by header or footer

window.addEventListener("scroll", () => {
  const documentHeight = document.documentElement.scrollHeight;
  const headerHeight = document
    .getElementById("header")
    .getBoundingClientRect().height;
  const footerHeight = document
    .getElementById("footer")
    .getBoundingClientRect().height;

  if (window.scrollY < headerHeight) {
    let headerViewable = Math.floor(headerHeight - scrollY);
    document.getElementById("basketBox").style.maxHeight = `${
      window.innerHeight - headerViewable
    }px`;
  } else if (
    window.scrollY > headerHeight &&
    window.scrollY + window.innerHeight < documentHeight - footerHeight
  ) {
    document.getElementById(
      "basketBox"
    ).style.maxHeight = `${window.innerHeight}px`;
  } else if (
    window.scrollY + window.innerHeight >
    documentHeight - footerHeight
  ) {
    let footerViewable = Math.floor(
      window.scrollY + window.innerHeight - (documentHeight - footerHeight)
    );
    document.getElementById("basketBox").style.maxHeight = `${
      window.innerHeight - footerViewable
    }px`;
  }
});
