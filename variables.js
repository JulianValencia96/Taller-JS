
//Creacion de encabezado

const h1 = document.createElement("h1");
h1.setAttribute("style","color:blue;");
document.body.appendChild(h1);
h1.innerHTML = "Revisar ejecucion en Consola";



let a=2, b=3, c=8;

if(a>b&&a>c){
    console.log("La variable 'a' = "+a+" tiene mayor valor");
}else if(b>a&&b>c){
    console.log("La variable 'b' = "+b+" tiene mayor valor");
}else{
    console.log("La variable 'c' = "+c+" tiene mayor valor");
}