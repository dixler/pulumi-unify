
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateImageRequest,
    CreateImageVersionRequest,
    DeleteImageRequest,
    DeleteImageVersionRequest,
    DescribeImageRequest,
    DescribeImageVersionRequest,
    ListImageVersionsRequest,
    UpdateImageRequest,
    CreateImageResponse,
    CreateImageVersionResponse,
    DeleteImageResponse,
    DeleteImageVersionResponse,
    DescribeImageResponse,
    DescribeImageVersionResponse,
    ListImageVersionsResponse,
    UpdateImageResponse
} from "aws-sdk/clients/sagemaker";
const schema = require("../apis/sagemaker-2017-07-24.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.sagemaker.ImageVersion {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.sagemaker.ImageVersion>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.SageMaker()
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

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "ImageName">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResponse, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateImageVersion(partialParams: ToOptional<{
      [K in keyof CreateImageVersionRequest & keyof Omit<CreateImageVersionRequest, "BaseImage" | "ImageName">]: (CreateImageVersionRequest)[K]
    }>): Request<CreateImageVersionResponse, AWSError> {
        this.boot();
        return this.client.createImageVersion(
          this.ops["CreateImageVersion"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof Omit<DeleteImageRequest, "ImageName">]: (DeleteImageRequest)[K]
    }>): Request<DeleteImageResponse, AWSError> {
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImageVersion(partialParams: ToOptional<{
      [K in keyof DeleteImageVersionRequest & keyof Omit<DeleteImageVersionRequest, "ImageName">]: (DeleteImageVersionRequest)[K]
    }>): Request<DeleteImageVersionResponse, AWSError> {
        this.boot();
        return this.client.deleteImageVersion(
          this.ops["DeleteImageVersion"].apply(partialParams)
        );
    }

    invokeDescribeImage(partialParams: ToOptional<{
      [K in keyof DescribeImageRequest & keyof Omit<DescribeImageRequest, "ImageName">]: (DescribeImageRequest)[K]
    }>): Request<DescribeImageResponse, AWSError> {
        this.boot();
        return this.client.describeImage(
          this.ops["DescribeImage"].apply(partialParams)
        );
    }

    invokeDescribeImageVersion(partialParams: ToOptional<{
      [K in keyof DescribeImageVersionRequest & keyof Omit<DescribeImageVersionRequest, "ImageName">]: (DescribeImageVersionRequest)[K]
    }>): Request<DescribeImageVersionResponse, AWSError> {
        this.boot();
        return this.client.describeImageVersion(
          this.ops["DescribeImageVersion"].apply(partialParams)
        );
    }

    invokeListImageVersions(partialParams: ToOptional<{
      [K in keyof ListImageVersionsRequest & keyof Omit<ListImageVersionsRequest, "ImageName">]: (ListImageVersionsRequest)[K]
    }>): Request<ListImageVersionsResponse, AWSError> {
        this.boot();
        return this.client.listImageVersions(
          this.ops["ListImageVersions"].apply(partialParams)
        );
    }

    invokeUpdateImage(partialParams: ToOptional<{
      [K in keyof UpdateImageRequest & keyof Omit<UpdateImageRequest, "ImageName">]: (UpdateImageRequest)[K]
    }>): Request<UpdateImageResponse, AWSError> {
        this.boot();
        return this.client.updateImage(
          this.ops["UpdateImage"].apply(partialParams)
        );
    }
}