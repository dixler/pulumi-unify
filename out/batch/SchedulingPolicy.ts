
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
const schema = require("../apis/batch-2016-08-10.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.batch.SchedulingPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.batch.SchedulingPolicy>) {
        super(...args)
        this.client = new awssdk.Batch()
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

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateComputeEnvironment(partialParams: ToOptional<{
      [K in keyof CreateComputeEnvironmentRequest & keyof CreateComputeEnvironmentRequest]: (CreateComputeEnvironmentRequest & CreateComputeEnvironmentRequest)[K]
    }>): Request<CreateComputeEnvironmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createComputeEnvironment(
          this.ops["CreateComputeEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeCreateJobQueue(partialParams: ToOptional<{
      [K in keyof CreateJobQueueRequest & keyof CreateJobQueueRequest]: (CreateJobQueueRequest & CreateJobQueueRequest)[K]
    }>): Request<CreateJobQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJobQueue(
          this.ops["CreateJobQueue"].applicator.apply(partialParams)
        );
    }

    invokeCreateSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof CreateSchedulingPolicyRequest & keyof CreateSchedulingPolicyRequest]: (CreateSchedulingPolicyRequest & CreateSchedulingPolicyRequest)[K]
    }>): Request<CreateSchedulingPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSchedulingPolicy(
          this.ops["CreateSchedulingPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteComputeEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteComputeEnvironmentRequest & keyof DeleteComputeEnvironmentRequest]: (DeleteComputeEnvironmentRequest & DeleteComputeEnvironmentRequest)[K]
    }>): Request<DeleteComputeEnvironmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteComputeEnvironment(
          this.ops["DeleteComputeEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJobQueue(partialParams: ToOptional<{
      [K in keyof DeleteJobQueueRequest & keyof DeleteJobQueueRequest]: (DeleteJobQueueRequest & DeleteJobQueueRequest)[K]
    }>): Request<DeleteJobQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJobQueue(
          this.ops["DeleteJobQueue"].applicator.apply(partialParams)
        );
    }

    invokeDeleteSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof DeleteSchedulingPolicyRequest & keyof DeleteSchedulingPolicyRequest]: (DeleteSchedulingPolicyRequest & DeleteSchedulingPolicyRequest)[K]
    }>): Request<DeleteSchedulingPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSchedulingPolicy(
          this.ops["DeleteSchedulingPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterJobDefinition(partialParams: ToOptional<{
      [K in keyof DeregisterJobDefinitionRequest & keyof DeregisterJobDefinitionRequest]: (DeregisterJobDefinitionRequest & DeregisterJobDefinitionRequest)[K]
    }>): Request<DeregisterJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterJobDefinition(
          this.ops["DeregisterJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeDescribeJobs(partialParams: ToOptional<{
      [K in keyof DescribeJobsRequest & keyof DescribeJobsRequest]: (DescribeJobsRequest & DescribeJobsRequest)[K]
    }>): Request<DescribeJobsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeJobs(
          this.ops["DescribeJobs"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSchedulingPolicies(partialParams: ToOptional<{
      [K in keyof DescribeSchedulingPoliciesRequest & keyof DescribeSchedulingPoliciesRequest]: (DescribeSchedulingPoliciesRequest & DescribeSchedulingPoliciesRequest)[K]
    }>): Request<DescribeSchedulingPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSchedulingPolicies(
          this.ops["DescribeSchedulingPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeRegisterJobDefinition(partialParams: ToOptional<{
      [K in keyof RegisterJobDefinitionRequest & keyof RegisterJobDefinitionRequest]: (RegisterJobDefinitionRequest & RegisterJobDefinitionRequest)[K]
    }>): Request<RegisterJobDefinitionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerJobDefinition(
          this.ops["RegisterJobDefinition"].applicator.apply(partialParams)
        );
    }

    invokeSubmitJob(partialParams: ToOptional<{
      [K in keyof SubmitJobRequest & keyof SubmitJobRequest]: (SubmitJobRequest & SubmitJobRequest)[K]
    }>): Request<SubmitJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.submitJob(
          this.ops["SubmitJob"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTerminateJob(partialParams: ToOptional<{
      [K in keyof TerminateJobRequest & keyof TerminateJobRequest]: (TerminateJobRequest & TerminateJobRequest)[K]
    }>): Request<TerminateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateJob(
          this.ops["TerminateJob"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateComputeEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateComputeEnvironmentRequest & keyof UpdateComputeEnvironmentRequest]: (UpdateComputeEnvironmentRequest & UpdateComputeEnvironmentRequest)[K]
    }>): Request<UpdateComputeEnvironmentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateComputeEnvironment(
          this.ops["UpdateComputeEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateJobQueue(partialParams: ToOptional<{
      [K in keyof UpdateJobQueueRequest & keyof UpdateJobQueueRequest]: (UpdateJobQueueRequest & UpdateJobQueueRequest)[K]
    }>): Request<UpdateJobQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJobQueue(
          this.ops["UpdateJobQueue"].applicator.apply(partialParams)
        );
    }

    invokeUpdateSchedulingPolicy(partialParams: ToOptional<{
      [K in keyof Omit<UpdateSchedulingPolicyRequest, "arn"> & keyof UpdateSchedulingPolicyRequest]: (Omit<UpdateSchedulingPolicyRequest, "arn"> & UpdateSchedulingPolicyRequest)[K]
    }>): Request<UpdateSchedulingPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSchedulingPolicy(
          this.ops["UpdateSchedulingPolicy"].applicator.apply(partialParams)
        );
    }
}