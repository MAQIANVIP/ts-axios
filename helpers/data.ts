import { isPlainObject } from './util'

export function transformRequese (data:any):any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}