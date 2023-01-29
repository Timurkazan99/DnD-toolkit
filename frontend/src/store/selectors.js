import {selectors as cardSelector} from "./reducers/CardSlice";
import {selectors as creatureSelector} from "./reducers/CreatureSlice";
import {selectors as abilitySelector} from "./reducers/AbilitiesSlice";

export const getModalName = (state) => state.ui.modalName;

export const getCardsByType = (state, type) => {
  return cardSelector.selectAll(state).filter((card) => card.type === type);
}

export const getCreaturesByEnemyId = (state, enemyId) => {
  const {creaturesIds} = cardSelector.selectById(state, enemyId);
  return creatureSelector.selectAll(state).filter(({id}) => creaturesIds.includes(id));
}

export const getAbilitiesByEnemyId = (state, enemyId) => {
  const {abilitiesIds} = cardSelector.selectById(state, enemyId);
  return abilitySelector.selectAll(state).filter(({id}) => abilitiesIds.includes(id));
}

export const getActiveCard = (state) => {
  const id = state.cards.active;
  return cardSelector.selectById(state, id);
}

export const getActiveAbility = (state) => {
  const id = state.abilities.active;
  return abilitySelector.selectById(state, id);
}