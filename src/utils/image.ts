import type { MediaInput } from "#shared/types"

export const parseFileList = (files: FileList): MediaInput[] => {
  const map = []
  const fileRawList = Array.from(files)
  for (const file of fileRawList) {
    const url = URL.createObjectURL(file)
    map.push({
      url,
      raw: file,
      size: file.size,
    })
  }
  return map
}