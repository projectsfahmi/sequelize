const axios = require('axios');
const controller = {};

controller.getAll = async function(req, res){

    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

        if(response.data.length > 0 ){
            res.status(200).json(
                {
                    message: "Data Dari Public API",
                    data: response.data
                }
            )
        }else{
            res.status(200).json(
                {
                    message: "Tidak Ada Data"
                }
            )

        }

    }catch(error){

        res.status(404).json(
            {
                message: error.message
            }
        )
    }

    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then(function(response) {
    //     res.status(200).json(
    //         {
    //             message: "Data Dari Public API",
    //             data: response.data
    //         }
    //     )
    // })
    // .catch(function(error){
    //     res.status(404).json(
    //         {
    //             message: error.message
    //         }
    //     )
    // })
}

controller.post = async function(req, res){
    try{
        const response = await axios(
            {
                method: "post",
                url: "https://jsonplaceholder.typicode/posts",
                data: {
                    title: req.body.title,
                    body: req.body.body,
                    userId: 87645
                }
            }
        );
            console.log(response)
        res.status(201).json(
            {
                message: "Berhasil Tambah Data",
                data: response.data
            }
        )
    }catch(error){
        res.status(404).json(
            {
                message: error.message
            }
        )
    }
}

module.exports = controller;