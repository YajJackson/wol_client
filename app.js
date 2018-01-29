$(()=> {
  $('#test-button').click(() => {
    console.log('clicked')
    $.get('http://localhost:3000/api/test').done(()=>console.log('Received Response'))
  })
})