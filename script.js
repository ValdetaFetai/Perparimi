const documentsByLang = {
    sq: [
        {
            title: "Programi vjetor 2026",
            description: "PDF dokument",
            file: "documents/programi-vjetor-2026.pdf",
            icon: "📄",
            openText: "Hap dokumentin",
            downloadText: "Shkarko PDF"
        }
    ],
    mk: [
        {
            title: "Годишен програм 2026",
            description: "PDF документ",
            file: "documents/programi-vjetor-2026.pdf",
            icon: "📄",
            openText: "Отвори документ",
            downloadText: "Преземи PDF"
        }
    ]
};

const translations = {
    sq: {
        nav: {
            ballina: "Ballina",
            about: "Rreth nesh",
            staff: "Stafi",
            classes: "Klasat",
            activities: "Aktivitetet",
            news: "Njoftime",
            documents: "Dokumente",
            contact: "Kontakt"
        },
        hero: {
            badge: "SH.F.K. PËRPARIMI - ÇEGRAN",
            title: "Mirë se vini në <span>Shkollën Përparimi</span>",
            subtitle: "Dije, edukim dhe përparim për një të ardhme më të mirë."
        },
        quick: {
            quality: "Arsim cilësor",
            qualitySub: "Njohuri për të ardhmen",
            staff: "Staf profesional",
            staffSub: "Mësimdhënës të përkushtuar",
            environment: "Mjedis edukativ",
            environmentSub: "Një vend për të mësuar",
            progress: "Përparim",
            progressSub: "Së bashku drejt suksesit"
        },
        about: {
            label: "RRETH NESH",
            heading: "Historiku i shkollës",
            intro: "Shkolla fillore \"Përparimi\" është e vendosur në fsh. Çegran. Puna edukativo-mësimore realizohet në tri objekte: shkollën qendrore, e cila ndodhet në hyrje të fshatit, shkollën periferike në fsh. Çegran, e cila gjendet në mes të fshatit, si dhe shkollën periferike në fsh. Koritë.",
            more1: "Shkolla është themeluar me 01.09.1945 nga ana e Kuvendit të Komunës së Gostivarit dhe ka funksionuar si institucion arsimor katërvjeçar deri më 31.08.1953.",
            more2: "Prej 31.08.1953, shkolla funksionon si shkollë tetëvjeçare, e cila i pranon nxënësit nga vendbanimet: fsh. Çegran, fsh. Forinë dhe fsh. Koritë.",
            more3: "Prej 01.02.2014, Shkolla fillore i pranon nxënësit nga fsh. Çegran dhe Koritë.",
            more4: "Me punën e saj gjatë kësaj periudhe, shkolla ka realizuar arritje të dukshme në fushën e punës edukativo-arsimore dhe për momentin ka imazh të një shkolle fillore në të cilën të gjithë me kënaqësi e ndjekin mësimdhënien."
        },
        staff: {
            label: "STAFI",
            heading: "Stafi ynë",
            text: "Stafi ynë i përkushtuar përbën bazën e suksesit të shkollës sonë.",
            drejtori: "Drejtor",
            zedrejtori: "Zëvendësdrejtor",
            pedagog: "Pedagog",
            psikologe: "Psikologe",
            defektologe: "Defektologe",
            sociolog: "Sociolog"
        },
        classes: {
            label: "ARSIMIMI",
            heading: "Klasat",
            text: "Zhvillimi i nxënësve nga klasat fillore deri në përfundimin e arsimit fillor.",
            class1: { title: "Klasa I", desc: "Hapat e parë në rrugën e dijes." },
            class2: { title: "Klasa II", desc: "Zhvillim dhe mësim përmes lojës." },
            class3: { title: "Klasa III", desc: "Njohuri dhe aftësi të reja." },
            class4: { title: "Klasa IV", desc: "Përgatitje për sfida të reja." },
            class5: { title: "Klasa V", desc: "Zhvillim i njohurive dhe kreativitetit." },
            class6: { title: "Klasa VI", desc: "Njohuri të reja dhe teknologji." },
            class7: { title: "Klasa VII", desc: "Mësim dhe zhvillim i aftësive." },
            class8: { title: "Klasa VIII", desc: "Përgatitje për të ardhmen." },
            class9: { title: "Klasa IX", desc: "Hapi drejt arsimit të mëtejshëm." }
        },
        activities: {
            label: "AKTIVITETET",
            heading: "Mësojmë edhe <span>përmes aktiviteteve</span>",
            text: "Aktivitetet shkollore ndihmojnë nxënësit të zhvillojnë kreativitetin dhe aftësitë e tyre.",
            simple: "Aktivitetet shkollore do të përditësohen së shpejti, me fokus në zhvillimin e nxënësve, sportin, kulturën dhe bashkëpunimin."
        },
        news: {
            label: "NJOFTIME",
            heading: "Lajmet e fundit"
        },
        documents: {
            label: "DOKUMENTE",
            heading: "Dokumente dhe materiale",
            text: "Dokumente të rëndësishme për nxënësit, prindërit dhe stafin."
        },
        cta: {
            heading: "Së bashku ndërtojmë një të ardhme më të mirë.",
            button: "Na kontaktoni"
        },
        contact: {
            label: "KONTAKT",
            heading: "Na kontaktoni",
            text: "Për pyetje, informacione ose bashkëpunim, mund të na kontaktoni.",
            address: "Adresa",
            phone: "Telefoni",
            email: "Email",
            hours: "Orari",
            hoursText: "E hënë - E premte",
            location: "Çegrane, Gostivar, North Macedonia",
            directions: "Get Directions"
        },
        footer: {
            quick: "Lidhje të shpejta",
            info: "Informacione",
            follow: "Na ndiqni"
        }
    },
    mk: {
        nav: {
            ballina: "Дома",
            about: "За нас",
            staff: "Стаф",
            classes: "Класи",
            activities: "Активности",
            news: "Новости",
            documents: "Документи",
            contact: "Контакт"
        },
        hero: {
            badge: "Ш.Ф.К. ПЕРПАРИМИ - ЧЕГРАН",
            title: "Добредојдовте во <span>Основното училиште „Перпарими“</span>",
            subtitle: "Знаење, образование и напредок за подобра иднина."
        },
        quick: {
            quality: "Квалитетно образование",
            qualitySub: "Знаење за иднината",
            staff: "Професионален персонал",
            staffSub: "Посветени наставници",
            environment: "Образовна средина",
            environmentSub: "Место за учење",
            progress: "Напредок",
            progressSub: "Заедно кон успехот"
        },
        about: {
            label: "ЗА НАС",
            heading: "Историја на училиштето",
            intro: "Основното училиште \"Перпарими\" се наоѓа во с. Чегран. Образовно-васпитната работа се реализира во три објекти: централното училиште, кое се наоѓа на влезот во селото, периферното училиште во с. Чегран, кое се наоѓа во средината на селото, како и периферното училиште во с. Корита.",
            more1: "Училиштето е основано на 01.09.1945 година од страна на Собранието на Општина Гостивар и функционирало како четиригодишна образовна институција до 31.08.1953 година.",
            more2: "Од 31.08.1953 година, училиштето функционира како осумгодишно училиште, кое ги прима учениците од населените места: с. Чегран, с. Форин и с. Корита.",
            more3: "Од 01.02.2014 година, Основното училиште ги прима учениците од с. Чегран и Корита.",
            more4: "Со својата работа во овој период училиштето постигна забележителни резултати на образовно-васпитно поле и моментално има имиџ на основно училиште во кое сите со задоволство го следат наставниот процес."
        },
        staff: {
            label: "СТАФ",
            heading: "Нашиот персонал",
            text: "Нашиот посветен персонал ја формира основата на успехот на нашето училиште.",
            drejtori: "Директор",
            zedrejtori: "Заменик-директор",
            pedagog: "Педагог",
            psikologe: "Психолог",
            defektologe: "Дефектолог",
            sociolog: "Социолог"
        },
        classes: {
            label: "ОБРАЗОВАНИЕ",
            heading: "Класите",
            text: "Развојот на учениците од основните класови до завршувањето на основното образование.",
            class1: { title: "I клас", desc: "Првите чекори на патот кон знаењето." },
            class2: { title: "II клас", desc: "Развој и учење преку игра." },
            class3: { title: "III клас", desc: "Нови знаења и вештини." },
            class4: { title: "IV клас", desc: "Подготовка за нови предизвици." },
            class5: { title: "V клас", desc: "Развој на знаењето и креативноста." },
            class6: { title: "VI клас", desc: "Нови знаења и технологија." },
            class7: { title: "VII клас", desc: "Учење и развој на вештините." },
            class8: { title: "VIII клас", desc: "Подготовка за иднината." },
            class9: { title: "IX клас", desc: "Чекор кон понатамошното образование." }
        },
        activities: {
            label: "АКТИВНОСТИ",
            heading: "Учиме и преку <span>активности</span>",
            text: "Школските активности им помагаат на учениците да развијат креативност и вештини.",
            simple: "Школските активности наскоро ќе се ажурираат, со фокус на развојот на учениците, спортот, културата и соработката."
        },
        news: {
            label: "НОВОСТИ",
            heading: "Последни вести"
        },
        documents: {
            label: "ДОКУМЕНТИ",
            heading: "Документи и материјали",
            text: "Важни документи за учениците, родителите и персоналот."
        },
        cta: {
            heading: "Заедно градиме подобра иднина.",
            button: "Контактирајте не"
        },
        contact: {
            label: "КОНТАКТ",
            heading: "Контактирајте не",
            text: "За прашања, информации или соработка, можете да не контактирате.",
            address: "Адреса",
            phone: "Телефон",
            email: "Е-пошта",
            hours: "Работно време",
            hoursText: "Пон - Пет",
            location: "Чегран, Гостивар, Северна Македонија",
            directions: "Директно до местото"
        },
        footer: {
            quick: "Брзи врски",
            info: "Информации",
            follow: "Следете не"
        }
    }
};

const documentList = document.querySelector("#planet-programet-list");

const getStoredLanguage = () => {
    try {
        return localStorage.getItem("perparimi-language") || "sq";
    } catch (error) {
        return "sq";
    }
};

const renderDocuments = (lang) => {
    if (!documentList) return;

    const documents = documentsByLang[lang] || documentsByLang.sq;

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
                    <a href="${document.file}" class="document-open" target="_blank" rel="noopener noreferrer">${document.openText}</a>
                    <a href="${document.file}" class="document-download" download>${document.downloadText}</a>
                </div>
            </div>
        `).join("");
    }
};

const getNestedTranslation = (obj, path) => {
    return path.split(".").reduce((accumulator, segment) => accumulator?.[segment], obj);
};

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");
const langOptions = document.querySelectorAll(".lang-option");

const applyTranslations = (lang) => {
    const selectedLang = translations[lang] ? lang : "sq";
    const currentTranslations = translations[selectedLang] || translations.sq;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = getNestedTranslation(currentTranslations, element.dataset.i18n);

        if (value !== undefined) {
            element.innerHTML = value;
        }
    });

    renderDocuments(selectedLang);
    document.documentElement.lang = selectedLang;
    document.title = selectedLang === "mk" ? "Ш.Ф.К. Перпарими - Чегран" : "Sh.F.K. Përparimi - Çegran";

    langOptions.forEach((button) => {
        const isActive = button.dataset.lang === selectedLang;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    try {
        localStorage.setItem("perparimi-language", selectedLang);
    } catch (error) {
        // Ignore storage errors silently.
    }
};

langOptions.forEach((option) => {
    option.addEventListener("click", () => {
        const selectedLang = option.dataset.lang;

        if (!selectedLang) return;

        applyTranslations(selectedLang);
    });
});

applyTranslations(getStoredLanguage());

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
        historyToggle.textContent = isExpanded ? "Lexo më shumë" : "Lexo më pak";
    });
}

if (menuToggle && mobileMenu) {
    const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay") || document.createElement("div");

    if (!mobileMenuOverlay.classList.contains("mobile-menu-overlay")) {
        mobileMenuOverlay.className = "mobile-menu-overlay";
        mobileMenuOverlay.setAttribute("aria-hidden", "true");
        document.body.appendChild(mobileMenuOverlay);
    }

    const setMenuState = (isOpen) => {
        mobileMenu.classList.toggle("open", isOpen);
        mobileMenu.hidden = !isOpen;
        mobileMenuOverlay.hidden = !isOpen;
        mobileMenuOverlay.classList.toggle("visible", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Mbyll menynë" : "Hap menynë");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = !mobileMenu.classList.contains("open");
        setMenuState(isOpen);
    });

    mobileMenuOverlay.addEventListener("click", () => setMenuState(false));

    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => setMenuState(false));
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1050) setMenuState(false);
    });
}

const header = document.querySelector("#header");
const backToTop = document.querySelector("#backToTop");
const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id], footer[id]')];

const setActiveNavLink = () => {
    let currentId = "ballina";

    sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
            currentId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isActive);
    });
};

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.forEach((navLink) => navLink.classList.toggle("active", navLink === link));
    });
});

window.addEventListener("scroll", () => {
    header?.classList.toggle("scrolled", window.scrollY > 20);
    backToTop?.classList.toggle("show", window.scrollY > 500);
    setActiveNavLink();
});

setActiveNavLink();

backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("#currentYear").textContent = new Date().getFullYear();

