// Task 1

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x); // "Tom"
console.log(y); // "Sam"
console.log(z); // [Bob]

// Task 2

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26]
};
let { names, ages } = data;
let [name1, name2, name3, name4] = names;
let [age1, age2, age3, age4] = ages;
console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// Task 3

function mul(...rest) {
  let arrNum = [];
  let r = rest.slice(",");
  let s;
  for (let i = 0; i < r.length; i++)
    if (Number(r[i]) && r[i] !== true && r[i] != null) {
      arrNum.push(r[i]);
      function sum(a, b) {
        return a + b;
      }
      s = arrNum.reduce(sum);
    }
  if (s === undefined) {
    console.log(0);
  }
  console.log(s);
}

mul(1, "str", 2, 3, true);
mul(null, "str", false, true);

// Task 4

let server = {
  data: 0,
  convertToString: function(callback) {
    callback(
      function() {
        return this.data + "";
      }.bind(this)
    );
  }
};
let client = {
  server: server,
  result: "",
  calc: function(data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function() {
    return function(callback) {
      this.result = callback();
    }.bind(this);
  }
};
client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// Task 5

function mapBuilder(keys, values) {
  let newMap = new Map();
  for (i = 0; i < keys.length; i++) {
    newMap.set(keys[i], values[i]);
  }
  console.log(newMap.get(1));
  console.log(newMap.size); // 4
  console.log(newMap.get(2)); // "span"
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];

mapBuilder(keys, values);
