module.exports = (app) => {
  app.get("/", function (req, res) {
    res.json({
      number: 1,
    });
  });

  // Defining get request at '/multiple' route
  app.get("/multiple", function (req, res) {
    res.json({
      number: 1,
      name: "John",
      gender: "male",
    });
  });

  // Defining get request at '/array' route
  app.get("/array", function (req, res) {
    res.json([
      {
        number: 1,
        name: "John",
        gender: "male",
      },
      {
        number: 2,
        name: "Ashley",
        gender: "female",
      },
    ]);
  });

  return app;
};
