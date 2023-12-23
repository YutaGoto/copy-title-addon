browser.commands.onCommand.addListener(() => {
  browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const tab = tabs[0];
    const currentTitle = tab.title;
    window.navigator.clipboard.writeText(currentTitle);
  });
});
