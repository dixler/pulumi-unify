
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDBClusterParameterGroupMessage,
    CreateDBParameterGroupMessage,
    CreateDBClusterParameterGroupResult,
    CreateDBParameterGroupResult
} from "aws-sdk/clients/neptune";
const schema = require("../apis/neptune-2014-10-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.neptune.ParameterGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.neptune.ParameterGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Neptune()
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

    invokeCreateDBClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBClusterParameterGroupMessage & keyof Omit<CreateDBClusterParameterGroupMessage, "Description">]: (CreateDBClusterParameterGroupMessage)[K]
    }>): Request<CreateDBClusterParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createDBClusterParameterGroup(
          this.ops["CreateDBClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateDBParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateDBParameterGroupMessage & keyof Omit<CreateDBParameterGroupMessage, "Description">]: (CreateDBParameterGroupMessage)[K]
    }>): Request<CreateDBParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createDBParameterGroup(
          this.ops["CreateDBParameterGroup"].apply(partialParams)
        );
    }
}