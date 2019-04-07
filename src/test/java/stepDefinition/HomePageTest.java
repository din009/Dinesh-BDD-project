package stepDefinition;

import java.io.IOException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.Homepage;
import screenshotGenerator.ScreenshotGenerator;
import cucumber.api.java.en.Given;

public class HomePageTest {
	public static WebDriver wd;

	@Given("^Open Browser as (.*)$")
	public void OpenBrowser(String browser) {
		if (wd == null) {
			if (browser.equals("FireFox")) {
				wd = new FirefoxDriver();
				wd.manage().window().maximize();
			}
		}
	}

	@Then("^Enter URL as (.*)$")
	public void EnterURL(String URL) {
		// wd.get(URL);
		Homepage.enterurl(wd, URL);
	}

	@Then("^Enter Username as (.*)$")
	public void EnterUsername(String username) {
		Homepage.enterusername(wd, username);
		// WebElement name= wd.findElement(By.xpath("//*[@id='nameid']"));
		// name.sendKeys(username);
	}

	@And("^Enter Mobilenum as (.*)$")
	public void EnterMobilenum(String mobilenum) {
		Homepage.entermobilnum(wd, mobilenum);
		// WebElement mobile=wd.findElement(By.xpath("//*[@id='mobid']"));
		// mobile.sendKeys(mobilenum);
	}

	@Then("^Enter Pickup Address as (.*)$")
	public void EnterPickupAddress(String Pick) {
		Homepage.enterpickadd(wd, Pick);
		// WebElement pickup= wd.findElement(By.xpath("//*[@id='pickid']"));
		// pickup.sendKeys(Pick);
	}

	@And("^Enter Drop Address as (.*)$")
	public void EnterDropAddress(String Dropadd) {
		Homepage.enterdropadd(wd, Dropadd);
		// WebElement drop= wd.findElement(By.xpath("//*[@id='dropid']"));
		// drop.sendKeys(Dropadd);
	}

	@When("^select vechicle type as (.*)$")
	public void selectVechicletype(String value) {
		Homepage.entervechicletype(wd, value);
		// WebElement type= wd.findElement(By.xpath("//*[@id='vehid']"));
		// Select s = new Select(type);
		// s.selectByVisibleText(value);
	}

	@But("^Don't click book button$")
	public void Dontclickbookbutton() {
	int i =1/0;
	}

	@After
	public void teardown(Scenario s) throws IOException {
		ScreenshotGenerator.generatescreenshot(wd, s);
	}

}
