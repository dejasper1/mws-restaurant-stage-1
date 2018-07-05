if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(() => {
      console.log("Service Worker Registered");
    })
    .catch((error) => {
      console.log('registration failed ' + error)
    })
}