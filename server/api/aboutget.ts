export default eventHandler((event) => {
  return {
    message: "API about route",
    time: new Date().toLocaleString(),
  };
});
