$(document).ready(init)

//variable para la interfaz grafica/strings de la calculadora
var valor="";
//variable para pasarle los valores al array
var valor1="";
//array donde van a ir los valores de la calculadora
var todosValores=[];
//variable para marcar cuando es valido y cuando no poder apretar los numeros
var numCan=true;

var puntoOk=true;

var valHist=""

function init(){
    $("#historial").hide()
    $("#cerrar").hide()
    $("#show").click(esconder)
    $("#cerrar").click(mostrar)
    //numero 1(boton y click)
    $("#btn1").click(button1)
    $(document).keydown(function(e){
        if(e.which==49){
            button1()}})
    //numero 2(boton y click)
    $("#btn2").click(button2)
    $(document).keydown(function(e){
        if(e.which==50){
            button2()}})
    //numero 3(boton y click)
    $("#btn3").click(button3)
    $(document).keydown(function(e){
        if(e.which==51){
            button3()}})
    //numero 4(boton y click)
    $("#btn4").click(button4)
    $(document).keydown(function(e){
        if(e.which==52){
            button4()}})
    //numero 5(boton y click)
    $("#btn5").click(button5)
    $(document).keydown(function(e){
        if(e.which==53){
            button5()}})
    //numero 6(boton y click)
    $("#btn6").click(button6)
    $(document).keydown(function(e){
        if(e.which==54){
            button6()}})
    //numero 7(boton y click)
    $("#btn7").click(button7)
    $(document).keydown(function(e){
        if(e.which==55){
            button7()}})
    //numero 8(boton y click)
    $("#btn8").click(button8)
    $(document).keydown(function(e){
        if(e.which==56){
            button8()}})
    //numero 9(boton y click)
    $("#btn9").click(button9)
    $(document).keydown(function(e){
        if(e.which==57){
            button9()}})
    //numero 0(boton y click)
    $("#btn0").click(button0)
    $(document).keydown(function(e){
        if(e.which==48){
            button0()}})
    //simbolo +(boton y click)
    $("#btnMas").click(buttonPlus)
    $(document).keydown(function(e){
        if(e.which==37){
            buttonPlus()}})
    //simbolo -(boton y click)
    $("#btn-").click(buttonMenos)
    $(document).keydown(function(e){
        if(e.which==39){
            buttonMenos()}})
    //simbolo /(boton y click)
    $("#btnDiv").click(buttonDiv)
    $(document).keydown(function(e){
        if(e.which==40){
            buttonDiv()}})
    //simbolo x(boton y click)
    $("#btnPor").click(buttonX)
    $(document).keydown(function(e){
        if(e.which==38){
            buttonX()}})
    //simbolo =(boton y click)
    $("#btnRes").click(resultado)
    $(document).keydown(function(e){
        if(e.which==13){
            resultado()}})
    //borrar(boton y click)
    $("#btnC").click(del)
    $(document).keydown(function(e){
        if(e.which==5){
            del()}})
    //punto(click)
    $("#btnPunto").click(decimal)
    
    

}


function actualizar(){
//actualizar interfaz grafica de la calculadora(poner los numeritos)

$("#texto").html(valor)

}

function signoDou(sign){
//agregar el simbolo y pushear los valores y el simbolo a el array
todosValores.push(Number(valor1))
todosValores.push(sign)
valor+=sign
valor1=""

actualizar()

}
function resultado(){

//pushear el ultimo valor antes del = al array
todosValores.push(Number(valor1))

historial()
sort()
}

function sort(){
//funcion para hacer los calculos

    let i=0;
    let res=0
//metodo para ordenar el array y hacer las multiplicaciones y divisones primero
    while(i<todosValores.length){
    
    if(todosValores[i+1]=="x"||todosValores[i+1]=="/"){
    let val1=todosValores[i]
    let simb=todosValores[i+1]
    let val2=todosValores[i+2]
    if(simb=="x"){
    res=val1*val2
    }
    else if(simb=="/"){
    res=val1/val2
    }
    todosValores[i]=res
    todosValores.splice(i+1,2)
    
    }
    if(todosValores[i+1]!="x"&&todosValores[i+1]!="/"){
    i=i+2
}
    }


let i2=0;
let res2=0;
res2=todosValores[0]
//metodo para hacer sumas y restas luego de las multiplicaciones y divisiones
if(todosValores.length!=1){
while(i2<todosValores.length){
        if(todosValores[i2+1]=="+"){ 
        res2+=todosValores[i2+2]
        }
        if(todosValores[i2+1]=="-"){
        res2 = res2 - todosValores[i2+2]
        }
        
        i2=i2+2
}
}
else if(todosValores.length==1){
    res2=todosValores[0].toFixed(5)
}
historial(res2)
$("#texto").html(res2)

seguirCalculando(res2)

}

function seguirCalculando(res){
//funcion para seguir haciendo cuentas luego del =
valor1=String(res)
valor=valor1
todosValores=[]
numCan=false;


}
function historial(res){
let memoryHistorial=$("#histTxt").val()
if(valHist==""){
for(i=0;i<todosValores.length;i++){
    valHist+=todosValores[i]
    }
}
    if(res!=undefined){
    valHist+="="+res;
    $("#histTxt").html("<br>"+valHist+memoryHistorial)
    $("#histTxt").val("<br>"+valHist+memoryHistorial)
    valHist=""
}

}
function esconder(){
    $("#historial").show()
    $("#cerrar").show()
    $("#show").hide()
    
}
function mostrar(){
    $("#historial").hide()
    $("#show").show()
    $("#cerrar").hide()
}