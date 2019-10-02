var GroupFeed = require('./groupFeed/groupFeed.js');
var GroupMarks = require('./groupMarks/groupMarks.js');
var GroupRoles = require('./groupRoles/groupRoles.js');
var Groups = require('./groups/groups.js');
var GroupMember = require('./groupMember/groupMember.js');
var GroupEvents = require('./groupEvents/groupEvents.js');
var Users = require('./users/users.js');
var DefaultCategory = require('./defaultCategory/defaultCategory.js');


const express = require("express");
const router = express.Router();

router.get('/*', function (req, res, next) {
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
});

router.use('/', GroupFeed);
router.use('/', GroupMarks);
router.use('/', Groups);
router.use('/', GroupRoles);
router.use('/', GroupMember);
router.use('/', GroupEvents);
router.use('/', Users);
router.use('/', DefaultCategory);

module.exports = router;