const express=require('express');
const router=express.Router();

const habitController=require('../controllers/habit_controller');


router.post('/createHabit',habitController.createHabit);
router.get('/fav/:id',habitController.toggleFavourite);
router.get('/toggleAction/',habitController.toggleAction);
router.get('/delete/:id',habitController.deleteHabit);
module.exports=router;