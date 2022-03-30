
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

export default class extends aws.mediastore.ContainerPolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.mediastore.ContainerPolicy>) {
        super(...args)
        this.client = new awssdk.MediaStore()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/mediastore-2017-09-01.normal.json"), this.client)
    }

    invokeCreateContainer(partialParams: ToOptional<{
      [K in keyof Omit<CreateContainerInput, "ContainerName"> & keyof CreateContainerInput]: (Omit<CreateContainerInput, "ContainerName"> & CreateContainerInput)[K]
    }>): CreateContainerOutput {
        return this.client.createContainer(
            this.ops["CreateContainer"].apply(partialParams)
        );
    }

    invokeDeleteContainer(partialParams: ToOptional<{
      [K in keyof Omit<DeleteContainerInput, "ContainerName"> & keyof DeleteContainerInput]: (Omit<DeleteContainerInput, "ContainerName"> & DeleteContainerInput)[K]
    }>): DeleteContainerOutput {
        return this.client.deleteContainer(
            this.ops["DeleteContainer"].apply(partialParams)
        );
    }

    invokeDeleteContainerPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteContainerPolicyInput, "ContainerName"> & keyof DeleteContainerPolicyInput]: (Omit<DeleteContainerPolicyInput, "ContainerName"> & DeleteContainerPolicyInput)[K]
    }>): DeleteContainerPolicyOutput {
        return this.client.deleteContainerPolicy(
            this.ops["DeleteContainerPolicy"].apply(partialParams)
        );
    }

    invokeDeleteCorsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteCorsPolicyInput, "ContainerName"> & keyof DeleteCorsPolicyInput]: (Omit<DeleteCorsPolicyInput, "ContainerName"> & DeleteCorsPolicyInput)[K]
    }>): DeleteCorsPolicyOutput {
        return this.client.deleteCorsPolicy(
            this.ops["DeleteCorsPolicy"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteLifecyclePolicyInput, "ContainerName"> & keyof DeleteLifecyclePolicyInput]: (Omit<DeleteLifecyclePolicyInput, "ContainerName"> & DeleteLifecyclePolicyInput)[K]
    }>): DeleteLifecyclePolicyOutput {
        return this.client.deleteLifecyclePolicy(
            this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeleteMetricPolicy(partialParams: ToOptional<{
      [K in keyof Omit<DeleteMetricPolicyInput, "ContainerName"> & keyof DeleteMetricPolicyInput]: (Omit<DeleteMetricPolicyInput, "ContainerName"> & DeleteMetricPolicyInput)[K]
    }>): DeleteMetricPolicyOutput {
        return this.client.deleteMetricPolicy(
            this.ops["DeleteMetricPolicy"].apply(partialParams)
        );
    }

    invokeGetContainerPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetContainerPolicyInput, "ContainerName"> & keyof GetContainerPolicyInput]: (Omit<GetContainerPolicyInput, "ContainerName"> & GetContainerPolicyInput)[K]
    }>): GetContainerPolicyOutput {
        return this.client.getContainerPolicy(
            this.ops["GetContainerPolicy"].apply(partialParams)
        );
    }

    invokeGetCorsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetCorsPolicyInput, "ContainerName"> & keyof GetCorsPolicyInput]: (Omit<GetCorsPolicyInput, "ContainerName"> & GetCorsPolicyInput)[K]
    }>): GetCorsPolicyOutput {
        return this.client.getCorsPolicy(
            this.ops["GetCorsPolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetLifecyclePolicyInput, "ContainerName"> & keyof GetLifecyclePolicyInput]: (Omit<GetLifecyclePolicyInput, "ContainerName"> & GetLifecyclePolicyInput)[K]
    }>): GetLifecyclePolicyOutput {
        return this.client.getLifecyclePolicy(
            this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetMetricPolicy(partialParams: ToOptional<{
      [K in keyof Omit<GetMetricPolicyInput, "ContainerName"> & keyof GetMetricPolicyInput]: (Omit<GetMetricPolicyInput, "ContainerName"> & GetMetricPolicyInput)[K]
    }>): GetMetricPolicyOutput {
        return this.client.getMetricPolicy(
            this.ops["GetMetricPolicy"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutContainerPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutContainerPolicyInput, "ContainerName"> & keyof Omit<PutContainerPolicyInput, "Policy">]: (Omit<PutContainerPolicyInput, "ContainerName"> & Omit<PutContainerPolicyInput, "Policy">)[K]
    }>): PutContainerPolicyOutput {
        return this.client.putContainerPolicy(
            this.ops["PutContainerPolicy"].apply(partialParams)
        );
    }

    invokePutCorsPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutCorsPolicyInput, "ContainerName"> & keyof PutCorsPolicyInput]: (Omit<PutCorsPolicyInput, "ContainerName"> & PutCorsPolicyInput)[K]
    }>): PutCorsPolicyOutput {
        return this.client.putCorsPolicy(
            this.ops["PutCorsPolicy"].apply(partialParams)
        );
    }

    invokePutLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutLifecyclePolicyInput, "ContainerName"> & keyof PutLifecyclePolicyInput]: (Omit<PutLifecyclePolicyInput, "ContainerName"> & PutLifecyclePolicyInput)[K]
    }>): PutLifecyclePolicyOutput {
        return this.client.putLifecyclePolicy(
            this.ops["PutLifecyclePolicy"].apply(partialParams)
        );
    }

    invokePutMetricPolicy(partialParams: ToOptional<{
      [K in keyof Omit<PutMetricPolicyInput, "ContainerName"> & keyof PutMetricPolicyInput]: (Omit<PutMetricPolicyInput, "ContainerName"> & PutMetricPolicyInput)[K]
    }>): PutMetricPolicyOutput {
        return this.client.putMetricPolicy(
            this.ops["PutMetricPolicy"].apply(partialParams)
        );
    }

    invokeStartAccessLogging(partialParams: ToOptional<{
      [K in keyof Omit<StartAccessLoggingInput, "ContainerName"> & keyof StartAccessLoggingInput]: (Omit<StartAccessLoggingInput, "ContainerName"> & StartAccessLoggingInput)[K]
    }>): StartAccessLoggingOutput {
        return this.client.startAccessLogging(
            this.ops["StartAccessLogging"].apply(partialParams)
        );
    }

    invokeStopAccessLogging(partialParams: ToOptional<{
      [K in keyof Omit<StopAccessLoggingInput, "ContainerName"> & keyof StopAccessLoggingInput]: (Omit<StopAccessLoggingInput, "ContainerName"> & StopAccessLoggingInput)[K]
    }>): StopAccessLoggingOutput {
        return this.client.stopAccessLogging(
            this.ops["StopAccessLogging"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput)[K]
    }>): TagResourceOutput {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput)[K]
    }>): UntagResourceOutput {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }
}