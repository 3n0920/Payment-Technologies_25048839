const express = require('express');
const { isLoggedIn } = require('../middleware/auth');
const controller = require('../controllers/journalController');

const router = express.Router();

router.get('/journals', isLoggedIn, controller.listJournals);
router.get('/journals/new', isLoggedIn, controller.showNewJournal);
router.post('/journals/new', isLoggedIn, controller.createJournal);
router.get('/journals/edit/:id', isLoggedIn, controller.showEditJournal);
router.post('/journals/edit/:id', isLoggedIn, controller.editJournal);
router.get('/journals/delete/:id', isLoggedIn, controller.deleteJournal);
router.get('/journals/search', isLoggedIn, controller.searchJournals);

module.exports = router;
