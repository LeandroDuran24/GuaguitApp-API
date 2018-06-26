const conexion= require('./../Connection/conexion');

let SindicatoModel = {}

SindicatoModel.getSindicato = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Sindicato',(err,result)=>{

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

SindicatoModel.getSindicato =(idSindicato, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Sindicato where idSindicato= ?', idSindicato,(err,result)=>{

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


SindicatoModel.insertSindicato=(sindicato, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Sindicato ?',sindicato,(err,result)=>{

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


SindicatoModel.updateSindicato = (sindicato,callback)=>{

    if(conexion)
    {

        const sql = `
            update Sindicato set
            nombre =${conexion.escape(indicato.nombres)},
            siglas=${conexion.escape(sindicato.siglas)},
            email =${conexion.escape(sindicato.email)},
            clave =${conexion.escape(sindicato.clave)},
            img =${conexion.escape(sindicato.img)},
            where idSindicato =${sindicato.idUsario}`;

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

SindicatoModel.deleteSindicato = (sindicato,callback)=>{
    if(conexion)
    {
        let sql =`select * from Sindicato where idSindicato =${conexion.escape(sindicato.idSindicato)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Sindicato where idSindicato =${conexion.escape(sindicato.idSindicato)}`;

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