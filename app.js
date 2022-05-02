var os = require("os");
const { google } = require("googleapis");
const { save, readF, fileExist } = require("./services/fs");
const key = "HERE GOES YOU KEY";
const youtube = google.youtube("v3"); // initialize the Youtube API library

async function main(_err, words) {
  const jumps = 0
  const videos = words.toString().split(os.EOL)
  for (const video of videos) {
    await getRelated(video, jumps)
  }
}

async function getRelated(relatedToVideoId, jumps) {
  const fileName = `${relatedToVideoId}.${jumps}`
  if (!fileExist(fileName)) {
    try {
      const result = await youtube.search.list({
        type: "video",
        part: "snippet",
        key,
        relatedToVideoId
      });
      await save(result.data, fileName);
      if (jumps < 2) {
        for (const video of result.data.items) {
          await getRelated(video.id.videoId, jumps + 1)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = readF("./data/tratamento-precoce-top-200/videos.txt", main);
