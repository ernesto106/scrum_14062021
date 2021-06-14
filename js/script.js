function CalcularPrecio(){
	var zona = document.getElementById("zona").value;
	var precio;
	var suma = 0;
	var total = 0;


	if(document.getElementById("pequeño").checked == true){

		precio = zona * 50;

		

	}else if(document.getElementById("mediano").checked == true){

		precio = zona * 70;

		

	}else if(document.getElementById("grande").checked == true){

		precio = zona * 100;

	}else{
		alert("Debe escoger el tamaño de su vivienda");
		precio = 0;
	}



	if (document.getElementById("calefaccion").checked == true){

		suma = suma + 3;

	}
	if(document.getElementById("aire").checked == true){

		suma = suma + 3;

	}
	if(document.getElementById("bañera").checked == true){

		suma = suma + 3;

	}

	suma = (suma/100) + 1;

	total = precio * suma;



	document.getElementById("salida").innerText = total+"€";
}
function NoHaceNada(){
	alert("Este boton aun no hace nada, lo implementaremos mas adelante.")
	location.reload();
}