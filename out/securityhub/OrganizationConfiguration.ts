
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    
} from "aws-sdk/clients/securityhub";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.securityhub.OrganizationConfiguration {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.securityhub.OrganizationConfiguration>) {
        super(...args)
        this.client = new awssdk.SecurityHub()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/securityhub-2018-10-26.normal.json"), this.client)
    }

}