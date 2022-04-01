
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateTaskRequest,
    DeleteTaskRequest,
    DescribeTaskRequest,
    StartTaskExecutionRequest,
    UpdateTaskRequest,
    CreateTaskResponse,
    DeleteTaskResponse,
    DescribeTaskResponse,
    StartTaskExecutionResponse,
    UpdateTaskResponse
} from "aws-sdk/clients/datasync";
const schema = require("../apis/datasync-2018-11-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.datasync.Task {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.datasync.Task>) {
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

    invokeCreateTask(partialParams: ToOptional<{
      [K in keyof CreateTaskRequest & keyof Omit<CreateTaskRequest, "SourceLocationArn" | "DestinationLocationArn">]: (CreateTaskRequest)[K]
    }>): Request<CreateTaskResponse, AWSError> {
        this.boot();
        return this.client.createTask(
          this.ops["CreateTask"].apply(partialParams)
        );
    }

    invokeDeleteTask(partialParams: ToOptional<{
      [K in keyof DeleteTaskRequest & keyof Omit<DeleteTaskRequest, "TaskArn">]: (DeleteTaskRequest)[K]
    }>): Request<DeleteTaskResponse, AWSError> {
        this.boot();
        return this.client.deleteTask(
          this.ops["DeleteTask"].apply(partialParams)
        );
    }

    invokeDescribeTask(partialParams: ToOptional<{
      [K in keyof DescribeTaskRequest & keyof Omit<DescribeTaskRequest, "TaskArn">]: (DescribeTaskRequest)[K]
    }>): Request<DescribeTaskResponse, AWSError> {
        this.boot();
        return this.client.describeTask(
          this.ops["DescribeTask"].apply(partialParams)
        );
    }

    invokeStartTaskExecution(partialParams: ToOptional<{
      [K in keyof StartTaskExecutionRequest & keyof Omit<StartTaskExecutionRequest, "TaskArn">]: (StartTaskExecutionRequest)[K]
    }>): Request<StartTaskExecutionResponse, AWSError> {
        this.boot();
        return this.client.startTaskExecution(
          this.ops["StartTaskExecution"].apply(partialParams)
        );
    }

    invokeUpdateTask(partialParams: ToOptional<{
      [K in keyof UpdateTaskRequest & keyof Omit<UpdateTaskRequest, "TaskArn">]: (UpdateTaskRequest)[K]
    }>): Request<UpdateTaskResponse, AWSError> {
        this.boot();
        return this.client.updateTask(
          this.ops["UpdateTask"].apply(partialParams)
        );
    }
}