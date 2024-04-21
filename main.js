import { getUserData } from "./utils/getUserData.js";

const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileEmail = document.querySelector(".mobile-email")
const iconShoppingCart = document.querySelector(".navbar-shopping-cart");
const asideProductShoppingCart = document.querySelector(".product-container");
const closeShoppingCartButton = document.querySelector(
  ".close-shopping-cart-button"
);
const asideProductDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const iconDarkModeDesktop = document.querySelector(".dark-mode-icon-desktop");
const iconDarkModeMobile = document.querySelector(".dark-mode-icon-mobile");
const elementsBorderNavbar = document.querySelectorAll(".navbar-left ul li a");

navbarEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
iconShoppingCart.addEventListener("click", toggleAsideProductShoppingCart);
closeShoppingCartButton.addEventListener(
  "click",
  toggleAsideProductShoppingCart
);
productDetailCloseIcon.addEventListener("click", closeAsideProductDetail);
iconDarkModeDesktop.addEventListener("click", toggleDarkMode);
iconDarkModeMobile.addEventListener("click", toggleDarkMode);

// Actualización de datos acorde a localStorage

const userData = getUserData()

if (!userData) {
  window.location.href = './login/login.html'
}

navbarEmail.innerText = userData.savedEmail
mobileEmail.innerText = userData.savedEmail

// Funciones de toggle de clases para ocultar elementos

function toggleDesktopMenu() {
  const isAsideProductClosed =
    asideProductShoppingCart.classList.contains("inactive");
  desktopMenu.classList.toggle("inactive");
  // Este condicional cierra el menu asideProductShoppingCart si estaba abierto cuando se dio click al desktopMenu
  if (!isAsideProductClosed) {
    asideProductShoppingCart.classList.add("inactive");
  }
}

function toggleMobileMenu() {
  const isAsideProductClosed =
    asideProductShoppingCart.classList.contains("inactive");
  closeAsideProductDetail();
  mobileMenu.classList.toggle("inactive");

  if (!isAsideProductClosed) {
    asideProductShoppingCart.classList.add("inactive");
  }
}

function toggleAsideProductShoppingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

  asideProductShoppingCart.classList.toggle("inactive");

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isAsideProductDetailClosed =
    asideProductDetail.classList.contains("inactive");

  if (!isAsideProductDetailClosed) {
    asideProductDetail.classList.add("inactive");
  }
}
function toggleDarkMode() {
  document.body.classList.toggle("background-dark");
  document.body.classList.toggle("font-white");

  elementsBorderNavbar.forEach((element) => {
    element.classList.toggle("border-dark");
  });
  const ElementosBackground = document.querySelectorAll(
    ".desktop-menu, .mobile-menu, .order, .product-container, .product-detail"
  );

  ElementosBackground.forEach((element) => {
    element.classList.toggle("background-dark");
  });

  const TextoElementos = document.querySelectorAll(
    ".desktop-menu ul li a, .mobile-menu a"
  );

  TextoElementos.forEach((element) => {
    element.classList.toggle("font-white");
  });
}
function openProductDetailAside() {
  asideProductShoppingCart.classList.add("inactive");
  asideProductDetail.classList.remove("inactive");
}
function closeAsideProductDetail() {
  asideProductDetail.classList.add("inactive");
}

const productList = [];

productList.push({
  name: "Gloves",
  price: 120,
  image:
    "https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Smart TV",
  price: 500,
  image:
    "https://images.pexels.com/photos/1444416/pexels-photo-1444416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
  name: "Generic Laptop",
  price: 780,
  image:
    "https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
// Este es el div que tomé de ejemplo para replicar en renderProducts:
/*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/45057/pexels-photo-45057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product-img">
        <div class="product-info">
            <div>
                <p>$120</p>
                <p>Gloves</p>
            </div>
            <figure>
                <img src="../assets/icons/bt_add_to_cart.svg" alt="add-to-cart">
            </figure>
        </div>
    </div>
    */
renderProducts(productList);

function renderProducts(arrayOfProducts) {
  // Este ciclo for genera elementos HTML tomando como base los productos del arrayOfProducts
  for (let product of arrayOfProducts) {
    // Crea y añade clases a los elementos cuando es necesario
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productName = document.createElement("p");
    productName.innerText = product.name;
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;

    const figure = document.createElement("figure");
    const imgAddToCart = document.createElement("img");
    imgAddToCart.setAttribute("src", "assets/icons/bt_add_to_cart.svg");

    // Hace append a los elementos generados
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    figure.appendChild(imgAddToCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(figure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
