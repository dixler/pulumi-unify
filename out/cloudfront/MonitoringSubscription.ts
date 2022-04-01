
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateInvalidationRequest,
    CreateMonitoringSubscriptionRequest,
    DeleteMonitoringSubscriptionRequest,
    GetInvalidationRequest,
    GetMonitoringSubscriptionRequest,
    ListConflictingAliasesRequest,
    ListInvalidationsRequest,
    CreateInvalidationResult,
    CreateMonitoringSubscriptionResult,
    DeleteMonitoringSubscriptionResult,
    GetInvalidationResult,
    GetMonitoringSubscriptionResult,
    ListConflictingAliasesResult,
    ListInvalidationsResult
} from "aws-sdk/clients/cloudfront";
const schema = require("../apis/cloudfront-2020-05-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.cloudfront.MonitoringSubscription {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.cloudfront.MonitoringSubscription>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CloudFront()
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

    invokeCreateInvalidation2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateInvalidationRequest & keyof Omit<CreateInvalidationRequest, "DistributionId">]: (CreateInvalidationRequest)[K]
    }>): Request<CreateInvalidationResult, AWSError> {
        this.boot();
        return this.client.createInvalidation2020_05_31(
          this.ops["CreateInvalidation2020_05_31"].apply(partialParams)
        );
    }

    invokeCreateMonitoringSubscription2020_05_31(partialParams: ToOptional<{
      [K in keyof CreateMonitoringSubscriptionRequest & keyof Omit<CreateMonitoringSubscriptionRequest, "DistributionId">]: (CreateMonitoringSubscriptionRequest)[K]
    }>): Request<CreateMonitoringSubscriptionResult, AWSError> {
        this.boot();
        return this.client.createMonitoringSubscription2020_05_31(
          this.ops["CreateMonitoringSubscription2020_05_31"].apply(partialParams)
        );
    }

    invokeDeleteMonitoringSubscription2020_05_31(partialParams: ToOptional<{
      [K in keyof DeleteMonitoringSubscriptionRequest & keyof Omit<DeleteMonitoringSubscriptionRequest, "DistributionId">]: (DeleteMonitoringSubscriptionRequest)[K]
    }>): Request<DeleteMonitoringSubscriptionResult, AWSError> {
        this.boot();
        return this.client.deleteMonitoringSubscription2020_05_31(
          this.ops["DeleteMonitoringSubscription2020_05_31"].apply(partialParams)
        );
    }

    invokeGetInvalidation2020_05_31(partialParams: ToOptional<{
      [K in keyof GetInvalidationRequest & keyof Omit<GetInvalidationRequest, "DistributionId">]: (GetInvalidationRequest)[K]
    }>): Request<GetInvalidationResult, AWSError> {
        this.boot();
        return this.client.getInvalidation2020_05_31(
          this.ops["GetInvalidation2020_05_31"].apply(partialParams)
        );
    }

    invokeGetMonitoringSubscription2020_05_31(partialParams: ToOptional<{
      [K in keyof GetMonitoringSubscriptionRequest & keyof Omit<GetMonitoringSubscriptionRequest, "DistributionId">]: (GetMonitoringSubscriptionRequest)[K]
    }>): Request<GetMonitoringSubscriptionResult, AWSError> {
        this.boot();
        return this.client.getMonitoringSubscription2020_05_31(
          this.ops["GetMonitoringSubscription2020_05_31"].apply(partialParams)
        );
    }

    invokeListConflictingAliases2020_05_31(partialParams: ToOptional<{
      [K in keyof ListConflictingAliasesRequest & keyof Omit<ListConflictingAliasesRequest, "DistributionId">]: (ListConflictingAliasesRequest)[K]
    }>): Request<ListConflictingAliasesResult, AWSError> {
        this.boot();
        return this.client.listConflictingAliases2020_05_31(
          this.ops["ListConflictingAliases2020_05_31"].apply(partialParams)
        );
    }

    invokeListInvalidations2020_05_31(partialParams: ToOptional<{
      [K in keyof ListInvalidationsRequest & keyof Omit<ListInvalidationsRequest, "DistributionId">]: (ListInvalidationsRequest)[K]
    }>): Request<ListInvalidationsResult, AWSError> {
        this.boot();
        return this.client.listInvalidations2020_05_31(
          this.ops["ListInvalidations2020_05_31"].apply(partialParams)
        );
    }
}