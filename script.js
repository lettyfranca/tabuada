/**
 * Tabuada
 * @author Letícia França
 */

for(let i = 0; i <= 10; i++){
    document.write("<p>Tabuada do " + i + "</p>");
    for(let j = 0; j <= 10; j++){
        document.write(i + " x " + j + " = " + (i * j) + "<br>");
    }
}