export default eventHandler((event) => {
  return {
    message: "API index route",
    time: new Date().toLocaleString(),
  };
});
