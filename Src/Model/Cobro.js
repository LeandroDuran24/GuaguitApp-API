var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();


let CobroModel = {}

CobroModel.getCobros = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Cobros',(err,result)=>{

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

CobroModel.getCobro =(idCobro, callback)=>{

    if(conexion)
    {
        conexion.query('select * from Cobros where idCobro= ?', idCobro,(err,result)=>{

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


CobroModel.insertCobro =(cobro, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Cobros set?',cobro,(err,result)=>{

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


CobroModel.updateCobro = (cobro,callback)=>{

    if(conexion)
    {

        let sql = 
            `UPDATE Cobros SET
            idRuta=${conexion.escape(cobro.idRuta)},
            idManager=${conexion.escape(cobro.idManager)},
            idChofer=${conexion.escape(cobro.idChofer)},
            monto=${conexion.escape(cobro.monto)},
            estado=${conexion.escape(cobro.estado)},
            fecha=${conexion.escape(cobro.fecha)}
            where idCobro=${conexion.escape(cobro.idCobro)}`;

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

CobroModel.deleteCobro = (cobro,callback)=>{
    if(conexion)
    {
        let sql =`select * from Cobros where idCobro =${conexion.escape(cobro)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =`delete from Cobros where idCobro =${conexion.escape(cobro)}`;

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

module.exports=CobroModel;