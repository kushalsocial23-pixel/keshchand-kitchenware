// ========================================
// KeshChand Kitchenware
// Main JavaScript
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("KeshChand Kitchenware website loaded.");

    // ------------------------------------
    // Smooth navigation
    // ------------------------------------

    const navigationLinks = document.querySelectorAll("nav a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const target = this.getAttribute("href");

            if (target && target.startsWith("#")) {

                const section = document.querySelector(target);

                if (section) {

                    section.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    // ------------------------------------
    // Current year in footer
    // ------------------------------------

    const yearElement = document.querySelector("#current-year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // ------------------------------------
    // WhatsApp buttons
    // ------------------------------------

    const whatsappButtons =
        document.querySelectorAll(".whatsapp-button");

    whatsappButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            console.log(
                "Opening WhatsApp for KeshChand Kitchenware."
            );

        });

    });

});
