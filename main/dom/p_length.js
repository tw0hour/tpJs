const p = document.querySelectorAll("p");
p.forEach(element=>{
    element.insertAdjacentHTML('afterbegin',element.innerText.length +' ')
});