//importación de la librería file system
const { crearArchivo }= require('./helpers/multiplicar');
const { number, boolean } = require('yargs');
require('colors'); //importación del paquete colors


const argv = require('./config/yargs');

//limpia la consol
console.clear();


//En la consola poner node app.js --base=numero


//quiero imprimir los procesos de manejo de argumentos en la consola

//console.log(process.argv);


//si yo defino una bandera sin valor, lo crea por defecto como un booleano
crearArchivo( argv.b, argv.l, argv.h )
    .then(msg => console.log(msg.rainbow, ' creado correctamente'))
    .catch(error => console.log(error) );
  




/* salida = '';
for(let i=1; i<=10; i++)
{
    salida+=`${base} x ${i} = ${base*i}\n`
} */


/* fs.writeFile(`tabla-${base}.txt`,salida, (err) =>{
    if (err) throw err;

    console.log('Archivo creado');
}); */
/* console.log( salida );
//utilizamos el writeFileSync
fs.writeFileSync(`tabla-${base}.txt`,salida);
 */

//esto se va a ejecutar de manera asíncrona. Es decir,
//se va tomando cada linea de código y se va ejecutando
//si la linea de escribir el text-file presenta un error
//esta ultima linea no se ejecuta.


//quiero imprimir esta tabla de multiplicar y guardarla en un archivo
//lo primero que tengo que hacer es importar el file system de javascript

