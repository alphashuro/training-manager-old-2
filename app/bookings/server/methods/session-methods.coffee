Meteor.methods({
  'update/session': (_id, { date }) ->
    Sessions.update(
      _id,
      {
        $set: { date }
      }
    )
})
