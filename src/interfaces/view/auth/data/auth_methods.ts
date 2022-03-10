import User from '../domain/model/user_model';

export const getAllUsers = async () => {
    try {
        const users = await User.findAll();

        return { status: true, resp: 'ok', message: 'User get successfully', data: users, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'Users not founds', data: [], messageError: err }
    }
}

export const findUserById = async (uid: number) => {
    try {
        const userFound = await User.findByPk(uid);

        if (!userFound) return { status: false, resp: 'error', message: `Not exists user with id: ${uid}`, data: {}, messageError: null }

        return { status: true, resp: 'ok', message: `The user with id: ${uid} exists`, data: userFound, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'User not get successfully', data: {}, messageError: err }
    }
}

export const addUser = async (user: any) => {
    try {
        const { name, email, status } = user;

        const { status: statusResp, resp, data, message, messageError } = await existEmail(email);

        if (!statusResp) return { status: statusResp, resp, data, message, messageError }

        const userAdded = await User.create({ name: name, email: email, status: status })

        return { status: true, resp: 'ok', message: 'User added successfully', data: userAdded, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'Error in add user', data: {}, messageError: err }
    }
}

export const updateUserById = async (user: any, uid: number) => {
    try {
        const { name, email, status } = user;

        // const userFound = await User.findOne({ where: { email: email } });

        const userFound = await User.findOne({ where: { id: uid } });

        if (!userFound) return { status: false, resp: 'error', message: `User exist with email: ${email}`, data: {}, messageError: null };

        await userFound.update({ name, email, status });

        // TODO: ver si funciona con .save();
        // await userFound.save();

        return { status: true, resp: 'ok', message: 'Update user successfully', data: userFound, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'Error in updated user', data: {}, messageError: err }
    }
}

export const changeStateUserById = async (uid: number) => {
    try {
        const userFound = await User.findByPk(uid);

        if (!userFound) return { status: false, resp: 'error', message: `Not exists user with id: ${uid}`, data: userFound, messageError: null }

        await userFound.update({ status: false })

        return { status: true, resp: 'ok', message: 'Change state user successfully', data: userFound, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'Error in deleted user', data: {}, messageError: err }
    }
}

export const deleteUserById = async (uid: number) => {
    try {
        const userFound = await User.findByPk(uid);

        if (!userFound) return { status: false, resp: 'error', message: `Not exists user with id: ${uid}`, data: userFound, messageError: null }

        await userFound.destroy();

        return { status: true, resp: 'ok', message: 'Delete user successfully', data: userFound, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'Error in deleted user', data: {}, messageError: err }
    }
}

export const existEmail = async (email: string) => {
    try {
        const userFound = await User.findOne({ where: { email: email } });

        if (userFound) return { status: false, resp: 'error', message: `User exist with email: ${email}`, data: {}, messageError: null };

        return { status: true, resp: 'ok', message: 'User ', data: userFound, messageError: null }

    } catch (err) {
        return { status: false, resp: 'error', message: 'Error in find email', data: {}, messageError: err }
    }
}