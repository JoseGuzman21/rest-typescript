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
exports.deleteUser = exports.changeStateUserById = exports.putUser = exports.postUser = exports.getUserById = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../../domain/model/user_model"));
const auth_usecase_1 = require("../../domain/usecase/auth_usecase");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status, resp, message, data, messageError } = yield (0, auth_usecase_1.getAllUserUseCase)();
        if (!status)
            return res.status(400).json({ status, resp, message, data, messageError });
        return res.status(200).json({ status, resp, message, data });
    }
    catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: err, data: {}, messageError: err });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid } = req.params;
        const { status, resp, message, data, messageError } = yield (0, auth_usecase_1.findUserByIdUseCase)(parseFloat(uid));
        if (!status)
            return res.status(400).json({ status, resp, message, data });
        return res.status(200).json({ status, resp, message, data, messageError });
    }
    catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in get user by id', data: {}, messageError: err });
    }
});
exports.getUserById = getUserById;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { status: statusResp, resp, message, data, messageError } = yield (0, auth_usecase_1.addUserUseCase)(req.body);
        if (!statusResp)
            return res.status(400).json({ status: statusResp, resp, message, data, messageError });
        return res.status(201).json({ status: statusResp, resp, message, data });
    }
    catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in add user', data: {}, messageError: err });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid } = req.params;
        const { status, resp, message, data, messageError } = yield (0, auth_usecase_1.updateUserByIdUseCase)(req.body, parseFloat(uid));
        if (!status)
            return res.status(400).json({ status, resp, message, data, messageError });
        return res.status(200).json({ status, resp, message, data });
    }
    catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in update user', data: {}, messageError: err });
    }
});
exports.putUser = putUser;
const changeStateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uid } = req.params;
        const { status, resp, message, data, messageError } = yield (0, auth_usecase_1.changeStateUserByIdUseCase)(parseFloat(uid));
        if (!status)
            return res.status(400).json({ status, resp, message, data, messageError });
        return res.status(200).json({ status, resp, message, data });
    }
    catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in update user', data: {}, messageError: err });
    }
});
exports.changeStateUserById = changeStateUserById;
// changeStateUserByIdUseCase, deleteUserByIdUseCase
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid } = req.params;
    const userFound = yield user_model_1.default.findByPk(uid);
    if (!userFound)
        return res.status(400).json({ message: `User not exist with the uid: ${uid}` });
    yield userFound.update({ status: false });
    res.json({ uid: uid, message: 'delete user succesfully' });
});
exports.deleteUser = deleteUser;
//# sourceMappingURL=auth_controller.js.map