<<<<<<< HEAD
/* =====================================================
   SH.F.K. PËRPARIMI – ÇEGRAN
   MAIN STYLESHEET
===================================================== */


/* ================= VARIABLES ================= */

:root {

    --blue: #1261a0;
    --blue-light: #2f80c9;
    --navy: #071b35;
    --navy-2: #0b2747;

    --black: #101820;
    --white: #ffffff;

    --gray-50: #f7f9fc;
    --gray-100: #eef2f6;
    --gray-200: #dce3eb;
    --gray-500: #64748b;
    --gray-700: #334155;

    --shadow-sm:
        0 4px 15px rgba(7, 27, 53, 0.06);

    --shadow:
        0 15px 40px rgba(7, 27, 53, 0.10);

    --shadow-lg:
        0 25px 70px rgba(7, 27, 53, 0.15);

    --radius: 14px;

    --transition:
        all 0.3s ease;
}


/* ================= RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}


body {
    font-family: "Inter", sans-serif;
    color: var(--black);
    background: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
}


img {
    max-width: 100%;
    display: block;
}


a {
    text-decoration: none;
    color: inherit;
}


button,
input,
textarea {
    font-family: inherit;
}


/* ================= CONTAINER ================= */

.container {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
}


/* ================= HEADER ================= */

.header {

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background: rgba(255, 255, 255, 0.96);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(7, 27, 53, 0.08);

    transition: var(--transition);
}


.header.scrolled {

    box-shadow:
        0 8px 30px rgba(7, 27, 53, 0.08);

}


.nav-container {

    min-height: 82px;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


/* ================= LOGO ================= */

.logo-area {

    display: flex;

    align-items: center;

    gap: 12px;
}


.logo {

    width: 54px;
    height: 54px;

    object-fit: contain;

    border-radius: 50%;
}


.school-name {

    display: flex;

    flex-direction: column;

    line-height: 1.1;
}


.school-name span {

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1.5px;

    color: var(--blue);
}


.school-name strong {

    font-size: 18px;

    font-weight: 800;

    color: var(--navy);
}


.school-name small {

    margin-top: 2px;

    color: var(--gray-500);

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 1px;
}


/* ================= NAVIGATION ================= */

.navbar {

    display: flex;

    align-items: center;

    gap: 4px;
}


.nav-link {

    position: relative;

    padding: 10px 12px;

    font-size: 13px;

    font-weight: 600;

    color: var(--gray-700);

    transition: var(--transition);
}


.nav-link:hover,
.nav-link.active {

    color: var(--blue);
}


.nav-link:not(.contact-button)::after {

    content: "";

    position: absolute;

    left: 12px;
    right: 12px;

    bottom: 4px;

    height: 2px;

    background: var(--blue);

    transform: scaleX(0);

    transform-origin: center;

    transition: var(--transition);
}


.nav-link:hover::after,
.nav-link.active::after {

    transform: scaleX(1);
}


.contact-button {

    margin-left: 8px;

    color: white;

    background: var(--navy);

    border-radius: 8px;

    padding: 11px 18px;
}


.contact-button:hover {

    color: white;

    background: var(--blue);

    transform: translateY(-2px);
}


/* ================= MOBILE BUTTON ================= */

.menu-toggle {

    display: none;

    width: 42px;
    height: 42px;

    border: 0;

    background: var(--gray-100);

    border-radius: 8px;

    cursor: pointer;

    padding: 9px;
}


.menu-toggle span {

    display: block;

    width: 100%;
    height: 2px;

    margin: 5px 0;

    background: var(--navy);

    transition: var(--transition);
}


/* ================= MOBILE MENU ================= */

.mobile-menu {

    position: fixed;

    top: 82px;
    left: 0;

    width: 100%;

    background: white;

    z-index: 999;

    padding: 15px 25px 25px;

    display: none;

    flex-direction: column;

    box-shadow: var(--shadow);

    transform: translateY(-20px);

    opacity: 0;

    transition: var(--transition);
}


.mobile-menu.open {

    display: flex;

    transform: translateY(0);

    opacity: 1;
}


.mobile-menu a {

    padding: 14px 5px;

    border-bottom: 1px solid var(--gray-100);

    color: var(--navy);

    font-weight: 600;
}


.mobile-menu a:hover {

    color: var(--blue);
}


/* ================= HERO ================= */

.hero {

    position: relative;

    min-height: 720px;

    margin-top: 82px;

    display: flex;

    align-items: center;

    overflow: hidden;

    background: var(--navy);
}


.hero-image {

    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: center;
}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(7, 27, 53, 0.94) 0%,
            rgba(7, 27, 53, 0.78) 45%,
            rgba(7, 27, 53, 0.30) 100%
        );
}


.hero-content {

    position: relative;

    z-index: 2;
}


.hero-text {

    max-width: 690px;

    color: white;
}


.hero-badge {

    display: inline-flex;

    padding: 8px 13px;

    margin-bottom: 20px;

    border: 1px solid rgba(255,255,255,0.25);

    background: rgba(255,255,255,0.08);

    backdrop-filter: blur(8px);

    border-radius: 100px;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1.5px;
}


.hero h1 {

    font-size: clamp(44px, 6vw, 76px);

    line-height: 1.04;

    letter-spacing: -3px;

    font-weight: 800;

    margin-bottom: 25px;
}


.hero h1 span {

    display: block;

    color: #67b7ff;
}


.hero p {

    max-width: 570px;

    font-size: 18px;

    color: rgba(255,255,255,0.82);

    margin-bottom: 34px;
}


.hero-buttons {

    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}


/* ================= BUTTONS ================= */

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding: 13px 22px;

    border-radius: 8px;

    font-size: 13px;

    font-weight: 700;

    border: 1px solid transparent;

    cursor: pointer;

    transition: var(--transition);
}


.btn-primary {

    color: white;

    background: var(--blue);

    box-shadow:
        0 8px 25px rgba(18, 97, 160, 0.3);
}


.btn-primary:hover {

    background: var(--blue-light);

    transform: translateY(-3px);
}


.btn-outline {

    color: white;

    border-color: rgba(255,255,255,0.4);

    background: rgba(255,255,255,0.05);
}


.btn-outline:hover {

    background: white;

    color: var(--navy);
}


.btn-light {

    background: white;

    color: var(--navy);
}


.btn-light:hover {

    transform: translateY(-3px);

    box-shadow: var(--shadow);
}


/* ================= SCROLL ================= */

.scroll-indicator {

    position: absolute;

    bottom: 25px;

    left: 50%;

    transform: translateX(-50%);
}


.scroll-indicator span {

    display: block;

    width: 20px;
    height: 32px;

    border: 2px solid rgba(255,255,255,0.6);

    border-radius: 20px;

    position: relative;
}


.scroll-indicator span::after {

    content: "";

    position: absolute;

    top: 6px;

    left: 50%;

    width: 3px;
    height: 6px;

    border-radius: 10px;

    background: white;

    transform: translateX(-50%);

    animation: scrollDown 1.8s infinite;
}


@keyframes scrollDown {

    0% {
        opacity: 0;
        transform: translate(-50%, 0);
    }

    30% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-50%, 10px);
    }
}


/* ================= QUICK INFO ================= */

.quick-info {

    position: relative;

    z-index: 5;

    margin-top: -45px;
}


.quick-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    background: white;

    border-radius: var(--radius);

    box-shadow: var(--shadow-lg);

    overflow: hidden;
}


.quick-card {

    padding: 25px;

    display: flex;

    align-items: center;

    gap: 14px;

    border-right: 1px solid var(--gray-100);
}


.quick-card:last-child {

    border-right: none;
}


.quick-icon {

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    flex-shrink: 0;

    border-radius: 10px;

    background: #eaf4ff;

    font-size: 20px;
}


.quick-card strong {

    display: block;

    font-size: 13px;

    color: var(--navy);
}


.quick-card span {

    display: block;

    font-size: 11px;

    color: var(--gray-500);
}


/* ================= SECTIONS ================= */

.section {

    padding: 110px 0;
}


.section-heading {

    max-width: 680px;

    margin-bottom: 55px;
}


.section-heading.center {

    text-align: center;

    margin-left: auto;
    margin-right: auto;
}


.section-label {

    display: inline-block;

    margin-bottom: 12px;

    color: var(--blue);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;
}


.section-heading h2 {

    font-size: clamp(32px, 4vw, 48px);

    line-height: 1.1;

    letter-spacing: -1.5px;

    color: var(--navy);

    margin-bottom: 16px;
}


.section-heading h2 span {

    color: var(--blue);
}


.section-heading p {

    color: var(--gray-500);

    font-size: 15px;
}


/* ================= ABOUT ================= */

.about {

    background: white;
}


.about-grid {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 80px;

    align-items: center;
}


.about-image {

    position: relative;
}


.about-image img {

    width: 100%;

    height: 460px;

    object-fit: cover;

    border-radius: var(--radius);

    position: relative;

    z-index: 2;

    box-shadow: var(--shadow);
}


.image-decoration {

    position: absolute;

    width: 100%;
    height: 100%;

    border: 2px solid var(--blue);

    border-radius: var(--radius);

    left: 20px;
    top: 20px;

    z-index: 1;
}


.about-content h3 {

    color: var(--navy);

    font-size: 28px;

    margin-bottom: 18px;
}


.about-content p {

    color: var(--gray-500);

    font-size: 15px;

    margin-bottom: 15px;
}


.about-features {

    margin-top: 30px;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 13px;
}


.about-features div {

    display: flex;

    gap: 8px;

    align-items: center;

    color: var(--navy);

    font-size: 13px;

    font-weight: 600;
}


.about-features span {

    width: 22px;
    height: 22px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background: #eaf4ff;

    color: var(--blue);

    font-size: 12px;
}


/* ================= STATS ================= */

.stats-section {

    padding: 70px 0;

    background: var(--navy);

    color: white;
}


.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    text-align: center;
}


.stat {

    border-right:
        1px solid rgba(255,255,255,0.12);
}


.stat:last-child {

    border-right: none;
}


.stat strong {

    font-size: 48px;

    font-weight: 800;

    line-height: 1;
}


.stat > span {

    color: #67b7ff;

    font-size: 28px;

    font-weight: 800;
}


.stat p {

    margin-top: 8px;

    color: rgba(255,255,255,0.65);

    font-size: 12px;

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* ================= STAFF ================= */

.staff {

    background: var(--gray-50);
}


.staff-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


.staff-card {

    background: white;

    border-radius: var(--radius);

    overflow: hidden;

    box-shadow: var(--shadow-sm);

    transition: var(--transition);
}


.staff-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow);
}


.staff-placeholder {

    height: 260px;

    display: grid;

    place-items: center;

    background:
        linear-gradient(
            135deg,
            #eaf4ff,
            #dcecff
        );

    font-size: 70px;
}


.staff-info {

    padding: 22px;
}


.staff-info h3 {

    color: var(--navy);

    font-size: 17px;
}


.staff-info p {

    margin-top: 4px;

    color: var(--blue);

    font-size: 12px;

    font-weight: 600;
}


/* ================= CLASSES ================= */

.classes {

    background: white;
}


.classes-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 16px;
}


.class-card {

    padding: 28px;

    border: 1px solid var(--gray-200);

    border-radius: var(--radius);

    position: relative;

    overflow: hidden;

    transition: var(--transition);
}


.class-card:hover {

    border-color: var(--blue);

    transform: translateY(-5px);

    box-shadow: var(--shadow);
}


.class-number {

    font-size: 12px;

    font-weight: 800;

    color: var(--blue);

    letter-spacing: 1px;
}


.class-card h3 {

    margin-top: 18px;

    color: var(--navy);

    font-size: 20px;
}


.class-card p {

    margin-top: 7px;

    color: var(--gray-500);

    font-size: 13px;
}


/* ================= ACTIVITIES ================= */

.activities {

    background: var(--gray-50);
}


.activities-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


.activity-card {

    padding: 30px;

    background: white;

    border-radius: var(--radius);

    box-shadow: var(--shadow-sm);

    transition: var(--transition);
}


.activity-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow);
}


.activity-icon {

    width: 50px;
    height: 50px;

    display: grid;

    place-items: center;

    background: #eaf4ff;

    border-radius: 10px;

    font-size: 23px;

    margin-bottom: 20px;
}


.activity-card h3 {

    color: var(--navy);

    font-size: 18px;

    margin-bottom: 10px;
}


.activity-card p {

    color: var(--gray-500);

    font-size: 13px;

    margin-bottom: 20px;
}


.activity-card a {

    color: var(--blue);

    font-size: 12px;

    font-weight: 700;
}


/* ================= NEWS ================= */

.news {

    background: white;
}


.news-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


.news-card {

    display: flex;

    gap: 18px;

    padding: 25px;

    border: 1px solid var(--gray-200);

    border-radius: var(--radius);

    transition: var(--transition);
}


.news-card:hover {

    border-color: var(--blue);

    box-shadow: var(--shadow);

    transform: translateY(-4px);
}


.news-date {

    flex-shrink: 0;

    width: 55px;
    height: 65px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    background: var(--navy);

    color: white;

    border-radius: 8px;
}


.news-date strong {

    font-size: 22px;

    line-height: 1;
}


.news-date span {

    margin-top: 3px;

    font-size: 9px;

    color: #67b7ff;

    font-weight: 700;
}


.news-category {

    font-size: 10px;

    color: var(--blue);

    font-weight: 800;

    text-transform: uppercase;
}


.news-content h3 {

    margin: 6px 0;

    color: var(--navy);

    font-size: 16px;

    line-height: 1.3;
}


.news-content p {

    color: var(--gray-500);

    font-size: 12px;

    margin-bottom: 12px;
}


.news-content a {

    color: var(--blue);

    font-size: 11px;

    font-weight: 700;
}


/* ================= DOCUMENTS ================= */

.documents {

    background: var(--gray-50);
}


.documents-list {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 12px;
}


.document-item {

    display: flex;

    align-items: center;

    gap: 16px;

    padding: 20px;

    background: white;

    border: 1px solid var(--gray-200);

    border-radius: 10px;

    transition: var(--transition);
}


.document-item:hover {

    border-color: var(--blue);

    transform: translateX(4px);
}


.document-icon {

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    border-radius: 8px;

    background: #eaf4ff;

    font-size: 19px;
}


.document-item h3 {

    font-size: 14px;

    color: var(--navy);
}


.document-item span {

    font-size: 11px;

    color: var(--gray-500);
}


.document-item .download {

    margin-left: auto;

    font-size: 22px;

    color: var(--blue);
}


/* ================= CTA ================= */

.cta {

    padding: 75px 0;

    background:
        linear-gradient(
            120deg,
            var(--navy),
            #0e3d68
        );

    color: white;
}


.cta-content {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;
}


.cta .section-label {

    color: #67b7ff;
}


.cta h2 {

    max-width: 650px;

    font-size: clamp(28px, 4vw, 42px);

    line-height: 1.15;

    letter-spacing: -1px;
}


/* ================= CONTACT ================= */

.contact {

    background: white;
}


.contact-grid {

    display: grid;

    grid-template-columns:
        0.8fr 1.2fr;

    gap: 70px;

    align-items: start;
}


.contact-info {

    display: flex;

    flex-direction: column;

    gap: 25px;
}


.contact-item {

    display: flex;

    align-items: center;

    gap: 15px;
}


.contact-icon {

    width: 48px;
    height: 48px;

    display: grid;

    place-items: center;

    background: #eaf4ff;

    border-radius: 10px;

    font-size: 19px;
}


.contact-item h3 {

    color: var(--navy);

    font-size: 14px;
}


.contact-item p {

    color: var(--gray-500);

    font-size: 12px;
}


/* ================= FORM ================= */

.contact-form {

    padding: 35px;

    background: var(--gray-50);

    border-radius: var(--radius);
}


.form-row {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}


.form-group {

    margin-bottom: 17px;
}


.form-group label {

    display: block;

    margin-bottom: 7px;

    color: var(--navy);

    font-size: 11px;

    font-weight: 700;
}


.form-group input,
.form-group textarea {

    width: 100%;

    padding: 13px 14px;

    border: 1px solid var(--gray-200);

    border-radius: 8px;

    outline: none;

    background: white;

    color: var(--black);

    font-size: 13px;

    resize: vertical;

    transition: var(--transition);
}


.form-group input:focus,
.form-group textarea:focus {

    border-color: var(--blue);

    box-shadow:
        0 0 0 3px rgba(18, 97, 160, 0.08);
}


.form-message {

    margin-top: 12px;

    color: var(--blue);

    font-size: 12px;

    font-weight: 600;
}


/* ================= FOOTER ================= */

.footer {

    background: #050f1d;

    color: white;

    padding-top: 70px;
}


.footer-grid {

    display: grid;

    grid-template-columns:
        2fr 1fr 1fr 1fr;

    gap: 50px;

    padding-bottom: 55px;
}


.footer-logo {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 18px;
}


.footer-logo img {

    width: 48px;
    height: 48px;

    object-fit: contain;

    border-radius: 50%;
}


.footer-logo strong,
.footer-logo span {

    display: block;
}


.footer-logo strong {

    font-size: 15px;
}


.footer-logo span {

    font-size: 11px;

    color: #67b7ff;
}


.footer-brand > p {

    max-width: 320px;

    color: rgba(255,255,255,0.55);

    font-size: 12px;
}


.footer-links h3,
.footer-social h3 {

    margin-bottom: 18px;

    font-size: 13px;
}


.footer-links a {

    display: block;

    margin-bottom: 10px;

    color: rgba(255,255,255,0.55);

    font-size: 12px;

    transition: var(--transition);
}


.footer-links a:hover {

    color: white;

    transform: translateX(3px);
}


.social-icons {

    display: flex;

    gap: 8px;
}


.social-icons a {

    width: 36px;
    height: 36px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(255,255,255,0.15);

    border-radius: 8px;

    font-weight: 700;

    transition: var(--transition);
}


.social-icons a:hover {

    background: var(--blue);

    border-color: var(--blue);
}


.footer-bottom {

    border-top:
        1px solid rgba(255,255,255,0.08);

    padding: 20px 0;

    text-align: center;
}


.footer-bottom p {

    color: rgba(255,255,255,0.4);

    font-size: 10px;
}


/* ================= BACK TO TOP ================= */

.back-to-top {

    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    border: none;

    border-radius: 50%;

    background: var(--blue);

    color: white;

    font-size: 20px;

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transform: translateY(15px);

    transition: var(--transition);

    z-index: 900;
}


.back-to-top.show {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}


.back-to-top:hover {

    background: var(--navy);

    transform: translateY(-3px);
}


/* =====================================================
   RESPONSIVE
===================================================== */


/* ================= TABLET ================= */

@media (max-width: 1050px) {

    .navbar {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .quick-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .quick-card:nth-child(2) {
        border-right: none;
    }

    .quick-card:nth-child(-n+2) {
        border-bottom: 1px solid var(--gray-100);
    }

    .about-grid {
        gap: 45px;
    }

    .staff-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .activities-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .footer-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


/* ================= MOBILE ================= */

@media (max-width: 700px) {

    .container {
        width: min(100% - 30px, 1180px);
    }

    .nav-container {
        min-height: 72px;
    }

    .mobile-menu {
        top: 72px;
    }

    .logo {
        width: 46px;
        height: 46px;
    }

    .school-name strong {
        font-size: 15px;
    }

    .school-name span {
        font-size: 8px;
    }

    .school-name small {
        font-size: 9px;
    }

    .hero {
        margin-top: 72px;
        min-height: 650px;
    }

    .hero-overlay {
        background:
            linear-gradient(
                90deg,
                rgba(7,27,53,0.93),
                rgba(7,27,53,0.65)
            );
    }

    .hero h1 {
        font-size: 45px;
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 15px;
    }

    .hero-buttons {
        flex-direction: column;

        align-items: stretch;

        max-width: 250px;
    }

    .btn {
        width: 100%;
    }

    .quick-info {
        margin-top: -25px;
    }

    .quick-grid {
        grid-template-columns: 1fr;
    }

    .quick-card {
        border-right: none;

        border-bottom: 1px solid var(--gray-100);
    }

    .quick-card:last-child {
        border-bottom: none;
    }

    .section {
        padding: 75px 0;
    }

    .section-heading {
        margin-bottom: 35px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .about-image img {
        height: 320px;
    }

    .image-decoration {
        left: 10px;
        top: 10px;
    }

    .about-features {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 35px 0;
    }

    .stat:nth-child(2) {
        border-right: none;
    }

    .stat:nth-child(3),
    .stat:nth-child(4) {
        border-top:
            1px solid rgba(255,255,255,0.12);
lla
        padding-top: 30px;
    }

    .staff-grid {
        grid-template-columns: 1fr;
    }

    .classes-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .activities-grid {
        grid-template-columns: 1fr;
    }

    .news-grid {
        grid-template-columns: 1fr;
    }

    .documents-list {
        grid-template-columns: 1fr;
    }

    .cta-content {
        flex-direction: column;

        align-items: flex-start;
    }

    .contact-grid {
        grid-template-columns: 1fr;

        gap: 45px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 25px 20px;
    }

    .footer-grid {
        grid-template-columns: 1fr;

        gap: 35px;
    }

}


/* ================= SMALL MOBILE ================= */

@media (max-width: 430px) {

    .hero h1 {
        font-size: 39px;
    }

    .classes-grid {
        grid-template-columns: 1fr;
    }

    .stat strong {
        font-size: 38px;
    }

    .news-card {
        flex-direction: column;
    }

    .news-date {
        width: 55px;
    }

=======
/* =====================================================
   SH.F.K. PËRPARIMI – ÇEGRAN
   MAIN STYLESHEET
===================================================== */


/* ================= VARIABLES ================= */

:root {

    --blue: #1261a0;
    --blue-light: #2f80c9;
    --navy: #071b35;
    --navy-2: #0b2747;

    --black: #101820;
    --white: #ffffff;

    --gray-50: #f7f9fc;
    --gray-100: #eef2f6;
    --gray-200: #dce3eb;
    --gray-500: #64748b;
    --gray-700: #334155;

    --shadow-sm:
        0 4px 15px rgba(7, 27, 53, 0.06);

    --shadow:
        0 15px 40px rgba(7, 27, 53, 0.10);

    --shadow-lg:
        0 25px 70px rgba(7, 27, 53, 0.15);

    --radius: 14px;

    --transition:
        all 0.3s ease;
}


/* ================= RESET ================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html {
    scroll-behavior: smooth;
    scroll-padding-top: 85px;
}


body {
    font-family: "Inter", sans-serif;
    color: var(--black);
    background: var(--white);
    line-height: 1.6;
    overflow-x: hidden;
}


img {
    max-width: 100%;
    display: block;
}


a {
    text-decoration: none;
    color: inherit;
}


button,
input,
textarea {
    font-family: inherit;
}


/* ================= CONTAINER ================= */

.container {
    width: min(1180px, calc(100% - 40px));
    margin: auto;
}


/* ================= HEADER ================= */

.header {

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background: rgba(255, 255, 255, 0.96);

    backdrop-filter: blur(15px);

    border-bottom: 1px solid rgba(7, 27, 53, 0.08);

    transition: var(--transition);
}


.header.scrolled {

    box-shadow:
        0 8px 30px rgba(7, 27, 53, 0.08);

}


.nav-container {

    min-height: 82px;

    display: flex;

    align-items: center;

    justify-content: space-between;

}


/* ================= LOGO ================= */

.logo-area {

    display: flex;

    align-items: center;

    gap: 12px;
}


.logo {

    width: 54px;
    height: 54px;

    object-fit: contain;

    border-radius: 50%;
}


.school-name {

    display: flex;

    flex-direction: column;

    line-height: 1.1;
}


.school-name span {

    font-size: 10px;

    font-weight: 700;

    letter-spacing: 1.5px;

    color: var(--blue);
}


.school-name strong {

    font-size: 18px;

    font-weight: 800;

    color: var(--navy);
}


.school-name small {

    margin-top: 2px;

    color: var(--gray-500);

    font-size: 11px;

    font-weight: 600;

    letter-spacing: 1px;
}


/* ================= NAVIGATION ================= */

.navbar {

    display: flex;

    align-items: center;

    gap: 4px;
}


.nav-link {

    position: relative;

    padding: 10px 12px;

    font-size: 13px;

    font-weight: 600;

    color: var(--gray-700);

    transition: var(--transition);
}


.nav-link:hover,
.nav-link.active {

    color: var(--blue);
}


.nav-link:not(.contact-button)::after {

    content: "";

    position: absolute;

    left: 12px;
    right: 12px;

    bottom: 4px;

    height: 2px;

    background: var(--blue);

    transform: scaleX(0);

    transform-origin: center;

    transition: var(--transition);
}


.nav-link:hover::after,
.nav-link.active::after {

    transform: scaleX(1);
}


.contact-button {

    margin-left: 8px;

    color: white;

    background: var(--navy);

    border-radius: 8px;

    padding: 11px 18px;
}


.contact-button:hover {

    color: white;

    background: var(--blue);

    transform: translateY(-2px);
}


/* ================= MOBILE BUTTON ================= */

.menu-toggle {

    display: none;

    width: 42px;
    height: 42px;

    border: 0;

    background: var(--gray-100);

    border-radius: 8px;

    cursor: pointer;

    padding: 9px;
}


.menu-toggle span {

    display: block;

    width: 100%;
    height: 2px;

    margin: 5px 0;

    background: var(--navy);

    transition: var(--transition);
}


/* ================= MOBILE MENU ================= */

.mobile-menu {

    position: fixed;

    top: 82px;
    left: 0;

    width: 100%;

    background: white;

    z-index: 999;

    padding: 15px 25px 25px;

    display: none;

    flex-direction: column;

    box-shadow: var(--shadow);

    transform: translateY(-20px);

    opacity: 0;

    transition: var(--transition);
}


.mobile-menu.open {

    display: flex;

    transform: translateY(0);

    opacity: 1;
}


.mobile-menu a {

    padding: 14px 5px;

    border-bottom: 1px solid var(--gray-100);

    color: var(--navy);

    font-weight: 600;
}


.mobile-menu a:hover {

    color: var(--blue);
}


/* ================= HERO ================= */

.hero {

    position: relative;

    min-height: 720px;

    margin-top: 82px;

    display: flex;

    align-items: center;

    overflow: hidden;

    background: var(--navy);
}


.hero-image {

    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;

    object-position: center;
}


.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(7, 27, 53, 0.94) 0%,
            rgba(7, 27, 53, 0.78) 45%,
            rgba(7, 27, 53, 0.30) 100%
        );
}


.hero-content {

    position: relative;

    z-index: 2;
}


.hero-text {

    max-width: 690px;

    color: white;
}


.hero-badge {

    display: inline-flex;

    padding: 8px 13px;

    margin-bottom: 20px;

    border: 1px solid rgba(255,255,255,0.25);

    background: rgba(255,255,255,0.08);

    backdrop-filter: blur(8px);

    border-radius: 100px;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1.5px;
}


.hero h1 {

    font-size: clamp(44px, 6vw, 76px);

    line-height: 1.04;

    letter-spacing: -3px;

    font-weight: 800;

    margin-bottom: 25px;
}


.hero h1 span {

    display: block;

    color: #67b7ff;
}


.hero p {

    max-width: 570px;

    font-size: 18px;

    color: rgba(255,255,255,0.82);

    margin-bottom: 34px;
}


.hero-buttons {

    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}


/* ================= BUTTONS ================= */

.btn {

    display: inline-flex;

    align-items: center;

    justify-content: center;

    padding: 13px 22px;

    border-radius: 8px;

    font-size: 13px;

    font-weight: 700;

    border: 1px solid transparent;

    cursor: pointer;

    transition: var(--transition);
}


.btn-primary {

    color: white;

    background: var(--blue);

    box-shadow:
        0 8px 25px rgba(18, 97, 160, 0.3);
}


.btn-primary:hover {

    background: var(--blue-light);

    transform: translateY(-3px);
}


.btn-outline {

    color: white;

    border-color: rgba(255,255,255,0.4);

    background: rgba(255,255,255,0.05);
}


.btn-outline:hover {

    background: white;

    color: var(--navy);
}


.btn-light {

    background: white;

    color: var(--navy);
}


.btn-light:hover {

    transform: translateY(-3px);

    box-shadow: var(--shadow);
}


/* ================= SCROLL ================= */

.scroll-indicator {

    position: absolute;

    bottom: 25px;

    left: 50%;

    transform: translateX(-50%);
}


.scroll-indicator span {

    display: block;

    width: 20px;
    height: 32px;

    border: 2px solid rgba(255,255,255,0.6);

    border-radius: 20px;

    position: relative;
}


.scroll-indicator span::after {

    content: "";

    position: absolute;

    top: 6px;

    left: 50%;

    width: 3px;
    height: 6px;

    border-radius: 10px;

    background: white;

    transform: translateX(-50%);

    animation: scrollDown 1.8s infinite;
}


@keyframes scrollDown {

    0% {
        opacity: 0;
        transform: translate(-50%, 0);
    }

    30% {
        opacity: 1;
    }

    100% {
        opacity: 0;
        transform: translate(-50%, 10px);
    }
}


/* ================= QUICK INFO ================= */

.quick-info {

    position: relative;

    z-index: 5;

    margin-top: -45px;
}


.quick-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    background: white;

    border-radius: var(--radius);

    box-shadow: var(--shadow-lg);

    overflow: hidden;
}


.quick-card {

    padding: 25px;

    display: flex;

    align-items: center;

    gap: 14px;

    border-right: 1px solid var(--gray-100);
}


.quick-card:last-child {

    border-right: none;
}


.quick-icon {

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    flex-shrink: 0;

    border-radius: 10px;

    background: #eaf4ff;

    font-size: 20px;
}


.quick-card strong {

    display: block;

    font-size: 13px;

    color: var(--navy);
}


.quick-card span {

    display: block;

    font-size: 11px;

    color: var(--gray-500);
}


/* ================= SECTIONS ================= */

.section {

    padding: 110px 0;
}


.section-heading {

    max-width: 680px;

    margin-bottom: 55px;
}


.section-heading.center {

    text-align: center;

    margin-left: auto;
    margin-right: auto;
}


.section-label {

    display: inline-block;

    margin-bottom: 12px;

    color: var(--blue);

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;
}


.section-heading h2 {

    font-size: clamp(32px, 4vw, 48px);

    line-height: 1.1;

    letter-spacing: -1.5px;

    color: var(--navy);

    margin-bottom: 16px;
}


.section-heading h2 span {

    color: var(--blue);
}


.section-heading p {

    color: var(--gray-500);

    font-size: 15px;
}


/* ================= ABOUT ================= */

.about {

    background: white;
}


.about-grid {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 80px;

    align-items: center;
}


.about-image {

    position: relative;
}


.about-image img {

    width: 100%;

    height: 460px;

    object-fit: cover;

    border-radius: var(--radius);

    position: relative;

    z-index: 2;

    box-shadow: var(--shadow);
}


.image-decoration {

    position: absolute;

    width: 100%;
    height: 100%;

    border: 2px solid var(--blue);

    border-radius: var(--radius);

    left: 20px;
    top: 20px;

    z-index: 1;
}


.about-content h3 {

    color: var(--navy);

    font-size: 28px;

    margin-bottom: 18px;
}


.about-content p {

    color: var(--gray-500);

    font-size: 15px;

    margin-bottom: 15px;
}


.about-features {

    margin-top: 30px;

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 13px;
}


.about-features div {

    display: flex;

    gap: 8px;

    align-items: center;

    color: var(--navy);

    font-size: 13px;

    font-weight: 600;
}


.about-features span {

    width: 22px;
    height: 22px;

    display: grid;

    place-items: center;

    border-radius: 50%;

    background: #eaf4ff;

    color: var(--blue);

    font-size: 12px;
}


/* ================= STATS ================= */

.stats-section {

    padding: 70px 0;

    background: var(--navy);

    color: white;
}


.stats-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    text-align: center;
}


.stat {

    border-right:
        1px solid rgba(255,255,255,0.12);
}


.stat:last-child {

    border-right: none;
}


.stat strong {

    font-size: 48px;

    font-weight: 800;

    line-height: 1;
}


.stat > span {

    color: #67b7ff;

    font-size: 28px;

    font-weight: 800;
}


.stat p {

    margin-top: 8px;

    color: rgba(255,255,255,0.65);

    font-size: 12px;

    text-transform: uppercase;

    letter-spacing: 1px;
}


/* ================= STAFF ================= */

.staff {

    background: var(--gray-50);
}


.staff-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


.staff-card {

    background: white;

    border-radius: var(--radius);

    overflow: hidden;

    box-shadow: var(--shadow-sm);

    transition: var(--transition);
}


.staff-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow);
}


.staff-placeholder {

    height: 260px;

    display: grid;

    place-items: center;

    background:
        linear-gradient(
            135deg,
            #eaf4ff,
            #dcecff
        );

    font-size: 70px;
}


.staff-info {

    padding: 22px;
}


.staff-info h3 {

    color: var(--navy);

    font-size: 17px;
}


.staff-info p {

    margin-top: 4px;

    color: var(--blue);

    font-size: 12px;

    font-weight: 600;
}


/* ================= CLASSES ================= */

.classes {

    background: white;
}


.classes-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 16px;
}


.class-card {

    padding: 28px;

    border: 1px solid var(--gray-200);

    border-radius: var(--radius);

    position: relative;

    overflow: hidden;

    transition: var(--transition);
}


.class-card:hover {

    border-color: var(--blue);

    transform: translateY(-5px);

    box-shadow: var(--shadow);
}


.class-number {

    font-size: 12px;

    font-weight: 800;

    color: var(--blue);

    letter-spacing: 1px;
}


.class-card h3 {

    margin-top: 18px;

    color: var(--navy);

    font-size: 20px;
}


.class-card p {

    margin-top: 7px;

    color: var(--gray-500);

    font-size: 13px;
}


/* ================= ACTIVITIES ================= */

.activities {

    background: var(--gray-50);
}


.activities-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    gap: 20px;
}


.activity-card {

    padding: 30px;

    background: white;

    border-radius: var(--radius);

    box-shadow: var(--shadow-sm);

    transition: var(--transition);
}


.activity-card:hover {

    transform: translateY(-7px);

    box-shadow: var(--shadow);
}


.activity-icon {

    width: 50px;
    height: 50px;

    display: grid;

    place-items: center;

    background: #eaf4ff;

    border-radius: 10px;

    font-size: 23px;

    margin-bottom: 20px;
}


.activity-card h3 {

    color: var(--navy);

    font-size: 18px;

    margin-bottom: 10px;
}


.activity-card p {

    color: var(--gray-500);

    font-size: 13px;

    margin-bottom: 20px;
}


.activity-card a {

    color: var(--blue);

    font-size: 12px;

    font-weight: 700;
}


/* ================= NEWS ================= */

.news {

    background: white;
}


.news-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 20px;
}


.news-card {

    display: flex;

    gap: 18px;

    padding: 25px;

    border: 1px solid var(--gray-200);

    border-radius: var(--radius);

    transition: var(--transition);
}


.news-card:hover {

    border-color: var(--blue);

    box-shadow: var(--shadow);

    transform: translateY(-4px);
}


.news-date {

    flex-shrink: 0;

    width: 55px;
    height: 65px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    background: var(--navy);

    color: white;

    border-radius: 8px;
}


.news-date strong {

    font-size: 22px;

    line-height: 1;
}


.news-date span {

    margin-top: 3px;

    font-size: 9px;

    color: #67b7ff;

    font-weight: 700;
}


.news-category {

    font-size: 10px;

    color: var(--blue);

    font-weight: 800;

    text-transform: uppercase;
}


.news-content h3 {

    margin: 6px 0;

    color: var(--navy);

    font-size: 16px;

    line-height: 1.3;
}


.news-content p {

    color: var(--gray-500);

    font-size: 12px;

    margin-bottom: 12px;
}


.news-content a {

    color: var(--blue);

    font-size: 11px;

    font-weight: 700;
}


/* ================= DOCUMENTS ================= */

.documents {

    background: var(--gray-50);
}


.documents-list {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 12px;
}


.document-item {

    display: flex;

    align-items: center;

    gap: 16px;

    padding: 20px;

    background: white;

    border: 1px solid var(--gray-200);

    border-radius: 10px;

    transition: var(--transition);
}


.document-item:hover {

    border-color: var(--blue);

    transform: translateX(4px);
}


.document-icon {

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    border-radius: 8px;

    background: #eaf4ff;

    font-size: 19px;
}


.document-item h3 {

    font-size: 14px;

    color: var(--navy);
}


.document-item span {

    font-size: 11px;

    color: var(--gray-500);
}


.document-item .download {

    margin-left: auto;

    font-size: 22px;

    color: var(--blue);
}


/* ================= CTA ================= */

.cta {

    padding: 75px 0;

    background:
        linear-gradient(
            120deg,
            var(--navy),
            #0e3d68
        );

    color: white;
}


.cta-content {

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;
}


.cta .section-label {

    color: #67b7ff;
}


.cta h2 {

    max-width: 650px;

    font-size: clamp(28px, 4vw, 42px);

    line-height: 1.15;

    letter-spacing: -1px;
}


/* ================= CONTACT ================= */

.contact {

    background: white;
}


.contact-grid {

    display: grid;

    grid-template-columns:
        0.8fr 1.2fr;

    gap: 70px;

    align-items: start;
}


.contact-info {

    display: flex;

    flex-direction: column;

    gap: 25px;
}


.contact-item {

    display: flex;

    align-items: center;

    gap: 15px;
}


.contact-icon {

    width: 48px;
    height: 48px;

    display: grid;

    place-items: center;

    background: #eaf4ff;

    border-radius: 10px;

    font-size: 19px;
}


.contact-item h3 {

    color: var(--navy);

    font-size: 14px;
}


.contact-item p {

    color: var(--gray-500);

    font-size: 12px;
}


/* ================= FORM ================= */

.contact-form {

    padding: 35px;

    background: var(--gray-50);

    border-radius: var(--radius);
}


.form-row {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 15px;
}


.form-group {

    margin-bottom: 17px;
}


.form-group label {

    display: block;

    margin-bottom: 7px;

    color: var(--navy);

    font-size: 11px;

    font-weight: 700;
}


.form-group input,
.form-group textarea {

    width: 100%;

    padding: 13px 14px;

    border: 1px solid var(--gray-200);

    border-radius: 8px;

    outline: none;

    background: white;

    color: var(--black);

    font-size: 13px;

    resize: vertical;

    transition: var(--transition);
}


.form-group input:focus,
.form-group textarea:focus {

    border-color: var(--blue);

    box-shadow:
        0 0 0 3px rgba(18, 97, 160, 0.08);
}


.form-message {

    margin-top: 12px;

    color: var(--blue);

    font-size: 12px;

    font-weight: 600;
}


/* ================= FOOTER ================= */

.footer {

    background: #050f1d;

    color: white;

    padding-top: 70px;
}


.footer-grid {

    display: grid;

    grid-template-columns:
        2fr 1fr 1fr 1fr;

    gap: 50px;

    padding-bottom: 55px;
}


.footer-logo {

    display: flex;

    align-items: center;

    gap: 12px;

    margin-bottom: 18px;
}


.footer-logo img {

    width: 48px;
    height: 48px;

    object-fit: contain;

    border-radius: 50%;
}


.footer-logo strong,
.footer-logo span {

    display: block;
}


.footer-logo strong {

    font-size: 15px;
}


.footer-logo span {

    font-size: 11px;

    color: #67b7ff;
}


.footer-brand > p {

    max-width: 320px;

    color: rgba(255,255,255,0.55);

    font-size: 12px;
}


.footer-links h3,
.footer-social h3 {

    margin-bottom: 18px;

    font-size: 13px;
}


.footer-links a {

    display: block;

    margin-bottom: 10px;

    color: rgba(255,255,255,0.55);

    font-size: 12px;

    transition: var(--transition);
}


.footer-links a:hover {

    color: white;

    transform: translateX(3px);
}


.social-icons {

    display: flex;

    gap: 8px;
}


.social-icons a {

    width: 36px;
    height: 36px;

    display: grid;

    place-items: center;

    border: 1px solid rgba(255,255,255,0.15);

    border-radius: 8px;

    font-weight: 700;

    transition: var(--transition);
}


.social-icons a:hover {

    background: var(--blue);

    border-color: var(--blue);
}


.footer-bottom {

    border-top:
        1px solid rgba(255,255,255,0.08);

    padding: 20px 0;

    text-align: center;
}


.footer-bottom p {

    color: rgba(255,255,255,0.4);

    font-size: 10px;
}


/* ================= BACK TO TOP ================= */

.back-to-top {

    position: fixed;

    right: 25px;
    bottom: 25px;

    width: 45px;
    height: 45px;

    display: grid;

    place-items: center;

    border: none;

    border-radius: 50%;

    background: var(--blue);

    color: white;

    font-size: 20px;

    cursor: pointer;

    opacity: 0;

    visibility: hidden;

    transform: translateY(15px);

    transition: var(--transition);

    z-index: 900;
}


.back-to-top.show {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}


.back-to-top:hover {

    background: var(--navy);

    transform: translateY(-3px);
}


/* =====================================================
   RESPONSIVE
===================================================== */


/* ================= TABLET ================= */

@media (max-width: 1050px) {

    .navbar {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .quick-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .quick-card:nth-child(2) {
        border-right: none;
    }

    .quick-card:nth-child(-n+2) {
        border-bottom: 1px solid var(--gray-100);
    }

    .about-grid {
        gap: 45px;
    }

    .staff-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .activities-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .footer-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

}


/* ================= MOBILE ================= */

@media (max-width: 700px) {

    .container {
        width: min(100% - 30px, 1180px);
    }

    .nav-container {
        min-height: 72px;
    }

    .mobile-menu {
        top: 72px;
    }

    .logo {
        width: 46px;
        height: 46px;
    }

    .school-name strong {
        font-size: 15px;
    }

    .school-name span {
        font-size: 8px;
    }

    .school-name small {
        font-size: 9px;
    }

    .hero {
        margin-top: 72px;
        min-height: 650px;
    }

    .hero-overlay {
        background:
            linear-gradient(
                90deg,
                rgba(7,27,53,0.93),
                rgba(7,27,53,0.65)
            );
    }

    .hero h1 {
        font-size: 45px;
        letter-spacing: -2px;
    }

    .hero p {
        font-size: 15px;
    }

    .hero-buttons {
        flex-direction: column;

        align-items: stretch;

        max-width: 250px;
    }

    .btn {
        width: 100%;
    }

    .quick-info {
        margin-top: -25px;
    }

    .quick-grid {
        grid-template-columns: 1fr;
    }

    .quick-card {
        border-right: none;

        border-bottom: 1px solid var(--gray-100);
    }

    .quick-card:last-child {
        border-bottom: none;
    }

    .section {
        padding: 75px 0;
    }

    .section-heading {
        margin-bottom: 35px;
    }

    .about-grid {
        grid-template-columns: 1fr;
    }

    .about-image img {
        height: 320px;
    }

    .image-decoration {
        left: 10px;
        top: 10px;
    }

    .about-features {
        grid-template-columns: 1fr;
    }

    .stats-grid {
        grid-template-columns:
            repeat(2, 1fr);

        gap: 35px 0;
    }

    .stat:nth-child(2) {
        border-right: none;
    }

    .stat:nth-child(3),
    .stat:nth-child(4) {
        border-top:
            1px solid rgba(255,255,255,0.12);
lla
        padding-top: 30px;
    }

    .staff-grid {
        grid-template-columns: 1fr;
    }

    .classes-grid {
        grid-template-columns:
            repeat(2, 1fr);
    }

    .activities-grid {
        grid-template-columns: 1fr;
    }

    .news-grid {
        grid-template-columns: 1fr;
    }

    .documents-list {
        grid-template-columns: 1fr;
    }

    .cta-content {
        flex-direction: column;

        align-items: flex-start;
    }

    .contact-grid {
        grid-template-columns: 1fr;

        gap: 45px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 25px 20px;
    }

    .footer-grid {
        grid-template-columns: 1fr;

        gap: 35px;
    }

}


/* ================= SMALL MOBILE ================= */

@media (max-width: 430px) {

    .hero h1 {
        font-size: 39px;
    }

    .classes-grid {
        grid-template-columns: 1fr;
    }

    .stat strong {
        font-size: 38px;
    }

    .news-card {
        flex-direction: column;
    }

    .news-date {
        width: 55px;
    }

>>>>>>> origin/main
}