import styles from '../../styles/secrets/list.module.css';
import React, { Fragment, FC, ReactElement, useEffect } from 'react';
import { connect } from "react-redux";
import Link from "next/link";

import { startGetAllSecret } from "./httpRequest";

type ListSecretsProps = {
    startGetAllSecret: typeof startGetAllSecret,
    secrets: [{
        _id: string,
        hash: string,
    }]
}


const ListSecrets:FC<ListSecretsProps> = ({ secrets, startGetAllSecret }): ReactElement => {
    useEffect(() => {
        startGetAllSecret();
    }, [startGetAllSecret])

    const list = secrets?.map((secret) => {
        return (<div key={secret?._id} className={styles.listItem}>
                    <Link href={`/secrets/${secret?.hash}`} passHref>
                        <div>{secret?.hash}</div>
                    </Link>
                </div>
        )
    })

    return (
        <Fragment>
            {
                secrets?.length > 0 ? <div>{list}</div> : <div>There is {secrets?.length} unexpired secret!</div>
            }
        </Fragment>
    );
};

export default connect(null, { startGetAllSecret })(ListSecrets);
