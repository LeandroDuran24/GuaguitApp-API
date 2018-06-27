var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();


let RutaModel = {}

RutaModel.getRutas = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Rutas',(err,result)=>{

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

RutaModel.getRuta =(idRuta, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Rutas where idRuta= ?', idRuta,(err,result)=>{

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


RutaModel.insertRuta =(ruta, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Rutas ?',ruta,(err,result)=>{

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


RutaModel.updateRuta = (ruta,callback)=>{

    if(conexion)
    {

        const sql = `
            update Rutas set
            idSindicato =${conexion.escape(ruta.idSindicato)},
            idPresidente=${conexion.escape(ruta.idPresidente)},
            nombre =${conexion.escape(ruta.nombre)},
            descripcion =${conexion.escape(ruta.descripcion)},
            paradaA =${conexion.escape(ruta.paradaA)},
            paradaB =${conexion.escape(ruta.paradaB)},
            pasaje =${conexion.escape(ruta.pasaje)},
            foto =${conexion.escape(ruta.foto)},
            horaInicialLabores =${conexion.escape(ruta.horaInicialLabores)},
            horaFinLabores =${conexion.escape(ruta.horaFinLabores)},
            aceptaReservaciones =${conexion.escape(ruta.aceptaReservaciones)}
            
            where idRuta =${ruta.idRuta}`;

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

RutaModel.deleteRuta= (ruta,callback)=>{
    if(conexion)
    {
        let sql =`select * from Rutas where idRuta =${conexion.escape(ruta.idRuta)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Rutas where idRuta =${conexion.escape(ruta.idRuta)}`;

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


module.exports=RutaModel;
