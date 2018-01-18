'use strict';

var user = { name: 'Mario', age: 30 };

var add = function add(a, b) {
  return a + b;
};
console.log(add(55, 6, 32));

var template = React.createElement(
  'p',
  null,
  user.name + ' is ' + user.age
);

console.log(template);

ReactDOM.render(template, document.getElementById('app'));
