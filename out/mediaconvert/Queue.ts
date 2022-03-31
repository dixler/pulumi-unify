
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
    DeletePresetRequest,
    DeleteQueueRequest,
    DisassociateCertificateRequest,
    GetJobRequest,
    GetJobTemplateRequest,
    GetPresetRequest,
    GetQueueRequest,
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
    DeletePresetResponse,
    DeleteQueueResponse,
    DisassociateCertificateResponse,
    GetJobResponse,
    GetJobTemplateResponse,
    GetPresetResponse,
    GetQueueResponse,
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
    constructor(...args: ConstructorParameters<typeof aws.mediaconvert.Queue>) {
        super(...args)
        this.client = new awssdk.MediaConvert()
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

    invokeAssociateCertificate(partialParams: ToOptional<{
      [K in keyof AssociateCertificateRequest & keyof AssociateCertificateRequest & keyof AssociateCertificateRequest & keyof AssociateCertificateRequest & keyof AssociateCertificateRequest]: (AssociateCertificateRequest & AssociateCertificateRequest & AssociateCertificateRequest & AssociateCertificateRequest & AssociateCertificateRequest)[K]
    }>): Request<AssociateCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateCertificate(
          this.ops["AssociateCertificate"].applicator.apply(partialParams)
        );
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateJobTemplate(partialParams: ToOptional<{
      [K in keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest]: (CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest)[K]
    }>): Request<CreateJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJobTemplate(
          this.ops["CreateJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest]: (CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest)[K]
    }>): Request<CreatePresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPreset(
          this.ops["CreatePreset"].applicator.apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest]: (CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest)[K]
    }>): Request<CreateQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQueue(
          this.ops["CreateQueue"].applicator.apply(partialParams)
        );
    }

    invokeDeleteJobTemplate(partialParams: ToOptional<{
      [K in keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest]: (DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest)[K]
    }>): Request<DeleteJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteJobTemplate(
          this.ops["DeleteJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeletePreset(partialParams: ToOptional<{
      [K in keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest]: (DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest)[K]
    }>): Request<DeletePresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePreset(
          this.ops["DeletePreset"].applicator.apply(partialParams)
        );
    }

    invokeDeleteQueue(partialParams: ToOptional<{
      [K in keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest]: (DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest)[K]
    }>): Request<DeleteQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQueue(
          this.ops["DeleteQueue"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateCertificate(partialParams: ToOptional<{
      [K in keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest]: (DisassociateCertificateRequest & DisassociateCertificateRequest & DisassociateCertificateRequest & DisassociateCertificateRequest & DisassociateCertificateRequest)[K]
    }>): Request<DisassociateCertificateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateCertificate(
          this.ops["DisassociateCertificate"].applicator.apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): Request<GetJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJob(
          this.ops["GetJob"].applicator.apply(partialParams)
        );
    }

    invokeGetJobTemplate(partialParams: ToOptional<{
      [K in keyof GetJobTemplateRequest & keyof GetJobTemplateRequest & keyof GetJobTemplateRequest & keyof GetJobTemplateRequest & keyof GetJobTemplateRequest]: (GetJobTemplateRequest & GetJobTemplateRequest & GetJobTemplateRequest & GetJobTemplateRequest & GetJobTemplateRequest)[K]
    }>): Request<GetJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getJobTemplate(
          this.ops["GetJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetPreset(partialParams: ToOptional<{
      [K in keyof GetPresetRequest & keyof GetPresetRequest & keyof GetPresetRequest & keyof GetPresetRequest & keyof GetPresetRequest]: (GetPresetRequest & GetPresetRequest & GetPresetRequest & GetPresetRequest & GetPresetRequest)[K]
    }>): Request<GetPresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPreset(
          this.ops["GetPreset"].applicator.apply(partialParams)
        );
    }

    invokeGetQueue(partialParams: ToOptional<{
      [K in keyof GetQueueRequest & keyof GetQueueRequest & keyof GetQueueRequest & keyof GetQueueRequest & keyof GetQueueRequest]: (GetQueueRequest & GetQueueRequest & GetQueueRequest & GetQueueRequest & GetQueueRequest)[K]
    }>): Request<GetQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getQueue(
          this.ops["GetQueue"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutPolicy(partialParams: ToOptional<{
      [K in keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest]: (PutPolicyRequest & PutPolicyRequest & PutPolicyRequest & PutPolicyRequest & PutPolicyRequest)[K]
    }>): Request<PutPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putPolicy(
          this.ops["PutPolicy"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateJobTemplate(partialParams: ToOptional<{
      [K in keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest]: (UpdateJobTemplateRequest & UpdateJobTemplateRequest & UpdateJobTemplateRequest & UpdateJobTemplateRequest & UpdateJobTemplateRequest)[K]
    }>): Request<UpdateJobTemplateResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateJobTemplate(
          this.ops["UpdateJobTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePreset(partialParams: ToOptional<{
      [K in keyof UpdatePresetRequest & keyof UpdatePresetRequest & keyof UpdatePresetRequest & keyof UpdatePresetRequest & keyof UpdatePresetRequest]: (UpdatePresetRequest & UpdatePresetRequest & UpdatePresetRequest & UpdatePresetRequest & UpdatePresetRequest)[K]
    }>): Request<UpdatePresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePreset(
          this.ops["UpdatePreset"].applicator.apply(partialParams)
        );
    }

    invokeUpdateQueue(partialParams: ToOptional<{
      [K in keyof UpdateQueueRequest & keyof UpdateQueueRequest & keyof UpdateQueueRequest & keyof UpdateQueueRequest & keyof UpdateQueueRequest]: (UpdateQueueRequest & UpdateQueueRequest & UpdateQueueRequest & UpdateQueueRequest & UpdateQueueRequest)[K]
    }>): Request<UpdateQueueResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueue(
          this.ops["UpdateQueue"].applicator.apply(partialParams)
        );
    }
}