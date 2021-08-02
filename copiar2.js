const fs = require ('fs')

function copiarDirectorio(rutaOrigen,rutaDestino){
    fs.readdir(rutaOrigen,(err,files)=>{
        if (err){
            console.log(err);
        } else{
           // console.log (files);
            for(i=0;i<files.length;i++){
                //console.log(rutaOrigen + '\\' + files[i])
                //console.log(rutaDestino + '\\' + files[i])
                copiarArchivo(rutaOrigen+'\\'+files[i],rutaDestino+'\\'+files[i])
            }
            console.log('directorio copiado');
        }
    })
}

function crearDirectorio(rutadestino){
    fs.mkdir(rutadestino, {recursive:true},(err)=>{
        if(err){
            console.log(err);
        } 
    })
}
function copiarArchivo(rutaOrigen, rutaDestino){
    fs.readFile(rutaOrigen,(err,data)=>{
        if (err){
            console.log('error leyendo: ',err);
        }else{
            escribirArchivo(rutaDestino,data)
        }
    })

}

function escribirArchivo(rutaArchivo,contenido){
    fs.writeFile(rutaArchivo,contenido,(err)=>{
        if(err){
            console.log('error escribiendo: ',err);
        }else{
            console.log('archivo escrito correctamente');
        }
        
    })
}

//copiarArchivo(__dirname+'/leer.js',__dirname+'/leer2.js',escribirArchivo);
crearDirectorio('..\copia')
copiarDirectorio(__dirname,__dirname+'\\'+ '\copia')