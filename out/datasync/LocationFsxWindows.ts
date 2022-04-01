
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
    ListAgentsRequest,
    ListLocationsRequest,
    ListTagsForResourceRequest,
    ListTaskExecutionsRequest,
    ListTasksRequest,
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
    ListAgentsResponse,
    ListLocationsResponse,
    ListTagsForResourceResponse,
    ListTaskExecutionsResponse,
    ListTasksResponse,
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

export default class extends aws.datasync.LocationFsxWindows {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.datasync.LocationFsxWindows>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DataSync()
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

    invokeCancelTaskExecution(partialParams: ToOptional<{
      [K in keyof CancelTaskExecutionRequest]: (CancelTaskExecutionRequest)[K]
    }>): Request<CancelTaskExecutionResponse, AWSError> {
        this.boot();
        return this.client.cancelTaskExecution(
          this.ops["CancelTaskExecution"].apply(partialParams)
        );
    }

    invokeCreateAgent(partialParams: ToOptional<{
      [K in keyof CreateAgentRequest]: (CreateAgentRequest)[K]
    }>): Request<CreateAgentResponse, AWSError> {
        this.boot();
        return this.client.createAgent(
          this.ops["CreateAgent"].apply(partialParams)
        );
    }

    invokeCreateLocationEfs(partialParams: ToOptional<{
      [K in keyof CreateLocationEfsRequest]: (CreateLocationEfsRequest)[K]
    }>): Request<CreateLocationEfsResponse, AWSError> {
        this.boot();
        return this.client.createLocationEfs(
          this.ops["CreateLocationEfs"].apply(partialParams)
        );
    }

    invokeCreateLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxLustreRequest & keyof Omit<CreateLocationFsxLustreRequest, "FsxFilesystemArn">]: (CreateLocationFsxLustreRequest)[K]
    }>): Request<CreateLocationFsxLustreResponse, AWSError> {
        this.boot();
        return this.client.createLocationFsxLustre(
          this.ops["CreateLocationFsxLustre"].apply(partialParams)
        );
    }

    invokeCreateLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxWindowsRequest & keyof Omit<CreateLocationFsxWindowsRequest, "FsxFilesystemArn" | "User" | "Password">]: (CreateLocationFsxWindowsRequest)[K]
    }>): Request<CreateLocationFsxWindowsResponse, AWSError> {
        this.boot();
        return this.client.createLocationFsxWindows(
          this.ops["CreateLocationFsxWindows"].apply(partialParams)
        );
    }

    invokeCreateLocationHdfs(partialParams: ToOptional<{
      [K in keyof CreateLocationHdfsRequest]: (CreateLocationHdfsRequest)[K]
    }>): Request<CreateLocationHdfsResponse, AWSError> {
        this.boot();
        return this.client.createLocationHdfs(
          this.ops["CreateLocationHdfs"].apply(partialParams)
        );
    }

    invokeCreateLocationNfs(partialParams: ToOptional<{
      [K in keyof CreateLocationNfsRequest & keyof Omit<CreateLocationNfsRequest, "Subdirectory">]: (CreateLocationNfsRequest)[K]
    }>): Request<CreateLocationNfsResponse, AWSError> {
        this.boot();
        return this.client.createLocationNfs(
          this.ops["CreateLocationNfs"].apply(partialParams)
        );
    }

    invokeCreateLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof CreateLocationObjectStorageRequest]: (CreateLocationObjectStorageRequest)[K]
    }>): Request<CreateLocationObjectStorageResponse, AWSError> {
        this.boot();
        return this.client.createLocationObjectStorage(
          this.ops["CreateLocationObjectStorage"].apply(partialParams)
        );
    }

    invokeCreateLocationS3(partialParams: ToOptional<{
      [K in keyof CreateLocationS3Request]: (CreateLocationS3Request)[K]
    }>): Request<CreateLocationS3Response, AWSError> {
        this.boot();
        return this.client.createLocationS3(
          this.ops["CreateLocationS3"].apply(partialParams)
        );
    }

    invokeCreateLocationSmb(partialParams: ToOptional<{
      [K in keyof CreateLocationSmbRequest & keyof Omit<CreateLocationSmbRequest, "Subdirectory" | "User" | "Password">]: (CreateLocationSmbRequest)[K]
    }>): Request<CreateLocationSmbResponse, AWSError> {
        this.boot();
        return this.client.createLocationSmb(
          this.ops["CreateLocationSmb"].apply(partialParams)
        );
    }

    invokeCreateTask(partialParams: ToOptional<{
      [K in keyof CreateTaskRequest]: (CreateTaskRequest)[K]
    }>): Request<CreateTaskResponse, AWSError> {
        this.boot();
        return this.client.createTask(
          this.ops["CreateTask"].apply(partialParams)
        );
    }

    invokeDeleteAgent(partialParams: ToOptional<{
      [K in keyof DeleteAgentRequest]: (DeleteAgentRequest)[K]
    }>): Request<DeleteAgentResponse, AWSError> {
        this.boot();
        return this.client.deleteAgent(
          this.ops["DeleteAgent"].apply(partialParams)
        );
    }

    invokeDeleteLocation(partialParams: ToOptional<{
      [K in keyof DeleteLocationRequest]: (DeleteLocationRequest)[K]
    }>): Request<DeleteLocationResponse, AWSError> {
        this.boot();
        return this.client.deleteLocation(
          this.ops["DeleteLocation"].apply(partialParams)
        );
    }

    invokeDeleteTask(partialParams: ToOptional<{
      [K in keyof DeleteTaskRequest]: (DeleteTaskRequest)[K]
    }>): Request<DeleteTaskResponse, AWSError> {
        this.boot();
        return this.client.deleteTask(
          this.ops["DeleteTask"].apply(partialParams)
        );
    }

    invokeDescribeAgent(partialParams: ToOptional<{
      [K in keyof DescribeAgentRequest]: (DescribeAgentRequest)[K]
    }>): Request<DescribeAgentResponse, AWSError> {
        this.boot();
        return this.client.describeAgent(
          this.ops["DescribeAgent"].apply(partialParams)
        );
    }

    invokeDescribeLocationEfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationEfsRequest]: (DescribeLocationEfsRequest)[K]
    }>): Request<DescribeLocationEfsResponse, AWSError> {
        this.boot();
        return this.client.describeLocationEfs(
          this.ops["DescribeLocationEfs"].apply(partialParams)
        );
    }

    invokeDescribeLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof DescribeLocationFsxLustreRequest]: (DescribeLocationFsxLustreRequest)[K]
    }>): Request<DescribeLocationFsxLustreResponse, AWSError> {
        this.boot();
        return this.client.describeLocationFsxLustre(
          this.ops["DescribeLocationFsxLustre"].apply(partialParams)
        );
    }

    invokeDescribeLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof DescribeLocationFsxWindowsRequest]: (DescribeLocationFsxWindowsRequest)[K]
    }>): Request<DescribeLocationFsxWindowsResponse, AWSError> {
        this.boot();
        return this.client.describeLocationFsxWindows(
          this.ops["DescribeLocationFsxWindows"].apply(partialParams)
        );
    }

    invokeDescribeLocationHdfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationHdfsRequest]: (DescribeLocationHdfsRequest)[K]
    }>): Request<DescribeLocationHdfsResponse, AWSError> {
        this.boot();
        return this.client.describeLocationHdfs(
          this.ops["DescribeLocationHdfs"].apply(partialParams)
        );
    }

    invokeDescribeLocationNfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationNfsRequest]: (DescribeLocationNfsRequest)[K]
    }>): Request<DescribeLocationNfsResponse, AWSError> {
        this.boot();
        return this.client.describeLocationNfs(
          this.ops["DescribeLocationNfs"].apply(partialParams)
        );
    }

    invokeDescribeLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof DescribeLocationObjectStorageRequest]: (DescribeLocationObjectStorageRequest)[K]
    }>): Request<DescribeLocationObjectStorageResponse, AWSError> {
        this.boot();
        return this.client.describeLocationObjectStorage(
          this.ops["DescribeLocationObjectStorage"].apply(partialParams)
        );
    }

    invokeDescribeLocationS3(partialParams: ToOptional<{
      [K in keyof DescribeLocationS3Request]: (DescribeLocationS3Request)[K]
    }>): Request<DescribeLocationS3Response, AWSError> {
        this.boot();
        return this.client.describeLocationS3(
          this.ops["DescribeLocationS3"].apply(partialParams)
        );
    }

    invokeDescribeLocationSmb(partialParams: ToOptional<{
      [K in keyof DescribeLocationSmbRequest]: (DescribeLocationSmbRequest)[K]
    }>): Request<DescribeLocationSmbResponse, AWSError> {
        this.boot();
        return this.client.describeLocationSmb(
          this.ops["DescribeLocationSmb"].apply(partialParams)
        );
    }

    invokeDescribeTask(partialParams: ToOptional<{
      [K in keyof DescribeTaskRequest]: (DescribeTaskRequest)[K]
    }>): Request<DescribeTaskResponse, AWSError> {
        this.boot();
        return this.client.describeTask(
          this.ops["DescribeTask"].apply(partialParams)
        );
    }

    invokeDescribeTaskExecution(partialParams: ToOptional<{
      [K in keyof DescribeTaskExecutionRequest]: (DescribeTaskExecutionRequest)[K]
    }>): Request<DescribeTaskExecutionResponse, AWSError> {
        this.boot();
        return this.client.describeTaskExecution(
          this.ops["DescribeTaskExecution"].apply(partialParams)
        );
    }

    invokeListAgents(partialParams: ToOptional<{
      [K in keyof ListAgentsRequest]: (ListAgentsRequest)[K]
    }>): Request<ListAgentsResponse, AWSError> {
        this.boot();
        return this.client.listAgents(
          this.ops["ListAgents"].apply(partialParams)
        );
    }

    invokeListLocations(partialParams: ToOptional<{
      [K in keyof ListLocationsRequest]: (ListLocationsRequest)[K]
    }>): Request<ListLocationsResponse, AWSError> {
        this.boot();
        return this.client.listLocations(
          this.ops["ListLocations"].apply(partialParams)
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

    invokeListTaskExecutions(partialParams: ToOptional<{
      [K in keyof ListTaskExecutionsRequest]: (ListTaskExecutionsRequest)[K]
    }>): Request<ListTaskExecutionsResponse, AWSError> {
        this.boot();
        return this.client.listTaskExecutions(
          this.ops["ListTaskExecutions"].apply(partialParams)
        );
    }

    invokeListTasks(partialParams: ToOptional<{
      [K in keyof ListTasksRequest]: (ListTasksRequest)[K]
    }>): Request<ListTasksResponse, AWSError> {
        this.boot();
        return this.client.listTasks(
          this.ops["ListTasks"].apply(partialParams)
        );
    }

    invokeStartTaskExecution(partialParams: ToOptional<{
      [K in keyof StartTaskExecutionRequest]: (StartTaskExecutionRequest)[K]
    }>): Request<StartTaskExecutionResponse, AWSError> {
        this.boot();
        return this.client.startTaskExecution(
          this.ops["StartTaskExecution"].apply(partialParams)
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

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAgent(partialParams: ToOptional<{
      [K in keyof UpdateAgentRequest]: (UpdateAgentRequest)[K]
    }>): Request<UpdateAgentResponse, AWSError> {
        this.boot();
        return this.client.updateAgent(
          this.ops["UpdateAgent"].apply(partialParams)
        );
    }

    invokeUpdateLocationHdfs(partialParams: ToOptional<{
      [K in keyof UpdateLocationHdfsRequest]: (UpdateLocationHdfsRequest)[K]
    }>): Request<UpdateLocationHdfsResponse, AWSError> {
        this.boot();
        return this.client.updateLocationHdfs(
          this.ops["UpdateLocationHdfs"].apply(partialParams)
        );
    }

    invokeUpdateLocationNfs(partialParams: ToOptional<{
      [K in keyof UpdateLocationNfsRequest]: (UpdateLocationNfsRequest)[K]
    }>): Request<UpdateLocationNfsResponse, AWSError> {
        this.boot();
        return this.client.updateLocationNfs(
          this.ops["UpdateLocationNfs"].apply(partialParams)
        );
    }

    invokeUpdateLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof UpdateLocationObjectStorageRequest]: (UpdateLocationObjectStorageRequest)[K]
    }>): Request<UpdateLocationObjectStorageResponse, AWSError> {
        this.boot();
        return this.client.updateLocationObjectStorage(
          this.ops["UpdateLocationObjectStorage"].apply(partialParams)
        );
    }

    invokeUpdateLocationSmb(partialParams: ToOptional<{
      [K in keyof UpdateLocationSmbRequest]: (UpdateLocationSmbRequest)[K]
    }>): Request<UpdateLocationSmbResponse, AWSError> {
        this.boot();
        return this.client.updateLocationSmb(
          this.ops["UpdateLocationSmb"].apply(partialParams)
        );
    }

    invokeUpdateTask(partialParams: ToOptional<{
      [K in keyof UpdateTaskRequest]: (UpdateTaskRequest)[K]
    }>): Request<UpdateTaskResponse, AWSError> {
        this.boot();
        return this.client.updateTask(
          this.ops["UpdateTask"].apply(partialParams)
        );
    }

    invokeUpdateTaskExecution(partialParams: ToOptional<{
      [K in keyof UpdateTaskExecutionRequest]: (UpdateTaskExecutionRequest)[K]
    }>): Request<UpdateTaskExecutionResponse, AWSError> {
        this.boot();
        return this.client.updateTaskExecution(
          this.ops["UpdateTaskExecution"].apply(partialParams)
        );
    }
}