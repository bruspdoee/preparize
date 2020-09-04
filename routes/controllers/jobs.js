// get reference to DB
const db = require("../../models");

module.exports = function (app) {
  app.get("/api/jobs/:email", function (req, res) {
    db.Jobs.findAll({ where: { email: "brus@brus.com" } }).then(function (
      dbJobs
    ) {
      res.json(dbJobs);
      console.log(dbJobs);
    });

    // .catch((err) => res.json(err))
    // console.log(err)
  });

  // newJob: (req, res, next) => {
  //   // create user in db
  //   db.Jobs.create({
  //     email: req.body.email,
  //     company: req.body.company,
  //     jobTitle: req.body.jobTitle,
  //     location: req.body.location,
  //     status: req.body.status,
  //     notes: req.body.notes,
  //   })

  //     // redirect to login
  //     .then((jobs) => res.json(jobs))
  //     .catch((err) => {
  //       res.status(401);
  //       next(err);
  //     });
  // },

  // findAll: (req, res, next) => {
  //   db.Jobs.findAll({ order: [["createdAt", "DESC"]] })
  //     .then((jobs) => res.json(jobs))
  //     .catch((err) => {
  //       res.status(401);
  //       next(err);
  //     });
  // },

  //   findTotalJobNumber: (req, res, next) => {
  //     db.Jobs.findAll({
  //       where: { email: req.params.email },
  //       attributes: [
  //         "donatedItemCategory",
  //         [sequelize.fn("sum", sequelize.col("quantity")), "total"],
  //       ],
  //       group: ["Postings.donatedItemCategory"],
  //     })
  //       .then((donations) => res.json(donations))
  //       .catch((err) => {
  //         res.status(401);
  //         next(err);
  //       });
  //   },
};
