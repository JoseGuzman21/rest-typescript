"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth_controller");
const router = (0, express_1.Router)();
router.get('/', auth_controller_1.getUsers);
router.get('/:uid', auth_controller_1.getUserById);
router.post('/', auth_controller_1.postUser);
router.put('/:uid', auth_controller_1.putUser);
router.delete('/:uid', auth_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=auth_routes.js.map