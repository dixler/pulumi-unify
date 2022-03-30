
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.mediastore.Container {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.mediastore.Container>) {
        super(...args)
        this.client = new awssdk.MediaStore()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/mediastore-2017-09-01.normal.json"), this.client)
    }

    invokeCreateContainer(partialParams: ToOptional<{
      [K in keyof CreateContainerInput & keyof CreateContainerInput & keyof CreateContainerInput]: (CreateContainerInput & CreateContainerInput & CreateContainerInput)[K]
    }>): CreateContainerOutput {
        return this.client.createContainer(
            this.ops["CreateContainer"].apply(partialParams)
        );
    }

    invokeDeleteContainer(partialParams: ToOptional<{
      [K in keyof DeleteContainerInput & keyof DeleteContainerInput & keyof DeleteContainerInput]: (DeleteContainerInput & DeleteContainerInput & DeleteContainerInput)[K]
    }>): DeleteContainerOutput {
        return this.client.deleteContainer(
            this.ops["DeleteContainer"].apply(partialParams)
        );
    }

    invokeDeleteContainerPolicy(partialParams: ToOptional<{
      [K in keyof DeleteContainerPolicyInput & keyof DeleteContainerPolicyInput & keyof DeleteContainerPolicyInput]: (DeleteContainerPolicyInput & DeleteContainerPolicyInput & DeleteContainerPolicyInput)[K]
    }>): DeleteContainerPolicyOutput {
        return this.client.deleteContainerPolicy(
            this.ops["DeleteContainerPolicy"].apply(partialParams)
        );
    }

    invokeDeleteCorsPolicy(partialParams: ToOptional<{
      [K in keyof DeleteCorsPolicyInput & keyof DeleteCorsPolicyInput & keyof DeleteCorsPolicyInput]: (DeleteCorsPolicyInput & DeleteCorsPolicyInput & DeleteCorsPolicyInput)[K]
    }>): DeleteCorsPolicyOutput {
        return this.client.deleteCorsPolicy(
            this.ops["DeleteCorsPolicy"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyInput & keyof DeleteLifecyclePolicyInput & keyof DeleteLifecyclePolicyInput]: (DeleteLifecyclePolicyInput & DeleteLifecyclePolicyInput & DeleteLifecyclePolicyInput)[K]
    }>): DeleteLifecyclePolicyOutput {
        return this.client.deleteLifecyclePolicy(
            this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeleteMetricPolicy(partialParams: ToOptional<{
      [K in keyof DeleteMetricPolicyInput & keyof DeleteMetricPolicyInput & keyof DeleteMetricPolicyInput]: (DeleteMetricPolicyInput & DeleteMetricPolicyInput & DeleteMetricPolicyInput)[K]
    }>): DeleteMetricPolicyOutput {
        return this.client.deleteMetricPolicy(
            this.ops["DeleteMetricPolicy"].apply(partialParams)
        );
    }

    invokeGetContainerPolicy(partialParams: ToOptional<{
      [K in keyof GetContainerPolicyInput & keyof GetContainerPolicyInput & keyof GetContainerPolicyInput]: (GetContainerPolicyInput & GetContainerPolicyInput & GetContainerPolicyInput)[K]
    }>): GetContainerPolicyOutput {
        return this.client.getContainerPolicy(
            this.ops["GetContainerPolicy"].apply(partialParams)
        );
    }

    invokeGetCorsPolicy(partialParams: ToOptional<{
      [K in keyof GetCorsPolicyInput & keyof GetCorsPolicyInput & keyof GetCorsPolicyInput]: (GetCorsPolicyInput & GetCorsPolicyInput & GetCorsPolicyInput)[K]
    }>): GetCorsPolicyOutput {
        return this.client.getCorsPolicy(
            this.ops["GetCorsPolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyInput & keyof GetLifecyclePolicyInput & keyof GetLifecyclePolicyInput]: (GetLifecyclePolicyInput & GetLifecyclePolicyInput & GetLifecyclePolicyInput)[K]
    }>): GetLifecyclePolicyOutput {
        return this.client.getLifecyclePolicy(
            this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetMetricPolicy(partialParams: ToOptional<{
      [K in keyof GetMetricPolicyInput & keyof GetMetricPolicyInput & keyof GetMetricPolicyInput]: (GetMetricPolicyInput & GetMetricPolicyInput & GetMetricPolicyInput)[K]
    }>): GetMetricPolicyOutput {
        return this.client.getMetricPolicy(
            this.ops["GetMetricPolicy"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutContainerPolicy(partialParams: ToOptional<{
      [K in keyof PutContainerPolicyInput & keyof PutContainerPolicyInput & keyof PutContainerPolicyInput]: (PutContainerPolicyInput & PutContainerPolicyInput & PutContainerPolicyInput)[K]
    }>): PutContainerPolicyOutput {
        return this.client.putContainerPolicy(
            this.ops["PutContainerPolicy"].apply(partialParams)
        );
    }

    invokePutCorsPolicy(partialParams: ToOptional<{
      [K in keyof PutCorsPolicyInput & keyof PutCorsPolicyInput & keyof PutCorsPolicyInput]: (PutCorsPolicyInput & PutCorsPolicyInput & PutCorsPolicyInput)[K]
    }>): PutCorsPolicyOutput {
        return this.client.putCorsPolicy(
            this.ops["PutCorsPolicy"].apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof PutLifecyclePolicyInput & keyof PutLifecyclePolicyInput & keyof PutLifecyclePolicyInput]: (PutLifecyclePolicyInput & PutLifecyclePolicyInput & PutLifecyclePolicyInput)[K]
    }>): PutLifecyclePolicyOutput {
        return this.client.putLifecyclePolicy(
            this.ops["PutLifecyclePolicy"].apply(partialParams)
        );
    }

    invokePutMetricPolicy(partialParams: ToOptional<{
      [K in keyof PutMetricPolicyInput & keyof PutMetricPolicyInput & keyof PutMetricPolicyInput]: (PutMetricPolicyInput & PutMetricPolicyInput & PutMetricPolicyInput)[K]
    }>): PutMetricPolicyOutput {
        return this.client.putMetricPolicy(
            this.ops["PutMetricPolicy"].apply(partialParams)
        );
    }

    invokeStartAccessLogging(partialParams: ToOptional<{
      [K in keyof StartAccessLoggingInput & keyof StartAccessLoggingInput & keyof StartAccessLoggingInput]: (StartAccessLoggingInput & StartAccessLoggingInput & StartAccessLoggingInput)[K]
    }>): StartAccessLoggingOutput {
        return this.client.startAccessLogging(
            this.ops["StartAccessLogging"].apply(partialParams)
        );
    }

    invokeStopAccessLogging(partialParams: ToOptional<{
      [K in keyof StopAccessLoggingInput & keyof StopAccessLoggingInput & keyof StopAccessLoggingInput]: (StopAccessLoggingInput & StopAccessLoggingInput & StopAccessLoggingInput)[K]
    }>): StopAccessLoggingOutput {
        return this.client.stopAccessLogging(
            this.ops["StopAccessLogging"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }
}