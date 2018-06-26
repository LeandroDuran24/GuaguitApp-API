const conexion= require('./../Connection/conexion');

let ChoferModel = {}

ChoferModel.getChofer = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Chofer',(err,result)=>{

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

ChoferModel.getChofer =(idChofer, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Choder where idChofer= ?', idChofer,(err,result)=>{

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


choferModel.insertChofer =(chofer, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Chofer ?',chofer,(err,result)=>{

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


choferModel.updateChoder = (chofer,callback)=>{

    if(conexion)
    {

        const sql = `
            update Chofer set
            nombres =${conexion.escape(chofer.nombres)},
            apellidos=${conexion.escape(chofer.apellidos)},
            email =${conexion.escape(chofer.email)},
            telefono =${conexion.escape(chofer.telefono)},
            celular=${conexion.escape(chofer.celular)},
            img =${conexion.escape(chofer.img)},
            where idChoder =${chofer.idChoder}`;

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

choferModel.deleteChofer = (chofer,callback)=>{
    if(conexion)
    {
        let sql =`select * from Chofer where idChofer =${conexion.escape(chofer.idChoder)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Chofer where idChofer =${conexion.escape(chofer.idChofer)}`;

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