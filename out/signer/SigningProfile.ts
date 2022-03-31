
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AddProfilePermissionRequest,
    CancelSigningProfileRequest,
    DescribeSigningJobRequest,
    GetSigningPlatformRequest,
    GetSigningProfileRequest,
    ListProfilePermissionsRequest,
    ListTagsForResourceRequest,
    PutSigningProfileRequest,
    RemoveProfilePermissionRequest,
    RevokeSignatureRequest,
    RevokeSigningProfileRequest,
    StartSigningJobRequest,
    TagResourceRequest,
    UntagResourceRequest,
    AddProfilePermissionResponse,
    DescribeSigningJobResponse,
    GetSigningPlatformResponse,
    GetSigningProfileResponse,
    ListProfilePermissionsResponse,
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
    constructor(...args: ConstructorParameters<typeof aws.signer.SigningProfile>) {
        super(...args)
        this.client = new awssdk.Signer()
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

    invokeAddProfilePermission(partialParams: ToOptional<{
      [K in keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest]: (AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest)[K]
    }>): Request<AddProfilePermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addProfilePermission(
          this.ops["AddProfilePermission"].applicator.apply(partialParams)
        );
    }

    invokeCancelSigningProfile(partialParams: ToOptional<{
      [K in keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest]: (CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelSigningProfile(
          this.ops["CancelSigningProfile"].applicator.apply(partialParams)
        );
    }

    invokeDescribeSigningJob(partialParams: ToOptional<{
      [K in keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest]: (DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest)[K]
    }>): Request<DescribeSigningJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSigningJob(
          this.ops["DescribeSigningJob"].applicator.apply(partialParams)
        );
    }

    invokeGetSigningPlatform(partialParams: ToOptional<{
      [K in keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest]: (GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest)[K]
    }>): Request<GetSigningPlatformResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSigningPlatform(
          this.ops["GetSigningPlatform"].applicator.apply(partialParams)
        );
    }

    invokeGetSigningProfile(partialParams: ToOptional<{
      [K in keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest]: (GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest)[K]
    }>): Request<GetSigningProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSigningProfile(
          this.ops["GetSigningProfile"].applicator.apply(partialParams)
        );
    }

    invokeListProfilePermissions(partialParams: ToOptional<{
      [K in keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest]: (ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest)[K]
    }>): Request<ListProfilePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProfilePermissions(
          this.ops["ListProfilePermissions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutSigningProfile(partialParams: ToOptional<{
      [K in keyof PutSigningProfileRequest & keyof PutSigningProfileRequest & keyof PutSigningProfileRequest & keyof PutSigningProfileRequest & keyof Omit<PutSigningProfileRequest, "platformId"> & keyof PutSigningProfileRequest & keyof PutSigningProfileRequest & keyof PutSigningProfileRequest]: (PutSigningProfileRequest & PutSigningProfileRequest & PutSigningProfileRequest & PutSigningProfileRequest & Omit<PutSigningProfileRequest, "platformId"> & PutSigningProfileRequest & PutSigningProfileRequest & PutSigningProfileRequest)[K]
    }>): Request<PutSigningProfileResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putSigningProfile(
          this.ops["PutSigningProfile"].applicator.apply(partialParams)
        );
    }

    invokeRemoveProfilePermission(partialParams: ToOptional<{
      [K in keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest]: (RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest)[K]
    }>): Request<RemoveProfilePermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeProfilePermission(
          this.ops["RemoveProfilePermission"].applicator.apply(partialParams)
        );
    }

    invokeRevokeSignature(partialParams: ToOptional<{
      [K in keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest]: (RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeSignature(
          this.ops["RevokeSignature"].applicator.apply(partialParams)
        );
    }

    invokeRevokeSigningProfile(partialParams: ToOptional<{
      [K in keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest]: (RevokeSigningProfileRequest & RevokeSigningProfileRequest & RevokeSigningProfileRequest & RevokeSigningProfileRequest & RevokeSigningProfileRequest & RevokeSigningProfileRequest & RevokeSigningProfileRequest & RevokeSigningProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeSigningProfile(
          this.ops["RevokeSigningProfile"].applicator.apply(partialParams)
        );
    }

    invokeStartSigningJob(partialParams: ToOptional<{
      [K in keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest]: (StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest)[K]
    }>): Request<StartSigningJobResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startSigningJob(
          this.ops["StartSigningJob"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }
}