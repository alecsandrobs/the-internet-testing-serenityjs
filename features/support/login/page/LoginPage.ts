import { Target } from "@serenity-js/protractor";
import { by } from "protractor";

export class LoginPage {

    static usernameField = Target.the('username field').located(by.id('username'))
    static passwordField = Target.the('password field').located(by.id('password'))
    static loginButton = Target.the('login button').located(by.buttonText('Login'))
    static pageHeader = Target.the('page title').located(by.css('#content .example h2'))
    static pageSubHeader = Target.the('page subheader').located(by.css('.subheader'))
    static logoutButton = Target.the('logout button').located(by.css('.icon-2x.icon-signout'))
}