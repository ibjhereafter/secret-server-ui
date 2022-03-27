import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Secret } from "../types";

const INITIAL_STATE = {
    secret: {
        secretText: ''
    },
    error: false,
    errorMessage: ''
}

const secretSlice = createSlice({
    name: 'Secret',
    initialState: INITIAL_STATE,
    reducers: {
        getSecret(state, action: PayloadAction<Secret>) {
            state.secret = action.payload;
            state.errorMessage = '';
            state.error = false;
        },
        getSecretError(state, action: PayloadAction<string>) {
            state.error = true;
            state.errorMessage = action.payload;
        }
    }
});

const { actions, reducer: secretReducer } = secretSlice;
export const { getSecret, getSecretError } = actions;
export default secretReducer;