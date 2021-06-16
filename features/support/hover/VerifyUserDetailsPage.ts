import { Ensure, equals } from "@serenity-js/assertions";
import { PerformsActivities, Task } from "@serenity-js/core";
import { Text, Website } from "@serenity-js/protractor";
import { GeneralPage } from '../general/page/GeneralPage';

export class VerifyUserDetailsPage implements Task {

    constructor(private id: number) { }

    static fromUserId(id: number) {
        return new VerifyUserDetailsPage(id)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Ensure.that(Website.url(), equals(`http://the-internet.herokuapp.com/users/${this.id}`)),
            Ensure.that(Text.of(GeneralPage.bodyH1), equals('Not Found'))
        )
    }

    toString = () => `#actor verifies the user details page from user id ${this.id}`

}