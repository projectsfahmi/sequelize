const express = require('express');
const router = express.Router();

const controller = require('../controller/index.js');

const multer = require('multer');
const storage = multer.diskStorage(
    {
        destination: function(req, file, cb) {
            cb(null, './assets/');
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname);
        }
    }
); 

const upload = multer({storage: storage});


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


router.post('/auth', controller.auth.post);



router.get('/msemployee',authenticateJWT, controller.msemployee.getAll);
router.get('/msemployee/query',authenticateJWT, controller.msemployee.getAllQuery);
router.get('/msemployee/search',authenticateJWT, controller.msemployee.getSearch);
router.get('/msemployee/:EmployeeCode', controller.msemployee.getOne);

router.post('/msemployee', upload.single('Photo'), controller.msemployee.post);
router.put('/msemployee/:EmployeeCode', controller.msemployee.put);
router.delete('/msemployee/:EmployeeCode', controller.msemployee.delete);

router.get('/mspasien', controller.mspasien.getAll);

router.get('/axios', controller.axios.getAll);
router.post('/axios', controller.axios.post);



module.exports = router;