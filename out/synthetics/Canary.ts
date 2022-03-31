
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/synthetics-2017-10-11.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.synthetics.Canary {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.synthetics.Canary>) {
        super(...args)
        this.client = new awssdk.Synthetics()
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

    invokeCreateCanary(partialParams: ToOptional<{
      [K in keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof Omit<CreateCanaryRequest, "Name"> & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest & keyof CreateCanaryRequest]: (CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & Omit<CreateCanaryRequest, "Name"> & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest & CreateCanaryRequest)[K]
    }>): Request<CreateCanaryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCanary(
          this.ops["CreateCanary"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCanary(partialParams: ToOptional<{
      [K in keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof Omit<DeleteCanaryRequest, "Name"> & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest & keyof DeleteCanaryRequest]: (DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & Omit<DeleteCanaryRequest, "Name"> & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest & DeleteCanaryRequest)[K]
    }>): Request<DeleteCanaryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCanary(
          this.ops["DeleteCanary"].applicator.apply(partialParams)
        );
    }

    invokeGetCanary(partialParams: ToOptional<{
      [K in keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof Omit<GetCanaryRequest, "Name"> & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest & keyof GetCanaryRequest]: (GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & Omit<GetCanaryRequest, "Name"> & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest & GetCanaryRequest)[K]
    }>): Request<GetCanaryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCanary(
          this.ops["GetCanary"].applicator.apply(partialParams)
        );
    }

    invokeGetCanaryRuns(partialParams: ToOptional<{
      [K in keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof Omit<GetCanaryRunsRequest, "Name"> & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest & keyof GetCanaryRunsRequest]: (GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & Omit<GetCanaryRunsRequest, "Name"> & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest & GetCanaryRunsRequest)[K]
    }>): Request<GetCanaryRunsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCanaryRuns(
          this.ops["GetCanaryRuns"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeStartCanary(partialParams: ToOptional<{
      [K in keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof Omit<StartCanaryRequest, "Name"> & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest & keyof StartCanaryRequest]: (StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & Omit<StartCanaryRequest, "Name"> & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest & StartCanaryRequest)[K]
    }>): Request<StartCanaryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startCanary(
          this.ops["StartCanary"].applicator.apply(partialParams)
        );
    }

    invokeStopCanary(partialParams: ToOptional<{
      [K in keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof Omit<StopCanaryRequest, "Name"> & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest & keyof StopCanaryRequest]: (StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & Omit<StopCanaryRequest, "Name"> & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest & StopCanaryRequest)[K]
    }>): Request<StopCanaryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopCanary(
          this.ops["StopCanary"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateCanary(partialParams: ToOptional<{
      [K in keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof Omit<UpdateCanaryRequest, "Name"> & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest & keyof UpdateCanaryRequest]: (UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & Omit<UpdateCanaryRequest, "Name"> & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest & UpdateCanaryRequest)[K]
    }>): Request<UpdateCanaryResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCanary(
          this.ops["UpdateCanary"].applicator.apply(partialParams)
        );
    }
}