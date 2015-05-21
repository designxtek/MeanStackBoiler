import bar = require('./../Bar/Bar');

export class FooBar {
	constructor() {
		
	}
	
	doFoo(): void {
		console.log('foo!');	
		
		var b = new bar.Bar();
		b.doBar();
	}
}