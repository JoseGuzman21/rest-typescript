import { findUserById, getAllUsers, addUser, updateUserById, deleteUserById,
    changeStateUserById } from './auth_methods';

export const getAllUsersDataSource = async () => {
    return await getAllUsers();
}

export const findUserByIdDataSource = async (uid: number) => {
    return await findUserById(uid);
}

export const addUserDataSource = async (user: any) => {
    return await addUser(user);
}

export const updateUserByIdDataSource = async (user: any, uid: number) => {
    return await updateUserById(user, uid);
}

export const changeStateUserByIdDataSource = async (uid: number) => {
    return await changeStateUserById(uid);
}

export const deleteUserByIdDataSource = async (uid: number) => {
    return await deleteUserById(uid);
}