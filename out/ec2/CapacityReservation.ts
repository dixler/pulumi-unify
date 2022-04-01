
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AllocateHostsRequest,
    CreateCapacityReservationRequest,
    CreateDefaultSubnetRequest,
    CreateVolumeRequest,
    ImportVolumeRequest,
    AllocateHostsResult,
    CreateCapacityReservationResult,
    CreateDefaultSubnetResult,
    Volume,
    ImportVolumeResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.CapacityReservation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.CapacityReservation>) {
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

    invokeAllocateHosts(partialParams: ToOptional<{
      [K in keyof AllocateHostsRequest & keyof Omit<AllocateHostsRequest, "AvailabilityZone">]: (AllocateHostsRequest)[K]
    }>): Request<AllocateHostsResult, AWSError> {
        this.boot();
        return this.client.allocateHosts(
          this.ops["AllocateHosts"].apply(partialParams)
        );
    }

    invokeCreateCapacityReservation(partialParams: ToOptional<{
      [K in keyof CreateCapacityReservationRequest & keyof Omit<CreateCapacityReservationRequest, "InstanceType" | "InstancePlatform">]: (CreateCapacityReservationRequest)[K]
    }>): Request<CreateCapacityReservationResult, AWSError> {
        this.boot();
        return this.client.createCapacityReservation(
          this.ops["CreateCapacityReservation"].apply(partialParams)
        );
    }

    invokeCreateDefaultSubnet(partialParams: ToOptional<{
      [K in keyof CreateDefaultSubnetRequest & keyof Omit<CreateDefaultSubnetRequest, "AvailabilityZone">]: (CreateDefaultSubnetRequest)[K]
    }>): Request<CreateDefaultSubnetResult, AWSError> {
        this.boot();
        return this.client.createDefaultSubnet(
          this.ops["CreateDefaultSubnet"].apply(partialParams)
        );
    }

    invokeCreateVolume(partialParams: ToOptional<{
      [K in keyof CreateVolumeRequest & keyof Omit<CreateVolumeRequest, "AvailabilityZone">]: (CreateVolumeRequest)[K]
    }>): Request<Volume, AWSError> {
        this.boot();
        return this.client.createVolume(
          this.ops["CreateVolume"].apply(partialParams)
        );
    }

    invokeImportVolume(partialParams: ToOptional<{
      [K in keyof ImportVolumeRequest & keyof Omit<ImportVolumeRequest, "AvailabilityZone">]: (ImportVolumeRequest)[K]
    }>): Request<ImportVolumeResult, AWSError> {
        this.boot();
        return this.client.importVolume(
          this.ops["ImportVolume"].apply(partialParams)
        );
    }
}