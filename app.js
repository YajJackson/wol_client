$(()=> {
  $('#test-button').click(() => 
    $.get('http://localhost:3000/api/test').done((res) => alert(res))
  )

  $('#signup-form').submit((e) => {
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
      (data) => {console.log(JSON.parse(data))}, 
      (err) => {console.log(err)}
    )
  })
})