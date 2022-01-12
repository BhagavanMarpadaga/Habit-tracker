const express=require('express');
const router=express.Router();
const passport=require('passport');

const homeController=require('../controllers/home_controller');

router.get('/',passport.checkAuthentication,homeController.app);
router.get('/weekly',passport.checkAuthentication,homeController.weeklyView);
router.use('/user',require('./user'));
router.use('/habit',require('./habit'));

module.exports=router;