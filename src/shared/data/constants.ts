export const avalibleImageTypes: string = [
	'image/jpeg',
	'image/png',
	'image/jpeg',
	'image/webp'
].join(',')
export const avalibleGifTypes: string = ['image/gif'].join(',')

export const urlMatcher =
	/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi