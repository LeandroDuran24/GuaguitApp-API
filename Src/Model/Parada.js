const conexion= require('./../Connection/conexion');

let ParadaModel = {}

ParadaModel.getParadas = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Paradas',(err,result)=>{

               if(err)
               {
                   callback(err,null);
               } 
               else
               {
                    callback(null,result);
               }
        });
    }


}

ParadaModel.getParada =(idParada, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Paradas where idParada= ?', idParada,(err,result)=>{

            if(err)
            {
                callback(err,null);
            }
            else
            {
                callback(null,result);
            }
        })
    }


}


ParadaModel.insertParada =(parada, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Paradas ?',parada,(err,result)=>{

            if(err)
            {
                callback(err,{'InsertId': 0});
            }
            else
            {
                callback(null,{'InsertId':result.InsertId});
            }
        })
    }
}


ParadaModel.updateParada = (parada,callback)=>{

    if(conexion)
    {

        const sql = `
            update Paradas set
            idRuta =${conexion.escape(parada.idRuta)},
            idManager=${conexion.escape(parada.idManager)},
            nombre =${conexion.escape(usuario.nombre)},
            latitud =${conexion.escape(usuario.latitud)},
            longitud =${conexion.escape(usuario.longitud)},
            where idParada =${parada.idParada}`;

        conexion.query(sql,(err,result)=>{

            if(err)
            {
                throw err;
            }
            else
            {
                callback(null,{msg:'Actualizado'});
            }
        });
    }
}

ParadaModel.deleteParada = (parada,callback)=>{
    if(conexion)
    {
        let sql =`select * from Paradas where idParada =${conexion.escape(parada.idParada)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Paradas where idParada =${conexion.escape(parada.idParada)}`;

            conexion,query(sql,(err,result)=>{

                if(err)
                {
                    throw err;
                }
                else
                {
                    callback(null,{msg:"Eliminado"});
                }
            })
        }
        else
        {
            callback(null,{msg:"No Existe"});
        }

        });
    }

}