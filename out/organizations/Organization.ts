
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AcceptHandshakeRequest,
    AttachPolicyRequest,
    CancelHandshakeRequest,
    CreateAccountRequest,
    CreateGovCloudAccountRequest,
    CreateOrganizationalUnitRequest,
    CreatePolicyRequest,
    DeclineHandshakeRequest,
    DeleteOrganizationalUnitRequest,
    DeletePolicyRequest,
    DeregisterDelegatedAdministratorRequest,
    DescribeAccountRequest,
    DescribeCreateAccountStatusRequest,
    DescribeEffectivePolicyRequest,
    DescribeHandshakeRequest,
    DescribeOrganizationalUnitRequest,
    DescribePolicyRequest,
    DetachPolicyRequest,
    DisableAWSServiceAccessRequest,
    DisablePolicyTypeRequest,
    EnableAWSServiceAccessRequest,
    EnablePolicyTypeRequest,
    InviteAccountToOrganizationRequest,
    ListAccountsForParentRequest,
    ListChildrenRequest,
    ListDelegatedServicesForAccountRequest,
    ListOrganizationalUnitsForParentRequest,
    ListParentsRequest,
    ListPoliciesRequest,
    ListPoliciesForTargetRequest,
    ListTagsForResourceRequest,
    ListTargetsForPolicyRequest,
    MoveAccountRequest,
    RegisterDelegatedAdministratorRequest,
    RemoveAccountFromOrganizationRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateOrganizationalUnitRequest,
    UpdatePolicyRequest,
    AcceptHandshakeResponse,
    CancelHandshakeResponse,
    CreateAccountResponse,
    CreateGovCloudAccountResponse,
    CreateOrganizationalUnitResponse,
    CreatePolicyResponse,
    DeclineHandshakeResponse,
    DescribeAccountResponse,
    DescribeCreateAccountStatusResponse,
    DescribeEffectivePolicyResponse,
    DescribeHandshakeResponse,
    DescribeOrganizationalUnitResponse,
    DescribePolicyResponse,
    DisablePolicyTypeResponse,
    EnablePolicyTypeResponse,
    InviteAccountToOrganizationResponse,
    ListAccountsForParentResponse,
    ListChildrenResponse,
    ListDelegatedServicesForAccountResponse,
    ListOrganizationalUnitsForParentResponse,
    ListParentsResponse,
    ListPoliciesResponse,
    ListPoliciesForTargetResponse,
    ListTagsForResourceResponse,
    ListTargetsForPolicyResponse,
    UpdateOrganizationalUnitResponse,
    UpdatePolicyResponse
} from "aws-sdk/clients/organizations";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.organizations.Organization {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.organizations.Organization>) {
        super(...args)
        this.client = new awssdk.Organizations()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/organizations-2016-11-28.normal.json"), this.client)
    }

    invokeAcceptHandshake(partialParams: ToOptional<{
      [K in keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest]: (AcceptHandshakeRequest & AcceptHandshakeRequest & AcceptHandshakeRequest & AcceptHandshakeRequest & AcceptHandshakeRequest)[K]
    }>): AcceptHandshakeResponse {
        return this.client.acceptHandshake(
            this.ops["AcceptHandshake"].apply(partialParams)
        );
    }

    invokeAttachPolicy(partialParams: ToOptional<{
      [K in keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest]: (AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest)[K]
    }>): void {
        return this.client.attachPolicy(
            this.ops["AttachPolicy"].apply(partialParams)
        );
    }

    invokeCancelHandshake(partialParams: ToOptional<{
      [K in keyof CancelHandshakeRequest & keyof CancelHandshakeRequest & keyof CancelHandshakeRequest & keyof CancelHandshakeRequest & keyof CancelHandshakeRequest]: (CancelHandshakeRequest & CancelHandshakeRequest & CancelHandshakeRequest & CancelHandshakeRequest & CancelHandshakeRequest)[K]
    }>): CancelHandshakeResponse {
        return this.client.cancelHandshake(
            this.ops["CancelHandshake"].apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof CreateAccountRequest & keyof CreateAccountRequest & keyof CreateAccountRequest & keyof CreateAccountRequest]: (CreateAccountRequest & CreateAccountRequest & CreateAccountRequest & CreateAccountRequest & CreateAccountRequest)[K]
    }>): CreateAccountResponse {
        return this.client.createAccount(
            this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateGovCloudAccount(partialParams: ToOptional<{
      [K in keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest]: (CreateGovCloudAccountRequest & CreateGovCloudAccountRequest & CreateGovCloudAccountRequest & CreateGovCloudAccountRequest & CreateGovCloudAccountRequest)[K]
    }>): CreateGovCloudAccountResponse {
        return this.client.createGovCloudAccount(
            this.ops["CreateGovCloudAccount"].apply(partialParams)
        );
    }

    invokeCreateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest]: (CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest)[K]
    }>): CreateOrganizationalUnitResponse {
        return this.client.createOrganizationalUnit(
            this.ops["CreateOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest]: (CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest)[K]
    }>): CreatePolicyResponse {
        return this.client.createPolicy(
            this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeDeclineHandshake(partialParams: ToOptional<{
      [K in keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest]: (DeclineHandshakeRequest & DeclineHandshakeRequest & DeclineHandshakeRequest & DeclineHandshakeRequest & DeclineHandshakeRequest)[K]
    }>): DeclineHandshakeResponse {
        return this.client.declineHandshake(
            this.ops["DeclineHandshake"].apply(partialParams)
        );
    }

    invokeDeleteOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest]: (DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest)[K]
    }>): void {
        return this.client.deleteOrganizationalUnit(
            this.ops["DeleteOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): void {
        return this.client.deletePolicy(
            this.ops["DeletePolicy"].apply(partialParams)
        );
    }

    invokeDeregisterDelegatedAdministrator(partialParams: ToOptional<{
      [K in keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest]: (DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest)[K]
    }>): void {
        return this.client.deregisterDelegatedAdministrator(
            this.ops["DeregisterDelegatedAdministrator"].apply(partialParams)
        );
    }

    invokeDescribeAccount(partialParams: ToOptional<{
      [K in keyof DescribeAccountRequest & keyof DescribeAccountRequest & keyof DescribeAccountRequest & keyof DescribeAccountRequest & keyof DescribeAccountRequest]: (DescribeAccountRequest & DescribeAccountRequest & DescribeAccountRequest & DescribeAccountRequest & DescribeAccountRequest)[K]
    }>): DescribeAccountResponse {
        return this.client.describeAccount(
            this.ops["DescribeAccount"].apply(partialParams)
        );
    }

    invokeDescribeCreateAccountStatus(partialParams: ToOptional<{
      [K in keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest]: (DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest)[K]
    }>): DescribeCreateAccountStatusResponse {
        return this.client.describeCreateAccountStatus(
            this.ops["DescribeCreateAccountStatus"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePolicy(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest]: (DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest)[K]
    }>): DescribeEffectivePolicyResponse {
        return this.client.describeEffectivePolicy(
            this.ops["DescribeEffectivePolicy"].apply(partialParams)
        );
    }

    invokeDescribeHandshake(partialParams: ToOptional<{
      [K in keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest]: (DescribeHandshakeRequest & DescribeHandshakeRequest & DescribeHandshakeRequest & DescribeHandshakeRequest & DescribeHandshakeRequest)[K]
    }>): DescribeHandshakeResponse {
        return this.client.describeHandshake(
            this.ops["DescribeHandshake"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest]: (DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest)[K]
    }>): DescribeOrganizationalUnitResponse {
        return this.client.describeOrganizationalUnit(
            this.ops["DescribeOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeDescribePolicy(partialParams: ToOptional<{
      [K in keyof DescribePolicyRequest & keyof DescribePolicyRequest & keyof DescribePolicyRequest & keyof DescribePolicyRequest & keyof DescribePolicyRequest]: (DescribePolicyRequest & DescribePolicyRequest & DescribePolicyRequest & DescribePolicyRequest & DescribePolicyRequest)[K]
    }>): DescribePolicyResponse {
        return this.client.describePolicy(
            this.ops["DescribePolicy"].apply(partialParams)
        );
    }

    invokeDetachPolicy(partialParams: ToOptional<{
      [K in keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest]: (DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest)[K]
    }>): void {
        return this.client.detachPolicy(
            this.ops["DetachPolicy"].apply(partialParams)
        );
    }

    invokeDisableAWSServiceAccess(partialParams: ToOptional<{
      [K in keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest]: (DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest)[K]
    }>): void {
        return this.client.disableAWSServiceAccess(
            this.ops["DisableAWSServiceAccess"].apply(partialParams)
        );
    }

    invokeDisablePolicyType(partialParams: ToOptional<{
      [K in keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest]: (DisablePolicyTypeRequest & DisablePolicyTypeRequest & DisablePolicyTypeRequest & DisablePolicyTypeRequest & DisablePolicyTypeRequest)[K]
    }>): DisablePolicyTypeResponse {
        return this.client.disablePolicyType(
            this.ops["DisablePolicyType"].apply(partialParams)
        );
    }

    invokeEnableAWSServiceAccess(partialParams: ToOptional<{
      [K in keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest]: (EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest)[K]
    }>): void {
        return this.client.enableAWSServiceAccess(
            this.ops["EnableAWSServiceAccess"].apply(partialParams)
        );
    }

    invokeEnablePolicyType(partialParams: ToOptional<{
      [K in keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest]: (EnablePolicyTypeRequest & EnablePolicyTypeRequest & EnablePolicyTypeRequest & EnablePolicyTypeRequest & EnablePolicyTypeRequest)[K]
    }>): EnablePolicyTypeResponse {
        return this.client.enablePolicyType(
            this.ops["EnablePolicyType"].apply(partialParams)
        );
    }

    invokeInviteAccountToOrganization(partialParams: ToOptional<{
      [K in keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest]: (InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest)[K]
    }>): InviteAccountToOrganizationResponse {
        return this.client.inviteAccountToOrganization(
            this.ops["InviteAccountToOrganization"].apply(partialParams)
        );
    }

    invokeListAccountsForParent(partialParams: ToOptional<{
      [K in keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest]: (ListAccountsForParentRequest & ListAccountsForParentRequest & ListAccountsForParentRequest & ListAccountsForParentRequest & ListAccountsForParentRequest)[K]
    }>): ListAccountsForParentResponse {
        return this.client.listAccountsForParent(
            this.ops["ListAccountsForParent"].apply(partialParams)
        );
    }

    invokeListChildren(partialParams: ToOptional<{
      [K in keyof ListChildrenRequest & keyof ListChildrenRequest & keyof ListChildrenRequest & keyof ListChildrenRequest & keyof ListChildrenRequest]: (ListChildrenRequest & ListChildrenRequest & ListChildrenRequest & ListChildrenRequest & ListChildrenRequest)[K]
    }>): ListChildrenResponse {
        return this.client.listChildren(
            this.ops["ListChildren"].apply(partialParams)
        );
    }

    invokeListDelegatedServicesForAccount(partialParams: ToOptional<{
      [K in keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest]: (ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest)[K]
    }>): ListDelegatedServicesForAccountResponse {
        return this.client.listDelegatedServicesForAccount(
            this.ops["ListDelegatedServicesForAccount"].apply(partialParams)
        );
    }

    invokeListOrganizationalUnitsForParent(partialParams: ToOptional<{
      [K in keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest]: (ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest)[K]
    }>): ListOrganizationalUnitsForParentResponse {
        return this.client.listOrganizationalUnitsForParent(
            this.ops["ListOrganizationalUnitsForParent"].apply(partialParams)
        );
    }

    invokeListParents(partialParams: ToOptional<{
      [K in keyof ListParentsRequest & keyof ListParentsRequest & keyof ListParentsRequest & keyof ListParentsRequest & keyof ListParentsRequest]: (ListParentsRequest & ListParentsRequest & ListParentsRequest & ListParentsRequest & ListParentsRequest)[K]
    }>): ListParentsResponse {
        return this.client.listParents(
            this.ops["ListParents"].apply(partialParams)
        );
    }

    invokeListPolicies(partialParams: ToOptional<{
      [K in keyof ListPoliciesRequest & keyof ListPoliciesRequest & keyof ListPoliciesRequest & keyof ListPoliciesRequest & keyof ListPoliciesRequest]: (ListPoliciesRequest & ListPoliciesRequest & ListPoliciesRequest & ListPoliciesRequest & ListPoliciesRequest)[K]
    }>): ListPoliciesResponse {
        return this.client.listPolicies(
            this.ops["ListPolicies"].apply(partialParams)
        );
    }

    invokeListPoliciesForTarget(partialParams: ToOptional<{
      [K in keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest]: (ListPoliciesForTargetRequest & ListPoliciesForTargetRequest & ListPoliciesForTargetRequest & ListPoliciesForTargetRequest & ListPoliciesForTargetRequest)[K]
    }>): ListPoliciesForTargetResponse {
        return this.client.listPoliciesForTarget(
            this.ops["ListPoliciesForTarget"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest]: (ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest)[K]
    }>): ListTargetsForPolicyResponse {
        return this.client.listTargetsForPolicy(
            this.ops["ListTargetsForPolicy"].apply(partialParams)
        );
    }

    invokeMoveAccount(partialParams: ToOptional<{
      [K in keyof MoveAccountRequest & keyof MoveAccountRequest & keyof MoveAccountRequest & keyof MoveAccountRequest & keyof MoveAccountRequest]: (MoveAccountRequest & MoveAccountRequest & MoveAccountRequest & MoveAccountRequest & MoveAccountRequest)[K]
    }>): void {
        return this.client.moveAccount(
            this.ops["MoveAccount"].apply(partialParams)
        );
    }

    invokeRegisterDelegatedAdministrator(partialParams: ToOptional<{
      [K in keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest]: (RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest)[K]
    }>): void {
        return this.client.registerDelegatedAdministrator(
            this.ops["RegisterDelegatedAdministrator"].apply(partialParams)
        );
    }

    invokeRemoveAccountFromOrganization(partialParams: ToOptional<{
      [K in keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest]: (RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest)[K]
    }>): void {
        return this.client.removeAccountFromOrganization(
            this.ops["RemoveAccountFromOrganization"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest]: (UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest)[K]
    }>): UpdateOrganizationalUnitResponse {
        return this.client.updateOrganizationalUnit(
            this.ops["UpdateOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeUpdatePolicy(partialParams: ToOptional<{
      [K in keyof UpdatePolicyRequest & keyof UpdatePolicyRequest & keyof UpdatePolicyRequest & keyof UpdatePolicyRequest & keyof UpdatePolicyRequest]: (UpdatePolicyRequest & UpdatePolicyRequest & UpdatePolicyRequest & UpdatePolicyRequest & UpdatePolicyRequest)[K]
    }>): UpdatePolicyResponse {
        return this.client.updatePolicy(
            this.ops["UpdatePolicy"].apply(partialParams)
        );
    }
}