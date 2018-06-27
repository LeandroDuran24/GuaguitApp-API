const chofer = require('../Model/Chofer');


module.exports = function(app){
    app.get('/chofer', (req,res)=>{

        chofer.getChoferes((err,data)=>{

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

    app.get('/chofer/:id', (req,res)=>{

        chofer.getChofer(req.params.id,(err,data)=>{

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

    app.post('/chofer',(req,res)=>{

        var data= 
        {
            idChofer: null,
            nombres: req.body.nombres,
            apellidos:req.body.apellidos,
            celular: req.body.celular,
            telefono: req.body.telefono,
            img:req.body.img

        };

        chofer.insertChofer(data,(err,data)=>{
            
            if(data && data.insertId)
            {
                res.status(200).json({success: true, msg: "Chofer Registrado ",  data: data });
               
            }
            else
            {
                res.status(500).json({ success: false, msg: "Chofer Fallido" });
             
            }

        });


    });


    app.put('/chofer/:id',(req,res)=>{

        var choferData ={
            idChofer: req.params.idChofer,
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            celular: req.body.celular,
            telefono: req.body.telefono,
            img: req.body.img
        };

        chofer.updateChofer(choferData,(err,data)=>{


            if(data && data.msg)
            {
                res.status(200).json({ success: true,data:data});
            }
            else
            {
                res.status(500).json({ success: false, msg: "Fallido" });
            }
            
        });


    });

    app.delete('/chofer/:id', (req,res)=>{

        chofer.deleteChofer(req.params.id,(err,data)=>{
            
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