"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUser = exports.getUserById = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({ message: 'getUsers', data: users });
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const userFound = yield user_1.default.findByPk(uid);
    if (!userFound)
        res.status(404).json({ message: `Not exists user with id: ${uid}` });
    res.json({ message: 'get user by id', data: userFound });
});
exports.getUserById = getUserById;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { name, email, status } = body;
    const existEmail = yield user_1.default.findOne({
        where: { email: email }
    });
    if (existEmail)
        return res.status(400).json({ message: `User exist: ${email}` });
    const userAdded = yield user_1.default.create({ name: name, email: email, status: status });
    res.json({ message: 'post user', data: userAdded });
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const { body } = req;
    const { name, email, status } = body;
    const userFound = yield user_1.default.findByPk(uid);
    if (!userFound)
        return res.status(400).json({ message: `User not exist with the uid: ${uid}` });
    yield userFound.update({ name, email, status });
    res.json({ message: 'put user succesfully' });
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const userFound = yield user_1.default.findByPk(uid);
    if (!userFound)
        return res.status(400).json({ message: `User not exist with the uid: ${uid}` });
    // await userFound.destroy();
    yield userFound.update({ status: false });
    res.json({ uid: uid, message: 'delete user succesfully' });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=usuario.js.map