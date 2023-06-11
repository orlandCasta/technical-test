export const isEmpty = value =>
  value === null ||
  value === undefined ||
  (Array.isArray(value) && value.length === 0) ||
  (typeof value === 'string' && value.trim().length === 0) ||
  (typeof value === 'object' && Object.keys(value).length === 0)

export const isEmptyObject = o =>
  Object.keys(o).reduce(
    (res, k) => res && !(!!o[k] || o[k] === false || !isNaN(parseInt(o[k]))),
    true
  )

export const downloadFile = filename => response => {
  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
}

const concatURL = (base, param) => (base += `${param}/`)

export const baseURL =
  prefix =>
  (...args) =>
    args.reduce(concatURL, prefix)

export const parseQuery = queryString => {
  let query = {}
  let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&')
  for (let i = 0; i < pairs.length; i++) {
    let pair = pairs[i].split('=')
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }
  return query
}

export const getSafe = (fn, value = undefined) => {
  try {
    return fn()
  } catch (e) {
    return value
  }
}

export const generateMatrix = (numrows, numcols, initial) => {
  let arr = []
  for (let i = 0; i < numrows; ++i) {
    let columns = []
    for (let j = 0; j < numcols; ++j) {
      columns[j] = initial
    }
    arr[i] = columns
  }
  return arr
}

export const pick = (object, keys) => {
  return keys.reduce((obj, key) => {
    if (key.includes('.')) key = key.split('.')[0]
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      obj[key] = object[key]
    }
    return obj
  }, {})
}

export const shortTitle = word => {
  const substring = word.substring(0, 35)
  const cutText = word.length > 35 ? '...' : ''
  return substring + cutText
}
