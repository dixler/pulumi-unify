
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.signer.SigningProfilePermission {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.signer.SigningProfilePermission>) {
        super(...args)
        this.client = new awssdk.Signer()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/signer-2017-08-25.normal.json"), this.client)
    }

    invokeAddProfilePermission(partialParams: ToOptional<{
      [K in keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest & keyof AddProfilePermissionRequest]: (AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest & AddProfilePermissionRequest)[K]
    }>): AddProfilePermissionResponse {
        return this.client.addProfilePermission(
            this.ops["AddProfilePermission"].apply(partialParams)
        );
    }

    invokeCancelSigningProfile(partialParams: ToOptional<{
      [K in keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest & keyof CancelSigningProfileRequest]: (CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest & CancelSigningProfileRequest)[K]
    }>): void {
        return this.client.cancelSigningProfile(
            this.ops["CancelSigningProfile"].apply(partialParams)
        );
    }

    invokeDescribeSigningJob(partialParams: ToOptional<{
      [K in keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest & keyof DescribeSigningJobRequest]: (DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest & DescribeSigningJobRequest)[K]
    }>): DescribeSigningJobResponse {
        return this.client.describeSigningJob(
            this.ops["DescribeSigningJob"].apply(partialParams)
        );
    }

    invokeGetSigningPlatform(partialParams: ToOptional<{
      [K in keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest & keyof GetSigningPlatformRequest]: (GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest & GetSigningPlatformRequest)[K]
    }>): GetSigningPlatformResponse {
        return this.client.getSigningPlatform(
            this.ops["GetSigningPlatform"].apply(partialParams)
        );
    }

    invokeGetSigningProfile(partialParams: ToOptional<{
      [K in keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest & keyof GetSigningProfileRequest]: (GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest & GetSigningProfileRequest)[K]
    }>): GetSigningProfileResponse {
        return this.client.getSigningProfile(
            this.ops["GetSigningProfile"].apply(partialParams)
        );
    }

    invokeListProfilePermissions(partialParams: ToOptional<{
      [K in keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest & keyof ListProfilePermissionsRequest]: (ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest & ListProfilePermissionsRequest)[K]
    }>): ListProfilePermissionsResponse {
        return this.client.listProfilePermissions(
            this.ops["ListProfilePermissions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutSigningProfile(partialParams: ToOptional<{
      [K in keyof PutSigningProfileRequest & keyof PutSigningProfileRequest & keyof Omit<PutSigningProfileRequest, "profileName"> & keyof PutSigningProfileRequest & keyof PutSigningProfileRequest & keyof PutSigningProfileRequest]: (PutSigningProfileRequest & PutSigningProfileRequest & Omit<PutSigningProfileRequest, "profileName"> & PutSigningProfileRequest & PutSigningProfileRequest & PutSigningProfileRequest)[K]
    }>): PutSigningProfileResponse {
        return this.client.putSigningProfile(
            this.ops["PutSigningProfile"].apply(partialParams)
        );
    }

    invokeRemoveProfilePermission(partialParams: ToOptional<{
      [K in keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof Omit<RemoveProfilePermissionRequest, "profileName"> & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest & keyof RemoveProfilePermissionRequest]: (RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & Omit<RemoveProfilePermissionRequest, "profileName"> & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest & RemoveProfilePermissionRequest)[K]
    }>): RemoveProfilePermissionResponse {
        return this.client.removeProfilePermission(
            this.ops["RemoveProfilePermission"].apply(partialParams)
        );
    }

    invokeRevokeSignature(partialParams: ToOptional<{
      [K in keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest & keyof RevokeSignatureRequest]: (RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest & RevokeSignatureRequest)[K]
    }>): void {
        return this.client.revokeSignature(
            this.ops["RevokeSignature"].apply(partialParams)
        );
    }

    invokeRevokeSigningProfile(partialParams: ToOptional<{
      [K in keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest & keyof Omit<RevokeSigningProfileRequest, "profileName"> & keyof Omit<RevokeSigningProfileRequest, "profileVersion"> & keyof RevokeSigningProfileRequest & keyof RevokeSigningProfileRequest]: (RevokeSigningProfileRequest & RevokeSigningProfileRequest & Omit<RevokeSigningProfileRequest, "profileName"> & Omit<RevokeSigningProfileRequest, "profileVersion"> & RevokeSigningProfileRequest & RevokeSigningProfileRequest)[K]
    }>): void {
        return this.client.revokeSigningProfile(
            this.ops["RevokeSigningProfile"].apply(partialParams)
        );
    }

    invokeStartSigningJob(partialParams: ToOptional<{
      [K in keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof Omit<StartSigningJobRequest, "profileName"> & keyof StartSigningJobRequest & keyof StartSigningJobRequest & keyof StartSigningJobRequest]: (StartSigningJobRequest & StartSigningJobRequest & Omit<StartSigningJobRequest, "profileName"> & StartSigningJobRequest & StartSigningJobRequest & StartSigningJobRequest)[K]
    }>): StartSigningJobResponse {
        return this.client.startSigningJob(
            this.ops["StartSigningJob"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }
}