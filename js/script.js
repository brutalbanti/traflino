
const form = document.getElementById('telegramForm');

function openPopup(message) {
    if (message === true) {
        document.body.classList.add('popup-opened');
        document.querySelector('.popup').classList.add('active')
    }
}
function closePopup() {
    document.body.classList.remove('popup-opened');
    document.querySelector('.popup').classList.remove('active')

}
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    // Ваш ID чата в Telegram, куда будет отправляться сообщение
    const chatId = "-1002010717116";
    // Токен вашего бота в Telegram
    const token = "7079143579:AAEoLzwZOl5GBG2MBIN_b31jCVDLjy4Xp4g";

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nSubject: ${formData.get('subject')}\nMessage: ${formData.get('message')}`
            })
        });

        const data = await response.json();
        form.reset();
        openPopup(true);
    } catch (error) {
        console.error('Error:', error);
    }
});

document.querySelector('.popup__close').addEventListener("click", closePopup);

document.querySelector('.popup__button').addEventListener("click", closePopup);

let lastScrollTop = 0;
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > headerHeight) {
        // Пролистываем вниз
        header.classList.add('hide');
    } else {
        // Пролистываем вверх
        header.classList.remove('hide');
    }

    lastScrollTop = currentScroll;
});

