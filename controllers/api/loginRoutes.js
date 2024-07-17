//login and signup
const router = require("express").Router();
const User = require("../../models/User");
const bcrypt = require("bcrypt");

//REGISTER A USER (user fills out Register form)
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
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
      if (authenticated) {
        return res.json({ message: "you are logged in" });
      } else {
        res.json({ message: "incorrect credentials" });
      }
    }
  } catch (err) {
    res.status(500).json;
  }
});

router.post("/logout", async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(404).end()
  }
  }
})

module.exports = router;
