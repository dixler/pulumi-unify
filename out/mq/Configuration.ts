
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mq.Configuration {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.mq.Configuration>) {
        super(...args)
        this.client = new awssdk.MQ()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/mq-2017-11-27.normal.json"), this.client)
    }

    invokeCreateBroker(partialParams: ToOptional<{
      [K in keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest & keyof CreateBrokerRequest]: (CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest & CreateBrokerRequest)[K]
    }>): CreateBrokerResponse {
        return this.client.createBroker(
            this.ops["CreateBroker"].apply(partialParams)
        );
    }

    invokeCreateConfiguration(partialParams: ToOptional<{
      [K in keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest & keyof CreateConfigurationRequest]: (CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest & CreateConfigurationRequest)[K]
    }>): CreateConfigurationResponse {
        return this.client.createConfiguration(
            this.ops["CreateConfiguration"].apply(partialParams)
        );
    }

    invokeCreateTags(partialParams: ToOptional<{
      [K in keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest & keyof CreateTagsRequest]: (CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest & CreateTagsRequest)[K]
    }>): void {
        return this.client.createTags(
            this.ops["CreateTags"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest & keyof CreateUserRequest]: (CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest & CreateUserRequest)[K]
    }>): CreateUserResponse {
        return this.client.createUser(
            this.ops["CreateUser"].apply(partialParams)
        );
    }

    invokeDeleteBroker(partialParams: ToOptional<{
      [K in keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest & keyof DeleteBrokerRequest]: (DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest & DeleteBrokerRequest)[K]
    }>): DeleteBrokerResponse {
        return this.client.deleteBroker(
            this.ops["DeleteBroker"].apply(partialParams)
        );
    }

    invokeDeleteTags(partialParams: ToOptional<{
      [K in keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest & keyof DeleteTagsRequest]: (DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest & DeleteTagsRequest)[K]
    }>): void {
        return this.client.deleteTags(
            this.ops["DeleteTags"].apply(partialParams)
        );
    }

    invokeDeleteUser(partialParams: ToOptional<{
      [K in keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest & keyof DeleteUserRequest]: (DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest & DeleteUserRequest)[K]
    }>): DeleteUserResponse {
        return this.client.deleteUser(
            this.ops["DeleteUser"].apply(partialParams)
        );
    }

    invokeDescribeBroker(partialParams: ToOptional<{
      [K in keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest & keyof DescribeBrokerRequest]: (DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest & DescribeBrokerRequest)[K]
    }>): DescribeBrokerResponse {
        return this.client.describeBroker(
            this.ops["DescribeBroker"].apply(partialParams)
        );
    }

    invokeDescribeConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest & keyof DescribeConfigurationRequest]: (DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest & DescribeConfigurationRequest)[K]
    }>): DescribeConfigurationResponse {
        return this.client.describeConfiguration(
            this.ops["DescribeConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeConfigurationRevision(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest & keyof DescribeConfigurationRevisionRequest]: (DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest & DescribeConfigurationRevisionRequest)[K]
    }>): DescribeConfigurationRevisionResponse {
        return this.client.describeConfigurationRevision(
            this.ops["DescribeConfigurationRevision"].apply(partialParams)
        );
    }

    invokeDescribeUser(partialParams: ToOptional<{
      [K in keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest & keyof DescribeUserRequest]: (DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest & DescribeUserRequest)[K]
    }>): DescribeUserResponse {
        return this.client.describeUser(
            this.ops["DescribeUser"].apply(partialParams)
        );
    }

    invokeListConfigurationRevisions(partialParams: ToOptional<{
      [K in keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest & keyof ListConfigurationRevisionsRequest]: (ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest & ListConfigurationRevisionsRequest)[K]
    }>): ListConfigurationRevisionsResponse {
        return this.client.listConfigurationRevisions(
            this.ops["ListConfigurationRevisions"].apply(partialParams)
        );
    }

    invokeListTags(partialParams: ToOptional<{
      [K in keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest & keyof ListTagsRequest]: (ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest & ListTagsRequest)[K]
    }>): ListTagsResponse {
        return this.client.listTags(
            this.ops["ListTags"].apply(partialParams)
        );
    }

    invokeListUsers(partialParams: ToOptional<{
      [K in keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest & keyof ListUsersRequest]: (ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest & ListUsersRequest)[K]
    }>): ListUsersResponse {
        return this.client.listUsers(
            this.ops["ListUsers"].apply(partialParams)
        );
    }

    invokeRebootBroker(partialParams: ToOptional<{
      [K in keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest & keyof RebootBrokerRequest]: (RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest & RebootBrokerRequest)[K]
    }>): RebootBrokerResponse {
        return this.client.rebootBroker(
            this.ops["RebootBroker"].apply(partialParams)
        );
    }

    invokeUpdateBroker(partialParams: ToOptional<{
      [K in keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest & keyof UpdateBrokerRequest]: (UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest & UpdateBrokerRequest)[K]
    }>): UpdateBrokerResponse {
        return this.client.updateBroker(
            this.ops["UpdateBroker"].apply(partialParams)
        );
    }

    invokeUpdateConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest & keyof UpdateConfigurationRequest]: (UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest & UpdateConfigurationRequest)[K]
    }>): UpdateConfigurationResponse {
        return this.client.updateConfiguration(
            this.ops["UpdateConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateUser(partialParams: ToOptional<{
      [K in keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest & keyof UpdateUserRequest]: (UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest & UpdateUserRequest)[K]
    }>): UpdateUserResponse {
        return this.client.updateUser(
            this.ops["UpdateUser"].apply(partialParams)
        );
    }
}