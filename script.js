function calculatrice(nombre1, nombre2, operateur) {
    switch (operateur) {
        case '+':
            return nombre1 + nombre2;
        case '-':
            return nombre1 - nombre2;
        case '*':
            return nombre1 * nombre2;
        case '/':
            if (nombre2 !== 0) {
                return nombre1 / nombre2;
            } else {
                return 'Erreur: Division par zéro';
            }
        default:
            return 'Erreur: Opérateur non valide';
    }
}

function calculer() {
    const nombre1 = parseFloat(document.getElementById('nombre1').value);
    const operateur = document.getElementById('operation').value;
    const nombre2 = parseFloat(document.getElementById('nombre2').value);
    const resultat = calculatrice(nombre1, nombre2, operateur);
    document.getElementById('resultat').value = resultat;

    if(isNaN(nombre1) || isNaN(nombre2)) {
        document.getElementById('resultat').value = 'Erreur: met un chiffre chef';
    }
}

function reinitialiser() {
    document.getElementById('nombre1').value = '';
    document.getElementById('operation').value = '+';
    document.getElementById('nombre2').value = '';
    document.getElementById('resultat').value = '';
}