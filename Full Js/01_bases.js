// const result = confirm('Are you here?' )
// console.log(result)

// const answer = prompt('Вам есть 18?', '20')
// console.log(answer)


// const answer = +prompt('Вам есть 18?', '20')
// console.log(answer + 5)


// const answers  = []
// answers[0] = prompt('What is your name?', ' ')
// answers[1] = prompt('What is your surname?', ' ')
// answers[2] = prompt('How old are you?', ' ')
// //document.write(answers)
//  console.log(typeof(answers))


// const category = 'toys'
// console.log(`https://somurl.com/${category}/info/about`)


// const name = 'Huseyn'
// alert(`Hi, ${name}`)

// const user = 'Abdurahimov'
// alert(`Hi, ${user}`)


// ОПЕРАТОРЫ JS

// let incr = 10,
//     decr = 15;

// Перед значениями = Префиксные
// incr++;
// decr--;

// После значений = Постфиксными
// ++incr;
// --decr;
// console.log(incr)    
// console.log(decr)


////// =================
/*
Один раз написать знак равно = означает присваивание
console.log(a = 5)

Два раза написать знак равно == означает сравнение
console.log(2 * 4 == 8)      //true
console.log(2 * 4 == '8')   //true

Три раза написать знак равно === означает строгое сравнение
console.log(2 * 4 === '8')   //False
console.log(2 * 4 === 8)    //true

*/


// Оператор отрецание (!) 
// const isChecked = false,
//       isClose = false;
// console.log(isChecked || !isClose); // так как перед вторым
// значением мы добавили Оператор отрецание (воскресательный знак), оно превратилось в true




// =========== Условие If ============ \\
/*
const num = 49
if (num == 50) {
    console.log('Error')
} else if (num < 20) {
    console.log('___')   
} else (num == 49) {
    console.log('OK')
}
*/
// Тернарные условия пример
// const num = 50
// (num === 50) ? console.log('Ok!') : console.log('Error!')
 
// ------------====-----------

/*
const num = 40;

switch (num) {
    case 49:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 50:
        console.log('True!');
        break;
    default:
        console.log('Not this time');
        break;
}
*/


// --------===== Логические операторы ======---------
// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log(' I am sarisfed' );
// } 

// console.log(hamburger && fries)

/*
const hamburger = 2;
const fries = 1;

if (hamburger === 3 && fries === 1) {
    console.log(' We are sarisfed' );
} else {
    console.log('We wil go to another place')
}
*/


//-==-======-===--- Циклы ---==-==-=====-====
/*
let num = 50

while (num <= 55) {
    console.log(num);
    num++;
}
*/

//========---------=========

/*
do { 
    console.log(num);
    num++; 

}
while (num < 55)
*/

//========---------=========

// FOR
/*
let num = 50
for (let i = 1; i < 8; i++) {
    console.log(num);
    num++; 
} 
*/

/*
let num = 50
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
    
}
*/

for (let i = 5; i < 14; i++) {
    if (i === 10) {
        continue;
    }

    console.log(i)
}

//==========================
for (let i = 4; i <= 12; i++) {
    if (i === 9) {
        continue;
    }
    console.log(i)
}
//==========================
let num = 25;
for (let i = 5; i <= 7; i++) {
    console.log(num)
    num++
}
//==========================
let array = [4, 5, 6, 'home', 'house', 'office'];
for  (let i = 0; i <= array.length; i++) {
    if (typeof(array[i]) === 'number') {
        array[i] = array[i] * 2;
    } else if (typeof(array[i]) === 'string') {
        array[i] = `${array[i]} - work`
    }
    console.log(array)
}
//==========================





//==========================
for (let i = 3; i <= 9; i++) {
    if (i > 6) {
        break;
    }
    console.log(i)
}
//==========================
for (let i = 4; i <= 19; i++) {
    if (i === 12) {
        break;
    }
    console.log(i)
}
//========-------------------=======Abramyan=======-----------------========FOR=========================---------------========================
// For1. Даны целые числа K и N (N > 0). Вывести N раз число K.
let n = 5
    k = 10
for (let i = 0; i <= n; i++) {
    console.log(k)
}

// For2. Даны два целых числа A и B (A < B). Вывести в порядке возрастания все
// целые числа, расположенные между A и B (включая сами числа A и B), а
// также количество N этих чисел.
/*
let a = 1
    b = 8
    n = 0
for (let i = a; i <= b; i++) {
    console.log(i)
    n++
}
console.log("Общее количество чисел составило " + n);
*/

//For3. Даны два целых числа A и B (A < B). Вывести в порядке убывания все
// целые числа, расположенные между A и B (не включая числа A и B), а
// также количество N этих чисел.
 let a = 1;
     b = 10; 
     n = 0;
for (let i = a; i <= b; i++) {
    console.log(i)
}


//========---------=========
// Цикл в цикле
/*
for (let i = 0; i < 3; i++) {
    console.log(i)
    for (let j = 0; j < 3; j++) {
        console.log(j)
        
    }
}
*/


/*

*
**
***
****
*****
******
*******

*/



/* 
let result = '';
 const length = 8;

 for (let i = 1; i < length; i++) {

    for (let j = 0; j < i; j++) {
                 result += '*';

     }
*/

//     result += '\n';
// }

// console.log(result)


/*
first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
            
        } 
    }
}
*/
//======================------------------------------========================

// Задачи:
// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
for (let i = 5; i < 11; i++) {
    console.log(i)
}

// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке 
//(20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
for (let i = 20; i > 9; i--) {
    if (i === 13) {
        break;
    }
    console.log(i)
}

// При помощи цикла for выведите чётные числа от 2 до 10 включительно
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

// При помощи цикла for выведите чётные числа от 2 до 30 включительно
  for (let i = 2; i <= 30; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
  }


// Перепишите цикл  for на вариант с while. Результат должен остаться точно
// таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// Цикл, который нужно переписать:
 
  for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2
while (i <= 14) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i)
    }
    
}

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно 
// сформировать так же, как и обращаться к ним: arr[0]
const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;
}

console.log(arrayOfNumbers);


// Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве 
// можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = arr.concat()
// console.log(result)

//============
const arr = [3, 5, 8, 16, 20, 23, 50];
    const resalt = [];

    for (let i = 0; i < arr.length; i++) {
        resalt[i] = arr[i];
    }

    console.log(resalt);
    return resalt;



    const data = [5, 10, 'Shopping', 20, 'Homework'];

    for (let i = 0; i < data.length; i++) {
        if (typeof(data[i]) === 'number') {
            data[i] = data[i] * 2;
        } else if (typeof(data[i]) === 'string') {
            data[i] = `${data[i]} - done`;
        }
    }

    console.log(data);
    return data;

    let result = '';
    const length = 6;
   
    for (let i = 1; i < length; i++) {
   
       for (let j = 0; j < i; j++) {
                    result += '*';
   
        }
    } 


   


























































































































































