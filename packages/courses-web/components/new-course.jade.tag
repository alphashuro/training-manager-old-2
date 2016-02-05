new-course
  h2.page-header
    | Add a course

  .col-md-6.col-md-offset-3
    form( onsubmit='{save}' name='addCourseForm')
      form-control(
        type='text'
        name='title'
        label='Title'
        )
      form-control(
        type='text'
        name='description'
        label='Description')
      form-control(
        type='number'
        name='maxStudents'
        label='Max Students')

      button.btn.btn-success Save

  script( type='coffee' ).
    @save = (e) ->
      e.preventDefault()

      { title, description, maxStudents } = addCourseForm

      course =
        title: title.value
        description: description.value
        maxStudents: parseInt( maxStudents.value )

      opts.create course
