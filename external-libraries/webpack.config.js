/**
 * Webpack Configuration
 * =====================
 *
 * Workspace fills the whole Webpack configuration for you, 
 * still you can override every single option for both "dev" and "prod" scenario.
 */

exports.dev = function() {
    return {
        /**
         * List your external libraries here!
         * 'require-name' : 'global-scope-name'
         */
        externals: {
            'jquery' : 'jQuery',
            'ko' : 'ko'
        }
    };
};

exports.prod = function() {
    return {};
};
