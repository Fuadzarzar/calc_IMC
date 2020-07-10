/* Desclarar as variáveis e seus respectivos valores. */

const name = 'Fuad';
const height = 1.73;
const weight = 91.5;

/* Calcular o IMC */

const cal_imc = weight / (height * height);

/* Condicionais que verificam se a pessoa está acima do peso. */

if (cal_imc >= 30) {
	console.log(`${name} você está acima do peso.`);
}
if (cal_imc < 29.9) {
	console.log(`${name} você não está acima do peso.`);
}
