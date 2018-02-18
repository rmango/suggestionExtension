var randObj = [
    {
        "name": "Spoons",
        "price": 1.40,
        "link": "https://www.walmart.com/ip/0010-03-12-Piece-Lisa-Dinner-Spoon-Set-18-0-Stainless-Steel-Lisa-pattern-12-piece-dinner-spoon-set-offers-elegant-table-setting-a-Winco-Ship-US/723070275",
        "imgLink": "http://weknowyourdreamz.com/images/spoon/spoon-06.jpg"
    },
    {
        "name": "Porg Plushies",
        "price": 16.95,
        "link": "https://www.shopdisney.com/porg-plush-small-9-star-wars-the-last-jedi-1443109?CMP=KNC-DSSGoogle&efc=179006&s_kwcid=AL!5079!3!95242407264!!!g!367459873804!&ef_id=WR8rqQAAAB5RD2Ec:20180218071135:s",
        "imgLink": "https://i.ebayimg.com/images/g/NwoAAOSwHm5ZuCu-/s-l300.jpg"
    },
    {
        "name": "Pool Noodles",
        "price": 6.37,
        "link": "https://www.amazon.com/Noodle-Style-Color-Exact-Dimensions/dp/B0029XD0CG",
        "imgLink": "https://images-na.ssl-images-amazon.com/images/I/31p91gpP20L.jpg"
    }
]

//className id
var prevClassNm = "popup";
var prevDom = null;

//mouse listener for move event
document.addEventListener("mousemove", function (e) {
    //removes the old popup span from the dom
    if (document.getElementById("container") != null) {
        document.getElementById("container").remove();
    }
    //element that user is scrolling over
    var srcElement = e.srcElement;
    var scrolledPriceText;
    var scrolledPrice;
    //remove old class name
    if (prevDom != null) {
        prevDom.classList.remove(prevClassNm);
    }
    var scrolledText = null;
    if (srcElement.childNodes[0] !== null) {
        scrolledText = srcElement.childNodes[0].nodeValue;
    }
    var pattern = new RegExp("\\$\\s?\\d+(\\.\\d{2})?");
    if (scrolledText != null && scrolledText.trim != "" && scrolledText.match(pattern)) {
        scrolledPriceText = scrolledText.match(pattern)[0];
        scrolledPrice = parseFloat(scrolledPriceText.substring(1));

        //circle through children to see if span has already been added
        var alreadyAdded = false;
        if (srcElement.hasChildNodes) {
            //check to make sure hasn't been added to children
            for (var i = 0; i < srcElement.childNodes.length; i++) {
                //if(srcElement.childNodes[i].classList.length > 0 && srcElement.childNodes[i].className.split(' ').includes("popup")) {
                if (srcElement.childNodes[i].classList != null && srcElement.childNodes[i].classList.contains("popuptext")) {
                    alreadyAdded = true;
                }
            }
        }
        //show popup
        if (!alreadyAdded) {
            var rand = Math.floor((Math.random() * randObj.length));
            var name = randObj[rand].name;
            var price = randObj[rand].price;
            var link = randObj[rand].link;
            var imageLink = randObj[rand].imgLink;
            var numRObjs = scrolledPrice / price;

            var popupSpan = document.createElement("span");
            popupSpan.innerHTML = "Buy " + Math.round(numRObjs * 100) / 100 + " " + name;
            popupSpan.classList += "popuptext";
            popupSpan.id = "myPopup";

            var image = document.createElement("img");
            image.setAttribute('src', imageLink);
            image.setAttribute('alt', name);
            image.setAttribute('height', '60px');
            image.setAttribute('width', '60px');
            popupSpan.appendChild(image);

            srcElement.appendChild(popupSpan);
            popupSpan.setAttribute("id", "container");
            popupSpan.classList.toggle("show");

            srcElement.onclick = function () {
                console.log("clicked!");
            }
        }
        srcElement.classList.add(prevClassNm);
        prevDom = srcElement;

    }
}, false);

