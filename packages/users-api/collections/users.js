const Users = Meteor.users;

Users.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Users.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

export default Users;
