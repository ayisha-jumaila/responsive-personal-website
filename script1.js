document.getElementById("demo").innerHTML = 5 + 6;
const name=document.getElementById('name')
const password=document.getElementById('password')
const address=document.getElementById('address')
const form=document.getElementById('name')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    e.preventDefault()
})
