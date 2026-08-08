/* =========================================================
   NIMI GADGETS
   PRODUCT SELECTION + ASK FOR PRICE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       SELECT PHONE / PRODUCT MODEL
    ===================================================== */

    const models = document.querySelectorAll(".model-option");

    models.forEach(function (model) {

        model.addEventListener("click", function () {

            /* Find the product card this model belongs to */
            const card = model.closest(".product-card");

            if (!card) {
                return;
            }

            /* Remove selection from other models
               ONLY inside this product card */
            const modelsInThisCard =
                card.querySelectorAll(".model-option");

            modelsInThisCard.forEach(function (item) {
                item.classList.remove("selected");
            });


            /* Highlight the model that was clicked */
            model.classList.add("selected");


            /* Get the product category/name */
            let category = "Gadget";

            const title = card.querySelector("h3");

            if (title) {
                category = title.textContent.trim();
            }


            /* Get the selected model name */
            const selectedModel =
                model.textContent.trim();


            /* Show selected model */
            const selectedText =
                card.querySelector(".selected-model");

            if (selectedText) {
                selectedText.textContent =
                    "Selected: " + selectedModel;
            }


            /* Change ASK FOR PRICE button */
            const button =
                card.querySelector(".buy-now");

            if (button) {
                button.textContent =
                    "ASK PRICE FOR " + selectedModel;
            }


            /* Store the selection on THIS card */
            card.dataset.selectedModel = selectedModel;
            card.dataset.selectedCategory = category;

        });

    });



    /* =========================================================
   ASK FOR PRICE
========================================================= */

const priceButtons =
    document.querySelectorAll(".buy-now");


priceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card =
            button.closest(".product-card");

        if (!card) {
            return;
        }

        const selectedModel =
            card.dataset.selectedModel;

        const selectedCategory =
            card.dataset.selectedCategory;


        /* Make sure a model was selected */
        if (!selectedModel) {

            alert(
                "Please select the phone/model you want first."
            );

            return;
        }


        /* =================================================
           WHATSAPP MESSAGE
        ================================================= */

        const message =
            "Hello Nimi Gadgets 👋\n\n" +
            "I would like to ask for the price of:\n" +
            "📱 " + selectedModel + "\n" +
            "Category: " + selectedCategory + "\n\n" +
            "Please send me the current price. Thank you.";


        const whatsappNumber =
            "2349166708683";


        const encodedMessage =
            encodeURIComponent(message);


        /* =================================================
           SHOW WHATSAPP CHOICE
        ================================================= */

        const choice =
            document.createElement("div");

        choice.className =
            "whatsapp-choice";


        choice.innerHTML = `

            <div class="whatsapp-choice-box">

                <button class="close-whatsapp-choice">
                    ✕
                </button>

                <h3>Choose WhatsApp</h3>

                <p>
                    How would you like to contact
                    Nimi Gadgets?
                </p>

                <button class="whatsapp-option messenger">
                    💬 WhatsApp
                </button>

                <button class="whatsapp-option business">
                    💼 WhatsApp Business
                </button>

            </div>

        `;


        document.body.appendChild(choice);


        /* =================================================
           WHATSAPP MESSENGER
        ================================================= */

        choice
            .querySelector(".messenger")
            .addEventListener("click", function () {

                const whatsappURL =
                    "https://api.whatsapp.com/send?phone=" +
                    whatsappNumber +
                    "&text=" +
                    encodedMessage;

                window.open(
                    whatsappURL,
                    "_blank"
                );

                choice.remove();

            });


        /* =================================================
           WHATSAPP BUSINESS
        ================================================= */

        choice
            .querySelector(".business")
            .addEventListener("click", function () {

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodedMessage;

                window.open(
                    whatsappURL,
                    "_blank"
                );

                choice.remove();

            });


        /* =================================================
           CLOSE BUTTON
        ================================================= */

        choice
            .querySelector(".close-whatsapp-choice")
            .addEventListener("click", function () {

                choice.remove();

            });


        /* Close when clicking outside */
        choice.addEventListener("click", function (event) {

            if (event.target === choice) {
                choice.remove();
            }

        });

    });

});
    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navLinks =
        document.querySelectorAll(".nav-links a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });



    /* =====================================================
       SEARCH ICON
    ===================================================== */

    const searchIcon =
        document.querySelector(".search-icon");


    if (searchIcon) {

        searchIcon.addEventListener("click", function () {

            const search =
                prompt(
                    "What gadget are you looking for?"
                );


            if (!search) {
                return;
            }


            const searchText =
                search.toLowerCase();


            let found = false;


            models.forEach(function (model) {

                if (
                    model.textContent
                        .toLowerCase()
                        .includes(searchText)
                ) {

                    model.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });


                    found = true;

                }

            });


            if (!found) {

                alert(
                    "Sorry, we couldn't find that model in our catalogue."
                );

            }

        });

    }



    /* =====================================================
       FLOATING WHATSAPP BUTTON
    ===================================================== */

    const whatsappButton =
        document.querySelector(".whatsapp-button");


    if (whatsappButton) {

        whatsappButton.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const whatsappNumber =
                    "2349166708683";


                const message =
                    "Hello Nimi Gadgets 👋\n\n" +
                    "I would like to make an enquiry " +
                    "about your gadgets.";


                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(message);


                window.open(
                    whatsappURL,
                    "_blank"
                );

            }
        );

    }
    /* =========================================================
   PAYMENT SECTION
========================================================= */

const copyAccountBtn = document.getElementById("copyAccountBtn");
const accountNumber = document.getElementById("accountNumber");

if (copyAccountBtn && accountNumber) {

    copyAccountBtn.addEventListener("click", function () {

        const number = accountNumber.textContent.trim();

        navigator.clipboard.writeText(number)
            .then(function () {

                copyAccountBtn.textContent =
                    "✓ ACCOUNT NUMBER COPIED";

                setTimeout(function () {

                    copyAccountBtn.textContent =
                        "📋 COPY ACCOUNT NUMBER";

                }, 2500);

            })
            .catch(function () {

                alert(
                    "Account number: " + number
                );

            });

    });

}


/* =========================================================
   PAYMENT WHATSAPP
========================================================= */

const paymentWhatsappBtn =
    document.getElementById("paymentWhatsappBtn");

if (paymentWhatsappBtn) {

    paymentWhatsappBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            const message =
                "Hello Nimi Gadgets 👋%0A%0A" +
                "I've made a payment for my order.%0A" +
                "I'm sending my payment receipt here for confirmation.";

            const whatsappNumber = "2349166708683";

            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                message;

            window.open(whatsappURL, "_blank");

        }
    );

}

});
