function browserHistory(dataObj, actionsArr) {

  actionsArr
    .forEach(line => {
      let [action, tab] = line.split(' ')

      if (action === 'Open') {
        dataObj['Open Tabs'].push(tab)
        dataObj['Browser Logs'].push(line)
      } else if (action === 'Close') {

        let idx = dataObj['Open Tabs'].indexOf(tab)

        if (idx >= 0) {
          dataObj['Open Tabs'].splice(idx, 1)
          dataObj['Recently Closed'].push(tab)
          dataObj['Browser Logs'].push(line)
        }
      } else if (action === 'Clear') {
        dataObj['Open Tabs'] = [];
        dataObj['Recently Closed'] = [];
        dataObj['Browser Logs'] = [];
      }
    });

  Object.entries(dataObj)
    .forEach(line => {
      if (line[0] === 'Browser Name') {
        console.log(line[1])
      } else {
        console.log(`${line[0]}: ${Object.values(line[1]).join(', ')}`)
      }
    });

}

browserHistory(
  {
    "Browser Name": "Google Chrome",
    "Open Tabs":
      [
        "Facebook",
        "YouTube",
        "Google Translate"
      ],
    "Recently Closed":
      [
        "Yahoo",
        "Gmail"
      ],
    "Browser Logs":
      [
        "Open YouTube",
        "Open Yahoo",
        "Open Google Translate",
        "Close Yahoo",
        "Open Gmail",
        "Close Gmail",
        "Open Facebook"
      ]
  },
  [
    "Close Facebook",
    "Open StackOverFlow",
    "Open Google"
  ]
)

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs":
      [
        "YouTube"
      ],
    "Recently Closed":
      [
        "Gmail",
        "Dropbox"
      ],
    "Browser Logs":
      [
        "Open Gmail",
        "Close Gmail",
        "Open Dropbox",
        "Open YouTube",
        "Close Dropbox"
      ]
  },
  [
    "Open Wikipedia",
    "Clear History and Cache",
    "Open Twitter"
  ]
)