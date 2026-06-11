'use client'
import { useSession } from "../auth-client";

export const ClientSession = () => {
    const { data: session} = useSession();
    const user = session?.user
    return user || {}
}