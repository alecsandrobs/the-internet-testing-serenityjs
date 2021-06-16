import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled, actorInTheSpotlight, Note, TakeNote } from '@serenity-js/core';
import { Click, Hover, Navigate, Text } from '@serenity-js/protractor';
import { HoverPage } from '../support/hover/page/HoverPage';
import { VerifyUserDetailsPage } from '../support/hover/VerifyUserDetailsPage';

Given('that {} accesses the internet application at the Hovers page', (name: string) =>
    actorCalled(name).attemptsTo(
        Navigate.to('/hovers')
    )
)

When('(s)he puts the mouse over the user {int}', (index: number) =>
    actorInTheSpotlight().attemptsTo(
        Hover.over(HoverPage.userImageIndex(index)),
        TakeNote.of(index as any).as('user-index')
    )
)

Then('(s)he should see that the user name is {string}', (name: string) =>
    actorInTheSpotlight().answer(Note.of('user-index')).then((index: any) =>
        actorInTheSpotlight().attemptsTo(
            Ensure.that(Text.of(HoverPage.userNameIndex(index)), equals(`name: ${name}`))
        )
    )
)

When('(s)he access that user details', () =>
    actorInTheSpotlight().attemptsTo(
        Click.on(HoverPage.userProfile)
    )
)

Then('(s)he should see that she is at the user details page', () =>
    actorInTheSpotlight().answer(Note.of('user-index')).then((index: any) =>
        actorInTheSpotlight().attemptsTo(
            VerifyUserDetailsPage.fromUserId(index)
        )
    )
)