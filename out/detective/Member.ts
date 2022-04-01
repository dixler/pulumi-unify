
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateMembersRequest,
    DeleteMembersRequest,
    DescribeOrganizationConfigurationRequest,
    GetMembersRequest,
    ListMembersRequest,
    CreateMembersResponse,
    DeleteMembersResponse,
    DescribeOrganizationConfigurationResponse,
    GetMembersResponse,
    ListMembersResponse
} from "aws-sdk/clients/detective";
const schema = require("../apis/detective-2018-10-26.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.detective.Member {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.detective.Member>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Detective()
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

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof Omit<CreateMembersRequest, "GraphArn">]: (CreateMembersRequest)[K]
    }>): Request<CreateMembersResponse, AWSError> {
        this.boot();
        return this.client.createMembers(
          this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof Omit<DeleteMembersRequest, "GraphArn">]: (DeleteMembersRequest)[K]
    }>): Request<DeleteMembersResponse, AWSError> {
        this.boot();
        return this.client.deleteMembers(
          this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest & keyof Omit<DescribeOrganizationConfigurationRequest, "GraphArn">]: (DescribeOrganizationConfigurationRequest)[K]
    }>): Request<DescribeOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeOrganizationConfiguration(
          this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof Omit<GetMembersRequest, "GraphArn">]: (GetMembersRequest)[K]
    }>): Request<GetMembersResponse, AWSError> {
        this.boot();
        return this.client.getMembers(
          this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest & keyof Omit<ListMembersRequest, "GraphArn">]: (ListMembersRequest)[K]
    }>): Request<ListMembersResponse, AWSError> {
        this.boot();
        return this.client.listMembers(
          this.ops["ListMembers"].apply(partialParams)
        );
    }
}