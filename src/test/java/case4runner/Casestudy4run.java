package case4runner;


	import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Training_H2a.06.17\\Desktop\\week3\\casestudyproject\\features\\Casestudy4.feature",
glue= {"casestudy4"},
plugin= {"pretty","html:target/casestudy4"},
tags={"@cart"}
)

public class Casestudy4run {

}
