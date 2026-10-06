document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });

        const mobileNavLinks = navLinks.querySelectorAll("a");

        mobileNavLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }


    /* =========================
       CONTACT FORM → WHATSAPP
    ========================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const submitButton = contactForm.querySelector(".form-submit");

submitButton.textContent = "Opening WhatsApp...";
submitButton.disabled = true;

            const name = document.querySelector("#name").value;
            const phone = document.querySelector("#phone").value;
            const email = document.querySelector("#email").value;
            const service = document.querySelector("#service").value;
            const message = document.querySelector("#message").value;

            const whatsappMessage =
                `Hello Nexli Build,%0A%0A` +
                `I would like to start a website project.%0A%0A` +
                `Name: ${name}%0A` +
                `Phone / WhatsApp: ${phone}%0A` +
                `Email: ${email}%0A` +
                `Website Type: ${service}%0A%0A` +
                `Project Details:%0A${message}`;

            window.open(
                `https://wa.me/233596908524?text=${whatsappMessage}`,
                "_blank"
            );
        });
    }


    /* =========================
       CODING ANIMATION
    ========================= */

    const codeLines = [
        "<html>",
        "  <body>",
        "    <h1>Nexli Build</h1>",
        "    <p>Building your website...</p>",
        "  </body>",
        "</html>"
    ];

    const codeContent = document.querySelector(".code-content");

    if (codeContent) {
        let lineIndex = 0;

        function showNextCodeLine() {
            if (lineIndex < codeLines.length) {

                const line = document.createElement("p");
                line.textContent = codeLines[lineIndex];

                const cursor = codeContent.querySelector(".typing-cursor");

                if (cursor) {
                    codeContent.insertBefore(line, cursor);
                } else {
                    codeContent.appendChild(line);
                }

                lineIndex++;

                setTimeout(showNextCodeLine, 600);

            } else {

                setTimeout(function () {

                    codeContent
                        .querySelectorAll("p")
                        .forEach(function (line) {
                            line.remove();
                        });

                    lineIndex = 0;
                    showNextCodeLine();

                }, 2000);
            }
        }

        showNextCodeLine();
    }

});
/* =========================
       WELCOME SCREEN
    ========================= */

    const welcomeScreen = document.querySelector(".welcome-screen");

    if (welcomeScreen) {
        setTimeout(function () {
            welcomeScreen.classList.add("hide");
        }, 2000);
    }