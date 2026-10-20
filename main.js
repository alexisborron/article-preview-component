const btn = document.getElementById('btn');
const nav = document.getElementById('share-nav');

function setOpen(isOpen) {
    nav.classList.toggle('card__share--active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Close share options' : 'Share post');
}

btn.addEventListener('click', () => {
    setOpen(!nav.classList.contains('card__share--active'));
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.card__footer')) {
        setOpen(false);
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('card__share--active')) {
        setOpen(false);
        btn.focus();
    }
});