function getChildrenimgUrlRecursively(element) {
    var imageUrls = [];
    if (element.tagName.toLowerCase() == "img") imageUrls.push(element.src);

    for (var i = 0; i < element.children.length; i++) {
        imageUrls = imageUrls.concat(
            getChildrenimgUrlRecursively(element.children[i])
        );
    }
    return imageUrls;
}

document.addEventListener("click", function (event) {
    if (event.shiftKey) {
        var imageUrls = getChildrenimgUrlRecursively(event.target);
        // Send a message to the background script to initiate the download
        imageUrls.forEach((imageUrl) => {
            chrome.runtime.sendMessage({
                action: "downloadImage",
                url: imageUrl,
            });
        });
    }
});

// Path: background_script.js
