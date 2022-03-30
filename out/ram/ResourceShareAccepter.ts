
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AcceptResourceShareInvitationRequest,
    AssociateResourceShareRequest,
    AssociateResourceSharePermissionRequest,
    CreateResourceShareRequest,
    DeleteResourceShareRequest,
    DisassociateResourceShareRequest,
    DisassociateResourceSharePermissionRequest,
    GetPermissionRequest,
    GetResourcePoliciesRequest,
    GetResourceShareAssociationsRequest,
    GetResourceSharesRequest,
    ListPendingInvitationResourcesRequest,
    ListPermissionVersionsRequest,
    ListPrincipalsRequest,
    ListResourceSharePermissionsRequest,
    ListResourcesRequest,
    PromoteResourceShareCreatedFromPolicyRequest,
    RejectResourceShareInvitationRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateResourceShareRequest,
    AcceptResourceShareInvitationResponse,
    AssociateResourceShareResponse,
    AssociateResourceSharePermissionResponse,
    CreateResourceShareResponse,
    DeleteResourceShareResponse,
    DisassociateResourceShareResponse,
    DisassociateResourceSharePermissionResponse,
    GetPermissionResponse,
    GetResourcePoliciesResponse,
    GetResourceShareAssociationsResponse,
    GetResourceSharesResponse,
    ListPendingInvitationResourcesResponse,
    ListPermissionVersionsResponse,
    ListPrincipalsResponse,
    ListResourceSharePermissionsResponse,
    ListResourcesResponse,
    PromoteResourceShareCreatedFromPolicyResponse,
    RejectResourceShareInvitationResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateResourceShareResponse
} from "aws-sdk/clients/ram";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ram.ResourceShareAccepter {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.ram.ResourceShareAccepter>) {
        super(...args)
        this.client = new awssdk.RAM()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/ram-2018-01-04.normal.json"), this.client)
    }

    invokeAcceptResourceShareInvitation(partialParams: ToOptional<{
      [K in keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest]: (AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest)[K]
    }>): AcceptResourceShareInvitationResponse {
        return this.client.acceptResourceShareInvitation(
            this.ops["AcceptResourceShareInvitation"].apply(partialParams)
        );
    }

    invokeAssociateResourceShare(partialParams: ToOptional<{
      [K in keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest]: (AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest)[K]
    }>): AssociateResourceShareResponse {
        return this.client.associateResourceShare(
            this.ops["AssociateResourceShare"].apply(partialParams)
        );
    }

    invokeAssociateResourceSharePermission(partialParams: ToOptional<{
      [K in keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest]: (AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest)[K]
    }>): AssociateResourceSharePermissionResponse {
        return this.client.associateResourceSharePermission(
            this.ops["AssociateResourceSharePermission"].apply(partialParams)
        );
    }

    invokeCreateResourceShare(partialParams: ToOptional<{
      [K in keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest]: (CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest)[K]
    }>): CreateResourceShareResponse {
        return this.client.createResourceShare(
            this.ops["CreateResourceShare"].apply(partialParams)
        );
    }

    invokeDeleteResourceShare(partialParams: ToOptional<{
      [K in keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest]: (DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest)[K]
    }>): DeleteResourceShareResponse {
        return this.client.deleteResourceShare(
            this.ops["DeleteResourceShare"].apply(partialParams)
        );
    }

    invokeDisassociateResourceShare(partialParams: ToOptional<{
      [K in keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest]: (DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest)[K]
    }>): DisassociateResourceShareResponse {
        return this.client.disassociateResourceShare(
            this.ops["DisassociateResourceShare"].apply(partialParams)
        );
    }

    invokeDisassociateResourceSharePermission(partialParams: ToOptional<{
      [K in keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest]: (DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest)[K]
    }>): DisassociateResourceSharePermissionResponse {
        return this.client.disassociateResourceSharePermission(
            this.ops["DisassociateResourceSharePermission"].apply(partialParams)
        );
    }

    invokeGetPermission(partialParams: ToOptional<{
      [K in keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest]: (GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest)[K]
    }>): GetPermissionResponse {
        return this.client.getPermission(
            this.ops["GetPermission"].apply(partialParams)
        );
    }

    invokeGetResourcePolicies(partialParams: ToOptional<{
      [K in keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest]: (GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest)[K]
    }>): GetResourcePoliciesResponse {
        return this.client.getResourcePolicies(
            this.ops["GetResourcePolicies"].apply(partialParams)
        );
    }

    invokeGetResourceShareAssociations(partialParams: ToOptional<{
      [K in keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest]: (GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest)[K]
    }>): GetResourceShareAssociationsResponse {
        return this.client.getResourceShareAssociations(
            this.ops["GetResourceShareAssociations"].apply(partialParams)
        );
    }

    invokeGetResourceShares(partialParams: ToOptional<{
      [K in keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest]: (GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest)[K]
    }>): GetResourceSharesResponse {
        return this.client.getResourceShares(
            this.ops["GetResourceShares"].apply(partialParams)
        );
    }

    invokeListPendingInvitationResources(partialParams: ToOptional<{
      [K in keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest]: (ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest)[K]
    }>): ListPendingInvitationResourcesResponse {
        return this.client.listPendingInvitationResources(
            this.ops["ListPendingInvitationResources"].apply(partialParams)
        );
    }

    invokeListPermissionVersions(partialParams: ToOptional<{
      [K in keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest]: (ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest)[K]
    }>): ListPermissionVersionsResponse {
        return this.client.listPermissionVersions(
            this.ops["ListPermissionVersions"].apply(partialParams)
        );
    }

    invokeListPrincipals(partialParams: ToOptional<{
      [K in keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest]: (ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest)[K]
    }>): ListPrincipalsResponse {
        return this.client.listPrincipals(
            this.ops["ListPrincipals"].apply(partialParams)
        );
    }

    invokeListResourceSharePermissions(partialParams: ToOptional<{
      [K in keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest]: (ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest)[K]
    }>): ListResourceSharePermissionsResponse {
        return this.client.listResourceSharePermissions(
            this.ops["ListResourceSharePermissions"].apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest]: (ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest)[K]
    }>): ListResourcesResponse {
        return this.client.listResources(
            this.ops["ListResources"].apply(partialParams)
        );
    }

    invokePromoteResourceShareCreatedFromPolicy(partialParams: ToOptional<{
      [K in keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest]: (PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest)[K]
    }>): PromoteResourceShareCreatedFromPolicyResponse {
        return this.client.promoteResourceShareCreatedFromPolicy(
            this.ops["PromoteResourceShareCreatedFromPolicy"].apply(partialParams)
        );
    }

    invokeRejectResourceShareInvitation(partialParams: ToOptional<{
      [K in keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest]: (RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest)[K]
    }>): RejectResourceShareInvitationResponse {
        return this.client.rejectResourceShareInvitation(
            this.ops["RejectResourceShareInvitation"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateResourceShare(partialParams: ToOptional<{
      [K in keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest]: (UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest)[K]
    }>): UpdateResourceShareResponse {
        return this.client.updateResourceShare(
            this.ops["UpdateResourceShare"].apply(partialParams)
        );
    }
}