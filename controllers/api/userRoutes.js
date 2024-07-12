const router = require("express").Router();

const User = require("../../models/User");

//routes

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll();

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a user

//login a user

//delete a user

module.exports = router;
