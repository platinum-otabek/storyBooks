const express = require('express');
const passport = require('passport');
const router = express.Router();

//@desc auth with goole
// @route  GET /auth/google
router.get('/google',passport.authenticate('google',{ scope: ['profile']}));

//@desc Dashboard auth callback
// @route  GET /auth/google/callback
router.get('/google/callback',passport.authenticate('google',
    {failureRedirect: '/'}),(req,res,)=>{
    res.redirect('/dashboard')
})

//@desc Logout user
//@route /auth/logout
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})


module.exports = router;