const express = require('express');
const nanoid = require('nanoid');
const Links = require('../modals/Links');
const router = express.Router();

router.get('/', (req, res) => {
    Links.find()
        .then(links => res.send(links))
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