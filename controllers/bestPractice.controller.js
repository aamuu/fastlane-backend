const db = require("../models");
const BestPractice = db.bestPractice;

// Create and Save a new BestPractice
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cName) {
        res.status(400).send({
            message: "cName can not be empty!"
        });
        return;
    }

    // Create a BestPractice
    const newBestPractice = {
        cName: req.body.cName,
        shortDesc: req.body.shortDesc,
        longDesc: req.body.longDesc,
        AddImage: req.body.AddImage,
        Images: req.body.Images,
        files: req.body.files,
        type: req.body.type,
        contributors: req.body.contributors,
    };

    // Save BestPractice in the database
    BestPractice.create(newBestPractice)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the BestPractice."
            });
        });
};

// Retrieve all BestPractices from the database.
exports.findAll = (req, res) => {

    BestPractice.findAll()
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

// Find a single BestPractice with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    BestPractice.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving BestPractice with id=" + id
            });
        });
};

// Update a BestPractice by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    BestPractice.update(req.body, {
        where: {componentsId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "BestPractice was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update BestPractice with id=${id}. Maybe BestPractice was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating BestPractice with id=" + id
            });
        });
};

// Delete a BestPractice with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    BestPractice.destroy({
        where: {componentsId: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "BestPractice was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete BestPractice with id=${id}. Maybe BestPractice was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete BestPractice with id=" + id
            });
        });
};