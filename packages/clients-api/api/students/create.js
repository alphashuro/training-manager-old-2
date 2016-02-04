function create(student, cb) {
  Meteor.call( 'create/student', student, cb );
}

export default create;
