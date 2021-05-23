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

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("funk1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */

//  const myProfile = {
//    name: "れおん",
//    age: 24,
//  };

//  const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
//  console.log(message1);

//  const {name, age} = myProfile;
//  const message2 = `名前は${name}です。年齢は${age}歳です。`;
//  console.log(message2);

//

//デフォルト値、引数など

// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん`);
// sayHello();

//スプレッド構文
//配列の展開

// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3 ] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った配列の処理

const nameArr = ["田中", "山田", "れおん"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// };

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "れおん"){
//     return name
//   }else{
//     return `${name}さん`
//   }
// });
// console.log(newNameArr);

//三項演算子
//ある条件？　条件がtrueの時 : 条件がfalseのとき

// const val1 = 1 > 0  ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください'
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています！！' : '許容範囲内です';
// }
// console.log(checkSum(50, 40));

//論理演算子の本当の意味 && ||

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log('1か2はtrueになります');
// }
// if (flag1 && flag2) {
//   console.log('1も2もtrueになります');
// }

// ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
