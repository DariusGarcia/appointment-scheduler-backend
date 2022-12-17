const router = require('express').Router()

const userRoutes = require('./userRoutes')
const itemRoutes = require('./itemRoutes')
const orderRoutes = require('./orderRoutes')
const cartRoutes = require('./cartRoutes')

router.use('/users', userRoutes)
router.use('/orders', orderRoutes)
router.use('/item', itemRoutes)
router.use('/cart', cartRoutes)

module.exports = router
