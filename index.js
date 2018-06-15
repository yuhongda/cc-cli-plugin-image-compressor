module.exports = (webpackConfig) => {
    const ImageCompressorPlugin = require('image-compressor-plugin');

    webpackConfig
        .plugin('image-compressor')
        .use(ImageCompressorPlugin, [{
            key: 'vmnT6A7UqOFjBONxBS2Z278yqE-HKPFD',
            ext: ['png', 'jpeg', 'jpg']
        }])
}
  
