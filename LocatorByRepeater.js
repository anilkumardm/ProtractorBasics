describe("Repeater Test", function() {
	it("Adding few records", function() {
		
		browser.get("http://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys(10);
		element(by.model("second")).sendKeys(10);
		element(by.buttonText("Go!")).click();
		browser.sleep(3000)
		
		element(by.model("first")).sendKeys(20);
		element(by.model("second")).sendKeys(20);
		element(by.buttonText("Go!")).click();
		browser.sleep(3000)
		
	})
	
	it("Print First row data", function() {
		
		console.log("Print First row data");
		element(by.repeater("result in memory").row(0)).getText().then(function(rowText) {
			console.log(rowText);
		})
		
	})
	
	
	it("Print Column data", function() {
		
		console.log("Print Column data");
		element.all(by.repeater("result in memory").column("result.timestamp")).getText().then(function(colText) {
			console.log(colText);
		})
		
	})
	
	it("Print complete table data", function() {
		
		console.log("Print complete table data");
		element.all(by.repeater("result in memory")).getText().then(function(rows) {
			var length=rows.length;
			for(var i=0;i<length;i++)
				{
			var table=element.all(by.repeater("result in memory").row(i)).getText();
			 table.then(function(text) {
			 	console.log(text);
			 })
				}
		})
		
	})
	
})