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
