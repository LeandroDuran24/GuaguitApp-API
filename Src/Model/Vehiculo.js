var DbConnection= require('./../Connection/conexion');
const conexion = DbConnection();



let VehiculoModel = {}

VehiculoModel.getVehiculos = (callback)=>{

    if(conexion)
    {

        conexion.query('select * from Vehiculos',(err,result)=>{

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

VehiculoModel.getVehiculo =(idVehiculo, callback)=>{

    if(conexion)
    {
        conexion.query('select *from Vehiculos where idVehiculo= ?', idUsario,(err,result)=>{

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


VehiculoModel.insertVehiculo =(usuario, callback)=>{

    if(conexion)
    {

        conexion.query('insert into Vehiculos ?',Vehiculo,(err,result)=>{

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


VehiculoModel.updateVehiculo = (vehiculo,callback)=>{

    if(conexion)
    {

        const sql = `
            update Vehiculos set
            marca =${conexion.escape(vehiculo.marca)},
            modelo=${conexion.escape(usuario.modelo)},
            matricula =${conexion.escape(vehiculo.matricula)},
            color =${conexion.escape(vehiculo.color)},
            capacidad =${conexion.escape(vehiculo.capacidad)},
            ano =${conexion.escape(vehiculo.ano)},
            img${conexion.escape(vehiculo.img)},
            where idVehiculo =${vehiculo.idVehiculo}`;

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

VehiculoModel.deleteVehiculo = (vehiculo,callback)=>{
    if(conexion)
    {
        let sql =`select * from Vehiculos where idVehiculo =${conexion.escape(vehiculo.idUsario)}`;

        conexion.query(sql,(err,result)=>{

        if(result)
        {
            let sql =` delete * from Vehiculos where idVehiculo =${conexion.escape(vehiculo.idVehiculo)}`;

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

module.exports=VehiculoModel;