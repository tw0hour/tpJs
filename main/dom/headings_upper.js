const titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
titles.forEach(element=>{
    element.innerHTML = element.innerHTML.toUpperCase()
});