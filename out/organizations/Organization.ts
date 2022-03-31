
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/organizations-2016-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.organizations.Organization {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.organizations.Organization>) {
        super(...args)
        this.client = new awssdk.Organizations()
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

    invokeAcceptHandshake(partialParams: ToOptional<{
      [K in keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest & keyof AcceptHandshakeRequest]: (AcceptHandshakeRequest & AcceptHandshakeRequest & AcceptHandshakeRequest & AcceptHandshakeRequest & AcceptHandshakeRequest)[K]
    }>): Request<AcceptHandshakeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptHandshake(
          this.ops["AcceptHandshake"].applicator.apply(partialParams)
        );
    }

    invokeAttachPolicy(partialParams: ToOptional<{
      [K in keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest & keyof AttachPolicyRequest]: (AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest & AttachPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.attachPolicy(
          this.ops["AttachPolicy"].applicator.apply(partialParams)
        );
    }

    invokeCancelHandshake(partialParams: ToOptional<{
      [K in keyof CancelHandshakeRequest & keyof CancelHandshakeRequest & keyof CancelHandshakeRequest & keyof CancelHandshakeRequest & keyof CancelHandshakeRequest]: (CancelHandshakeRequest & CancelHandshakeRequest & CancelHandshakeRequest & CancelHandshakeRequest & CancelHandshakeRequest)[K]
    }>): Request<CancelHandshakeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelHandshake(
          this.ops["CancelHandshake"].applicator.apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof CreateAccountRequest & keyof CreateAccountRequest & keyof CreateAccountRequest & keyof CreateAccountRequest]: (CreateAccountRequest & CreateAccountRequest & CreateAccountRequest & CreateAccountRequest & CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].applicator.apply(partialParams)
        );
    }

    invokeCreateGovCloudAccount(partialParams: ToOptional<{
      [K in keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest & keyof CreateGovCloudAccountRequest]: (CreateGovCloudAccountRequest & CreateGovCloudAccountRequest & CreateGovCloudAccountRequest & CreateGovCloudAccountRequest & CreateGovCloudAccountRequest)[K]
    }>): Request<CreateGovCloudAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGovCloudAccount(
          this.ops["CreateGovCloudAccount"].applicator.apply(partialParams)
        );
    }

    invokeCreateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest & keyof CreateOrganizationalUnitRequest]: (CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest & CreateOrganizationalUnitRequest)[K]
    }>): Request<CreateOrganizationalUnitResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOrganizationalUnit(
          this.ops["CreateOrganizationalUnit"].applicator.apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest & keyof CreatePolicyRequest]: (CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest & CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeclineHandshake(partialParams: ToOptional<{
      [K in keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest & keyof DeclineHandshakeRequest]: (DeclineHandshakeRequest & DeclineHandshakeRequest & DeclineHandshakeRequest & DeclineHandshakeRequest & DeclineHandshakeRequest)[K]
    }>): Request<DeclineHandshakeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.declineHandshake(
          this.ops["DeclineHandshake"].applicator.apply(partialParams)
        );
    }

    invokeDeleteOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest & keyof DeleteOrganizationalUnitRequest]: (DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest & DeleteOrganizationalUnitRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOrganizationalUnit(
          this.ops["DeleteOrganizationalUnit"].applicator.apply(partialParams)
        );
    }

    invokeDeletePolicy(partialParams: ToOptional<{
      [K in keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest & keyof DeletePolicyRequest]: (DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest & DeletePolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePolicy(
          this.ops["DeletePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterDelegatedAdministrator(partialParams: ToOptional<{
      [K in keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest & keyof DeregisterDelegatedAdministratorRequest]: (DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest & DeregisterDelegatedAdministratorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterDelegatedAdministrator(
          this.ops["DeregisterDelegatedAdministrator"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAccount(partialParams: ToOptional<{
      [K in keyof DescribeAccountRequest & keyof DescribeAccountRequest & keyof DescribeAccountRequest & keyof DescribeAccountRequest & keyof DescribeAccountRequest]: (DescribeAccountRequest & DescribeAccountRequest & DescribeAccountRequest & DescribeAccountRequest & DescribeAccountRequest)[K]
    }>): Request<DescribeAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccount(
          this.ops["DescribeAccount"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCreateAccountStatus(partialParams: ToOptional<{
      [K in keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest & keyof DescribeCreateAccountStatusRequest]: (DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest & DescribeCreateAccountStatusRequest)[K]
    }>): Request<DescribeCreateAccountStatusResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCreateAccountStatus(
          this.ops["DescribeCreateAccountStatus"].applicator.apply(partialParams)
        );
    }

    invokeDescribeEffectivePolicy(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest & keyof DescribeEffectivePolicyRequest]: (DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest & DescribeEffectivePolicyRequest)[K]
    }>): Request<DescribeEffectivePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEffectivePolicy(
          this.ops["DescribeEffectivePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDescribeHandshake(partialParams: ToOptional<{
      [K in keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest & keyof DescribeHandshakeRequest]: (DescribeHandshakeRequest & DescribeHandshakeRequest & DescribeHandshakeRequest & DescribeHandshakeRequest & DescribeHandshakeRequest)[K]
    }>): Request<DescribeHandshakeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHandshake(
          this.ops["DescribeHandshake"].applicator.apply(partialParams)
        );
    }

    invokeDescribeOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest & keyof DescribeOrganizationalUnitRequest]: (DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest & DescribeOrganizationalUnitRequest)[K]
    }>): Request<DescribeOrganizationalUnitResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeOrganizationalUnit(
          this.ops["DescribeOrganizationalUnit"].applicator.apply(partialParams)
        );
    }

    invokeDescribePolicy(partialParams: ToOptional<{
      [K in keyof DescribePolicyRequest & keyof DescribePolicyRequest & keyof DescribePolicyRequest & keyof DescribePolicyRequest & keyof DescribePolicyRequest]: (DescribePolicyRequest & DescribePolicyRequest & DescribePolicyRequest & DescribePolicyRequest & DescribePolicyRequest)[K]
    }>): Request<DescribePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePolicy(
          this.ops["DescribePolicy"].applicator.apply(partialParams)
        );
    }

    invokeDetachPolicy(partialParams: ToOptional<{
      [K in keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest & keyof DetachPolicyRequest]: (DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest & DetachPolicyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detachPolicy(
          this.ops["DetachPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDisableAWSServiceAccess(partialParams: ToOptional<{
      [K in keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest & keyof DisableAWSServiceAccessRequest]: (DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest & DisableAWSServiceAccessRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableAWSServiceAccess(
          this.ops["DisableAWSServiceAccess"].applicator.apply(partialParams)
        );
    }

    invokeDisablePolicyType(partialParams: ToOptional<{
      [K in keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest & keyof DisablePolicyTypeRequest]: (DisablePolicyTypeRequest & DisablePolicyTypeRequest & DisablePolicyTypeRequest & DisablePolicyTypeRequest & DisablePolicyTypeRequest)[K]
    }>): Request<DisablePolicyTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disablePolicyType(
          this.ops["DisablePolicyType"].applicator.apply(partialParams)
        );
    }

    invokeEnableAWSServiceAccess(partialParams: ToOptional<{
      [K in keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest & keyof EnableAWSServiceAccessRequest]: (EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest & EnableAWSServiceAccessRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableAWSServiceAccess(
          this.ops["EnableAWSServiceAccess"].applicator.apply(partialParams)
        );
    }

    invokeEnablePolicyType(partialParams: ToOptional<{
      [K in keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest & keyof EnablePolicyTypeRequest]: (EnablePolicyTypeRequest & EnablePolicyTypeRequest & EnablePolicyTypeRequest & EnablePolicyTypeRequest & EnablePolicyTypeRequest)[K]
    }>): Request<EnablePolicyTypeResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enablePolicyType(
          this.ops["EnablePolicyType"].applicator.apply(partialParams)
        );
    }

    invokeInviteAccountToOrganization(partialParams: ToOptional<{
      [K in keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest & keyof InviteAccountToOrganizationRequest]: (InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest & InviteAccountToOrganizationRequest)[K]
    }>): Request<InviteAccountToOrganizationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.inviteAccountToOrganization(
          this.ops["InviteAccountToOrganization"].applicator.apply(partialParams)
        );
    }

    invokeListAccountsForParent(partialParams: ToOptional<{
      [K in keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest & keyof ListAccountsForParentRequest]: (ListAccountsForParentRequest & ListAccountsForParentRequest & ListAccountsForParentRequest & ListAccountsForParentRequest & ListAccountsForParentRequest)[K]
    }>): Request<ListAccountsForParentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAccountsForParent(
          this.ops["ListAccountsForParent"].applicator.apply(partialParams)
        );
    }

    invokeListChildren(partialParams: ToOptional<{
      [K in keyof ListChildrenRequest & keyof ListChildrenRequest & keyof ListChildrenRequest & keyof ListChildrenRequest & keyof ListChildrenRequest]: (ListChildrenRequest & ListChildrenRequest & ListChildrenRequest & ListChildrenRequest & ListChildrenRequest)[K]
    }>): Request<ListChildrenResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChildren(
          this.ops["ListChildren"].applicator.apply(partialParams)
        );
    }

    invokeListDelegatedServicesForAccount(partialParams: ToOptional<{
      [K in keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest & keyof ListDelegatedServicesForAccountRequest]: (ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest & ListDelegatedServicesForAccountRequest)[K]
    }>): Request<ListDelegatedServicesForAccountResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDelegatedServicesForAccount(
          this.ops["ListDelegatedServicesForAccount"].applicator.apply(partialParams)
        );
    }

    invokeListOrganizationalUnitsForParent(partialParams: ToOptional<{
      [K in keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest & keyof ListOrganizationalUnitsForParentRequest]: (ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest & ListOrganizationalUnitsForParentRequest)[K]
    }>): Request<ListOrganizationalUnitsForParentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOrganizationalUnitsForParent(
          this.ops["ListOrganizationalUnitsForParent"].applicator.apply(partialParams)
        );
    }

    invokeListParents(partialParams: ToOptional<{
      [K in keyof ListParentsRequest & keyof ListParentsRequest & keyof ListParentsRequest & keyof ListParentsRequest & keyof ListParentsRequest]: (ListParentsRequest & ListParentsRequest & ListParentsRequest & ListParentsRequest & ListParentsRequest)[K]
    }>): Request<ListParentsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listParents(
          this.ops["ListParents"].applicator.apply(partialParams)
        );
    }

    invokeListPolicies(partialParams: ToOptional<{
      [K in keyof ListPoliciesRequest & keyof ListPoliciesRequest & keyof ListPoliciesRequest & keyof ListPoliciesRequest & keyof ListPoliciesRequest]: (ListPoliciesRequest & ListPoliciesRequest & ListPoliciesRequest & ListPoliciesRequest & ListPoliciesRequest)[K]
    }>): Request<ListPoliciesResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPolicies(
          this.ops["ListPolicies"].applicator.apply(partialParams)
        );
    }

    invokeListPoliciesForTarget(partialParams: ToOptional<{
      [K in keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest & keyof ListPoliciesForTargetRequest]: (ListPoliciesForTargetRequest & ListPoliciesForTargetRequest & ListPoliciesForTargetRequest & ListPoliciesForTargetRequest & ListPoliciesForTargetRequest)[K]
    }>): Request<ListPoliciesForTargetResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPoliciesForTarget(
          this.ops["ListPoliciesForTarget"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest & keyof ListTargetsForPolicyRequest]: (ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest & ListTargetsForPolicyRequest)[K]
    }>): Request<ListTargetsForPolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTargetsForPolicy(
          this.ops["ListTargetsForPolicy"].applicator.apply(partialParams)
        );
    }

    invokeMoveAccount(partialParams: ToOptional<{
      [K in keyof MoveAccountRequest & keyof MoveAccountRequest & keyof MoveAccountRequest & keyof MoveAccountRequest & keyof MoveAccountRequest]: (MoveAccountRequest & MoveAccountRequest & MoveAccountRequest & MoveAccountRequest & MoveAccountRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.moveAccount(
          this.ops["MoveAccount"].applicator.apply(partialParams)
        );
    }

    invokeRegisterDelegatedAdministrator(partialParams: ToOptional<{
      [K in keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest & keyof RegisterDelegatedAdministratorRequest]: (RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest & RegisterDelegatedAdministratorRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDelegatedAdministrator(
          this.ops["RegisterDelegatedAdministrator"].applicator.apply(partialParams)
        );
    }

    invokeRemoveAccountFromOrganization(partialParams: ToOptional<{
      [K in keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest & keyof RemoveAccountFromOrganizationRequest]: (RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest & RemoveAccountFromOrganizationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeAccountFromOrganization(
          this.ops["RemoveAccountFromOrganization"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest & keyof UpdateOrganizationalUnitRequest]: (UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest & UpdateOrganizationalUnitRequest)[K]
    }>): Request<UpdateOrganizationalUnitResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOrganizationalUnit(
          this.ops["UpdateOrganizationalUnit"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePolicy(partialParams: ToOptional<{
      [K in keyof UpdatePolicyRequest & keyof UpdatePolicyRequest & keyof UpdatePolicyRequest & keyof UpdatePolicyRequest & keyof UpdatePolicyRequest]: (UpdatePolicyRequest & UpdatePolicyRequest & UpdatePolicyRequest & UpdatePolicyRequest & UpdatePolicyRequest)[K]
    }>): Request<UpdatePolicyResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePolicy(
          this.ops["UpdatePolicy"].applicator.apply(partialParams)
        );
    }
}