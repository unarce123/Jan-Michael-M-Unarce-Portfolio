/* =========================================================
   DARK MODE / LIGHT MODE
========================================================= */

(() => {
    const root = document.documentElement;
    const themeToggle = document.getElementById("themeToggle");
    const themeColorMeta = document.getElementById("themeColorMeta");
    const storageKey = "janMichaelPortfolioTheme";

    function getSavedTheme() {
        try {
            const savedTheme = localStorage.getItem(storageKey);
            return savedTheme === "light" || savedTheme === "dark"
                ? savedTheme
                : "dark";
        } catch (error) {
            return "dark";
        }
    }

    function applyTheme(theme, savePreference = false) {
        const selectedTheme = theme === "light" ? "light" : "dark";

        root.setAttribute("data-theme", selectedTheme);

        if (themeToggle) {
            const isDark = selectedTheme === "dark";
            const icon = themeToggle.querySelector(".theme-toggle-icon");
            const label = themeToggle.querySelector(".theme-toggle-label");
            const nextMode = isDark ? "light" : "dark";
            const buttonText = isDark ? "Light mode" : "Dark mode";

            if (icon) {
                icon.textContent = isDark ? "☀" : "☾";
            }

            if (label) {
                label.textContent = buttonText;
            }

            themeToggle.setAttribute("aria-label", `Switch to ${nextMode} mode`);
            themeToggle.setAttribute("title", `Switch to ${nextMode} mode`);
            themeToggle.setAttribute("aria-pressed", String(!isDark));
        }

        if (themeColorMeta) {
            themeColorMeta.setAttribute(
                "content",
                selectedTheme === "light" ? "#f4f7fb" : "#0b1220"
            );
        }

        if (savePreference) {
            try {
                localStorage.setItem(storageKey, selectedTheme);
            } catch (error) {
                console.warn("Theme preference could not be saved.", error);
            }
        }
    }

    // Keep the current portfolio appearance as the default on first visit.
    applyTheme(getSavedTheme());

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const currentTheme = root.getAttribute("data-theme");
            applyTheme(currentTheme === "dark" ? "light" : "dark", true);
        });
    }
})();



/* =========================================================
   PORTFOLIO CONFIGURATION
========================================================= */

const PORTFOLIO_CONFIG = {
    email: "unarcejanmichael18@gmail.com",
    linkedin: "https://www.linkedin.com/in/jan-michael-unarce-0a999043a",
    github: "https://github.com/unarce123",
    resumePdf: "assets/documents/Unarce_Jan_Michael_M_ATSResume.pdf"
};


/* =========================================================
   EMAILJS INITIALIZATION
========================================================= */

if (window.emailjs) {
    emailjs.init({
        publicKey: "zrju8ZZ7TH2HRAT3R"
    });
} else {
    console.error("EmailJS SDK could not be loaded.");
}


/* =========================================================
   PROFILE LINKS
========================================================= */

const linkedinLink = document.getElementById("linkedinLink");
const githubLink = document.getElementById("githubLink");
const resumePdfLink = document.getElementById("resumePdfLink");

if (linkedinLink) {
    linkedinLink.href = PORTFOLIO_CONFIG.linkedin;
}

if (githubLink) {
    githubLink.href = PORTFOLIO_CONFIG.github;
}

if (resumePdfLink) {
    resumePdfLink.href = PORTFOLIO_CONFIG.resumePdf;
}


/* =========================================================
   CUSTOM TOAST NOTIFICATION
========================================================= */

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const toastClose = document.getElementById("toastClose");
const toastIcon = document.getElementById("toastIcon");

let toastTimer;


function showToast(title, message, type = "success") {

    if (!toast) {
        return;
    }

    if (toastTitle) {
        toastTitle.textContent = title;
    }

    if (toastMessage) {
        toastMessage.textContent = message;
    }

    if (toastIcon) {

        if (type === "error") {

            toastIcon.style.background = "rgba(239, 68, 68, 0.15)";
            toastIcon.style.color = "#f87171";

            toastIcon.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            `;

        } else {

            toastIcon.style.background = "rgba(20, 184, 166, 0.15)";
            toastIcon.style.color = "#2dd4bf";

            toastIcon.innerHTML = `
                <svg viewBox="0 0 24 24">
                    <path d="m5 12 4 4L19 6"></path>
                </svg>
            `;

        }

    }

    clearTimeout(toastTimer);

    toast.classList.remove("show");

    // Restart the progress animation.
    void toast.offsetWidth;

    toast.classList.add("show");

    toastTimer = window.setTimeout(() => {

        toast.classList.remove("show");

    }, 4000);

}


if (toastClose) {

    toastClose.addEventListener("click", () => {

        toast.classList.remove("show");

        clearTimeout(toastTimer);

    });

}


/* =========================================================
   PROJECT CASE STUDY CONTENT
========================================================= */

const projectContent = {

    equipment: `
        <p class="doc-type">PROJECT 01 / SYSTEM DEVELOPMENT</p>

        <h2>Equipment Borrowing Management System</h2>

        <p>
            A web-based application developed to help manage equipment
            borrowing transactions, user requests, approvals, and returns.
        </p>

        <div class="project-gallery">

              <figure>
                <img
                    src="assets/projects/equipment-dashboard.png"
                    alt="Equipment Borrowing Management System Dashboard"
                    loading="lazy"
                    tabindex="0"
                    role="button"
                    aria-label="Enlarge Equipment System Dashboard">

                <figcaption>
                    Equipment System Dashboard
                </figcaption>
            </figure>

            <figure>
                <img
                    src="assets/projects/equipment-list.png"
                    alt="Equipment Management List"
                    loading="lazy"
                    tabindex="0"
                    role="button"
                    aria-label="Enlarge Equipment List">

                <figcaption>
                    Equipment List
                </figcaption>
            </figure>


        </div>

        <div class="case-meta">
            <span class="tag">Python</span>
            <span class="tag">Django</span>
            <span class="tag">MySQL</span>
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>

        <div class="case-repository">
            <a class="btn" href="https://github.com/unarce123/equipment-borrowing-system" target="_blank" rel="noopener noreferrer">
                View GitHub Repository ↗
            </a>
        </div>

        <div class="case-block">

            <h3>Project Overview</h3>

            <p>
                The system provides a centralized platform for managing
                equipment borrowing activities. It supports different
                user roles, allowing administrators, staff, and users
                to access features based on their responsibilities.
            </p>

        </div>

        <div class="case-block">

            <h3>Borrowing Workflow</h3>

            <div class="workflow-diagram">

                <div class="workflow-step">
                    <span class="workflow-number">01</span>
                    <b>Submit Request</b>
                    <p>
                        The user selects equipment and submits a
                        borrowing request.
                    </p>
                </div>

                <div class="workflow-step">
                    <span class="workflow-number">02</span>
                    <b>Review Request</b>
                    <p>
                        Authorized staff reviews the submitted request.
                    </p>
                </div>

                <div class="workflow-step">
                    <span class="workflow-number">03</span>
                    <b>Approval</b>
                    <p>
                        The request is approved or rejected.
                    </p>
                </div>

                <div class="workflow-step">
                    <span class="workflow-number">04</span>
                    <b>Return Monitoring</b>
                    <p>
                        The system tracks due dates and equipment returns.
                    </p>
                </div>

            </div>

        </div>

        <div class="case-block">

            <h3>Problem Addressed</h3>

            <p>
                Manual equipment borrowing processes can make it difficult
                to monitor requests, approvals, due dates, and returned
                equipment. The project aims to organize these activities
                through a web-based management system.
            </p>

        </div>

        <div class="case-block">

            <h3>Key Features</h3>

            <ul>
                <li>Role-based access for administrators, staff, and users.</li>
                <li>Equipment borrowing request management.</li>
                <li>Borrowing approval and rejection processes.</li>
                <li>Due-date and return monitoring.</li>
                <li>Overdue status and penalty calculation.</li>
                <li>Notification management.</li>
            </ul>

        </div>

        <div class="case-block">

            <h3>Technologies Used</h3>

            <p>
                Python and Django were used for backend development,
                MySQL for database management, and HTML and CSS for
                the user interface.
            </p>

        </div>

        <div class="case-block">

            <h3>My Role and Contributions</h3>

            <p>
                Participated in system planning, database design,
                application development, interface implementation,
                and testing.
            </p>

        </div>
    `,

    ar: `
        <p class="doc-type">PROJECT 02 / COMPUTER VISION</p>

        <h2>AR Hand & Face Tracker – Boss Fight</h2>

        <p>
            An interactive augmented reality application that combines
            hand tracking and face tracking to create a gesture-controlled
            boss battle experience.
        </p>

        <div class="project-gallery">

            <figure>
                <img
                    src="assets/projects/ar-boss-fight.png"
                    alt="AR Hand and Face Tracker Boss Fight gameplay screen"
                    loading="lazy"
                    tabindex="0"
                    role="button"
                    aria-label="Enlarge AR Boss Fight Gameplay Screenshot">

                <figcaption>
                    Boss Fight Gameplay
                </figcaption>
            </figure>

            <figure>
                <img
                    src="assets/projects/ar-start-screen.png"
                    alt="AR Hand and Face Tracker start screen"
                    loading="lazy"
                    tabindex="0"
                    role="button"
                    aria-label="Enlarge AR Start Screen Screenshot">

                <figcaption>
                    Game Start Screen
                </figcaption>
            </figure>

        </div>

        <div class="case-meta">
            <span class="tag">Python</span>
            <span class="tag">OpenCV</span>
            <span class="tag">MediaPipe</span>
            <span class="tag">Computer Vision</span>
            <span class="tag">AR</span>
        </div>

        <div class="case-repository">
            <a class="btn" href="https://github.com/unarce123/AR-Hand-Face-Tracker-Boss-Fight" target="_blank" rel="noopener noreferrer">
                View GitHub Repository ↗
            </a>
        </div>

        <div class="case-block">

            <h3>Project Overview</h3>

            <p>
                This project uses a webcam to track the user's face and
                hand movements in real time. It transforms detected
                gestures into game interactions, allowing the user to
                control attacks and interact with a virtual boss.
            </p>

        </div>

        <div class="case-block">

            <h3>Core Technologies</h3>

            <ul>
                <li>OpenCV for webcam input and image processing.</li>
                <li>MediaPipe for real-time hand landmark detection.</li>
                <li>Face tracking for player interaction.</li>
                <li>Gesture recognition for attack activation.</li>
                <li>Augmented reality elements for the game interface.</li>
            </ul>

        </div>

        <div class="case-block">

            <h3>Gameplay Features</h3>

            <ul>
                <li>Real-time face and hand tracking.</li>
                <li>Gesture-controlled player attacks.</li>
                <li>Boss health and shield indicators.</li>
                <li>Score tracking and game-over state.</li>
                <li>Visual effects and animated attacks.</li>
                <li>Sound effects and background music.</li>
            </ul>

        </div>

        <div class="case-block">

            <h3>Problem Addressed</h3>

            <p>
                Traditional computer interactions rely heavily on
                keyboards and mouse input. This project explores
                natural user interaction through camera-based
                hand and face tracking.
            </p>

        </div>

        <div class="case-block">

            <h3>My Role and Contributions</h3>

            <p>
                Worked on the project concept, computer vision
                implementation, gesture-based interaction, game
                mechanics, and interface development.
            </p>

        </div>

    `

};


/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const projectButtons = document.querySelectorAll("[data-project]");

let lastActiveProjectButton = null;


function openProjectModal(projectName, triggerButton) {

    if (!projectModal || !modalContent) {
        return;
    }

    const content = projectContent[projectName];

    if (!content) {
        return;
    }

    lastActiveProjectButton = triggerButton || document.activeElement;

    modalContent.innerHTML = content;

    projectModal.classList.add("open");
    projectModal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

    if (modalClose) {
        modalClose.focus();
    }

}


function closeProjectModal(restoreFocus = true) {

    if (!projectModal) {
        return;
    }

    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    if (modalContent) {
        modalContent.innerHTML = "";
    }

    if (restoreFocus && lastActiveProjectButton) {
        lastActiveProjectButton.focus();
    }

    lastActiveProjectButton = null;

}


projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const projectName = button.dataset.project;

        openProjectModal(projectName, button);

    });

});


if (modalClose) {

    modalClose.addEventListener("click", () => {
        closeProjectModal();
    });

}


if (projectModal) {

    projectModal.addEventListener("click", event => {

        if (event.target === projectModal) {
            closeProjectModal();
        }

    });

}


/* =========================================================
   SCREENSHOT LIGHTBOX
========================================================= */

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

let lastActiveScreenshot = null;


function openScreenshotLightbox(image) {

    if (!imageLightbox || !lightboxImage) {
        return;
    }

    lastActiveScreenshot = image;

    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt || "Project screenshot";

    const caption = image
        .closest("figure")
        ?.querySelector("figcaption");

    if (lightboxCaption) {

        lightboxCaption.textContent = caption
            ? caption.textContent.trim()
            : image.alt;

    }

    imageLightbox.classList.add("open");
    imageLightbox.setAttribute("aria-hidden", "false");

    if (lightboxClose) {
        lightboxClose.focus();
    }

}


function closeImageLightbox(restoreFocus = true) {

    if (!imageLightbox) {
        return;
    }

    imageLightbox.classList.remove("open");
    imageLightbox.setAttribute("aria-hidden", "true");

    if (lightboxImage) {
        lightboxImage.removeAttribute("src");
        lightboxImage.alt = "";
    }

    if (restoreFocus && lastActiveScreenshot) {
        lastActiveScreenshot.focus();
    }

    lastActiveScreenshot = null;

}


if (modalContent) {

    modalContent.addEventListener("click", event => {

        const screenshot = event.target.closest(".project-gallery img");

        if (screenshot) {
            openScreenshotLightbox(screenshot);
        }

    });


    modalContent.addEventListener("keydown", event => {

        if (event.key !== "Enter" && event.key !== " ") {
            return;
        }

        const screenshot = event.target.closest(".project-gallery img");

        if (screenshot) {

            event.preventDefault();

            openScreenshotLightbox(screenshot);

        }

    });

}


if (lightboxClose) {

    lightboxClose.addEventListener("click", () => {
        closeImageLightbox();
    });

}


if (imageLightbox) {

    imageLightbox.addEventListener("click", event => {

        if (event.target === imageLightbox) {
            closeImageLightbox();
        }

    });

}


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (imageLightbox && imageLightbox.classList.contains("open")) {

            closeImageLightbox();

        } else if (
            projectModal &&
            projectModal.classList.contains("open")
        ) {

            closeProjectModal();

        } else if (toast && toast.classList.contains("show")) {

            toast.classList.remove("show");
            clearTimeout(toastTimer);

        }

    }

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   CONTACT FORM - EMAILJS DIRECT SENDING
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", async event => {

        event.preventDefault();

        const sender = document.getElementById("sender").value.trim();

        const senderEmail = document.getElementById("senderEmail").value.trim();

        const message = document.getElementById("message").value.trim();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );


        if (!sender || !senderEmail || !message) {

            showToast(
                "Incomplete information",
                "Please complete all fields before sending your message.",
                "error"
            );

            return;

        }


        if (!window.emailjs) {

            showToast(
                "Email service unavailable",
                "The email service could not be loaded. Please try again later.",
                "error"
            );

            return;

        }


        const originalButtonText = submitButton.textContent;

        submitButton.disabled = true;

        submitButton.textContent = "Sending...";


        try {

            await emailjs.send(
                "service_a01ad7c",
                "template_sl08bko",
                {
                    sender: sender,
                    senderEmail: senderEmail,
                    message: message
                }
            );


            showToast(
                "Message sent successfully!",
                "Thank you for reaching out. I'll get back to you soon.",
                "success"
            );

            contactForm.reset();


        } catch (error) {

            console.error("EmailJS Error:", error);

            showToast(
                "Message not sent",
                "Something went wrong. Please try again later.",
                "error"
            );

        } finally {

            submitButton.disabled = false;

            submitButton.textContent = originalButtonText;

        }

    });

}


/* =========================================================
   AUTOMATIC FOOTER YEAR
========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("main section[id]");
const navigationLinks = document.querySelectorAll(".navlinks a");


function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionBottom = sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.id;

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveNavigation);

window.addEventListener("load", updateActiveNavigation);


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* =========================================================
   HERO TYPEWRITER EFFECT
========================================================= */

const typingText = document.getElementById("typingText");

if (typingText) {

    const typingPhrases = [
        "IT Support",
        "Computer Troubleshooting",
        "Hardware & Software Installation",
        "Basic Networking"
    ];

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {

        typingText.textContent = typingPhrases[0];

    } else {

        let phraseIndex = 0;
        let characterIndex = 0;
        let isDeleting = false;

        function typeHeroText() {

            const currentPhrase = typingPhrases[phraseIndex];

            if (isDeleting) {
                characterIndex--;
            } else {
                characterIndex++;
            }

            typingText.textContent = currentPhrase.substring(
                0,
                characterIndex
            );

            let typingSpeed = isDeleting ? 45 : 85;

            if (!isDeleting && characterIndex === currentPhrase.length) {

                isDeleting = true;
                typingSpeed = 1400;

            } else if (isDeleting && characterIndex === 0) {

                isDeleting = false;

                phraseIndex = (
                    phraseIndex + 1
                ) % typingPhrases.length;

                typingSpeed = 350;

            }

            window.setTimeout(typeHeroText, typingSpeed);

        }

        typeHeroText();

    }

}