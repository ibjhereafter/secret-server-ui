import styles from '../../styles/secrets/secrets.module.css';
import React, { Fragment, FC, ReactElement, useEffect } from 'react';
import { connect} from "react-redux";
import { startGetSecret } from "../../components/secrets/httpRequest";
import { AppState, Secret, Context } from "../../components/secrets/types";
import Link from "next/link";

type DisplaySecretProps = {
    startGetSecret: typeof startGetSecret,
    secretText: Secret,
    hash: string
}

const DisplaySecret:FC<DisplaySecretProps> = ({ secretText, startGetSecret, hash }): ReactElement => {
    useEffect(() => {

        startGetSecret(hash);

    }, [hash, startGetSecret])

    return (
        <Fragment>
            <main className={styles.container}>
                <h1>SECRETS</h1>
                <Link href={'/'} passHref>
                    <button className={styles.button}>All Secrets</button>
                </Link>
                <p>Here is the secret: <strong>{secretText?.secretText}</strong></p>
            </main>
        </Fragment>
    );
};

const mapStateToProps = (state: AppState) => {
    return {
        secretText: state?.secret?.secret
    }
}

// @ts-ignore
export default connect(mapStateToProps, { startGetSecret })(DisplaySecret);

export async function getServerSideProps(context: Context) {
    return {
        props: {
            hash: context?.params?.hash
        }, // will be passed to the page component as props
    }
}
