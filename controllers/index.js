const express = require("express").Router();

const apiRoutes = require("./api");

Router.use("/api", apiRoutes);
