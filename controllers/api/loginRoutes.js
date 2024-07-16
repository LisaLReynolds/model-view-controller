//login and signup
const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");

//REGISTER A USER (user fills out Register form)
router.post("/", async (req, res) => {
  try {
    newUser.password = await bcrypt.hash(newUser.password, 10);

    const encryptedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({
      username: req.body.username,
      password: encryptedPassword,
    });

    console.log(newUser);

    req.session.save(() => {
      //assign a key on that object
      req.session.loggedIn = true;
    });

    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json;
  }
});

//LOGIN A USER (user fills out login form)

router.post("/login", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    //make sure values exist
    if (username && password) {
      //i have the username and password but i need to check the db tables
      const userData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      //what if user does not exist?
      if (!userData) {
        res.status(404).json({ message: "No User Found" });
      }

      //did they provide us with correct password?
      const authenticated = bcrypt.compare(password, userData.password); //boolean
      //if the user registered before and they give us the correct password what next?
    }
  } catch (err) {
    res.status(500).json;
  }
});

module.exports = router;
