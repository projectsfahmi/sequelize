
const controller = {};
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'somerandomaccesstoken';
const refreshTokenSecret = 'somerandomstringforrefreshtoken';
const db = require('../config/database/index');

const users = [
    {
        username: 'projects.fahmi@gmail.com',
        password: 'sa212',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
]

let refreshTokens = [];

controller.post = async function(req, res) {
    try{


        let msemployee = await db.dbapiseq.query("SELECT * from users where email='" + req.body.email + "'");

        if (msemployee.length > 0) {

            const accessToken = jwt.sign({ username: req.body.email, role: "admin" }, accessTokenSecret, { expiresIn: '365d' });
            const refreshToken = jwt.sign({ username: req.body.email, role: "admin" }, refreshTokenSecret);
    
            refreshTokens.push(refreshToken);
    
            res.status(200).json(
                {
                    status: true,
                    message: "Success Get Data",
                    data: {
                        email: req.body.email,
                        username: "Admin",
                        token : accessToken
                    }
                }
            )
        }else{
            res.status(200).json(
                {
                    message : 'Username or password incorrect'
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

module.exports = controller;