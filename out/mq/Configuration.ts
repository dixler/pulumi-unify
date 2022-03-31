
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateBrokerRequest,
    CreateConfigurationRequest,
    CreateTagsRequest,
    CreateUserRequest,
    DeleteBrokerRequest,
    DeleteTagsRequest,
    DeleteUserRequest,
    DescribeBrokerRequest,
    DescribeConfigurationRequest,
    DescribeConfigurationRevisionRequest,
    DescribeUserRequest,
    ListConfigurationRevisionsRequest,
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
    DescribeConfigurationResponse,
    DescribeConfigurationRevisionResponse,
    DescribeUserResponse,
    ListConfigurationRevisionsResponse,
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
    constructor(...args: ConstructorParameters<typeof aws.mq.Configuration>) {
        super(...args)
        this.client = new awssdk.MQ()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeCreateBroker(partialParams: ToOptional<{
      [K in keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest]: (CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest)[K]
    }>): Request<CreateBrokerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBroker(
          this.ops["CreateBroker"].applicator.apply(partialParams)
        );
    }

    invokeCreateConfiguration(partialParams: ToOptional<{
      [K in keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest]: (CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest)[K]
    }>): Request<CreateConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConfiguration(
          this.ops["CreateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest]: (CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTags(
          this.ops["CreateTags"].applicator.apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBroker(partialParams: ToOptional<{
      [K in keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest]: (DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest)[K]
    }>): Request<DeleteBrokerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBroker(
          this.ops["DeleteBroker"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest]: (DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTags(
          this.ops["DeleteTags"].applicator.apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): Request<DeleteUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(
          this.ops["DeleteUser"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBroker(partialParams: ToOptional<{
      [K in keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest]: (DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest)[K]
    }>): Request<DescribeBrokerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBroker(
          this.ops["DescribeBroker"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest]: (DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest)[K]
    }>): Request<DescribeConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConfiguration(
          this.ops["DescribeConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConfigurationRevision(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest]: (DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest)[K]
    }>): Request<DescribeConfigurationRevisionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConfigurationRevision(
          this.ops["DescribeConfigurationRevision"].applicator.apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): Request<DescribeUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUser(
          this.ops["DescribeUser"].applicator.apply(partialParams)
        );
    }

    invokeListConfigurationRevisions(partialParams: ToOptional<{
      [K in keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest]: (ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest)[K]
    }>): Request<ListConfigurationRevisionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listConfigurationRevisions(
          this.ops["ListConfigurationRevisions"].applicator.apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): Request<ListTagsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(
          this.ops["ListTags"].applicator.apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest)[K]
    }>): Request<ListUsersResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(
          this.ops["ListUsers"].applicator.apply(partialParams)
        );
    }

    invokeRebootBroker(partialParams: ToOptional<{
      [K in keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest]: (RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest)[K]
    }>): Request<RebootBrokerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rebootBroker(
          this.ops["RebootBroker"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBroker(partialParams: ToOptional<{
      [K in keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest]: (UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest)[K]
    }>): Request<UpdateBrokerResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBroker(
          this.ops["UpdateBroker"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest]: (UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest)[K]
    }>): Request<UpdateConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConfiguration(
          this.ops["UpdateConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): Request<UpdateUserResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(
          this.ops["UpdateUser"].applicator.apply(partialParams)
        );
    }
}