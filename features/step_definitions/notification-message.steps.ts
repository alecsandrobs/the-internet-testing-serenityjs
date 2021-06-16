import { Given, Then } from '@cucumber/cucumber'
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core'
import { Navigate } from '@serenity-js/protractor'
import { ClickOnTheLinkUltilShowMessage } from '../support/notification-message/ClickOnTheLinkUltilShowMessage'

Given('that {} accesses the internet application at Notification Message', (name: string) =>
    actorCalled(name).attemptsTo(
        Navigate.to('/notification_message')
    )
)

Then('(s)he click(s) on the link until load the {string} message', (message: string) =>
    actorInTheSpotlight().attemptsTo(ClickOnTheLinkUltilShowMessage.atLeast(7).theMessage(message))
)