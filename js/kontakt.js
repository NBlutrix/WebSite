const ime = document.getElementById('ime')
const email = document.getElementById('email')
const forma = document.getElementsByClassName('contact-form')

forma.addEventListener('submit' (e) => {

    let messages = []
    if(ime.value === '' || ime.value == null) {

        maessages.push('Name is required')
    }

    if(messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join('. ')
    }
})

