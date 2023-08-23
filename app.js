const search = document.querySelector('.search')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})
//toggle click yapıldığında kapalıysa açılır. Açık ise kapanmasını sağlayan
//eylemdir