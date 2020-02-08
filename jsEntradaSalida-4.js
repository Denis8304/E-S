/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	text = prompt();
	document.getElementById("elNombre").value = text;

	/*Optimo
	document.getElementById("elNombre").value = prompt();
	*/
}

