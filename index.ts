import * as aws from "@pulumi/aws";
import Bucket from "unify/s3/Bucket";
import * as awsSDK from "aws-sdk";

const mybucket = new Bucket("myResource", {
  "bucket": "wew9018",
})

new aws.lambda.CallbackFunction("myfun-normal", {
    callback: async (event, context, cb) => {
        const client = new awsSDK.S3();
        const filename = `normal-${(new Date()).toISOString()}`;
        const body = `my random number is: ${Math.floor(Math.random()*10)}`;

        await client.putObject({
            Bucket: mybucket.bucket.get(),
            Key: filename,
            Body: body,
        }).promise()

        const obj = await client.getObject({
            Bucket: mybucket.bucket.get(),
            Key: filename,
        }).promise()

        console.log(`the contents of the file are: "${obj.Body}"`);
        return;
    }
})




new aws.lambda.CallbackFunction("myfun-unify", {
    callback: async (event, context, cb) => {
        const filename = `unify-${(new Date()).toISOString()}`;
        const body = `my random number is: ${Math.floor(Math.random()*10)}`;

        await mybucket.invokePutObject({
            Key: filename,
            Body: body,
        }).promise()

        const obj = await mybucket.invokeGetObject({
            Key: filename,
        }).promise()
        console.log(`the contents of the file are: "${obj.Body}"`);
        return;
    }
})












