
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateOptionGroupMessage,
    DescribeOptionGroupOptionsMessage,
    ModifyOptionGroupMessage,
    CreateOptionGroupResult,
    OptionGroupOptionsMessage,
    ModifyOptionGroupResult
} from "aws-sdk/clients/rds";
const schema = require("../apis/rds-2014-10-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.rds.OptionGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.rds.OptionGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.RDS()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeCreateOptionGroup(partialParams: ToOptional<{
      [K in keyof CreateOptionGroupMessage & keyof Omit<CreateOptionGroupMessage, "OptionGroupName" | "EngineName" | "MajorEngineVersion" | "OptionGroupDescription">]: (CreateOptionGroupMessage)[K]
    }>): Request<CreateOptionGroupResult, AWSError> {
        this.boot();
        return this.client.createOptionGroup(
          this.ops["CreateOptionGroup"].apply(partialParams)
        );
    }

    invokeDescribeOptionGroupOptions(partialParams: ToOptional<{
      [K in keyof DescribeOptionGroupOptionsMessage & keyof Omit<DescribeOptionGroupOptionsMessage, "EngineName">]: (DescribeOptionGroupOptionsMessage)[K]
    }>): Request<OptionGroupOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeOptionGroupOptions(
          this.ops["DescribeOptionGroupOptions"].apply(partialParams)
        );
    }

    invokeModifyOptionGroup(partialParams: ToOptional<{
      [K in keyof ModifyOptionGroupMessage & keyof Omit<ModifyOptionGroupMessage, "OptionGroupName">]: (ModifyOptionGroupMessage)[K]
    }>): Request<ModifyOptionGroupResult, AWSError> {
        this.boot();
        return this.client.modifyOptionGroup(
          this.ops["ModifyOptionGroup"].apply(partialParams)
        );
    }
}