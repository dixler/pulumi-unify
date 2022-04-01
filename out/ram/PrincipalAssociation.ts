
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptResourceShareInvitationRequest,
    AssociateResourceShareRequest,
    AssociateResourceSharePermissionRequest,
    CreateResourceShareRequest,
    DeleteResourceShareRequest,
    DisassociateResourceShareRequest,
    DisassociateResourceSharePermissionRequest,
    EnableSharingWithAwsOrganizationRequest,
    GetPermissionRequest,
    GetResourcePoliciesRequest,
    GetResourceShareAssociationsRequest,
    GetResourceShareInvitationsRequest,
    GetResourceSharesRequest,
    ListPendingInvitationResourcesRequest,
    ListPermissionVersionsRequest,
    ListPermissionsRequest,
    ListPrincipalsRequest,
    ListResourceSharePermissionsRequest,
    ListResourceTypesRequest,
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
    EnableSharingWithAwsOrganizationResponse,
    GetPermissionResponse,
    GetResourcePoliciesResponse,
    GetResourceShareAssociationsResponse,
    GetResourceShareInvitationsResponse,
    GetResourceSharesResponse,
    ListPendingInvitationResourcesResponse,
    ListPermissionVersionsResponse,
    ListPermissionsResponse,
    ListPrincipalsResponse,
    ListResourceSharePermissionsResponse,
    ListResourceTypesResponse,
    ListResourcesResponse,
    PromoteResourceShareCreatedFromPolicyResponse,
    RejectResourceShareInvitationResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateResourceShareResponse
} from "aws-sdk/clients/ram";
const schema = require("../apis/ram-2018-01-04.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ram.PrincipalAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ram.PrincipalAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.RAM()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAcceptResourceShareInvitation(partialParams: ToOptional<{
      [K in keyof AcceptResourceShareInvitationRequest]: (AcceptResourceShareInvitationRequest)[K]
    }>): Request<AcceptResourceShareInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptResourceShareInvitation(
          this.ops["AcceptResourceShareInvitation"].apply(partialParams)
        );
    }

    invokeAssociateResourceShare(partialParams: ToOptional<{
      [K in keyof AssociateResourceShareRequest]: (AssociateResourceShareRequest)[K]
    }>): Request<AssociateResourceShareResponse, AWSError> {
        this.boot();
        return this.client.associateResourceShare(
          this.ops["AssociateResourceShare"].apply(partialParams)
        );
    }

    invokeAssociateResourceSharePermission(partialParams: ToOptional<{
      [K in keyof AssociateResourceSharePermissionRequest]: (AssociateResourceSharePermissionRequest)[K]
    }>): Request<AssociateResourceSharePermissionResponse, AWSError> {
        this.boot();
        return this.client.associateResourceSharePermission(
          this.ops["AssociateResourceSharePermission"].apply(partialParams)
        );
    }

    invokeCreateResourceShare(partialParams: ToOptional<{
      [K in keyof CreateResourceShareRequest]: (CreateResourceShareRequest)[K]
    }>): Request<CreateResourceShareResponse, AWSError> {
        this.boot();
        return this.client.createResourceShare(
          this.ops["CreateResourceShare"].apply(partialParams)
        );
    }

    invokeDeleteResourceShare(partialParams: ToOptional<{
      [K in keyof DeleteResourceShareRequest]: (DeleteResourceShareRequest)[K]
    }>): Request<DeleteResourceShareResponse, AWSError> {
        this.boot();
        return this.client.deleteResourceShare(
          this.ops["DeleteResourceShare"].apply(partialParams)
        );
    }

    invokeDisassociateResourceShare(partialParams: ToOptional<{
      [K in keyof DisassociateResourceShareRequest]: (DisassociateResourceShareRequest)[K]
    }>): Request<DisassociateResourceShareResponse, AWSError> {
        this.boot();
        return this.client.disassociateResourceShare(
          this.ops["DisassociateResourceShare"].apply(partialParams)
        );
    }

    invokeDisassociateResourceSharePermission(partialParams: ToOptional<{
      [K in keyof DisassociateResourceSharePermissionRequest]: (DisassociateResourceSharePermissionRequest)[K]
    }>): Request<DisassociateResourceSharePermissionResponse, AWSError> {
        this.boot();
        return this.client.disassociateResourceSharePermission(
          this.ops["DisassociateResourceSharePermission"].apply(partialParams)
        );
    }

    invokeEnableSharingWithAwsOrganization(partialParams: ToOptional<{
      [K in keyof EnableSharingWithAwsOrganizationRequest]: (EnableSharingWithAwsOrganizationRequest)[K]
    }>): Request<EnableSharingWithAwsOrganizationResponse, AWSError> {
        this.boot();
        return this.client.enableSharingWithAwsOrganization(
          this.ops["EnableSharingWithAwsOrganization"].apply(partialParams)
        );
    }

    invokeGetPermission(partialParams: ToOptional<{
      [K in keyof GetPermissionRequest]: (GetPermissionRequest)[K]
    }>): Request<GetPermissionResponse, AWSError> {
        this.boot();
        return this.client.getPermission(
          this.ops["GetPermission"].apply(partialParams)
        );
    }

    invokeGetResourcePolicies(partialParams: ToOptional<{
      [K in keyof GetResourcePoliciesRequest]: (GetResourcePoliciesRequest)[K]
    }>): Request<GetResourcePoliciesResponse, AWSError> {
        this.boot();
        return this.client.getResourcePolicies(
          this.ops["GetResourcePolicies"].apply(partialParams)
        );
    }

    invokeGetResourceShareAssociations(partialParams: ToOptional<{
      [K in keyof GetResourceShareAssociationsRequest]: (GetResourceShareAssociationsRequest)[K]
    }>): Request<GetResourceShareAssociationsResponse, AWSError> {
        this.boot();
        return this.client.getResourceShareAssociations(
          this.ops["GetResourceShareAssociations"].apply(partialParams)
        );
    }

    invokeGetResourceShareInvitations(partialParams: ToOptional<{
      [K in keyof GetResourceShareInvitationsRequest]: (GetResourceShareInvitationsRequest)[K]
    }>): Request<GetResourceShareInvitationsResponse, AWSError> {
        this.boot();
        return this.client.getResourceShareInvitations(
          this.ops["GetResourceShareInvitations"].apply(partialParams)
        );
    }

    invokeGetResourceShares(partialParams: ToOptional<{
      [K in keyof GetResourceSharesRequest]: (GetResourceSharesRequest)[K]
    }>): Request<GetResourceSharesResponse, AWSError> {
        this.boot();
        return this.client.getResourceShares(
          this.ops["GetResourceShares"].apply(partialParams)
        );
    }

    invokeListPendingInvitationResources(partialParams: ToOptional<{
      [K in keyof ListPendingInvitationResourcesRequest]: (ListPendingInvitationResourcesRequest)[K]
    }>): Request<ListPendingInvitationResourcesResponse, AWSError> {
        this.boot();
        return this.client.listPendingInvitationResources(
          this.ops["ListPendingInvitationResources"].apply(partialParams)
        );
    }

    invokeListPermissionVersions(partialParams: ToOptional<{
      [K in keyof ListPermissionVersionsRequest]: (ListPermissionVersionsRequest)[K]
    }>): Request<ListPermissionVersionsResponse, AWSError> {
        this.boot();
        return this.client.listPermissionVersions(
          this.ops["ListPermissionVersions"].apply(partialParams)
        );
    }

    invokeListPermissions(partialParams: ToOptional<{
      [K in keyof ListPermissionsRequest]: (ListPermissionsRequest)[K]
    }>): Request<ListPermissionsResponse, AWSError> {
        this.boot();
        return this.client.listPermissions(
          this.ops["ListPermissions"].apply(partialParams)
        );
    }

    invokeListPrincipals(partialParams: ToOptional<{
      [K in keyof ListPrincipalsRequest]: (ListPrincipalsRequest)[K]
    }>): Request<ListPrincipalsResponse, AWSError> {
        this.boot();
        return this.client.listPrincipals(
          this.ops["ListPrincipals"].apply(partialParams)
        );
    }

    invokeListResourceSharePermissions(partialParams: ToOptional<{
      [K in keyof ListResourceSharePermissionsRequest]: (ListResourceSharePermissionsRequest)[K]
    }>): Request<ListResourceSharePermissionsResponse, AWSError> {
        this.boot();
        return this.client.listResourceSharePermissions(
          this.ops["ListResourceSharePermissions"].apply(partialParams)
        );
    }

    invokeListResourceTypes(partialParams: ToOptional<{
      [K in keyof ListResourceTypesRequest]: (ListResourceTypesRequest)[K]
    }>): Request<ListResourceTypesResponse, AWSError> {
        this.boot();
        return this.client.listResourceTypes(
          this.ops["ListResourceTypes"].apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesRequest]: (ListResourcesRequest)[K]
    }>): Request<ListResourcesResponse, AWSError> {
        this.boot();
        return this.client.listResources(
          this.ops["ListResources"].apply(partialParams)
        );
    }

    invokePromoteResourceShareCreatedFromPolicy(partialParams: ToOptional<{
      [K in keyof PromoteResourceShareCreatedFromPolicyRequest]: (PromoteResourceShareCreatedFromPolicyRequest)[K]
    }>): Request<PromoteResourceShareCreatedFromPolicyResponse, AWSError> {
        this.boot();
        return this.client.promoteResourceShareCreatedFromPolicy(
          this.ops["PromoteResourceShareCreatedFromPolicy"].apply(partialParams)
        );
    }

    invokeRejectResourceShareInvitation(partialParams: ToOptional<{
      [K in keyof RejectResourceShareInvitationRequest]: (RejectResourceShareInvitationRequest)[K]
    }>): Request<RejectResourceShareInvitationResponse, AWSError> {
        this.boot();
        return this.client.rejectResourceShareInvitation(
          this.ops["RejectResourceShareInvitation"].apply(partialParams)
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

    invokeUpdateResourceShare(partialParams: ToOptional<{
      [K in keyof UpdateResourceShareRequest]: (UpdateResourceShareRequest)[K]
    }>): Request<UpdateResourceShareResponse, AWSError> {
        this.boot();
        return this.client.updateResourceShare(
          this.ops["UpdateResourceShare"].apply(partialParams)
        );
    }
}