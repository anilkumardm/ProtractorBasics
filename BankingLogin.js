describe("test an iput text field",function()
		{
	it("enter input value test",function()
			{
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(by.buttonText("Customer Login")).click();
		//console.log(browser.getTitle());
		expect(browser.getTitle()).toContain("Protractor");
		browser.sleep(5000);
		 element.all(by.css("#userSelect option")).then(function (items) {
			 
			 console.log("Items"+items.length);
			 for(i=0;i<items.length;i++)
				 {
				 //drop down texts
				 items[i].getText().then(function(text) {
					 
					 console.log(text);
					
				})				 
				 
				 }
			 //display drop down values
			 for(i=0;i<items.length;i++)
			 {
			 //drop down texts
			 items[i].getAttribute("value").then(function(text) {
				 
				 console.log(text);
				
			})			
			 
			 }
			 //click on drop down second element
			 element(by.id("userSelect")).element(by.css("[value='2'")).click()
			 browser.sleep(3000);
			 element(by.buttonText("Login")).click();
			 expect(element(by.binding("user")).getText()).toContain("Harry Potter");
			 browser.sleep(3000);
			
		})
		
		
		
	});
		
});