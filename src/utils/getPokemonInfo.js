/**
 *
 * @param {Array} data 宝可梦数组对象
 * @returns 需要进行渲染的对象
 */

// data为传过来的data数组
export function getPokemonInfo(data) {
  const result = data.map((item) => {
    const { id, height, weight, name } = item;
    // 处理宝可梦属性
    const type =
      item.types.length === 2
        ? [item.types[0].type.name, item.types[1].type.name]
        : [item.types[0].type.name];
    // 处理种族值
    const statsArray = item.stats.map((subItem) => {
      return {
        [subItem.stat.name]: subItem.base_stat,
      };
    });
    const stats = statsArray.reduce((acc, obj) => {
      for (const key in obj) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
    // 处理特性
    const abilities = item.abilities.map((subItem) => {
      return {
        slot: subItem.slot,
        is_hidden: subItem.is_hidden,
        ability: subItem.ability.name,
      };
    });
    // 处理技能池
    function handleMoves(move) {
      let moveList = [];
      if (move === undefined) moveList = [];
      else if (move.length === 0) moveList = [];
      else {
        moveList = move.map((subItem) => {
          return {
            moveName: subItem.move.name,
            moveLearnMethod: Array.isArray(subItem.version_group_details)
              ? subItem.version_group_details[0].move_learn_method.name
              : subItem.version_group_details.move_learn_method.name,
          };
        });
      }
      return moveList;
    }
    // 四个地区的宝可梦技能
    const SV_moves = handleMoves(item.SV_moves);
    const BDSP_moves = handleMoves(item.BDSP_moves);
    const SWSH_moves = handleMoves(item.SWSH_moves);
    const USUM_moves = handleMoves(item.USUM_moves);
    // 处理地区形态宝可梦
    let differentForms = [];
    if (item.differentForm === undefined) differentForms = [];
    else {
      differentForms = getPokemonInfo(item.differentForm);
    }
    // 处理imageUrl
    const imgUrl = {
      official: item.imgUrl.other['official-artwork'],
      home: item.imgUrl.other.home,
    };
    return {
      id,
      name,
      height,
      weight,
      type,
      stats,
      abilities,
      SV_moves,
      BDSP_moves,
      SWSH_moves,
      USUM_moves,
      differentForms,
      imgUrl,
    };
  });
  return result;
}
