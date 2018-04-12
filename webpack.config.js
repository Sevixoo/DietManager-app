const path = require('path');

module.exports = {
    mode: 'production',
    entry: './WWW/libs/framework/initializer.js',
    output: {
        filename: 'application.module.js',
        path: path.resolve(__dirname, 'WWW/dist')
    }
};