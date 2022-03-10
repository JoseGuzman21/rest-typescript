import { Request, Response } from "express";
import User from "../../domain/model/user_model";
import {
    getAllUserUseCase, findUserByIdUseCase, addUserUseCase,
    updateUserByIdUseCase, changeStateUserByIdUseCase, deleteUserByIdUseCase
} from "../../domain/usecase/auth_usecase";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const { status, resp, message, data, messageError } = await getAllUserUseCase();

        if (!status) return res.status(400).json({ status, resp, message, data, messageError });

        return res.status(200).json({ status, resp, message, data })
    } catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: err, data: {}, messageError: err })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { uid } = req.params;

        const { status, resp, message, data, messageError } = await findUserByIdUseCase(parseFloat(uid));

        if (!status) return res.status(400).json({ status, resp, message, data });

        return res.status(200).json({ status, resp, message, data, messageError });
    } catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in get user by id', data: {}, messageError: err })
    }
}

export const postUser = async (req: Request, res: Response) => {
    try {
        const { status: statusResp, resp, message, data, messageError } = await addUserUseCase(req.body);

        if (!statusResp) return res.status(400).json({ status: statusResp, resp, message, data, messageError });

        return res.status(201).json({ status: statusResp, resp, message, data });

    } catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in add user', data: {}, messageError: err })
    }
}

export const putUser = async (req: Request, res: Response) => {
    try {
        const { uid } = req.params;

        const { status, resp, message, data, messageError } = await updateUserByIdUseCase(req.body, parseFloat(uid));

        if (!status) return res.status(400).json({ status, resp, message, data, messageError });

        return res.status(200).json({ status, resp, message, data });

    } catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in update user', data: {}, messageError: err })
    }
}

export const changeStateUserById = async (req: Request, res: Response) => {
    try {
        const { uid } = req.params;

        const { status, resp, message, data, messageError } = await changeStateUserByIdUseCase(parseFloat(uid));

        if (!status) return res.status(400).json({ status, resp, message, data, messageError });

        return res.status(200).json({ status, resp, message, data });

    } catch (err) {
        return res.status(400).json({ status: false, resp: 'error', message: 'Error in update user', data: {}, messageError: err })
    }
}

// changeStateUserByIdUseCase, deleteUserByIdUseCase
export const deleteUser = async (req: Request, res: Response) => {
    const { uid } = req.params;

    const userFound = await User.findByPk(uid);

    if (!userFound) return res.status(400).json({ message: `User not exist with the uid: ${uid}` })

    await userFound.update({ status: false })

    res.json({ uid: uid, message: 'delete user succesfully' })
}

