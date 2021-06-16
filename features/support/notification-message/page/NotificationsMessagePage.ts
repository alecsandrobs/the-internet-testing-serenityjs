import { Target } from "@serenity-js/protractor";
import { by } from "protractor";

export class NotificationsMessagePage {

    static message = Target.the('notification message').located(by.id('flash'))
    static closeMessage = Target.the('close message button').located(by.css('.close'))
    static clickHereLink = Target.the('Click here link').located(by.linkText('Click here'))
}