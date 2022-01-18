//part 1
var names = ["Sofia","David","Juan"];
console.log(names);

//part 2
names.shift(); //pasa Sofia y es eliminada de la fila
names.push("Sara","Agustin")
console.log(names);

//part 3
names.shift();
names.unshift("David","Renata");
names.push("Elena");
console.log(names);

console.log("--------------------------------------------------------------------");

//Exercise #2
    var i=0;
    while(i<=5){
    console.log("*".repeat(i)+" ");
    i++;
 }

console.log("--------------------------------------------------------------------");

 //Exercise #3
    var xValue=5;
 while(xValue!=0){
     console.log(xValue);
     xValue-=0.5;
 }

console.log("--------------------------------------------------------------------");

var i=0;
while(i<100){
    i++;
    if(i%2==1){
        console.log(i);
    }
}

console.log("--------------------------------------------------------------------");

            var n=6; //numero n
var o=1;

while(0<n){
    console.log("["+o+"]");
    o++;
    n--;
}
//Second option
            var n=6; //numero n
var o=0
var arreglo=[];
while(o<n){
    arreglo[o]=o+1;
    o++;
}
console.log(arreglo);

console.log("--------------------------------------------------------------------");

            var n=5;//valor de n
var suma=0;
var contador=1;

while(contador<=n){
    console.log(contador);
    suma=suma+contador;
    contador++;
}
console.log("la suma total es: "+suma);

console.log("--------------------------------------------------------------------");
