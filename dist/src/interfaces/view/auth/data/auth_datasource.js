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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserByIdDataSource = exports.changeStateUserByIdDataSource = exports.updateUserByIdDataSource = exports.addUserDataSource = exports.findUserByIdDataSource = exports.getAllUsersDataSource = void 0;
const auth_methods_1 = require("./auth_methods");
const getAllUsersDataSource = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, auth_methods_1.getAllUsers)();
});
exports.getAllUsersDataSource = getAllUsersDataSource;
const findUserByIdDataSource = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, auth_methods_1.findUserById)(uid);
});
exports.findUserByIdDataSource = findUserByIdDataSource;
const addUserDataSource = (user) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, auth_methods_1.addUser)(user);
});
exports.addUserDataSource = addUserDataSource;
const updateUserByIdDataSource = (user, uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, auth_methods_1.updateUserById)(user, uid);
});
exports.updateUserByIdDataSource = updateUserByIdDataSource;
const changeStateUserByIdDataSource = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, auth_methods_1.changeStateUserById)(uid);
});
exports.changeStateUserByIdDataSource = changeStateUserByIdDataSource;
const deleteUserByIdDataSource = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, auth_methods_1.deleteUserById)(uid);
});
exports.deleteUserByIdDataSource = deleteUserByIdDataSource;
//# sourceMappingURL=auth_datasource.js.map