export interface ThreaddumpHeader {
    id: string
    application: string
    host: string
    uploadedAt: string
}

export interface ThreadHeader {
    Id: string
    Name: string
    JavaId: string
    IsDaemon: boolean
    Prio: string,
    OsPrio: string,
    Tid: string,
    Nid: string,
    NativeThreadState: string,
    ConditionAddress: string,
    JavaThreadState: string,
    JavaStateClarification: string,
}

export interface ThreadPoolAnalysis {
    UnknownThreads: ThreadHeader[]
    ThreadPools: { [key:string]: ThreadHeader[] }
}