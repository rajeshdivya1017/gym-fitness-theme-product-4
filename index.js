/* =========================================================
STACKLY FITNESS WEBSITE
HOME PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


/* =====================================================
   01. SCROLL REVEAL
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".program-tags, " +
    ".passion-description, " +
    ".passion-card, " +
    ".trainer-heading, " +
    ".trainer-card, " +
    ".membership-heading, " +
    ".membership-card, " +
    ".testimonial-heading, " +
    ".testimonial-card"
);


revealElements.forEach((element, index) => {

    element.classList.add("reveal");

    if (element.classList.contains("passion-card")) {

        element.style.transitionDelay =
            `${(index % 4) * 100}ms`;

    }

});


/* Intersection Observer */

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }

    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =====================================================
   02. IMAGE LOADING FALLBACK
===================================================== */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        image.classList.add("image-load-error");

        console.warn(
            "STACKLY image could not be loaded:",
            image.src
        );

    });

});


/* =====================================================
   03. MEMBERSHIP PLAN SELECTION
===================================================== */

document.querySelectorAll(".plan-btn").forEach(button => {

    button.addEventListener("click", () => {

        const url = new URL(
            button.href,
            window.location.origin
        );

        const selectedPlan = url.searchParams.get("plan");

        if (selectedPlan) {

            sessionStorage.setItem(
                "stacklySelectedPlan",
                selectedPlan
            );

        }

    });

});


/* =====================================================
   04. HERO BUTTON INTERACTION
===================================================== */

const heroButton = document.querySelector(".hero-btn");

if (heroButton) {

    heroButton.addEventListener("mouseenter", () => {

        heroButton.classList.add("hero-btn-hover");

    });

    heroButton.addEventListener("mouseleave", () => {

        heroButton.classList.remove("hero-btn-hover");

    });

}


/* =====================================================
   05. MEMBERSHIP CARD INTERACTION
===================================================== */

const membershipCards = document.querySelectorAll(
    ".membership-card"
);


membershipCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        membershipCards.forEach(otherCard => {

            otherCard.classList.remove("plan-active");

        });

        card.classList.add("plan-active");

    });


    card.addEventListener("mouseleave", () => {

        card.classList.remove("plan-active");

    });

});


/* =====================================================
   06. EXTERNAL IMAGE ERROR HANDLING
===================================================== */

const images = document.querySelectorAll(
    ".hero-bg-image, .passion-card img, .trainer-image img"
);


images.forEach(image => {

    if (image.complete && image.naturalWidth === 0) {

        image.classList.add("image-load-error");

    }

});


/* =====================================================
   07. CONSOLE
===================================================== */

console.log(
    "STACKLY Fitness Home Page Initialized Successfully"
);


});
