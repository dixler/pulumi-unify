
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediaconvert.Queue {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.mediaconvert.Queue>) {
        super(...args)
        this.client = new awssdk.MediaConvert()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/mediaconvert-2017-08-29.normal.json"), this.client)
    }

    invokeAssociateCertificate(partialParams: ToOptional<{
      [K in keyof AssociateCertificateRequest & keyof AssociateCertificateRequest & keyof AssociateCertificateRequest & keyof AssociateCertificateRequest & keyof AssociateCertificateRequest]: (AssociateCertificateRequest & AssociateCertificateRequest & AssociateCertificateRequest & AssociateCertificateRequest & AssociateCertificateRequest)[K]
    }>): AssociateCertificateResponse {
        return this.client.associateCertificate(
            this.ops["AssociateCertificate"].apply(partialParams)
        );
    }

    invokeCancelJob(partialParams: ToOptional<{
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): CancelJobResponse {
        return this.client.cancelJob(
            this.ops["CancelJob"].apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): CreateJobResponse {
        return this.client.createJob(
            this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreateJobTemplate(partialParams: ToOptional<{
      [K in keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest & keyof CreateJobTemplateRequest]: (CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest & CreateJobTemplateRequest)[K]
    }>): CreateJobTemplateResponse {
        return this.client.createJobTemplate(
            this.ops["CreateJobTemplate"].apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest]: (CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest)[K]
    }>): CreatePresetResponse {
        return this.client.createPreset(
            this.ops["CreatePreset"].apply(partialParams)
        );
    }

    invokeCreateQueue(partialParams: ToOptional<{
      [K in keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest & keyof CreateQueueRequest]: (CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest & CreateQueueRequest)[K]
    }>): CreateQueueResponse {
        return this.client.createQueue(
            this.ops["CreateQueue"].apply(partialParams)
        );
    }

    invokeDeleteJobTemplate(partialParams: ToOptional<{
      [K in keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest & keyof DeleteJobTemplateRequest]: (DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest & DeleteJobTemplateRequest)[K]
    }>): DeleteJobTemplateResponse {
        return this.client.deleteJobTemplate(
            this.ops["DeleteJobTemplate"].apply(partialParams)
        );
    }

    invokeDeletePreset(partialParams: ToOptional<{
      [K in keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest]: (DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest)[K]
    }>): DeletePresetResponse {
        return this.client.deletePreset(
            this.ops["DeletePreset"].apply(partialParams)
        );
    }

    invokeDeleteQueue(partialParams: ToOptional<{
      [K in keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest & keyof DeleteQueueRequest]: (DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest & DeleteQueueRequest)[K]
    }>): DeleteQueueResponse {
        return this.client.deleteQueue(
            this.ops["DeleteQueue"].apply(partialParams)
        );
    }

    invokeDisassociateCertificate(partialParams: ToOptional<{
      [K in keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest & keyof DisassociateCertificateRequest]: (DisassociateCertificateRequest & DisassociateCertificateRequest & DisassociateCertificateRequest & DisassociateCertificateRequest & DisassociateCertificateRequest)[K]
    }>): DisassociateCertificateResponse {
        return this.client.disassociateCertificate(
            this.ops["DisassociateCertificate"].apply(partialParams)
        );
    }

    invokeGetJob(partialParams: ToOptional<{
      [K in keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest & keyof GetJobRequest]: (GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest & GetJobRequest)[K]
    }>): GetJobResponse {
        return this.client.getJob(
            this.ops["GetJob"].apply(partialParams)
        );
    }

    invokeGetJobTemplate(partialParams: ToOptional<{
      [K in keyof GetJobTemplateRequest & keyof GetJobTemplateRequest & keyof GetJobTemplateRequest & keyof GetJobTemplateRequest & keyof GetJobTemplateRequest]: (GetJobTemplateRequest & GetJobTemplateRequest & GetJobTemplateRequest & GetJobTemplateRequest & GetJobTemplateRequest)[K]
    }>): GetJobTemplateResponse {
        return this.client.getJobTemplate(
            this.ops["GetJobTemplate"].apply(partialParams)
        );
    }

    invokeGetPreset(partialParams: ToOptional<{
      [K in keyof GetPresetRequest & keyof GetPresetRequest & keyof GetPresetRequest & keyof GetPresetRequest & keyof GetPresetRequest]: (GetPresetRequest & GetPresetRequest & GetPresetRequest & GetPresetRequest & GetPresetRequest)[K]
    }>): GetPresetResponse {
        return this.client.getPreset(
            this.ops["GetPreset"].apply(partialParams)
        );
    }

    invokeGetQueue(partialParams: ToOptional<{
      [K in keyof GetQueueRequest & keyof GetQueueRequest & keyof GetQueueRequest & keyof GetQueueRequest & keyof GetQueueRequest]: (GetQueueRequest & GetQueueRequest & GetQueueRequest & GetQueueRequest & GetQueueRequest)[K]
    }>): GetQueueResponse {
        return this.client.getQueue(
            this.ops["GetQueue"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutPolicy(partialParams: ToOptional<{
      [K in keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest & keyof PutPolicyRequest]: (PutPolicyRequest & PutPolicyRequest & PutPolicyRequest & PutPolicyRequest & PutPolicyRequest)[K]
    }>): PutPolicyResponse {
        return this.client.putPolicy(
            this.ops["PutPolicy"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateJobTemplate(partialParams: ToOptional<{
      [K in keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest & keyof UpdateJobTemplateRequest]: (UpdateJobTemplateRequest & UpdateJobTemplateRequest & UpdateJobTemplateRequest & UpdateJobTemplateRequest & UpdateJobTemplateRequest)[K]
    }>): UpdateJobTemplateResponse {
        return this.client.updateJobTemplate(
            this.ops["UpdateJobTemplate"].apply(partialParams)
        );
    }

    invokeUpdatePreset(partialParams: ToOptional<{
      [K in keyof UpdatePresetRequest & keyof UpdatePresetRequest & keyof UpdatePresetRequest & keyof UpdatePresetRequest & keyof UpdatePresetRequest]: (UpdatePresetRequest & UpdatePresetRequest & UpdatePresetRequest & UpdatePresetRequest & UpdatePresetRequest)[K]
    }>): UpdatePresetResponse {
        return this.client.updatePreset(
            this.ops["UpdatePreset"].apply(partialParams)
        );
    }

    invokeUpdateQueue(partialParams: ToOptional<{
      [K in keyof UpdateQueueRequest & keyof UpdateQueueRequest & keyof UpdateQueueRequest & keyof UpdateQueueRequest & keyof UpdateQueueRequest]: (UpdateQueueRequest & UpdateQueueRequest & UpdateQueueRequest & UpdateQueueRequest & UpdateQueueRequest)[K]
    }>): UpdateQueueResponse {
        return this.client.updateQueue(
            this.ops["UpdateQueue"].apply(partialParams)
        );
    }
}