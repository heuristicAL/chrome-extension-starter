// Holds the data structure for all the context menus used in the app
var CONTEXT_MENU_CONTENTS = {
    forWindows : [
      'foo',
      'bar',
      'baz'
    ],
    forSelection: [
      'Selection context menu'
    ]
  }
  
  function setUpContextMenus() {
    CONTEXT_MENU_CONTENTS.forWindows.forEach(function(commandId) {
      chrome.contextMenus.create({
        title: 'A: ' + commandId,
        type: 'radio',
        id: 'A' + commandId,
        documentUrlPatterns: [ "chrome-extension://*/a.html"],
        contexts: ['all']
      });
    });
  
    CONTEXT_MENU_CONTENTS.forWindows.forEach(function(commandId) {
      chrome.contextMenus.create({
        title: 'B: ' + commandId,
        type: 'checkbox',
        id: 'B' + commandId,
        documentUrlPatterns: [ "chrome-extension://*/b.html"],
        contexts: ['all']
      });
    });
  
    CONTEXT_MENU_CONTENTS.forSelection.forEach(function(commandId) {
      chrome.contextMenus.create({
        type: "separator",
        id: 'sep1',
        contexts: ['selection']
      });
      chrome.contextMenus.create( {
        title: commandId + ' "%s"',
        id: commandId,
        contexts: ['selection']
      });
    });
  }

  setUpContextMenus();