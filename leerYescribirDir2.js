const fs = require('fs');

function LeerDirectorio (ruta){
    fs.readdir(ruta,(err,files)=>{
        if (err){
            console.log(err);
        } else {
            console.log (files);
            
        }
    })
}

function escribirDirectorio(rutadestino,ruta,leerDirectoriocb){
    fs.mkdir(rutadestino, {recursive:true},(err)=>{
        if(err){
            console.log(err);
        } leerDirectoriocb(ruta);
    })
}
//LeerDirectorio('../PRUEBA_ASYNC' )
escribirDirectorio('../copia','../PRUEBA_ASYNC',LeerDirectorio ) 