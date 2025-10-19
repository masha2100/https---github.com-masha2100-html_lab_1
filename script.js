document.addEventListener("DOMContentLoaded", () => {
    const news = document.getElementById("newsText");
    const text = news.textContent;
    news.textContent = "";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            news.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); 
        }
    }
    typeWriter();
});

window.addEventListener('load', () => {
    const now = new Date();
    const hour = now.getHours(); // отримує годину від 0 до 23

    if (hour >= 21 || hour < 6) {
        // Нічний час: темніший фон на 40%
        const darkenFactor = 0.6; // 60% від оригінального кольору

        // Всі елементи body
        const body = document.body;
        const bg = window.getComputedStyle(body).backgroundColor;

        // Функція для затемнення кольору
        function darkenColor(rgbString, factor) {
            const rgb = rgbString.match(/\d+/g); // отримує числа R,G,B
            const r = Math.floor(rgb[0] * factor);
            const g = Math.floor(rgb[1] * factor);
            const b = Math.floor(rgb[2] * factor);
            return `rgb(${r}, ${g}, ${b})`;
        }

        body.style.backgroundColor = darkenColor(bg, darkenFactor);

        // Додатково можна затемнити header і footer
        const header = document.querySelector('header');
        if(header){
            const headerBg = window.getComputedStyle(header).backgroundColor;
            header.style.backgroundColor = darkenColor(headerBg, darkenFactor);
        }
        const footer = document.querySelector('footer');
        if(footer){
            const footerBg = window.getComputedStyle(footer).backgroundColor;
            footer.style.backgroundColor = darkenColor(footerBg, darkenFactor);
        }
    }
});


