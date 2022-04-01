import * as aws from "@pulumi/aws";
import Table from "unify/dynamodb/Table";
import Bucket from "unify/s3/Bucket";
import Instance from "unify/ec2/Instance";

const mybucket = new Bucket("myResource", {
  "bucket": "wew9018",
})

new aws.lambda.CallbackFunction("myfun", {
    callback: async (event, context, cb) => {
        const val = await mybucket.invokePutObject({
            Key: `wew1-${(new Date()).toISOString()}`,
            Body: "yay",
        }).promise()
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
