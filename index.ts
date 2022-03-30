import * as aws from "@pulumi/aws";
import Bucket from "out/s3/Bucket";
//const {wew} = require("./wack");


const mybucket = new Bucket("myResource", {
  "bucket": "wew9018",
})

new aws.lambda.CallbackFunction("myfun", {
  callback: (event) => {
    console.log(mybucket.getBucketTagging({}))
  }
})

/*
Monday
Tuesday
Wednesday - Fix package + serialization
Thursday - Introspect pulumi refs
Friday
*/
