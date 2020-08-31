/* eslint-disable import/no-extraneous-dependencies */
module.exports = {
  entry: {
    main: './src/index.js',
  },
  module: {
    rules: [

      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
