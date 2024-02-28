/**
 * 分页获取后台宝可梦数据
 * @param {Number} listNum 页数
 * @returns 宝可梦详情数据
 */
export const getPokemonList = async (listNum) => {
  const res = await fetch(`http://127.0.0.1:7000/pokemon/${listNum}`, {}).then(
    (res) => res.json()
  );
  return res;
};
