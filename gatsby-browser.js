// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  window.freshsales.trackPageView(document.location.href);
}
