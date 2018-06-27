const inconvenientes = require('../Model/Inconveniente');


module.exports = function(app){
    app.get('/inconvenientes', (req,res)=>{

        
        inconvenientes.getInconvenientes((err,data)=>{

            if(err)
            {
               res.status(500).json(err);
              
            }
            else
            {
                res.json(data);
        
            }

        });

    });

    app.get('/inconvenientes/:id', (req,res)=>{

        inconvenientes.getInconveniente(req.params.id,(err,data)=>{

            if(err)
            {
                res.status(500).json(err);
            }
            else
            {
                res.json(data);
            }

        });
    });

    app.post('/inconvenientes',(req,res)=>{

        var inconvenienteData = {
            idInconveniente:null,
            idChofer:req.body.idChofer,
            idRuta:req.body.idRuta,
            titulo:req.body.titulo,
            descripcion:req.body.descripcion,
            rescate:req.body.rescate,
            latitud:req.body.latitud,
            longitud:req.body.longitud
        };

        inconvenientes.insertInconveniente(inconvenienteData,(err,data)=>{
            
            if(data && data.insertId)
            {
                res.status(200).json({success: true, msg: "Inconveniente Registrado", data:data });
            }
            else
            {
                res.status(500).json({ success: false, msg: "Inconveniente Fallido" });
            }

        });


    });


    app.put('/inconvenientes/:id',(req,res)=>{

        var inconvenientesData ={
            idInconveniente:req.params.idInconveniente,
            idChofer:req.body.idChofer,
            idRuta:req.body.idRuta,
            titulo:req.body.titulo,
            descripcion:req.body.descripcion,
            rescate:req.body.rescate,
            latitud:req.body.latitud,
            longitud:req.body.longitud
        };

        inconvenientes.updateInconvenientes(inconvenientesData,(err,data)=>{


            if(data && data.msg)
            {
                res.status(200).json({ success: true,data: data});
            }
            else
            {
                res.status(500).json({ success: false, msg: "Fallido" });
            }
            
        });


    });

    app.delete('/inconvenientes/:id', (req,res)=>{

        inconvenientes.deleteInconveniente(req.params.id,(err,data)=>{
            
            if (data && (data.msg === 'Eliminado' || data.msg == 'No Existe'))
            {
                res.json({
                    success: 'true',
                    data: data
                });
            } 
            else 
            {
                res.status(500).json({msg: 'Error'});
            }
          

        });
    });
}