// \\$\\s?\\d+\\.?\\d{0,2}
//className id
var prevClassNm = "";

var prevDom = null;

//mouse listener for move event
document.addEventListener("mousemove", function(e) {
    console.log("hi");
    var srcElement = e.srcElement;
    
    if(prevDom != null) {
        prevDom.classList.remove(prevClassNm);
    }
    console.log("class list" + srcElement.classList);
    srcElement.classList.add(prevClassNm);

    prevDom = srcElement;
    prevDom.onmouseover = function() {
        //display popup
    }
}, false);
