import { AnswersQuestions, Log, PerformsActivities, Question, Task } from "@serenity-js/core";
import { LastResponse, PostRequest, Send } from "@serenity-js/rest";
const fs = require('fs');
const FormData = require('form-data')

export class UploadFile implements Task {

    constructor(private file: string) { }

    static named(file: Question<any>) {
        return new UploadFileName(file)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {

        console.log('-------')
        console.log(this.file.split('\.')[0])
        console.log('-------')

        var formData = new FormData()
        formData.append(this.file.split('\.')[0], fs.createReadStream(`${process.cwd()}/files/${this.file}`))
        return actor.attemptsTo(
            Send.a(PostRequest.to('/upload').using({
                // headers: getFile('headers', this.file),
                headers: {
                    "Content-Type": "multipart/form-data",
                    // "Content-Type": "multipart/form-data; boundary=" + this.boundary
                }
                // }).with(getBody(this.file))
            }).with(formData)
            ),
            Log.the(LastResponse.status(), LastResponse.body())
        )
    }

    toString = () => `#actor attempts to upload a file named ${this.file}`
}

class UploadFileName implements Task {

    constructor(private file: Question<any>) { }

    performAs(actor: AnswersQuestions & PerformsActivities): PromiseLike<void> {
        return actor.answer(this.file).then((file: string) =>
            actor.attemptsTo(new UploadFile(file))
        )
    }
}