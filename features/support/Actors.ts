import { Actor, Cast, TakeNotes } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { CallAnApi } from '@serenity-js/rest';
import axios from "axios";
import { protractor } from 'protractor';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {
        return actor.whoCan(
            CallAnApi.using(axios.create({
                timeout: 30 * 1000,
                baseURL: 'http://the-internet.herokuapp.com'
            }) as any),
            BrowseTheWeb.using(protractor.browser),
            TakeNotes.usingAnEmptyNotepad(),
        );
    }
}
