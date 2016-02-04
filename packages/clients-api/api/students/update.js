function update(student, cb) {
  Meteor.call( 'update/student', student, cb );
}

export default update;
