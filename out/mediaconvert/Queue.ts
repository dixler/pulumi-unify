
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateCertificateRequest,
    CancelJobRequest,
    CreateJobRequest,
    CreateJobTemplateRequest,
    CreatePresetRequest,
    CreateQueueRequest,
    DeleteJobTemplateRequest,
    DeletePolicyRequest,
    DeletePresetRequest,
    DeleteQueueRequest,
    DescribeEndpointsRequest,
    DisassociateCertificateRequest,
    GetJobRequest,
    GetJobTemplateRequest,
    GetPolicyRequest,
    GetPresetRequest,
    GetQueueRequest,
    ListJobTemplatesRequest,
    ListJobsRequest,
    ListPresetsRequest,
    ListQueuesRequest,
    ListTagsForResourceRequest,
    PutPolicyRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateJobTemplateRequest,
    UpdatePresetRequest,
    UpdateQueueRequest,
    AssociateCertificateResponse,
    CancelJobResponse,
    CreateJobResponse,
    CreateJobTemplateResponse,
    CreatePresetResponse,
    CreateQueueResponse,
    DeleteJobTemplateResponse,
    DeletePolicyResponse,
    DeletePresetResponse,
    DeleteQueueResponse,
    DescribeEndpointsResponse,
    DisassociateCertificateResponse,
    GetJobResponse,
    GetJobTemplateResponse,
    GetPolicyResponse,
    GetPresetResponse,
    GetQueueResponse,
    ListJobTemplatesResponse,
    ListJobsResponse,
    ListPresetsResponse,
    ListQueuesResponse,
    ListTagsForResourceResponse,
    PutPolicyResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateJobTemplateResponse,
    UpdatePresetResponse,
    UpdateQueueResponse
} from "aws-sdk/clients/mediaconvert";
const schema = require("../apis/mediaconvert-2017-08-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediaconvert.Queue {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.mediaconvert.Queue>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MediaConvert()
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

    invokeAssociateCertificate(partialParams: ToOptional<{
      [K in keyof AssociateCertificateRequest & keyof Omit<AssociateCertificateRequest, "Arn">]: (AssociateCertificateRequest)[K]
    }>): Request<AssociateCertificateResponse, AWSError> {
        this.boot();
        return this.client.associateCertificate(
          this.ops["AssociateCertificate"].apply(partialParams)
        );
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest]: (CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest]: (CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateJobTemplate(partialParams: ToOptional<{
      [K in keyof CreateJobTemplateRequest & keyof Omit<CreateJobTemplateRequest, "Name">]: (CreateJobTemplateRequest)[K]
    }>): Request<CreateJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.createJobTemplate(
          this.ops["CreateJobTemplate"].apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof Omit<CreatePresetRequest, "Name">]: (CreatePresetRequest)[K]
    }>): Request<CreatePresetResponse, AWSError> {
        this.boot();
        return this.client.createPreset(
          this.ops["CreatePreset"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof Omit<CreateQueueRequest, "Name">]: (CreateQueueRequest)[K]
    }>): Request<CreateQueueResponse, AWSError> {
        this.boot();
        return this.client.createQueue(
          this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeDeleteJobTemplate(partialParams: ToOptional<{
      [K in keyof DeleteJobTemplateRequest & keyof Omit<DeleteJobTemplateRequest, "Name">]: (DeleteJobTemplateRequest)[K]
    }>): Request<DeleteJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.deleteJobTemplate(
          this.ops["DeleteJobTemplate"].apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest]: (DeletePolicyRequest)[K]
    }>): Request<DeletePolicyResponse, AWSError> {
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].apply(partialParams)
        );
    }

    invokeDeletePreset(partialParams: ToOptional<{
      [K in keyof DeletePresetRequest & keyof Omit<DeletePresetRequest, "Name">]: (DeletePresetRequest)[K]
    }>): Request<DeletePresetResponse, AWSError> {
        this.boot();
        return this.client.deletePreset(
          this.ops["DeletePreset"].apply(partialParams)
        );
    }

    invokeDeleteQueue(partialParams: ToOptional<{
      [K in keyof DeleteQueueRequest & keyof Omit<DeleteQueueRequest, "Name">]: (DeleteQueueRequest)[K]
    }>): Request<DeleteQueueResponse, AWSError> {
        this.boot();
        return this.client.deleteQueue(
          this.ops["DeleteQueue"].apply(partialParams)
        );
    }

    invokeDescribeEndpoints(partialParams: ToOptional<{
      [K in keyof DescribeEndpointsRequest]: (DescribeEndpointsRequest)[K]
    }>): Request<DescribeEndpointsResponse, AWSError> {
        this.boot();
        return this.client.describeEndpoints(
          this.ops["DescribeEndpoints"].apply(partialParams)
        );
    }

    invokeDisassociateCertificate(partialParams: ToOptional<{
      [K in keyof DisassociateCertificateRequest & keyof Omit<DisassociateCertificateRequest, "Arn">]: (DisassociateCertificateRequest)[K]
    }>): Request<DisassociateCertificateResponse, AWSError> {
        this.boot();
        return this.client.disassociateCertificate(
          this.ops["DisassociateCertificate"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest]: (GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetJobTemplate(partialParams: ToOptional<{
      [K in keyof GetJobTemplateRequest & keyof Omit<GetJobTemplateRequest, "Name">]: (GetJobTemplateRequest)[K]
    }>): Request<GetJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.getJobTemplate(
          this.ops["GetJobTemplate"].apply(partialParams)
        );
    }

    invokeGetPolicy(partialParams: ToOptional<{
      [K in keyof GetPolicyRequest]: (GetPolicyRequest)[K]
    }>): Request<GetPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPolicy(
          this.ops["GetPolicy"].apply(partialParams)
        );
    }

    invokeGetPreset(partialParams: ToOptional<{
      [K in keyof GetPresetRequest & keyof Omit<GetPresetRequest, "Name">]: (GetPresetRequest)[K]
    }>): Request<GetPresetResponse, AWSError> {
        this.boot();
        return this.client.getPreset(
          this.ops["GetPreset"].apply(partialParams)
        );
    }

    invokeGetQueue(partialParams: ToOptional<{
      [K in keyof GetQueueRequest & keyof Omit<GetQueueRequest, "Name">]: (GetQueueRequest)[K]
    }>): Request<GetQueueResponse, AWSError> {
        this.boot();
        return this.client.getQueue(
          this.ops["GetQueue"].apply(partialParams)
        );
    }

    invokeListJobTemplates(partialParams: ToOptional<{
      [K in keyof ListJobTemplatesRequest]: (ListJobTemplatesRequest)[K]
    }>): Request<ListJobTemplatesResponse, AWSError> {
        this.boot();
        return this.client.listJobTemplates(
          this.ops["ListJobTemplates"].apply(partialParams)
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

    invokeListPresets(partialParams: ToOptional<{
      [K in keyof ListPresetsRequest]: (ListPresetsRequest)[K]
    }>): Request<ListPresetsResponse, AWSError> {
        this.boot();
        return this.client.listPresets(
          this.ops["ListPresets"].apply(partialParams)
        );
    }

    invokeListQueues(partialParams: ToOptional<{
      [K in keyof ListQueuesRequest]: (ListQueuesRequest)[K]
    }>): Request<ListQueuesResponse, AWSError> {
        this.boot();
        return this.client.listQueues(
          this.ops["ListQueues"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "Arn">]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutPolicy(partialParams: ToOptional<{
      [K in keyof PutPolicyRequest]: (PutPolicyRequest)[K]
    }>): Request<PutPolicyResponse, AWSError> {
        this.boot();
        return this.client.putPolicy(
          this.ops["PutPolicy"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof Omit<TagResourceRequest, "Arn">]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "Arn">]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateJobTemplate(partialParams: ToOptional<{
      [K in keyof UpdateJobTemplateRequest & keyof Omit<UpdateJobTemplateRequest, "Name">]: (UpdateJobTemplateRequest)[K]
    }>): Request<UpdateJobTemplateResponse, AWSError> {
        this.boot();
        return this.client.updateJobTemplate(
          this.ops["UpdateJobTemplate"].apply(partialParams)
        );
    }

    invokeUpdatePreset(partialParams: ToOptional<{
      [K in keyof UpdatePresetRequest & keyof Omit<UpdatePresetRequest, "Name">]: (UpdatePresetRequest)[K]
    }>): Request<UpdatePresetResponse, AWSError> {
        this.boot();
        return this.client.updatePreset(
          this.ops["UpdatePreset"].apply(partialParams)
        );
    }

    invokeUpdateQueue(partialParams: ToOptional<{
      [K in keyof UpdateQueueRequest & keyof Omit<UpdateQueueRequest, "Name">]: (UpdateQueueRequest)[K]
    }>): Request<UpdateQueueResponse, AWSError> {
        this.boot();
        return this.client.updateQueue(
          this.ops["UpdateQueue"].apply(partialParams)
        );
    }
}