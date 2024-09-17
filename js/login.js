'use strict'

const empresa = document.getElementById('empresa');
const funcionario = document.getElementById('funcionario');

empresa.addEventListener('change', function() {
    if (empresa.checked) {
        funcionario.checked = false;
    }
});

funcionario.addEventListener('change', function() {
    if (funcionario.checked) {
        empresa.checked = false;
    }
});