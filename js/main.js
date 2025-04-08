// Powered By Fahd.Abuoolila
document.addEventListener("DOMContentLoaded", function() {
    const welcomeAudio = document.getElementById("welcome-audio");
    const startButton = document.getElementById("start-sound");

    // إضافة فئة no-scroll إلى body عند تحميل الصفحة
    document.body.classList.add("no-scroll");

    startButton.addEventListener("click", function() {
        if (welcomeAudio) {
            welcomeAudio.play().catch(error => {
                console.error("Failed to play audio:", error);
            });
        }
        document.querySelector(".start_screen").style.display = "none"; // إخفاء شاشة البداية بعد تشغيل الصوت
        document.body.classList.remove("no-scroll"); // إزالة فئة no-scroll لإظهار التمرير
    });

    const sections = document.querySelectorAll("section");
    const options = {
        threshold: 0.2
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, options);
    sections.forEach(section => {
        observer.observe(section);
    });
    console.log("Powered By Fahd.Abuoolila");
});

const menu = document.querySelector(".menu");
document.addEventListener("DOMContentLoaded", () => {
    const openMenuButton = document.querySelector("#btn-menu");
    const menuItems = menu.querySelectorAll("li a");
    openMenuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
    });
    menuItems.forEach(item => {
        item.addEventListener("click", () => {
            menu.classList.remove("open");
        });
    });
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && e.target !== openMenuButton && e.target !== openMenuButton.querySelector("img")) {
            menu.classList.remove("open");
        }
    });
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
document.getElementById("btn-close").addEventListener("click", function () {
    menu.classList.remove("open");
});