
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CancelTaskExecutionRequest,
    CreateAgentRequest,
    CreateLocationEfsRequest,
    CreateLocationFsxLustreRequest,
    CreateLocationFsxWindowsRequest,
    CreateLocationHdfsRequest,
    CreateLocationNfsRequest,
    CreateLocationObjectStorageRequest,
    CreateLocationS3Request,
    CreateLocationSmbRequest,
    CreateTaskRequest,
    DeleteAgentRequest,
    DeleteLocationRequest,
    DeleteTaskRequest,
    DescribeAgentRequest,
    DescribeLocationEfsRequest,
    DescribeLocationFsxLustreRequest,
    DescribeLocationFsxWindowsRequest,
    DescribeLocationHdfsRequest,
    DescribeLocationNfsRequest,
    DescribeLocationObjectStorageRequest,
    DescribeLocationS3Request,
    DescribeLocationSmbRequest,
    DescribeTaskRequest,
    DescribeTaskExecutionRequest,
    ListTagsForResourceRequest,
    StartTaskExecutionRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAgentRequest,
    UpdateLocationHdfsRequest,
    UpdateLocationNfsRequest,
    UpdateLocationObjectStorageRequest,
    UpdateLocationSmbRequest,
    UpdateTaskRequest,
    UpdateTaskExecutionRequest,
    CancelTaskExecutionResponse,
    CreateAgentResponse,
    CreateLocationEfsResponse,
    CreateLocationFsxLustreResponse,
    CreateLocationFsxWindowsResponse,
    CreateLocationHdfsResponse,
    CreateLocationNfsResponse,
    CreateLocationObjectStorageResponse,
    CreateLocationS3Response,
    CreateLocationSmbResponse,
    CreateTaskResponse,
    DeleteAgentResponse,
    DeleteLocationResponse,
    DeleteTaskResponse,
    DescribeAgentResponse,
    DescribeLocationEfsResponse,
    DescribeLocationFsxLustreResponse,
    DescribeLocationFsxWindowsResponse,
    DescribeLocationHdfsResponse,
    DescribeLocationNfsResponse,
    DescribeLocationObjectStorageResponse,
    DescribeLocationS3Response,
    DescribeLocationSmbResponse,
    DescribeTaskResponse,
    DescribeTaskExecutionResponse,
    ListTagsForResourceResponse,
    StartTaskExecutionResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAgentResponse,
    UpdateLocationHdfsResponse,
    UpdateLocationNfsResponse,
    UpdateLocationObjectStorageResponse,
    UpdateLocationSmbResponse,
    UpdateTaskResponse,
    UpdateTaskExecutionResponse
} from "aws-sdk/clients/datasync";
const schema = require("../apis/datasync-2018-11-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datasync.LocationFsxLustre {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.datasync.LocationFsxLustre>) {
        super(...args)
        this.client = new awssdk.DataSync()
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

    invokeCancelTaskExecution(partialParams: ToOptional<{
      [K in keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest]: (CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest)[K]
    }>): Request<CancelTaskExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelTaskExecution(
          this.ops["CancelTaskExecution"].applicator.apply(partialParams)
        );
    }

    invokeCreateAgent(partialParams: ToOptional<{
      [K in keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest]: (CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest)[K]
    }>): Request<CreateAgentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAgent(
          this.ops["CreateAgent"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationEfs(partialParams: ToOptional<{
      [K in keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest]: (CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest)[K]
    }>): Request<CreateLocationEfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationEfs(
          this.ops["CreateLocationEfs"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest]: (CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest)[K]
    }>): Request<CreateLocationFsxLustreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationFsxLustre(
          this.ops["CreateLocationFsxLustre"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest]: (CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest)[K]
    }>): Request<CreateLocationFsxWindowsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationFsxWindows(
          this.ops["CreateLocationFsxWindows"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationHdfs(partialParams: ToOptional<{
      [K in keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest]: (CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest)[K]
    }>): Request<CreateLocationHdfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationHdfs(
          this.ops["CreateLocationHdfs"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationNfs(partialParams: ToOptional<{
      [K in keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest]: (CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest)[K]
    }>): Request<CreateLocationNfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationNfs(
          this.ops["CreateLocationNfs"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest]: (CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest)[K]
    }>): Request<CreateLocationObjectStorageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationObjectStorage(
          this.ops["CreateLocationObjectStorage"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationS3(partialParams: ToOptional<{
      [K in keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request]: (CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request)[K]
    }>): Request<CreateLocationS3Response, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationS3(
          this.ops["CreateLocationS3"].applicator.apply(partialParams)
        );
    }

    invokeCreateLocationSmb(partialParams: ToOptional<{
      [K in keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest]: (CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest)[K]
    }>): Request<CreateLocationSmbResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLocationSmb(
          this.ops["CreateLocationSmb"].applicator.apply(partialParams)
        );
    }

    invokeCreateTask(partialParams: ToOptional<{
      [K in keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest]: (CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest)[K]
    }>): Request<CreateTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTask(
          this.ops["CreateTask"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAgent(partialParams: ToOptional<{
      [K in keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest]: (DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest)[K]
    }>): Request<DeleteAgentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAgent(
          this.ops["DeleteAgent"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLocation(partialParams: ToOptional<{
      [K in keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest]: (DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest)[K]
    }>): Request<DeleteLocationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLocation(
          this.ops["DeleteLocation"].applicator.apply(partialParams)
        );
    }

    invokeDeleteTask(partialParams: ToOptional<{
      [K in keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest]: (DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest)[K]
    }>): Request<DeleteTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTask(
          this.ops["DeleteTask"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAgent(partialParams: ToOptional<{
      [K in keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest]: (DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest)[K]
    }>): Request<DescribeAgentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAgent(
          this.ops["DescribeAgent"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationEfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest]: (DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest)[K]
    }>): Request<DescribeLocationEfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationEfs(
          this.ops["DescribeLocationEfs"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest]: (DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest)[K]
    }>): Request<DescribeLocationFsxLustreResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationFsxLustre(
          this.ops["DescribeLocationFsxLustre"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest]: (DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest)[K]
    }>): Request<DescribeLocationFsxWindowsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationFsxWindows(
          this.ops["DescribeLocationFsxWindows"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationHdfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest]: (DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest)[K]
    }>): Request<DescribeLocationHdfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationHdfs(
          this.ops["DescribeLocationHdfs"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationNfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest]: (DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest)[K]
    }>): Request<DescribeLocationNfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationNfs(
          this.ops["DescribeLocationNfs"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest]: (DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest)[K]
    }>): Request<DescribeLocationObjectStorageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationObjectStorage(
          this.ops["DescribeLocationObjectStorage"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationS3(partialParams: ToOptional<{
      [K in keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request]: (DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request)[K]
    }>): Request<DescribeLocationS3Response, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationS3(
          this.ops["DescribeLocationS3"].applicator.apply(partialParams)
        );
    }

    invokeDescribeLocationSmb(partialParams: ToOptional<{
      [K in keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest]: (DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest)[K]
    }>): Request<DescribeLocationSmbResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeLocationSmb(
          this.ops["DescribeLocationSmb"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTask(partialParams: ToOptional<{
      [K in keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest]: (DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest)[K]
    }>): Request<DescribeTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTask(
          this.ops["DescribeTask"].applicator.apply(partialParams)
        );
    }

    invokeDescribeTaskExecution(partialParams: ToOptional<{
      [K in keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest]: (DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest)[K]
    }>): Request<DescribeTaskExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTaskExecution(
          this.ops["DescribeTaskExecution"].applicator.apply(partialParams)
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

    invokeStartTaskExecution(partialParams: ToOptional<{
      [K in keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest]: (StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest)[K]
    }>): Request<StartTaskExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startTaskExecution(
          this.ops["StartTaskExecution"].applicator.apply(partialParams)
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

    invokeUpdateAgent(partialParams: ToOptional<{
      [K in keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest]: (UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest)[K]
    }>): Request<UpdateAgentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAgent(
          this.ops["UpdateAgent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLocationHdfs(partialParams: ToOptional<{
      [K in keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest]: (UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest)[K]
    }>): Request<UpdateLocationHdfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLocationHdfs(
          this.ops["UpdateLocationHdfs"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLocationNfs(partialParams: ToOptional<{
      [K in keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest]: (UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest)[K]
    }>): Request<UpdateLocationNfsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLocationNfs(
          this.ops["UpdateLocationNfs"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest]: (UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest)[K]
    }>): Request<UpdateLocationObjectStorageResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLocationObjectStorage(
          this.ops["UpdateLocationObjectStorage"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLocationSmb(partialParams: ToOptional<{
      [K in keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest]: (UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest)[K]
    }>): Request<UpdateLocationSmbResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLocationSmb(
          this.ops["UpdateLocationSmb"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTask(partialParams: ToOptional<{
      [K in keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest]: (UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest)[K]
    }>): Request<UpdateTaskResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTask(
          this.ops["UpdateTask"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTaskExecution(partialParams: ToOptional<{
      [K in keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest]: (UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest)[K]
    }>): Request<UpdateTaskExecutionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTaskExecution(
          this.ops["UpdateTaskExecution"].applicator.apply(partialParams)
        );
    }
}