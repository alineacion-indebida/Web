import videosData from "./videos.json"

const videos = videosData.videos
const videosMap = new Map(videos.map(video => [video.slug, video]))

export { videos, videosMap }
