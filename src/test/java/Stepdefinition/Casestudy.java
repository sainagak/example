package Stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Casestudy {
	WebDriver driv;
	@Given("user  on demo web shop page")
	public void user_on_demo_web_shop_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver", "C:\\MyDrivers\\chromedriver.exe");
		driv=new ChromeDriver();
		driv.get("http://demowebshop.tricentis.com/");
		driv.manage().window().maximize();
		Thread.sleep(2000);
		
	}

	@Given("clicks on {string}")
	public void clicks_on(String string) {
	   driv.findElement(By.xpath("//a[text()='Register']")).click();
	}

	@When("user enters {string} and  {string} and {string} and {string} and {string} and {string} to register")
	public void user_enters_and_and_and_and_and_to_register(String string, String string2, String string3, String string4, String string5, String string6) {
		 
		if(string.equals("male"))
		{
			driv.findElement(By.xpath("//*[@id=\"gender-male\"]")).click();
		}
		else {
		driv.findElement(By.xpath("//*[@id=\"gender-female\"]")).click();
		}
		driv.findElement(By.xpath("//*[@id=\"FirstName\"]")).sendKeys(string2);
		driv.findElement(By.xpath("//*[@id=\"LastName\"]")).sendKeys(string3);
		driv.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys(string4);
		driv.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys(string5);
		driv.findElement(By.xpath("//*[@id=\"ConfirmPassword\"]")).sendKeys(string6);
	
	}

	@When("user clicks on reg")
	public void user_clicks_on_reg() {
		driv.findElement(By.xpath("//*[@id=\"register-button\"]")).click();
	}

	@Then("verifying the registration")
	public void verifying_the_registration() {
		Boolean p=driv.findElement(By.xpath("//input[@value='Continue']")).isDisplayed();
	Assert.assertTrue(p);
	}

}
