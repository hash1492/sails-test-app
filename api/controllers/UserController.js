/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
    var user = req.body;
    console.log(user)
    User.findOne({email: user.email, password: user.password})
    .then(function (response) {
      console.log(response)
      if(!response){
        res.serverError('User doesnt exist')
      }
      res.send(response)
    })
    .fail(function (err) {
      console.log(err)
      res.send(err)
    })
	},
  register: function (req, res) {
    var user = req.body;
    console.log(user)
    User.findOne({email: user.email})
    .then(function (response) {
      console.log(response)
      if(response){
        return res.serverError('User already exists');
      }
      User.create({email: user.email, password: user.password})
      .then(function (response) {
        console.log(response)
        res.send(response)
      })
      .fail(function (err) {
        console.log(err)
        res.send(err)
      })
    })
    .fail(function (err) {
      console.log(err)
      res.send(err)
    })
  }
};
