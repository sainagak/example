package backgroundexa;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class BcakgroundEx {
	WebDriver driv;
	
	
	
	@Given("karthik launched chrome browser")
	public void karthik_launched_chrome_browser() {
	    System.out.println("lauch");
	}

	@Given("launched demo url")
	public void launched_demo_url() {
		System.out.println("url");
	}

	@When("clicked on login")
	public void clicked_on_login() {
		System.out.println("login");
		}

	@When("and provided valid credentials")
	public void and_provided_valid_credentials() {
		System.out.println("credentials");
	}

	@Then("he should see home page")
	public void he_should_see_home_page() {
		System.out.println("homepage");
	}

	@When("karthik enter {string} and {string} and  {string} and  {string}")
	public void karthik_enter_and_and_and(String string, String string2, String string3, String string4) {
		System.out.println("registration"+string +string2 +string3 +string4 );
	}
	@When("clicks on rgister")
	public void clicks_on_rgister() {
		System.out.println("register");
	}

	@Then("he should see homepage with registration successful")
	public void he_should_see_homepage_with_registration_successful() {
		System.out.println("succesful registration");
	}
}
