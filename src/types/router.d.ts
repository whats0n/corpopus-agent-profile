import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    header?: {
      buttons?: boolean
      theme?: 'light' | 'dark'
      style?: Record<string, string | number>
    }
  }
}
