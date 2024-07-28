const Products = document.getElementById("products");
var Cart = {};
var TotalItem = 0;
var TotalPrice = 0;
var CartShown = false;
var Outer = document.getElementById("outer");
var CartDiv = document.getElementById("Cart");
//Entering 100 Products

// Define an array of 100 product names
const products = [
  { name: "iPhone 12", price: 800 },
  { name: "Samsung Galaxy S21", price: 700 },
  { name: "Google Pixel 5", price: 650 },
  { name: "OnePlus 8T", price: 750 },
  { name: "Sony Xperia 1 II", price: 950 },
  { name: "Xiaomi Mi 11", price: 600 },
  { name: "Oppo Find X3", price: 900 },
  { name: "Huawei P40", price: 800 },
  { name: "Nokia 8.3", price: 500 },
  { name: "Asus ROG Phone 5", price: 1000 },
  { name: "iPhone 11", price: 700 },
  { name: "Samsung Galaxy Note 20", price: 850 },
  { name: "Google Pixel 4a", price: 350 },
  { name: "OnePlus 9", price: 730 },
  { name: "Sony Xperia 5 II", price: 850 },
  { name: "Xiaomi Redmi Note 10", price: 400 },
  { name: "Oppo Reno 5", price: 500 },
  { name: "Huawei Mate 40", price: 950 },
  { name: "Nokia 7.2", price: 350 },
  { name: "Asus ZenFone 7", price: 700 },
  { name: "iPhone SE", price: 400 },
  { name: "Samsung Galaxy A52", price: 450 },
  { name: "Google Pixel 4", price: 500 },
  { name: "OnePlus Nord", price: 500 },
  { name: "Sony Xperia L4", price: 300 },
  { name: "Xiaomi Poco X3", price: 350 },
  { name: "Oppo A74", price: 400 },
  { name: "Huawei Y9a", price: 450 },
  { name: "Nokia 5.3", price: 350 },
  { name: "Asus ROG Phone 3", price: 800 },
  { name: "iPhone XR", price: 700 },
  { name: "Samsung Galaxy M51", price: 450 },
  { name: "Google Pixel 3a", price: 400 },
  { name: "OnePlus 7T", price: 500 },
  { name: "Sony Xperia 10 II", price: 400 },
  { name: "Xiaomi Mi 10T", price: 600 },
  { name: "Oppo A93", price: 400 },
  { name: "Huawei Nova 7i", price: 450 },
  { name: "Nokia 3.4", price: 300 },
  { name: "Asus ZenFone 6", price: 700 },
  { name: "iPhone XS", price: 800 },
  { name: "Samsung Galaxy S20", price: 700 },
  { name: "Google Pixel 3", price: 450 },
  { name: "OnePlus 8", price: 600 },
  { name: "Sony Xperia XZ3", price: 700 },
  { name: "Xiaomi Mi Note 10", price: 600 },
  { name: "Oppo A53", price: 350 },
  { name: "Huawei P30", price: 700 },
  { name: "Nokia 6.2", price: 500 },
  { name: "Asus ROG Phone 2", price: 900 },
  { name: "iPhone X", price: 800 },
  { name: "Samsung Galaxy A71", price: 500 },
  { name: "Google Pixel 2", price: 400 },
  { name: "OnePlus 7", price: 600 },
  { name: "Sony Xperia XZ2", price: 550 },
  { name: "Xiaomi Mi 9", price: 600 },
  { name: "Oppo A72", price: 400 },
  { name: "Huawei P20", price: 500 },
  { name: "Nokia 9 PureView", price: 900 },
  { name: "Asus ZenFone 5", price: 600 },
  { name: "iPhone 8", price: 700 },
  { name: "Samsung Galaxy S10", price: 750 },
  { name: "Google Pixel XL", price: 500 },
  { name: "OnePlus 6T", price: 600 },
  { name: "Sony Xperia XZ1", price: 550 },
  { name: "Xiaomi Mi 8", price: 550 },
  { name: "Oppo A71", price: 350 },
  { name: "Huawei P10", price: 500 },
  { name: "Nokia 8", price: 500 },
  { name: "Asus ROG Phone", price: 900 },
  { name: "iPhone 7", price: 600 },
  { name: "Samsung Galaxy S9", price: 700 },
  { name: "Google Pixel", price: 450 },
  { name: "OnePlus 6", price: 550 },
  { name: "Sony Xperia XZ", price: 500 },
  { name: "Xiaomi Mi 6", price: 500 },
  { name: "Oppo F9", price: 400 },
  { name: "Huawei Mate 20", price: 750 },
  { name: "Nokia 7.1", price: 400 },
  { name: "Asus ZenFone 4", price: 500 },
  { name: "iPhone 6", price: 600 },
  { name: "Samsung Galaxy S8", price: 700 },
  { name: "Google Nexus 6P", price: 550 },
  { name: "OnePlus 5T", price: 500 },
  { name: "Sony Xperia X", price: 450 },
  { name: "Xiaomi Mi 5", price: 400 },
  { name: "Oppo F7", price: 350 },
  { name: "Huawei P9", price: 450 },
  { name: "Nokia 6", price: 350 },
  { name: "Asus ZenFone 3", price: 400 },
  { name: "iPhone 5", price: 300 },
  { name: "Samsung Galaxy S7", price: 400 },
  { name: "Google Nexus 5X", price: 400 },
  { name: "OnePlus 5", price: 450 },
  { name: "Sony Xperia Z5", price: 500 },
  { name: "Xiaomi Mi 4", price: 350 },
  { name: "Oppo R11", price: 500 },
  { name: "Huawei Mate 10", price: 700 },
  { name: "Nokia 5", price: 300 },
  { name: "Asus ZenFone 2", price: 400 },
];

const Count = document.getElementsByClassName("Cartdiv")[0];

Count.addEventListener("click", () => {
  CartShown = !CartShown;
  if (CartShown) {
    CartDiv.classList.add("shown");
    CartDiv.classList.remove("hide");
  } else {
    CartDiv.classList.add("hide");
    CartDiv.classList.remove("shown");
  }
});

const CartCount = document.getElementsByClassName("CartCount")[0];

const renderCart = () => {
  CartDiv.innerHTML = ``;
  const cart = new Promise((resolve, reject) => {
    for (let item in Cart) {
      const SingleItem = document.createElement("div");
      SingleItem.id = "CartItem";
      SingleItem.innerHTML = `
        <div>${item} * ${Cart[item]}</div>
        `;
      CartDiv.appendChild(SingleItem);
    }
    const SingleItem = document.createElement("div");
    SingleItem.innerHTML = `
            <div>Total = $${TotalPrice}</div>
        `;
    SingleItem.id = "Total";
    CartDiv.appendChild(SingleItem);
    if (Object.keys(Cart).length == 0) reject(new Error("No PRoduct"));
    resolve();
  });

  cart
    .then(() => {
      const Payment = document.createElement("div");
      Payment.innerHTML = `
            <div>Payment</div>
        `;
      Payment.id = "Total";
      Payment.classList.add("Payment");
      Payment.style.backgroundColor = "lightgray";

      Payment.addEventListener("click", () => {
        const NewCart = {
          Cart: JSON.stringify(Cart),
          TotalPrice: TotalPrice,
        };
        const query = new URLSearchParams(NewCart).toString();
        console.log(query);
        window.location.href = `http://127.0.0.1:5500/Worksheet/PracticeFrontendProject/Payment.html?${query}`;
        cart = {};
      });

      CartDiv.appendChild(Payment);
    })
    .catch((error) => {
      console.log(error);
      CartDiv.innerHtml = ``;
    });
};

renderCart();

for (let i = 0; i < 100; i++) {
  const Product = document.createElement(`div`);
  Product.innerHTML = `
        <div class='ProductName'><span>${products[i].name} </span><span> $${products[i].price}</span></div>
        <img class='ProductImage' src = "data:image/jpeg;base64,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" alt="Product Image"/>
        <button class='ProductButton'>Add To Cart</button>
        `;

  Product.id = `SingleProduct`;
  const Button = Product.querySelector(`button`);
  Button.addEventListener("click", () => {
    if (Cart.hasOwnProperty(products[i].name)) {
      Cart[products[i].name] += 1;
    } else {
      Cart[products[i].name] = 1;
    }
    TotalItem++;
    TotalPrice += products[i].price;
    CartCount.innerHTML = `${TotalItem}`;
    renderCart();
  });
  Products.appendChild(Product);
}
