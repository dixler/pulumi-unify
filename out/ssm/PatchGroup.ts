
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    DeletePatchBaselineRequest,
    DeregisterPatchBaselineForPatchGroupRequest,
    DescribeEffectivePatchesForPatchBaselineRequest,
    DescribeInstancePatchStatesForPatchGroupRequest,
    DescribePatchGroupStateRequest,
    GetPatchBaselineRequest,
    GetPatchBaselineForPatchGroupRequest,
    RegisterDefaultPatchBaselineRequest,
    RegisterPatchBaselineForPatchGroupRequest,
    UpdatePatchBaselineRequest,
    DeletePatchBaselineResult,
    DeregisterPatchBaselineForPatchGroupResult,
    DescribeEffectivePatchesForPatchBaselineResult,
    DescribeInstancePatchStatesForPatchGroupResult,
    DescribePatchGroupStateResult,
    GetPatchBaselineResult,
    GetPatchBaselineForPatchGroupResult,
    RegisterDefaultPatchBaselineResult,
    RegisterPatchBaselineForPatchGroupResult,
    UpdatePatchBaselineResult
} from "aws-sdk/clients/ssm";
const schema = require("../apis/ssm-2014-11-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ssm.PatchGroup {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ssm.PatchGroup>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SSM()
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

    invokeDeletePatchBaseline(partialParams: ToOptional<{
      [K in keyof DeletePatchBaselineRequest & keyof Omit<DeletePatchBaselineRequest, "BaselineId">]: (DeletePatchBaselineRequest)[K]
    }>): Request<DeletePatchBaselineResult, AWSError> {
        this.boot();
        return this.client.deletePatchBaseline(
          this.ops["DeletePatchBaseline"].apply(partialParams)
        );
    }

    invokeDeregisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof DeregisterPatchBaselineForPatchGroupRequest & keyof Omit<DeregisterPatchBaselineForPatchGroupRequest, "BaselineId" | "PatchGroup">]: (DeregisterPatchBaselineForPatchGroupRequest)[K]
    }>): Request<DeregisterPatchBaselineForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.deregisterPatchBaselineForPatchGroup(
          this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePatchesForPatchBaseline(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePatchesForPatchBaselineRequest & keyof Omit<DescribeEffectivePatchesForPatchBaselineRequest, "BaselineId">]: (DescribeEffectivePatchesForPatchBaselineRequest)[K]
    }>): Request<DescribeEffectivePatchesForPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.describeEffectivePatchesForPatchBaseline(
          this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams)
        );
    }

    invokeDescribeInstancePatchStatesForPatchGroup(partialParams: ToOptional<{
      [K in keyof DescribeInstancePatchStatesForPatchGroupRequest & keyof Omit<DescribeInstancePatchStatesForPatchGroupRequest, "PatchGroup">]: (DescribeInstancePatchStatesForPatchGroupRequest)[K]
    }>): Request<DescribeInstancePatchStatesForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.describeInstancePatchStatesForPatchGroup(
          this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams)
        );
    }

    invokeDescribePatchGroupState(partialParams: ToOptional<{
      [K in keyof DescribePatchGroupStateRequest & keyof Omit<DescribePatchGroupStateRequest, "PatchGroup">]: (DescribePatchGroupStateRequest)[K]
    }>): Request<DescribePatchGroupStateResult, AWSError> {
        this.boot();
        return this.client.describePatchGroupState(
          this.ops["DescribePatchGroupState"].apply(partialParams)
        );
    }

    invokeGetPatchBaseline(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineRequest & keyof Omit<GetPatchBaselineRequest, "BaselineId">]: (GetPatchBaselineRequest)[K]
    }>): Request<GetPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.getPatchBaseline(
          this.ops["GetPatchBaseline"].apply(partialParams)
        );
    }

    invokeGetPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof GetPatchBaselineForPatchGroupRequest & keyof Omit<GetPatchBaselineForPatchGroupRequest, "PatchGroup">]: (GetPatchBaselineForPatchGroupRequest)[K]
    }>): Request<GetPatchBaselineForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.getPatchBaselineForPatchGroup(
          this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeRegisterDefaultPatchBaseline(partialParams: ToOptional<{
      [K in keyof RegisterDefaultPatchBaselineRequest & keyof Omit<RegisterDefaultPatchBaselineRequest, "BaselineId">]: (RegisterDefaultPatchBaselineRequest)[K]
    }>): Request<RegisterDefaultPatchBaselineResult, AWSError> {
        this.boot();
        return this.client.registerDefaultPatchBaseline(
          this.ops["RegisterDefaultPatchBaseline"].apply(partialParams)
        );
    }

    invokeRegisterPatchBaselineForPatchGroup(partialParams: ToOptional<{
      [K in keyof RegisterPatchBaselineForPatchGroupRequest & keyof Omit<RegisterPatchBaselineForPatchGroupRequest, "BaselineId" | "PatchGroup">]: (RegisterPatchBaselineForPatchGroupRequest)[K]
    }>): Request<RegisterPatchBaselineForPatchGroupResult, AWSError> {
        this.boot();
        return this.client.registerPatchBaselineForPatchGroup(
          this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams)
        );
    }

    invokeUpdatePatchBaseline(partialParams: ToOptional<{
      [K in keyof UpdatePatchBaselineRequest & keyof Omit<UpdatePatchBaselineRequest, "BaselineId">]: (UpdatePatchBaselineRequest)[K]
    }>): Request<UpdatePatchBaselineResult, AWSError> {
        this.boot();
        return this.client.updatePatchBaseline(
          this.ops["UpdatePatchBaseline"].apply(partialParams)
        );
    }
}