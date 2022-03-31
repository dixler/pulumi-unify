
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
    ListTagsForResourceInput,
    PutContainerPolicyInput,
    PutCorsPolicyInput,
    PutLifecyclePolicyInput,
    PutMetricPolicyInput,
    StartAccessLoggingInput,
    StopAccessLoggingInput,
    TagResourceInput,
    UntagResourceInput,
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
    ListTagsForResourceOutput,
    PutContainerPolicyOutput,
    PutCorsPolicyOutput,
    PutLifecyclePolicyOutput,
    PutMetricPolicyOutput,
    StartAccessLoggingOutput,
    StopAccessLoggingOutput,
    TagResourceOutput,
    UntagResourceOutput
} from "aws-sdk/clients/mediastore";
const schema = require("../apis/mediastore-2017-09-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediastore.ContainerPolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.mediastore.ContainerPolicy>) {
        super(...args)
        this.client = new awssdk.MediaStore()
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

    invokeCreateContainer(partialParams: ToOptional<{
      [K in keyof Omit<CreateContainerInput, "ContainerName"> & keyof CreateContainerInput]: (Omit<CreateContainerInput, "ContainerName"> & CreateContainerInput)[K]
    }>): Request<CreateContainerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainer(
          this.ops["CreateContainer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainer(partialParams: ToOptional<{
      [K in keyof Omit<DeleteContainerInput, "ContainerName"> & keyof DeleteContainerInput]: (Omit<DeleteContainerInput, "ContainerName"> & DeleteContainerInput)[K]
    }>): Request<DeleteContainerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainer(
          this.ops["DeleteContainer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainerPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteContainerPolicyInput, "ContainerName"> & keyof DeleteContainerPolicyInput]: (Omit<DeleteContainerPolicyInput, "ContainerName"> & DeleteContainerPolicyInput)[K]
    }>): Request<DeleteContainerPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerPolicy(
          this.ops["DeleteContainerPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCorsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteCorsPolicyInput, "ContainerName"> & keyof DeleteCorsPolicyInput]: (Omit<DeleteCorsPolicyInput, "ContainerName"> & DeleteCorsPolicyInput)[K]
    }>): Request<DeleteCorsPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCorsPolicy(
          this.ops["DeleteCorsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteLifecyclePolicyInput, "ContainerName"> & keyof DeleteLifecyclePolicyInput]: (Omit<DeleteLifecyclePolicyInput, "ContainerName"> & DeleteLifecyclePolicyInput)[K]
    }>): Request<DeleteLifecyclePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMetricPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteMetricPolicyInput, "ContainerName"> & keyof DeleteMetricPolicyInput]: (Omit<DeleteMetricPolicyInput, "ContainerName"> & DeleteMetricPolicyInput)[K]
    }>): Request<DeleteMetricPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMetricPolicy(
          this.ops["DeleteMetricPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetContainerPolicyInput, "ContainerName"> & keyof GetContainerPolicyInput]: (Omit<GetContainerPolicyInput, "ContainerName"> & GetContainerPolicyInput)[K]
    }>): Request<GetContainerPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerPolicy(
          this.ops["GetContainerPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetCorsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetCorsPolicyInput, "ContainerName"> & keyof GetCorsPolicyInput]: (Omit<GetCorsPolicyInput, "ContainerName"> & GetCorsPolicyInput)[K]
    }>): Request<GetCorsPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCorsPolicy(
          this.ops["GetCorsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetLifecyclePolicyInput, "ContainerName"> & keyof GetLifecyclePolicyInput]: (Omit<GetLifecyclePolicyInput, "ContainerName"> & GetLifecyclePolicyInput)[K]
    }>): Request<GetLifecyclePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetMetricPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetMetricPolicyInput, "ContainerName"> & keyof GetMetricPolicyInput]: (Omit<GetMetricPolicyInput, "ContainerName"> & GetMetricPolicyInput)[K]
    }>): Request<GetMetricPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMetricPolicy(
          this.ops["GetMetricPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutContainerPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutContainerPolicyInput, "ContainerName"> & keyof Omit<PutContainerPolicyInput, "Policy">]: (Omit<PutContainerPolicyInput, "ContainerName"> & Omit<PutContainerPolicyInput, "Policy">)[K]
    }>): Request<PutContainerPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putContainerPolicy(
          this.ops["PutContainerPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutCorsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutCorsPolicyInput, "ContainerName"> & keyof PutCorsPolicyInput]: (Omit<PutCorsPolicyInput, "ContainerName"> & PutCorsPolicyInput)[K]
    }>): Request<PutCorsPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putCorsPolicy(
          this.ops["PutCorsPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutLifecyclePolicyInput, "ContainerName"> & keyof PutLifecyclePolicyInput]: (Omit<PutLifecyclePolicyInput, "ContainerName"> & PutLifecyclePolicyInput)[K]
    }>): Request<PutLifecyclePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLifecyclePolicy(
          this.ops["PutLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutMetricPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutMetricPolicyInput, "ContainerName"> & keyof PutMetricPolicyInput]: (Omit<PutMetricPolicyInput, "ContainerName"> & PutMetricPolicyInput)[K]
    }>): Request<PutMetricPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putMetricPolicy(
          this.ops["PutMetricPolicy"].applicator.apply(partialParams)
        );
    }

    invokeStartAccessLogging(partialParams: ToOptional<{
      [K in keyof Omit<StartAccessLoggingInput, "ContainerName"> & keyof StartAccessLoggingInput]: (Omit<StartAccessLoggingInput, "ContainerName"> & StartAccessLoggingInput)[K]
    }>): Request<StartAccessLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAccessLogging(
          this.ops["StartAccessLogging"].applicator.apply(partialParams)
        );
    }

    invokeStopAccessLogging(partialParams: ToOptional<{
      [K in keyof Omit<StopAccessLoggingInput, "ContainerName"> & keyof StopAccessLoggingInput]: (Omit<StopAccessLoggingInput, "ContainerName"> & StopAccessLoggingInput)[K]
    }>): Request<StopAccessLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAccessLogging(
          this.ops["StopAccessLogging"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }
}