chrome.runtime.onConnect.addListener((function(e){let n=function(e,n,t){chrome.tabs.executeScript(e.tabId,{file:e.scriptToInject})};e.onMessage.addListener(n),e.onDisconnect.addListener((function(){e.onMessage.removeListener(n)}))}));