export interface Albums {
    userId: number
    id: number
    title: string
}

export interface Foto {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}