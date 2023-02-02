const sq = document.querySelector("#square");
const link = sq.querySelector(".link");
const rb = document.querySelector(".rainbow");
let select = sq.lastElementChild;

const getNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);

const getColor = (a = 100) => {
    let r = getNumber(256);
    let g = getNumber(256);
    let b = getNumber(256);
    return `rgba(${r},${g},${b}, ${a / 100})`;
}

rb.innerText = getNumber(100, 1);

// сделать квадратным

rb.style.width = rb.scrollHeight + "px";
rb.style.backgroundColor = getColor(20);

const colors = ["#c0392b", "#e17055", "#fdcb6e"];

const txt = +rb.innerText;
switch (true) {
    case txt >= 1 && txt < 10:
        rb.style.color = colors[0];
        break;
    case txt >= 10 && txt <= 20:
        rb.style.color = colors[1];
        break;
    default:
        rb.style.color = colors[3]
}

select = document.querySelector("select");
const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];

countries.forEach(c => {
    let option = document.createElement("option");
    option.value = c.slice(0,2).toLowerCase();
    option.innerText = c;
    select.appendChild(option)
})


// EVENTS
function updateBg(el) {
    el.style.backgroundColor = getColor();

}
updateBg(document.body)

// sq.onclick = function(event) {
//     console.log(event.clientX, event.clientY) //координаты клика
//     console.log(event.type) // тип события
//     console.log(event.target) // какой элемент вызывает событие(по какому элементу кликнули)
//     console.log(event.currentTarget)// где обрабатывается событие
// }
// let n = 0;
// sq.onclick = () => {
//     rb.innerText = `Clicked ${++n} times`;
//     rb.style.color = null;
//     rb.style.width = "100%"
// }
let n = 0;
sq.addEventListener("click", e => {updateBg(e.currentTarget)});
sq.addEventListener("click", function(e) {
    e.stopPropagation();
    rb.innerText = `Clicked ${++n} times`;
    rb.style.color = null;
    rb.style.width = "100%";
})

select.addEventListener("click", e => {
    e.stopPropagation()
    e.currentTarget.style.width = "100%";
});

link.addEventListener("click", function(e){
    e.preventDefault(); //остановка события по умолчанию
    e.stopPropagation(); // если у родителя и дочернего элемента одинаковые события,  остановить всплытие события наерх 
    let opacity = this.style.opacity || 1;
    this.style.opacity = opacity - 0.1;
})

document.body.addEventListener("click", e => {
    updateBg(e.currentTarget);
})

