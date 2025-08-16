type FileData = {
    path: string
    content: string
}

type DbData = {
    connUrl: string
    credentials: string
}

type Status = {
    isOpen: boolean
    errorMsg?: string
}

type AccessedFileData = FileData & Status
type AccessedDbData = DbData & Status


interface FD{
    p:string
    c: string
}

interface SS{
    iO:boolean
    errMsg?: string
}

interface Accessed extends FD, SS {}

class Person{}