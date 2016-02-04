const Facilitators = new Mongo.Collection('facilitators');

Facilitators.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Facilitators.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default Facilitators;
