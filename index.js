const divs = document.querySelectorAll('.summary div');
const colors = ['#FF5555', '#FFB21E', '#00BB8F', '#1125D6'];

divs.forEach((div, i) => {
    const color = colors[i];
    div.style.backgroundColor = color;
    div.style.color = color;
});
