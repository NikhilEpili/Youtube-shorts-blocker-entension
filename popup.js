document.getElementById("saveBtn").addEventListener("click", () => {
    const keywords = document.getElementById("keywords").value.toLowerCase();
    chrome.storage.local.set({ keywords }, () => {
      chrome.tabs.reload();
    });
  });
  