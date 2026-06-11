import { deleteServer, postSerVer } from "./server"

export const addOrganization = async(v) => {
    return postSerVer('/api/organizaion',v,'POST')
}

export const updateOrganization = async(v,id) => {
    return postSerVer(`/api/organizaion/${id}`,v,'PATCH')
}

export const eventAddOrganization = async(v) => {
    return postSerVer(`/api/event`,v,'POST')
}

export const eventUpdateOrganization = async(v,id) => {
    return postSerVer(`/api/event/${id}`,v,'PATCH')
}

export const eventDeleteOrganization = async(id) => {
    return await deleteServer(`/api/event/${id}`)
}