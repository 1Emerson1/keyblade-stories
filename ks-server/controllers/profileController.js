const User = require('../models/User');

const ProfileController = {};

ProfileController.updateUser = (req, res) => {
    console.log(req.body.biography);
  
    User.update(
        {biography: req.body.biography},
        {where: {username: req.params.username}}
    )
    .then(result => {
        res.json(result)
    })
    .catch(err => {
        res.json(err)
    })
  }