
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddProfilePermissionRequest,
    DescribeSigningJobRequest,
    GetSigningPlatformRequest,
    GetSigningProfileRequest,
    ListProfilePermissionsRequest,
    ListSigningJobsRequest,
    ListSigningPlatformsRequest,
    ListSigningProfilesRequest,
    ListTagsForResourceRequest,
    PutSigningProfileRequest,
    RemoveProfilePermissionRequest,
    StartSigningJobRequest,
    TagResourceRequest,
    UntagResourceRequest,
    AddProfilePermissionResponse,
    DescribeSigningJobResponse,
    GetSigningPlatformResponse,
    GetSigningProfileResponse,
    ListProfilePermissionsResponse,
    ListSigningJobsResponse,
    ListSigningPlatformsResponse,
    ListSigningProfilesResponse,
    ListTagsForResourceResponse,
    PutSigningProfileResponse,
    RemoveProfilePermissionResponse,
    StartSigningJobResponse,
    TagResourceResponse,
    UntagResourceResponse
} from "aws-sdk/clients/signer";
const schema = require("../apis/signer-2017-08-25.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.signer.SigningProfile {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.signer.SigningProfile>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Signer()
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

    invokeAddProfilePermission(partialParams: ToOptional<{
      [K in keyof AddProfilePermissionRequest]: (AddProfilePermissionRequest)[K]
    }>): Request<AddProfilePermissionResponse, AWSError> {
        this.boot();
        return this.client.addProfilePermission(
          this.ops["AddProfilePermission"].apply(partialParams)
        );
    }

    invokeDescribeSigningJob(partialParams: ToOptional<{
      [K in keyof DescribeSigningJobRequest]: (DescribeSigningJobRequest)[K]
    }>): Request<DescribeSigningJobResponse, AWSError> {
        this.boot();
        return this.client.describeSigningJob(
          this.ops["DescribeSigningJob"].apply(partialParams)
        );
    }

    invokeGetSigningPlatform(partialParams: ToOptional<{
      [K in keyof GetSigningPlatformRequest]: (GetSigningPlatformRequest)[K]
    }>): Request<GetSigningPlatformResponse, AWSError> {
        this.boot();
        return this.client.getSigningPlatform(
          this.ops["GetSigningPlatform"].apply(partialParams)
        );
    }

    invokeGetSigningProfile(partialParams: ToOptional<{
      [K in keyof GetSigningProfileRequest]: (GetSigningProfileRequest)[K]
    }>): Request<GetSigningProfileResponse, AWSError> {
        this.boot();
        return this.client.getSigningProfile(
          this.ops["GetSigningProfile"].apply(partialParams)
        );
    }

    invokeListProfilePermissions(partialParams: ToOptional<{
      [K in keyof ListProfilePermissionsRequest]: (ListProfilePermissionsRequest)[K]
    }>): Request<ListProfilePermissionsResponse, AWSError> {
        this.boot();
        return this.client.listProfilePermissions(
          this.ops["ListProfilePermissions"].apply(partialParams)
        );
    }

    invokeListSigningJobs(partialParams: ToOptional<{
      [K in keyof ListSigningJobsRequest]: (ListSigningJobsRequest)[K]
    }>): Request<ListSigningJobsResponse, AWSError> {
        this.boot();
        return this.client.listSigningJobs(
          this.ops["ListSigningJobs"].apply(partialParams)
        );
    }

    invokeListSigningPlatforms(partialParams: ToOptional<{
      [K in keyof ListSigningPlatformsRequest]: (ListSigningPlatformsRequest)[K]
    }>): Request<ListSigningPlatformsResponse, AWSError> {
        this.boot();
        return this.client.listSigningPlatforms(
          this.ops["ListSigningPlatforms"].apply(partialParams)
        );
    }

    invokeListSigningProfiles(partialParams: ToOptional<{
      [K in keyof ListSigningProfilesRequest]: (ListSigningProfilesRequest)[K]
    }>): Request<ListSigningProfilesResponse, AWSError> {
        this.boot();
        return this.client.listSigningProfiles(
          this.ops["ListSigningProfiles"].apply(partialParams)
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

    invokePutSigningProfile(partialParams: ToOptional<{
      [K in keyof PutSigningProfileRequest]: (PutSigningProfileRequest)[K]
    }>): Request<PutSigningProfileResponse, AWSError> {
        this.boot();
        return this.client.putSigningProfile(
          this.ops["PutSigningProfile"].apply(partialParams)
        );
    }

    invokeRemoveProfilePermission(partialParams: ToOptional<{
      [K in keyof RemoveProfilePermissionRequest]: (RemoveProfilePermissionRequest)[K]
    }>): Request<RemoveProfilePermissionResponse, AWSError> {
        this.boot();
        return this.client.removeProfilePermission(
          this.ops["RemoveProfilePermission"].apply(partialParams)
        );
    }

    invokeStartSigningJob(partialParams: ToOptional<{
      [K in keyof StartSigningJobRequest]: (StartSigningJobRequest)[K]
    }>): Request<StartSigningJobResponse, AWSError> {
        this.boot();
        return this.client.startSigningJob(
          this.ops["StartSigningJob"].apply(partialParams)
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
}