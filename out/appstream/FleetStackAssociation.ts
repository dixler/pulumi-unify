
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateApplicationFleetRequest,
    AssociateApplicationToEntitlementRequest,
    AssociateFleetRequest,
    CreateEntitlementRequest,
    CreateStreamingURLRequest,
    DeleteEntitlementRequest,
    DescribeEntitlementsRequest,
    DescribeSessionsRequest,
    DisassociateApplicationFleetRequest,
    DisassociateApplicationFromEntitlementRequest,
    DisassociateFleetRequest,
    ListAssociatedFleetsRequest,
    ListAssociatedStacksRequest,
    ListEntitledApplicationsRequest,
    UpdateEntitlementRequest,
    AssociateApplicationFleetResult,
    AssociateApplicationToEntitlementResult,
    AssociateFleetResult,
    CreateEntitlementResult,
    CreateStreamingURLResult,
    DeleteEntitlementResult,
    DescribeEntitlementsResult,
    DescribeSessionsResult,
    DisassociateApplicationFleetResult,
    DisassociateApplicationFromEntitlementResult,
    DisassociateFleetResult,
    ListAssociatedFleetsResult,
    ListAssociatedStacksResult,
    ListEntitledApplicationsResult,
    UpdateEntitlementResult
} from "aws-sdk/clients/appstream";
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.FleetStackAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appstream.FleetStackAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppStream()
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

    invokeAssociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof AssociateApplicationFleetRequest & keyof Omit<AssociateApplicationFleetRequest, "FleetName">]: (AssociateApplicationFleetRequest)[K]
    }>): Request<AssociateApplicationFleetResult, AWSError> {
        this.boot();
        return this.client.associateApplicationFleet(
          this.ops["AssociateApplicationFleet"].apply(partialParams)
        );
    }

    invokeAssociateApplicationToEntitlement(partialParams: ToOptional<{
      [K in keyof AssociateApplicationToEntitlementRequest & keyof Omit<AssociateApplicationToEntitlementRequest, "StackName">]: (AssociateApplicationToEntitlementRequest)[K]
    }>): Request<AssociateApplicationToEntitlementResult, AWSError> {
        this.boot();
        return this.client.associateApplicationToEntitlement(
          this.ops["AssociateApplicationToEntitlement"].apply(partialParams)
        );
    }

    invokeAssociateFleet(partialParams: ToOptional<{
      [K in keyof AssociateFleetRequest & keyof Omit<AssociateFleetRequest, "FleetName" | "StackName">]: (AssociateFleetRequest)[K]
    }>): Request<AssociateFleetResult, AWSError> {
        this.boot();
        return this.client.associateFleet(
          this.ops["AssociateFleet"].apply(partialParams)
        );
    }

    invokeCreateEntitlement(partialParams: ToOptional<{
      [K in keyof CreateEntitlementRequest & keyof Omit<CreateEntitlementRequest, "StackName">]: (CreateEntitlementRequest)[K]
    }>): Request<CreateEntitlementResult, AWSError> {
        this.boot();
        return this.client.createEntitlement(
          this.ops["CreateEntitlement"].apply(partialParams)
        );
    }

    invokeCreateStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateStreamingURLRequest & keyof Omit<CreateStreamingURLRequest, "StackName" | "FleetName">]: (CreateStreamingURLRequest)[K]
    }>): Request<CreateStreamingURLResult, AWSError> {
        this.boot();
        return this.client.createStreamingURL(
          this.ops["CreateStreamingURL"].apply(partialParams)
        );
    }

    invokeDeleteEntitlement(partialParams: ToOptional<{
      [K in keyof DeleteEntitlementRequest & keyof Omit<DeleteEntitlementRequest, "StackName">]: (DeleteEntitlementRequest)[K]
    }>): Request<DeleteEntitlementResult, AWSError> {
        this.boot();
        return this.client.deleteEntitlement(
          this.ops["DeleteEntitlement"].apply(partialParams)
        );
    }

    invokeDescribeEntitlements(partialParams: ToOptional<{
      [K in keyof DescribeEntitlementsRequest & keyof Omit<DescribeEntitlementsRequest, "StackName">]: (DescribeEntitlementsRequest)[K]
    }>): Request<DescribeEntitlementsResult, AWSError> {
        this.boot();
        return this.client.describeEntitlements(
          this.ops["DescribeEntitlements"].apply(partialParams)
        );
    }

    invokeDescribeSessions(partialParams: ToOptional<{
      [K in keyof DescribeSessionsRequest & keyof Omit<DescribeSessionsRequest, "StackName" | "FleetName">]: (DescribeSessionsRequest)[K]
    }>): Request<DescribeSessionsResult, AWSError> {
        this.boot();
        return this.client.describeSessions(
          this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDisassociateApplicationFleet(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFleetRequest & keyof Omit<DisassociateApplicationFleetRequest, "FleetName">]: (DisassociateApplicationFleetRequest)[K]
    }>): Request<DisassociateApplicationFleetResult, AWSError> {
        this.boot();
        return this.client.disassociateApplicationFleet(
          this.ops["DisassociateApplicationFleet"].apply(partialParams)
        );
    }

    invokeDisassociateApplicationFromEntitlement(partialParams: ToOptional<{
      [K in keyof DisassociateApplicationFromEntitlementRequest & keyof Omit<DisassociateApplicationFromEntitlementRequest, "StackName">]: (DisassociateApplicationFromEntitlementRequest)[K]
    }>): Request<DisassociateApplicationFromEntitlementResult, AWSError> {
        this.boot();
        return this.client.disassociateApplicationFromEntitlement(
          this.ops["DisassociateApplicationFromEntitlement"].apply(partialParams)
        );
    }

    invokeDisassociateFleet(partialParams: ToOptional<{
      [K in keyof DisassociateFleetRequest & keyof Omit<DisassociateFleetRequest, "FleetName" | "StackName">]: (DisassociateFleetRequest)[K]
    }>): Request<DisassociateFleetResult, AWSError> {
        this.boot();
        return this.client.disassociateFleet(
          this.ops["DisassociateFleet"].apply(partialParams)
        );
    }

    invokeListAssociatedFleets(partialParams: ToOptional<{
      [K in keyof ListAssociatedFleetsRequest & keyof Omit<ListAssociatedFleetsRequest, "StackName">]: (ListAssociatedFleetsRequest)[K]
    }>): Request<ListAssociatedFleetsResult, AWSError> {
        this.boot();
        return this.client.listAssociatedFleets(
          this.ops["ListAssociatedFleets"].apply(partialParams)
        );
    }

    invokeListAssociatedStacks(partialParams: ToOptional<{
      [K in keyof ListAssociatedStacksRequest & keyof Omit<ListAssociatedStacksRequest, "FleetName">]: (ListAssociatedStacksRequest)[K]
    }>): Request<ListAssociatedStacksResult, AWSError> {
        this.boot();
        return this.client.listAssociatedStacks(
          this.ops["ListAssociatedStacks"].apply(partialParams)
        );
    }

    invokeListEntitledApplications(partialParams: ToOptional<{
      [K in keyof ListEntitledApplicationsRequest & keyof Omit<ListEntitledApplicationsRequest, "StackName">]: (ListEntitledApplicationsRequest)[K]
    }>): Request<ListEntitledApplicationsResult, AWSError> {
        this.boot();
        return this.client.listEntitledApplications(
          this.ops["ListEntitledApplications"].apply(partialParams)
        );
    }

    invokeUpdateEntitlement(partialParams: ToOptional<{
      [K in keyof UpdateEntitlementRequest & keyof Omit<UpdateEntitlementRequest, "StackName">]: (UpdateEntitlementRequest)[K]
    }>): Request<UpdateEntitlementResult, AWSError> {
        this.boot();
        return this.client.updateEntitlement(
          this.ops["UpdateEntitlement"].apply(partialParams)
        );
    }
}