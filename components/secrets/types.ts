
export type AddNewSecret = {
    success: string
}

export type Secret = {
    secretText: string
}

export type Context = {
    params: {
        hash: string
    }
}


export type AppState = {
    newSecret: {
        error: boolean,
        errorMessage:string,
        successMessage: string
    }

    allSecrets: {
        secrets: [{
            _id: string,
            hash: string
        }]
    }

    secret: {
        secret: string
    }
}