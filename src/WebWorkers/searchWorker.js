// searchWorker.js

self.addEventListener('message', (event) => {
  const { data, searchValue } = event.data;
  console.log("cal", event.data)
  // Perform the search logic on the provided data
  const searchResults = data.filter(item => {
    return Object.values(item).some(val => val !== undefined && val !== null && val.toString().toLowerCase().includes(searchValue.toLowerCase()));
  });

  // Send the search results back to the main thread
  self.postMessage(searchResults);
});
