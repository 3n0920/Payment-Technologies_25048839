const express = require('express');
const { isAdmin } = require('../middleware/auth');
const controller = require('../controllers/adminController');

const router = express.Router();

router.get('/admin/dashboard', isAdmin, controller.showDashboard);
router.get('/admin/users', isAdmin, controller.listUsers);
router.get('/admin/users/:id', isAdmin, controller.showUserDetails);
router.get('/admin/users/delete/:id', isAdmin, controller.deleteUser);

module.exports = router;
