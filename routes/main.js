const router = require('express').Router()
const Module = require('../models/module')
const User = require('../models/user')
const ObjectId = require('mongoose').Types.ObjectId
const faker = require('faker')
// const fs = require('fs');
// const moduleData = JSON.parse(fs.readFileSync("data.js", 'utf8'))

router.get('/generate-fake-data', (req, res, next) => {
  for (let i = 0; i < 20; i++) {
    let user = new User()
    user.name = `${faker.name.firstName()} ${faker.name.lastName()}`
    user.uID = faker.random.uuid()
    user.email = faker.internet.email()
    user.save((err) => {
      if (err) throw err
    })
  }
  res.end()
})

router.get('/current_user', (req, res, next) => {
  User.findOne({},(error, user) => {
    res.send(user)
  })
})

router.get('/users', (req, res, next) => {
  User.find({},(error, users) => {
    res.send(users)
  })
})

router.get('/modules', (req, res, next) => {
  Module.find({}).sort({mID:1}).exec( (error, modules) => {
    res.send(modules)
  })
})

router.get('/modules/:mID', (req, res, next) => {
  let mID = req.params.mID
  Module.find({mID:mID}, (error, mod) => {
    res.send(mod)
  })
})

router.post('/modules', (req, res, next) => {
  let mod = new Module()
  mod.name = req.body.name
  mod.mID = req.body.mID
  mod.lessons = req.body.lessons
  mod.save((err) => {
    if (err) throw err
  })
  res.send(mod)
})

router.post('/:uID/modules', (req, res, next) => {
  let uID = req.params.uID
  User.find({uID:uID}, (err, user) => {
    if (err) throw err
    product.reviews.push(review)
    product.save()
  })
  res.end()
})

// router.post('/:uID/:mID/:lID/:percentComplete', (req, res, next) => {
//   const uID = req.params.uID
//   const mID = req.params.mID
//   const lID = req.params.lID
//   const percentComplete = req.params.percentComplete
//   User.findOneAndUpdate({uID:uID}, modules: 
//     if (err) throw err
//     product.reviews.push(review)
//     product.save()
//   })
//   res.end()
// })


// router.delete('/products/:productId', (req, res, next) => {
//   let productId = req.params.productId
//   Product.findById(productId).remove().exec( (err, product) => {
//     if (err) throw err
//   })
//   res.end()
// })

// router.delete('/reviews/:reviewId', (req, res, next) => {
//   let reviewId = ObjectId(req.params.reviewId)
//   Product.update({},{ $pull: {reviews:{ _id: reviewId }}}, {multi: true} , (err, product)=> {
//     if (err) throw err
//   })
//   res.end()
// })

module.exports = router;