console.log("I am background.js");

var curURL;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.greeting == "hello"){
		chrome.tabs.query({
						'active': true, 
						'windowId': chrome.windows.WINDOW_ID_CURRENT
						}, function(tabs){
			sendResponse({
				msg : extractHostname(tabs[0].url)
			})			
		});
	}
	return true;
});
  
  
 
function extractHostname(url) {
    var hostname;


    if (url.indexOf("://") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];

    hostname = hostname.split('?')[0];

    return hostname;
}