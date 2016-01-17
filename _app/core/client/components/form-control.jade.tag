form-control
  .form-group
    label(for='{opts.name}') {opts.label}
    input(
      type='{opts.type}' 
      class='form-control' 
      id='{opts.name}' 
      name='{opts.name}'
      placeholder='{opts.label}')

  script(type='coffee').
    @value = ->
      this[opts.name].value