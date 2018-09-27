// thanks to https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript#8876069
const getViewportDimensions = () => ({
  width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
  height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
});

module.exports = {
  getViewportDimensions
};
