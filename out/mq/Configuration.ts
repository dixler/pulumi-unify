
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateBrokerRequest,
    CreateConfigurationRequest,
    CreateUserRequest,
    DeleteBrokerRequest,
    DeleteUserRequest,
    DescribeBrokerRequest,
    DescribeBrokerEngineTypesRequest,
    DescribeBrokerInstanceOptionsRequest,
    DescribeConfigurationRequest,
    DescribeConfigurationRevisionRequest,
    DescribeUserRequest,
    ListBrokersRequest,
    ListConfigurationRevisionsRequest,
    ListConfigurationsRequest,
    ListTagsRequest,
    ListUsersRequest,
    RebootBrokerRequest,
    UpdateBrokerRequest,
    UpdateConfigurationRequest,
    UpdateUserRequest,
    CreateBrokerResponse,
    CreateConfigurationResponse,
    CreateUserResponse,
    DeleteBrokerResponse,
    DeleteUserResponse,
    DescribeBrokerResponse,
    DescribeBrokerEngineTypesResponse,
    DescribeBrokerInstanceOptionsResponse,
    DescribeConfigurationResponse,
    DescribeConfigurationRevisionResponse,
    DescribeUserResponse,
    ListBrokersResponse,
    ListConfigurationRevisionsResponse,
    ListConfigurationsResponse,
    ListTagsResponse,
    ListUsersResponse,
    RebootBrokerResponse,
    UpdateBrokerResponse,
    UpdateConfigurationResponse,
    UpdateUserResponse
} from "aws-sdk/clients/mq";
const schema = require("../apis/mq-2017-11-27.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mq.Configuration {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.mq.Configuration>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MQ()
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

    invokeCreateBroker(partialParams: ToOptional<{
      [K in keyof CreateBrokerRequest & keyof Omit<CreateBrokerRequest, "EngineVersion" | "EngineType">]: (CreateBrokerRequest)[K]
    }>): Request<CreateBrokerResponse, AWSError> {
        this.boot();
        return this.client.createBroker(
          this.ops["CreateBroker"].apply(partialParams)
        );
    }

    invokeCreateConfiguration(partialParams: ToOptional<{
      [K in keyof CreateConfigurationRequest & keyof Omit<CreateConfigurationRequest, "EngineVersion" | "EngineType" | "Name">]: (CreateConfigurationRequest)[K]
    }>): Request<CreateConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createConfiguration(
          this.ops["CreateConfiguration"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteBroker(partialParams: ToOptional<{
      [K in keyof DeleteBrokerRequest]: (DeleteBrokerRequest)[K]
    }>): Request<DeleteBrokerResponse, AWSError> {
        this.boot();
        return this.client.deleteBroker(
          this.ops["DeleteBroker"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest]: (DeleteUserRequest)[K]
    }>): Request<DeleteUserResponse, AWSError> {
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeBroker(partialParams: ToOptional<{
      [K in keyof DescribeBrokerRequest]: (DescribeBrokerRequest)[K]
    }>): Request<DescribeBrokerResponse, AWSError> {
        this.boot();
        return this.client.describeBroker(
          this.ops["DescribeBroker"].apply(partialParams)
        );
    }

    invokeDescribeBrokerEngineTypes(partialParams: ToOptional<{
      [K in keyof DescribeBrokerEngineTypesRequest]: (DescribeBrokerEngineTypesRequest)[K]
    }>): Request<DescribeBrokerEngineTypesResponse, AWSError> {
        this.boot();
        return this.client.describeBrokerEngineTypes(
          this.ops["DescribeBrokerEngineTypes"].apply(partialParams)
        );
    }

    invokeDescribeBrokerInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeBrokerInstanceOptionsRequest]: (DescribeBrokerInstanceOptionsRequest)[K]
    }>): Request<DescribeBrokerInstanceOptionsResponse, AWSError> {
        this.boot();
        return this.client.describeBrokerInstanceOptions(
          this.ops["DescribeBrokerInstanceOptions"].apply(partialParams)
        );
    }

    invokeDescribeConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationRequest]: (DescribeConfigurationRequest)[K]
    }>): Request<DescribeConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeConfiguration(
          this.ops["DescribeConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeConfigurationRevision(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationRevisionRequest]: (DescribeConfigurationRevisionRequest)[K]
    }>): Request<DescribeConfigurationRevisionResponse, AWSError> {
        this.boot();
        return this.client.describeConfigurationRevision(
          this.ops["DescribeConfigurationRevision"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest]: (DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeListBrokers(partialParams: ToOptional<{
      [K in keyof ListBrokersRequest]: (ListBrokersRequest)[K]
    }>): Request<ListBrokersResponse, AWSError> {
        this.boot();
        return this.client.listBrokers(
          this.ops["ListBrokers"].apply(partialParams)
        );
    }

    invokeListConfigurationRevisions(partialParams: ToOptional<{
      [K in keyof ListConfigurationRevisionsRequest]: (ListConfigurationRevisionsRequest)[K]
    }>): Request<ListConfigurationRevisionsResponse, AWSError> {
        this.boot();
        return this.client.listConfigurationRevisions(
          this.ops["ListConfigurationRevisions"].apply(partialParams)
        );
    }

    invokeListConfigurations(partialParams: ToOptional<{
      [K in keyof ListConfigurationsRequest]: (ListConfigurationsRequest)[K]
    }>): Request<ListConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listConfigurations(
          this.ops["ListConfigurations"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest]: (ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest]: (ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeRebootBroker(partialParams: ToOptional<{
      [K in keyof RebootBrokerRequest]: (RebootBrokerRequest)[K]
    }>): Request<RebootBrokerResponse, AWSError> {
        this.boot();
        return this.client.rebootBroker(
          this.ops["RebootBroker"].apply(partialParams)
        );
    }

    invokeUpdateBroker(partialParams: ToOptional<{
      [K in keyof UpdateBrokerRequest]: (UpdateBrokerRequest)[K]
    }>): Request<UpdateBrokerResponse, AWSError> {
        this.boot();
        return this.client.updateBroker(
          this.ops["UpdateBroker"].apply(partialParams)
        );
    }

    invokeUpdateConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationRequest & keyof Omit<UpdateConfigurationRequest, "Data">]: (UpdateConfigurationRequest)[K]
    }>): Request<UpdateConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateConfiguration(
          this.ops["UpdateConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest]: (UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].apply(partialParams)
        );
    }
}