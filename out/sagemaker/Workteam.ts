
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateWorkforceRequest,
    CreateWorkteamRequest,
    DeleteWorkforceRequest,
    DeleteWorkteamRequest,
    DescribeSubscribedWorkteamRequest,
    DescribeWorkforceRequest,
    DescribeWorkteamRequest,
    ListLabelingJobsForWorkteamRequest,
    UpdateWorkforceRequest,
    UpdateWorkteamRequest,
    CreateWorkforceResponse,
    CreateWorkteamResponse,
    DeleteWorkforceResponse,
    DeleteWorkteamResponse,
    DescribeSubscribedWorkteamResponse,
    DescribeWorkforceResponse,
    DescribeWorkteamResponse,
    ListLabelingJobsForWorkteamResponse,
    UpdateWorkforceResponse,
    UpdateWorkteamResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.Workteam {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.Workteam>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateWorkforce(partialParams: ToOptional<{
      [K in keyof CreateWorkforceRequest & keyof Omit<CreateWorkforceRequest, "WorkforceName">]: (CreateWorkforceRequest)[K]
    }>): Request<CreateWorkforceResponse, AWSError> {
        this.boot();
        return this.client.createWorkforce(
          this.ops["CreateWorkforce"].apply(partialParams)
        );
    }

    invokeCreateWorkteam(partialParams: ToOptional<{
      [K in keyof CreateWorkteamRequest & keyof Omit<CreateWorkteamRequest, "WorkteamName" | "Description">]: (CreateWorkteamRequest)[K]
    }>): Request<CreateWorkteamResponse, AWSError> {
        this.boot();
        return this.client.createWorkteam(
          this.ops["CreateWorkteam"].apply(partialParams)
        );
    }

    invokeDeleteWorkforce(partialParams: ToOptional<{
      [K in keyof DeleteWorkforceRequest & keyof Omit<DeleteWorkforceRequest, "WorkforceName">]: (DeleteWorkforceRequest)[K]
    }>): Request<DeleteWorkforceResponse, AWSError> {
        this.boot();
        return this.client.deleteWorkforce(
          this.ops["DeleteWorkforce"].apply(partialParams)
        );
    }

    invokeDeleteWorkteam(partialParams: ToOptional<{
      [K in keyof DeleteWorkteamRequest & keyof Omit<DeleteWorkteamRequest, "WorkteamName">]: (DeleteWorkteamRequest)[K]
    }>): Request<DeleteWorkteamResponse, AWSError> {
        this.boot();
        return this.client.deleteWorkteam(
          this.ops["DeleteWorkteam"].apply(partialParams)
        );
    }

    invokeDescribeSubscribedWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeSubscribedWorkteamRequest & keyof Omit<DescribeSubscribedWorkteamRequest, "WorkteamArn">]: (DescribeSubscribedWorkteamRequest)[K]
    }>): Request<DescribeSubscribedWorkteamResponse, AWSError> {
        this.boot();
        return this.client.describeSubscribedWorkteam(
          this.ops["DescribeSubscribedWorkteam"].apply(partialParams)
        );
    }

    invokeDescribeWorkforce(partialParams: ToOptional<{
      [K in keyof DescribeWorkforceRequest & keyof Omit<DescribeWorkforceRequest, "WorkforceName">]: (DescribeWorkforceRequest)[K]
    }>): Request<DescribeWorkforceResponse, AWSError> {
        this.boot();
        return this.client.describeWorkforce(
          this.ops["DescribeWorkforce"].apply(partialParams)
        );
    }

    invokeDescribeWorkteam(partialParams: ToOptional<{
      [K in keyof DescribeWorkteamRequest & keyof Omit<DescribeWorkteamRequest, "WorkteamName">]: (DescribeWorkteamRequest)[K]
    }>): Request<DescribeWorkteamResponse, AWSError> {
        this.boot();
        return this.client.describeWorkteam(
          this.ops["DescribeWorkteam"].apply(partialParams)
        );
    }

    invokeListLabelingJobsForWorkteam(partialParams: ToOptional<{
      [K in keyof ListLabelingJobsForWorkteamRequest & keyof Omit<ListLabelingJobsForWorkteamRequest, "WorkteamArn">]: (ListLabelingJobsForWorkteamRequest)[K]
    }>): Request<ListLabelingJobsForWorkteamResponse, AWSError> {
        this.boot();
        return this.client.listLabelingJobsForWorkteam(
          this.ops["ListLabelingJobsForWorkteam"].apply(partialParams)
        );
    }

    invokeUpdateWorkforce(partialParams: ToOptional<{
      [K in keyof UpdateWorkforceRequest & keyof Omit<UpdateWorkforceRequest, "WorkforceName">]: (UpdateWorkforceRequest)[K]
    }>): Request<UpdateWorkforceResponse, AWSError> {
        this.boot();
        return this.client.updateWorkforce(
          this.ops["UpdateWorkforce"].apply(partialParams)
        );
    }

    invokeUpdateWorkteam(partialParams: ToOptional<{
      [K in keyof UpdateWorkteamRequest & keyof Omit<UpdateWorkteamRequest, "WorkteamName">]: (UpdateWorkteamRequest)[K]
    }>): Request<UpdateWorkteamResponse, AWSError> {
        this.boot();
        return this.client.updateWorkteam(
          this.ops["UpdateWorkteam"].apply(partialParams)
        );
    }
}