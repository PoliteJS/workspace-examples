/**
 * PoliteJS Workspace
 * ==================
 * 
 * configuration file
 *
 */

module.exports = {
    source: {
        path: 'app',
        assets: 'assets',
		modules: 'modules',
		scripts: 'core',
        styles: 'core'
    },
    target: {
        dev: {
            path: 'build/dev'
        }
    },
    webpack: require('./webpack.config.js'),
};
