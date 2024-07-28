let RecieveCart = new URLSearchParams(window.location.search);

window.onload = () => {
  const Cart = JSON.parse(RecieveCart.get("Cart"));
  const TotalPrice = JSON.parse(RecieveCart.get("TotalPrice"));

  console.log(Cart, TotalPrice);

  const PaymentSheet = document.getElementById("PaymentSheet");

  for (let item in Cart) {
    const PaymentItem = document.createElement("div");
    PaymentItem.id = "PaymentItem";
    PaymentItem.innerHTML = `
        <div>${item} * ${Cart[item]}</div>
      `;
    PaymentSheet.appendChild(PaymentItem);
  }

  const Cod = document.getElementsByClassName("Cod")[0];
  const Cards = document.getElementsByClassName("Cards")[0];
  const Total = document.getElementsByClassName("Total")[0];

  // Calculate the total price if it's present in the URL parameters
  if (TotalPrice) {
    Total.id = "PaymentTotal";
    Total.innerHTML = `
        <div>Total = $${TotalPrice}</div>
      `;
    Cod.id = "PaymentTotal";
    Cod.innerHTML = `
        <div>Cash On Delivery</div>
      `;
    Cards.id = "PaymentTotal";
    Cards.innerHTML = `
        <div>Credit/Debit Card</div>
      `;
  }
};
