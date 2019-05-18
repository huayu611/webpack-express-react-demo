var express = require('express');
var router = express.Router();
router.get('/:name', function(req, res) {
    var parameter = req.params.name;
    res.render('Index',{name:parameter});
});
router.get('/', function(req, res) {
    res.render('Index');
});
module.exports = router;