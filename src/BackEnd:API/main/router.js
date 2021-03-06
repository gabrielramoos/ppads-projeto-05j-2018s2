const express = require('express');
const router = express.Router();

const anatelDao = require('./dao/anatel');

router.get('/has_connection', async function(req, res, next) {
  try {
    var data = await anatelDao.getAllFull()
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/has_connection/region/:cod', async function(req, res, next) {
  try {
    var data = await anatelDao.getByRegionFull(req.params.cod)
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/has_connection/state/:cod', async function(req, res, next) {
  try {
    var data = (await anatelDao.getByStateFull(req.params.cod))[0]
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

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

router.get('/top_business', async function(req, res, next) {
  try {
    var data = await anatelDao.getAllBusiness()
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/top_business/region/:cod', async function(req, res, next) {
  try {
    var data = await anatelDao.getByRegionBusiness(req.params.cod)
    res.send(data)
  } catch(err) {
    res.send(err)
  }
})

router.get('/top_business/state/:cod', async function(req, res, next) {
  try {
    var data = (await anatelDao.getByStateBusiness(req.params.cod))
    res.send(data)
  } catch(err) {
    console.log(err)
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
