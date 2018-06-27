var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();



let TurnosModel = {}

TurnosModel.getTurnos = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Turnos',(err,result)=>{

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

TurnosModel.getTurno =(idTurno, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Turnos where idTurno= ?', idTurno,(err,result)=>{

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


TurnosModel.insertTurno =(turno, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Turnos ?',turnos,(err,result)=>{

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


TurnosModel.updateTurno = (turno,callback)=>{

    if(conexion)
    {

        const sql = `
            update Turnos set
            idRuta =${conexion.escape(turno.idRuta)},
            idParada=${conexion.escape(turno.idParada)},
            idChofer =${conexion.escape(turno.idChofer)},
            fechaHoraSalida =${conexion.escape(turno.fechaHoraSalida)},
            fechaHoraLLegada =${conexion.escape(turno.fechaHoraLLegada)},
            where idTurno =${turno.idTurno}`;

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

TurnosModel.deleteTurno = (turno,callback)=>{
    if(conexion)
    {
        let sql =`select * from Turnos where idTurno =${conexion.escape(turno.idTurno)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Turnos where idTurno =${conexion.escape(turno.idTurno)}`;

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

module.exports=TurnosModel;