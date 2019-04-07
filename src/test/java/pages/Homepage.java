package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class Homepage {

	public static void enterurl(WebDriver wd, String url){
		wd.get(url);
	}
	
	public static void enterusername(WebDriver wd, String username){
		wd.findElement(By.xpath("//*[@id='nameid']")).sendKeys(username);
	}
	
	public static void entermobilnum(WebDriver wd, String mobile){
		wd.findElement(By.xpath("//*[@id='mobid']")).sendKeys(mobile);
	}
	
	public static void enterpickadd(WebDriver wd, String pick){
		wd.findElement(By.xpath("//*[@id='pickid']")).sendKeys(pick);
	}
	
	public static void enterdropadd(WebDriver wd, String drop){
		wd.findElement(By.xpath("//*[@id='dropid']")).sendKeys(drop);
	}
	public static void entervechicletype(WebDriver wd, String type){
		wd.findElement(By.xpath("//*[@id='vehid']")).sendKeys(type);
	}
}
