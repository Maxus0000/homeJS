// 1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.

const arrConcat1 = [1, 2, 3];
const arrConcat2 = [4,5,6];
const arrConcat3 = arrConcat1.concat(arrConcat2);
// или
const arrConcat4 =[].concat(arrConcat1, arrConcat2)

console.log();

// 2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

const arrRevers1 =[1,2,3];
const arrRevers2 = arrRevers1.reverse();
console.log(arrRevers2);

// 3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.

const arrPush = [1, 2, 3];
arrPush.push(4,5,6);
console.log(arrPush);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

const arrUnshift = [1, 2, 3];
arrUnshift.unshift(4,5,6);
console.log(arrUnshift);

// 5. Дан массив ['js', 'css', ‘html']. Выведите на экран первый элемент и удалите его.

const arrShift = ['js', 'css', 'html'];
console.log(arrShift.shift());


