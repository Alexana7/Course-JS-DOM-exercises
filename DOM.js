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

// const values = ["велосипед", "ролики", "лыжи"]
// const d1 = document.querySelectorAll("#div1 p");
// const d2 = document.querySelector("#div2");
// const arr = [...d1].map(el => el.innerText);
// const matched = values.filter(e => arr.indexOf(e) > -1);

// for(i = 0; i < matched.length; i++) {
//     remove(matched[i])
//     add(matched[i])
// }
            
// function remove(name) {
//     d1.forEach(el => {
//     if (name === el.innerText) {
//         el.remove()
//     }
// })
// }
// function add(name) {
//     const elem = document.createElement("p");
//     elem.innerText = name;
//     d2.append(elem)
// }


// ex.2.13 В HTML-документе есть тег <ul> с идентификатором tasks, и внутри него есть несколько тегов <li> с текстом. Напишите скрипт, который позволяет отсортировать элементы <li> в теге <ul> по длине содержимого.

// const list = document.querySelectorAll("#tasks li");
// const elements = Array.from(list);
// elements.sort ((a,b) => a.textContent.length -  b.textContent.length);
// elements.forEach(el => {document.querySelector("#tasks").append(el)});

// 3.1. В HTML-документе задан тег <div> с идентификатором div_elem. Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.
// const div = document.querySelector("#div_elem");
// div.style.width = "100";
// div.style.height = "100";

// 3.2. В HTML-документе задан тег <p> с идентификатором rainbow. Напишите скрипт, который указывает в стиле синий цвет текста (#2980b9).

// const paragraph = document.querySelector("#rainbow");
// paragraph.style.color = "#2980b9"

// 3.3 В HTML-документе есть тег <label> и тег <input> с идентификатором target. Необходимо написать скрипт, который присваивает тегу <label> атрибут, позволяющий привязать его к тегу <input>. В результате при клике мышью на <label> тег <input> должен стать активным (в него должен переместиться курсор).

// const label = document.querySelector("label");
// label.setAttribute("for", "target");

// 3.4  В HTML-документе есть тег <p> c идентификатором rainbow. Внутри этого тега указано число. Реализуйте скрипт, который делает преобразование в зависимости от следующих условий: Е
// Eсли числовое значение находится в диапазоне от 1 до 9 включительно, должно меняться значение атрибута style. Цвет текста — на красный (#c0392b).
// Если числовое значение находится в диапазоне от 10 до 20 включительно — на коричневый (#e17055).
// В ином случае — на желтый (#fdcb6e).
// const p = document.querySelector("#rainbow");
// let n = p.innerText;

//  if(n >= 1 && n <= 9) {
//     p.style.color = "#c0392b";
//  } else if(n >= 10 && n <= 20) {
//     p.style.color = "#e17055";

//  } else {
//     p.style.color = "#fdcb6e";
//  }

// 3.5 В HTML-документе есть тег <div> с идентификатором photo. Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:

// заменит ссылку на тег <img> с этой картинкой
// укажет размеры картинки в атрибуте style 100 на 100 пикселей

// const elem = document.querySelector("#photo");
// let link = elem.innerText;
// elem.innerHTML = "<img>"
// const img = document.querySelector("img");
// img.setAttribute("src", `${link}`)
// img.style.width = "100";
// img.style.height = "100"

// 3.6 В HTML-документе задан тег <select> c идентификатором numbers. Напишите скрипт, который добавит внутрь этого тега несколько тегов <option> со значениями от 10 до 550 с шагом 10. Значение у тега <option> должно быть указано внутри и в атрибуте value.
// const numbers = document.querySelector("#numbers")
// let arr = [];
// for(let i = 0; i < 550;) {
//     i = i + 10;
//     arr.push(i)
// }
// arr.forEach(num => {
//     let option = document.createElement("option");
//     option.value = num;
//     option.innerText = num;
//     numbers.appendChild(option)
// })






// 3.7 В HTML-документе задан тег <select>. В скрипте объявлена переменная countries, в которой указаны некоторые страны. Доработайте скрипт так, чтобы в тег <select> добавились теги <option> по одному на каждую страну из массива countries. В качестве значения тега option укажите название страны, а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).

// const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
// const select = document.querySelector("select");
// countries.forEach(c => {
// let option = document.createElement("option");
// option.value = c.slice(0, 2).toLowerCase();
// option.innerText = c;
// select.appendChild(option)
	
// })

// 4.1 В HTML-документе задан тег <button> с идентификатором btn и тег <p> с идентификатором val. Напишите скрипт, который выводит в консоль содержимое тега <p> при клике на кнопку.

// const btn = document.querySelector("#btn");
// const paragraph = document.querySelector("#val");

// btn.click = function(event) {
//     console.log(paragraph.innerText)
// }

// 4.2 В HTML-документе задан тег <button> с идентификатором btn и тег <input> с идентификатором val. Напишите скрипт, который выводит в консоль значение тега <input> при клике на кнопку.
// const btn = document.querySelector("#btn");
// const input = document.querySelector("#val");

// btn.click = function() {
//     console.log(input.value)
// }

// 4.3 В HTML-документе задан тег <div> c идентификатором square. Он представляет собой синий квадрат. Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

// const square = document.querySelector("#square");

// square.onclick = function() {
//     this.style.opacity = 0;
 
// }

// 4.4 В HTML-документе есть тег <button> с идентификатором clicker. Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором clicker. При нажатии на кнопку число внутри тега <button> должно увеличиваться на один.
// const btn = document.querySelector("#clicker");
// btn.addEventListener("click", function() {
//     btn.innerText += 1;
// });


// 4.5 В HTML-документе задан тег <button> с идентификатором delete и тег <ul> c идентификатором points и c элементами <li> внутри. Напишите скрипт, который позволяет удалить последний элемент <li> в списке <ul> при нажатии на кнопку

// const btn = document.querySelector("#delete");
// const list = document.querySelector("#points");

// btn.addEventListener("click", function() {
//     list.removeChild(list.lastChild);
    
// });

// 4.6 В HTML-документе задан тег <div> c идентификатором square в виде красного квадрата. У него есть атрибут style с указанными высотой и шириной в 100 пикселей. Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.

// const sq = document.querySelector("#square");
// sq.addEventListener('click', e => {
//     let w = parseInt(sq.style.w) || sq.scrollWidth;
//     let h = parseInt(sq.style.h) || sq.scrollHeight;
//     sq.style.width = w * 0.9 + "px";
//     sq.style.height = h * 0.9 + "px";


// 4.7 В HTML-документе задан тег <button> с классом copy. Напишите скрипт, который позволит при нажатии на кнопку <button> создать ее копию и расположить в конце тега body.

// const btn = document.querySelector(".copy");
// btn.addEventListener("click", function(){
//     let item = document.createElement("button")
//     item.classList.add("copy");
//     item.innerText = btn.innerText; 
//     document.body.appendChild(item)
// })
