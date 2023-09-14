const model = require('../model/index');
const controller = {};
const { Op } = require('sequelize');
const db = require('../config/database/mysql');

controller.getAll = async function(req, res) {
    try{

        let msemployee = await model.msemployee.findAll(
            {
                attributes: [
                    ['EmployeeCode','EmployeeCode'],
                    ['EmployeeName','EmployeeName'],
                    ['MaritalStatus','Married'],
                    ['PositionCode','PositionCode'],
                    ['PositionName','PositionName']],
                // include:[
                //     {
                //         model: model.position
                //     }
                // ],
                where:{
                    [Op.and]: [
                        {
                            EmployeeCode: 'E01'
                        }
                    ]
                },
                order: [['EmployeeCode', 'asc']],
                limit: 100,
                
            }
        )

        if (msemployee.length > 0) {
            res.status(200).json(
                {
                    message : 'Get Method Employee',
                    data : msemployee
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

    }catch(error){
        res.status(404).json(
            {
                message : error
            }
        )
    }
}

controller.getAllQuery = async function(req, res) {
    try{

        let msemployee = await db.query("SELECT a.EmployeeCode,a.EmployeeName,a.MaritalStatus,b.PositionCode,b.PositionName FROM msemployee a INNER JOIN msposition b on a.PositionCode = b.PositionCode WHERE a.EmployeeCode='E01'");

        if (msemployee.length > 0) {
            res.status(200).json(
                {
                    message : 'Get All Query Employee',
                    data : msemployee
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

    }catch(error){
        res.status(404).json(
            {
                message : error
            }
        )
    }
}

controller.getOne = async function(req, res) {
    try{

        let msemployee = await model.msemployee.findAll(
            {
                where: {
                    nim: req.params.EmployeeCode
                }
            }
        )
        if (msemployee.length > 0){
            res.status(200).json(
                {
                    message : 'Get Method Employee',
                    data : msemployee
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
    }catch(error){

        res.status(404).json(
            {
                message : error
            }
        )
    }
}

controller.getSearch = async function(req, res) {

    const search = req.query.keyword;

    try{
        let msemployee = await model.msemployee.findAll(
            {
                attributes: [
                    ['EmployeeCode','EmployeeCode'],
                    ['EmployeeName','EmployeeName'],
                    ['MaritalStatus','Married'],
                    ['PositionName','PositionName']],
                where:{
                    [Op.or]: [
                        {
                            EmployeeCode: {
                                [Op.like]: '%' + search + '%'
                            }
                        },
                        {
                            EmployeeName: {
                                [Op.like]: '%' + search + '%'
                            }
                        }
                    ]
                },
            }
        )
        if (msemployee.length > 0){
            res.status(200).json(
                {
                    message : 'Get Method Employee',
                    data : msemployee
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
    }catch(error){

        res.status(404).json(
            {
                message : error
            }
        )
    }
}

controller.post = async function(req, res) {
    try{

        let msemployee = await model.msemployee.create(
            {
                HOCode: req.body.HOCode,
                HOName: req.body.HOName,
                BuildingCode: req.body.BuildingCode,
                BuildingName: req.body.BuildingName,
                EmployeeCode: req.body.EmployeeCode,
                EmployeeName: req.body.EmployeeName,
                Password: req.body.Password,
                DOB: req.body.DOB,
                TempatLahir: req.body.TempatLahir,
                MaritalStatus: req.body.MaritalStatus,
                PositionCode: req.body.PositionCode,
                PositionName: req.body.PositionName,
                Photo: req.file.path
            }
          
        )
            console.log(msemployee)
            res.status(201).json(
                {
                    message: 'MsEmployee Success Save',
                    data: msemployee
                }
            )
    }catch(error){

        res.status(404).json(
            {
                message : error
            }
        )
    }
}

controller.put = async function(req, res) {
    try{
        let msemployee = await model.msemployee.update(
            {
                HOCode: req.body.HOCode,
                HOName: req.body.HOName,
                BuildingCode: req.body.BuildingCode,
                BuildingName: req.body.BuildingName,
                EmployeeCode: req.body.EmployeeCode,
                EmployeeName: req.body.EmployeeName,
                Password: req.body.Password,
                DOB: req.body.DOB,
                TempatLahir: req.body.TempatLahir,
                MaritalStatus: req.body.MaritalStatus,
                PositionCode: req.body.PositionCode,
                PositionName: req.body.PositionName
            },
            {
                where: {
                    EmployeeCode: req.params.EmployeeCode
                }
            }
          
        )
            console.log(msemployee)
            res.status(200).json(
                {
                    message: 'MsEmployee Success Updated',
                    data: msemployee
                }
            )
    }catch(error){

        res.status(404).json(
            {
                message : error
            }
        )
    }
}

controller.delete = async function(req, res) {
    try{

        let msemployee = await model.msemployee.destroy(
            {
                where: {
                    EmployeeCode: req.params.EmployeeCode
                }
               
            }
          
        )
            console.log(msemployee)
            res.status(200).json(
                {
                    message: 'MsEmployee Success Deleted'
                }
            )
    }catch(error){

        res.status(404).json(
            {
                message : error
            }
        )
    }
}

module.exports = controller;