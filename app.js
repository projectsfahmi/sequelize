const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routesApps = require('./routes/RouteApps');
const helmet = require('helmet');


/** BASIC AUTHENTICATION */
app.use(helmet());
// const basicAuth = require('express-basic-auth');

// app.use(basicAuth({
//         users: {'admin' : '123'},
//         unauthorizedResponse: basicAuthResponse
//     }))

// function basicAuthResponse(req){
//     console.log(req);
//     return req.auth
//     ? ('Credentials' + req.auth.user + ':' + req.auth.password + 'rejected')
//     : 'Unauthorized Token'
// }
// console.log("success running basic authentication");
/**END AUTHENTICATION */

/** JWT AUTHENTICATION */
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'somerandomaccesstoken';
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}
/**END AUTHENTICATION */

/**SWAGGER */
const swaggerUi = require('swagger-ui-express');
const apiDocumentation = require('./apidocs.json')


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
// app.use("/api-docs",basicAuth({
//     users: {'admin': '123'},
//     unauthorizedResponse: basicAuthResponse
// }), swaggerUi.serve, swaggerUi.setup(apiDocumentation));

console.log("success running swagger");
/**END SWAGGER */




app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/', routesApps);


/*Biar Bisa Tampil Di Localhost*/
app.use('/assets', express.static('assets'));

app.use((req, res, next) => {
    const error = new Error('Tidak Ditemukan');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message
        }
    })
})


module.exports = app;