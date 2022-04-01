
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateLifecyclePolicyRequest,
    DeleteLifecyclePolicyRequest,
    GetLifecyclePoliciesRequest,
    GetLifecyclePolicyRequest,
    ListTagsForResourceRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateLifecyclePolicyRequest,
    CreateLifecyclePolicyResponse,
    DeleteLifecyclePolicyResponse,
    GetLifecyclePoliciesResponse,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dlm.LifecyclePolicy>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DLM()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeCreateLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof CreateLifecyclePolicyRequest & keyof Omit<CreateLifecyclePolicyRequest, "ExecutionRoleArn" | "Description" | "State">]: (CreateLifecyclePolicyRequest)[K]
    }>): Request<CreateLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.createLifecyclePolicy(
          this.ops["CreateLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeDeleteLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof DeleteLifecyclePolicyRequest]: (DeleteLifecyclePolicyRequest)[K]
    }>): Request<DeleteLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.deleteLifecyclePolicy(
          this.ops["DeleteLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicies(partialParams: ToOptional<{
      [K in keyof GetLifecyclePoliciesRequest]: (GetLifecyclePoliciesRequest)[K]
    }>): Request<GetLifecyclePoliciesResponse, AWSError> {
        this.boot();
        return this.client.getLifecyclePolicies(
          this.ops["GetLifecyclePolicies"].apply(partialParams)
        );
    }

    invokeGetLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof GetLifecyclePolicyRequest]: (GetLifecyclePolicyRequest)[K]
    }>): Request<GetLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.getLifecyclePolicy(
          this.ops["GetLifecyclePolicy"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateLifecyclePolicy(partialParams: ToOptional<{
      [K in keyof UpdateLifecyclePolicyRequest]: (UpdateLifecyclePolicyRequest)[K]
    }>): Request<UpdateLifecyclePolicyResponse, AWSError> {
        this.boot();
        return this.client.updateLifecyclePolicy(
          this.ops["UpdateLifecyclePolicy"].apply(partialParams)
        );
    }
}