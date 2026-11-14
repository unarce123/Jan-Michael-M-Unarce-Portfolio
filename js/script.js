
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
   GMAIL COMPOSE FUNCTION
========================================================= */

function openGmailCompose(recipient, subject = "", body = "") {
    const gmailComposeUrl =
        "https://mail.google.com/mail/u/0/?view=cm&fs=1" +
        `&to=${encodeURIComponent(recipient)}` +
        `&su=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

    window.location.href = gmailComposeUrl;
}


/* =========================================================
   DIRECT EMAIL LINKS - OPEN GMAIL INSTEAD OF OUTLOOK
========================================================= */

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

        const mailtoAddress = link.getAttribute("href");
        const emailDetails = mailtoAddress.substring(7).split("?");

        const recipient = decodeURIComponent(emailDetails[0]);

        let subject = "";
        let body = "";

        if (emailDetails[1]) {

            const parameters = new URLSearchParams(emailDetails[1]);

            subject = parameters.get("subject") || "";
            body = parameters.get("body") || "";

        }

        openGmailCompose(recipient, subject, body);

    });

});


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

            <h3>Technology Stack</h3>

            <p>
                Django was used as the web framework, Python for application
                logic, and MySQL for database management. HTML and CSS
                were used to build the user interface.
            </p>

        </div>

        <div class="case-block">

            <h3>My Contribution</h3>

            <p class="contribution-note">
                This was a group academic project. The system was developed
                collaboratively by the team. The specific responsibilities
                I personally handled should be identified separately from
                the shared project features.
            </p>

        </div>

        <div class="case-block">

            <h3>Testing Scenarios</h3>

            <p>
                These functional scenarios can be used to validate the
                system. Record the actual outcome after performing each test.
            </p>

            <div class="test-checklist">

                <div class="test-item">
                    <span class="test-number">01</span>
                    <div>
                        <b>User Role Access</b>
                        <p>
                            Verify that administrator, staff, and user
                            accounts access their authorized features
                            and dashboards.
                        </p>
                    </div>
                </div>

                <div class="test-item">
                    <span class="test-number">02</span>
                    <div>
                        <b>Borrowing Request Management</b>
                        <p>
                            Verify request submission and pending, approved,
                            rejected, and returned statuses.
                        </p>
                    </div>
                </div>

                <div class="test-item">
                    <span class="test-number">03</span>
                    <div>
                        <b>Due Date and Penalty Calculation</b>
                        <p>
                            Verify the seven-day due date after approval
                            and the ₱10-per-day overdue penalty.
                        </p>
                    </div>
                </div>

                <div class="test-item">
                    <span class="test-number">04</span>
                    <div>
                        <b>Notifications</b>
                        <p>
                            Verify that relevant notifications are generated
                            and unread notification status is updated.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div class="case-block">

            <h3>Learning Experience</h3>

            <p>
                This project provided experience in web application
                development, database integration, user authentication,
                role-based access, and organizing system functionality.
            </p>

        </div>

        <div class="case-block">

            <h3>Repository</h3>

            <p>
                <a
                    href="https://github.com/unarce123/equipment-borrowing-system"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Project Repository →
                </a>
            </p>

        </div>
    `,


    ar: `
        <p class="doc-type">PROJECT 02 / COMPUTER VISION</p>

        <h2>AR Hand & Face Tracker – Boss Fight</h2>

        <p>
            An interactive computer vision project that combines
            real-time hand and face tracking with gesture-based gameplay.
        </p>

        <div class="project-gallery">

            <figure>
                <img
                    src="assets/projects/ar-boss-fight.png"
                    alt="AR Hand and Face Tracker Boss Fight Gameplay"
                    loading="lazy"
                    tabindex="0"
                    role="button"
                    aria-label="Enlarge Boss Fight Gameplay">

                <figcaption>
                    Boss Fight Gameplay
                </figcaption>
            </figure>

            <figure>
                <img
                    src="assets/projects/ar-start-screen.png"
                    alt="AR Hand and Face Tracker Game Interface"
                    loading="lazy"
                    tabindex="0"
                    role="button"
                    aria-label="Enlarge Game Interface">

                <figcaption>
                    Game Interface
                </figcaption>
            </figure>

        </div>

        <div class="case-meta">
            <span class="tag">Python</span>
            <span class="tag">OpenCV</span>
            <span class="tag">MediaPipe</span>
            <span class="tag">Computer Vision</span>
        </div>

        <div class="case-block">

            <h3>Project Overview</h3>

            <p>
                The application uses a camera to detect and track hand
                and face landmarks. These tracking capabilities are
                integrated into an interactive boss fight game.
            </p>

        </div>

        <div class="case-block">

            <h3>Project Purpose</h3>

            <p>
                The project explores how computer vision can be used
                to recognize human movements and translate them into
                interactive application controls.
            </p>

        </div>

        <div class="case-block">

            <h3>Key Features</h3>

            <ul>
                <li>Real-time hand tracking.</li>
                <li>Face detection and tracking.</li>
                <li>Gesture-based game interaction.</li>
                <li>Boss health and shield display.</li>
                <li>Player score tracking.</li>
                <li>Interactive game effects and visual feedback.</li>
            </ul>

        </div>

        <div class="case-block">

            <h3>Technology Stack</h3>

            <p>
                Python is used for the main application logic.
                OpenCV handles camera input and image processing,
                while MediaPipe Tasks provides hand landmark detection.
            </p>

        </div>

        <div class="case-block">

            <h3>My Contribution</h3>

            <p>
                Worked on combining hand and face tracking functionality
                into the AR Hand & Face Tracker – Boss Fight application.
                The project brings together camera input, landmark
                detection, and interactive gameplay.
            </p>

            <p>
                Also worked on integrating gesture-based player actions
                and the game's boss health, shield, and score features.
            </p>

        </div>

        <div class="case-block">

            <h3>Testing Scenarios</h3>

            <p>
                These functional scenarios can be used to evaluate
                the tracking and gameplay features. Record the actual
                outcome after performing each test.
            </p>

            <div class="test-checklist">

                <div class="test-item">
                    <span class="test-number">01</span>
                    <div>
                        <b>Camera Initialization</b>
                        <p>
                            Verify that the application can access
                            the camera and display its video feed.
                        </p>
                    </div>
                </div>

                <div class="test-item">
                    <span class="test-number">02</span>
                    <div>
                        <b>Hand and Face Tracking</b>
                        <p>
                            Verify that hand landmarks and face tracking
                            respond to movements in front of the camera.
                        </p>
                    </div>
                </div>

                <div class="test-item">
                    <span class="test-number">03</span>
                    <div>
                        <b>Gesture Interaction</b>
                        <p>
                            Verify that supported hand gestures trigger
                            their corresponding game actions.
                        </p>
                    </div>
                </div>

                <div class="test-item">
                    <span class="test-number">04</span>
                    <div>
                        <b>Game Status and Score</b>
                        <p>
                            Verify updates to boss health, shield,
                            player score, and game-over behavior
                            during gameplay.
                        </p>
                    </div>
                </div>

            </div>

        </div>

        <div class="case-block">

            <h3>Learning Experience</h3>

            <p>
                This project provided experience in computer vision,
                camera input handling, hand and face tracking,
                gesture interaction, and combining different
                programming libraries into one application.
            </p>

        </div>

        <div class="case-block">

            <h3>Repository</h3>

            <p>
                <a
                    href="https://github.com/unarce123/AR-Hand-Face-Tracker-Boss-Fight"
                    target="_blank"
                    rel="noopener noreferrer">
                    View Project Repository →
                </a>
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

let lastProjectTrigger = null;


document.querySelectorAll("[data-project]").forEach(button => {

    button.addEventListener("click", () => {

        const project = button.dataset.project;

        if (!projectContent[project] || !projectModal || !modalContent) {
            return;
        }

        lastProjectTrigger = button;

        modalContent.innerHTML = projectContent[project];

        projectModal.classList.add("open");
        projectModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        if (modalClose) {
            modalClose.focus();
        }

    });

});


function closeProjectModal() {

    if (!projectModal) {
        return;
    }

    closeImageLightbox(false);

    projectModal.classList.remove("open");
    projectModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    if (lastProjectTrigger) {
        lastProjectTrigger.focus();
        lastProjectTrigger = null;
    }

}


if (modalClose) {
    modalClose.addEventListener("click", closeProjectModal);
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
   CONTACT FORM - OPEN GMAIL DIRECTLY
========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const sender = document.getElementById("sender").value.trim();

        const senderEmail = document.getElementById("senderEmail").value.trim();

        const message = document.getElementById("message").value.trim();


        if (!sender || !senderEmail || !message) {

            alert("Please complete all fields.");

            return;

        }


        const subject = `Portfolio Inquiry from ${sender}`;

        const body =
            `Name: ${sender}\n` +
            `Email: ${senderEmail}\n\n` +
            `Message:\n${message}`;


        openGmailCompose(
            PORTFOLIO_CONFIG.email,
            subject,
            body
        );

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
