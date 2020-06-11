const db = require("../models");
const Solution = db.solution;
const Op = db.Sequelize.Op;

// Create and Save a new Solution
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Solution
    const solution = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database
    Solution.create(solution)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Solution."
            });
        });
};

// Retrieve all Solutions from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {title: {[Op.like]: `%${title}%`}} : null;

    Solution.findAll({where: condition})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving solutions."
            });
        });
};

// Find a single Solution with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Solution.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Solution with id=" + id
            });
        });
};

// Update a Solution by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Solution.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Solution was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Solution with id=${id}. Maybe Solution was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Solution with id=" + id
            });
        });
};

// Delete a Solution with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Solution.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Solution was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Solution with id=${id}. Maybe Solution was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Solution with id=" + id
            });
        });
};

// Delete all Solutions from the database.
exports.deleteAll = (req, res) => {
    Solution.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({message: `${nums} Solutions were deleted successfully!`});
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all solutions."
            });
        });
};

// find all published Solution
exports.findAllPublished = (req, res) => {
    Solution.findAll({where: {published: true}})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving solutions."
            });
        });
};