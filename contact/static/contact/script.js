// =========================
// SMOOTH NAVIGATION
// =========================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(7, 10, 9, 0.95)";
    } else {
        navbar.style.background = "rgba(7, 10, 9, 0.82)";
    }

});


// =========================
// ACTIVE NAVIGATION
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});


// =========================
// PROJECT CARD ANIMATION
// =========================

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


projectCards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(25px)";
    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// =========================
// SKILLS ANIMATION
// =========================

const skillCards = document.querySelectorAll(".skill-card");

const skillsObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


skillCards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition =
        "opacity 0.5s ease, transform 0.5s ease";

    skillsObserver.observe(card);

});


// =========================
// CONTACT BUTTON
// =========================

const emailButton = document.querySelector(
    'a[href^="mailto:"]'
);

if (emailButton) {

    emailButton.addEventListener("click", () => {

        console.log("Opening email client...");

    });

}


// =========================
// CURRENT YEAR
// =========================

const footer = document.querySelector(".footer");

if (footer) {

    const year = new Date().getFullYear();

    footer.innerHTML = `
        <p>
            © ${year} Maryam Yusuf. Built from scratch.
        </p>

        <p class="footer-right">
            designed & developed in the dark
        </p>
    `;

}