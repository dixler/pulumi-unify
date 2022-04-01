
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateNetworkInsightsAccessScopeRequest,
    CreateNetworkInsightsPathRequest,
    CreateReservedInstancesListingRequest,
    StartNetworkInsightsAccessScopeAnalysisRequest,
    StartNetworkInsightsAnalysisRequest,
    CreateNetworkInsightsAccessScopeResult,
    CreateNetworkInsightsPathResult,
    CreateReservedInstancesListingResult,
    StartNetworkInsightsAccessScopeAnalysisResult,
    StartNetworkInsightsAnalysisResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.SpotFleetRequest {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.SpotFleetRequest>) {
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

    invokeCreateNetworkInsightsAccessScope(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsAccessScopeRequest & keyof Omit<CreateNetworkInsightsAccessScopeRequest, "ClientToken">]: (CreateNetworkInsightsAccessScopeRequest)[K]
    }>): Request<CreateNetworkInsightsAccessScopeResult, AWSError> {
        this.boot();
        return this.client.createNetworkInsightsAccessScope(
          this.ops["CreateNetworkInsightsAccessScope"].apply(partialParams)
        );
    }

    invokeCreateNetworkInsightsPath(partialParams: ToOptional<{
      [K in keyof CreateNetworkInsightsPathRequest & keyof Omit<CreateNetworkInsightsPathRequest, "ClientToken">]: (CreateNetworkInsightsPathRequest)[K]
    }>): Request<CreateNetworkInsightsPathResult, AWSError> {
        this.boot();
        return this.client.createNetworkInsightsPath(
          this.ops["CreateNetworkInsightsPath"].apply(partialParams)
        );
    }

    invokeCreateReservedInstancesListing(partialParams: ToOptional<{
      [K in keyof CreateReservedInstancesListingRequest & keyof Omit<CreateReservedInstancesListingRequest, "ClientToken">]: (CreateReservedInstancesListingRequest)[K]
    }>): Request<CreateReservedInstancesListingResult, AWSError> {
        this.boot();
        return this.client.createReservedInstancesListing(
          this.ops["CreateReservedInstancesListing"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAccessScopeAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAccessScopeAnalysisRequest & keyof Omit<StartNetworkInsightsAccessScopeAnalysisRequest, "ClientToken">]: (StartNetworkInsightsAccessScopeAnalysisRequest)[K]
    }>): Request<StartNetworkInsightsAccessScopeAnalysisResult, AWSError> {
        this.boot();
        return this.client.startNetworkInsightsAccessScopeAnalysis(
          this.ops["StartNetworkInsightsAccessScopeAnalysis"].apply(partialParams)
        );
    }

    invokeStartNetworkInsightsAnalysis(partialParams: ToOptional<{
      [K in keyof StartNetworkInsightsAnalysisRequest & keyof Omit<StartNetworkInsightsAnalysisRequest, "ClientToken">]: (StartNetworkInsightsAnalysisRequest)[K]
    }>): Request<StartNetworkInsightsAnalysisResult, AWSError> {
        this.boot();
        return this.client.startNetworkInsightsAnalysis(
          this.ops["StartNetworkInsightsAnalysis"].apply(partialParams)
        );
    }
}