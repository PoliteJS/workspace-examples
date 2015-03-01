/**
 * Webpack Configuration
 * =====================
 *
 * Workspace fills the whole Webpack configuration for you, 
 * still you can override every single option for both "dev" and "prod" scenario.
 *
 */

exports.dev = function() {
    return {
        
        /**
         * List your external libraries here!
         * 'require-name' : 'global-scope-name'
         */
        externals: {
            'react' : 'React'
        },

        output: {
            
            // exports each application entry points as universal modules
            // so the file name will be available in the global scope as it was a library
            libraryTarget: 'umd',
            library: ['[name]']
            
        }
    };
};

exports.test = function() {
    return {};
};

exports.prod = function() {
    return {};
};
