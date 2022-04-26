const { Router } = require('express')
const router = Router()
const Sequelize = require('sequelize');
const sequelize = require('../config/db.config') // Õppematerjalis oli jutumärkide sees ./utils/database mis andis veateate
const controller_sensor = require('../models/controller_sensor')(sequelize, Sequelize.DataTypes)
const sensor = require('../models/sensor')(sequelize, Sequelize.DataTypes)

router.get('/rooms', async (req, res) => {
    controller_sensor.findAll({
        attributes: ['room'],
        group: ['room']
    }).then((result) => res.json(result))
})

router.get("/sensors/:id", (req, res) =>
    sensor.findByPk(req.params.id)
        .then((result) => res.json(result))
);

module.exports = router;