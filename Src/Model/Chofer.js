var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();


let ChoferModel = {}

ChoferModel.getChoferes = (callback)=>{

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
        conexion.query('select * from Chofer where idChofer=?', idChofer,(err,result)=>{

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


ChoferModel.insertChofer = (chofer, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Chofer set?',chofer,(err,result)=>{

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


ChoferModel.updateChofer = (chofer,callback)=>{

    if(conexion)
    {

        let sql = 
            `UPDATE Chofer SET
            nombres=${conexion.escape(chofer.nombres)},
            apellidos=${conexion.escape(chofer.apellidos)},
            celular=${conexion.escape(chofer.celular)},
            telefono=${conexion.escape(chofer.telefono)},
            img=${conexion.escape(chofer.img)}
            where idChofer=${conexion.escape(chofer.idChofer)}`;

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

ChoferModel.deleteChofer = (chofer,callback)=>{
    if(conexion)
    {
        let sql =`select * from Chofer where idChofer =${conexion.escape(chofer)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete from Chofer where idChofer =${conexion.escape(chofer)}`;

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

module.exports=ChoferModel;