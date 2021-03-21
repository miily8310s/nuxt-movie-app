import config from '@/nuxt.config'
const { baseURL, apiSecret } = config.publicRuntimeConfig

export const TRENDS_ALL_URL = `${baseURL}trending/all/week?api_key=${apiSecret}`
