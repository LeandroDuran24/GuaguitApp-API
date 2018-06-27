var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();



let UsuariosModel = {}

UsuariosModel.getUsuarios = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Usuarios',(err,result)=>{

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

UsuariosModel.getUsuario =(idUsuario, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Usuarios where idUsuario= ?', idUsuario,(err,result)=>{

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


UsuariosModel.insertUsuario =(usuario, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Usuarios ?',usuario,(err,result)=>{

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


UsuariosModel.updateUsuario = (usuario,callback)=>{

    if(conexion)
    {

        const sql = `
            update Usuarios set
            nombres =${conexion.escape(usuario.nombres)},
            apellidos=${conexion.escape(usuario.apellidos)},
            email =${conexion.escape(usuario.email)},
            clave =${conexion.escape(usuario.clave)},
            img =${conexion.escape(usuario.img)},
            where idUsuario =${usuario.idUsuario}`;

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

UsuariosModel.deleteUsuario = (usuario,callback)=>{
    if(conexion)
    {
        let sql =`select * from Usuarios where idUsuario =${conexion.escape(usario.idUsuario)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Usuarios where idUsuario =${conexion.escape(usario.idUsuario)}`;

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

module.exports=UsuariosModel;