/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  addItem: function (req, res) {
    console.log(req.body);
    var item = req.body;
    Item.create(item)
    .then(function(response) {
      console.log(response);
      res.send(response)
    })
    .fail(function(err) {
      console.log(err);
      res.send(err)
    })
  },
  updateItem: function (req, res) {
    console.log(req.body);
    var item = req.body;
    Item.update({id: item.id}, item)
    .then(function(response) {
      console.log(response);
      res.send(response)
    })
    .fail(function(err) {
      console.log(err);
      res.send(err)
    })
  },
  deleteItem: function (req, res) {
    console.log(req.params);
    var item_id = req.params.item_id;
    Item.destroy({id: item_id})
    .then(function(response) {
      console.log(response);
      res.send(response)
    })
    .fail(function(err) {
      console.log(err);
      res.send(err)
    })
  },
	getItems: function (req,res) {
    console.log("getItems called");
    Item.find()
    .then(function(response) {
      console.log(response);
      res.send(response)
    })
    .fail(function(err) {
      console.log(err);
      res.send(err)
    })
	},
  getItemById: function (req,res) {
    console.log("getItemById called");
    var item_id = req.params.item_id;
    Item.findOne({id: item_id})
    .then(function(response) {
      console.log(response);
      res.send(response)
    })
    .fail(function(err) {
      console.log(err);
      res.send(err)
    })
  }
};
