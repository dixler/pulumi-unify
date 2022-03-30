
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    
} from "aws-sdk/clients/iam";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.AccountPasswordPolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.iam.AccountPasswordPolicy>) {
        super(...args)
        this.client = new awssdk.IAM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/iam-2010-05-08.normal.json"), this.client)
    }

}