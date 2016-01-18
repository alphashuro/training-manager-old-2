course-detail
  h4.page-header
    | { data.course.title }

  .row
    .col-md-6
      form(onsubmit='{save}' name='editCourseForm')
        form-control(
          type='text'
          name='title'
          label='Title'
          value='{data.course.title}' )
        form-control(
          type='text'
          name='description'
          label='Description'
          value='{data.course.description}' )
        form-control(
          type='number'
          name='maxStudents'
          label='Max Students'
          value='{data.course.maxStudents}')

        button.btn.btn-success Save

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'course', @opts.course_id

      course: App.Collections.Courses.findOne opts.course_id
    @mixin 'RiotMeteorData'

    @save = (e) ->
      e.preventDefault()

      { title, description, maxStudents } = @editCourseForm

      App.api.courses.update {
        _id: @opts.course_id,  
        title: title.value
        description: description.value 
        maxStudents: parseInt(maxStudents.value)
      }