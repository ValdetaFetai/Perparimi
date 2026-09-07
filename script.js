const documents = [
    {
        title: "Programi vjetor 2026",
        description: "Dokument Word",
        file: "documents/programi-vjetor-2026.docx",
        icon: "📄"
    }
];

const documentList = document.querySelector("#planet-programet-list");

if (documentList) {
    if (documents.length === 0) {
        documentList.innerHTML = '<p class="documents-empty">Nuk ka dokumente të publikuara ende.</p>';
    } else {
        documentList.innerHTML = documents.map((document) => `
            <a href="${document.file}" class="document-item" download>
                <div class="document-icon" aria-hidden="true">${document.icon}</div>
                <div>
                    <h4>${document.title}</h4>
                    <span>${document.description}</span>
                </div>
                <span class="download" aria-hidden="true">↓</span>
            </a>
        `).join("");
    }
}

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const header = document.querySelector("#header");
const backToTop = document.querySelector("#backToTop");

window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
    backToTop?.classList.toggle("show", window.scrollY > 500);
});

backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();
