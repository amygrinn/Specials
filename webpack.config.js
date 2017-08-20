var path = require('path');
const webpack = require('webpack');

module.exports = function (env) {
    if (env === 'dev') {
        return {
            entry: './artifacts/main.js',
            output: {
                path: path.join(__dirname, 'dist'),
                filename: 'bundle.js'
            },
            devServer: {
                contentBase: path.join(__dirname, 'dist')
            },
            resolve: {
                extensions: ['.js', '.json'],
                //root: [path.join(__dirname, "node_modules")],
                //modulesDirectories: ['node_modules'],
                alias: {
                    "CSSPlugin": path.resolve('node_modules', 'gsap/CSSPlugin.js'),
                    "TweenLite": path.resolve('node_modules', 'gsap/TweenLite.js'),
                    "TweenMax": path.resolve('node_modules', 'gsap/TweenMax.js'),
                    "TimelineLite": path.resolve('node_modules', 'gsap/TimelineLite.js'),
                    "TimelineMax": path.resolve('node_modules', 'gsap/TimelineMax.js'),
                    "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js'),
                    "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
                }
            }
        }
    }

    if (env === 'prod') {
        return {
            entry: './artifacts/main.js',
            output: {
                path: path.join(__dirname, 'dist'),
                filename: 'bundle.js'
            },

            plugins: [
                new webpack.DefinePlugin({
                    'process.env': {
                        NODE_ENV: JSON.stringify('production')
                    }
                }),
                new webpack.LoaderOptionsPlugin({
                    minimize: true,
                    debug: false
                }),
                new webpack.optimize.UglifyJsPlugin({
                    beautify: false,
                    mangle: {
                        screw_ie8: true,
                        keep_fnames: true
                    },
                    compress: {
                        screw_ie8: true
                    },
                    comments: false
                })
            ]
        }
    }
}