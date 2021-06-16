import { Loop, PerformsActivities, Task } from "@serenity-js/core";
import { PostRequest, Send } from "@serenity-js/rest";
const fs = require('fs');

export class UploadFiles implements Task {

    constructor(private files: any) { }

    static named(names: any) {
        return new UploadFiles(names)
    }

    performAs(actor: PerformsActivities): PromiseLike<void> {
        return actor.attemptsTo(
            Loop.over(this.files).to(
                Loop.over(Loop.item<any>()).to(
                    Send.a(PostRequest.to('/upload').using({
                        headers: getFile('headers', Loop.item<string>()),
                        /* headers: {
                            // "Content-Type": "multipart/form-data",
                            "Content-Type": "multipart/form-data; boundary=" + this.boundary
                        } */
                    }).with(getFile('body', Loop.item<string>()))
                    )
                )
            )
        )
    }

    toString = () => `#actor attempts to send a POST request with files`
}

const getFile = (type: string, upfile: any) => fs.readFile(upfile, (err: any, content: any) => {
    if (err) {
        console.error(err);
    }
    /* var metadata = {
        token: "### access token ###",
        channels: "sample",
        filename: "samplefilename",
        title: "sampletitle",
    }; */
    var url = "https://slack.com/api/files.upload";
    var boundary = "xxxxxxxxxx";
    var data = "";
    /* for (var i in metadata) {
        if ({}.hasOwnProperty.call(metadata, i)) {
            data += "--" + boundary + "\r\n";
            data += "Content-Disposition: form-data; name=\"" + i + "\"; \r\n\r\n" + metadata[i] + "\r\n";
        }
    }; */
    data += "--" + boundary + "\r\n";
    data += `Content-Disposition: form-data; name="file"; filename="${process.cwd()}/files/${upfile}" \r\n`;
    data += "Content-Type:application/octet-stream\r\n\r\n";
    var payload = Buffer.concat([
        Buffer.from(data, "utf8"),
        new Buffer(content, 'binary'),
        Buffer.from("\r\n--" + boundary + "--\r\n", "utf8"),
    ]);
    var headers = { "Content-Type": "multipart/form-data; boundary=" + boundary }
    /* var options = {
        method: 'post',
        url: url,
        headers: { "Content-Type": "multipart/form-data; boundary=" + boundary },
        body: payload,
    };
    request(options, function (error, response, body) {
        console.log(body);
    }); */

    return type === 'body' ? payload : headers
})