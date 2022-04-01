
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelJobRequest,
    CreateComputeEnvironmentRequest,
    CreateJobQueueRequest,
    CreateSchedulingPolicyRequest,
    DeleteComputeEnvironmentRequest,
    DeleteJobQueueRequest,
    DeleteSchedulingPolicyRequest,
    DeregisterJobDefinitionRequest,
    DescribeComputeEnvironmentsRequest,
    DescribeJobDefinitionsRequest,
    DescribeJobQueuesRequest,
    DescribeJobsRequest,
    DescribeSchedulingPoliciesRequest,
    ListJobsRequest,
    ListSchedulingPoliciesRequest,
    ListTagsForResourceRequest,
    RegisterJobDefinitionRequest,
    SubmitJobRequest,
    TagResourceRequest,
    TerminateJobRequest,
    UntagResourceRequest,
    UpdateComputeEnvironmentRequest,
    UpdateJobQueueRequest,
    UpdateSchedulingPolicyRequest,
    CancelJobResponse,
    CreateComputeEnvironmentResponse,
    CreateJobQueueResponse,
    CreateSchedulingPolicyResponse,
    DeleteComputeEnvironmentResponse,
    DeleteJobQueueResponse,
    DeleteSchedulingPolicyResponse,
    DeregisterJobDefinitionResponse,
    DescribeComputeEnvironmentsResponse,
    DescribeJobDefinitionsResponse,
    DescribeJobQueuesResponse,
    DescribeJobsResponse,
    DescribeSchedulingPoliciesResponse,
    ListJobsResponse,
    ListSchedulingPoliciesResponse,
    ListTagsForResourceResponse,
    RegisterJobDefinitionResponse,
    SubmitJobResponse,
    TagResourceResponse,
    TerminateJobResponse,
    UntagResourceResponse,
    UpdateComputeEnvironmentResponse,
    UpdateJobQueueResponse,
    UpdateSchedulingPolicyResponse
} from "aws-sdk/clients/batch";
const schema = require("../apis/batch-2016-08-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.batch.JobDefinition {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.batch.JobDefinition>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Batch()
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

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest]: (CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeCreateComputeEnvironment(partialParams: ToOptional<{
      [K in keyof CreateComputeEnvironmentRequest]: (CreateComputeEnvironmentRequest)[K]
    }>): Request<CreateComputeEnvironmentResponse, AWSError> {
        this.boot();
        return this.client.createComputeEnvironment(
          this.ops["CreateComputeEnvironment"].apply(partialParams)
        );
    }

    invokeCreateJobQueue(partialParams: ToOptional<{
      [K in keyof CreateJobQueueRequest]: (CreateJobQueueRequest)[K]
    }>): Request<CreateJobQueueResponse, AWSError> {
        this.boot();
        return this.client.createJobQueue(
          this.ops["CreateJobQueue"].apply(partialParams)
        );
    }

    invokeCreateSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof CreateSchedulingPolicyRequest]: (CreateSchedulingPolicyRequest)[K]
    }>): Request<CreateSchedulingPolicyResponse, AWSError> {
        this.boot();
        return this.client.createSchedulingPolicy(
          this.ops["CreateSchedulingPolicy"].apply(partialParams)
        );
    }

    invokeDeleteComputeEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteComputeEnvironmentRequest]: (DeleteComputeEnvironmentRequest)[K]
    }>): Request<DeleteComputeEnvironmentResponse, AWSError> {
        this.boot();
        return this.client.deleteComputeEnvironment(
          this.ops["DeleteComputeEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteJobQueue(partialParams: ToOptional<{
      [K in keyof DeleteJobQueueRequest]: (DeleteJobQueueRequest)[K]
    }>): Request<DeleteJobQueueResponse, AWSError> {
        this.boot();
        return this.client.deleteJobQueue(
          this.ops["DeleteJobQueue"].apply(partialParams)
        );
    }

    invokeDeleteSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof DeleteSchedulingPolicyRequest]: (DeleteSchedulingPolicyRequest)[K]
    }>): Request<DeleteSchedulingPolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteSchedulingPolicy(
          this.ops["DeleteSchedulingPolicy"].apply(partialParams)
        );
    }

    invokeDeregisterJobDefinition(partialParams: ToOptional<{
      [K in keyof DeregisterJobDefinitionRequest]: (DeregisterJobDefinitionRequest)[K]
    }>): Request<DeregisterJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.deregisterJobDefinition(
          this.ops["DeregisterJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeComputeEnvironments(partialParams: ToOptional<{
      [K in keyof DescribeComputeEnvironmentsRequest]: (DescribeComputeEnvironmentsRequest)[K]
    }>): Request<DescribeComputeEnvironmentsResponse, AWSError> {
        this.boot();
        return this.client.describeComputeEnvironments(
          this.ops["DescribeComputeEnvironments"].apply(partialParams)
        );
    }

    invokeDescribeJobDefinitions(partialParams: ToOptional<{
      [K in keyof DescribeJobDefinitionsRequest]: (DescribeJobDefinitionsRequest)[K]
    }>): Request<DescribeJobDefinitionsResponse, AWSError> {
        this.boot();
        return this.client.describeJobDefinitions(
          this.ops["DescribeJobDefinitions"].apply(partialParams)
        );
    }

    invokeDescribeJobQueues(partialParams: ToOptional<{
      [K in keyof DescribeJobQueuesRequest]: (DescribeJobQueuesRequest)[K]
    }>): Request<DescribeJobQueuesResponse, AWSError> {
        this.boot();
        return this.client.describeJobQueues(
          this.ops["DescribeJobQueues"].apply(partialParams)
        );
    }

    invokeDescribeJobs(partialParams: ToOptional<{
      [K in keyof DescribeJobsRequest]: (DescribeJobsRequest)[K]
    }>): Request<DescribeJobsResponse, AWSError> {
        this.boot();
        return this.client.describeJobs(
          this.ops["DescribeJobs"].apply(partialParams)
        );
    }

    invokeDescribeSchedulingPolicies(partialParams: ToOptional<{
      [K in keyof DescribeSchedulingPoliciesRequest]: (DescribeSchedulingPoliciesRequest)[K]
    }>): Request<DescribeSchedulingPoliciesResponse, AWSError> {
        this.boot();
        return this.client.describeSchedulingPolicies(
          this.ops["DescribeSchedulingPolicies"].apply(partialParams)
        );
    }

    invokeListJobs(partialParams: ToOptional<{
      [K in keyof ListJobsRequest]: (ListJobsRequest)[K]
    }>): Request<ListJobsResponse, AWSError> {
        this.boot();
        return this.client.listJobs(
          this.ops["ListJobs"].apply(partialParams)
        );
    }

    invokeListSchedulingPolicies(partialParams: ToOptional<{
      [K in keyof ListSchedulingPoliciesRequest]: (ListSchedulingPoliciesRequest)[K]
    }>): Request<ListSchedulingPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listSchedulingPolicies(
          this.ops["ListSchedulingPolicies"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRegisterJobDefinition(partialParams: ToOptional<{
      [K in keyof RegisterJobDefinitionRequest]: (RegisterJobDefinitionRequest)[K]
    }>): Request<RegisterJobDefinitionResponse, AWSError> {
        this.boot();
        return this.client.registerJobDefinition(
          this.ops["RegisterJobDefinition"].apply(partialParams)
        );
    }

    invokeSubmitJob(partialParams: ToOptional<{
      [K in keyof SubmitJobRequest]: (SubmitJobRequest)[K]
    }>): Request<SubmitJobResponse, AWSError> {
        this.boot();
        return this.client.submitJob(
          this.ops["SubmitJob"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTerminateJob(partialParams: ToOptional<{
      [K in keyof TerminateJobRequest]: (TerminateJobRequest)[K]
    }>): Request<TerminateJobResponse, AWSError> {
        this.boot();
        return this.client.terminateJob(
          this.ops["TerminateJob"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateComputeEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateComputeEnvironmentRequest]: (UpdateComputeEnvironmentRequest)[K]
    }>): Request<UpdateComputeEnvironmentResponse, AWSError> {
        this.boot();
        return this.client.updateComputeEnvironment(
          this.ops["UpdateComputeEnvironment"].apply(partialParams)
        );
    }

    invokeUpdateJobQueue(partialParams: ToOptional<{
      [K in keyof UpdateJobQueueRequest]: (UpdateJobQueueRequest)[K]
    }>): Request<UpdateJobQueueResponse, AWSError> {
        this.boot();
        return this.client.updateJobQueue(
          this.ops["UpdateJobQueue"].apply(partialParams)
        );
    }

    invokeUpdateSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof UpdateSchedulingPolicyRequest]: (UpdateSchedulingPolicyRequest)[K]
    }>): Request<UpdateSchedulingPolicyResponse, AWSError> {
        this.boot();
        return this.client.updateSchedulingPolicy(
          this.ops["UpdateSchedulingPolicy"].apply(partialParams)
        );
    }
}