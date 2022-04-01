
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateActionTargetRequest,
    CreateInsightRequest,
    DeleteActionTargetRequest,
    UpdateActionTargetRequest,
    CreateActionTargetResponse,
    CreateInsightResponse,
    DeleteActionTargetResponse,
    UpdateActionTargetResponse
} from "aws-sdk/clients/securityhub";
const schema = require("../apis/securityhub-2018-10-26.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.securityhub.ActionTarget {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.securityhub.ActionTarget>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SecurityHub()
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

    invokeCreateActionTarget(partialParams: ToOptional<{
      [K in keyof CreateActionTargetRequest & keyof Omit<CreateActionTargetRequest, "Name" | "Description">]: (CreateActionTargetRequest)[K]
    }>): Request<CreateActionTargetResponse, AWSError> {
        this.boot();
        return this.client.createActionTarget(
          this.ops["CreateActionTarget"].apply(partialParams)
        );
    }

    invokeCreateInsight(partialParams: ToOptional<{
      [K in keyof CreateInsightRequest & keyof Omit<CreateInsightRequest, "Name">]: (CreateInsightRequest)[K]
    }>): Request<CreateInsightResponse, AWSError> {
        this.boot();
        return this.client.createInsight(
          this.ops["CreateInsight"].apply(partialParams)
        );
    }

    invokeDeleteActionTarget(partialParams: ToOptional<{
      [K in keyof DeleteActionTargetRequest & keyof Omit<DeleteActionTargetRequest, "ActionTargetArn">]: (DeleteActionTargetRequest)[K]
    }>): Request<DeleteActionTargetResponse, AWSError> {
        this.boot();
        return this.client.deleteActionTarget(
          this.ops["DeleteActionTarget"].apply(partialParams)
        );
    }

    invokeUpdateActionTarget(partialParams: ToOptional<{
      [K in keyof UpdateActionTargetRequest & keyof Omit<UpdateActionTargetRequest, "ActionTargetArn">]: (UpdateActionTargetRequest)[K]
    }>): Request<UpdateActionTargetResponse, AWSError> {
        this.boot();
        return this.client.updateActionTarget(
          this.ops["UpdateActionTarget"].apply(partialParams)
        );
    }
}