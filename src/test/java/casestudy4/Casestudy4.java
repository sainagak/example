package casestudy4;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Casestudy4 {
	WebDriver driv;
	@Given("alexa homepage")
	public void alexa_homepage() {
		System.setProperty("webdriver.chrome.driver", "C:\\MyDrivers\\chromedriver.exe");
		driv=new ChromeDriver();
		driv.navigate().to("http://demowebshop.tricentis.com/");
		driv.manage().window().maximize();
	}

	@Given("alexa clicks on login link")
	public void alexa_clicks_on_login_link() {
		driv.findElement(By.xpath("//a[text()='Log in']")).click();
	}

	@When("alexa enters credentials in box")
	public void alexa_enters_credentials_in_box() {
		driv.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys("karthik456@gmail.com");
		driv.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys("karthik456");
	}

	@When("alexa logins and clicks on shoping cart")
	public void alexa_logins_and_clicks_on_shoping_cart() {
		driv.findElement(By.xpath("//*[@id=\"topcartlink\"]/a/span[1]")).click();
	}

	@When("alexa will see your cart is empty")
	public void alexa_will_see_your_cart_is_empty() {
		boolean p=driv.findElement(By.xpath("/html/body/div[4]/div[1]/div[4]/div/div[2]/div[2]/div")).isDisplayed();
	Assert.assertTrue(p);	}
}
