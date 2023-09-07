function youtubeViewCount(video_id: string) {
  const API_KEY = 'XXX-XXX-XXX-XXX'
  const endpoint = `https://www.googleapis.com/youtube/v3/videos?id=${video_id}&key=${API_KEY}&part=snippet,statistics`
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        /**
         * We return the first item of the array
         * If we insert the parameter statistics at the youtube API endpoint
         * then an object with the below structure is returned from the API call
         *
         * commentCount: string
         * favoriteCount: string
         * likeCount: string
         * viewCount: string
         */
        resolve(data.items[0])
      })
      .catch((error) => {
        reject(error)
      })
  })
}

async function getYouTubeViewCount(video_id: string) {
  // We destructure the statistics object and then access viewCount property as described ton api call method above
  const { statistics }: Array<number> | any = await youtubeViewCount(video_id)
  if (statistics) {
    return statistics.viewCount
  }
}

// Call the function to get the views count
getYouTubeViewCount('VIDEO_ID-XXX-XXX').then((viewsCount) => {
  return viewsCount
})
