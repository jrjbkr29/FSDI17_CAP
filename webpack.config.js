var webpack = require('webpack');
var path = require('path');


module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.(sass|less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
              },
              //{test: /\.(jpe?g|png|gif|svg)$/i, 
                //loader: "url-loader?name=frontend/static/frontend/sbbg1.jpg"},

        ],
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    }
    

}