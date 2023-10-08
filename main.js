const btnForm = document.querySelector('#send-form')
const btnDismiss = document.querySelector('#btn-dismiss')

btnForm.addEventListener('click', (e)=> {
  e.preventDefault()
  let formInput = document.querySelector('#email')
  let emailValid = document.querySelector('#message')
  let modal = document.querySelector('#modal')
  let cardForm = document.querySelector('#card')
  
  if(formInput.value === ''){
    formInput.style.background='#f0b5b0'
    emailValid.style.display='block' 
  }
  else{
    modal.style.display='block'
    cardForm.style.display='none'
  }

})

btnDismiss.addEventListener('click', ()=> {
  location.reload()
})

