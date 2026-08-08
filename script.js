// =========================================
// NIMI GADGETS
// ASK FOR PRICE / WHATSAPP SYSTEM
// =========================================


// Your WhatsApp number
const whatsappNumber = "2349166708683";


// Find every ASK FOR PRICE button
const priceButtons = document.querySelectorAll(".buy-now");


priceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Find the product card containing the button
        const productCard = button.closest(".product-card");

        // Find the select box inside that card
        const modelSelect = productCard.querySelector(".model-select");

        // Get selected model
        const selectedModel = modelSelect.value;

        // Get category
        const category = button.dataset.category;


        // Check if customer selected a model
        if (selectedModel === "") {

            alert("Please select a product model first.");

            modelSelect.focus();

            return;
        }


        // Create WhatsApp message
        const message =
            "Hello Nimi Gadgets! 👋\n\n" +
            "I am interested in:\n" +
            "Category: " + category + "\n" +
            "Model: " + selectedModel + "\n\n" +
            "Please, what is the price?";


        // Encode message so WhatsApp can read it
        const encodedMessage =
            encodeURIComponent(message);


        // Create WhatsApp link
        const whatsappLink =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodedMessage;


        // Open WhatsApp
        window.open(
            whatsappLink,
            "_blank"
        );

    });

});


// =========================================
// NAVIGATION ACTIVE LINK
// =========================================

const navLinks =
    document.querySelectorAll(".nav-links a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});