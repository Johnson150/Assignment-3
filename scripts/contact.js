// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function (event) {
    event.preventDefault();


    const contactPage = document.querySelector('.contact');

    const thankYou = document.createElement('p');
    thankYou.style.fontSize = '24px';
    thankYou.textContent = ('Thank you for your message');


     if (contactPage.firstChild){
         contactPage.removeChild(contactpage.firstChild);
    }


    contactPage.appendChild(thankYou);
});
