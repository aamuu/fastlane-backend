const db = require("../models");
const Solution = db.solution;

// Create and Save a new Solution
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cName) {
        res.status(400).send({
            message: "cName can not be empty!"
        });
        return;
    }

    // Create a Solution
    const newSolution = {
        cName: req.body.cName,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
        AddImage: req.body.AddImage,
        Images: req.body.Images,
        files: req.body.files,
        type: req.body.type,
        contributors: req.body.contributors,
    };

    // Save Component in the database
    Solution.create(newSolution)
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

    Solution.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving components."
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
        where: {solutionsId: id}
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