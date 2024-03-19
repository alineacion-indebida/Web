type PatrocinadorId =
	| "Sercine"
	| "Duran"
	| "Osdama"
	| "Casaserra"
	| "Albia"
	| "Fantasmas"
	| "LiliCook"
	| "Guinaldo"
type PatrocinadorName =
	| "Sercine"
	| "Plasticos Duran"
	| "Osdama"
	| "Casaserra"
	| "Grupo Albia"
	| "Fantasmas en el desvan"
	| "LiliCook Gastrobar"
	| "Restaurante Guinaldo"

interface Patrocinador {
	id: PatrocinadorId
	name: PatrocinadorName
	url: string
	image: {
		width: number
		height: number
	}
	svg: boolean
}

export const PatrocinadoresList: Array<Patrocinador> = [
	{
		id: "Sercine",
		name: "Sercine",
		url: "https://sercine.com/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "Duran",
		name: "Plasticos Duran",
		url: "https://www.plasticosduran.com/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "Osdama",
		name: "Osdama",
		url: "https://www.instagram.com/osdama_salamanca/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "Casaserra",
		name: "Casaserra",
		url: "http://www.restaurantecasaserra.es/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "Albia",
		name: "Grupo Albia",
		url: "http://www.albia.es/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "Fantasmas",
		name: "Fantasmas en el desvan",
		url: "https://fantasmaseneldesvan.com/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "LiliCook",
		name: "LiliCook Gastrobar",
		url: "https://www.lilicook.es/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	},
	{
		id: "Guinaldo",
		name: "Restaurante Guinaldo",
		url: "https://restauranteguinaldo.com/",
		image: {
			width: 133,
			height: 38,
		},
		svg: false
	}
] as const