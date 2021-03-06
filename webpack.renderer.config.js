const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')

rules.push({
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
})

rules.push({
    test: /\.(s(a|c)ss)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
})

rules.push({
    test: /\.(woff|woff2|eot|ttf|svg)$/,
    use: {
        loader: 'url-loader',
    },
})

module.exports = {
    module: {
        rules,
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    },
}
