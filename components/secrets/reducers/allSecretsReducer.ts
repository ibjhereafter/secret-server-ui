import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    secrets: [{
        _id: '',
        hash: ''
    }],
    error: false,
    errorMessage: ''
}

const allSecretSlice = createSlice({
    name: 'All Secrets',
    initialState: INITIAL_STATE,
    reducers: {
        getAllSecret(state, action: PayloadAction<[]>) {
            state.secrets = action.payload;
            state.errorMessage = '';
            state.error = false;
        },
        getAllSecretError(state, action: PayloadAction<string>) {
            state.error = true;
            state.errorMessage = action.payload;
            state.secrets = [];
        }
    }
});

const { actions, reducer: allSecretsReducer } = allSecretSlice;
export const { getAllSecret, getAllSecretError } = actions;
export default allSecretsReducer;