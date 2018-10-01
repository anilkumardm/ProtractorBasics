exports.config={
directConnect:true,
/*capabilities:{
	'browserName': 'chroma'
	},*/

framework: 'jasmine2',
seleniumAddress: 'http://localhost:4444/wd/hub',
specs: ['LocatorByRepeater.js']

}