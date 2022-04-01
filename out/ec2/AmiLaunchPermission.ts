
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateStoreImageTaskRequest,
    DescribeImageAttributeRequest,
    DisableFastLaunchRequest,
    DisableImageDeprecationRequest,
    EnableFastLaunchRequest,
    EnableImageDeprecationRequest,
    ExportImageRequest,
    RestoreImageFromRecycleBinRequest,
    CreateStoreImageTaskResult,
    ImageAttribute,
    DisableFastLaunchResult,
    DisableImageDeprecationResult,
    EnableFastLaunchResult,
    EnableImageDeprecationResult,
    ExportImageResult,
    RestoreImageFromRecycleBinResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.AmiLaunchPermission {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.AmiLaunchPermission>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeCreateStoreImageTask(partialParams: ToOptional<{
      [K in keyof CreateStoreImageTaskRequest & keyof Omit<CreateStoreImageTaskRequest, "ImageId">]: (CreateStoreImageTaskRequest)[K]
    }>): Request<CreateStoreImageTaskResult, AWSError> {
        this.boot();
        return this.client.createStoreImageTask(
          this.ops["CreateStoreImageTask"].apply(partialParams)
        );
    }

    invokeDescribeImageAttribute(partialParams: ToOptional<{
      [K in keyof DescribeImageAttributeRequest & keyof Omit<DescribeImageAttributeRequest, "ImageId">]: (DescribeImageAttributeRequest)[K]
    }>): Request<ImageAttribute, AWSError> {
        this.boot();
        return this.client.describeImageAttribute(
          this.ops["DescribeImageAttribute"].apply(partialParams)
        );
    }

    invokeDisableFastLaunch(partialParams: ToOptional<{
      [K in keyof DisableFastLaunchRequest & keyof Omit<DisableFastLaunchRequest, "ImageId">]: (DisableFastLaunchRequest)[K]
    }>): Request<DisableFastLaunchResult, AWSError> {
        this.boot();
        return this.client.disableFastLaunch(
          this.ops["DisableFastLaunch"].apply(partialParams)
        );
    }

    invokeDisableImageDeprecation(partialParams: ToOptional<{
      [K in keyof DisableImageDeprecationRequest & keyof Omit<DisableImageDeprecationRequest, "ImageId">]: (DisableImageDeprecationRequest)[K]
    }>): Request<DisableImageDeprecationResult, AWSError> {
        this.boot();
        return this.client.disableImageDeprecation(
          this.ops["DisableImageDeprecation"].apply(partialParams)
        );
    }

    invokeEnableFastLaunch(partialParams: ToOptional<{
      [K in keyof EnableFastLaunchRequest & keyof Omit<EnableFastLaunchRequest, "ImageId">]: (EnableFastLaunchRequest)[K]
    }>): Request<EnableFastLaunchResult, AWSError> {
        this.boot();
        return this.client.enableFastLaunch(
          this.ops["EnableFastLaunch"].apply(partialParams)
        );
    }

    invokeEnableImageDeprecation(partialParams: ToOptional<{
      [K in keyof EnableImageDeprecationRequest & keyof Omit<EnableImageDeprecationRequest, "ImageId">]: (EnableImageDeprecationRequest)[K]
    }>): Request<EnableImageDeprecationResult, AWSError> {
        this.boot();
        return this.client.enableImageDeprecation(
          this.ops["EnableImageDeprecation"].apply(partialParams)
        );
    }

    invokeExportImage(partialParams: ToOptional<{
      [K in keyof ExportImageRequest & keyof Omit<ExportImageRequest, "ImageId">]: (ExportImageRequest)[K]
    }>): Request<ExportImageResult, AWSError> {
        this.boot();
        return this.client.exportImage(
          this.ops["ExportImage"].apply(partialParams)
        );
    }

    invokeRestoreImageFromRecycleBin(partialParams: ToOptional<{
      [K in keyof RestoreImageFromRecycleBinRequest & keyof Omit<RestoreImageFromRecycleBinRequest, "ImageId">]: (RestoreImageFromRecycleBinRequest)[K]
    }>): Request<RestoreImageFromRecycleBinResult, AWSError> {
        this.boot();
        return this.client.restoreImageFromRecycleBin(
          this.ops["RestoreImageFromRecycleBin"].apply(partialParams)
        );
    }
}