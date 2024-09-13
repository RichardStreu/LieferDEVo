function getfoodContentContainerTemplate(catIndex, dishesContainer) {
  return `<div id="${foods[catIndex].name}" class="food-content-container ${foods[catIndex].name}">
            <img class="food-content-image" src="${foods[catIndex].src}" alt="Bild von ${foods[catIndex].name} Speise" />
            <p class="food-content-categorie">${foods[catIndex].name}</p>
            <div id="dishesContentRenderBox" class="food-content-render-box">
              ${dishesContainer}
            </div>
          </div>`;
}

function getDishesContainerTemplate(catIndex, dishesIndex) {
  return `<div data-key="${
    foods[catIndex].dishes[dishesIndex].dataKey
  }" class="dishes-Container">
            <div class="dishes-container-upper-part">
              <div class="dishes-name">${
                foods[catIndex].dishes[dishesIndex].name
              }</div>
              <div class="dishes-add-button-box">
                <button onclick="addDishesToBasket(${catIndex}, ${dishesIndex})" class="dishes-add-button" id="dishesAddButton${
    foods[catIndex].name
  }${dishesIndex}">
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
                  ${foods[catIndex].dishes[dishesIndex].price.replace(
                    ".",
                    ","
                  )} €
                </div>
              </div>
              <img class="dishes-image" src="${
                foods[catIndex].dishes[dishesIndex].imgSource
              }" alt="">
            </div>
          </div>`;
}

function getBasketDishesTemplate(basketDishesIndex) {
  return `<div data-key="${
    basket.dishes[basketDishesIndex].dataKey
  }" class="basketDishesBox">
              <div class="basket-dishes-title">${
                basket.dishes[basketDishesIndex].name
              }</div>
              <div class="basket-dishes-action-container">
                <div class="basket-dishes-counter-box">
                  <button onclick="decreaseDishes(${basketDishesIndex})" class="dishes-add-button">
                    <img src="./assets/icon/icons8-minus-24.png" alt="">
                  </button>
                  <span id="basketDishesCounter">
                    ${basket.dishes[basketDishesIndex].count}x
                  </span>
                  <button onclick="increaseDishes(${basketDishesIndex})" class="dishes-add-button">
                    <img src="./assets/icon/icons8-plus-24.png" alt="">
                  </button>
                </div>
                <div class="basket-dishes-amount-box">
                  ${(
                    basket.dishes[basketDishesIndex].price *
                    basket.dishes[basketDishesIndex].count
                  ).toLocaleString("de-DE", {
                    style: "currency",
                    currency: "EUR",
                  })}
                </div>
                <button onclick="deleteDishes(${basketDishesIndex})" class="basket-delete-dishes-button dishes-add-button" id="basketDelteDishesButton"><img class="trashcan-icon" src="./assets/icon/icons8-delete-50.png" alt=""></button>
              </div>
            </div>`;
}

function getBasketLowerPartTemplate() {
  if (basket.isDeliverySelected == true) {
    return `<div class="subtotal-amount">
              <span>Zwischensumme</span><span id="subtotalAmount">${calculateSubTotalAmount().toLocaleString(
                "de-DE",
                { style: "currency", currency: "EUR" }
              )}</span>
            </div>
            <div class="delivery-costs-or-discount">
              <span>Lieferkosten</span
              ><span id="deliveryCostsOrDiscount">${basket.deliveryCosts.toLocaleString(
                "de-DE",
                { style: "currency", currency: "EUR" }
              )}</span>
            </div>
            <div class="total-amount">
              <span>Gesamt</span><span id="totalAmount">${calculateTotalAmount().toLocaleString(
                "de-DE",
                { style: "currency", currency: "EUR" }
              )}</span>
            </div>
            <button onclick="completeOrder()" id="payButton" class="pay-button">
              <span>Bezahlen (${calculateTotalAmount().toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })})</span>
            </button>`;
  } else {
    return `<div class="subtotal-amount">
              <span>Zwischensumme</span><span id="subtotalAmount">${calculateSubTotalAmount().toLocaleString(
                "de-DE",
                { style: "currency", currency: "EUR" }
              )}</span>
            </div>
            <div class="delivery-costs-or-discount">
              <span>Rabatt</span
              ><span id="deliveryCostsOrDiscount">${calculateDiscount().toLocaleString(
                "de-DE",
                { style: "currency", currency: "EUR" }
              )}</span>
            </div>
            <div class="total-amount">
              <span>Gesamt</span><span id="totalAmount">${calculateTotalAmount().toLocaleString(
                "de-DE",
                { style: "currency", currency: "EUR" }
              )}</span>
            </div>
            <button onclick="completeOrder()" id="payButton" class="pay-button">
              <span>Bezahlen (${calculateTotalAmount().toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })})
            </button>`;
  }
}
