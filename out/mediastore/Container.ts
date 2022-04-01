
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateContainerInput,
    DeleteContainerInput,
    DeleteContainerPolicyInput,
    DeleteCorsPolicyInput,
    DeleteLifecyclePolicyInput,
    DeleteMetricPolicyInput,
    GetContainerPolicyInput,
    GetCorsPolicyInput,
    GetLifecyclePolicyInput,
    GetMetricPolicyInput,
    PutContainerPolicyInput,
    PutCorsPolicyInput,
    PutLifecyclePolicyInput,
    PutMetricPolicyInput,
    StartAccessLoggingInput,
    StopAccessLoggingInput,
    CreateContainerOutput,
    DeleteContainerOutput,
    DeleteContainerPolicyOutput,
    DeleteCorsPolicyOutput,
    DeleteLifecyclePolicyOutput,
    DeleteMetricPolicyOutput,
    GetContainerPolicyOutput,
    GetCorsPolicyOutput,
    GetLifecyclePolicyOutput,
    GetMetricPolicyOutput,
    PutContainerPolicyOutput,
    PutCorsPolicyOutput,
    PutLifecyclePolicyOutput,
    PutMetricPolicyOutput,
    StartAccessLoggingOutput,
    StopAccessLoggingOutput
} from "aws-sdk/clients/mediastore";
const schema = require("../apis/mediastore-2017-09-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediastore.Container {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.mediastore.Container>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.MediaStore()
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

    invokeCreateContainer(partialParams: ToOptional<{
      [K in keyof CreateContainerInput & keyof Omit<CreateContainerInput, "ContainerName">]: (CreateContainerInput)[K]
    }>): Request<CreateContainerOutput, AWSError> {
        this.boot();
        return this.client.createContainer(
          this.ops["CreateContainer"].apply(partialParams)
        );
    }

    invokeDeleteContainer(partialParams: ToOptional<{
      [K in keyof DeleteContainerInput & keyof Omit<DeleteContainerInput, "ContainerName">]: (DeleteContainerInput)[K]
    }>): Request<DeleteContainerOutput, AWSError> {
        this.boot();
        return this.client.deleteContainer(
          this.ops["DeleteContainer"].apply(partialParams)
        );
    }

    invokeDeleteContainerPolicy(partialParams: ToOptional<{
      [K in keyof DeleteContainerPolicyInput & keyof Omit<DeleteContainerPolicyInput, "ContainerName">]: (DeleteContainerPolicyInput)[K]
    }>): Request<DeleteContainerPolicyOutput, AWSError> {
        this.boot();
        return this.client.deleteContainerPolicy(
          this.ops["DeleteContainerPolicy"].apply(partialParams)
        );
    }

    invokeDeleteCorsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteCorsPolicyInput & keyof Omit<DeleteCorsPolicyInput, "ContainerName">]: (DeleteCorsPolicyInput)[K]
    }>): Request<DeleteCorsPolicyOutput, AWSError> {
        this.boot();
        return this.client.deleteCorsPolicy(
          this.ops["DeleteCorsPolicy"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyInput & keyof Omit<DeleteLifecyclePolicyInput, "ContainerName">]: (DeleteLifecyclePolicyInput)[K]
    }>): Request<DeleteLifecyclePolicyOutput, AWSError> {
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeleteMetricPolicy(partialParams: ToOptional<{
      [K in keyof DeleteMetricPolicyInput & keyof Omit<DeleteMetricPolicyInput, "ContainerName">]: (DeleteMetricPolicyInput)[K]
    }>): Request<DeleteMetricPolicyOutput, AWSError> {
        this.boot();
        return this.client.deleteMetricPolicy(
          this.ops["DeleteMetricPolicy"].apply(partialParams)
        );
    }

    invokeGetContainerPolicy(partialParams: ToOptional<{
      [K in keyof GetContainerPolicyInput & keyof Omit<GetContainerPolicyInput, "ContainerName">]: (GetContainerPolicyInput)[K]
    }>): Request<GetContainerPolicyOutput, AWSError> {
        this.boot();
        return this.client.getContainerPolicy(
          this.ops["GetContainerPolicy"].apply(partialParams)
        );
    }

    invokeGetCorsPolicy(partialParams: ToOptional<{
      [K in keyof GetCorsPolicyInput & keyof Omit<GetCorsPolicyInput, "ContainerName">]: (GetCorsPolicyInput)[K]
    }>): Request<GetCorsPolicyOutput, AWSError> {
        this.boot();
        return this.client.getCorsPolicy(
          this.ops["GetCorsPolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyInput & keyof Omit<GetLifecyclePolicyInput, "ContainerName">]: (GetLifecyclePolicyInput)[K]
    }>): Request<GetLifecyclePolicyOutput, AWSError> {
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetMetricPolicy(partialParams: ToOptional<{
      [K in keyof GetMetricPolicyInput & keyof Omit<GetMetricPolicyInput, "ContainerName">]: (GetMetricPolicyInput)[K]
    }>): Request<GetMetricPolicyOutput, AWSError> {
        this.boot();
        return this.client.getMetricPolicy(
          this.ops["GetMetricPolicy"].apply(partialParams)
        );
    }

    invokePutContainerPolicy(partialParams: ToOptional<{
      [K in keyof PutContainerPolicyInput & keyof Omit<PutContainerPolicyInput, "ContainerName">]: (PutContainerPolicyInput)[K]
    }>): Request<PutContainerPolicyOutput, AWSError> {
        this.boot();
        return this.client.putContainerPolicy(
          this.ops["PutContainerPolicy"].apply(partialParams)
        );
    }

    invokePutCorsPolicy(partialParams: ToOptional<{
      [K in keyof PutCorsPolicyInput & keyof Omit<PutCorsPolicyInput, "ContainerName">]: (PutCorsPolicyInput)[K]
    }>): Request<PutCorsPolicyOutput, AWSError> {
        this.boot();
        return this.client.putCorsPolicy(
          this.ops["PutCorsPolicy"].apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof PutLifecyclePolicyInput & keyof Omit<PutLifecyclePolicyInput, "ContainerName">]: (PutLifecyclePolicyInput)[K]
    }>): Request<PutLifecyclePolicyOutput, AWSError> {
        this.boot();
        return this.client.putLifecyclePolicy(
          this.ops["PutLifecyclePolicy"].apply(partialParams)
        );
    }

    invokePutMetricPolicy(partialParams: ToOptional<{
      [K in keyof PutMetricPolicyInput & keyof Omit<PutMetricPolicyInput, "ContainerName">]: (PutMetricPolicyInput)[K]
    }>): Request<PutMetricPolicyOutput, AWSError> {
        this.boot();
        return this.client.putMetricPolicy(
          this.ops["PutMetricPolicy"].apply(partialParams)
        );
    }

    invokeStartAccessLogging(partialParams: ToOptional<{
      [K in keyof StartAccessLoggingInput & keyof Omit<StartAccessLoggingInput, "ContainerName">]: (StartAccessLoggingInput)[K]
    }>): Request<StartAccessLoggingOutput, AWSError> {
        this.boot();
        return this.client.startAccessLogging(
          this.ops["StartAccessLogging"].apply(partialParams)
        );
    }

    invokeStopAccessLogging(partialParams: ToOptional<{
      [K in keyof StopAccessLoggingInput & keyof Omit<StopAccessLoggingInput, "ContainerName">]: (StopAccessLoggingInput)[K]
    }>): Request<StopAccessLoggingOutput, AWSError> {
        this.boot();
        return this.client.stopAccessLogging(
          this.ops["StopAccessLogging"].apply(partialParams)
        );
    }
}