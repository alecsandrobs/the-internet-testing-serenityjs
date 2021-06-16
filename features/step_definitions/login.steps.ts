import { DataTable, Given, Then, When } from '@cucumber/cucumber'
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core'
import { Navigate } from '@serenity-js/protractor'
import { Login } from '../support/login/Login'
import { VerifyLogin } from '../support/login/VerifyLogin'


Given('that {} accesses the internet application at Login Page', (name: string) =>
    actorCalled(name).attemptsTo(
        Navigate.to('/login')
    )
)

When('(s)he logs in the systems with her credentials', (table: DataTable) =>
    actorInTheSpotlight().attemptsTo(
        Login.withUser(table.rowsHash().username)
            .andPassWord(table.rowsHash().password)
    )
)

Then('(s)he should see she is in the secure area', () =>
    actorInTheSpotlight().attemptsTo(
        VerifyLogin.successful()
    )
)

Then('(s)he should see that the password is invalid with the message {string}', (message: string) =>
    actorInTheSpotlight().attemptsTo(
        VerifyLogin.unsuccessful().withMessage(message)
    )
)