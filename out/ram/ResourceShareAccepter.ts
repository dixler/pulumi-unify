
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
const schema = require("../apis/ram-2018-01-04.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ram.ResourceShareAccepter {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.ram.ResourceShareAccepter>) {
        super(...args)
        this.client = new awssdk.RAM()
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

    invokeAcceptResourceShareInvitation(partialParams: ToOptional<{
      [K in keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest & keyof AcceptResourceShareInvitationRequest]: (AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest & AcceptResourceShareInvitationRequest)[K]
    }>): Request<AcceptResourceShareInvitationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptResourceShareInvitation(
          this.ops["AcceptResourceShareInvitation"].applicator.apply(partialParams)
        );
    }

    invokeAssociateResourceShare(partialParams: ToOptional<{
      [K in keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest & keyof AssociateResourceShareRequest]: (AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest & AssociateResourceShareRequest)[K]
    }>): Request<AssociateResourceShareResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateResourceShare(
          this.ops["AssociateResourceShare"].applicator.apply(partialParams)
        );
    }

    invokeAssociateResourceSharePermission(partialParams: ToOptional<{
      [K in keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest & keyof AssociateResourceSharePermissionRequest]: (AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest & AssociateResourceSharePermissionRequest)[K]
    }>): Request<AssociateResourceSharePermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateResourceSharePermission(
          this.ops["AssociateResourceSharePermission"].applicator.apply(partialParams)
        );
    }

    invokeCreateResourceShare(partialParams: ToOptional<{
      [K in keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest & keyof CreateResourceShareRequest]: (CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest & CreateResourceShareRequest)[K]
    }>): Request<CreateResourceShareResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResourceShare(
          this.ops["CreateResourceShare"].applicator.apply(partialParams)
        );
    }

    invokeDeleteResourceShare(partialParams: ToOptional<{
      [K in keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest & keyof DeleteResourceShareRequest]: (DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest & DeleteResourceShareRequest)[K]
    }>): Request<DeleteResourceShareResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourceShare(
          this.ops["DeleteResourceShare"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateResourceShare(partialParams: ToOptional<{
      [K in keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest & keyof DisassociateResourceShareRequest]: (DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest & DisassociateResourceShareRequest)[K]
    }>): Request<DisassociateResourceShareResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateResourceShare(
          this.ops["DisassociateResourceShare"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateResourceSharePermission(partialParams: ToOptional<{
      [K in keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest & keyof DisassociateResourceSharePermissionRequest]: (DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest & DisassociateResourceSharePermissionRequest)[K]
    }>): Request<DisassociateResourceSharePermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateResourceSharePermission(
          this.ops["DisassociateResourceSharePermission"].applicator.apply(partialParams)
        );
    }

    invokeGetPermission(partialParams: ToOptional<{
      [K in keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest & keyof GetPermissionRequest]: (GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest & GetPermissionRequest)[K]
    }>): Request<GetPermissionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPermission(
          this.ops["GetPermission"].applicator.apply(partialParams)
        );
    }

    invokeGetResourcePolicies(partialParams: ToOptional<{
      [K in keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest & keyof GetResourcePoliciesRequest]: (GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest & GetResourcePoliciesRequest)[K]
    }>): Request<GetResourcePoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourcePolicies(
          this.ops["GetResourcePolicies"].applicator.apply(partialParams)
        );
    }

    invokeGetResourceShareAssociations(partialParams: ToOptional<{
      [K in keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest & keyof GetResourceShareAssociationsRequest]: (GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest & GetResourceShareAssociationsRequest)[K]
    }>): Request<GetResourceShareAssociationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceShareAssociations(
          this.ops["GetResourceShareAssociations"].applicator.apply(partialParams)
        );
    }

    invokeGetResourceShares(partialParams: ToOptional<{
      [K in keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest & keyof GetResourceSharesRequest]: (GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest & GetResourceSharesRequest)[K]
    }>): Request<GetResourceSharesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResourceShares(
          this.ops["GetResourceShares"].applicator.apply(partialParams)
        );
    }

    invokeListPendingInvitationResources(partialParams: ToOptional<{
      [K in keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest & keyof ListPendingInvitationResourcesRequest]: (ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest & ListPendingInvitationResourcesRequest)[K]
    }>): Request<ListPendingInvitationResourcesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPendingInvitationResources(
          this.ops["ListPendingInvitationResources"].applicator.apply(partialParams)
        );
    }

    invokeListPermissionVersions(partialParams: ToOptional<{
      [K in keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest & keyof ListPermissionVersionsRequest]: (ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest & ListPermissionVersionsRequest)[K]
    }>): Request<ListPermissionVersionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPermissionVersions(
          this.ops["ListPermissionVersions"].applicator.apply(partialParams)
        );
    }

    invokeListPrincipals(partialParams: ToOptional<{
      [K in keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest & keyof ListPrincipalsRequest]: (ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest & ListPrincipalsRequest)[K]
    }>): Request<ListPrincipalsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrincipals(
          this.ops["ListPrincipals"].applicator.apply(partialParams)
        );
    }

    invokeListResourceSharePermissions(partialParams: ToOptional<{
      [K in keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest & keyof ListResourceSharePermissionsRequest]: (ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest & ListResourceSharePermissionsRequest)[K]
    }>): Request<ListResourceSharePermissionsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourceSharePermissions(
          this.ops["ListResourceSharePermissions"].applicator.apply(partialParams)
        );
    }

    invokeListResources(partialParams: ToOptional<{
      [K in keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest & keyof ListResourcesRequest]: (ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest & ListResourcesRequest)[K]
    }>): Request<ListResourcesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResources(
          this.ops["ListResources"].applicator.apply(partialParams)
        );
    }

    invokePromoteResourceShareCreatedFromPolicy(partialParams: ToOptional<{
      [K in keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest & keyof PromoteResourceShareCreatedFromPolicyRequest]: (PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest & PromoteResourceShareCreatedFromPolicyRequest)[K]
    }>): Request<PromoteResourceShareCreatedFromPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.promoteResourceShareCreatedFromPolicy(
          this.ops["PromoteResourceShareCreatedFromPolicy"].applicator.apply(partialParams)
        );
    }

    invokeRejectResourceShareInvitation(partialParams: ToOptional<{
      [K in keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest & keyof RejectResourceShareInvitationRequest]: (RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest & RejectResourceShareInvitationRequest)[K]
    }>): Request<RejectResourceShareInvitationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rejectResourceShareInvitation(
          this.ops["RejectResourceShareInvitation"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateResourceShare(partialParams: ToOptional<{
      [K in keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest & keyof UpdateResourceShareRequest]: (UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest & UpdateResourceShareRequest)[K]
    }>): Request<UpdateResourceShareResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResourceShare(
          this.ops["UpdateResourceShare"].applicator.apply(partialParams)
        );
    }
}