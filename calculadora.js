$numero = new Array();
$operacao = new Array();
var $j = 0;
var $concatenar = "";
var $apagar = 0;
function clicado(valor){
	if($apagar != 0){
		document.getElementById('tela').value = "";
		$apagar = 0;
		apagar();
	}
var tela = "";
tela =  document.getElementById('tela').value;
if(valor == "3.1416"){
	tela = tela + "π";
}else{
tela = tela + valor;
}
document.getElementById('tela').value = tela; 
$concatenar = $concatenar + valor;
}
function clicadoS(valor){
	$operacao[$j] = valor;
	$numero.push(parseFloat($concatenar));
	$j = $j + 1;
	$concatenar = "";
	tela =  document.getElementById('tela').value;
	tela = tela + " "+valor+" ";
	document.getElementById('tela').value = tela;
}
function calcular(){
 	if($j != 0 && $numero.length > 0 && $concatenar != ""){
		var total = parseFloat(0);
		var tem = false;
		$numero.push(parseFloat($concatenar));
		var z = 0;	
		for (var i = 0; i < $operacao.length; i++) {
				if ($operacao[i] == "/" || $operacao[i] == "x" || $operacao[i] == "**") {
					tem = true;
					var doum = i;
				}
			}	
				var total1 = 0;
						for (var i = 0; i < $numero.length; i++) {
							switch($operacao[z]){
								case "/":
								if(total1 == 0){
								total1 = parseFloat(total1 + $numero[i]);
								}else{
								total1 = total1/$numero[i];
								}
								break;
								case "x":
								if(total1 == 0){
									total1 = parseFloat(total1 + $numero[i]);
								}else{
									total1 = total1*$numero[i];
								}
								break;
								case "**":
								if(total1 == 0){
									total1 = parseFloat(total1 + $numero[i]);
								}else{
									total1 = total1**$numero[i];
								}
								break;
							}
						if ($operacao[z] != "x" && $operacao[z] != "/" && $operacao[z] != "**") {
							total = parseFloat(total + total1);
							total1 = 0;
							z = z + 1;
						}else{
							if (i == z+1) {
								z = z + 1;
							}
						}
						if(($numero.length-1) == i){
							total = parseFloat(total + total1);
						}
					}
					z = 0;
					for (var i = 0; i < $numero.length; i++) {
				switch($operacao[z]){
					case "+":
						total = parseFloat(total + $numero[i]);
					break;
					case "-":
					if(total == 0){
						total = parseFloat(total + $numero[i]);
					}else{
						total = total - $numero[i];
					}
					break;
				}
				if(doum > z){
					if(tem == false){
					if (i == z+2) {
						z = z + 1;
					}
				}else{
					z = z + 1;
				}
			}else{
				if (i == z+1) {
						z = z + 1;
					}
			}
						
		}
		document.getElementById('tela').value = total;
		$apagar = total;
	}else{
		alert('Digite um valor ou uma operacão');
	}
}
function apagar(){
	$numero.length = 0;
	$concatenar = "";
	$operacao.length = 0;
	$j = 0;
	document.getElementById('tela').value="";
}
function ligou(){
	var som = "<audio autoplay='autoplay'>"+
											"<source src='gta.wav' type='audio/wav' />"+
												"</audio>"
	document.getElementById('jose').innerHTML = som;
}
function desligou() {
	document.getElementById('jose').innerHTML = "";
}