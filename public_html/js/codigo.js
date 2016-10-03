function ValidarNIF() {    
    document.getElementsByTagName("form").setAttribute("action", "");
    var nif = document.querySelectorAll('input[name$="NIF"]');
    var nums = nif.substring(0, 7);
    if (isNAN(nums)) {
        document.getElementsByTagName("form")[0].setAttribute("action", "");
        alert("Los 8 primeros caracteres del NIF deben ser números.");
    }
}


