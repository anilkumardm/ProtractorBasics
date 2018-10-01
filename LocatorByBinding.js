describe("Testing Binding Locator", function() {
	it("Validating Calclater", function() {
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys(10);
		element(by.model("second")).sendKeys(10);
		element(by.buttonText("Go!")).click();
		browser.sleep(5000);
		element(by.binding("latest")).getText().then(function (text) {
			console.log(text);
		});
		
	})
})