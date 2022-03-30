
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    
} from "aws-sdk/clients/ebs";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ebs.EncryptionByDefault {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ebs.EncryptionByDefault>) {
        super(...args)
        this.client = new awssdk.EBS()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ebs-2019-11-02.normal.json"), this.client)
    }

}