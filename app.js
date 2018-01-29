$(()=> {
  $('#test-button').click(() => 
    $.get('http://localhost:3000/api/test').done(() => console.log('Received Response'))
  )
})