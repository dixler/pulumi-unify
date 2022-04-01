
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateSubnetGroupRequest,
    DeleteSubnetGroupRequest,
    UpdateSubnetGroupRequest,
    CreateSubnetGroupResponse,
    DeleteSubnetGroupResponse,
    UpdateSubnetGroupResponse
} from "aws-sdk/clients/dax";
const schema = require("../apis/dax-2017-04-19.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dax.SubnetGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dax.SubnetGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DAX()
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

    invokeCreateSubnetGroup(partialParams: ToOptional<{
      [K in keyof CreateSubnetGroupRequest & keyof Omit<CreateSubnetGroupRequest, "SubnetGroupName">]: (CreateSubnetGroupRequest)[K]
    }>): Request<CreateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.createSubnetGroup(
          this.ops["CreateSubnetGroup"].apply(partialParams)
        );
    }

    invokeDeleteSubnetGroup(partialParams: ToOptional<{
      [K in keyof DeleteSubnetGroupRequest & keyof Omit<DeleteSubnetGroupRequest, "SubnetGroupName">]: (DeleteSubnetGroupRequest)[K]
    }>): Request<DeleteSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.deleteSubnetGroup(
          this.ops["DeleteSubnetGroup"].apply(partialParams)
        );
    }

    invokeUpdateSubnetGroup(partialParams: ToOptional<{
      [K in keyof UpdateSubnetGroupRequest & keyof Omit<UpdateSubnetGroupRequest, "SubnetGroupName">]: (UpdateSubnetGroupRequest)[K]
    }>): Request<UpdateSubnetGroupResponse, AWSError> {
        this.boot();
        return this.client.updateSubnetGroup(
          this.ops["UpdateSubnetGroup"].apply(partialParams)
        );
    }
}