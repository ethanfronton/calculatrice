function calculer() {
    const nombre1 = parseFloat(document.getElementById('nombre1').value);
    const operateur = document.getElementById('operateur').value;
    const nombre2 = parseFloat(document.getElementById('nombre2').value);
    const resultat = calculatrice(nombre1, nombre2, operateur);
    document.getElementById('resultat').value = resultat;
}