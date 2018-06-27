var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();


let ParadaModel = {}

ParadaModel.getParadas = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Paradas',(err,result)=>{

               if(err)
               {
                   throw err;
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
                throw err;
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

        conexion.query('insert into Paradas SET ?',parada,(err,result)=>{

            if(err)
            {
                throw err;
            }
            else
            {
                callback(null,{'insertId':result.insertId});
            }
        })
    }
}


ParadaModel.updateParada = (parada,callback)=>{

    if(conexion)
    {

        let sql = 
            `UPDATE Paradas SET
            idRuta=${conexion.escape(parada.idRuta)},
            idManager=${conexion.escape(parada.idManager)},
            nombre=${conexion.escape(parada.nombre)},
            latitud=${conexion.escape(parada.latitud)},
            longitud=${conexion.escape(parada.longitud)}
            where idParada = ${conexion.escape(parada.idParada)}`;

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
        let sql =`select * from Paradas where idParada =${conexion.escape(parada)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete  from Paradas where idParada =${conexion.escape(parada)}`;

            conexion.query(sql,(err,result)=>{

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

module.exports=ParadaModel;