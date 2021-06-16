import { PerformsActivities, Question, Task } from "@serenity-js/core";
import { Click } from "@serenity-js/protractor";
import { ElementFinder } from 'protractor';

export class ClickOn implements Task {

    constructor(private element: Question<ElementFinder> | ElementFinder, private times: number) { }

    static element(element: Question<ElementFinder> | ElementFinder) {
        return new ClickOnTimes(element)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            ...Array.from({ length: this.times }).map(() => Click.on(this.element))
        )
    }

    toString = () => `#actor attempts to click on the element ${this.times} times`
}

class ClickOnTimes {

    constructor(private element: Question<ElementFinder> | ElementFinder) { }

    times(times: number) {
        return new ClickOn(this.element, times)
    }
}