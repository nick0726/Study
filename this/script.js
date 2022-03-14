/* var change = function () {
  document.getElementById('hello').innerHTML = '바보';
};
document.getElementById('button').addEventListener('click', function () {
  change();
}); */

/* Constructor and Instance */
/*
var smt = {};

function machine() {
  this.name = 'Kim';
}

var obj = new machine();
console.log(obj);
*/

/*
document.getElementById('button').addEventListener('click', function (e) {
  // console.log(this);
  // console.log(e.currentTarget);
  var array = [1, 2, 3];
  array.forEach(function (a) {
    console.log(this); // 1, 2, 3 한번씩 출력
  });
}); */

/*
var obj = {
  name: ['kim', 'lee', 'park'],
  func: function () {
    obj.name.forEach(function () {
      console.log(this);
    });
  },
};

console.log(obj.func()); */

/*
var smt = {};

function machine() {
  // constructor
  this.name = 'Kim'; // instance
}

var object = new machine();
console.object; */

/*
document.getElementById('button').addEventListener('click', function (e) {
  // this; // = e.currentTarget
  var array = [1, 2, 3];
  array.forEach(function (a) {
    console.log(this);
  });
});

var object = {
  names: ['Kim', 'Lee', 'Park'],
  func: function () {
    console.log(this);
    object.names.forEach(() => {
      console.log(this);
    });
  },
};

object.func();
*/

/*
var func = (a) => {
  return a + 10;
};
console.log(func(5));
*/

/*
[1, 2, 3, 4].forEach((a) => {
  console.log(a);
});
*/

/*
var object = {
  func: () => {
    return this;
  },
};
*/
/*
var person = {
  name: 'Son',
  sayHi: function () {
    console.log('Hello i am ' + this.name);
  },
}; 

person.sayHi();

var data = {
  datas: [1, 2, 3, 4, 5],
}; */

/*
data.datas = function () {
  var sum = 0;
  this.datas.forEach(function (a) {
    sum = sum + a;
  });
  console.log(sum);
};
data.datas(); */

/*
document.getElementById('button').addEventListener('click', function () {
  setTimeout(() => {
    console.log(this.innerHTML);
  }, 2000);
}); */

/*
var age;

console.log(age);

age = 30;

console.log(age); */

// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

// setTimeout(func, sec)

// var 변수 = '손홍민';
// var 문자 = `안녕하세요 ${변수} 입니다.`;

// function 해체분석기(문자들, 변수들) {
//   console.log(문자들[1] + 변수들 + 문자들[0]);
// }

// 해체분석기`안녕하세요 ${변수} 입니다`;
/*
var pants = 0;
var socks = 100;
`바지${pants} 양말${socks}`;

function destructor(string, variable1, variable2) {
  if (variable1 === 0) {
    console.log(`We dont have pants to sell`);
  }
  console.log(string[1] + variable1 + string[0] + variable2);
}
destructor`바지${pants} 양말${socks}`; */
// var array = ['Hello', 'World'];
// console.log(...array);

// var string = 'hello';

// console.log('string');
// console.log(...string);

// var a = [1, 2, 3];
// var b = [4, 5];

// var c = [...a, ...b];
// console.log(c);
// console.log(c);

// var o1 = { a: 1, b: 2 };
// var o2 = { ...o1, c: 3 };

// console.log(o2);

/*
function sum(a, b, c) {
  console.log(a + b + c);
}

var array = [10, 20, 30];
sum(array[0], array[1], array[2]);

sum.apply(undefined, array);
sum(...array); */

// var person = {
//   hello: function () {
//     console.log(this.name + ' Hello');
//   },
// };
/*
var person2 = {
  name: 'Son',
};
person.hello.apply(person2, [1, 2]);

person.hello.call(person2, 1, 2);
*/

/*
function temp() {
  return 10;
}

function sum(a, b = temp()) {
  console.log(a + b);
}

sum(1);
*/

/*
function func(a, b, c) {
  console.log(arguments);
}
func(1, 2, 3); */

/*
function func(temp, a, b, c) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
} */

// var board = [];

// for (let i = 0; i < 8; i++) {
// for (let j = 0; j < 8; j++) {

//   console.log();
// }
// }

// function func(tempPara, a, b, c) {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }

// func(2, 3, 4);

/*
function func2(...rests) {
  console.log(...rests);
  for (var i = 0; i < rests.length; i++) {
    console.log(rests[i]);
  }
}

func2(1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 5, 2, 312, 3); */

/*
var a = [1, 2, 3];
var b = '김밥';
var c = [...b, ...a];
// console.log(c);

// ...a = [[1,2,3]]
// ['김밥']

function 함수(a = 5, b = a * 2) {
  console.log(a + b); //15
  return 10;
}
함수(3); //9

function 어레이(...rest) {
  console.log(rest);
}

var newArray = 어레이(1, 2, 3, 4, 5);
console.log(newArray);

// math.max(parameter = numbers)

var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
function isMaximum(numbers) {
  Math.max(numbers);
}
console.log(isMaximum(numbers));

function 정렬(...rest) {
  rest.sort();
}

console.log(정렬('bear')); */

// function sum(a, b = 10) {
//   // b자리에 아무것도 안넣을경우 10 지정하겠음
//   console.log(a + b);
// }

// sum(1);
// console.log(sum(1)); // 11

// function func(a, b, c) {
//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// func(1, 2, 3, 4, 5, 3, 3, 2, 12, 3, 321, 4, 213);

/*
function func(a, b, c) {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

func(1, 2, 3, 4, 123, 12, 3123, 123, 12);
*/

/*
function func2(a, b, ...rest) {
  // ... + rest = ...뒤에 오는 rest(parameter) 전부를 배열에 담아주세요
  console.log(rest);
}
func2(1, 2, 3, 41, 23, 23);
*/

// function func2(...rest) {
//   for (let i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }

// // func2(1, 2, 3, 4);
// let rest = [1, 2, 3, 4, 5, 3, 4, 234, 23];
// function func2(...rest) {
//   for (let i = 0; i < rest.length; i++) {
//     console.log(rest[i]);
//   }
// }
// func2(...rest);

// var a = [1, 2, 3];
// var b = '김밥';
// var c = [...b, ...a];
// console.log(c);
// c = [1,2,3,'김밥'] 땡, ['김','밥',1,2,3]

// var a = [1, 2, 3];
// var b = ['you', 'are'];
// var c = function (a, b) {
//   console.log([[...a], ...[...b]][1]);
// };
// c(a, b); // you ??????????????????/
// console.log([[1,2,3], 'you', 'are'][1]);

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
//   return 10;
// }
// 함수(3);

// function 함수(a = 5, b = a * 2) {
//   console.log(a + b);
// }
// 함수(undefined, undefined); // 입력 안했을때 옆에 써놓은 파라미터 입력하란거니까...! 15나옴

// function array(...rest) {
//   console.log(rest);
// }

// var newArray = array(1, 2, 3, 4, 5);
// console.log(newArray);

// var numbers = [2, 3, 4, 5, 6, 1, 3, 2, 5, 5, 4, 6, 7];
// console.log(Math.max(...numbers));

// function arrangement(data) {
//   console.log(...[...data].sort());
// }
// let data = 'bear';
// arrangement(data);

/* countWord('aacbbb');
function countWord(word) {
  var result = {};
  [...word].forEach(function (x) {
    result[x] > 0 ? (result[x] += 1) : (result[x] = 1);
  });
  console.log(result);
  return result;
} */

// debugger;
/*
countWord('aacbbb');
function countWord(word) {
  var result = {};
  [...word].forEach(function (x) {
    if (result[x] > 0) {
      // console.log(result, '여기가 console result');
      // console.log(result[x]);
      result[x] = result[x] + 1;
    } else {
      result[x] = 1;
    }
  });
  console.log(result);
  return result;
}

function dataMining(word) {
  var result = {};
  [...word].forEach(function (x) {
    if (result[x] > 0) {
      result[x] += 1;
    } else {
      result[x] += 1;
    }
  });
  return result;
}
dataMining('aacbbb'); */

/*
var student1 = {
  name: 'Kim',
  age: 15,
  sayHi: () => {console.log('안녕하세요 ' + this.name + '입니다.')},
};
student1.sayHi(); */

/*
function Machine(name) {
  this.name = name;
  this.age = 15;
  this.sayHi = () => {
    console.log('안녕하세요 ' + this.name + '입니다.');
  };
}

var student1 = new Machine('Park');
console.log(student1);

var student2 = new Machine();
console.log(student2.sayHi()); */

/*
function Constructor(name) {
  this.name = name;
  this.age = 15;
  this.sayHi = () => {
    console.log(`Hello I'm ${name}.`);
  };
}

var case1 = new Constructor('Lee');
console.log(case1.sayHi());

var case2 = new Constructor('Choi');
console.log(case2.sayHi()); */

/*
function Constructor(name, price) {
  this.name = name;
  this.price = price;
  this.tax = () => {
    console.log(`the tax is ${this.price * 0.1}`);
  };
}

var product1 = new Constructor('shirts', 50000);
console.log(product1);
// console.log(product1.tax());

var product2 = new Constructor('pants', 60000);
console.log(product2);
// console.log(product2.tax());
console.log(Constructor.prototype);
Constructor.prototype.gender = 'man';

console.log(product1.gender);

var arr = [1, 2, 3];
var arr = new Array(1, 2, 3);
console.log(Array.prototype);
console.log(product1._proto_); */

// function Constructor(name) {
//   this.name = name;
//   this.age = 15;
//   this.sayHi = () => {
//     console.log(`I'm ${this.name}`);
//   };
// }

// Constructor.prototype.gender = 'man';

// var stu1 = new Constructor('Park');
// var stu2 = new Constructor('Lee');

// console.log(stu1._proto_);
