type PatrocinadorId =
	| "alsa1"
	| "alsa2"
	| "alsa3"
type PatrocinadorName =
	| "Alsa"

interface Patrocinador {
	id: PatrocinadorId
	name: PatrocinadorName
	url: string
	image: {
		width: number
		height: number
	}
}

export const PatrocinadoresList: Array<Patrocinador> = [
	{
		id: "alsa1",
		name: "Alsa",
		url: "https://alsa.es/",
		image: {
			width: 133,
			height: 38,
		},
	},
	{
		id: "alsa2",
		name: "Alsa",
		url: "https://alsa.es/",
		image: {
			width: 133,
			height: 38,
		},
	},
	{
		id: "alsa3",
		name: "Alsa",
		url: "https://alsa.es/",
		image: {
			width: 133,
			height: 38,
		},
	}
] as const