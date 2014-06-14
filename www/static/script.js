alert('Hello World !');

console.log('Hello World !');

var helloWorld = 'Hello World !';

console.log(helloWorld);

var hello = 'Hello ';

console.log(hello + 'World !');

var text = 'text';
var number = 1;
var boolean = true;

console.log(1 + 1);
var result = 1 + 1;
console.log(result);
result = result * 2;
console.log(result);

if (true) {
  console.log('this is true');
}

if (false) {
  console.log('this is true');
}
else {
  console.log('this is false');
}

if (1 + 1 === 2) {
  console.log('one and one is two');
}

if (1 - 1 === 2) {
  console.log('one minus one is two');
}
else {
  console.log('one minus one is not two');
}

var counter = 0;
while (counter < 10) {
  console.log(counter);
  counter++;
}

for (var i = 0; i < 10; i++) {
  console.log(i);
}


function log(message) {
  console.log(message);
}


var array = [];
array[0] = 'my first element';
array[1] = 'my second element';

log(array[0]);
log(array[1]);
log(array);

for (var index = 0; index < array.length; index++) {
  log(array[index]);
}

var me = {
  name: 'Yannick',
  job: 'developement'
};

log(me.name);
log(me.job);
log(me);

function whoAmI (person) {
  return 'I am ' + person.name + ', I do ' + person.job;
}

log(whoAmI(me));


var contactForm = document.getElementById('contact');
var textField = document.getElementById('message');

contactForm.onsubmit = function() {
  if (textField.value === '') {
    alert('Vous devez mettre un message !');
  }
}



