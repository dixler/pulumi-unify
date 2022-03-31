
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
const schema = require("../apis/elastictranscoder-2012-09-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elastictranscoder.Pipeline {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.elastictranscoder.Pipeline>) {
        super(...args)
        this.client = new awssdk.ElasticTranscoder()
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
      [K in keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest & keyof CancelJobRequest]: (CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest & CancelJobRequest)[K]
    }>): Request<CancelJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelJob(
          this.ops["CancelJob"].applicator.apply(partialParams)
        );
    }

    invokeCreateJob(partialParams: ToOptional<{
      [K in keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest & keyof CreateJobRequest]: (CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest & CreateJobRequest)[K]
    }>): Request<CreateJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createJob(
          this.ops["CreateJob"].applicator.apply(partialParams)
        );
    }

    invokeCreatePipeline(partialParams: ToOptional<{
      [K in keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof Omit<CreatePipelineRequest, "InputBucket"> & keyof CreatePipelineRequest & keyof CreatePipelineRequest & keyof CreatePipelineRequest]: (CreatePipelineRequest & CreatePipelineRequest & Omit<CreatePipelineRequest, "InputBucket"> & CreatePipelineRequest & CreatePipelineRequest & CreatePipelineRequest)[K]
    }>): Request<CreatePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPipeline(
          this.ops["CreatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeCreatePreset(partialParams: ToOptional<{
      [K in keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest & keyof CreatePresetRequest]: (CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest & CreatePresetRequest)[K]
    }>): Request<CreatePresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPreset(
          this.ops["CreatePreset"].applicator.apply(partialParams)
        );
    }

    invokeDeletePipeline(partialParams: ToOptional<{
      [K in keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest & keyof DeletePipelineRequest]: (DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest & DeletePipelineRequest)[K]
    }>): Request<DeletePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePipeline(
          this.ops["DeletePipeline"].applicator.apply(partialParams)
        );
    }

    invokeDeletePreset(partialParams: ToOptional<{
      [K in keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest & keyof DeletePresetRequest]: (DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest & DeletePresetRequest)[K]
    }>): Request<DeletePresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePreset(
          this.ops["DeletePreset"].applicator.apply(partialParams)
        );
    }

    invokeListJobsByPipeline(partialParams: ToOptional<{
      [K in keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest & keyof ListJobsByPipelineRequest]: (ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest & ListJobsByPipelineRequest)[K]
    }>): Request<ListJobsByPipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobsByPipeline(
          this.ops["ListJobsByPipeline"].applicator.apply(partialParams)
        );
    }

    invokeListJobsByStatus(partialParams: ToOptional<{
      [K in keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest & keyof ListJobsByStatusRequest]: (ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest & ListJobsByStatusRequest)[K]
    }>): Request<ListJobsByStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listJobsByStatus(
          this.ops["ListJobsByStatus"].applicator.apply(partialParams)
        );
    }

    invokeReadJob(partialParams: ToOptional<{
      [K in keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest & keyof ReadJobRequest]: (ReadJobRequest & ReadJobRequest & ReadJobRequest & ReadJobRequest & ReadJobRequest & ReadJobRequest)[K]
    }>): Request<ReadJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.readJob(
          this.ops["ReadJob"].applicator.apply(partialParams)
        );
    }

    invokeReadPipeline(partialParams: ToOptional<{
      [K in keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest & keyof ReadPipelineRequest]: (ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest & ReadPipelineRequest)[K]
    }>): Request<ReadPipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.readPipeline(
          this.ops["ReadPipeline"].applicator.apply(partialParams)
        );
    }

    invokeReadPreset(partialParams: ToOptional<{
      [K in keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest & keyof ReadPresetRequest]: (ReadPresetRequest & ReadPresetRequest & ReadPresetRequest & ReadPresetRequest & ReadPresetRequest & ReadPresetRequest)[K]
    }>): Request<ReadPresetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.readPreset(
          this.ops["ReadPreset"].applicator.apply(partialParams)
        );
    }

    invokeTestRole(partialParams: ToOptional<{
      [K in keyof TestRoleRequest & keyof TestRoleRequest & keyof Omit<TestRoleRequest, "InputBucket"> & keyof TestRoleRequest & keyof Omit<TestRoleRequest, "OutputBucket"> & keyof Omit<TestRoleRequest, "Role">]: (TestRoleRequest & TestRoleRequest & Omit<TestRoleRequest, "InputBucket"> & TestRoleRequest & Omit<TestRoleRequest, "OutputBucket"> & Omit<TestRoleRequest, "Role">)[K]
    }>): Request<TestRoleResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testRole(
          this.ops["TestRole"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePipeline(partialParams: ToOptional<{
      [K in keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest & keyof UpdatePipelineRequest]: (UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest & UpdatePipelineRequest)[K]
    }>): Request<UpdatePipelineResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipeline(
          this.ops["UpdatePipeline"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePipelineNotifications(partialParams: ToOptional<{
      [K in keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest & keyof UpdatePipelineNotificationsRequest]: (UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest & UpdatePipelineNotificationsRequest)[K]
    }>): Request<UpdatePipelineNotificationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipelineNotifications(
          this.ops["UpdatePipelineNotifications"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePipelineStatus(partialParams: ToOptional<{
      [K in keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest & keyof UpdatePipelineStatusRequest]: (UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest & UpdatePipelineStatusRequest)[K]
    }>): Request<UpdatePipelineStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePipelineStatus(
          this.ops["UpdatePipelineStatus"].applicator.apply(partialParams)
        );
    }
}