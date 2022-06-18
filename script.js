// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arrConcat1 = [1, 2, 3];
const arrConcat2 = [4, 5, 6];
const arrConcat3 = arrConcat1.concat(arrConcat2);
// или
const arrConcat4 = [].concat(arrConcat1, arrConcat2);

console.log();

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arrRevers1 = [1, 2, 3];
const arrRevers2 = arrRevers1.reverse();
console.log(arrRevers2);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arrPush = [1, 2, 3];
arrPush.push(4, 5, 6);
console.log(arrPush);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arrUnshift = [1, 2, 3];
arrUnshift.unshift(4, 5, 6);
console.log(arrUnshift);

// 5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.

const arrShift = ["js", "css", "html"];
console.log(arrShift.shift());

// 6. Дан массив ['js', 'css', ‘html']. Выведите на экран последний элемент и удалите его.
const arrPop = ["js", "css", "html"];
console.log(arrPop.pop());

// 7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arrSlice = [1, 2, 3, 4, 5];
const arrNewSlice = arrSlice.slice(0, 3);
console.log(arrNewSlice);

// 8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

const arrSlice2 = [1, 2, 3, 4, 5];
const arrNewSlice2 = arrSlice2.slice(3);
console.log(arrNewSlice2);

// 9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

const arrSplice = [1, 2, 3, 4, 5];
arrSplice.splice(1, 2);
console.log(arrSplice);

// 10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arrSplice2 = [1, 2, 3, 4, 5];
const arrSplice3 = arrSplice2.splice(1, 3);
console.log(arrSplice3);

// 11.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arrSplicaAdd = [1, 2, 3, 4, 5];
arrSplicaAdd.splice(3, 0, "a", "b", "c");
console.log(arrSplicaAdd);

// 12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr_splise = [1, 2, 3, 4, 5];
arr_splise.splice(4, 0, "c");
arr_splise.splice(6, 0, "e");
arr_splise.splice(1, 0, "a", "b");
console.log(arr_splise);

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arrSort = [3, 4, 1, 2, 7];
arrSort.sort();
console.log(arrSort);


//14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
let task ={
  js:'test', 
  jq: 'hello',
  css: 'world',
};
console.log(Object.keys(task));

//  ==================================================

// 1.Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, и возвращать true, если строка есть в массиве, и false - если нет



// 2. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.



// 3.Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true  [2,2,1], а если нет - вернуть false [1,2,1].

function check(a) {
  for (var b=1; b<a.length; ++b) {
    if (a[b] === a[b-1]) {
      return true;
    }
  }
  
  return false;
}
console.log(check([2,2,1]))

// 4. Функция, которая возвращает массив заполненный 10 случайными числами в интервале от 5 до 33. Math.random()







// 5. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

function average(arr) {
  return arr.reduce((partial_sum, a) => partial_sum + a, 0) / arr.length; 
}

console.log(average([12, 15, 20, 25, 59, 79]));