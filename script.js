//let nombreUsuario = prompt ("Ingrese Su Nombre");
//alert ("Bienvenido! " + nombreUsuario)
let glUno = 0;
let gvUno = 0;
let glDos = 0;
let gvDos = 0;

let ptsArabia = 0;
let ptsArgentina = 0;
let ptsPolonia = 0;
let ptsMexico = 0;


//function start() {
let localUno = prompt ("Goles de Argentina contra Arabia? Valores de 0 a 9");

switch (localUno) {
    case "0":
        glUno = 0;
        alert("El numero elegido fue " + glUno);
        break;

    case "1":
        glUno = 1;
        alert("El numero elegido fue " + glUno);
        break;

    case "2":
        glUno = 2;
        alert("El numero elegido fue " + glUno);
        break;

    case "3":
        glUno = 3;
        alert("El numero elegido fue " + glUno);
        break;

    case "4":
        glUno = 4;
        alert("El numero elegido fue " + glUno);
        break;

    case "5":
        glUno = 5;
        alert("El numero elegido fue " + glUno);
        break;

    case "6":
        glUno = 6;
        alert("El numero elegido fue " + glUno);
        break;

    case "7":
        glUno = 7;
        alert("El numero elegido fue " + glUno);
        break;

    case "8":
        glUno = 8;
        alert("El numero elegido fue " + glUno);
        break;

    case "9":
        glUno = 9;
        alert("El numero elegido fue " + glUno);
        break;

    default:
        alert ("El numero seleccionado no se encuentra dentro de los parametros");
        localUno = prompt ("Goles de Argentina? Valores de 0 a 9");
        break;
    }

    let visitaUno = prompt("Goles de Arabia contra Argentina? Valores de 0 a 9");

    switch (visitaUno) {
        case "0":
            gvUno = 0;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "1":
            gvUno = 1;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "2":
            gvUno = 2;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "3":
            gvUno = 3;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "4":
            gvUno = 4;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "5":
            gvUno = 5;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "6":
            gvUno = 6;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "7":
            gvUno = 7;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "8":
            gvUno = 8;
            alert("El numero elegido fue " + gvUno);
            break;
    
        case "9":
            gvUno = 9;
            alert("El numero elegido fue " + gvUno);
            break;
    
        default:
            alert ("El numero seleccionado no se encuentra dentro de los parametros");
            visitaUno = prompt("Goles de Arabia contra Argentina? Valores de 0 a 9");
            break;
        }

    if (glUno < gvUno) {
        ptsArabia =+ 3;
        alert ("Ganó Arabia!!");
    }

    if (glUno === gvUno) {
        ptsArabia =+ 1;
        ptsArgentina =+ 1;
        alert ("Empate!!");
    }
    
    if (glUno > gvUno) {
        ptsArgentina =+ 3;
        alert ("Ganó Argentina!!");
    }

    //Partido 2  Mexico Polonia

    let localDos = prompt ("Goles de Mexico contra Polonia? Valores de 0 a 9");

    switch (localDos) {
        case "0":
            glDos = 0;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "1":
            glDos = 1;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "2":
            glDos = 2;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "3":
            glDos = 3;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "4":
            glDos = 4;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "5":
            glDos = 5;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "6":
            glDos = 6;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "7":
            glDos = 7;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "8":
            glDos = 8;
            alert("El numero elegido fue " + glDos);
            break;
    
        case "9":
            glDos = 9;
            alert("El numero elegido fue " + glDos);
            break;
    
        default:
            alert ("El numero seleccionado no se encuentra dentro de los parametros");
            localDos = prompt ("Goles de Mexico contra Polonia? Valores de 0 a 9");
            break;
        }
    
        let visitaDos = prompt("Goles de Polonia contra Mexico? Valores de 0 a 9");
    
        switch (visitaDos) {
            case "0":
                gvDos = 0;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "1":
                gvDos = 1;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "2":
                gvDos = 2;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "3":
                gvDos = 3;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "4":
                gvDos = 4;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "5":
                gvDos = 5;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "6":
                gvDos = 6;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "7":
                gvDos = 7;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "8":
                gvDos = 8;
                alert("El numero elegido fue " + gvDos);
                break;
        
            case "9":
                gvDos = 9;
                alert("El numero elegido fue " + gvDos);
                break;
        
            default:
                alert ("El numero seleccionado no se encuentra dentro de los parametros");
                visitaDos = prompt("Goles de Polonia contra Mexico? Valores de 0 a 9");
                break;
            }
    
        if (glDos < gvDos) {
            ptsPolonia =+ 3;
            alert ("Ganó Polonia!!");
        }
    
        if (glDos === gvDos) {
            ptsMexico =+ 1;
            ptsPolonia =+ 1;
            alert ("Empate!!");
        }
        
        if (glDos > gvDos) {
            ptsMexico =+ 3;
            alert ("Ganó Mexico!!");
        }

        /*let tabla = alert("Puntos de Argentina: " + ptsArgentina +  "\n" + "Puntos de Arabia: " + ptsArabia + "\n" + "Puntos de Mexico: " + ptsMexico + "\n" + "Puntos de Polonia: " + ptsPolonia);*/
        var posicion = [ptsArabia, ptsArgentina, ptsMexico, ptsPolonia];

        posicion.sort(function(a, b){return b - a});

        alert (posicion);
        /*
        tenes 
        let primero
        let segundo
        let tercero
        let cuarto

        primero > a todos
        segundo > a tercero y cuarto
        tercero > cuarto
        cuarto < a todos*/


//}