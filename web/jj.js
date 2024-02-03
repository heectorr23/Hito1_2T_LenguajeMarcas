function sumaredades() {
    var edad1 = document.getElementById('edad1').value;
    var edad2 = document.getElementById('edad2').value;
    var resultado = parseInt(edad1) + parseInt(edad2);
    document.getElementById('resultado').value = resultado;
}


sumaredades(5+9);
