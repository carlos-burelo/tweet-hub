const langs = {
	js: {
		equa: /(\b=\b)/g,
		quot: /((&#39;.*?&#39;)|(&#34;.*?&#34;)|(".*?(?<!\\)")|('.*?(?<!\\)')|`)/g,
		comm: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*))/g,
		logi: /(%=|%|\-|\+|\*|&amp;{1,2}|\|{1,2}|&lt;=|&gt;=|&lt;|&gt;|!={1,2}|={2,3})/g,
		numb: /(\d+(\.\d+)?(e\d+)?)/g,
		func: /(?<=^|\s*)(async|import|export|await|console|alert|Math|Object|Array|String|class(?!\s*\=)|function)(?=\b)/g,
		decl: /(?<=^|\s*)(var|let|const)/g,
		pare: /(\(|\))/g,
		squa: /(\[|\])/g,
		curl: /(\{|\})/g
	},
	ts: {
		properties: /(?<=\()(.*?)(?=\))/g,
		strings: /((&#39;.*?&#39;)|(&#34;.*?&#34;)|(".*?(?<!\\)")|('.*?(?<!\\)')|`)/g,
		functions: /(\w+)(?=\()/g,
		operators: /(%=|%|\-|\+|\*|&amp;{1,2}|\|{1,2}|&lt;=|&gt;=|&lt;|&gt;|!={1,2}|={2,3})/g,
		equal: /(\b=\b)/g,
		comments: /((\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*))/g,
		keywords:
			/(?<=^|\s*)(async|import|export|const|new|return|as|type|interface|await|var|let|from|class(?!\s*\=)|function)(?=\b)/g,
		numbers: /(\d+(\.\d+)?(e\d+)?)/g,
		booleans: /(false|true)/g,
		brackets: /(\(|\)|\[|\]|\{|\})/g
	},
	html: {
		tags: /(?<=&lt;(?:\/)?)(\w+)(?=\s|\&gt;)/g,
		angl: /(&lt;\/?|&gt;)/g,
		attr: /((?<=<i class=html_tags>\w+<\/i>)[^<]+)/g
	},
	tw: {
		mention: /(@\w+)/g,
		hashtag: /(#\w+)/g,
		url: /(https?:\/\/[^\s]+)/g
	}
}
type Lang = keyof typeof langs
export { langs, type Lang }
