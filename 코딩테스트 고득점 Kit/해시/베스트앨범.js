function solution(genres, plays) {
  let answer = [];

  const map = new Map();

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const play = plays[i];
    const isExist = map.get(genre);

    map.set(genre, isExist ? isExist + play : play);
  }

  const indexPlayTuple = plays.map((el, index) => [index, el]);
  const genrePlay = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);

  for (const [genre, play] of genrePlay) {
    const filteredGenrePlay = indexPlayTuple
      .filter((el, index) => {
        if (genres[index] === genre) return true;
      })
      .sort((a, b) => b[1] - a[1])
      .map(([key, value]) => key);

    const add =
      filteredGenrePlay.length === 1
        ? filteredGenrePlay
        : filteredGenrePlay.slice(0, 2);
    answer.push(...add);
  }

  return answer;
}

function betterSolution(genres, plays) {
  let genreTotalPlay = {};
  genres.forEach((genre, index) => {
    const isExist = genreTotalPlay[genre];
    genreTotalPlay[genre] = isExist ? isExist + plays[index] : plays[index];
  });

  const orderedSongs = genres
    .map((genre, index) => {
      return {
        genre: genre,
        index: index,
        play: plays[index],
      };
    })
    .sort((a, b) => {
      if (a.genre !== b.genre)
        return genreTotalPlay[b.genre] - genreTotalPlay[a.genre];
      if (a.play !== b.play) return b.play - a.play;
      return a.index - b.index;
    });

  const genreCnt = {};
  const answer = orderedSongs
    .filter(({ genre }) => {
      if (genreCnt[genre] === 2) return false;

      genreCnt[genre] = genreCnt[genre] ? genreCnt[genre] + 1 : 1;
      return true;
    })
    .map((el) => el.index);

  return answer;
}
