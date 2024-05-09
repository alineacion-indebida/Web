export function slugify(text: string): string {
	return text.toString().replace(/\s+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
}

export function deslugify(text: string): string {
	return text.toString().replace(/-/g, " ")
}
