course-detail
  h2.page-header
    | { data.course.title }

  .row
    .col-md-4
      h3.page-header Details

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

    .col-md-8
      h3.page-header Classes

      ul.list-group
        li.list-group-item( each='{data.classes}' )
          form
            .form-inline
              form-control(
                type='text'
                name='title'
                label='Title'
                value='{title}')
              form-control(
                type='text'
                name='description'
                label='Description'
                value='{description}')
            .form-inline
              form-control(
                type='number'
                name='duration'
                label='Duration'
                value='{duration}')
              form-control(
                type='number'
                name='price'
                label='Price'
                value='{price}')

            button.btn.btn-success Save
            button.btn.btn-warning(type='button' onclick='{remove}')
              i.glyphicon.glyphicon-trash

  script( type='coffee' ).
    @getMeteorData = ->
      Meteor.subscribe 'course', @opts.course_id

      course: App.Collections.Courses.findOne opts.course_id
      classes: App.Collections.Classes.find({ courseId: opts.course_id }).fetch()
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