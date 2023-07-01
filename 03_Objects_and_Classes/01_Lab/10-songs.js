function parseData(data) {
  class Song {
    constructor(type, name, title) {
      this.type = type;
      this.name = name;
      this.title = title
    }
  }

  let [songsCount, ...songsData] = data;
  let typeList = songsData.pop();
  let songsArray = [];
  for (const song of songsData) {
    let [type, name, time] = song.split('_');
    songsArray.push(new Song(type, name, time));
  }

  if (typeList === 'all') {
    songsArray.forEach((song) => console.log(song.name))
  } else {
    songsArray
      .filter((song) => song.type === typeList)
      .forEach((song) => console.log(song.name))
  }

}

parseData(
  [
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
  ]
)

parseData(
  [
    4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
  ]
)

parseData(
  [
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'
  ]
)