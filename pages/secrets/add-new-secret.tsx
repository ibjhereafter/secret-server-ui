import styles from '../../styles/secrets/secrets.module.css';
import React, { Fragment, FC, ReactElement, useState, SyntheticEvent} from 'react';
import { connect } from "react-redux";

import { startAddNewSecret } from "../../components/secrets/httpRequest";
import { AppState } from "../../components/secrets/types";


type Secret = string;
type FormError = string;
type ShowFormError = boolean;

type AddSecretsProps = {
    startAddNewSecret: typeof startAddNewSecret,
    error: boolean,
    errorMessage: string
}

const AddSecrets:FC<AddSecretsProps> = ({ startAddNewSecret, error, errorMessage }): ReactElement => {
    const [ secret, setSecret ] = useState<Secret>('');
    const [ formError, setFormError ] = useState<FormError>('');
    const [ showFormError, setShowFormError ] = useState<ShowFormError>(false);

    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!secret) {
            setFormError('Please, provide the secret text.');
            return setShowFormError(true);
        }

        startAddNewSecret(secret);
    }

    return (
        <Fragment>
            <section className={styles.container}>
                <h1>SECRETS</h1>
                <h3>Add A New Secret.</h3>
                {
                    showFormError ? <div><h1 className={styles.error}>{formError}</h1></div>: null
                }
                {
                    error ? <div className={styles.error}><h1>{errorMessage}</h1></div>: null
                }
                <form className={styles.form} onSubmit={onSubmit}>
                    <label htmlFor="secret">Secret Text</label>
                    <input type="text" id="secret" className={styles.input} value={secret} onChange={(event => setSecret(event.target.value))}/>
                    <button className={styles.button}>Add</button>
                </form>
            </section>
        </Fragment>
    );
};

const mapStatToProps = (state: AppState) => {
    return {
        error: state?.newSecret?.error,
        errorMessage: state?.newSecret?.errorMessage
    }
}

export default connect(mapStatToProps, { startAddNewSecret })(AddSecrets)
