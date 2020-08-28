const db = require("../../models");
const { sequelize } = require("../../models");

module.exports = {
  newEntry: (req, res, next) => {
    db.History.create({
      email: req.body.email,
      company: req.body.company,
      jobTitle: req.body.jobTitle,
      location: req.body.location,
      status: req.body.status,
      notes: req.body.notes,
    })
    .then((entry) => res.json(entry))
    .catch((err) => {res.status(401);
    next(err)});
  },

  findAllEnt: (req, res, next) => {
      db.History.findAll
  }
};
