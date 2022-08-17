declare global {
	interface ImportMetaEnv {
		API_KEY: string
		AUTH_DOMAIN: string
		PROJECT_ID: string
		STORAGE_BUCKET: string
		MESSAGING_SENDER_ID: string
		APP_ID: string
	}
	// for semantic
	type ID = string // use default firestore id
	type DateTime = string
	type Markup = string
	type Float = number
	type Int = number
	type Image = string
	type Url = string
	type Enviroment = 'private' | 'public'
	type Primitives = string | number | boolean
}

export { }
