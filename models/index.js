//SEQUELIZE ASSOCIATIONS

const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

//ONE TO ONE, ONE TO MANY, MANY TO MANY

Post.belongsTo(User, {
  foreignKey: "",
  onDelete: "CASCADE", //if delete user, delete thier posts
});

Post.hasMany(Comment, {
  foreignKey: "",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };
