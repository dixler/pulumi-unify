import * as aws from "@pulumi/aws";
import Table from "unify/dynamodb/Table";
import Bucket from "unify/s3/Bucket";
import Instance from "unify/ec2/Instance";

const mybucket = new Bucket("myResource", {
  "bucket": "wew9018",
})

new aws.lambda.CallbackFunction("myfun", {
    callback: async (event, context, cb) => {
        const filename = `wew1-${(new Date()).toISOString()}`;
        const val = await mybucket.invokePutObject({
            Key: filename,
            Body: `my random number is: ${Math.floor(Math.random()*10)}`,
        }).promise()
        const obj = await mybucket.invokeGetObject({
            Key: filename,
        }).promise()
        console.log(`the contents of the file are: "${obj.Body}"`);
        return val;
    }
})

/*
Monday
Tuesday
Wednesday - Fix package + serialization/
Thursday - Introspect pulumi refs
Friday
*/
