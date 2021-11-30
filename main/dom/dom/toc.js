var toc = "";
var level = 0;

const regex = /<h([\d]).*?>([^<]+)<\/h[\d]>/gi;
const str = document.getElementsByTagName("body")[0].innerHTML;
let m;

while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }

    if (m[1] > level) {
        toc += (new Array(m[1]  - level + 1)).join("<ul>");
    } else if (m[1]  < level) {
        toc += (new Array(level - m[1]  + 1)).join("</ul>");
    }

    level = parseInt(m[1] );

    toc += "<li>" + m[2]  + "</li>";
}
if (level) {
    toc += (new Array(level + 1)).join("</ul>");
}
document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin',toc +'<br>');