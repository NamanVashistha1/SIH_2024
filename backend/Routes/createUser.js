const express = require("express")
const router = express.Router()
const { User , Surdata} = require("../Models/User")
const { body, validationResult } = require('express-validator')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const jwtsecret = "nfc_shanks"


router.post("/createUser", [
    body('email').isEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secpassword = await bcrypt.hash(req.body.password, salt);

    // try{

    
    //  // Send verification email
    //  const mailOptions = {
    //     from: 'your.email@gmail.com',
    //     to: email,
    //     subject: 'Email Verification',
    //     html: `<p>Click <a href="http://localhost:3000/verify/${verificationToken}">here</a> to verify your email.</p>`
    //   };
      
    // await transporter.sendMail(mailOptions);
    
    // // Save user to database
    // await user.save();
    // res.status(200).send('Verification email sent.');
    // }catch (error) {
    //     console.error(error);
    //     res.status(500).send('Error sending verification email.');
    //   }

    try {
        await User.create({
            username: req.body.username,
            email: req.body.email,
            password: secpassword
        });

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
});



router.post("/loginUser", [
    body('email').isEmail(),
    body('password', "Incorrect password").isLength({ min: 5 })
], async (req, res) => {
    
    const error = validationResult(req);
    if (!error.isEmpty()) { return res.status(400).json({ errors: error.array() }); }


    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) { return res.status(400).json({ error: "try logging with Correct credentials 1" }); }

        const cmppassword = await bcrypt.compare(req.body.password, userData.password)
        console.log(cmppassword);
        if (!cmppassword) { return res.status(400).json({ error: "try logging with Correct credentials 2" }); }

        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, jwtsecret)
        res.json({ success: true, authToken: authToken })
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
})




module.exports = router;