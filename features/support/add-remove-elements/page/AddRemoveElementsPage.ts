import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class AddRemoveElementsPage {
    static addElement = Target.the('Add Element button').located(by.buttonText('Add Element'));
    static delete = Target.the('Delete button').located(by.buttonText('Delete'));
    static amountButton = (name: string) => Target.all(`the amount of buttons named ${name}`).located(by.buttonText(name)).count();
}
