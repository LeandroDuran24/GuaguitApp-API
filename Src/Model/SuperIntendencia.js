var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();


let IntendenciaModel = {}

IntendenciaModel.getIntendencia = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from SuperIntendencia',(err,result)=>{

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

IntendenciaModel.getIntendencia =(idIntendencia, callback)=>{

    if(conexion)
    {
        conexion.query('select *from SuperIntendencia where idIntendencia= ?', idIntendencia,(err,result)=>{

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


IntendenciaModel.insertIntendencia =(intendencia, callback)=>{

    if(conexion)
    {

        conexion.query('insert into SuperIntendencia ?',intendencia,(err,result)=>{

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


IntendenciaModel.updateIntendencia = (intendencia,callback)=>{

    if(conexion)
    {

        const sql = `
            update SuperIntendencia set
            pais =${conexion.escape(intendencia.pais)},
            where idIntendencia =${intendencia.idUsario}`;

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

IntendenciaModel.deleteIntendencia = (intendencia,callback)=>{
    if(conexion)
    {
        let sql =`select * from SuperIntendencia where idIntendencia =${conexion.escape(intendencia.idIntendencia)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from SuperIntendencia where idIntendencia =${conexion.escape(intendencia.idIntendencia)}`;

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

modulke.exports=IntendenciaModel;