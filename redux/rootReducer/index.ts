import { combineReducers } from 'redux';
import addNewSecretReducer from "../../components/secrets/reducers/addNewSecretReducer";
import allSecretsReducer from "../../components/secrets/reducers/allSecretsReducer";
import secretReducer from "../../components/secrets/reducers/secretReducer";

const rootReducer = combineReducers({
    newSecret: addNewSecretReducer,
    allSecrets: allSecretsReducer,
    secret: secretReducer

});

export default rootReducer;