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
// =================================
// CUSTOMER REVIEWS SLIDER
// =================================

document.addEventListener("DOMContentLoaded", function () {

    const reviews = document.querySelectorAll(".review-card");
    const dots = document.querySelectorAll(".review-dot");

    if (reviews.length === 0) {
        return;
    }

    let currentReview = 0;

    function showReview(index) {

        reviews.forEach(function (review) {
            review.classList.remove("active");
        });

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        reviews[index].classList.add("active");

        if (dots[index]) {
            dots[index].classList.add("active");
        }
    }


    function nextReview() {

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        showReview(currentReview);
    }


    // AUTO SLIDE EVERY 5 SECONDS

    setInterval(nextReview, 5000);


    // DOT CLICK

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            currentReview = index;

            showReview(currentReview);

        });

    });

});
