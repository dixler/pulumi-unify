
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CancelJobRequest,
    CreateJobRequest,
    CreatePipelineRequest,
    CreatePresetRequest,
    DeletePipelineRequest,
    DeletePresetRequest,
    ListJobsByPipelineRequest,
    ListJobsByStatusRequest,
    ReadJobRequest,
    ReadPipelineRequest,
    ReadPresetRequest,
    TestRoleRequest,
    UpdatePipelineRequest,
    UpdatePipelineNotificationsRequest,
    UpdatePipelineStatusRequest,
    CancelJobResponse,
    CreateJobResponse,
    CreatePipelineResponse,
    CreatePresetResponse,
    DeletePipelineResponse,
    DeletePresetResponse,
    ListJobsByPipelineResponse,
    ListJobsByStatusResponse,
    ReadJobResponse,
    ReadPipelineResponse,
    ReadPresetResponse,
    TestRoleResponse,
    UpdatePipelineResponse,
    UpdatePipelineNotificationsResponse,
    UpdatePipelineStatusResponse
} from "aws-sdk/clients/elastictranscoder";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elastictranscoder.Preset {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.elastictranscoder.Preset>) {
        super(...args)
        this.client = new awssdk.ElasticTranscoder()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/elastictranscoder-2012-09-25.normal.json"), this.client)
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

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest]: (CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest)[K]
    }>): CreatePipelineResponse {
        return this.client.createPipeline(
            this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest]: (CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest)[K]
    }>): CreatePresetResponse {
        return this.client.createPreset(
            this.ops["CreatePreset"].apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest]: (DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest)[K]
    }>): DeletePipelineResponse {
        return this.client.deletePipeline(
            this.ops["DeletePipeline"].apply(partialParams)
        );
    }

    invokeDeletePreset(partialParams: ToOptional<{
      [K in keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest]: (DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest)[K]
    }>): DeletePresetResponse {
        return this.client.deletePreset(
            this.ops["DeletePreset"].apply(partialParams)
        );
    }

    invokeListJobsByPipeline(partialParams: ToOptional<{
      [K in keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest]: (ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest)[K]
    }>): ListJobsByPipelineResponse {
        return this.client.listJobsByPipeline(
            this.ops["ListJobsByPipeline"].apply(partialParams)
        );
    }

    invokeListJobsByStatus(partialParams: ToOptional<{
      [K in keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest]: (ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest)[K]
    }>): ListJobsByStatusResponse {
        return this.client.listJobsByStatus(
            this.ops["ListJobsByStatus"].apply(partialParams)
        );
    }

    invokeReadJob(partialParams: ToOptional<{
      [K in keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest]: (ReadJobRequest & ReadJobRequest & ReadJobRequest & ReadJobRequest & ReadJobRequest)[K]
    }>): ReadJobResponse {
        return this.client.readJob(
            this.ops["ReadJob"].apply(partialParams)
        );
    }

    invokeReadPipeline(partialParams: ToOptional<{
      [K in keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest]: (ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest)[K]
    }>): ReadPipelineResponse {
        return this.client.readPipeline(
            this.ops["ReadPipeline"].apply(partialParams)
        );
    }

    invokeReadPreset(partialParams: ToOptional<{
      [K in keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest]: (ReadPresetRequest & ReadPresetRequest & ReadPresetRequest & ReadPresetRequest & ReadPresetRequest)[K]
    }>): ReadPresetResponse {
        return this.client.readPreset(
            this.ops["ReadPreset"].apply(partialParams)
        );
    }

    invokeTestRole(partialParams: ToOptional<{
      [K in keyof TestRoleRequest & keyof TestRoleRequest & keyof TestRoleRequest & keyof TestRoleRequest & keyof TestRoleRequest]: (TestRoleRequest & TestRoleRequest & TestRoleRequest & TestRoleRequest & TestRoleRequest)[K]
    }>): TestRoleResponse {
        return this.client.testRole(
            this.ops["TestRole"].apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest]: (UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest)[K]
    }>): UpdatePipelineResponse {
        return this.client.updatePipeline(
            this.ops["UpdatePipeline"].apply(partialParams)
        );
    }

    invokeUpdatePipelineNotifications(partialParams: ToOptional<{
      [K in keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest]: (UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest)[K]
    }>): UpdatePipelineNotificationsResponse {
        return this.client.updatePipelineNotifications(
            this.ops["UpdatePipelineNotifications"].apply(partialParams)
        );
    }

    invokeUpdatePipelineStatus(partialParams: ToOptional<{
      [K in keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest]: (UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest)[K]
    }>): UpdatePipelineStatusResponse {
        return this.client.updatePipelineStatus(
            this.ops["UpdatePipelineStatus"].apply(partialParams)
        );
    }
}