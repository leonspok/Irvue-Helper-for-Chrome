chrome.browserAction.onClicked.addListener(function (tab) { 
    if (tab.url.indexOf("https://unsplash.com/") != -1 ||
    	tab.url.indexOf("http://unsplash.com/") != -1) {
    	var irvueURL = "add_channel?target="+encodeURIComponent(tab.url);
    	var urlToOpen = "https://irvue.tumblr.com/redirect-to-app?target="+encodeURIComponent(irvueURL);
    	chrome.tabs.create({url: urlToOpen});
    }
});