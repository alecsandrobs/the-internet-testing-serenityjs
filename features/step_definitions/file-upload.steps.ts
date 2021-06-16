import { DataTable, Given, Then, When } from '@cucumber/cucumber';
import { Ensure, equals, not } from '@serenity-js/assertions';
import { actorCalled, actorInTheSpotlight, Duration, Loop, Note, TakeNote } from '@serenity-js/core';
import { Click, Enter, isPresent, Navigate, Text, Wait } from '@serenity-js/protractor';
import { FileUploaderPage } from '../support/file-upload/page/FileUploaderPage';
import { UploadFile } from '../support/file-upload/UploadFile';
import { GeneralPage } from '../support/general/page/GeneralPage';

Given('that {} accesses the internet application at the File Uploader page', (name: string) =>
    actorCalled(name).attemptsTo(
        Navigate.to('/upload')
    )
)

Given('(s)he searches a file named {string} from device', (name: string) =>
    actorInTheSpotlight().attemptsTo(
        Enter.theValue(`${process.cwd()}/files/${name}`).into(FileUploaderPage.searchFileButton),
        TakeNote.of(name as any).as('file-name')
    )
)

Given('(s)he searches the files from device', (table: DataTable) =>
    actorInTheSpotlight().attemptsTo(
        Loop.over(table.raw()).to(
            Loop.over(Loop.item<any>()).to(
                UploadFile.named(Loop.item<string>())
            )
        ),
        // UploadFiles.named(table.raw()),
        Wait.for(Duration.ofSeconds(30))
    )
)

When('(s)he confirms the upload file', () =>
    actorInTheSpotlight().attemptsTo(
        Click.on(FileUploaderPage.uploadButton)
    )
)

Then('(s)he should see that the file is uploaded successfuly', () =>
    actorInTheSpotlight().answer(Note.of('file-name')).then((name: any) =>
        actorInTheSpotlight().attemptsTo(
            Ensure.that(Text.of(FileUploaderPage.titlePage), equals('File Uploaded!')),
            Ensure.that(Text.of(FileUploaderPage.fileName), equals(name))
        )
    )
)

Then('(s)he should see that is not possible to sent more files', () =>
    actorInTheSpotlight().attemptsTo(
        Ensure.that(FileUploaderPage.uploadButton, not(isPresent())),
        Ensure.that(Text.of(GeneralPage.bodyH1), equals('Internal Server Error'))
    )
)