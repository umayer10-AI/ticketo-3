'use server'
import { headers } from "next/headers"
import { auth } from "../auth"

const BasUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const getSerVer = async(path) => {
    const res = await fetch(`${BasUrl}${path}`)
    return res.json()
}

export const postSerVer = async(path,v,method) => {
    const res = await fetch(`${BasUrl}${path}`,{
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(v)
    })
    
    const data = await res.json()
    return data
}

export const ServerSession = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    return user || {}
}

export const deleteServer = async(path) => {
    const res = await fetch(`${BasUrl}${path}`,{
        method: 'DELETE'
    })
    return res.json()
}