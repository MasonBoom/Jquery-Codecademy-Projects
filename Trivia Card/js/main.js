$(document).ready(() =>{
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(500)
    })
  
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut('slow')
      $('.frown').show()
      $('.smiley').hide()
    })
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut('slow')
      $('.frown').show()
      $('.smiley').hide()
    })
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut('slow')
      $('.frown').show()
      $('.smiley').hide()
    })
  
    $('.correct-answer').on('click', () => {
      $('.correct-answer').fadeOut('slow')
      $('.frown').hide()
      $('.smiley').show()
    })
  });