import { Target } from "@serenity-js/protractor";
import { by } from "protractor";

export class GeneralPage {

    static bodyH1 = Target.the('body message').located(by.css('body h1'))
}