const express = require('express');
const router = express.Router();
const Registration = require('../models/users')



// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/', (req, res) => {
    res.render('form', { title: 'Registration form' })
})

// save data to the database
router.post('/', async (req, res) => {
    try {
        const registration = await Registration(req.body);
        await registration.save()
    res.send('Sucessfully Saved')
    }
    catch (err) {
        res.status(400).send('Sorry! Something went wrong.')
        console.log(err)
    }
})
module. exports = router;