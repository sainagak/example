package exampledefnition;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Example {
WebDriver driv;
@Given("jeff has brought microwave for {int}")
public void jeff_has_brought_microwave_for(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@Given("jeff has receipt")
public void jeff_has_receipt() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("jeff returns faulty item")
public void jeff_returns_faulty_item() {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}

@When("jeff got the refund {int}")
public void jeff_got_the_refund(Integer int1) {
    // Write code here that turns the phrase above into concrete actions
    throw new cucumber.api.PendingException();
}
}
