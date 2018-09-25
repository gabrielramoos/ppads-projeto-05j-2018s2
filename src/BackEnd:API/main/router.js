const express = require('express');
const router = express.Router();

const anatelDao = require('./dao/anatel');

router.get('/low_connection', async function(req, res, next) {
  try {
    var data = await anatelDao.getAll()
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/low_connection/region/:cod', async function(req, res, next) {
  try {
    var data = await anatelDao.getByRegion(req.params.cod)
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/low_connection/state/:cod', async function(req, res, next) {
  try {
    var data = (await anatelDao.getByState(req.params.cod))[0]
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/regions', async function(req, res, next) {
  try {
    var data = await anatelDao.getRegions()
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/states/:id_region', async function(req, res, next) {
  try {
    var data = await anatelDao.getStates(req.params.id_region)
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})



module.exports = router;
