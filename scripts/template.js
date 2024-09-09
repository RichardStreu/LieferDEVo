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
                  +
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
              <img class="dishes-image" src="./assets/img/Italienisch/pasta-bolognese.jpg" alt="">
            </div>
          </div>`;
}
