const router = require("express").Router();
const loginRoutes = require("./loginRoutes");
const apiRoutes = require("./apiRoutes");

router.use("/users", userRoutes);
router.use("/data", apiRoutes);

module.exports = router;
