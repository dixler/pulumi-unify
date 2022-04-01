
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateProtectionRequest,
    DisableApplicationLayerAutomaticResponseRequest,
    EnableApplicationLayerAutomaticResponseRequest,
    UpdateApplicationLayerAutomaticResponseRequest,
    CreateProtectionResponse,
    DisableApplicationLayerAutomaticResponseResponse,
    EnableApplicationLayerAutomaticResponseResponse,
    UpdateApplicationLayerAutomaticResponseResponse
} from "aws-sdk/clients/shield";
const schema = require("../apis/shield-2016-06-02.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.shield.Protection {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.shield.Protection>) {
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

    invokeCreateProtection(partialParams: ToOptional<{
      [K in keyof CreateProtectionRequest & keyof Omit<CreateProtectionRequest, "Name" | "ResourceArn">]: (CreateProtectionRequest)[K]
    }>): Request<CreateProtectionResponse, AWSError> {
        this.boot();
        return this.client.createProtection(
          this.ops["CreateProtection"].apply(partialParams)
        );
    }

    invokeDisableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof DisableApplicationLayerAutomaticResponseRequest & keyof Omit<DisableApplicationLayerAutomaticResponseRequest, "ResourceArn">]: (DisableApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<DisableApplicationLayerAutomaticResponseResponse, AWSError> {
        this.boot();
        return this.client.disableApplicationLayerAutomaticResponse(
          this.ops["DisableApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeEnableApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof EnableApplicationLayerAutomaticResponseRequest & keyof Omit<EnableApplicationLayerAutomaticResponseRequest, "ResourceArn">]: (EnableApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<EnableApplicationLayerAutomaticResponseResponse, AWSError> {
        this.boot();
        return this.client.enableApplicationLayerAutomaticResponse(
          this.ops["EnableApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }

    invokeUpdateApplicationLayerAutomaticResponse(partialParams: ToOptional<{
      [K in keyof UpdateApplicationLayerAutomaticResponseRequest & keyof Omit<UpdateApplicationLayerAutomaticResponseRequest, "ResourceArn">]: (UpdateApplicationLayerAutomaticResponseRequest)[K]
    }>): Request<UpdateApplicationLayerAutomaticResponseResponse, AWSError> {
        this.boot();
        return this.client.updateApplicationLayerAutomaticResponse(
          this.ops["UpdateApplicationLayerAutomaticResponse"].apply(partialParams)
        );
    }
}