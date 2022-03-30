
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateLifecyclePolicyRequest,
    DeleteLifecyclePolicyRequest,
    GetLifecyclePolicyRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateLifecyclePolicyRequest,
    CreateLifecyclePolicyResponse,
    DeleteLifecyclePolicyResponse,
    GetLifecyclePolicyResponse,
    ListTagsForResourceResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateLifecyclePolicyResponse
} from "aws-sdk/clients/dlm";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dlm.LifecyclePolicy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.dlm.LifecyclePolicy>) {
        super(...args)
        this.client = new awssdk.DLM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/dlm-2018-01-12.normal.json"), this.client)
    }

    invokeCreateLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof CreateLifecyclePolicyRequest & keyof CreateLifecyclePolicyRequest & keyof CreateLifecyclePolicyRequest & keyof CreateLifecyclePolicyRequest]: (CreateLifecyclePolicyRequest & CreateLifecyclePolicyRequest & CreateLifecyclePolicyRequest & CreateLifecyclePolicyRequest)[K]
    }>): CreateLifecyclePolicyResponse {
        return this.client.createLifecyclePolicy(
            this.ops["CreateLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest]: (DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest)[K]
    }>): DeleteLifecyclePolicyResponse {
        return this.client.deleteLifecyclePolicy(
            this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest]: (GetLifecyclePolicyRequest & GetLifecyclePolicyRequest & GetLifecyclePolicyRequest & GetLifecyclePolicyRequest)[K]
    }>): GetLifecyclePolicyResponse {
        return this.client.getLifecyclePolicy(
            this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof UpdateLifecyclePolicyRequest & keyof UpdateLifecyclePolicyRequest & keyof UpdateLifecyclePolicyRequest & keyof UpdateLifecyclePolicyRequest]: (UpdateLifecyclePolicyRequest & UpdateLifecyclePolicyRequest & UpdateLifecyclePolicyRequest & UpdateLifecyclePolicyRequest)[K]
    }>): UpdateLifecyclePolicyResponse {
        return this.client.updateLifecyclePolicy(
            this.ops["UpdateLifecyclePolicy"].apply(partialParams)
        );
    }
}