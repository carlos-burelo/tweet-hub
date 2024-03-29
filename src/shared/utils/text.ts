type ActiveToken = { word: string; range: number[] }

export function getActiveToken(input: string, cursorPosition: number): ActiveToken {
	// creamos un array temporal para guardar las palabras
	const words: { word: string; range: number[] }[] = []
	// recorremos el texto y lo separamos por espacios y saltos de línea
	input.split(/[\s\n]/).forEach((word, index) => {
		// recuperamos la palabra anterior
		const previous = words[index - 1]
		// calculamos el rango de la palabra
		// recuperamos el índice inicial de la palabra
		const start = index === 0 ? index : previous.range[1] + 1
		// recuperamos donde termina la palabra
		const end = start + word.length
		// guardamos la palabra y su rango en el texto
		words.push({ word, range: [start, end] })
	})

	// buscamos en qué palabra estamos dependiendo de la posición del cursor
	return words.find(
		({ range }) => range[0] <= cursorPosition && range[1] >= cursorPosition
	) as ActiveToken
}

export function render(str: string) {
	return str
		.replace(/\n/g, '<br>')
		.replace(/@\w+/g, '<mark>$&</mark>')
		.replace(/#\w+/g, '<mark>$&</mark>')
		.replace(/https?:\/\/[^\s]+/g, '<a href="$&" target="_blank"><mark>$&</mark></a>')
}
