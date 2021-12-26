const express = require('express');
const router = new express.Router();

/*** Models ***/
const Athletes = require('./../models/Athlete');
const Games = require('./../models/Game');
const Photos = require('../models/Photo');
const Results = require('../models/Result');

/** Response Api Functions **/
const { success, error, validation } = require("../middleware/responseApi");

const successMessage = (model) => {
    return `${model} successfully`;
}

const errorMessage = (model) => {
    return `${model} unsuccessfully`;
}

router.get('/athletes', async (req, res) => {

    try {
        const athletes = await Athletes.find({});

        return res.status(200).json(success(`${successMessage('Athletes loaded')}`, {athletes}, res.statusCode));
    } catch (err) {
        return res.status(500).json(error(`${errorMessage('Athletes loaded')}`, res.statusCode));
    }
});

router.get('/athlete/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const athlete = await Athletes.find({athlete_id: id});
        return res.status(200).json(success(`${successMessage('Athletes loaded')}`, {athlete}, res.statusCode));
    } catch (err) {
        return res.status(500).json(error(`${errorMessage('Athletes loaded')}`, res.statusCode));
    }
});

router.get('/results', async (req, res) => {

    try {
        const results = await Results.find({});

        let total = {};
        let totalScore = [];

        results.forEach((item) => {
            total = (item.gold * 5) + (item.silver * 3) + (item.bronze * 1);
            totalScore.push({"result": item, "total" : total});
        })

        return res.status(200).json(success(`${successMessage('Athlete Result loaded')}`, {totalScore}, res.statusCode));
    } catch (e) {
        return res.status(500).json(error(`${errorMessage('Athlete Result loaded')}`, res.statusCode));
    }
});

router.get('/result/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const result = await Results.find({athlete_id: id});

        return res.status(200).json(success(`${successMessage('Athlete Result loaded')}`, {result}, res.statusCode));
    } catch (e) {
        return res.status(500).json(error(`${errorMessage('Athlete Result loaded')}`, res.statusCode));
    }
});

router.get('/photos', async (req, res) => {

    try {
        const photos = await Photos.find({});
        return res.status(200).json(success(`${successMessage('Athlete Photos loaded')}`, {photos}, res.statusCode));
    } catch (e) {
        return res.status(500).json(error(`${errorMessage('Athlete Photos loaded')}`, res.statusCode));
    }
});

router.get('/photo/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const photo = await Photos.find({photo_id: id});
        return res.status(200).json(success(`${successMessage('Athlete Photo loaded')}`, {photo}, res.statusCode));
    } catch (e) {
        return res.status(500).json(error(`${errorMessage('Athlete Photo loaded')}`, res.statusCode));
    }
});

router.get('/games', async (req, res) => {

    try {
        const games = await Games.find({});
        return res.status(200).json(success(`${successMessage('Games loaded')}`, {games}, res.statusCode));
    } catch (e) {
        return res.status(500).json(error(`${errorMessage('Games loaded')}`, res.statusCode));
    }
});

router.get('/game/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const game = await Games.find({game_id: id});
        return res.status(200).json(success(`${successMessage('Game loaded')}`, {game}, res.statusCode));
    } catch (e) {
        return res.status(500).json(error(`${errorMessage('Game loaded')}`, res.statusCode));
    }
});

module.exports = router;
