import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string"

export function encodeShareState(state: any) {
  return compressToEncodedURIComponent(JSON.stringify(state))
}

export function decodeShareState(code: string) {
  const json = decompressFromEncodedURIComponent(code)
  return json ? JSON.parse(json) : null
}
