package casestudy2;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Casestudy2 {
WebDriver driv;

@Given("user is on demo web shop page")
public void user_is_on_demo_web_shop_page() {
	System.setProperty("webdriver.chrome.driver", "C:\\MyDrivers\\chromedriver.exe");
	driv=new ChromeDriver();
	driv.navigate().to("http://demowebshop.tricentis.com/");
	driv.manage().window().maximize();
}


@When("clicks on login")
public void clicks_on_login() throws InterruptedException {
	
	//driv.get("http://demowebshop.tricentis.com/");
	driv.findElement(By.xpath("//a[text()='Log in']")).click();
	
}

@When("user enters {string} and  {string}")
public void user_enters_and(String string, String string2) {
	//driv.findElement(By.xpath("//a[text()='Log in']")).click();
	driv.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys(string);
	driv.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys(string2);
}

@When("he will be logged in")
public void he_will_be_logged_in() throws InterruptedException {
	driv.findElement(By.xpath("//input[@value='Log in']")).click();
	Thread.sleep(2000);
}

@Then("I validate the outcomes")
public void i_validate_the_outcomes() {
	Assert.assertTrue(driv.findElement(By.xpath("//a[text()='Log out']")).isDisplayed());
	
}
}
