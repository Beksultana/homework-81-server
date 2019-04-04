const express = require('express');
const nanoid = require('nanoid');
const Links = require('../modals/Links');
const router = express.Router();

router.get('/:id', (req, res) => {
    Links.findOne({shortUrl: req.params.id})
        .then(result => {
            if (result) return res.status(301).redirect(result.originalUrl);
            res.sendStatus(404);
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {
    const linkData = req.body;
    const links = new Links(linkData);
    links.shortUrl = nanoid(6);

    links.save()
        .then(result => res.send(result))
        .catch(() => res.sendStatus(500))
});

module.exports = router;