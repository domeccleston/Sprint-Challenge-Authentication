const router = require("express").Router();
const Users = require("./authModel");

router.post("/register", (req, res) => {
  let user = req.body;

  Users.addUser(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  // implement login
});

module.exports = router;
