function solution(genres, plays) {
  const genreTotalPlay = new Map();
  genres.forEach((genre, index) => {
    const setValue = genreTotalPlay.has(genre)
      ? genreTotalPlay.get(genre) + plays[index]
      : plays[index];

    genreTotalPlay.set(genre, setValue);
  });

  const orderedSongs = genres
    .map((genre, index) => {
      return {
        index: index,
        genre: genre,
        play: plays[index],
      };
    })
    .sort((a, b) => {
      if (a.genre !== b.genre) {
        return genreTotalPlay.get(b.genre) - genreTotalPlay.get(a.genre);
      }

      if (a.play !== b.play) {
        return b.play - a.play;
      }

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
