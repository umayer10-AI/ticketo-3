import { headers } from "next/headers"
import { auth } from "../auth"

export const getSerSession = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    return user? user : null
}

export const getSerSessionBackend = async(email) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/user/${email}`)
    return res.json()
}