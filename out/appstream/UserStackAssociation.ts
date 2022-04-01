
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateApplicationToEntitlementRequest,
    AssociateFleetRequest,
    CreateEntitlementRequest,
    CreateStreamingURLRequest,
    CreateUserRequest,
    DeleteEntitlementRequest,
    DeleteUserRequest,
    DescribeEntitlementsRequest,
    DescribeSessionsRequest,
    DescribeUsersRequest,
    DisableUserRequest,
    DisassociateApplicationFromEntitlementRequest,
    DisassociateFleetRequest,
    EnableUserRequest,
    ListAssociatedFleetsRequest,
    ListEntitledApplicationsRequest,
    UpdateEntitlementRequest,
    AssociateApplicationToEntitlementResult,
    AssociateFleetResult,
    CreateEntitlementResult,
    CreateStreamingURLResult,
    CreateUserResult,
    DeleteEntitlementResult,
    DeleteUserResult,
    DescribeEntitlementsResult,
    DescribeSessionsResult,
    DescribeUsersResult,
    DisableUserResult,
    DisassociateApplicationFromEntitlementResult,
    DisassociateFleetResult,
    EnableUserResult,
    ListAssociatedFleetsResult,
    ListEntitledApplicationsResult,
    UpdateEntitlementResult
} from "aws-sdk/clients/appstream";
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.UserStackAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appstream.UserStackAssociation>) {
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

    invokeAssociateApplicationToEntitlement(partialParams: ToOptional<{
      [K in keyof AssociateApplicationToEntitlementRequest & keyof Omit<AssociateApplicationToEntitlementRequest, "StackName">]: (AssociateApplicationToEntitlementRequest)[K]
    }>): Request<AssociateApplicationToEntitlementResult, AWSError> {
        this.boot();
        return this.client.associateApplicationToEntitlement(
          this.ops["AssociateApplicationToEntitlement"].apply(partialParams)
        );
    }

    invokeAssociateFleet(partialParams: ToOptional<{
      [K in keyof AssociateFleetRequest & keyof Omit<AssociateFleetRequest, "StackName">]: (AssociateFleetRequest)[K]
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
      [K in keyof CreateStreamingURLRequest & keyof Omit<CreateStreamingURLRequest, "StackName">]: (CreateStreamingURLRequest)[K]
    }>): Request<CreateStreamingURLResult, AWSError> {
        this.boot();
        return this.client.createStreamingURL(
          this.ops["CreateStreamingURL"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "UserName" | "AuthenticationType">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResult, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
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

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof Omit<DeleteUserRequest, "UserName" | "AuthenticationType">]: (DeleteUserRequest)[K]
    }>): Request<DeleteUserResult, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
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
      [K in keyof DescribeSessionsRequest & keyof Omit<DescribeSessionsRequest, "StackName">]: (DescribeSessionsRequest)[K]
    }>): Request<DescribeSessionsResult, AWSError> {
        this.boot();
        return this.client.describeSessions(
          this.ops["DescribeSessions"].apply(partialParams)
        );
    }

    invokeDescribeUsers(partialParams: ToOptional<{
      [K in keyof DescribeUsersRequest & keyof Omit<DescribeUsersRequest, "AuthenticationType">]: (DescribeUsersRequest)[K]
    }>): Request<DescribeUsersResult, AWSError> {
        this.boot();
        return this.client.describeUsers(
          this.ops["DescribeUsers"].apply(partialParams)
        );
    }

    invokeDisableUser(partialParams: ToOptional<{
      [K in keyof DisableUserRequest & keyof Omit<DisableUserRequest, "UserName" | "AuthenticationType">]: (DisableUserRequest)[K]
    }>): Request<DisableUserResult, AWSError> {
        this.boot();
        return this.client.disableUser(
          this.ops["DisableUser"].apply(partialParams)
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
      [K in keyof DisassociateFleetRequest & keyof Omit<DisassociateFleetRequest, "StackName">]: (DisassociateFleetRequest)[K]
    }>): Request<DisassociateFleetResult, AWSError> {
        this.boot();
        return this.client.disassociateFleet(
          this.ops["DisassociateFleet"].apply(partialParams)
        );
    }

    invokeEnableUser(partialParams: ToOptional<{
      [K in keyof EnableUserRequest & keyof Omit<EnableUserRequest, "UserName" | "AuthenticationType">]: (EnableUserRequest)[K]
    }>): Request<EnableUserResult, AWSError> {
        this.boot();
        return this.client.enableUser(
          this.ops["EnableUser"].apply(partialParams)
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