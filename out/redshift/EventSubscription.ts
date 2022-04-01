
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEventSubscriptionMessage,
    UpdatePartnerStatusInputMessage,
    CreateEventSubscriptionResult,
    PartnerIntegrationOutputMessage
} from "aws-sdk/clients/redshift";
const schema = require("../apis/redshift-2012-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.redshift.EventSubscription {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.redshift.EventSubscription>) {
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

    invokeCreateEventSubscription(partialParams: ToOptional<{
      [K in keyof CreateEventSubscriptionMessage & keyof Omit<CreateEventSubscriptionMessage, "SnsTopicArn">]: (CreateEventSubscriptionMessage)[K]
    }>): Request<CreateEventSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createEventSubscription(
          this.ops["CreateEventSubscription"].apply(partialParams)
        );
    }

    invokeUpdatePartnerStatus(partialParams: ToOptional<{
      [K in keyof UpdatePartnerStatusInputMessage & keyof Omit<UpdatePartnerStatusInputMessage, "Status">]: (UpdatePartnerStatusInputMessage)[K]
    }>): Request<PartnerIntegrationOutputMessage, AWSError> {
        this.boot();
        return this.client.updatePartnerStatus(
          this.ops["UpdatePartnerStatus"].apply(partialParams)
        );
    }
}