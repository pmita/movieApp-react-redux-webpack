const path = require('path');

module.exports = {
    output : {
        path : path.join(__dirname, '/dist'),
        filename : 'index.bundle.js',
    }, 
    devServer : {
        historyApiFallback : true, //helps us route through urls
        port : 4000, //define the port for our application
        open : true,
        hot : true
    },
    module : {
        rules: [ 
            {
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader' 
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    }
}