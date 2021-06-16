import { Before, setDefaultTimeout } from '@cucumber/cucumber';
import { engage } from '@serenity-js/core';
import { Actors } from './Actors';

Before(() => engage(new Actors()));

setDefaultTimeout(30000);