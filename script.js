let ptsArabia = 0;
let ptsArgentina = 0;
let ptsPolonia = 0;
let ptsMexico = 0;
let primerLugar = 0;

const puntosArg = (puntosGanados) => {
    return ptsArgentina + puntosGanados
}
const puntosAra = (puntosGanados) => {
    return ptsArabia + puntosGanados
}
const puntosMex = (puntosGanados) => {
    return ptsMexico + puntosGanados
}
const puntosPol = (puntosGanados) => {
    return ptsPolonia + puntosGanados
}
// Log-in
let nombreUsuario = prompt ("Ingrese Su Nombre por favor");
let password = prompt ("Ingrese la Contraseña (1446)");
while (password != "1446") {
    alert ("Error! Vuelva a intentarlo");
    password = prompt ("Ingrese la Contraseña (1446)");
}
alert ("Bienvenido " +nombreUsuario+" Al sistema de fixture qatar 2022!!");

alert ("Juega conmigo: Vamos a calcular la posicion al finalizar la fase de grupos de cada seleccion eligiendo cuantos goles hace cada una de ellas!!!" + "\n" + "Empecemos!!"); 

// Tabla de Posiciones

function tablaPosiciones(){
    alert("tabla de posiciones\nArgentina: "+ptsArgentina+"\nArabia saudita: "+ptsArabia+"\nMexico: "+ptsMexico+"\nPolonia: "+ptsPolonia);
}

//Argentina vs Arabia

let localUno = parseInt(prompt ("Argentina vs Arabia Saudita. Goles de argentina: (solo coloque un numero)"));
alert("Los goles elegidos fueron "+localUno);

let visitaUno = parseInt(prompt("Argentina vs Arabia Saudita. Goles de Arabia Saudita: (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaUno);

    if(localUno>visitaUno){
        alert("Ganador Argentina. Suma 3pts!.")
        ptsArgentina =+ puntosArg(3);
    } else if (localUno<visitaUno){
        alert("Ganador Arabia. Suma 3pts!.")
        ptsArabia =+ puntosAra(3);
    } else if (localUno==visitaUno){
        alert("Empate. Suma 1pt cada seleccion")
        ptsArabia =+ puntosAra(1);
        ptsArgentina =+ puntosArg(1);
    } else{
        alert("los numeros ingresados no fueron correctos")
    }

tablaPosiciones()

// Polonia Vs Mexico

let localDos = parseInt(prompt("Mexico vs Polonia. Goles de Mexico (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+localDos);

let visitaDos = parseInt(prompt("Mexico vs Polonia. Goles de Polonia (Solo coloque un numero)"));
alert("Los goles elegidos fueron "+visitaDos)

    if(localDos>visitaDos){
        alert("Ganador Mexico. Suma 3pts!.")
        ptsMexico =+ puntosMex(3);
    } else if (localDos<visitaDos){
        alert("Ganador Polonia. Suma 3pts!.")
        ptsPolonia =+ puntosPol(3);
    } else if (localDos==visitaDos){
        alert("Empate. Suma 1pt cada seleccion")
        ptsMexico =+ puntosMex(1);
        ptsPolonia =+ puntosPol(1);
    } else{
        alert("los numeros ingresados no fueron correctos")
    }

tablaPosiciones()

// Argentina vs Mexico

    let localTres = parseInt(prompt("Argentina vs Mexico. Goles de Argentina (Solo coloque un numero)"));
    alert("Los goles elegidos fueron "+localTres);
    
    let visitaTres = parseInt(prompt("Argentina vs Mexico. Goles de Mexico (Solo coloque un numero)"));
    alert("Los goles elegidos fueron "+visitaTres)
    
        if(localTres>visitaTres){
            alert("Ganador Argentina. Suma 3pts!.")
            ptsArgentina =+ puntosArg(3);
        } else if (localTres<visitaTres){
            alert("Ganador Mexico. Suma 3pts!.")
            ptsMexico =+ puntosMex(3);
        } else if (localTres==visitaTres){
            alert("Empate. Suma 1pt cada seleccion")
            ptsArgentina =+ puntosArg(1);
            ptsMexico =+ puntosMex(1);
        } else{
            alert("los numeros ingresados no fueron correctos")
        }

tablaPosiciones()   

// Polonia vs Arabia

        let localCuatro = parseInt(prompt("Polonia vs Arabia Saudita. Goles de Polonia (Solo coloque un numero)"));
        alert("Los goles elegidos fueron "+localCuatro);
        
        let visitaCuatro = parseInt(prompt("Polonia vs Arabia Saudita. Goles de Arabia Saudita (Solo coloque un numero)"));
        alert("Los goles elegidos fueron "+visitaCuatro);
        
            if(localCuatro>visitaCuatro){
                alert("Ganador Polonia. Suma 3pts!.");
                ptsPolonia =+ puntosPol(3);
            } else if (localCuatro<visitaCuatro){
                alert("Ganador Arabia Saudita. Suma 3pts!.");
                ptsArabia =+ puntosAra(3);
            } else if (localCuatro==visitaCuatro){
                alert("Empate. Suma 1pt cada seleccion");
                ptsPolonia =+ puntosPol(1);
                ptsArabia =+ puntosAra(1);
            } else{
                alert("Los numeros ingresados no fueron correctos");
            }

tablaPosiciones()

//Primer Lugar

    if ((ptsArabia > ptsArgentina) && (ptsArabia > ptsMexico) && (ptsArabia > ptsPolonia)){
        alert("Primer Lugar Arabia Saudita con "+ptsArabia+" puntos en total");
        primerLugar = "Arabia Saudita";
    } else if ((ptsArgentina > ptsArabia) && (ptsArgentina > ptsMexico) && (ptsArgentina > ptsPolonia)){
        alert("Primer lugar Argentina con "+ptsArgentina+" puntos en total");
        primerLugar = "Argentina";
    } else if ((ptsMexico > ptsArgentina) && (ptsMexico > ptsArabia) && (ptsMexico > ptsPolonia)){
        alert("Primer Lugar Mexico con "+ptsMexico+" puntos en total");
        primerLugar = "Mexico";
    } else if ((ptsPolonia > ptsArgentina) && (ptsPolonia > ptsMexico) && (ptsPolonia > ptsArabia)){
        alert("Primer Lugar Polonia con "+ptsPolonia+" puntos en total");
        primerLugar = "Polonia";
    } else {
        alert("No pudimos calcular los puntos, Lo siento algo salio mal");
    }
    
    //Segundo Lugar

    let segundoLugar = prompt("Escriba solo en minusculas y sin acentos.\nQuien crees que deberia ser merecedor del segundo lugar?\n(0 para cancelar)");

    /*while ((segundoLugar != "argentina") || (segundoLugar != "arabia") || (segundoLugar != "polonia") || (segundoLugar != "mexico") || (segundoLugar != "0")) {
        alert ("Hubo un error al ingresar el segundo lugar, vuelva a intentarlo.");
        segundoLugar = prompt("Escriba solo en minusculas y sin acentos.\nQuien crees que deberia ser merecedor del segundo lugar?\n(0 para cancelar)");
    }*/
        if (segundoLugar == "argentina"){
            alert("Segundo lugar a pedido del publico es Argentina!!");
            segundoLugar = "Argentina";
        }
        else if ((segundoLugar == "arabia") || (segundoLugar == "arabia saudita")){
            alert("Segundo Lugar a pedido del publico es Arabia saudita!!");
            segundoLugar = "Arabia Saudita";
        }
        else if (segundoLugar == "polonia"){
            alert("Segundo lugar a pedido del publico es Polonia!!");
            segundoLugar = "Polonia";
        }
        else if ((segundoLugar == "mexico") || (segundoLugar == "méxico")){
            alert("Segundo Lugar a pedido del publico es Mexico!!!");
            segundoLugar = "Mexico";
        }
        else {
            alert ("No se ha podido elegir un segundo lugar.")
        }

alert("Felicitaciones los ganadores son "+primerLugar+" en primer lugar y "+segundoLugar+" En segundo lugar");
