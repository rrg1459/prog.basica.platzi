var d      = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

var lineas = 30;
var yIni, xFin;
var colorcito = "black";


for(l = 0; l < lineas; l++)
{
  yf  = yi  =  10 *  l;
  xi  = xf  =  10 * (l +  1);
  xf2 = xi2 = 290 - (l * 10);
  dibujarLinea(colorcito,  xi,  0, 300,  yf);
  dibujarLinea(colorcito,   0, yi,  xf, 300);
  dibujarLinea(colorcito, 300, yi, xf2, 300);
  dibujarLinea(colorcito, xi2,  0,   0,  yf);
  console.log ("linea " + l);

}

dibujarLinea (colorcito,   1,   1,   1, 299);
dibujarLinea (colorcito,   1, 299, 299, 299);
dibujarLinea (colorcito,   1, 299, 299, 299);

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xInicial,yInicial);
	lienzo.lineTo(xFinal,yFinal);
	lienzo.stroke();
	lienzo.closePath();
}

