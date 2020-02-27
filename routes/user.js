const express = require('express');
const router = express.Router();
const User = require('../models/User');

const authenGraphql = require("../authen.graphql");

// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users)
//     } catch (error) {
//         res.json({ message: error })
//     }
// })
// router.post('/register', async (req, res) => {
//     try {
//         const user = new User({
//             username: req.body.username,
//         })
//         const savedUser = await user.save();
//         res.json(savedUser);
//     } catch (error) {
//         res.json({ message: error })
//     }
// })

router.use("/graphql", authenGraphql);

module.exports = router;