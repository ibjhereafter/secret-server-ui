import axios from "axios";
import { Dispatch } from "redux";
import Router from "next/router";

import { addNewSecret, addNewSecretError } from "./reducers/addNewSecretReducer";
import { AddNewSecret } from "./types";
import { getAllSecret, getAllSecretError } from "./reducers/allSecretsReducer";
import { getSecret, getSecretError } from "./reducers/secretReducer";


const baseUrl = `http://localhost:5000`;

export const startGetAllSecret = (): Function => {
    return async (dispatch: Dispatch) => {
        try {
            const url = `${baseUrl}/secrets`;
            const { data } = await axios.get(url);
            dispatch(getAllSecret(data));
        } catch (error: any) {
            if (error.response) {
                dispatch(getAllSecretError(error.response.data.error))
            }
        }
    }
}

export const startGetSecret = (hash: string): Function => {
    return async (dispatch: Dispatch) => {
        try {
            const url = `${baseUrl}/secrets/${hash}`;
            const { data } = await axios.get(url);
            dispatch(getSecret(data));
        } catch (error: any) {
            if (error.response) {
                dispatch(getSecretError(error.response.data.error))
            }
        }
    }
}

export const startAddNewSecret = (secretText: string): Function => {
    return async (dispatch: Dispatch) => {
        try {
            const url = `${baseUrl}/secrets`;
            const { data } = await axios.post<AddNewSecret>(url, {secretText});
            dispatch(addNewSecret(data?.success));
            await Router.push('/');

        } catch (error: any) {
            if (error.response) {
                dispatch(addNewSecretError(error.response.data.error));
            }
        }
    }
}