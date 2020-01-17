import { Request, Response } from 'express'

/***************************************************************/
// Exports
/***************************************************************/

export default function () {

    return function (
        error: {
            code: number
            message: string
            stack: string[]
        },
        req: Request,
        _res: Response,
        next: Function
    ) {
        if (error) {
            const message = `${error.code ? `(${error.code}) ` : ''}Route: ${req.url} - ${error.message}`

            if (error.code === 404)
                console.log(message)
            else {
                console.error(message)
                console.error(error.stack)
            }
        }

        next(error)
    }
}
