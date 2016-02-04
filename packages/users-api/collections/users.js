Meteor.users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Meteor.users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});
