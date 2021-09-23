const fs = require('fs');

/* 
const crearArchivo = (base = 5)=>{

    console.log("==========================");
    console.log(`       Base ${base}       `);
    console.log("==========================");

    let salida ="";

    for(let i = 1;i<=10;i++)
    {
        salida +=` ${base} x ${i} = ${base*i}\n`;
    }

    fs.writeFileSync(`tabla-${base}`,salida)

} */



//las funciones de flecha son mejores
//función que sirve como promesa
const crearArchivo = (base = 5) =>{

    //me imprime en consola la base de la tabla de la cual yo quiero multiplicar
    
    return new Promise((resolve,reject) =>{

        console.log("===============");
        console.log(` base ${base}  `);
        console.log("===============");

        let salida = "";

        for(let i = 1; i<=10; i++)
        {
            salida+=` ${base} x ${i} = ${base*i}\n`;
        }
        
        try{
            fs.writeFileSync(`Tabla-${base}.txt`, salida);
            resolve(`Tabla-${base}.txt`);

        }catch(error){

            
        }

        
        resolve(`Tabla-${base}.txt`);
        //:;

    })    
}



crearArchivo(3).then(msg => {
    console.log(msg);
    console.log('Archivo creado correctamente');
})