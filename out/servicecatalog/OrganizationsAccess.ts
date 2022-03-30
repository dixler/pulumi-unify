
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    
} from "aws-sdk/clients/servicecatalog";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.servicecatalog.OrganizationsAccess {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.servicecatalog.OrganizationsAccess>) {
        super(...args)
        this.client = new awssdk.ServiceCatalog()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/servicecatalog-2015-12-10.normal.json"), this.client)
    }

}