import styles from '../../styles/secrets/secrets.module.css';
import React, { Fragment, FC, ReactElement, useState, useEffect } from 'react';
import Link from "next/link";
import { connect } from "react-redux";

import { startGetAllSecret } from "./httpRequest";

import ListSecrets from "./ListSecrets";
import {AppState} from "./types";

type ListSecretsProps = {
    startGetAllSecret: typeof startGetAllSecret,
    allSecrets: [{
        _id: string,
        hash: string,
    }]
}

const Secrets:FC<ListSecretsProps> = ({ allSecrets }): ReactElement => {
    return (
        <Fragment>
            <main className={styles.container}>
                <h1>SECRETS</h1>
                <Link href={'/secrets/add-new-secret'} passHref>
                    <button className={`${styles.button} ${styles.marginBottom}`}>Add New Secret</button>
                </Link>
                <ListSecrets secrets={allSecrets} />
            </main>
        </Fragment>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        allSecrets: state?.allSecrets?.secrets
    }
}

export default connect(mapStateToProps, { startGetAllSecret })(Secrets);
