import { Ensure, equals } from '@serenity-js/assertions';
import { PerformsActivities, Task } from "@serenity-js/core";
import { ClickOn } from '../general/ClickOnElement';
import { AddRemoveElementsPage } from './page/AddRemoveElementsPage';

export class GuaranteeTheAmountOfButtons implements Task {

    constructor(private amount: number) { }

    static isEqual(amount: number) {
        return new GuaranteeTheAmountOfButtons(amount)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            ClickOn.element(AddRemoveElementsPage.addElement).times(this.amount),
            Ensure.that(AddRemoveElementsPage.amountButton("Delete"), equals(this.amount))
        )
    }

    toString = () => `#actor guarantees that the amount of buttons is equal ${this.amount}`
}