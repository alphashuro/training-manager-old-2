const Classes = new Mongo.Collection('classes');

Classes.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Classes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

export default Classes;
