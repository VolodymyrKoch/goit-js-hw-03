// // -----task-1_modul-2----

const logItems = function (array) {
  let result = '';
  for (let i = 0; i < array.length; i += 1) {
    result += `${i + 1} - ${array[i]}\n`;
  }
  return result;
};
console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// // ----------------------------------------------------
