import partidosData from "./partidos.json"

const partidos = partidosData.partidos
const partidosMap = new Map(partidos.map(partido => [partido.slug, partido]))
const partidosNext = partidos.filter(partido => new Date(partido.date) > new Date())

export { partidos, partidosMap, partidosNext }
