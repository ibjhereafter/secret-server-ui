import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    error: false,
    errorMessage: '',
    successMessage: ''
}

const addNewSecretSlice = createSlice({
    name: 'Add New Secret',
    initialState: INITIAL_STATE,
    reducers: {
        addNewSecret(state, action: PayloadAction<string>) {
            state.successMessage = action.payload;
            state.errorMessage = '';
            state.error = false;
        },
        addNewSecretError(state, action: PayloadAction<string>) {
            state.error = true;
            state.successMessage = '';
            state.errorMessage = action.payload;
        }
    }
});

const { actions, reducer: addNewSecretReducer } = addNewSecretSlice;
export const { addNewSecret, addNewSecretError } = actions;
export default addNewSecretReducer;