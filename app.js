$(()=> {
  $('#test-button').click(() => 
    $.get('http://localhost:3000/api/test').done((res) => alert(res))
  )

  $('#signup-form').submit(e => {
    e.preventDefault()
    $.post(
      'http://localhost:3000/api/user/signup',
      { 
        user: {
          username:$('#signup-input-username').val(), 
          password:$('#signup-input-password').val()
        }
      }
    ).then(
      data => {
        console.log(data)
        $('#signupModal').modal('hide')
      }, 
      err => console.log(err)
    )
  })

  $('#shoe-form').submit(e => {
    e.preventDefault()
    $.post(
      'http://localhost:3000/api/shoe',
      {
        shoe:{
          type: $('#shoe-input-type').val(),
          name: $('#shoe-input-name').val(),
          url: $('#shoe-input-url').val()
        }
      }
    ).then(
      data => {
        console.log(data)
        $('#shoeModal').modal('hide')
      },
      err => console.log(err)
    )
  })
})