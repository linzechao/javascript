module.exports = {
    entry: './entry.js',

    output: {
        filename: './main.js'
    },

    module: {
        loaders: [
            {test: '\.js$', exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};

