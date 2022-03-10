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
exports.existEmail = exports.deleteUserById = exports.changeStateUserById = exports.updateUserById = exports.addUser = exports.findUserById = exports.getAllUsers = void 0;
const user_model_1 = __importDefault(require("../domain/model/user_model"));
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_model_1.default.findAll();
        return { status: true, resp: 'ok', message: 'User get successfully', data: users, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'Users not founds', data: [], messageError: err };
    }
});
exports.getAllUsers = getAllUsers;
const findUserById = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield user_model_1.default.findByPk(uid);
        if (!userFound)
            return { status: false, resp: 'error', message: `Not exists user with id: ${uid}`, data: {}, messageError: null };
        return { status: true, resp: 'ok', message: `The user with id: ${uid} exists`, data: userFound, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'User not get successfully', data: {}, messageError: err };
    }
});
exports.findUserById = findUserById;
const addUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, status } = user;
        const { status: statusResp, resp, data, message, messageError } = yield (0, exports.existEmail)(email);
        if (!statusResp)
            return { status: statusResp, resp, data, message, messageError };
        const userAdded = yield user_model_1.default.create({ name: name, email: email, status: status });
        return { status: true, resp: 'ok', message: 'User added successfully', data: userAdded, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'Error in add user', data: {}, messageError: err };
    }
});
exports.addUser = addUser;
const updateUserById = (user, uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, status } = user;
        // const userFound = await User.findOne({ where: { email: email } });
        const userFound = yield user_model_1.default.findOne({ where: { id: uid } });
        if (!userFound)
            return { status: false, resp: 'error', message: `User exist with email: ${email}`, data: {}, messageError: null };
        yield userFound.update({ name, email, status });
        // TODO: ver si funciona con .save();
        // await userFound.save();
        return { status: true, resp: 'ok', message: 'Update user successfully', data: userFound, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'Error in updated user', data: {}, messageError: err };
    }
});
exports.updateUserById = updateUserById;
const changeStateUserById = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield user_model_1.default.findByPk(uid);
        if (!userFound)
            return { status: false, resp: 'error', message: `Not exists user with id: ${uid}`, data: userFound, messageError: null };
        yield userFound.update({ status: false });
        return { status: true, resp: 'ok', message: 'Change state user successfully', data: userFound, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'Error in deleted user', data: {}, messageError: err };
    }
});
exports.changeStateUserById = changeStateUserById;
const deleteUserById = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield user_model_1.default.findByPk(uid);
        if (!userFound)
            return { status: false, resp: 'error', message: `Not exists user with id: ${uid}`, data: userFound, messageError: null };
        yield userFound.destroy();
        return { status: true, resp: 'ok', message: 'Delete user successfully', data: userFound, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'Error in deleted user', data: {}, messageError: err };
    }
});
exports.deleteUserById = deleteUserById;
const existEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield user_model_1.default.findOne({ where: { email: email } });
        if (userFound)
            return { status: false, resp: 'error', message: `User exist with email: ${email}`, data: {}, messageError: null };
        return { status: true, resp: 'ok', message: 'User ', data: userFound, messageError: null };
    }
    catch (err) {
        return { status: false, resp: 'error', message: 'Error in find email', data: {}, messageError: err };
    }
});
exports.existEmail = existEmail;
//# sourceMappingURL=auth_methods.js.map