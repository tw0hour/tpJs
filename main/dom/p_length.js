const p = document.querySelectorAll("p");
p.forEach(element=>{
    element.insertAdjacentHTML('beforebegin',''+element.innerText.length)
});