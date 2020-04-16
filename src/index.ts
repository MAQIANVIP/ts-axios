import { AxiosRequestConfig } from './types'
import { transformRequese } from '../helpers/data'
import { bulidURL } from '../helpers/url'
import xhr from './xhr'

function axios (config: AxiosRequestConfig) {
  processConfig(config)
  xhr(config)
}

function transformUrl (config:AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

function processConfig (config: AxiosRequestConfig):void {
  config.url = transformUrl(config)
  config.data = transformRequeseData(config)
}

function transformRequeseData(config:AxiosRequestConfig) {
  return transformRequese(config.data)
}

export default axios
