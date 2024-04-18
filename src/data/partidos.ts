import partidosData from "./partidos.json"

const partidos = partidosData.partidos
const partidosMap = new Map(partidos.map(partido => [partido.slug, partido]))

export { partidos, partidosMap }
