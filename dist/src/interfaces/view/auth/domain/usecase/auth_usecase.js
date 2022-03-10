"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserByIdUseCase = exports.changeStateUserByIdUseCase = exports.updateUserByIdUseCase = exports.addUserUseCase = exports.findUserByIdUseCase = exports.getAllUserUseCase = void 0;
const auth_datasource_1 = require("../../data/auth_datasource");
const getAllUserUseCase = () => (0, auth_datasource_1.getAllUsersDataSource)();
exports.getAllUserUseCase = getAllUserUseCase;
const findUserByIdUseCase = (uid) => (0, auth_datasource_1.findUserByIdDataSource)(uid);
exports.findUserByIdUseCase = findUserByIdUseCase;
const addUserUseCase = (user) => (0, auth_datasource_1.addUserDataSource)(user);
exports.addUserUseCase = addUserUseCase;
const updateUserByIdUseCase = (user, uid) => (0, auth_datasource_1.updateUserByIdDataSource)(user, uid);
exports.updateUserByIdUseCase = updateUserByIdUseCase;
const changeStateUserByIdUseCase = (uid) => (0, auth_datasource_1.changeStateUserByIdDataSource)(uid);
exports.changeStateUserByIdUseCase = changeStateUserByIdUseCase;
const deleteUserByIdUseCase = (uid) => (0, auth_datasource_1.deleteUserByIdDataSource)(uid);
exports.deleteUserByIdUseCase = deleteUserByIdUseCase;
//# sourceMappingURL=auth_usecase.js.map