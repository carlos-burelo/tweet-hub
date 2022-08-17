export const theme: any = {
	tw: {
		mention: 'rgb(0, 112, 243)',
		hashtag: 'rgb(0, 112, 243)',
		url: 'rgb(0, 112, 243)'
	},
	// 		--property: rgb(224, 108, 117)
	// --comment: rgb(127, 132, 142)
	// --string: rgb(152, 195, 121)
	// --keyword: rgb(198, 120, 221)
	// --class: rgb(229, 192, 123)
	// --entity: rgb(209, 154, 102)
	// --function: rgb(97, 175, 239)
	// --operator: rgb(86, 182, 194)
	ts: {
		properties: 'rgb(224, 108, 117)',
		strings: 'rgb(152, 195, 121)',
		functions: 'rgb(97, 175, 239)',
		operators: 'rgb(86, 182, 194)',
		equal: 'rgb(86, 182, 194)',
		comments: 'rgb(127, 132, 142)',
		keywords: 'rgb(198, 120, 221)',
		numbers: 'rgb(209, 154, 102)',
		booleans: 'rgb(209, 154, 102)',
		brackets: 'rgb(209, 154, 102)'
	}
}
export type Theme = keyof typeof theme
