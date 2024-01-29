chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "downloadImage") {
        console.log(request.url);
        chrome.downloads.download({
            url: request.url,
            // filename: 'your/custom/path/image.png' // Uncomment and modify to set a custom path
            // You can't specify an absolute path; the path is relative to the default download directory
        });
    }
});
