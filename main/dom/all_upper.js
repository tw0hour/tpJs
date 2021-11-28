function get(node){
    const childs = Array.from(node.childNodes)
    childs.forEach(element=>{
        if(element instanceof Text) element.data = element.data.toUpperCase();
        else get(element)
    });
}

get(document)