const router = require("express").Router();
const Users = require("./authModel");
const bcrypt = require('bcryptjs');

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 11);

  const newUser = {
    username: req.body.username,
    password: hash,
  };

  Users.addUser(newUser)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
  .first()
  .then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ message: `Welcome ${user.username}!`});
    } else {
      res.status(401).json({ message: `Invalid Credentials`});
    }
  })
  .catch(error => {
    res.status(500).json(error);
  })
});

module.exports = router;
