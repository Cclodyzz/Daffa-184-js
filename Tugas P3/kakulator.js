let operator = '';

function setOperator(op) {
    operator = op;
}

function hitung() {
    const angkaPertama = parseFloat(document.getElementById('angkaPertama').value);
    const angkaKedua = parseFloat(document.getElementById('angkaKedua').value);
    let hasil;

    if (isNaN(angkaPertama) || isNaN(angkaKedua)) {
        alert('Harap masukkan angka yang valid');
        return;
    }

    switch (operator) {
        case '+':
            hasil = angkaPertama + angkaKedua;
            break;
        case '-':
            hasil = angkaPertama - angkaKedua;
            break;
        default:
            alert('Harap pilih operator (+ atau -)');
            return;
    }

    document.getElementById('hasil').value = hasil;
}
