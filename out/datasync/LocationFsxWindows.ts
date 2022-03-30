
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datasync.LocationFsxWindows {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.datasync.LocationFsxWindows>) {
        super(...args)
        this.client = new awssdk.DataSync()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/datasync-2018-11-09.normal.json"), this.client)
    }

    invokeCancelTaskExecution(partialParams: ToOptional<{
      [K in keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest & keyof CancelTaskExecutionRequest]: (CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest & CancelTaskExecutionRequest)[K]
    }>): CancelTaskExecutionResponse {
        return this.client.cancelTaskExecution(
            this.ops["CancelTaskExecution"].apply(partialParams)
        );
    }

    invokeCreateAgent(partialParams: ToOptional<{
      [K in keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest & keyof CreateAgentRequest]: (CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest & CreateAgentRequest)[K]
    }>): CreateAgentResponse {
        return this.client.createAgent(
            this.ops["CreateAgent"].apply(partialParams)
        );
    }

    invokeCreateLocationEfs(partialParams: ToOptional<{
      [K in keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest & keyof CreateLocationEfsRequest]: (CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest & CreateLocationEfsRequest)[K]
    }>): CreateLocationEfsResponse {
        return this.client.createLocationEfs(
            this.ops["CreateLocationEfs"].apply(partialParams)
        );
    }

    invokeCreateLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest & keyof CreateLocationFsxLustreRequest]: (CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest & CreateLocationFsxLustreRequest)[K]
    }>): CreateLocationFsxLustreResponse {
        return this.client.createLocationFsxLustre(
            this.ops["CreateLocationFsxLustre"].apply(partialParams)
        );
    }

    invokeCreateLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest & keyof CreateLocationFsxWindowsRequest]: (CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest & CreateLocationFsxWindowsRequest)[K]
    }>): CreateLocationFsxWindowsResponse {
        return this.client.createLocationFsxWindows(
            this.ops["CreateLocationFsxWindows"].apply(partialParams)
        );
    }

    invokeCreateLocationHdfs(partialParams: ToOptional<{
      [K in keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest & keyof CreateLocationHdfsRequest]: (CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest & CreateLocationHdfsRequest)[K]
    }>): CreateLocationHdfsResponse {
        return this.client.createLocationHdfs(
            this.ops["CreateLocationHdfs"].apply(partialParams)
        );
    }

    invokeCreateLocationNfs(partialParams: ToOptional<{
      [K in keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest & keyof CreateLocationNfsRequest]: (CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest & CreateLocationNfsRequest)[K]
    }>): CreateLocationNfsResponse {
        return this.client.createLocationNfs(
            this.ops["CreateLocationNfs"].apply(partialParams)
        );
    }

    invokeCreateLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest & keyof CreateLocationObjectStorageRequest]: (CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest & CreateLocationObjectStorageRequest)[K]
    }>): CreateLocationObjectStorageResponse {
        return this.client.createLocationObjectStorage(
            this.ops["CreateLocationObjectStorage"].apply(partialParams)
        );
    }

    invokeCreateLocationS3(partialParams: ToOptional<{
      [K in keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request & keyof CreateLocationS3Request]: (CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request & CreateLocationS3Request)[K]
    }>): CreateLocationS3Response {
        return this.client.createLocationS3(
            this.ops["CreateLocationS3"].apply(partialParams)
        );
    }

    invokeCreateLocationSmb(partialParams: ToOptional<{
      [K in keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest & keyof CreateLocationSmbRequest]: (CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest & CreateLocationSmbRequest)[K]
    }>): CreateLocationSmbResponse {
        return this.client.createLocationSmb(
            this.ops["CreateLocationSmb"].apply(partialParams)
        );
    }

    invokeCreateTask(partialParams: ToOptional<{
      [K in keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest & keyof CreateTaskRequest]: (CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest & CreateTaskRequest)[K]
    }>): CreateTaskResponse {
        return this.client.createTask(
            this.ops["CreateTask"].apply(partialParams)
        );
    }

    invokeDeleteAgent(partialParams: ToOptional<{
      [K in keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest & keyof DeleteAgentRequest]: (DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest & DeleteAgentRequest)[K]
    }>): DeleteAgentResponse {
        return this.client.deleteAgent(
            this.ops["DeleteAgent"].apply(partialParams)
        );
    }

    invokeDeleteLocation(partialParams: ToOptional<{
      [K in keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest & keyof DeleteLocationRequest]: (DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest & DeleteLocationRequest)[K]
    }>): DeleteLocationResponse {
        return this.client.deleteLocation(
            this.ops["DeleteLocation"].apply(partialParams)
        );
    }

    invokeDeleteTask(partialParams: ToOptional<{
      [K in keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest & keyof DeleteTaskRequest]: (DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest & DeleteTaskRequest)[K]
    }>): DeleteTaskResponse {
        return this.client.deleteTask(
            this.ops["DeleteTask"].apply(partialParams)
        );
    }

    invokeDescribeAgent(partialParams: ToOptional<{
      [K in keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest & keyof DescribeAgentRequest]: (DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest & DescribeAgentRequest)[K]
    }>): DescribeAgentResponse {
        return this.client.describeAgent(
            this.ops["DescribeAgent"].apply(partialParams)
        );
    }

    invokeDescribeLocationEfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest & keyof DescribeLocationEfsRequest]: (DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest & DescribeLocationEfsRequest)[K]
    }>): DescribeLocationEfsResponse {
        return this.client.describeLocationEfs(
            this.ops["DescribeLocationEfs"].apply(partialParams)
        );
    }

    invokeDescribeLocationFsxLustre(partialParams: ToOptional<{
      [K in keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest & keyof DescribeLocationFsxLustreRequest]: (DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest & DescribeLocationFsxLustreRequest)[K]
    }>): DescribeLocationFsxLustreResponse {
        return this.client.describeLocationFsxLustre(
            this.ops["DescribeLocationFsxLustre"].apply(partialParams)
        );
    }

    invokeDescribeLocationFsxWindows(partialParams: ToOptional<{
      [K in keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest & keyof DescribeLocationFsxWindowsRequest]: (DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest & DescribeLocationFsxWindowsRequest)[K]
    }>): DescribeLocationFsxWindowsResponse {
        return this.client.describeLocationFsxWindows(
            this.ops["DescribeLocationFsxWindows"].apply(partialParams)
        );
    }

    invokeDescribeLocationHdfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest & keyof DescribeLocationHdfsRequest]: (DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest & DescribeLocationHdfsRequest)[K]
    }>): DescribeLocationHdfsResponse {
        return this.client.describeLocationHdfs(
            this.ops["DescribeLocationHdfs"].apply(partialParams)
        );
    }

    invokeDescribeLocationNfs(partialParams: ToOptional<{
      [K in keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest & keyof DescribeLocationNfsRequest]: (DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest & DescribeLocationNfsRequest)[K]
    }>): DescribeLocationNfsResponse {
        return this.client.describeLocationNfs(
            this.ops["DescribeLocationNfs"].apply(partialParams)
        );
    }

    invokeDescribeLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest & keyof DescribeLocationObjectStorageRequest]: (DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest & DescribeLocationObjectStorageRequest)[K]
    }>): DescribeLocationObjectStorageResponse {
        return this.client.describeLocationObjectStorage(
            this.ops["DescribeLocationObjectStorage"].apply(partialParams)
        );
    }

    invokeDescribeLocationS3(partialParams: ToOptional<{
      [K in keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request & keyof DescribeLocationS3Request]: (DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request & DescribeLocationS3Request)[K]
    }>): DescribeLocationS3Response {
        return this.client.describeLocationS3(
            this.ops["DescribeLocationS3"].apply(partialParams)
        );
    }

    invokeDescribeLocationSmb(partialParams: ToOptional<{
      [K in keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest & keyof DescribeLocationSmbRequest]: (DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest & DescribeLocationSmbRequest)[K]
    }>): DescribeLocationSmbResponse {
        return this.client.describeLocationSmb(
            this.ops["DescribeLocationSmb"].apply(partialParams)
        );
    }

    invokeDescribeTask(partialParams: ToOptional<{
      [K in keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest & keyof DescribeTaskRequest]: (DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest & DescribeTaskRequest)[K]
    }>): DescribeTaskResponse {
        return this.client.describeTask(
            this.ops["DescribeTask"].apply(partialParams)
        );
    }

    invokeDescribeTaskExecution(partialParams: ToOptional<{
      [K in keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest & keyof DescribeTaskExecutionRequest]: (DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest & DescribeTaskExecutionRequest)[K]
    }>): DescribeTaskExecutionResponse {
        return this.client.describeTaskExecution(
            this.ops["DescribeTaskExecution"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartTaskExecution(partialParams: ToOptional<{
      [K in keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest & keyof StartTaskExecutionRequest]: (StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest & StartTaskExecutionRequest)[K]
    }>): StartTaskExecutionResponse {
        return this.client.startTaskExecution(
            this.ops["StartTaskExecution"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAgent(partialParams: ToOptional<{
      [K in keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest & keyof UpdateAgentRequest]: (UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest & UpdateAgentRequest)[K]
    }>): UpdateAgentResponse {
        return this.client.updateAgent(
            this.ops["UpdateAgent"].apply(partialParams)
        );
    }

    invokeUpdateLocationHdfs(partialParams: ToOptional<{
      [K in keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest & keyof UpdateLocationHdfsRequest]: (UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest & UpdateLocationHdfsRequest)[K]
    }>): UpdateLocationHdfsResponse {
        return this.client.updateLocationHdfs(
            this.ops["UpdateLocationHdfs"].apply(partialParams)
        );
    }

    invokeUpdateLocationNfs(partialParams: ToOptional<{
      [K in keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest & keyof UpdateLocationNfsRequest]: (UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest & UpdateLocationNfsRequest)[K]
    }>): UpdateLocationNfsResponse {
        return this.client.updateLocationNfs(
            this.ops["UpdateLocationNfs"].apply(partialParams)
        );
    }

    invokeUpdateLocationObjectStorage(partialParams: ToOptional<{
      [K in keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest & keyof UpdateLocationObjectStorageRequest]: (UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest & UpdateLocationObjectStorageRequest)[K]
    }>): UpdateLocationObjectStorageResponse {
        return this.client.updateLocationObjectStorage(
            this.ops["UpdateLocationObjectStorage"].apply(partialParams)
        );
    }

    invokeUpdateLocationSmb(partialParams: ToOptional<{
      [K in keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest & keyof UpdateLocationSmbRequest]: (UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest & UpdateLocationSmbRequest)[K]
    }>): UpdateLocationSmbResponse {
        return this.client.updateLocationSmb(
            this.ops["UpdateLocationSmb"].apply(partialParams)
        );
    }

    invokeUpdateTask(partialParams: ToOptional<{
      [K in keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest & keyof UpdateTaskRequest]: (UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest & UpdateTaskRequest)[K]
    }>): UpdateTaskResponse {
        return this.client.updateTask(
            this.ops["UpdateTask"].apply(partialParams)
        );
    }

    invokeUpdateTaskExecution(partialParams: ToOptional<{
      [K in keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest & keyof UpdateTaskExecutionRequest]: (UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest & UpdateTaskExecutionRequest)[K]
    }>): UpdateTaskExecutionResponse {
        return this.client.updateTaskExecution(
            this.ops["UpdateTaskExecution"].apply(partialParams)
        );
    }
}