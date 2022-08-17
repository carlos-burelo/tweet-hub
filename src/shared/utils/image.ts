export const parseFileList = (files: FileList): MediaStore[] => {
	const map = []
	const fileRawList = Array.from(files)
	for (const file of fileRawList) {
		const url = URL.createObjectURL(file)
		map.push({
			relativeUrl: url,
			raw: file,
			size: file.size
		})
	}
	return map
}
