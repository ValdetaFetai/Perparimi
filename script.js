const documents = [
    {
        title: "Programi vjetor 2026",
        description: "PDF dokument",
        file: "documents/programi-vjetor-2026.pdf",
        icon: "📄"
    }
];

const documentList = document.querySelector("#planet-programet-list");

if (documentList) {
    if (documents.length === 0) {
        documentList.innerHTML = '<p class="documents-empty">Nuk ka dokumente të publikuara ende.</p>';
    } else {
        documentList.innerHTML = documents.map((document) => `
            <div class="document-item">
                <div class="document-icon" aria-hidden="true">${document.icon}</div>
                <div class="document-details">
                    <h4>${document.title}</h4>
                    <span>${document.description}</span>
                </div>
                <div class="document-actions">
                    <a href="${document.file}" class="document-open" target="_blank" rel="noopener noreferrer">Hap dokumentin</a>
                    <a href="${document.file}" class="document-download" download>Shkarko PDF</a>
                </div>
            </div>
        `).join("");
    }
}

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");

const homeLinks = document.querySelectorAll('a[href="#ballina"]');

homeLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        if (window.location.hash !== "#ballina") {
            history.replaceState(null, "", window.location.pathname + window.location.search + "#ballina");
        }
    });
});

const historyToggle = document.querySelector("#historyToggle");
const historyMore = document.querySelector("#historyMore");

if (historyToggle && historyMore) {
    historyToggle.addEventListener("click", () => {
        const isExpanded = !historyMore.hidden;
        historyMore.hidden = isExpanded;
        historyToggle.setAttribute("aria-expanded", String(!isExpanded));
        historyToggle.textContent = isExpanded ? "Lexo më shumë" : "Shfaq më pak";
    });
}

if (menuToggle && mobileMenu) {
    const setMenuState = (isOpen) => {
        mobileMenu.classList.toggle("open", isOpen);
        mobileMenu.hidden = !isOpen;
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Mbyll menynë" : "Hap menynë");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("open");
        setMenuState(isOpen);
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1050) setMenuState(false);
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
