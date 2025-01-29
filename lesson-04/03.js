/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7, 8]


function findUniqueElements(array1, array2) {
    const commonElements = [];
    for (let element of array1) {
      if (array2.includes(element)) {
          commonElements.push(element);
      }
  }
  
  return commonElements;
}


console.log(findUniqueElements(array1, array2));