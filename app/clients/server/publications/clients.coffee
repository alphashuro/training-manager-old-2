Meteor.publishComposite 'clients', {
  find: ->
    return Clients.find( { owner: @userId } )
  children: [
    {
      find: ( client ) ->
        return Students.find { clientId: client._id }
    }
  ]
}

Meteor.publishComposite 'client', {
  find: ( _id ) ->
    return Clients.find( { _id, owner: @userId } )
  children: [
    {
      find: ( client ) ->
        return Students.find { clientId: client._id }
    }
  ]
}