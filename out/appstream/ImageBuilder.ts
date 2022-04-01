
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAppBlockRequest,
    CreateApplicationRequest,
    CreateEntitlementRequest,
    CreateFleetRequest,
    CreateImageBuilderRequest,
    CreateImageBuilderStreamingURLRequest,
    CreateStackRequest,
    DeleteAppBlockRequest,
    DeleteApplicationRequest,
    DeleteEntitlementRequest,
    DeleteFleetRequest,
    DeleteImageRequest,
    DeleteImageBuilderRequest,
    DeleteImagePermissionsRequest,
    DeleteStackRequest,
    DescribeImagePermissionsRequest,
    StartFleetRequest,
    StartImageBuilderRequest,
    StopFleetRequest,
    StopImageBuilderRequest,
    UpdateApplicationRequest,
    UpdateEntitlementRequest,
    UpdateImagePermissionsRequest,
    UpdateStackRequest,
    CreateAppBlockResult,
    CreateApplicationResult,
    CreateEntitlementResult,
    CreateFleetResult,
    CreateImageBuilderResult,
    CreateImageBuilderStreamingURLResult,
    CreateStackResult,
    DeleteAppBlockResult,
    DeleteApplicationResult,
    DeleteEntitlementResult,
    DeleteFleetResult,
    DeleteImageResult,
    DeleteImageBuilderResult,
    DeleteImagePermissionsResult,
    DeleteStackResult,
    DescribeImagePermissionsResult,
    StartFleetResult,
    StartImageBuilderResult,
    StopFleetResult,
    StopImageBuilderResult,
    UpdateApplicationResult,
    UpdateEntitlementResult,
    UpdateImagePermissionsResult,
    UpdateStackResult
} from "aws-sdk/clients/appstream";
const schema = require("../apis/appstream-2016-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appstream.ImageBuilder {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appstream.ImageBuilder>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppStream()
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

    invokeCreateAppBlock(partialParams: ToOptional<{
      [K in keyof CreateAppBlockRequest & keyof Omit<CreateAppBlockRequest, "Name">]: (CreateAppBlockRequest)[K]
    }>): Request<CreateAppBlockResult, AWSError> {
        this.boot();
        return this.client.createAppBlock(
          this.ops["CreateAppBlock"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof Omit<CreateApplicationRequest, "Name">]: (CreateApplicationRequest)[K]
    }>): Request<CreateApplicationResult, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateEntitlement(partialParams: ToOptional<{
      [K in keyof CreateEntitlementRequest & keyof Omit<CreateEntitlementRequest, "Name">]: (CreateEntitlementRequest)[K]
    }>): Request<CreateEntitlementResult, AWSError> {
        this.boot();
        return this.client.createEntitlement(
          this.ops["CreateEntitlement"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetRequest & keyof Omit<CreateFleetRequest, "Name" | "InstanceType">]: (CreateFleetRequest)[K]
    }>): Request<CreateFleetResult, AWSError> {
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateImageBuilder(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderRequest & keyof Omit<CreateImageBuilderRequest, "Name" | "InstanceType">]: (CreateImageBuilderRequest)[K]
    }>): Request<CreateImageBuilderResult, AWSError> {
        this.boot();
        return this.client.createImageBuilder(
          this.ops["CreateImageBuilder"].apply(partialParams)
        );
    }

    invokeCreateImageBuilderStreamingURL(partialParams: ToOptional<{
      [K in keyof CreateImageBuilderStreamingURLRequest & keyof Omit<CreateImageBuilderStreamingURLRequest, "Name">]: (CreateImageBuilderStreamingURLRequest)[K]
    }>): Request<CreateImageBuilderStreamingURLResult, AWSError> {
        this.boot();
        return this.client.createImageBuilderStreamingURL(
          this.ops["CreateImageBuilderStreamingURL"].apply(partialParams)
        );
    }

    invokeCreateStack(partialParams: ToOptional<{
      [K in keyof CreateStackRequest & keyof Omit<CreateStackRequest, "Name">]: (CreateStackRequest)[K]
    }>): Request<CreateStackResult, AWSError> {
        this.boot();
        return this.client.createStack(
          this.ops["CreateStack"].apply(partialParams)
        );
    }

    invokeDeleteAppBlock(partialParams: ToOptional<{
      [K in keyof DeleteAppBlockRequest & keyof Omit<DeleteAppBlockRequest, "Name">]: (DeleteAppBlockRequest)[K]
    }>): Request<DeleteAppBlockResult, AWSError> {
        this.boot();
        return this.client.deleteAppBlock(
          this.ops["DeleteAppBlock"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof Omit<DeleteApplicationRequest, "Name">]: (DeleteApplicationRequest)[K]
    }>): Request<DeleteApplicationResult, AWSError> {
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteEntitlement(partialParams: ToOptional<{
      [K in keyof DeleteEntitlementRequest & keyof Omit<DeleteEntitlementRequest, "Name">]: (DeleteEntitlementRequest)[K]
    }>): Request<DeleteEntitlementResult, AWSError> {
        this.boot();
        return this.client.deleteEntitlement(
          this.ops["DeleteEntitlement"].apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetRequest & keyof Omit<DeleteFleetRequest, "Name">]: (DeleteFleetRequest)[K]
    }>): Request<DeleteFleetResult, AWSError> {
        this.boot();
        return this.client.deleteFleet(
          this.ops["DeleteFleet"].apply(partialParams)
        );
    }

    invokeDeleteImage(partialParams: ToOptional<{
      [K in keyof DeleteImageRequest & keyof Omit<DeleteImageRequest, "Name">]: (DeleteImageRequest)[K]
    }>): Request<DeleteImageResult, AWSError> {
        this.boot();
        return this.client.deleteImage(
          this.ops["DeleteImage"].apply(partialParams)
        );
    }

    invokeDeleteImageBuilder(partialParams: ToOptional<{
      [K in keyof DeleteImageBuilderRequest & keyof Omit<DeleteImageBuilderRequest, "Name">]: (DeleteImageBuilderRequest)[K]
    }>): Request<DeleteImageBuilderResult, AWSError> {
        this.boot();
        return this.client.deleteImageBuilder(
          this.ops["DeleteImageBuilder"].apply(partialParams)
        );
    }

    invokeDeleteImagePermissions(partialParams: ToOptional<{
      [K in keyof DeleteImagePermissionsRequest & keyof Omit<DeleteImagePermissionsRequest, "Name">]: (DeleteImagePermissionsRequest)[K]
    }>): Request<DeleteImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.deleteImagePermissions(
          this.ops["DeleteImagePermissions"].apply(partialParams)
        );
    }

    invokeDeleteStack(partialParams: ToOptional<{
      [K in keyof DeleteStackRequest & keyof Omit<DeleteStackRequest, "Name">]: (DeleteStackRequest)[K]
    }>): Request<DeleteStackResult, AWSError> {
        this.boot();
        return this.client.deleteStack(
          this.ops["DeleteStack"].apply(partialParams)
        );
    }

    invokeDescribeImagePermissions(partialParams: ToOptional<{
      [K in keyof DescribeImagePermissionsRequest & keyof Omit<DescribeImagePermissionsRequest, "Name">]: (DescribeImagePermissionsRequest)[K]
    }>): Request<DescribeImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.describeImagePermissions(
          this.ops["DescribeImagePermissions"].apply(partialParams)
        );
    }

    invokeStartFleet(partialParams: ToOptional<{
      [K in keyof StartFleetRequest & keyof Omit<StartFleetRequest, "Name">]: (StartFleetRequest)[K]
    }>): Request<StartFleetResult, AWSError> {
        this.boot();
        return this.client.startFleet(
          this.ops["StartFleet"].apply(partialParams)
        );
    }

    invokeStartImageBuilder(partialParams: ToOptional<{
      [K in keyof StartImageBuilderRequest & keyof Omit<StartImageBuilderRequest, "Name">]: (StartImageBuilderRequest)[K]
    }>): Request<StartImageBuilderResult, AWSError> {
        this.boot();
        return this.client.startImageBuilder(
          this.ops["StartImageBuilder"].apply(partialParams)
        );
    }

    invokeStopFleet(partialParams: ToOptional<{
      [K in keyof StopFleetRequest & keyof Omit<StopFleetRequest, "Name">]: (StopFleetRequest)[K]
    }>): Request<StopFleetResult, AWSError> {
        this.boot();
        return this.client.stopFleet(
          this.ops["StopFleet"].apply(partialParams)
        );
    }

    invokeStopImageBuilder(partialParams: ToOptional<{
      [K in keyof StopImageBuilderRequest & keyof Omit<StopImageBuilderRequest, "Name">]: (StopImageBuilderRequest)[K]
    }>): Request<StopImageBuilderResult, AWSError> {
        this.boot();
        return this.client.stopImageBuilder(
          this.ops["StopImageBuilder"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof Omit<UpdateApplicationRequest, "Name">]: (UpdateApplicationRequest)[K]
    }>): Request<UpdateApplicationResult, AWSError> {
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateEntitlement(partialParams: ToOptional<{
      [K in keyof UpdateEntitlementRequest & keyof Omit<UpdateEntitlementRequest, "Name">]: (UpdateEntitlementRequest)[K]
    }>): Request<UpdateEntitlementResult, AWSError> {
        this.boot();
        return this.client.updateEntitlement(
          this.ops["UpdateEntitlement"].apply(partialParams)
        );
    }

    invokeUpdateImagePermissions(partialParams: ToOptional<{
      [K in keyof UpdateImagePermissionsRequest & keyof Omit<UpdateImagePermissionsRequest, "Name">]: (UpdateImagePermissionsRequest)[K]
    }>): Request<UpdateImagePermissionsResult, AWSError> {
        this.boot();
        return this.client.updateImagePermissions(
          this.ops["UpdateImagePermissions"].apply(partialParams)
        );
    }

    invokeUpdateStack(partialParams: ToOptional<{
      [K in keyof UpdateStackRequest & keyof Omit<UpdateStackRequest, "Name">]: (UpdateStackRequest)[K]
    }>): Request<UpdateStackResult, AWSError> {
        this.boot();
        return this.client.updateStack(
          this.ops["UpdateStack"].apply(partialParams)
        );
    }
}