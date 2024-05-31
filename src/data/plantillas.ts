import plantillasData from "./plantillas.json"

const plantillas = plantillasData.plantillas
const plantillasMap = new Map(plantillas.map(plantilla => [plantilla.id, plantilla]))

export { plantillas, plantillasMap }
