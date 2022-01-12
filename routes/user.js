const express=require('express');
const router=express.Router();
const passport=require('passport');

const userController=require('../controllers/user_controller');

router.get('/signin',userController.signin);
router.get('/signup',userController.signup);
router.get('/signout',userController.destroySession);
// router.get('/app',passport.checkAuthentication,userController.app);
router.post('/createSession',passport.authenticate('local',{failureRedirect:'/user/signin'}) ,userController.createSession);
router.post('/createUser',userController.createUser);



module.exports=router;