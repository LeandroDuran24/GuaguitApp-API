var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();



let ReservacionModel = {}

ReservacionModel.getReservaciones = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Reservaciones',(err,result)=>{

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

ReservacionModel.getReservacion =(idReservacion, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Reservaciones where idReservacion= ?', idReservaciones,(err,result)=>{

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


ReservacionModel.insertReservacion =(reservaciones, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Reservaciones ?',eservaciones,(err,result)=>{

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


ReservacionModel.updateReservaciones = (reservaciones,callback)=>{

    if(conexion)
    {

        const sql = `
            update Usuarios set
            idUsuario =${conexion.escape(reservaciones.idUsario)},
            idTurno=${conexion.escape(reservaciones.idTurno)},
            estado =${conexion.escape(reservaciones.estado)},
            where idReservaciones =${reservaciones.idReservacion}`;

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

ReservacionModel.deleteReservaciones = (reservaciones,callback)=>{
    if(conexion)
    {
        let sql =`select * from Reservaciones where idReservacion =${conexion.escape(reservaciones.idReservacion)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Reservaciones where idReservacion =${conexion.escape(reservaciones.idReservacion)}`;

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

module.exports=ReservacionModel;