
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    
} from "aws-sdk/clients/backup";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.backup.GlobalSettings {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.backup.GlobalSettings>) {
        super(...args)
        this.client = new awssdk.Backup()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/backup-2018-11-15.normal.json"), this.client)
    }

}