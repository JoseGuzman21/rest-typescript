"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
router.get('/', usuario_1.getUsers);
router.get('/:uid', usuario_1.getUserById);
router.post('/', usuario_1.postUser);
router.put('/:uid', usuario_1.putUser);
router.delete('/:uid', usuario_1.deleteUser);
exports.default = router;
//# sourceMappingURL=usuario.js.map