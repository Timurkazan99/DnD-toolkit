const abilities = {
  dexterity: ['acrobatics', 'sleightOfHand', 'stealth'],
  strength: ['athletics'],
  constitution: [],
  intelligence: ['investigation', 'history', 'arcana', 'nature', 'religion'],
  wisdom: ['perception', 'survival', 'medicine', 'insight', 'animalHandling'],
  charisma: ['performance', 'intimidation', 'deception', 'persuasion']
}

const getAbilities = (name) => abilities?.[name] || [];

export default getAbilities;