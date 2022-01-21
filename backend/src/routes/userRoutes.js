const router = require('express').Router()

router.route('/user').get((req, res) => {
    res.send("Hello user")
})

module.exports = router