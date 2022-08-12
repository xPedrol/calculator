let $numero = [];
let $operacao = [];
let $ligada = false;
let $concatenar = "";
let $apagar = false;

function clicado(valor) {
    if ($apagar === true) {
        $apagar = false;
        apagar();
    }
    let tela = "";
    tela = document.getElementById('tela').value;
    if (valor === "3.1416") {
        tela = tela + "π";
    } else {
        tela = tela + valor;
    }
    document.getElementById('tela').value = tela;
    $concatenar = $concatenar + valor;
}

function clicadoS(operador) {
    $operacao.push(operador);
    $numero.push(parseFloat($concatenar));
    $concatenar = "";
    tela = document.getElementById('tela').value + " " + operador + " ";
    document.getElementById('tela').value = tela;
}

function calcular() {
    let i;
    let total = parseFloat(0);
    let armazena = [];
    let parcial = parseFloat(0);
    let tem = false;
    if((!Array.isArray($numero) && $numero) || (Array.isArray($numero) && $numero.length > 0)) {
        $numero.push(parseFloat($concatenar));
        console.log('numero = ' + $numero);
        let z = 0;
        for (i = 0; i < $operacao.length; i++) {
            if ($operacao[i] === "x" || $operacao[i] === "/" || $operacao[i] === "**") {
                tem = true;
            }
        }
        i = 0;
        while (i < $numero.length) {
            switch ($operacao[z]) {
                case "/":
                    if (parcial === 0) {
                        parcial = parseFloat(parcial + $numero[i]);
                    } else {
                        parcial = parcial / $numero[i];
                    }
                    break;
                case "x":
                    if (parcial === 0) {
                        parcial = parseFloat(parcial + $numero[i]);
                    } else {
                        parcial = parcial * $numero[i];
                    }
                    break;
                case "**":
                    if (parcial === 0) {
                        parcial = parseFloat(parcial + $numero[i]);
                    } else {
                        parcial = parcial ** $numero[i];
                    }
                    break;
            }
            if ($operacao[z] !== "x" && $operacao[z] !== "/" && $operacao[z] !== "**") {
                let k = z;
                if (parcial === 0) {
                    armazena.push($numero[i]);
                    $numero.splice(i, 1);
                } else {
                    armazena.push(parcial);
                }
                parcial = 0;
                z = z + 1;
            } else {
                if ($operacao[z] === "x" || $operacao[z] === "/" || $operacao[z] === "**") {
                    if (parcial === $numero[i]) {
                    } else {
                        z = z + 1;
                    }
                    i = i + 1;
                }
            }
            if (tem === true) {
                if ($numero.length === i) { //Erro nesse procedimento
                    if (parcial === 0) {
                        armazena.push($numero[$numero.length - 1]);
                    } else {
                        armazena.push(parcial);
                    }
                }
            }
        }
        tem = false;
        console.log(armazena);
        console.log($operacao);
        for (i = 0; i < $operacao.length; i++) {
            if ($operacao[i] === "+" || $operacao[i] === "-") {
                tem = true;
            }
        }
        for (i = 0; i < $operacao.length; i++) {
            for (let j = 0; j < $operacao.length; j++) {
                if ($operacao[j] === "x" || $operacao[j] === "/" || $operacao[j] === "**") {
                    $operacao.splice(j, 1);
                }
            }
        }
        z = 0;
        for (i = 0; i < armazena.length; i++) {
            switch ($operacao[z]) {
                case "+":
                    total = total + armazena[i];
                    break;
                case "-":
                    if (total === 0) {
                        total = total + armazena[i];
                    } else {
                        total = total - armazena[i];
                    }
                    break;
            }
            if (i === z + 1) {
                z = z + 1;
            }
        }
        if (tem === false) {
            total = armazena[0];
        }
        document.getElementById('tela').value = total;
        $apagar = true;
        console.log('total = ' + total);
    }
}

function apagar() {
    $numero.length = 0;
    $operacao.length = 0;
    $concatenar = "";
    document.getElementById('tela').value = "";
}