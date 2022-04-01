
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DeleteVpcPeeringConnectionRequest,
    ModifyVpcPeeringConnectionOptionsRequest,
    RejectVpcPeeringConnectionRequest,
    DeleteVpcPeeringConnectionResult,
    ModifyVpcPeeringConnectionOptionsResult,
    RejectVpcPeeringConnectionResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.PeeringConnectionOptions {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.PeeringConnectionOptions>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionRequest & keyof Omit<DeleteVpcPeeringConnectionRequest, "VpcPeeringConnectionId">]: (DeleteVpcPeeringConnectionRequest)[K]
    }>): Request<DeleteVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.deleteVpcPeeringConnection(
          this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeModifyVpcPeeringConnectionOptions(partialParams: ToOptional<{
      [K in keyof ModifyVpcPeeringConnectionOptionsRequest & keyof Omit<ModifyVpcPeeringConnectionOptionsRequest, "VpcPeeringConnectionId">]: (ModifyVpcPeeringConnectionOptionsRequest)[K]
    }>): Request<ModifyVpcPeeringConnectionOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyVpcPeeringConnectionOptions(
          this.ops["ModifyVpcPeeringConnectionOptions"].apply(partialParams)
        );
    }

    invokeRejectVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof RejectVpcPeeringConnectionRequest & keyof Omit<RejectVpcPeeringConnectionRequest, "VpcPeeringConnectionId">]: (RejectVpcPeeringConnectionRequest)[K]
    }>): Request<RejectVpcPeeringConnectionResult, AWSError> {
        this.boot();
        return this.client.rejectVpcPeeringConnection(
          this.ops["RejectVpcPeeringConnection"].apply(partialParams)
        );
    }
}