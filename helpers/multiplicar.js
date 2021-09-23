const fs = require("fs"); 
const colors = require('colors');
//función para crear tabla de multiplicar y escribir un archivo texto
//asinc lo que me crea es
const crearArchivo = async( base =5, listar = false, h = 10 )=> {


    try{

            let salida = '';
            let consola =''
            

            for(let i=1;i<=h;i++){
        
                salida+=`${base} ${'x'} ${i} = ${base*i}\n`;
                consola+=`${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`
        
            }

            if (listar){

                console.log('=================================='.green);
                console.log('           tabla del: ',colors.blue(base));
                console.log('=================================='.green);

                console.log(consola);
            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            
            return `tabla-${base}.txt`;

    }catch(error)
    {
        throw error;
    }

}

//module.exports me permite exportar el archivo para que otro script pueda importarlo
module.exports = {
    crearArchivo
}