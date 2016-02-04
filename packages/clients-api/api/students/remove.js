function remove(_id, cb) {
  Meteor.call( 'remove/student', _id, cb );
}

export default remove;
