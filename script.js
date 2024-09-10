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

function renderBasketDishes() {
  document.getElementById("basketBoxRenderContent").innerHTML = "";
  for (
    let basketDishesIndex = 0;
    basketDishesIndex < basket.dishes.length;
    basketDishesIndex++
  ) {
    let basketDish = getBasketDishesTemplate(basketDishesIndex);
    document.getElementById("basketBoxRenderContent").innerHTML += basketDish;
  }
}

function renderBasket() {
  renderBasketDishes();
}

// functions

function addDishesToBasket(catIndex, dishesIndex) {
  if (basket.dishes.includes(foods[catIndex].dishes[dishesIndex])) {
    let foodDish = foods[catIndex].dishes[dishesIndex];
    let dishInBasketIndex = basket.dishes.indexOf(foodDish);
    basket.dishes[dishInBasketIndex].count ++;
    renderBasket();
    return;
  }
  basket.dishes.push(foods[catIndex].dishes[dishesIndex]);
  renderBasket();
}

function increaseDishes(basketDishesIndex) {
  basket.dishes[basketDishesIndex].count ++;
  renderBasket();
}

function decreaseDishes(basketDishesIndex) {
  if (basket.dishes[basketDishesIndex].count == 1) {
    deleteDishes(basketDishesIndex);
  }
  basket.dishes[basketDishesIndex].count --;
  renderBasket();
}

function deleteDishes(basketDishesIndex) {
  basket.dishes.splice(basketDishesIndex, 1);
  renderBasket();
}