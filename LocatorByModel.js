describe("Locator by model test", function() {
	
	it("Automating Register user login", function() {
		
		browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
		element(by.model("Auth.user.name")).sendKeys("angular");
		element(by.model("Auth.user.password")).sendKeys("password");
		element(by.model("model[options.key]")).sendKeys("paul");
		element(by.buttonText("Login")).click();
		element(by.xpath("/html/body/div[3]/div/div/div/h1")).getText().then(function(text) {
			console.log(text);
			expect("Home").toContain(text);
		});
		browser.sleep(4000);
	});
	
});