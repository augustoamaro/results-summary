import data from './data.json' assert { type: "json" };

const divs = document.querySelectorAll('.summary div');
const colors = ['#FF5555', '#FFB21E', '#00BB8F', '#1125D6'];

divs.forEach((div, i) => {
    const color = colors[i];
    div.style.backgroundColor = color;
    div.style.color = color;

    // let icon = data[i].icon
    // div.children[0].setAttribute('src', icon)

    let category = data[i].category;
    div.children[1].textContent = category

    let score = data[i].score;
    div.children[2].textContent = score;
});
