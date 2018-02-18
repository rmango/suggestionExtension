//className id
var prevClassNm = "popup";

var prevDom = null;

//mouse listener for move event
document.addEventListener("mousemove", function (e) {
    var scrolledPrice;
    //element that user is scrolling over
    var srcElement = e.srcElement;

    if (prevDom != null) {
        prevDom.classList.remove(prevClassNm);
    }
    var scrolledText = null;
    if(srcElement.childNodes[0] !== null) {
        scrolledText = srcElement.childNodes[0].nodeValue;
    }
    console.log("text: " + scrolledText);
    var pattern = new RegExp("\\$\\s?\\d+(\\.\\d{2})?");
    if (scrolledText != null && scrolledText.trim != "" && scrolledText.match(pattern)) {
        scrolledPrice = scrolledText.match(pattern)[0];
        console.log("price: " + scrolledPrice);

        //circle through children to see if span has already been added
        var alreadyAdded = false;
        if (srcElement.hasChildNodes) {
            console.log(srcElement.childNodes);
            //check to make sure hasn't been added to children
            for (var i = 0; i < srcElement.childNodes.length; i++) {
                //if(srcElement.childNodes[i].classList.length > 0 && srcElement.childNodes[i].className.split(' ').includes("popup")) {
                if (srcElement.childNodes[i].classList != null && srcElement.childNodes[i].classList.contains("popuptext")) {
                    alreadyAdded = true;
                }
            }
        }
        console.log("alreadyAdded: " + alreadyAdded);
        //show popup
        if (!alreadyAdded) {
            var popupSpan = document.createElement("span");
            popupSpan.innerHTML = "This is a price";
            popupSpan.classList += "popuptext";
            popupSpan.id = "myPopup";
            srcElement.appendChild(popupSpan);
            popupSpan.classList.toggle("show");
        }
    }

    //console.log("class list" + srcElement.classList);
    srcElement.classList.add(prevClassNm);

    prevDom = srcElement;

}, false);

