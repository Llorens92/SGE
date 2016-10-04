function ValidarNIF() {
    var nums = document.getElementsByTagName("input")[0].value.substring(0, 7);
    if (isNaN(nums)) {
        alert("Los 8 primeros caracteres del NIF deben ser números.");
    }
}


