
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelJobRequest,
    CreateJobRequest,
    CreatePipelineRequest,
    CreatePresetRequest,
    DeletePipelineRequest,
    DeletePresetRequest,
    ListJobsByPipelineRequest,
    ListJobsByStatusRequest,
    ListPipelinesRequest,
    ListPresetsRequest,
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
    ListPipelinesResponse,
    ListPresetsResponse,
    ReadJobResponse,
    ReadPipelineResponse,
    ReadPresetResponse,
    TestRoleResponse,
    UpdatePipelineResponse,
    UpdatePipelineNotificationsResponse,
    UpdatePipelineStatusResponse
} from "aws-sdk/clients/elastictranscoder";
const schema = require("../apis/elastictranscoder-2012-09-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elastictranscoder.Preset {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elastictranscoder.Preset>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ElasticTranscoder()
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

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest]: (CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof Omit<CreatePipelineRequest, "Name">]: (CreatePipelineRequest)[K]
    }>): Request<CreatePipelineResponse, AWSError> {
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof Omit<CreatePresetRequest, "Name" | "Container">]: (CreatePresetRequest)[K]
    }>): Request<CreatePresetResponse, AWSError> {
        this.boot();
        return this.client.createPreset(
          this.ops["CreatePreset"].apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineRequest]: (DeletePipelineRequest)[K]
    }>): Request<DeletePipelineResponse, AWSError> {
        this.boot();
        return this.client.deletePipeline(
          this.ops["DeletePipeline"].apply(partialParams)
        );
    }

    invokeDeletePreset(partialParams: ToOptional<{
      [K in keyof DeletePresetRequest]: (DeletePresetRequest)[K]
    }>): Request<DeletePresetResponse, AWSError> {
        this.boot();
        return this.client.deletePreset(
          this.ops["DeletePreset"].apply(partialParams)
        );
    }

    invokeListJobsByPipeline(partialParams: ToOptional<{
      [K in keyof ListJobsByPipelineRequest]: (ListJobsByPipelineRequest)[K]
    }>): Request<ListJobsByPipelineResponse, AWSError> {
        this.boot();
        return this.client.listJobsByPipeline(
          this.ops["ListJobsByPipeline"].apply(partialParams)
        );
    }

    invokeListJobsByStatus(partialParams: ToOptional<{
      [K in keyof ListJobsByStatusRequest]: (ListJobsByStatusRequest)[K]
    }>): Request<ListJobsByStatusResponse, AWSError> {
        this.boot();
        return this.client.listJobsByStatus(
          this.ops["ListJobsByStatus"].apply(partialParams)
        );
    }

    invokeListPipelines(partialParams: ToOptional<{
      [K in keyof ListPipelinesRequest]: (ListPipelinesRequest)[K]
    }>): Request<ListPipelinesResponse, AWSError> {
        this.boot();
        return this.client.listPipelines(
          this.ops["ListPipelines"].apply(partialParams)
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

    invokeReadJob(partialParams: ToOptional<{
      [K in keyof ReadJobRequest]: (ReadJobRequest)[K]
    }>): Request<ReadJobResponse, AWSError> {
        this.boot();
        return this.client.readJob(
          this.ops["ReadJob"].apply(partialParams)
        );
    }

    invokeReadPipeline(partialParams: ToOptional<{
      [K in keyof ReadPipelineRequest]: (ReadPipelineRequest)[K]
    }>): Request<ReadPipelineResponse, AWSError> {
        this.boot();
        return this.client.readPipeline(
          this.ops["ReadPipeline"].apply(partialParams)
        );
    }

    invokeReadPreset(partialParams: ToOptional<{
      [K in keyof ReadPresetRequest]: (ReadPresetRequest)[K]
    }>): Request<ReadPresetResponse, AWSError> {
        this.boot();
        return this.client.readPreset(
          this.ops["ReadPreset"].apply(partialParams)
        );
    }

    invokeTestRole(partialParams: ToOptional<{
      [K in keyof TestRoleRequest]: (TestRoleRequest)[K]
    }>): Request<TestRoleResponse, AWSError> {
        this.boot();
        return this.client.testRole(
          this.ops["TestRole"].apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineRequest]: (UpdatePipelineRequest)[K]
    }>): Request<UpdatePipelineResponse, AWSError> {
        this.boot();
        return this.client.updatePipeline(
          this.ops["UpdatePipeline"].apply(partialParams)
        );
    }

    invokeUpdatePipelineNotifications(partialParams: ToOptional<{
      [K in keyof UpdatePipelineNotificationsRequest]: (UpdatePipelineNotificationsRequest)[K]
    }>): Request<UpdatePipelineNotificationsResponse, AWSError> {
        this.boot();
        return this.client.updatePipelineNotifications(
          this.ops["UpdatePipelineNotifications"].apply(partialParams)
        );
    }

    invokeUpdatePipelineStatus(partialParams: ToOptional<{
      [K in keyof UpdatePipelineStatusRequest]: (UpdatePipelineStatusRequest)[K]
    }>): Request<UpdatePipelineStatusResponse, AWSError> {
        this.boot();
        return this.client.updatePipelineStatus(
          this.ops["UpdatePipelineStatus"].apply(partialParams)
        );
    }
}