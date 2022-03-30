
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelJobRequest,
    CreateComputeEnvironmentRequest,
    CreateJobQueueRequest,
    CreateSchedulingPolicyRequest,
    DeleteComputeEnvironmentRequest,
    DeleteJobQueueRequest,
    DeleteSchedulingPolicyRequest,
    DeregisterJobDefinitionRequest,
    DescribeJobsRequest,
    DescribeSchedulingPoliciesRequest,
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
    DescribeJobsResponse,
    DescribeSchedulingPoliciesResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.batch.ComputeEnvironment {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.batch.ComputeEnvironment>) {
        super(...args)
        this.client = new awssdk.Batch()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/batch-2016-08-10.normal.json"), this.client)
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): CancelJobResponse {
        return this.client.cancelJob(
            this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeCreateComputeEnvironment(partialParams: ToOptional<{
      [K in keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest & keyof Omit<CreateComputeEnvironmentRequest, "type">]: (CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest & Omit<CreateComputeEnvironmentRequest, "type">)[K]
    }>): CreateComputeEnvironmentResponse {
        return this.client.createComputeEnvironment(
            this.ops["CreateComputeEnvironment"].apply(partialParams)
        );
    }

    invokeCreateJobQueue(partialParams: ToOptional<{
      [K in keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest & keyof CreateJobQueueRequest]: (CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest & CreateJobQueueRequest)[K]
    }>): CreateJobQueueResponse {
        return this.client.createJobQueue(
            this.ops["CreateJobQueue"].apply(partialParams)
        );
    }

    invokeCreateSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest]: (CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest)[K]
    }>): CreateSchedulingPolicyResponse {
        return this.client.createSchedulingPolicy(
            this.ops["CreateSchedulingPolicy"].apply(partialParams)
        );
    }

    invokeDeleteComputeEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest]: (DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest)[K]
    }>): DeleteComputeEnvironmentResponse {
        return this.client.deleteComputeEnvironment(
            this.ops["DeleteComputeEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteJobQueue(partialParams: ToOptional<{
      [K in keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest]: (DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest & DeleteJobQueueRequest)[K]
    }>): DeleteJobQueueResponse {
        return this.client.deleteJobQueue(
            this.ops["DeleteJobQueue"].apply(partialParams)
        );
    }

    invokeDeleteSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest]: (DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest)[K]
    }>): DeleteSchedulingPolicyResponse {
        return this.client.deleteSchedulingPolicy(
            this.ops["DeleteSchedulingPolicy"].apply(partialParams)
        );
    }

    invokeDeregisterJobDefinition(partialParams: ToOptional<{
      [K in keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest]: (DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest)[K]
    }>): DeregisterJobDefinitionResponse {
        return this.client.deregisterJobDefinition(
            this.ops["DeregisterJobDefinition"].apply(partialParams)
        );
    }

    invokeDescribeJobs(partialParams: ToOptional<{
      [K in keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest & keyof DescribeJobsRequest]: (DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest & DescribeJobsRequest)[K]
    }>): DescribeJobsResponse {
        return this.client.describeJobs(
            this.ops["DescribeJobs"].apply(partialParams)
        );
    }

    invokeDescribeSchedulingPolicies(partialParams: ToOptional<{
      [K in keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest]: (DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest)[K]
    }>): DescribeSchedulingPoliciesResponse {
        return this.client.describeSchedulingPolicies(
            this.ops["DescribeSchedulingPolicies"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRegisterJobDefinition(partialParams: ToOptional<{
      [K in keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest & keyof Omit<RegisterJobDefinitionRequest, "type">]: (RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & RegisterJobDefinitionRequest & Omit<RegisterJobDefinitionRequest, "type">)[K]
    }>): RegisterJobDefinitionResponse {
        return this.client.registerJobDefinition(
            this.ops["RegisterJobDefinition"].apply(partialParams)
        );
    }

    invokeSubmitJob(partialParams: ToOptional<{
      [K in keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest & keyof SubmitJobRequest]: (SubmitJobRequest & SubmitJobRequest & SubmitJobRequest & SubmitJobRequest & SubmitJobRequest & SubmitJobRequest & SubmitJobRequest & SubmitJobRequest & SubmitJobRequest)[K]
    }>): SubmitJobResponse {
        return this.client.submitJob(
            this.ops["SubmitJob"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTerminateJob(partialParams: ToOptional<{
      [K in keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest & keyof TerminateJobRequest]: (TerminateJobRequest & TerminateJobRequest & TerminateJobRequest & TerminateJobRequest & TerminateJobRequest & TerminateJobRequest & TerminateJobRequest & TerminateJobRequest & TerminateJobRequest)[K]
    }>): TerminateJobResponse {
        return this.client.terminateJob(
            this.ops["TerminateJob"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateComputeEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest]: (UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest)[K]
    }>): UpdateComputeEnvironmentResponse {
        return this.client.updateComputeEnvironment(
            this.ops["UpdateComputeEnvironment"].apply(partialParams)
        );
    }

    invokeUpdateJobQueue(partialParams: ToOptional<{
      [K in keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest]: (UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest & UpdateJobQueueRequest)[K]
    }>): UpdateJobQueueResponse {
        return this.client.updateJobQueue(
            this.ops["UpdateJobQueue"].apply(partialParams)
        );
    }

    invokeUpdateSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof Omit<UpdateSchedulingPolicyRequest, "arn"> & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest & keyof UpdateSchedulingPolicyRequest]: (Omit<UpdateSchedulingPolicyRequest, "arn"> & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest & UpdateSchedulingPolicyRequest)[K]
    }>): UpdateSchedulingPolicyResponse {
        return this.client.updateSchedulingPolicy(
            this.ops["UpdateSchedulingPolicy"].apply(partialParams)
        );
    }
}