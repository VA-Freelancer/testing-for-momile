document.querySelector('.themetoggle').addEventListener('click', (event) => {
    event.preventDefault();
    if (localStorage.getItem('theme') === 'white') {
        localStorage.removeItem('theme');
    }
    else {
        localStorage.setItem('theme', 'white')
    }
    addDarkClassToHTML()
});

function addDarkClassToHTML() {
    try {
        if (localStorage.getItem('theme') === 'white') {
            document.querySelector('html').classList.add('white');
            document.querySelector('.themetoggle span').textContent = 'wb_sunny';
        }
        else {
            document.querySelector('html').classList.remove('white');
            document.querySelector('.themetoggle span').textContent = 'dark_mode';
        }
    } catch (err) { }
}

addDarkClassToHTML();