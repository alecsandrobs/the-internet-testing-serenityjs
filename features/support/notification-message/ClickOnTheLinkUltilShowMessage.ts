import { Check, Ensure, includes, isLessThan, not } from '@serenity-js/assertions';
import { AnswersQuestions, PerformsActivities, Task } from "@serenity-js/core";
import { Click, Text } from '@serenity-js/protractor';
import { NotificationsMessagePage } from './page/NotificationsMessagePage';

export class ClickOnTheLinkUltilShowMessage implements Task {

    private static amount: number = 0

    constructor(private times: number, private message: string) { }

    static atLeast(times: number) {
        return new ClickOnTheLinkUltilShowMessageBuilder(times)
    }

    performAs(actor: AnswersQuestions & PerformsActivities): PromiseLike<void> {
        ClickOnTheLinkUltilShowMessage.amount++
        return actor.answer(Text.of(NotificationsMessagePage.message)).then((message: string) =>
            actor.attemptsTo(Check.whether(message, not(includes(this.message)))
                .andIfSo(
                    Click.on(NotificationsMessagePage.closeMessage),
                    Click.on(NotificationsMessagePage.clickHereLink),
                    ClickOnTheLinkUltilShowMessage.atLeast(this.times).theMessage(this.message)
                )
            ).then(() =>
                actor.attemptsTo(
                    Ensure.that(ClickOnTheLinkUltilShowMessage.amount, isLessThan(this.times))
                )
            )
        )
    }
    toString = () => `#actor attempts to click on the link ${this.times} times or until the message be "${this.message}"`
}

class ClickOnTheLinkUltilShowMessageBuilder {

    constructor(private times: number) { }

    theMessage(message: string) {
        return new ClickOnTheLinkUltilShowMessage(this.times, message)
    }
}