// console.log(document.querySelector(".secret").nodeName.toLowerCase()) //вывести в консоль название тега

// console.log(document.querySelector("#elem").nodeName.toLowerCase()) //вывести в консоль название тега

// console.log(document.querySelectorAll(".promo").length) //вывести в консоль количество тегов
// 1.4
// let tag = document.querySelectorAll(".target"); // Выведите в консоль название последнего тега, у которого есть класс target
// console.log(tag[tag.length-1].nodeName.toLowerCase())

//1.5 В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.

// let price = document.querySelector(".price").innerText * 2;
// console.log(document.querySelector(".price").innerText = price);

//1.6 В HTML-документе есть тег <p> c классом links. Внутри этого элемента указана просто текстовая ссылка без тега <a>. Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.

// let link = document.querySelector(".links");
// link.innerHTML = `<a>${link.innerText}</a>`;

// 1.7. В HTML-документе есть тег с классом content, внутри него есть тег <p>. Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.
// let tag = document.querySelector(".content").firstElementChild;;
// let text = tag.innerText;
// tag.innerHTML = `<b>${text}</b>`

// 1.8 В HTML-документе заданы элементы с числовым значением с классом price. Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.

// let cnt = 0;
// let arr = document.querySelectorAll(".price");
// arr.forEach(el => cnt += +el.innerText)
// console.log(cnt)

// let arr = document.querySelectorAll(".price");
// let cnt = 0;
// for (let i = 0; i < arr.length; i++) {
//     cnt += parseInt(arr[i].innerText)  
// }
// console.log(cnt)

// 1.9 В HTML-документе заданы теги с числовым значением с классом numeric. Напишите скрипт, который оборачивает в тег <b> все значения тега с классом numeric, которые меньше нуля.
// let list = document.querySelectorAll(".numeric");
// list.forEach(el => {
//     if ( +el.innerText < 0) {
//         el.innerHTML = `<b>${el.innerText}</b>`
//     }   
//     })


// 1.10  Исправьте скрипт таким образом, чтобы в результате его работы в переменной result была сумма значений тегов с классом numeric.

// let result = 0;
// let elems = document.querySelectorAll(".numeric");
// elems.forEach(elem => result += +elem.innerText);

// 1.11 В HTML-документе задан тег <ul> c классом cars. Внутри этого тега есть несколько тегов <li>. Реализуйте скрипт, который считывает содержимое этих элементов <li>, формирует из них массив и сохраняет в переменной cars.

// let list = document.querySelectorAll(".cars li");
// let cars = [];
// for(let i = 0; i < list.length; i++) {
//     cars.push(list[i].innerText)
// }
// console.log(cars);

// v.2

// let list = document.querySelectorAll(".cars li");
// let cars = [...list].map(el => el.innerText)
// console.log(cars);




// 2.1 Напишите скрипт, который создает новый элемент <p> в переменной new_element и добавляет его в тег с идентификатором root. Созданный тег <p> должен содержать в себе фразу Ура! Мой скрипт отработал верно!
// const parent = document.querySelector("#root");
// const new_element = document.createElement("p")
// new_element.innerText = "Ура! Мой скрипт отработал верно!";
// parent.append(new_element)

//2.2  В HTML-документе есть тег <p> c идентификатором title. Напишите скрипт, который создает новый элемент <h2> в переменной new_element с текстовым содержимым Сегодня солнечно, минус 15 и добавляет новый элемент сразу после тега с идентификатором title.

// const paragraph = document.querySelector("#title");
// const new_element = document.createElement("h2");
// new_element.innerText = "Сегодня солнечно, минус 15";
// paragraph.parentNode.appendChild(new_element)


// 2.3 В HTML-документе задан тег <ul> c элементами <li> внутри. Напишите скрипт, который создает новый элемент <li> с текстовым содержимым Велосипед в переменной new_element и добавляет его в начало списка <ul>.

// let element = document.querySelector("ul");
// let child = document.querySelector("li")
// let new_element = document.createElement("li");
// new_element.innerText = "Велосипед";
// element.insertBefore(new_element, child)



// 2.4 В HTML-документе есть несколько тегов <div>. Напишите скрипт, который всем тегам <div> добавляет класс adds.

// const list = document.querySelectorAll("div");
// list.forEach(el => {
//     el.className = "adds";
// })

// 2.5 В HTML-документе есть несколько тегов <p>. Напишите скрипт, который присваивает каждому тегу идентификатор — от значения p_1 и до p_<n>. Тут n — количество параграфов.

// const list = document.querySelectorAll("p")
// list.forEach(el => {
//     let n = 1;
//     el.id = `p_${n + 1}`
// })

// 2.6 В HTML-документе заданы теги <p>. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение Delete.
// let list = document.querySelectorAll("p");
// list.forEach(el => {
//     if(el.innerText.toLowerCase() === 'delete') {
//         el.remove()
//     }
// })

// 2.8 В HTML-документе заданы два <div> тега с идентификаторами div1 и div2. Напишите скрипт, который позволит перенести содержимое тега с идентификатором div1 в конец тега с идентификатором div2.

// let div1 = document.querySelector("#div1");
// let div2 = document.querySelector("#div2");

// while (div1.children.length) {
//     div2.append(div1.firstElementChild);
// }

// 2.11 В скрипте объявлена переменная task, в которой хранится список из строк. В HTML-верстке есть тег <div> с идентификатором root. Допишите скрипт так, чтобы на основе значений списка сформировались теги <p> и добавились в элемент с идентификатором root.
// const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];

// let root = document.querySelector("#root");
// tasks.forEach(t => {
//     let p = document.createElement("p");
//     p.innerText = t;
//     root.append(p)
// });

// 2.12 Напишите программу, которая считает количество <div>-, <p>- и <h2>-тегов и записывает его в объект tags, как в примере. Выведите сформированный объект в консоль.

// const tagNames = ["div", "p", "h2"];
// let hash = {};
// tagNames.forEach(n => {
//     hash[n] = document.querySelectorAll(n).length
// });
// console.log(hash)

// document.body.innerText = "";

// // Task "Mood cards"
// const moods = [
//     'cloud',
//     'sun',
//     'wind',
//     'water',
//     'moon',
//     'cloud-sun',
//     'cloud-rain',
//     'snowflake',
//     'bolt'  
// ];

// const getNumber = (max = 10, min = 0) => Math.floor(Math.random() * (max - min) + min);
// const getColor = () => {
//     let r = getNumber(256);
//     let g = getNumber(256);
//     let b = getNumber(256);
//     return `rgb(${r},${g},${b})`
// }

// let wrapper = document.createElement("div");
// wrapper.className = "wrapper";
// wrapper.style = `background-color: ${getColor()}`; 
// document.body.append(wrapper);

// for(let mood of moods) {
//     let card = document.createElement("div");
//     card.className = "card";
//     card.innerHTML= `<i class="fa-solid fa-${mood}"></i>`;
//     card.style = `color: ${getColor()} `
//     wrapper.append(card);
// }

// document.body.innerText = ""


// ex.2.7 В скрипте объявлен массив values, который состоит из чисел. В HTML-документе есть множество тегов <p> с классом elems. Необходимо дописать скрипт так, чтобы он удалил все теги <p> с классом elems, значение которых входит в массив values.

// const values = [10, 50, 100];
// let elements = document.querySelectorAll(".elems");

// elements.forEach(el => {
//     if (el.innerText === values[i]) {
//         el.remove()
//     }
// })

// ex.2.9 В HTML-документе есть тег <ul> c идентификатором first. Внутри этого тега есть теги <li>. Напишите скрипт, который создает новый тег <li> в переменной new_element и добавляет в элемент <ul> с идентификатором first. После добавления нового элемента выведите в консоль общее количество тегов <li> в теге <ul> с идентификатором first.

// const parent = document.querySelector('#first');
// const new_element = document.createElement("li");
// parent.appendChild(new_element);
// console.log(parent.children.length)

// ex.2.10 В скрипте объявлена переменная values, которая содержит массив из строк. В HTML-верстке есть два тега <div> с классами div1 и div2. Допишите скрипт так, чтобы все теги <p> из тега с идентификатором div1, значение которого встречается в списке values, переместились в тег с идентификатором div2.
// const values = ["велосипед", "ролики", "лыжи"];
// const d1 = document.querySelectorAll("#div1 p");
// const d2 = document.querySelector("#div2");
// const arr = [...d1].map(el => el.innerText);
// const matched = values.filter(e => arr.indexOf(e) > -1);
// const res = matched.map(el => {
//     const elem = document.createElement("p");
//     elem.innerText = el;
//     return elem;
// })
// d1.forEach(el => {
//     for (val of values) {
//         if (val === el.innerText) {
//             el.remove()
//         }
//     }
// })
// d2.append(...res)


const values = ["велосипед", "ролики", "лыжи"]
const d1 = document.querySelectorAll("#div1 p");
const d2 = document.querySelector("#div2");
const arr = [...d1].map(el => el.innerText);
const matched = values.filter(e => arr.indexOf(e) > -1);

for(i = 0; i < matched.length; i++) {
    remove(matched[i])
    add(matched[i])
}
            
function remove(name) {
    d1.forEach(el => {
    if (name === el.innerText) {
        el.remove()
    }
})
}
function add(name) {
    const elem = document.createElement("p");
    elem.innerText = name;
    d2.append(elem)
}


// ex.2.13 В HTML-документе есть тег <ul> с идентификатором tasks, и внутри него есть несколько тегов <li> с текстом. Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.

// const list = document.querySelectorAll("#tasks li");
// const elements = Array.from(list);
// elements.sort ((a,b) => a.textContent.length -  b.textContent.length);
// elements.forEach(el => {document.querySelector("#tasks").append(el)});

