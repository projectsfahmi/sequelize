const model = require('../model/index');
const controller = {};

controller.getAll = async function(req, res) {
    try{
        await model.mspasien.findAll()
        .then ((result) => {
            if (result.length > 0) {
                res.status(200).json(
                    {
                        message : 'Get Method Pasien',
                        data : result
                    }
                )
            }else{
                res.status(200).json(
                    {
                        message : 'Tidak Ada Data',
                        data : []
                    } 
                )
            }
        });
    }catch(error){
        res.status(404).json(
            {
                message : error
            }
        )
    }
}

module.exports = controller;