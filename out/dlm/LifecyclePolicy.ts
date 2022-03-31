
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/dlm-2018-01-12.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dlm.LifecyclePolicy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.dlm.LifecyclePolicy>) {
        super(...args)
        this.client = new awssdk.DLM()
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

    invokeCreateLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof CreateLifecyclePolicyRequest & keyof CreateLifecyclePolicyRequest & keyof CreateLifecyclePolicyRequest & keyof CreateLifecyclePolicyRequest]: (CreateLifecyclePolicyRequest & CreateLifecyclePolicyRequest & CreateLifecyclePolicyRequest & CreateLifecyclePolicyRequest)[K]
    }>): Request<CreateLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createLifecyclePolicy(
          this.ops["CreateLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest & keyof DeleteLifecyclePolicyRequest]: (DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest & DeleteLifecyclePolicyRequest)[K]
    }>): Request<DeleteLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest & keyof GetLifecyclePolicyRequest]: (GetLifecyclePolicyRequest & GetLifecyclePolicyRequest & GetLifecyclePolicyRequest & GetLifecyclePolicyRequest)[K]
    }>): Request<GetLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof UpdateLifecyclePolicyRequest & keyof UpdateLifecyclePolicyRequest & keyof UpdateLifecyclePolicyRequest & keyof UpdateLifecyclePolicyRequest]: (UpdateLifecyclePolicyRequest & UpdateLifecyclePolicyRequest & UpdateLifecyclePolicyRequest & UpdateLifecyclePolicyRequest)[K]
    }>): Request<UpdateLifecyclePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateLifecyclePolicy(
          this.ops["UpdateLifecyclePolicy"].applicator.apply(partialParams)
        );
    }
}