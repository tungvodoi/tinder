const express = require("express");
const route = express.Router();
const Location = require("../models/Location");
const User = require("../models/User");

function reportLocation(req) {
    const location = new Location({
        userId: req.body.userId,
        location: req.body.location,
        time: Date.now()
    });
    return location;
}

async function encounter(userId) {
    const user = await Location.findOne({ userId });
    const nearUser = await Location.find({
        location: {
            $geoWithin: { $center: [[user.location.long, user.location.long], 10] }
        },
        userId: { $ne: user.userId }
    });
    console.log(user.userId);
    return nearUser;
}


route.post("/reportLocation", async (req, res) => {
    try {
        const savedLocation = await reportLocation(req).save();
        res.json(savedLocation);
    } catch (error) {
        console.log({ message: error });
    }
});

route.get("/encounter/:userId", async (req, res) => {
    try {
        const nearUser = await encounter(req.params.userId);
        res.json(nearUser);
    } catch (error) {
        res.json({ message: error });
    }
});
module.exports = route;
