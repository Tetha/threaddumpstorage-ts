import axios from 'axios'

import {
    ThreaddumpHeader
} from './models'

export const threaddumpStorageAPI = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

export async function fetchThreadudmpHeaders(): Promise<ThreaddumpHeader[]> {
    const response = await threaddumpStorageAPI.get("/api/threaddumps")
    return (response.data as ThreaddumpHeader[])
}