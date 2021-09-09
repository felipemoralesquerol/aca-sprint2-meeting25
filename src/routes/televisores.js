const express = require('express');
const app = express();

const router = express.Router();

const Controller = require('../controllers/televisores');

router.get('/', Controller.List);
router.get('/:price/greaterThan/', Controller.ListGreaterThan);
router.get('/:price/lessThan/', Controller.ListLessThan);

router.get('/count', Controller.Count)
router.get('/search', Controller.Search);

router.get('/:id', Controller.Exist, (req, res) => { res.json(req.televisor) });

router.post('/', Controller.Add);
router.delete('/:id', Controller.Exist, Controller.Delete);
router.put('/:id', Controller.Exist, Controller.Update);

module.exports = router;


