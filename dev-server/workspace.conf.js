/**
 * PoliteJS Workspace
 * ==================
 * 
 * Modify this file if you need to customise Workspace behaviour or your 
 * folder names and structure.
 *
 * All the options are listed here with their default values and a
 * detailed comment description
 *
 */

module.exports = {
    
    source: {
        
        /**
         * here I tweak the app source files name in order to host a client and a server
         * subfolders... just because I like it!
         */
        path: 'app/client',
        
        assets: 'assets',
        features: 'features',
        scripts: '.',
        styles: '.'
    },
    
    target: {
        dev: {
            path: 'build/dev'
        }
    },
    
    server: {
        dev: {
            port: 8080,
            compress: true,
            
            /**
             * here I explicitly set a Javascript entry point for the development server:
             */
            entryPoint: 'app/server/index.js'
        }
    },
    
    webpack: require('./webpack.config.js'),
};
