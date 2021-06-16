import { LoginPage } from './page/LoginPage';
import { PerformsActivities, Task } from "@serenity-js/core";
import { Click, Enter } from "@serenity-js/protractor";

export class Login implements Task {

    constructor(private username: string, private password: string) { }

    static withUser(username: string) {
        return new LoginBuilder(username)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Enter.theValue(this.username).into(LoginPage.usernameField),
            Enter.theValue(this.password).into(LoginPage.passwordField),
            Click.on(LoginPage.loginButton)
        )
    }

    toString = () => `#actor attempts to login with user ${this.username} and password ${this.password}`
}

class LoginBuilder {

    constructor(private username: string) { }

    andPassWord(password: string) {
        return new Login(this.username, password)
    }
}