const changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('click', () => {
    // Random pastel background color
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 80%)`;
    document.body.style.backgroundColor = randomColor;
});
