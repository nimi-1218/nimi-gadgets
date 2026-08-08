/* =========================================================
   NIMI GADGETS
   COMPLETE PRODUCT SELECTION + RAM/ROM + WHATSAPP
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PRODUCT MODEL SELECTION
    ===================================================== */

    const models = document.querySelectorAll(".model-option");

    models.forEach(function (model) {

        model.addEventListener("click", function () {

            const card = model.closest(".product-card");

            if (!card) return;

            /* Remove previous model selection
               ONLY inside this product card */
            card.querySelectorAll(".model-option").forEach(function (item) {
                item.classList.remove("selected");
            });

            /* Select clicked model */
            model.classList.add("selected");

            /* Product category */
            let category = "Gadget";

            const title = card.querySelector("h3");

            if (title) {
                category = title.textContent.trim();
            }

            /* Selected model */
            const selectedModel = model.textContent.trim();

            /* Display selected model */
            const selectedText = card.querySelector(".selected-model");

            if (selectedText) {
                selectedText.textContent =
                    "Selected: " + selectedModel;
            }

            /* Save selection */
            card.dataset.selectedModel = selectedModel;
            card.dataset.selectedCategory = category;

            /* Remove old specification area */
            const oldSpecs =
                card.querySelector(".nimi-specifications");

            if (oldSpecs) {
                oldSpecs.remove();
            }

            /*
               Decide what type of product this is.
            */

            const categoryText =
                (category + " " + selectedModel).toLowerCase();


            /* =================================================
               PRODUCTS THAT DO NOT NEED RAM / ROM
            ================================================= */

            const noStorageProduct =
                categoryText.includes("airpods") ||
                categoryText.includes("galaxy buds") ||
                categoryText.includes("accessories") ||
                categoryText.includes("earbuds") ||
                categoryText.includes("headphones") ||
                categoryText.includes("charger") ||
                categoryText.includes("power bank") ||
                categoryText.includes("phone case") ||
                categoryText.includes("screen protector") ||
                categoryText.includes("cable") ||
                categoryText.includes("phone holder") ||
                categoryText.includes("bluetooth speaker") ||
                categoryText.includes("phone stand") ||
                categoryText.includes("smart band") ||
                categoryText.includes("gaming accessories");


            /*
               If it is AirPods, Galaxy Buds or accessories,
               do NOT create RAM/ROM selections.
            */

            if (noStorageProduct) {
                return;
            }


            /* =================================================
               CREATE SPECIFICATION AREA
            ================================================= */

            const specs = document.createElement("div");

            specs.className = "nimi-specifications";


            /* =================================================
               DETERMINE PRODUCT TYPE
            ================================================= */

            const isApplePhone =
                categoryText.includes("iphone");

            const isAppleTablet =
                categoryText.includes("ipad");

            const isWatch =
                categoryText.includes("watch");

            const isAndroid =
                !isApplePhone &&
                !isAppleTablet &&
                !isWatch;


            /* =================================================
               IPHONE / IPAD
               ROM ONLY
            ================================================= */

            if (isApplePhone || isAppleTablet) {

                specs.innerHTML = `
                    <div class="spec-title">
                        SELECT STORAGE
                    </div>

                    <div class="spec-group">

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="64GB">
                            64GB
                        </button>

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="128GB">
                            128GB
                        </button>

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="256GB">
                            256GB
                        </button>

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="512GB">
                            512GB
                        </button>

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="1TB">
                            1TB
                        </button>

                    </div>

                    <p class="selected-spec">
                        No storage selected
                    </p>
                `;

                card.querySelector(".product-info")
                    .appendChild(specs);


                /* iPhone storage selection */

                specs.querySelectorAll(".storage-option")
                    .forEach(function (option) {

                        option.addEventListener("click", function () {

                            specs
                                .querySelectorAll(".storage-option")
                                .forEach(function (item) {
                                    item.classList.remove("selected");
                                });

                            option.classList.add("selected");

                            const storage =
                                option.dataset.value;

                            card.dataset.selectedStorage =
                                storage;

                            const selectedSpec =
                                specs.querySelector(".selected-spec");

                            if (selectedSpec) {
                                selectedSpec.textContent =
                                    "Storage: " + storage;
                            }

                        });

                    });

                return;
            }


            /* =================================================
               SMART WATCH
               STORAGE ONLY
            ================================================= */

            if (isWatch) {

                specs.innerHTML = `
                    <div class="spec-title">
                        SELECT STORAGE
                    </div>

                    <div class="spec-group">

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="32GB">
                            32GB
                        </button>

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="64GB">
                            64GB
                        </button>

                        <button
                            type="button"
                            class="spec-option storage-option"
                            data-value="128GB">
                            128GB
                        </button>

                    </div>

                    <p class="selected-spec">
                        No storage selected
                    </p>
                `;

                card.querySelector(".product-info")
                    .appendChild(specs);


                specs.querySelectorAll(".storage-option")
                    .forEach(function (option) {

                        option.addEventListener("click", function () {

                            specs
                                .querySelectorAll(".storage-option")
                                .forEach(function (item) {
                                    item.classList.remove("selected");
                                });

                            option.classList.add("selected");

                            const storage =
                                option.dataset.value;

                            card.dataset.selectedStorage =
                                storage;

                            const selectedSpec =
                                specs.querySelector(".selected-spec");

                            if (selectedSpec) {
                                selectedSpec.textContent =
                                    "Storage: " + storage;
                            }

                        });

                    });

                return;
            }


            /* =================================================
               ANDROID PHONES / TABLETS
               RAM + ROM
            ================================================= */

            if (isAndroid) {

                specs.innerHTML = `
                    <div class="spec-title">
                        SELECT RAM
                    </div>

                    <div class="spec-group">

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="2GB">
                            2GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="3GB">
                            3GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="4GB">
                            4GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="6GB">
                            6GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="8GB">
                            8GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="12GB">
                            12GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="16GB">
                            16GB
                        </button>

                        <button
                            type="button"
                            class="spec-option ram-option"
                            data-value="24GB">
                            24GB
                        </button>

                    </div>


                    <div class="spec-title">
                        SELECT ROM
                    </div>

                    <div class="spec-group">

                        <button
                            type="button"
                            class="spec-option rom-option"
                            data-value="32GB">
                            32GB
                        </button>

                        <button
                            type="button"
                            class="spec-option rom-option"
                            data-value="64GB">
                            64GB
                        </button>

                        <button
                            type="button"
                            class="spec-option rom-option"
                            data-value="128GB">
                            128GB
                        </button>

                        <button
                            type="button"
                            class="spec-option rom-option"
                            data-value="256GB">
                            256GB
                        </button>

                        <button
                            type="button"
                            class="spec-option rom-option"
                            data-value="512GB">
                            512GB
                        </button>

                        <button
                            type="button"
                            class="spec-option rom-option"
                            data-value="1TB">
                            1TB
                        </button>

                    </div>


                    <p class="selected-spec">
                        RAM: Not selected | ROM: Not selected
                    </p>
                `;

                card.querySelector(".product-info")
                    .appendChild(specs);


                /* RAM selection */

                specs.querySelectorAll(".ram-option")
                    .forEach(function (option) {

                        option.addEventListener("click", function () {

                            specs
                                .querySelectorAll(".ram-option")
                                .forEach(function (item) {
                                    item.classList.remove("selected");
                                });

                            option.classList.add("selected");

                            card.dataset.selectedRam =
                                option.dataset.value;

                            updateSpecText(card);

                        });

                    });


                /* ROM selection */

                specs.querySelectorAll(".rom-option")
                    .forEach(function (option) {

                        option.addEventListener("click", function () {

                            specs
                                .querySelectorAll(".rom-option")
                                .forEach(function (item) {
                                    item.classList.remove("selected");
                                });

                            option.classList.add("selected");

                            card.dataset.selectedRom =
                                option.dataset.value;

                            updateSpecText(card);

                        });

                    });

            }

        });

    });


    /* =====================================================
       UPDATE SPECIFICATION TEXT
    ===================================================== */

    function updateSpecText(card) {

        const ram =
            card.dataset.selectedRam || "Not selected";

        const rom =
            card.dataset.selectedRom || "Not selected";

        const selectedSpec =
            card.querySelector(".selected-spec");

        if (selectedSpec) {

            selectedSpec.textContent =
                "RAM: " + ram +
                " | ROM: " + rom;

        }

    }


    /* =====================================================
       ASK FOR PRICE
    ===================================================== */

    const priceButtons =
        document.querySelectorAll(".buy-now");


    priceButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card =
                button.closest(".product-card");

            if (!card) return;


            const selectedModel =
                card.dataset.selectedModel;

            const selectedCategory =
                card.dataset.selectedCategory;


            /* Must select model first */

            if (!selectedModel) {

                alert(
                    "Please select the phone/model you want first."
                );

                return;
            }


            const categoryText =
                (selectedCategory + " " + selectedModel)
                    .toLowerCase();


            /* =================================================
               PRODUCTS WITHOUT RAM / ROM
            ================================================= */

            const noStorageProduct =
                categoryText.includes("airpods") ||
                categoryText.includes("galaxy buds") ||
                categoryText.includes("accessories") ||
                categoryText.includes("earbuds") ||
                categoryText.includes("headphones") ||
                categoryText.includes("charger") ||
                categoryText.includes("power bank") ||
                categoryText.includes("phone case") ||
                categoryText.includes("screen protector") ||
                categoryText.includes("cable") ||
                categoryText.includes("phone holder") ||
                categoryText.includes("bluetooth speaker") ||
                categoryText.includes("phone stand") ||
                categoryText.includes("smart band") ||
                categoryText.includes("gaming accessories");


            /* =================================================
               CHECK REQUIRED SPECIFICATIONS
            ================================================= */

            if (!noStorageProduct) {

                const isApple =
                    categoryText.includes("iphone") ||
                    categoryText.includes("ipad");

                const isWatch =
                    categoryText.includes("watch");


                /* iPhone / iPad */

                if (isApple) {

                    if (!card.dataset.selectedStorage) {

                        alert(
                            "Please select the storage size you want first."
                        );

                        return;
                    }

                }


                /* Smartwatch */

                else if (isWatch) {

                    if (!card.dataset.selectedStorage) {

                        alert(
                            "Please select the storage size you want first."
                        );

                        return;
                    }

                }


                /* Android */

                else {

                    if (!card.dataset.selectedRam) {

                        alert(
                            "Please select the RAM you want first."
                        );

                        return;
                    }


                    if (!card.dataset.selectedRom) {

                        alert(
                            "Please select the ROM you want first."
                        );

                        return;
                    }

                }

            }


            /* =================================================
               BUILD WHATSAPP MESSAGE
            ================================================= */

            let message =
                "Hello Nimi Gadgets 👋\n\n" +
                "I would like to ask for the price of:\n" +
                "📱 " + selectedModel + "\n" +
                "Category: " + selectedCategory;


            /* Add specifications */

            if (!noStorageProduct) {

                const isApple =
                    categoryText.includes("iphone") ||
                    categoryText.includes("ipad");

                const isWatch =
                    categoryText.includes("watch");


                if (isApple || isWatch) {

                    message +=
                        "\nStorage: " +
                        card.dataset.selectedStorage;

                } else {

                    message +=
                        "\nRAM: " +
                        card.dataset.selectedRam +
                        "\nROM: " +
                        card.dataset.selectedRom;

                }

            }


            message +=
                "\n\nPlease send me the current price. Thank you.";


            /* =================================================
               WHATSAPP NUMBER
            ================================================= */

            const whatsappNumber =
                "2349166708683";


            const encodedMessage =
                encodeURIComponent(message);


            /* =================================================
               WHATSAPP CHOICE
            ================================================= */

            const choice =
                document.createElement("div");

            choice.className =
                "whatsapp-choice";


            choice.innerHTML = `

                <div class="whatsapp-choice-box">

                    <button
                        type="button"
                        class="close-whatsapp-choice">
                        ✕
                    </button>

                    <h3>Choose WhatsApp</h3>

                    <p>
                        How would you like to contact
                        Nimi Gadgets?
                    </p>

                    <button
                        type="button"
                        class="whatsapp-option messenger">
                        💬 WhatsApp
                    </button>

                    <button
                        type="button"
                        class="whatsapp-option business">
                        💼 WhatsApp Business
                    </button>

                </div>

            `;


            document.body.appendChild(choice);


            /* =================================================
               NORMAL WHATSAPP
            ================================================= */

            choice
                .querySelector(".messenger")
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
               CLOSE
            ================================================= */

            choice
                .querySelector(".close-whatsapp-choice")
                .addEventListener("click", function () {

                    choice.remove();

                });


            /* Click outside */

            choice.addEventListener(
                "click",
                function (event) {

                    if (event.target === choice) {
                        choice.remove();
                    }

                }
            );

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
       SEARCH
    ===================================================== */

    const searchIcon =
        document.querySelector(".search-icon");


    if (searchIcon) {

        searchIcon.addEventListener("click", function () {

            const search =
                prompt(
                    "What gadget are you looking for?"
                );


            if (!search) return;


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


    /* =====================================================
       PAYMENT — COPY ACCOUNT NUMBER
    ===================================================== */

    const copyAccountBtn =
        document.getElementById("copyAccountBtn");

    const accountNumber =
        document.getElementById("accountNumber");


    if (copyAccountBtn && accountNumber) {

        copyAccountBtn.addEventListener(
            "click",
            function () {

                const number =
                    accountNumber.textContent.trim();


                if (
                    navigator.clipboard &&
                    navigator.clipboard.writeText
                ) {

                    navigator.clipboard
                        .writeText(number)
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

                } else {

                    alert(
                        "Account number: " + number
                    );

                }

            }
        );

    }


    /* =====================================================
       PAYMENT WHATSAPP
    ===================================================== */

    const paymentWhatsappBtn =
        document.getElementById(
            "paymentWhatsappBtn"
        );


    if (paymentWhatsappBtn) {

        paymentWhatsappBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const message =
                    "Hello Nimi Gadgets 👋\n\n" +
                    "I've made a payment for my order.\n" +
                    "I'm sending my payment receipt here " +
                    "for confirmation.";


                const whatsappNumber =
                    "2349166708683";


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

});
