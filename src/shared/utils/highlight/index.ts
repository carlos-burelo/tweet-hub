import { type Lang, langs } from './languages'
import { theme } from './theme'

type Tokenizer = (str: string, e: Lang) => string

export const tokenizer: Tokenizer = (str, lang) => {
	const rules: any = langs[lang] // Extract object from lang regexes dictionary
	Object.keys(rules).forEach(key => {
		str = str.replace(rules[key], `<span style="color: ${theme[lang][key]};">$1</span>`)
	})
	return str
}
