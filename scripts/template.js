function getfoodContentContainerTemplate(catIndex, dishesContainer) {
  return `<div class="food-content-container ${foods[catIndex].name}">
            <img class="food-content-image" src="${foods[catIndex].src}" alt="Bild von ${foods[catIndex].name} Speise" />
            <p class="food-content-categorie">${foods[catIndex].name}</p>
            <div id="dishesContentRenderBox" class="food-content-render-box">
              ${dishesContainer}
            </div>
          </div>`;
}

function getDishesContainerTemplate(catIndex, dishesIndex) {
  return `<div class="dishes-Container">
            <div class="dishes-container-upper-part">
              <div class="dishes-name">${foods[catIndex].dishes[dishesIndex].name}</div>
              <div class="dishes-add-button-box">
                <button onclick="addDishesToBasket(${catIndex}, ${dishesIndex})" class="dishes-add-button" id="dishesAddButton${foods[catIndex].name}${dishesIndex}">
                  <img src="./assets/icon/icons8-plus-24.png" alt="">
                </button>
              </div>
            </div>
            <div class="dishes-container-lower-part">
              <div class="dishes-text-box">
                <div class="dishes-description">
                  ${foods[catIndex].dishes[dishesIndex].description}
                </div>
                <div id="dishesSinglePrice" class="dishes-single-price">
                  ${foods[catIndex].dishes[dishesIndex].price.replace(".", ",")} €
                </div>
              </div>
              <img class="dishes-image" src="${foods[catIndex].dishes[dishesIndex].imgSource}" alt="">
            </div>
          </div>`;
}

function getBasketDishesTemplate(basketDishesIndex) {
  return `<div class="basketDishesBox">
              <div class="basket-dishes-title">${basket.dishes[basketDishesIndex].name}</div>
              <div class="basket-dishes-action-container">
                <div class="basket-dishes-counter-box">
                  <button class="dishes-add-button">
                    <img src="./assets/icon/icons8-minus-24.png" alt="">
                  </button>
                  <span id="basketDishesCounter">
                    ${basket.dishes[basketDishesIndex].count}x
                  </span>
                  <button class="dishes-add-button">
                    <img src="./assets/icon/icons8-plus-24.png" alt="">
                  </button>
                </div>
                <div class="basket-dishes-amount-box">
                  ${basket.dishes[basketDishesIndex].price.replace(".", ",")} €
                </div>
                <button class="basket-delete-dishes-button dishes-add-button" id="basketDelteDishesButton"><img class="trashcan-icon" src="./assets/icon/icons8-delete-50.png" alt=""></button>
              </div>
            </div>`;
}