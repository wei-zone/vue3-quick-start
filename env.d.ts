/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly BASE_URL: string
    readonly MODE: string
    readonly VITE_BASE_URL: string
    readonly VITE_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
