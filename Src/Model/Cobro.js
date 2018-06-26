const conexion= require('./../Connection/conexion');

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
        conexion.query('select *from Cobros where idCobro= ?', idCobro,(err,result)=>{

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

        conexion.query('insert into Cobros ?',cobro,(err,result)=>{

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


CobroModel.updateCobro = (cobro,callback)=>{

    if(conexion)
    {

        const sql = `
            update Cobros set
            idRuta =${conexion.escape(cobro.idRuta)},
            idManager=${conexion.escape(cobro.idManager)},
            idChofer =${conexion.escape(cobro.idChofer)},
            monto =${conexion.escape(cobro.monto)},
            estado =${conexion.escape(cobro.estado)},
            fecha =${conexion.escape(cobro.fecha)},
            where idCobro =${cobro.idCobro}`;

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
        let sql =`select * from Cobros where idCobro =${conexion.escape(cobro.idCobro)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Corbros where idCobro =${conexion.escape(cobro.idCobro)}`;

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