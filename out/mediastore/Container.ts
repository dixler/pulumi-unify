
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

export default class extends aws.mediastore.Container {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.mediastore.Container>) {
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
      [K in keyof CreateContainerInput & keyof CreateContainerInput & keyof CreateContainerInput]: (CreateContainerInput & CreateContainerInput & CreateContainerInput)[K]
    }>): Request<CreateContainerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContainer(
          this.ops["CreateContainer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainer(partialParams: ToOptional<{
      [K in keyof DeleteContainerInput & keyof DeleteContainerInput & keyof DeleteContainerInput]: (DeleteContainerInput & DeleteContainerInput & DeleteContainerInput)[K]
    }>): Request<DeleteContainerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainer(
          this.ops["DeleteContainer"].applicator.apply(partialParams)
        );
    }

    invokeDeleteContainerPolicy(partialParams: ToOptional<{
      [K in keyof DeleteContainerPolicyInput & keyof DeleteContainerPolicyInput & keyof DeleteContainerPolicyInput]: (DeleteContainerPolicyInput & DeleteContainerPolicyInput & DeleteContainerPolicyInput)[K]
    }>): Request<DeleteContainerPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContainerPolicy(
          this.ops["DeleteContainerPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCorsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteCorsPolicyInput & keyof DeleteCorsPolicyInput & keyof DeleteCorsPolicyInput]: (DeleteCorsPolicyInput & DeleteCorsPolicyInput & DeleteCorsPolicyInput)[K]
    }>): Request<DeleteCorsPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCorsPolicy(
          this.ops["DeleteCorsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyInput & keyof DeleteLifecyclePolicyInput & keyof DeleteLifecyclePolicyInput]: (DeleteLifecyclePolicyInput & DeleteLifecyclePolicyInput & DeleteLifecyclePolicyInput)[K]
    }>): Request<DeleteLifecyclePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMetricPolicy(partialParams: ToOptional<{
      [K in keyof DeleteMetricPolicyInput & keyof DeleteMetricPolicyInput & keyof DeleteMetricPolicyInput]: (DeleteMetricPolicyInput & DeleteMetricPolicyInput & DeleteMetricPolicyInput)[K]
    }>): Request<DeleteMetricPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMetricPolicy(
          this.ops["DeleteMetricPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetContainerPolicy(partialParams: ToOptional<{
      [K in keyof GetContainerPolicyInput & keyof GetContainerPolicyInput & keyof GetContainerPolicyInput]: (GetContainerPolicyInput & GetContainerPolicyInput & GetContainerPolicyInput)[K]
    }>): Request<GetContainerPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContainerPolicy(
          this.ops["GetContainerPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetCorsPolicy(partialParams: ToOptional<{
      [K in keyof GetCorsPolicyInput & keyof GetCorsPolicyInput & keyof GetCorsPolicyInput]: (GetCorsPolicyInput & GetCorsPolicyInput & GetCorsPolicyInput)[K]
    }>): Request<GetCorsPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCorsPolicy(
          this.ops["GetCorsPolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyInput & keyof GetLifecyclePolicyInput & keyof GetLifecyclePolicyInput]: (GetLifecyclePolicyInput & GetLifecyclePolicyInput & GetLifecyclePolicyInput)[K]
    }>): Request<GetLifecyclePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetMetricPolicy(partialParams: ToOptional<{
      [K in keyof GetMetricPolicyInput & keyof GetMetricPolicyInput & keyof GetMetricPolicyInput]: (GetMetricPolicyInput & GetMetricPolicyInput & GetMetricPolicyInput)[K]
    }>): Request<GetMetricPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMetricPolicy(
          this.ops["GetMetricPolicy"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutContainerPolicy(partialParams: ToOptional<{
      [K in keyof PutContainerPolicyInput & keyof PutContainerPolicyInput & keyof PutContainerPolicyInput]: (PutContainerPolicyInput & PutContainerPolicyInput & PutContainerPolicyInput)[K]
    }>): Request<PutContainerPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putContainerPolicy(
          this.ops["PutContainerPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutCorsPolicy(partialParams: ToOptional<{
      [K in keyof PutCorsPolicyInput & keyof PutCorsPolicyInput & keyof PutCorsPolicyInput]: (PutCorsPolicyInput & PutCorsPolicyInput & PutCorsPolicyInput)[K]
    }>): Request<PutCorsPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putCorsPolicy(
          this.ops["PutCorsPolicy"].applicator.apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof PutLifecyclePolicyInput & keyof PutLifecyclePolicyInput & keyof PutLifecyclePolicyInput]: (PutLifecyclePolicyInput & PutLifecyclePolicyInput & PutLifecyclePolicyInput)[K]
    }>): Request<PutLifecyclePolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putLifecyclePolicy(
          this.ops["PutLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokePutMetricPolicy(partialParams: ToOptional<{
      [K in keyof PutMetricPolicyInput & keyof PutMetricPolicyInput & keyof PutMetricPolicyInput]: (PutMetricPolicyInput & PutMetricPolicyInput & PutMetricPolicyInput)[K]
    }>): Request<PutMetricPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putMetricPolicy(
          this.ops["PutMetricPolicy"].applicator.apply(partialParams)
        );
    }

    invokeStartAccessLogging(partialParams: ToOptional<{
      [K in keyof StartAccessLoggingInput & keyof StartAccessLoggingInput & keyof StartAccessLoggingInput]: (StartAccessLoggingInput & StartAccessLoggingInput & StartAccessLoggingInput)[K]
    }>): Request<StartAccessLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAccessLogging(
          this.ops["StartAccessLogging"].applicator.apply(partialParams)
        );
    }

    invokeStopAccessLogging(partialParams: ToOptional<{
      [K in keyof StopAccessLoggingInput & keyof StopAccessLoggingInput & keyof StopAccessLoggingInput]: (StopAccessLoggingInput & StopAccessLoggingInput & StopAccessLoggingInput)[K]
    }>): Request<StopAccessLoggingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAccessLogging(
          this.ops["StopAccessLogging"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): Request<TagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): Request<UntagResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }
}