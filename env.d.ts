/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_PORT?: string;
    VITE_AUTH_TOKEN?: string;
    VITE_APP_BASE_API?: string;
  }

interface ImportMeta {
    readonly env: ImportMetaEnv;
}