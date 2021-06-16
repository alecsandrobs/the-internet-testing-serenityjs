import { Target } from "@serenity-js/protractor";
import { by } from "protractor";

export class FileUploaderPage {

    static searchFileButton = Target.the('search file').located(by.id('file-upload'))
    static uploadButton = Target.the('upload button').located(by.id('file-submit'))
    static titlePage = Target.the('title page').located(by.css('.example h3'))
    static fileName = Target.the('file uploaded name').located(by.id('uploaded-files'))
}