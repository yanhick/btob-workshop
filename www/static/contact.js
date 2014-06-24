
document.onclick = function () {
    alert('hello !');
}

document.onclick = function () {
    document.getElementsByTagName('h1')[0].innerHTML = 'hello !';
}

document.onclick = function () {
    var answer = prompt('Titre ?');
    document.getElementsByTagName('h1')[0].innerHTML = answer;
}

window.onload = function () {

    var dateDiv = document.createElement('div');
    document.body.appendChild(dateDiv);

    dateDiv.innerHTML = new Date();

    setInterval(function () {
        dateDiv.innerHTML = new Date();
    }, 1000);

    var contact = document.getElementById('contact');
    contact.onsubmit = function (e) {
        var message = document.getElementById('message');
        if (message.value === '') {
            alert('Vous devez envoyer un message');
            e.preventDefault();
        }
    }

    contact.onsubmit = function (e) {
        var message = document.getElementById('message');
        if (message.value === '') {
            e.preventDefault();
            var text = document.createElement('div');
            text.innerHTML = 'Vous devez entrer un message';
            text.style.color = 'red';

            message.parentNode.insertBefore(text, message);

            message.style.background = 'orange';
        }
    }
}

