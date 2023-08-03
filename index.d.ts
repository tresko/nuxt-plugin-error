import 'pinia'

declare module 'pinia' {
  export interface PiniaCustomProperties {
    get secret(): string
  }
}

export {}
