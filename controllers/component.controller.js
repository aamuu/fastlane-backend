const db = require("../models");
const Component = db.component;

// Create and Save a new Component
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cName) {
        res.status(400).send({
            message: "cName can not be empty!"
        });
        return;
    }

    // Create a Component
    const newComponent = {
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
    Component.create(newComponent)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Component."
            });
        });
};

// Retrieve all Components from the database.
exports.findAll = (req, res) => {

    Component.findAll()
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

// Find a single Component with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Component.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Component with id=" + id
            });
        });
};

// Update a Component by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Component.update(req.body, {
        where: {
            componentsId: id,
        }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Component was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Component with id=${id}. Maybe Component was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Component with id=" + id
            });
        });
};

// Delete a Component with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Component.destroy({
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Component was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Component with id=${id}. Maybe Component was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Component with id=" + id
            });
        });
};