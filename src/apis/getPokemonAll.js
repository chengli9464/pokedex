export const getPokemonListAll = async () => {
  const res = await fetch('http://127.0.0.1:7000/pokemonAll').then((res) =>
    res.json()
  );
  return res;
};

export const getPokemonSort = async (method) => {
  const result = await fetch(
    `http://127.0.0.1:7000/pokemonSort/${method}`
  ).then((res) => res.json());
  return result;
};

export const getPokemonSortSlice = async (method) => {
  const result = await fetch(`http://127.0.0.1:7000/pokemonSort/${method}`)
    .then((res) => res.json())
    .then((res) => {
      const data = res.data;
      const result = chunkArray(data, 10);
      return result;
    });
  return result;
};

export const getPokemonListAllSlice = async () => {
  const result = await fetch('http://127.0.0.1:7000/pokemonAll')
    .then((res) => res.json())
    .then((res) => {
      const data = res.data;
      const dataNew = chunkArray(data, 10);
      return dataNew;
    });
  return result;
};

// 大数据分块函数
function chunkArray(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
}
