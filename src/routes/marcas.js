const express = require('express');
const app = express();

const router = express.Router();

const Controller = require('../controllers/marcas');

router.get('/', Controller.List);
router.get('/count', Controller.Count)
router.get('/search', Controller.Search);

router.get('/:id', Controller.Exist, (req, res) => { res.json(req.marca) });
router.get('/:id/modelos', /*Controller.Exist,*/ Controller.ListModelos);


router.post('/', Controller.Add);
router.delete('/:id', Controller.Exist, Controller.Delete);
router.put('/:id', Controller.Exist, Controller.Update);

module.exports = router;


