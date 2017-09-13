var express = require('express');
var router = express.Router();
var userController = require('../controllers/taskController');

require('dotenv').config()
var jwt = require('jsonwebtoken');

function middleware (req,res,next) {
  console.log(req.headers);
  if (req.headers.hasOwnProperty('token')) {
    jwt.verify(req.headers.token, process.env.TOKEN_SECRET_KEY, function(err, decoded) {
      if (decoded.username != null) {
        req.headers.verifiedUser = decoded
        console.log('================');
        console.log('the verified info', req.headers.verifiedUser)
        next()
      } else {
        res.send('you need to sign up')
      }
    })
  } else {
    res.send('lu gaboleh post')
  }
}

router.post('/', middleware, userController.create);//checked
router.get('/', middleware, userController.findAll); //checked
router.get('/:id', userController.findOne); //checked

router.put('/:id', userController.update); //checked

router.put('/:id/tags', userController.addTag); //checked
router.put('/:id/removetags', userController.removeTag); //checked


router.delete('/:id', userController.destroy); //checked

module.exports = router;
