// \\$\\s?\\d+\\.?\\d{0,2}

/*chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response.farewell);
  });

chrome.extension.getBackgroundPage().console.log("hi");
/*document.addEventListener("DOMContentLoaded", function() {
    console.log("im running");

});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });

*/
//className id
var prevClassNm = "crx_mouse_visited";

var prevDom = null;

//mouse listener for move event
document.addEventListener("mousemove", function(e) {
    var scrolledPrice;
    //element that user is scrolling over
    var srcElement = e.srcElement;
    
    if(prevDom != null) {
        prevDom.classList.remove(prevClassNm);
    }
    var scrolledText = srcElement.childNodes[0].nodeValue;
    console.log("text: " + scrolledText);
    var pattern = new RegExp("\\$\\s?\\d+\\.?\\d{0,2}?");
    if(scrolledText.match(pattern)) {
        console.log("found a price");
        scrolledPrice = scrolledText.match(pattern);
        console.log("price: " + scrolledPrice);
    }

    //console.log("class list" + srcElement.classList);
    srcElement.classList.add(prevClassNm);

    prevDom = srcElement;
    prevDom.onmouseover = function() {
        //display popup
    }
}, false);

/*document.addEventListener('onhover', function () {
    alert("hovering");
});*/
