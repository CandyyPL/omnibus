export const stringToBase64 = (string) => {
  return btoa(string)
}

export const jsonToBase64 = (json) => {
  const jsonString = JSON.stringify(json)
  const encoded = new TextEncoder().encode(jsonString)

  return btoa(String.fromCharCode(...encoded))
}

export const base64ToString = (data) => {
  return atob(data)
}

export const base64ToJson = (data) => {
  const binaryString = atob(data)
  const utf8Bytes = new Uint8Array([...binaryString].map((char) => char.charCodeAt(0)))

  const jsonString = new TextDecoder().decode(utf8Bytes)
  return JSON.parse(jsonString)
}
