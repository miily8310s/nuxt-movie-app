import config from '@/nuxt.config'
const { baseURL, apiSecret } = config.publicRuntimeConfig

export const TRENDS_ALL_URL = `${baseURL}trending/all/week?api_key=${apiSecret}`
export const TRENDS_MOVIES_URL = `${baseURL}trending/movie/week?api_key=${apiSecret}`
export const TRENDS_SERIES_URL = `${baseURL}trending/tv/week?api_key=${apiSecret}`
