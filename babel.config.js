module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: [">1%", "ie 11", "not op_mini all"],
        },
      },
    ],
  ];

  return {
    presets,
  };
};
