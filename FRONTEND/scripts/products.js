// header section
const menuBtn = document.querySelector(".menu");
const clearBtn = document.querySelector(".clear");
const icons = document.querySelector(".icons-js");

menuBtn.addEventListener("click", () => {
    icons.style.display = 'block';
   
});
clearBtn.addEventListener("click", () => {
    icons.style.display = 'none';
   
});
// product section
const products = [{
    id: "abc1",
    image: "img/ace-img.jpg",
    name: "Ace Elec 200000 MAh",
    price: 8500,
},{
    id: "abc2",
    image: "img/samsum-img.jpg",
    name: "Samsung Galaxy A05",
    price: 104999,
},{
    id: "abc3",
    image: "img/oraimo-img.jpg",
    name: "Oraimo TWS",
    price: 13000,
},{
    id: "abcd4",
    image:"img/hp-promax-img.jpg",
    name: "Hp ProBook 11 X360",
    price: 19300,
},{
    id: "abcd5",
    image: "img/adoera-camera-img.jpg",
    name: "Adoer 1080 D  Camera",
    price: 116990,
},{
    id: "abcd6",
    image: "img/mp4-player-img.jpg",
    name: "MP3 MP4 Music Player",
    price: 42000,
},{
    id: "abcd7",
    image: "img/car-charger-img.jpg",
    name: "G7 Bluetooth Car Charger",
    price: 4900,
},{
    id: "abcd8",
    image: "img/graphic-drawer-img.jpg",
    name: "Graphics Drawing Table",
    price: 36390,
}];
console.log(products);
let productHTML ='';
products.forEach((product) => {
    productHTML += `
        <div class="product">
            <a href="product_details.html">
                 <div class="product-img">
                    <img src="${product.image}">
                </div>
                <p class="name">${product.name}</p>
                <p class="price">${product.price}</p>

                <div class="btn">
                    <button class="add-to-cart-js">Add To Cart</button>
                </div>
            </a>
            </div>

    `
});

document.querySelector(".js-product-container").innerHTML = productHTML;

