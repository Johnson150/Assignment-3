// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
let submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function () {
    const contactPage = document.querySelector('.contact');
    const thankYou = document.createElement('div');
    thankYou.textContent = 'Thank you for your message';
    thankYou.style.fontSize = '24px';
    while (contactPage.firstChild) {
        contactPage.removeChild(contactPage.firstChild);
    }


    contactPage.appendChild(thankYou);
});