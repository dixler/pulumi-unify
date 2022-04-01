
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateHealthCheckRequest,
    DisassociateHealthCheckRequest,
    AssociateHealthCheckResponse,
    DisassociateHealthCheckResponse
} from "aws-sdk/clients/shield";
const schema = require("../apis/shield-2016-06-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.shield.ProtectionHealthCheckAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.shield.ProtectionHealthCheckAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Shield()
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

    invokeAssociateHealthCheck(partialParams: ToOptional<{
      [K in keyof AssociateHealthCheckRequest & keyof Omit<AssociateHealthCheckRequest, "HealthCheckArn">]: (AssociateHealthCheckRequest)[K]
    }>): Request<AssociateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.associateHealthCheck(
          this.ops["AssociateHealthCheck"].apply(partialParams)
        );
    }

    invokeDisassociateHealthCheck(partialParams: ToOptional<{
      [K in keyof DisassociateHealthCheckRequest & keyof Omit<DisassociateHealthCheckRequest, "HealthCheckArn">]: (DisassociateHealthCheckRequest)[K]
    }>): Request<DisassociateHealthCheckResponse, AWSError> {
        this.boot();
        return this.client.disassociateHealthCheck(
          this.ops["DisassociateHealthCheck"].apply(partialParams)
        );
    }
}