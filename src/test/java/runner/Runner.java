package runner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.github.mkolisnyk.cucumber.runner.RetryAcceptance;

import cucumber.api.CucumberOptions;

@ExtendedCucumberOptions(
		jsonReport = "target/81/cucumber.json",
		jsonUsageReport = "target/81/cucumber-usage.json",
		usageReport = true,
		detailedReport = true,
		detailedAggregatedReport = true,
		overviewReport = true,
		overviewChartsReport = true,
		pdfPageSize = "A4 Landscape",
		toPDF = true,
		outputFolder = "target/81",
		retryCount = 3)
@RunWith(ExtendedCucumber.class)
@CucumberOptions(tags="@Registration",format={"pretty","html:target/1"},glue={"stepDefinition"},features={"C:\\Workspace\\SampleBDDFinalReportTest\\src\\test\\resources\\Feature"},monochrome=true,plugin = {"html:target/81", "json:target/81/cucumber.json","pretty:target/81/cucumber-pretty.txt",

        "usage:target/81/cucumber-usage.json", "junit:target/81/cucumber-results.xml" })
/*@CucumberOptions(

        features = { "C:\\Workspace\\SampleBDDFinalReportTest\\src\\test\\resources\\Feature" },

        tags = { "@Registration" },

        glue = "cucumberRetry", plugin = {"html:target/81", "json:target/81/cucumber.json","pretty:target/81/cucumber-pretty.txt",

        "usage:target/81/cucumber-usage.json", "junit:target/81/cucumber-results.xml" })*/
public class Runner {

	public static int retries = 0;

	public Runner() {

	}

	@RetryAcceptance

	public static boolean retryCheck(Throwable e) {

		// Does not allow re-run if error message contains "Configuration
		// failed" phrase

		return !e.getMessage().contains("Configuration failed");

	}

}