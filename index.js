const imgAll = document.querySelectorAll('.img-can')
const main = document.querySelector('.main')
const can1 = document.querySelector('.can1')
const can2 = document.querySelector('.can2')
const can3 = document.querySelector('.can3')
const pepsi = document.querySelector('.pepsi')
var div = document.querySelector('.button')



main.addEventListener('click', (e)=>{
    if (e.target == can1 ) {
        document.body.style.backgroundColor = 'rgb(241, 172, 45)'        
        div.style.color = 'rgb(241, 172, 45)'
        div.style.backgroundColor = 'white'
        pepsi.src = 'pepsiBlue.png'
    }else if (e.target == can2) {
        document.body.style.backgroundColor = 'black'
        div.style.color = 'black'
        // div.style.backgroundColor = 'red'
        pepsi.src = 'pepsiBlack.png'
        
    }else if (e.target == can3) {
        document.body.style.backgroundColor = 'red'
        div.style.color = 'red'
        // div.style.backgroundColor = 'black'
        pepsi.src = 'pepsiGray.png'
    }else{
        document.body.style.backgroundColor = 'rgb(241, 172, 45)'        
    }
})