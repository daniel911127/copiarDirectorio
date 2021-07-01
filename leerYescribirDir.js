 const fs = require('fs');

/*function LeerDirectorio (ruta){
    fs.readdir(ruta,(err,files)=>{
        if (err){
            console.log(err);
        } console.log (files);
    })
}

function escribirDirectorio(rutadestino){
    fs.mkdir(rutadestino, {recursive:true},(err)=>{
        if(err){
            console.log(err);
        }
    })
}
LeerDirectorio('../PRUEBA_ASYNC' )
escribirDirectorio('../copia') */

function LeerDirectorio (ruta){
    fs.readdir(ruta,(err,files)=>{
        if (err){
            console.log(err);
        } console.log (files);
    })
}

function escribirDirectorio(rutadestinodirec,rutafile,rutadestinofile,leerArchivocb,escribirArchivocb){
    fs.mkdir(rutadestinodirec, {recursive:true},(err)=>{
        if(err){
            console.log(err);
        } leerArchivocb(rutafile,rutadestinofile,escribirArchivocb)
    })
}

function leerArchivo(ruta,rutadestino,escribirArchivocb){
    fs.readFile(ruta, 'utf-8',(err,data)=>{
        escribirArchivocb(rutadestino,data)
    })
}
function escribirArchivo (rutadestino,contenido){
    fs.writeFile(rutadestino,contenido,function(err){
        if (err){
            console.log('no he podido escribirlo', err);
        }else{
            console.log('escrito correctamente');
        }
    } )
}
LeerDirectorio('../PRUEBA_ASYNC' )
escribirDirectorio('../copia','./callback.js','./callback2.js',leerArchivo,escribirArchivo)
