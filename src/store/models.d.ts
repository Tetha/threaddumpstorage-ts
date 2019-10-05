export interface ThreaddumpHeader {
    id: string
    application: string
    host: string
    uploadedAt: string
}

export interface ThreadHeader {
    id: string
    name: string
    javaId: string
    isDaemon: boolean
    prio: string,
    osPrio: string,
    tid: string,
    nid: string,
    nativeThreadState: string,
    conditionAddress: string,
    javaThreadState: string,
    javaStateClarification: string,
}

export interface ThreadPoolAnalysis {
    UnknownThreads: ThreadHeader[]
    ThreadPools: { [key:string]: ThreadHeader[] }
}