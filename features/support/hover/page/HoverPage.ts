import { Target } from '@serenity-js/protractor';
import { by } from 'protractor';

export class HoverPage {
    static userImage = Target.the('image user').located(by.css('.figure'));
    static userImageIndex = (index: number) => Target.all(`the image user from index ${index}`).located(by.css('.figure')).get(index - 1);
    static userName = Target.the('user name').located(by.css('.figcaption h5'));
    static userNameIndex = (index: number) => Target.all(`the user name from index ${index}`).located(by.css('.figcaption h5')).get(index - 1);
    static userProfile = Target.the(`user profile`).located(by.linkText('View profile'));
    static userProfileIndex = (index: number) => Target.all(`the user profile from index ${index}`).located(by.linkText('View profile')).get(index - 1);
    static userDetails = Target.the('user details page').located(by.css('body h1'))
}
