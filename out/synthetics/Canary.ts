
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateCanaryRequest,
    DeleteCanaryRequest,
    GetCanaryRequest,
    GetCanaryRunsRequest,
    ListTagsForResourceRequest,
    StartCanaryRequest,
    StopCanaryRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateCanaryRequest,
    CreateCanaryResponse,
    DeleteCanaryResponse,
    GetCanaryResponse,
    GetCanaryRunsResponse,
    ListTagsForResourceResponse,
    StartCanaryResponse,
    StopCanaryResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateCanaryResponse
} from "aws-sdk/clients/synthetics";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.synthetics.Canary {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.synthetics.Canary>) {
        super(...args)
        this.client = new awssdk.Synthetics()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/synthetics-2017-10-11.normal.json"), this.client)
    }

    invokeCreateCanary(partialParams: ToOptional<{
      [K in keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof Omit<CreateCanaryRequest, "Name"> & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest]: (CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & Omit<CreateCanaryRequest, "Name"> & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest)[K]
    }>): CreateCanaryResponse {
        return this.client.createCanary(
            this.ops["CreateCanary"].apply(partialParams)
        );
    }

    invokeDeleteCanary(partialParams: ToOptional<{
      [K in keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof Omit<DeleteCanaryRequest, "Name"> & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest]: (DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & Omit<DeleteCanaryRequest, "Name"> & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest)[K]
    }>): DeleteCanaryResponse {
        return this.client.deleteCanary(
            this.ops["DeleteCanary"].apply(partialParams)
        );
    }

    invokeGetCanary(partialParams: ToOptional<{
      [K in keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof Omit<GetCanaryRequest, "Name"> & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest]: (GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & Omit<GetCanaryRequest, "Name"> & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest)[K]
    }>): GetCanaryResponse {
        return this.client.getCanary(
            this.ops["GetCanary"].apply(partialParams)
        );
    }

    invokeGetCanaryRuns(partialParams: ToOptional<{
      [K in keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof Omit<GetCanaryRunsRequest, "Name"> & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest]: (GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & Omit<GetCanaryRunsRequest, "Name"> & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest)[K]
    }>): GetCanaryRunsResponse {
        return this.client.getCanaryRuns(
            this.ops["GetCanaryRuns"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartCanary(partialParams: ToOptional<{
      [K in keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof Omit<StartCanaryRequest, "Name"> & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest]: (StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & Omit<StartCanaryRequest, "Name"> & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest)[K]
    }>): StartCanaryResponse {
        return this.client.startCanary(
            this.ops["StartCanary"].apply(partialParams)
        );
    }

    invokeStopCanary(partialParams: ToOptional<{
      [K in keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof Omit<StopCanaryRequest, "Name"> & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest]: (StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & Omit<StopCanaryRequest, "Name"> & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest)[K]
    }>): StopCanaryResponse {
        return this.client.stopCanary(
            this.ops["StopCanary"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateCanary(partialParams: ToOptional<{
      [K in keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof Omit<UpdateCanaryRequest, "Name"> & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest]: (UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & Omit<UpdateCanaryRequest, "Name"> & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest)[K]
    }>): UpdateCanaryResponse {
        return this.client.updateCanary(
            this.ops["UpdateCanary"].apply(partialParams)
        );
    }
}