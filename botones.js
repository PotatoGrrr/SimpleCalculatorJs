var signxd=""
//codigo de los botones de la calculadora
function button0(){
    if(numCan==true){
    valor+="0"
    valor1+="0"}


actualizar()
}
function button1(){
    if(numCan==true){
    valor+="1"
    valor1+="1"}
    
actualizar()
}
function button2(){
    if(numCan==true){
    valor+="2"
    valor1+="2"}

actualizar()    
}
function button3(){
    if(numCan==true){
    valor+="3"
    valor1+="3"}

actualizar()    
}
function button4(){
    if(numCan==true){
    valor+="4"
    valor1+="4"}

actualizar()   
}
function button5(){
    if(numCan==true){
    valor+="5"
    valor1+="5"}

actualizar()    
}
function button6(){
    if(numCan==true){
    valor+="6"
    valor1+="6"}

actualizar()   
}

function button7(){
    if(numCan==true){
    valor+="7"
    valor1+="7"}

actualizar()    
}
function button8(){
    if(numCan==true){
    valor+="8"
    valor1+="8"}

actualizar()   
}
function button9(){
    if(numCan==true){
    valor+="9"
    valor1+="9"}

actualizar()   
}
function decimal(){
    if(numCan==true){
        //para verificar que haya algun valor antes de poner un punto
        if(valor!=""){
        //para verificar que no haya otro punto en el valor
        if(puntoOk==true){
        //para que no se puedan poner varios puntos seguidos
        if(valor.lastIndexOf(".")!=valor.length-1){
        
        valor+="."
        valor1+="."
    }
    }
    }
    }
    //metodo para verificar que solo haya un punto por valor
    for(i=0;i<valor.length;i++){
        if(valor.indexOf(".")==i){
            puntoOk=false;
        }
       
    }
    actualizar()
}

function buttonMenos(){
numCan=true
puntoOk=true
//los dos if son para solucionar bugs(que no se puedan poner 2 signos seguidos ni uno al principio sin numero)
if(valor!=""){
if(valor.lastIndexOf("+")!=valor.length-1&&valor.lastIndexOf("-")!=valor.length-1&&valor.lastIndexOf("x")!=valor.length-1&&valor.lastIndexOf("/")!=valor.length-1){
signxd="-"
signoDou(signxd)
actualizar()
}
}
}
function buttonPlus(){
numCan=true
puntoOk=true
//los dos if son para solucionar bugs(que no se puedan poner 2 signos seguidos ni uno al principio sin numero)
if(valor!=""){
if(valor.lastIndexOf("+")!=valor.length-1&&valor.lastIndexOf("-")!=valor.length-1&&valor.lastIndexOf("x")!=valor.length-1&&valor.lastIndexOf("/")!=valor.length-1){
signxd="+"
signoDou(signxd)
actualizar()}
}
}
function buttonDiv(){
numCan=true
puntoOk=true
//los dos if son para solucionar bugs(que no se puedan poner 2 signos seguidos ni uno al principio sin numero)
if(valor!=""){
if(valor.lastIndexOf("+")!=valor.length-1&&valor.lastIndexOf("-")!=valor.length-1&&valor.lastIndexOf("x")!=valor.length-1&&valor.lastIndexOf("/")!=valor.length-1){
signxd="/"
signoDou(signxd)
actualizar()
}
}
}
function buttonX(){
numCan=true
puntoOk=true
//los dos if son para solucionar bugs(que no se puedan poner 2 signos seguidos ni uno al principio sin numero)
if(valor!=""){
if(valor.lastIndexOf("+")!=valor.length-1&&valor.lastIndexOf("-")!=valor.length-1&&valor.lastIndexOf("x")!=valor.length-1&&valor.lastIndexOf("/")!=valor.length-1){
signxd="x"
signoDou(signxd)
actualizar()
}
}
}
function del(){
//boton borrar
    valor=""
    valor1=""
    signxd=""
    todosValores=[]
    numCan=true
    $("#texto").html("")
}

