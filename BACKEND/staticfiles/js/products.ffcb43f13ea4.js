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
document.addEventListener("DOMContentLoaded", function() {
    const products = [{
        id: "abc1",
        image: productImages.ace,
        name: "Ace Elec 200000 MAh",
        price: 8500,
    }, {
        id: "abc2",
        image: productImages.samsung,
        name: "Samsung Galaxy A05",
        price: 104999,
    }, {
        id: "abc3",
        image: productImages.oraimo,
        name: "Oraimo TWS",
        price: 13000,
    }, {
        id: "abcd4",
        image: productImages.hp,
        name: "Hp ProBook 11 X360",
        price: 19300,
    }, {
        id: "abcd5",
        image: productImages.adoer,
        name: "Adoer 1080 D  Camera",
        price: 116990,
    }, {
        id: "abcd6",
        image: productImages.mp4,
        name: "MP3 MP4 Music Player",
        price: 42000,
    }, {
        id: "abcd7",
        image: productImages.carCharger,
        name: "G7 Bluetooth Car Charger",
        price: 4900,
    }, {
        id: "abcd8",
        image: productImages.graphicDrawer,
        name: "Graphics Drawing Table",
        price: 36390,
    }];

    let productHTML = '';
    products.forEach((product) => {
        productHTML += `
            <div class="product">
                <a href="product_details.html?id=${product.id}">
                    <div class="product-img">
                        <img src="${product.image}">
                    </div>
                    <p class="name">${product.name}</p>
                    <p class="price">₦${product.price}</p>

                    <div class="btn">
                        <button class="add-to-cart-js">Add To Cart</button>
                    </div>
                </a>
            </div>
        `;
    });

    document.querySelector(".js-product-container").innerHTML = productHTML;

    const addToCartButtons = document.querySelectorAll('.add-to-cart-js');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            if (!isAuthenticated) {
                window.location.href = '{% url "login" %}';
            } else {
                const productElement = button.closest('.product');
                const productId = productElement.dataset.productId;
                window.location.href = `product_details.html?id=${productId}`;
            }
        });
    });
});