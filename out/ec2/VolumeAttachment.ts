
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateIamInstanceProfileRequest,
    AttachClassicLinkVpcRequest,
    AttachNetworkInterfaceRequest,
    AttachVolumeRequest,
    BundleInstanceRequest,
    ConfirmProductInstanceRequest,
    CreateImageRequest,
    CreateInstanceExportTaskRequest,
    CreateReplaceRootVolumeTaskRequest,
    CreateSnapshotRequest,
    DescribeInstanceAttributeRequest,
    DescribeVolumeAttributeRequest,
    DetachClassicLinkVpcRequest,
    DetachVolumeRequest,
    GetConsoleOutputRequest,
    GetConsoleScreenshotRequest,
    GetLaunchTemplateDataRequest,
    GetPasswordDataRequest,
    ModifyInstanceCapacityReservationAttributesRequest,
    ModifyInstanceEventStartTimeRequest,
    ModifyInstanceMetadataOptionsRequest,
    ModifyInstancePlacementRequest,
    ModifyVolumeRequest,
    AssociateIamInstanceProfileResult,
    AttachClassicLinkVpcResult,
    AttachNetworkInterfaceResult,
    VolumeAttachment,
    BundleInstanceResult,
    ConfirmProductInstanceResult,
    CreateImageResult,
    CreateInstanceExportTaskResult,
    CreateReplaceRootVolumeTaskResult,
    Snapshot,
    InstanceAttribute,
    DescribeVolumeAttributeResult,
    DetachClassicLinkVpcResult,
    GetConsoleOutputResult,
    GetConsoleScreenshotResult,
    GetLaunchTemplateDataResult,
    GetPasswordDataResult,
    ModifyInstanceCapacityReservationAttributesResult,
    ModifyInstanceEventStartTimeResult,
    ModifyInstanceMetadataOptionsResult,
    ModifyInstancePlacementResult,
    ModifyVolumeResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.VolumeAttachment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.VolumeAttachment>) {
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

    invokeAssociateIamInstanceProfile(partialParams: ToOptional<{
      [K in keyof AssociateIamInstanceProfileRequest & keyof Omit<AssociateIamInstanceProfileRequest, "InstanceId">]: (AssociateIamInstanceProfileRequest)[K]
    }>): Request<AssociateIamInstanceProfileResult, AWSError> {
        this.boot();
        return this.client.associateIamInstanceProfile(
          this.ops["AssociateIamInstanceProfile"].apply(partialParams)
        );
    }

    invokeAttachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof AttachClassicLinkVpcRequest & keyof Omit<AttachClassicLinkVpcRequest, "InstanceId">]: (AttachClassicLinkVpcRequest)[K]
    }>): Request<AttachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.attachClassicLinkVpc(
          this.ops["AttachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeAttachNetworkInterface(partialParams: ToOptional<{
      [K in keyof AttachNetworkInterfaceRequest & keyof Omit<AttachNetworkInterfaceRequest, "InstanceId">]: (AttachNetworkInterfaceRequest)[K]
    }>): Request<AttachNetworkInterfaceResult, AWSError> {
        this.boot();
        return this.client.attachNetworkInterface(
          this.ops["AttachNetworkInterface"].apply(partialParams)
        );
    }

    invokeAttachVolume(partialParams: ToOptional<{
      [K in keyof AttachVolumeRequest & keyof Omit<AttachVolumeRequest, "InstanceId" | "VolumeId">]: (AttachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        this.boot();
        return this.client.attachVolume(
          this.ops["AttachVolume"].apply(partialParams)
        );
    }

    invokeBundleInstance(partialParams: ToOptional<{
      [K in keyof BundleInstanceRequest & keyof Omit<BundleInstanceRequest, "InstanceId">]: (BundleInstanceRequest)[K]
    }>): Request<BundleInstanceResult, AWSError> {
        this.boot();
        return this.client.bundleInstance(
          this.ops["BundleInstance"].apply(partialParams)
        );
    }

    invokeConfirmProductInstance(partialParams: ToOptional<{
      [K in keyof ConfirmProductInstanceRequest & keyof Omit<ConfirmProductInstanceRequest, "InstanceId">]: (ConfirmProductInstanceRequest)[K]
    }>): Request<ConfirmProductInstanceResult, AWSError> {
        this.boot();
        return this.client.confirmProductInstance(
          this.ops["ConfirmProductInstance"].apply(partialParams)
        );
    }

    invokeCreateImage(partialParams: ToOptional<{
      [K in keyof CreateImageRequest & keyof Omit<CreateImageRequest, "InstanceId">]: (CreateImageRequest)[K]
    }>): Request<CreateImageResult, AWSError> {
        this.boot();
        return this.client.createImage(
          this.ops["CreateImage"].apply(partialParams)
        );
    }

    invokeCreateInstanceExportTask(partialParams: ToOptional<{
      [K in keyof CreateInstanceExportTaskRequest & keyof Omit<CreateInstanceExportTaskRequest, "InstanceId">]: (CreateInstanceExportTaskRequest)[K]
    }>): Request<CreateInstanceExportTaskResult, AWSError> {
        this.boot();
        return this.client.createInstanceExportTask(
          this.ops["CreateInstanceExportTask"].apply(partialParams)
        );
    }

    invokeCreateReplaceRootVolumeTask(partialParams: ToOptional<{
      [K in keyof CreateReplaceRootVolumeTaskRequest & keyof Omit<CreateReplaceRootVolumeTaskRequest, "InstanceId">]: (CreateReplaceRootVolumeTaskRequest)[K]
    }>): Request<CreateReplaceRootVolumeTaskResult, AWSError> {
        this.boot();
        return this.client.createReplaceRootVolumeTask(
          this.ops["CreateReplaceRootVolumeTask"].apply(partialParams)
        );
    }

    invokeCreateSnapshot(partialParams: ToOptional<{
      [K in keyof CreateSnapshotRequest & keyof Omit<CreateSnapshotRequest, "VolumeId">]: (CreateSnapshotRequest)[K]
    }>): Request<Snapshot, AWSError> {
        this.boot();
        return this.client.createSnapshot(
          this.ops["CreateSnapshot"].apply(partialParams)
        );
    }

    invokeDescribeInstanceAttribute(partialParams: ToOptional<{
      [K in keyof DescribeInstanceAttributeRequest & keyof Omit<DescribeInstanceAttributeRequest, "InstanceId">]: (DescribeInstanceAttributeRequest)[K]
    }>): Request<InstanceAttribute, AWSError> {
        this.boot();
        return this.client.describeInstanceAttribute(
          this.ops["DescribeInstanceAttribute"].apply(partialParams)
        );
    }

    invokeDescribeVolumeAttribute(partialParams: ToOptional<{
      [K in keyof DescribeVolumeAttributeRequest & keyof Omit<DescribeVolumeAttributeRequest, "VolumeId">]: (DescribeVolumeAttributeRequest)[K]
    }>): Request<DescribeVolumeAttributeResult, AWSError> {
        this.boot();
        return this.client.describeVolumeAttribute(
          this.ops["DescribeVolumeAttribute"].apply(partialParams)
        );
    }

    invokeDetachClassicLinkVpc(partialParams: ToOptional<{
      [K in keyof DetachClassicLinkVpcRequest & keyof Omit<DetachClassicLinkVpcRequest, "InstanceId">]: (DetachClassicLinkVpcRequest)[K]
    }>): Request<DetachClassicLinkVpcResult, AWSError> {
        this.boot();
        return this.client.detachClassicLinkVpc(
          this.ops["DetachClassicLinkVpc"].apply(partialParams)
        );
    }

    invokeDetachVolume(partialParams: ToOptional<{
      [K in keyof DetachVolumeRequest & keyof Omit<DetachVolumeRequest, "VolumeId">]: (DetachVolumeRequest)[K]
    }>): Request<VolumeAttachment, AWSError> {
        this.boot();
        return this.client.detachVolume(
          this.ops["DetachVolume"].apply(partialParams)
        );
    }

    invokeGetConsoleOutput(partialParams: ToOptional<{
      [K in keyof GetConsoleOutputRequest & keyof Omit<GetConsoleOutputRequest, "InstanceId">]: (GetConsoleOutputRequest)[K]
    }>): Request<GetConsoleOutputResult, AWSError> {
        this.boot();
        return this.client.getConsoleOutput(
          this.ops["GetConsoleOutput"].apply(partialParams)
        );
    }

    invokeGetConsoleScreenshot(partialParams: ToOptional<{
      [K in keyof GetConsoleScreenshotRequest & keyof Omit<GetConsoleScreenshotRequest, "InstanceId">]: (GetConsoleScreenshotRequest)[K]
    }>): Request<GetConsoleScreenshotResult, AWSError> {
        this.boot();
        return this.client.getConsoleScreenshot(
          this.ops["GetConsoleScreenshot"].apply(partialParams)
        );
    }

    invokeGetLaunchTemplateData(partialParams: ToOptional<{
      [K in keyof GetLaunchTemplateDataRequest & keyof Omit<GetLaunchTemplateDataRequest, "InstanceId">]: (GetLaunchTemplateDataRequest)[K]
    }>): Request<GetLaunchTemplateDataResult, AWSError> {
        this.boot();
        return this.client.getLaunchTemplateData(
          this.ops["GetLaunchTemplateData"].apply(partialParams)
        );
    }

    invokeGetPasswordData(partialParams: ToOptional<{
      [K in keyof GetPasswordDataRequest & keyof Omit<GetPasswordDataRequest, "InstanceId">]: (GetPasswordDataRequest)[K]
    }>): Request<GetPasswordDataResult, AWSError> {
        this.boot();
        return this.client.getPasswordData(
          this.ops["GetPasswordData"].apply(partialParams)
        );
    }

    invokeModifyInstanceCapacityReservationAttributes(partialParams: ToOptional<{
      [K in keyof ModifyInstanceCapacityReservationAttributesRequest & keyof Omit<ModifyInstanceCapacityReservationAttributesRequest, "InstanceId">]: (ModifyInstanceCapacityReservationAttributesRequest)[K]
    }>): Request<ModifyInstanceCapacityReservationAttributesResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceCapacityReservationAttributes(
          this.ops["ModifyInstanceCapacityReservationAttributes"].apply(partialParams)
        );
    }

    invokeModifyInstanceEventStartTime(partialParams: ToOptional<{
      [K in keyof ModifyInstanceEventStartTimeRequest & keyof Omit<ModifyInstanceEventStartTimeRequest, "InstanceId">]: (ModifyInstanceEventStartTimeRequest)[K]
    }>): Request<ModifyInstanceEventStartTimeResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceEventStartTime(
          this.ops["ModifyInstanceEventStartTime"].apply(partialParams)
        );
    }

    invokeModifyInstanceMetadataOptions(partialParams: ToOptional<{
      [K in keyof ModifyInstanceMetadataOptionsRequest & keyof Omit<ModifyInstanceMetadataOptionsRequest, "InstanceId">]: (ModifyInstanceMetadataOptionsRequest)[K]
    }>): Request<ModifyInstanceMetadataOptionsResult, AWSError> {
        this.boot();
        return this.client.modifyInstanceMetadataOptions(
          this.ops["ModifyInstanceMetadataOptions"].apply(partialParams)
        );
    }

    invokeModifyInstancePlacement(partialParams: ToOptional<{
      [K in keyof ModifyInstancePlacementRequest & keyof Omit<ModifyInstancePlacementRequest, "InstanceId">]: (ModifyInstancePlacementRequest)[K]
    }>): Request<ModifyInstancePlacementResult, AWSError> {
        this.boot();
        return this.client.modifyInstancePlacement(
          this.ops["ModifyInstancePlacement"].apply(partialParams)
        );
    }

    invokeModifyVolume(partialParams: ToOptional<{
      [K in keyof ModifyVolumeRequest & keyof Omit<ModifyVolumeRequest, "VolumeId">]: (ModifyVolumeRequest)[K]
    }>): Request<ModifyVolumeResult, AWSError> {
        this.boot();
        return this.client.modifyVolume(
          this.ops["ModifyVolume"].apply(partialParams)
        );
    }
}