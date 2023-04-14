import { createSelector } from '@reduxjs/toolkit';
import { selectors as cardSelector } from './reducers/CardSlice';
import { selectors as creatureSelector } from './reducers/CreatureSlice';
import { selectors as abilitySelector } from './reducers/AbilitiesSlice';

export const getModalName = (state) => state.ui.modalName;

export const makeGetCardsByType = () => createSelector(
  [cardSelector.selectAll, (_, type) => type],
  (cards, type) => cards.filter((card) => card.type === type)
    .map(({ initiative, ...card }) => card),
);

export const makeGetCreaturesByEnemyId = () => createSelector(
  [cardSelector.selectById, creatureSelector.selectAll],
  (enemy, creatures) => {
    const { creaturesIds } = enemy;
    return creatures.filter(({ id }) => creaturesIds.includes(id));
  },
);

export const makeGetAbilitiesByEnemyId = () => createSelector(
  [abilitySelector.selectAll, (_, enemyId) => enemyId],
  (abilities, enemyId) => abilities.filter((ability) => enemyId === ability.enemyId),
);

export const getActiveCard = (state) => {
  const id = state.cards.active;
  return cardSelector.selectById(state, id);
};

export const getActiveAbility = (state) => {
  const id = state.abilities.active;
  return abilitySelector.selectById(state, id);
};
