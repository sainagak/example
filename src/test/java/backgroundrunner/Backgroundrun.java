package backgroundrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Training_H2a.06.17\\Desktop\\week3\\casestudyproject\\features\\backgroudex.feature",
glue= {"BcakgroundEx"},
plugin= {"pretty","html:target/background"}


		)

public class Backgroundrun {

}
