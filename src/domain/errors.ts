export class DomainError extends Error {
    constructor(public message: string) {
        super(message)
    }
}

export class NotFoundError extends Error {
    constructor() {
        super('Not found')
    }
}