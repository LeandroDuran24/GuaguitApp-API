var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();

let InconvenientesModel = {}

InconvenientesModel.getInconvenientes = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Inconvenientes',(err,result)=>{

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

InconvenientesModel.getInconveniente =(idInconveniente, callback)=>{

    if(conexion)
    {
        conexion.query('select * from Inconvenientes where idInconveniente= ?', idInconveniente,(err,result)=>{

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


InconvenientesModel.insertInconveniente =(inconveniente, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Inconvenientes set ?',inconveniente,(err,result)=>{

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


InconvenientesModel.updateInconvenientes = (inconveniente,callback)=>{

    if(conexion)
    {

        let sql = 
            `UPDATE Inconvenientes SET
            idChofer=${conexion.escape(inconveniente.idChofer)},
            idRuta=${conexion.escape(inconveniente.idRuta)},
            titulo =${conexion.escape(inconveniente.titulo)},
            descripcion =${conexion.escape(inconveniente.descripcion)},
            rescate =${conexion.escape(inconveniente.rescate)},
            longitud =${conexion.escape(inconveniente.longitud)},
            latitud =${conexion.escape(inconveniente.latitud)}
            where idInconveniente =${conexion.escape(inconveniente.idInconveniente)}`;

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

InconvenientesModel.deleteInconveniente = (inconveniente,callback)=>{
    if(conexion)
    {
        let sql =`select * from Inconvenientes where idInconveniente =${conexion.escape(inconveniente)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =`delete from Inconvenientes where idInconveniente =${conexion.escape(inconveniente)}`;

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

module.exports=InconvenientesModel;