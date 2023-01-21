import {selectors as cardSelector} from "./reducers/CardSlice";
import {selectors as creatureSelector} from "./reducers/CreatureSlice";

export const getCardsByType = (state, type) => {
  return cardSelector.selectAll(state).filter((card) => card.type === type);
}

export const getCreaturesByEnemyId = (state, enemyId) => {
  const {creaturesIds} = cardSelector.selectById(state, enemyId);
  return creatureSelector.selectAll(state).filter(({id}) => creaturesIds.includes(id));
}