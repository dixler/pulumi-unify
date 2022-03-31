import * as aws from "@pulumi/aws";
import Bucket from "out/s3/Bucket";

const mybucket = new Bucket("myResource", {
  "bucket": "wew9018",
})

new aws.lambda.CallbackFunction("myfun", {
  callback: (event, context, cb): any => {
    try {
      const val = mybucket.invokeGetBucketTagging({}).promise().then((val) => {
        console.log('tagset is:', val.TagSet);
      });
      return val
    } catch(e) {
      console.log(e);
      return
    }
  }
})

/*
Monday
Tuesday
Wednesday - Fix package + serialization/
Thursday - Introspect pulumi refs
Friday
*/
