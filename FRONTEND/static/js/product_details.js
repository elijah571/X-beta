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

document.addEventListener("DOMContentLoaded", function() {
    const products = [{
        id: "abc1",
        image: productImages.ace,
        name: "Ace Elec 200000 MAh",
        price: 8500,
        description: "Quick Charge (QC) Chargers: Support Qualcomm’s Quick Charge technology. These can charge compatible devices much faster than standard chargers.",
    }, {
        id: "abc2",
        image: productImages.samsung,
        name: "Samsung Galaxy A05",
        price: 104999,
        description: "Power Delivery (PD) Chargers: Use USB-C and support the USB Power Delivery standard, allowing for fast charging of compatible devices including newer smartphones and tablets.",
    }, {
        id: "abc3",
        image: productImages.oraimo,
        name: "Oraimo TWS",
        price: 13000,
        description: "Ensure the charger is compatible with your device’s charging standard (e.g., Quick Charge, Power Delivery).",
    }, {
        id: "abcd4",
        image: productImages.hp,
        name: "Hp ProBook 11 X360",
        price: 19300,
        description: "Look for chargers with over-current, over-voltage, over-temperature, and short-circuit protection to ensure safe charging.",
    }, {
        id: "abcd5",
        image: productImages.adoer,
        name: "Adoer 1080 D  Camera",
        price: 116990,
        description: "High-quality materials and a durable design are important for long-term use.",
    }, {
        id: "abcd6",
        image: productImages.mp4,
        name: "MP3 MP4 Music Player",
        price: 42000,
        description: "Check the voltage range to ensure it fits your car’s power system (usually 12V or 24V).",
    }, {
        id: "abcd7",
        image: productImages.carCharger,
        name: "G7 Bluetooth Car Charger",
        price: 4900,
        description: "Wattage: Higher wattage means faster charging. Standard USB ports typically offer 5W, while fast chargers can offer 18W, 30W, or even higher.",
    }, {
        id: "abcd8",
        image: productImages.graphicDrawer,
        name: "Graphics Drawing Table",
        price: 36390,
        description: "Amperage: Measured in amps (A), standard USB ports offer 1A or 2.1A. Fast chargers might offer 3A or more.",
    }];

    const productId = document.getElementById('product-id').textContent;

    const product = products.find(p => p.id === productId);

    if (product) {
        document.querySelector('.product-images .image img').src = product.image;
        document.querySelector('.product-info p').innerText = product.description;
        document.querySelector('.product-info h4').innerText = `₦${product.price}`;
        document.querySelector('.product-details .details').innerHTML = `
            <div>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;
    }
});