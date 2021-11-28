const body = document.querySelector("body");
const firstChildTagName = body.firstElementChild.tagName;

const ol = document.createElement("ol");
body.appendChild(ol);

childs = Array.from(body.childNodes);


for(child of childs){
    //console.log(child);

    if(child.tagName===firstChildTagName){
        //const li = document.createElement("li");
        elements = document.querySelectorAll(child.tagName);
        console.log(elements);
        elements.foreEach(e=>{
            ol.appendChild(e);
        });

        
    }

    
}


///<h1>(.*?)</h1>/<li>$1</li>/gm