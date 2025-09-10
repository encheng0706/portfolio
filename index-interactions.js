const h1 = document.querySelector('.wrapper h1');
const links = document.querySelectorAll('.wrapper nav a');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        links.forEach(l => l.style.color = 'transparent');
        link.style.color = '#982120';
        h1.style.color = 'transparent';
    });

    link.addEventListener('mouseleave', () => {
        links.forEach(l => l.style.color = '#36454F');
        h1.style.color = '#36454F';
    });
});

const contactLink = document.getElementById("contact-link");
const contactPage = document.querySelector(".contact-page");
contactLink.addEventListener("click", (e) => {
    e.preventDefault();
    contactPage.scrollIntoView({behavior: "smooth"});
});