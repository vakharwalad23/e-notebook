const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Dhruvisagoodb$boy';

// Create a User using: POST "/api/auth/createUser"  No login required
router.post('/createUser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 8 characters').isLength({ min: 8 }),
], async (req, res) => {
  // If there are errors, return Bad request and th errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    // Check whether the user with this email exsists already 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ error: "Sorry a user with this email already exsists" })
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass
    });
    const data = {
      user:{
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    

    // res.json({ user });
    res.json({authtoken})
    // Catch errors
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some error occured");
  }
})

module.exports = router