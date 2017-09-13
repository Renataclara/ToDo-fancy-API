'use strict'

const Task = require('../models/Task')
const ObjectId = require('mongodb').ObjectId;
var jwt = require('jsonwebtoken');
const generate = require('../helpers/generateSecret');
const hash = require('../helpers/hash');
const crypto = require('crypto');


module.exports = {
  findAll: function (req,res) {
      // if (req.headers.id == req.params.idu) {
        Task.find({
          userid: req.headers.verifiedUser.id
        })
        .then(function (data) {
          res.send(data);
        })
      // } else {
      //   res.send('yours only');
      // }
  },
  create: function (req,res) {
        Task.create({
          task_name: req.body.task_name,
          tags: req.body.tags,
          status: req.body.status,
          userid: req.headers.verifiedUser.id
          // ,
          // userid: req.headers.id
        })
        .then(function(result) {
          console.log('resulf from axios', result)
          res.send(result);
        })
  },
  findOne: function (req,res) {
      // if (req.headers.id == req.params.idu) {
          Task.find({
            _id: req.params.id
          })
          .then(function (data) {
            res.send(data);
          })
      // } else {
      //   res.send('yours only');
      // }
  },
  destroy: function (req,res) {
    // if (req.headers.id == req.params.idu) {
        Task.deleteOne({_id:req.params.id})
        .then(function () {
          res.send('user is destroyed');
        })
      // } else {
      //   res.send('yours only');
      // }
  },
  update: function (req,res) {
    // if (req.headers.id == req.params.idu) {
          Task.where({
            _id: req.params.id
          })
          .update({
            task_name: req.body.task_name,
            deadline_at: req.body.deadline_at,
            status: req.body.status
          })
          .then(function (data) {
            res.send(data);
          })
      // } else {
      //   res.send('yours only');
      // }
  },
  addTag: function (req,res) {
    // if (req.headers.id == req.params.idu) {
          Task.where({
            _id: req.params.id
          })
          .update({
            $push:{
              tags: req.body.tags
            }
          })
          .then(function (data) {
            res.send(data);
          })
      // } else {
      //   res.send('yours only');
      // }
  },
  removeTag: function (req,res) {
      // if (req.headers.id == req.params.idu) {
          Task.where({
            _id: req.params.id
          })
          .update({
            tags: req.body.tags
          })
          .then(function (data) {
            res.send(data);
          })
      // } else {
      //   res.send('yours only');
      // }
  }
}
