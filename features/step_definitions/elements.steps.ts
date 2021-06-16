import { Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals } from '@serenity-js/assertions';
import { actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/protractor';
import { GuaranteeTheAmountOfButtons } from '../support/add-remove-elements/GuaranteeTheAmountOfButtons';
import { AddRemoveElementsPage } from '../support/add-remove-elements/page/AddRemoveElementsPage';
import { ClickOn } from '../support/general/ClickOnElement';

Given('that {} accesses the internet application at the Add Remove Elements page', (name: string) =>
    actorCalled(name).attemptsTo(
        Navigate.to('/add_remove_elements/')
    )
)

Given('(s)he is aware that have {int} buttons added', (amount: number) =>
    actorInTheSpotlight().attemptsTo(
        GuaranteeTheAmountOfButtons.isEqual(amount)
    )
)

When('(s)he clicks {int} times to add an element', (amount: number) =>
    actorInTheSpotlight().attemptsTo(
        ClickOn.element(AddRemoveElementsPage.addElement).times(amount)
    )
)

Then('(s)he should see that there are {int} buttons with the name {string}', (amount: number, text: string) =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(AddRemoveElementsPage.amountButton(text), equals(amount))
    )
)

When('(s)he removes {int} elements', (amount: number) =>
    actorInTheSpotlight().attemptsTo(
        ClickOn.element(AddRemoveElementsPage.delete).times(amount),
    )
)