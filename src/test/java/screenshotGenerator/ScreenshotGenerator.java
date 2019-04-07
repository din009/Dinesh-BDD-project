package screenshotGenerator;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import cucumber.api.Scenario;

public class ScreenshotGenerator {

	public static void generatescreenshot(WebDriver wd, Scenario s) throws IOException{
		if (s.isFailed()) {
			//File src=((TakesScreenshot)wd).getScreenshotAs(OutputType.FILE);
			File src= ((TakesScreenshot)wd).getScreenshotAs(OutputType.FILE);
			InputStream stream = new FileInputStream(src);
		
			s.embed(IOUtils.toByteArray(stream), "image/jpeg");
		}
	}
}
