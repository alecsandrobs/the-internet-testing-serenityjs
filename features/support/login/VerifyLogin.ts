import { Ensure, equals, includes } from "@serenity-js/assertions";
import { PerformsActivities, Task } from "@serenity-js/core";
import { isPresent, Text } from "@serenity-js/protractor";
import { NotificationsMessagePage } from '../notification-message/page/NotificationsMessagePage';
import { LoginPage } from './page/LoginPage';

export class VerifyLogin {

    static successful() {
        return new VerifyLoginSuccessful()
    }

    static unsuccessful() {
        return new VerifyLoginUnsuccessful()
    }
}

class VerifyLoginSuccessful implements Task {

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Ensure.that(Text.of(NotificationsMessagePage.message), includes('You logged into a secure area!')),
            Ensure.that(Text.of(LoginPage.pageHeader), equals('Secure Area')),
            Ensure.that(Text.of(LoginPage.pageSubHeader), equals('Welcome to the Secure Area. When you are done click logout below.')),
            Ensure.that(LoginPage.logoutButton, isPresent())
        )
    }

    toString = () => '#actor verifies that the login is successful'
}

class VerifyLoginUnsuccessful implements Task {

    private message: string = 'Your username is invalid!'

    withMessage(message: string) {
        this.message = message
        return this
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Ensure.that(Text.of(NotificationsMessagePage.message), includes(this.message)),
            Ensure.that(LoginPage.usernameField, isPresent()),
            Ensure.that(LoginPage.passwordField, isPresent()),
            Ensure.that(LoginPage.loginButton, isPresent())
        )
    }

    toString = () => '#actor verifies that the login is unsuccessful'
}