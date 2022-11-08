
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	MainPage_MainCover: tryRequire('./MainPage_MainCover.png') || require('./questionMark.png'),
	MainPage_logo: tryRequire('./MainPage_logo.png') || require('./questionMark.png'),
	MainPage_Vector: tryRequire('./MainPage_Vector.png') || require('./questionMark.png'),
}