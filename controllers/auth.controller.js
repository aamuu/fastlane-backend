const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    // Save User to Database
    User.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(() => {
            res.send({message: "User registered successfully!"});
        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};

exports.signin = (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({message: "User Not found."});
            }

            const passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    token: null,
                    message: "Invalid Password!"
                });
            }

            const token = jwt.sign({id: user.id}, config.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                id: user.id,
                email: user.email,
                token: token
            });

        })
        .catch(err => {
            res.status(500).send({message: err.message});
        });
};
