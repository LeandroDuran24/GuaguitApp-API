const parada = require('../Model/Parada');


module.exports = function(app){
    app.get('/parada', (req,res)=>{

        
        parada.getParadas((err,data)=>{

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

    app.get('/parada/:id', (req,res)=>{

        parada.getParada(req.params.id,(err,data)=>{

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

    app.post('/parada',(req,res)=>{

        var paradaData ={
            idParada:null,
            idRuta:req.body.idRuta,
            idManager:req.body.idManager,
            nombre:req.body.nombre,
            latitud:req.body.latitud,
            longitud:req.body.longitud
        };

        parada.insertParada(paradaData,(err,data)=>{
            
            if(data && data.insertId)
            {
                res.status(200).json({success: true, msg: "Parada Registrada", data:data });
            }
            else
            {
                res.status(500).json({ success: false, msg: "Parada Fallida" });
            }

        });


    });


    app.put('/parada/:id',(req,res)=>{

        var paradaData ={
            idParada:req.params.idParada,
            idRuta:req.body.idRuta,
            idManager:req.body.idManager,
            nombre:req.body.nombre,
            latitud:req.body.latitud,
            longitud:req.body.longitud
        };

        parada.updateParada(paradaData,(err,data)=>{


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

    app.delete('/parada/:id', (req,res)=>{

        parada.deleteParada(req.params.id,(err,data)=>{
            
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