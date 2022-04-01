
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateClusterParameterGroupMessage,
    CreateClusterSecurityGroupMessage,
    CreateClusterSubnetGroupMessage,
    CreateHsmConfigurationMessage,
    CreateClusterParameterGroupResult,
    CreateClusterSecurityGroupResult,
    CreateClusterSubnetGroupResult,
    CreateHsmConfigurationResult
} from "aws-sdk/clients/redshift";
const schema = require("../apis/redshift-2012-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.redshift.SecurityGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.redshift.SecurityGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Redshift()
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

    invokeCreateClusterParameterGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterParameterGroupMessage & keyof Omit<CreateClusterParameterGroupMessage, "Description">]: (CreateClusterParameterGroupMessage)[K]
    }>): Request<CreateClusterParameterGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterParameterGroup(
          this.ops["CreateClusterParameterGroup"].apply(partialParams)
        );
    }

    invokeCreateClusterSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSecurityGroupMessage & keyof Omit<CreateClusterSecurityGroupMessage, "Description">]: (CreateClusterSecurityGroupMessage)[K]
    }>): Request<CreateClusterSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterSecurityGroup(
          this.ops["CreateClusterSecurityGroup"].apply(partialParams)
        );
    }

    invokeCreateClusterSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateClusterSubnetGroupMessage & keyof Omit<CreateClusterSubnetGroupMessage, "Description">]: (CreateClusterSubnetGroupMessage)[K]
    }>): Request<CreateClusterSubnetGroupResult, AWSError> {
        this.boot();
        return this.client.createClusterSubnetGroup(
          this.ops["CreateClusterSubnetGroup"].apply(partialParams)
        );
    }

    invokeCreateHsmConfiguration(partialParams: ToOptional<{
      [K in keyof CreateHsmConfigurationMessage & keyof Omit<CreateHsmConfigurationMessage, "Description">]: (CreateHsmConfigurationMessage)[K]
    }>): Request<CreateHsmConfigurationResult, AWSError> {
        this.boot();
        return this.client.createHsmConfiguration(
          this.ops["CreateHsmConfiguration"].apply(partialParams)
        );
    }
}