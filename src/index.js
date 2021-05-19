// var val1 = "var変数";
// console.log(val1);

// var val1 = "var変数を再宣言";
// console.log(val1);

//

// const val4 = {
//   name: "レオン",
//   age: 24,
// };

// val4.name = "reon";
// val4.addres = "Kyoto"
// console.log(val4);

// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */

//  const name = "れおん";
//  const age = 24;

//  /**従来の方法 */
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

//従来の関数
// function func1(str) {
//   return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("funk1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));
