const cobro = require('../Model/Cobro');


module.exports = function(app){
    app.get('/cobro', (req,res)=>{

        
        cobro.getCobros((err,data)=>{

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

    app.get('/cobro/:id', (req,res)=>{

        cobro.getCobro(req.params.id,(err,data)=>{

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

    app.post('/cobro',(req,res)=>{

        var cobroData = {
            idCobro:null,
            idRuta:req.body.idRuta,
            idManager:req.body.idManager,
            idChofer:req.body.idChofer,
            monto:req.body.monto,
            estado:req.body.estado,
            fecha:req.body.fecha
        };

        cobro.insertCobro(cobroData,(err,data)=>{
            
            if(data && data.insertId)
            {
                res.status(200).json({success: true, msg: "Cobro Registrado", data:data });
            }
            else
            {
                res.status(500).json({ success: false, msg: "Cobro Fallido" });
            }

        });


    });


    app.put('/cobro/:id',(req,res)=>{

        var cobroData ={
            idCobro:req.params.idCobro,
            idRuta:req.body.idRuta,
            idManager:req.body.idManager,
            idChofer:req.body.idChofer,
            monto:req.body.monto,
            estado:req.body.estado,
            fecha:req.body.fecha
        };

        cobro.updateCobro(cobroData,(err,data)=>{


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

    app.delete('/cobro/:id', (req,res)=>{

        cobro.deleteCobro(req.params.id,(err,data)=>{
            
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