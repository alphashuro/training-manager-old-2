form-control
  .form-group
    label(for='{opts.name}') {opts.label}
    input(
      type='{opts.type}'
      class='form-control'
      id='{opts.name}'
      name='{opts.name}Input'
      placeholder='{opts.label}'
      value='{opts.value}')

  script(type='coffee').
    @value = -> @[@opts.name+Input].value
