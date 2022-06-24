let theme = 'day';

function change() {
    if (theme == 'day'){
        document.querySelector('link').href = 'style.css'
        document.querySelector('#sun').src = "moon.png"
        theme = 'night'
    }
    else {
     document.querySelector('link').href = 'style - копия.css'
        document.querySelector('#sun').src = "sun.png"
        theme = 'day'
    }
} 


window.onload = function() {
    document.querySelectorAll("img").forEach((x)=>{ x.classList.add('new')})
}  

