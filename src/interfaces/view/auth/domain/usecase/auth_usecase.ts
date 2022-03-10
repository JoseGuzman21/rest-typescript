import { getAllUsersDataSource, findUserByIdDataSource, addUserDataSource,
    updateUserByIdDataSource, changeStateUserByIdDataSource, deleteUserByIdDataSource } from "../../data/auth_datasource";

export const getAllUserUseCase = () => getAllUsersDataSource();

export const findUserByIdUseCase = (uid: number) => findUserByIdDataSource(uid);

export const addUserUseCase = (user: any) => addUserDataSource(user);

export const updateUserByIdUseCase = (user: any, uid: number) => updateUserByIdDataSource(user, uid);

export const changeStateUserByIdUseCase = (uid: number) => changeStateUserByIdDataSource(uid);

export const deleteUserByIdUseCase = (uid: number) => deleteUserByIdDataSource(uid);