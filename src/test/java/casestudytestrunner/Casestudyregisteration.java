package casestudytestrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Training_H2a.06.17\\Desktop\\week3\\casestudyproject\\features\\casestudy2.feature",
glue= {"Stepdefinition"},
plugin= {"pretty","html:target/casestudy2results"},
tags={"@login"}
)

public class Casestudyregisteration {

}
