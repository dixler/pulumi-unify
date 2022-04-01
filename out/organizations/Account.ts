
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptHandshakeRequest,
    CancelHandshakeRequest,
    CreateAccountRequest,
    CreateGovCloudAccountRequest,
    CreateOrganizationRequest,
    CreateOrganizationalUnitRequest,
    CreatePolicyRequest,
    DeclineHandshakeRequest,
    DescribeAccountRequest,
    DescribeCreateAccountStatusRequest,
    DescribeEffectivePolicyRequest,
    DescribeHandshakeRequest,
    DescribeOrganizationalUnitRequest,
    DescribePolicyRequest,
    DisablePolicyTypeRequest,
    EnableAllFeaturesRequest,
    EnablePolicyTypeRequest,
    InviteAccountToOrganizationRequest,
    ListAWSServiceAccessForOrganizationRequest,
    ListAccountsRequest,
    ListAccountsForParentRequest,
    ListChildrenRequest,
    ListCreateAccountStatusRequest,
    ListDelegatedAdministratorsRequest,
    ListDelegatedServicesForAccountRequest,
    ListHandshakesForAccountRequest,
    ListHandshakesForOrganizationRequest,
    ListOrganizationalUnitsForParentRequest,
    ListParentsRequest,
    ListPoliciesRequest,
    ListPoliciesForTargetRequest,
    ListRootsRequest,
    ListTagsForResourceRequest,
    ListTargetsForPolicyRequest,
    UpdateOrganizationalUnitRequest,
    UpdatePolicyRequest,
    AcceptHandshakeResponse,
    CancelHandshakeResponse,
    CreateAccountResponse,
    CreateGovCloudAccountResponse,
    CreateOrganizationResponse,
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
    EnableAllFeaturesResponse,
    EnablePolicyTypeResponse,
    InviteAccountToOrganizationResponse,
    ListAWSServiceAccessForOrganizationResponse,
    ListAccountsResponse,
    ListAccountsForParentResponse,
    ListChildrenResponse,
    ListCreateAccountStatusResponse,
    ListDelegatedAdministratorsResponse,
    ListDelegatedServicesForAccountResponse,
    ListHandshakesForAccountResponse,
    ListHandshakesForOrganizationResponse,
    ListOrganizationalUnitsForParentResponse,
    ListParentsResponse,
    ListPoliciesResponse,
    ListPoliciesForTargetResponse,
    ListRootsResponse,
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

export default class extends aws.organizations.Account {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.organizations.Account>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Organizations()
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

    invokeAcceptHandshake(partialParams: ToOptional<{
      [K in keyof AcceptHandshakeRequest]: (AcceptHandshakeRequest)[K]
    }>): Request<AcceptHandshakeResponse, AWSError> {
        this.boot();
        return this.client.acceptHandshake(
          this.ops["AcceptHandshake"].apply(partialParams)
        );
    }

    invokeCancelHandshake(partialParams: ToOptional<{
      [K in keyof CancelHandshakeRequest]: (CancelHandshakeRequest)[K]
    }>): Request<CancelHandshakeResponse, AWSError> {
        this.boot();
        return this.client.cancelHandshake(
          this.ops["CancelHandshake"].apply(partialParams)
        );
    }

    invokeCreateAccount(partialParams: ToOptional<{
      [K in keyof CreateAccountRequest & keyof Omit<CreateAccountRequest, "Email" | "AccountName">]: (CreateAccountRequest)[K]
    }>): Request<CreateAccountResponse, AWSError> {
        this.boot();
        return this.client.createAccount(
          this.ops["CreateAccount"].apply(partialParams)
        );
    }

    invokeCreateGovCloudAccount(partialParams: ToOptional<{
      [K in keyof CreateGovCloudAccountRequest & keyof Omit<CreateGovCloudAccountRequest, "Email" | "AccountName">]: (CreateGovCloudAccountRequest)[K]
    }>): Request<CreateGovCloudAccountResponse, AWSError> {
        this.boot();
        return this.client.createGovCloudAccount(
          this.ops["CreateGovCloudAccount"].apply(partialParams)
        );
    }

    invokeCreateOrganization(partialParams: ToOptional<{
      [K in keyof CreateOrganizationRequest]: (CreateOrganizationRequest)[K]
    }>): Request<CreateOrganizationResponse, AWSError> {
        this.boot();
        return this.client.createOrganization(
          this.ops["CreateOrganization"].apply(partialParams)
        );
    }

    invokeCreateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof CreateOrganizationalUnitRequest & keyof Omit<CreateOrganizationalUnitRequest, "ParentId" | "Name">]: (CreateOrganizationalUnitRequest)[K]
    }>): Request<CreateOrganizationalUnitResponse, AWSError> {
        this.boot();
        return this.client.createOrganizationalUnit(
          this.ops["CreateOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeCreatePolicy(partialParams: ToOptional<{
      [K in keyof CreatePolicyRequest & keyof Omit<CreatePolicyRequest, "Name">]: (CreatePolicyRequest)[K]
    }>): Request<CreatePolicyResponse, AWSError> {
        this.boot();
        return this.client.createPolicy(
          this.ops["CreatePolicy"].apply(partialParams)
        );
    }

    invokeDeclineHandshake(partialParams: ToOptional<{
      [K in keyof DeclineHandshakeRequest]: (DeclineHandshakeRequest)[K]
    }>): Request<DeclineHandshakeResponse, AWSError> {
        this.boot();
        return this.client.declineHandshake(
          this.ops["DeclineHandshake"].apply(partialParams)
        );
    }

    invokeDescribeAccount(partialParams: ToOptional<{
      [K in keyof DescribeAccountRequest]: (DescribeAccountRequest)[K]
    }>): Request<DescribeAccountResponse, AWSError> {
        this.boot();
        return this.client.describeAccount(
          this.ops["DescribeAccount"].apply(partialParams)
        );
    }

    invokeDescribeCreateAccountStatus(partialParams: ToOptional<{
      [K in keyof DescribeCreateAccountStatusRequest]: (DescribeCreateAccountStatusRequest)[K]
    }>): Request<DescribeCreateAccountStatusResponse, AWSError> {
        this.boot();
        return this.client.describeCreateAccountStatus(
          this.ops["DescribeCreateAccountStatus"].apply(partialParams)
        );
    }

    invokeDescribeEffectivePolicy(partialParams: ToOptional<{
      [K in keyof DescribeEffectivePolicyRequest]: (DescribeEffectivePolicyRequest)[K]
    }>): Request<DescribeEffectivePolicyResponse, AWSError> {
        this.boot();
        return this.client.describeEffectivePolicy(
          this.ops["DescribeEffectivePolicy"].apply(partialParams)
        );
    }

    invokeDescribeHandshake(partialParams: ToOptional<{
      [K in keyof DescribeHandshakeRequest]: (DescribeHandshakeRequest)[K]
    }>): Request<DescribeHandshakeResponse, AWSError> {
        this.boot();
        return this.client.describeHandshake(
          this.ops["DescribeHandshake"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationalUnitRequest]: (DescribeOrganizationalUnitRequest)[K]
    }>): Request<DescribeOrganizationalUnitResponse, AWSError> {
        this.boot();
        return this.client.describeOrganizationalUnit(
          this.ops["DescribeOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeDescribePolicy(partialParams: ToOptional<{
      [K in keyof DescribePolicyRequest]: (DescribePolicyRequest)[K]
    }>): Request<DescribePolicyResponse, AWSError> {
        this.boot();
        return this.client.describePolicy(
          this.ops["DescribePolicy"].apply(partialParams)
        );
    }

    invokeDisablePolicyType(partialParams: ToOptional<{
      [K in keyof DisablePolicyTypeRequest]: (DisablePolicyTypeRequest)[K]
    }>): Request<DisablePolicyTypeResponse, AWSError> {
        this.boot();
        return this.client.disablePolicyType(
          this.ops["DisablePolicyType"].apply(partialParams)
        );
    }

    invokeEnableAllFeatures(partialParams: ToOptional<{
      [K in keyof EnableAllFeaturesRequest]: (EnableAllFeaturesRequest)[K]
    }>): Request<EnableAllFeaturesResponse, AWSError> {
        this.boot();
        return this.client.enableAllFeatures(
          this.ops["EnableAllFeatures"].apply(partialParams)
        );
    }

    invokeEnablePolicyType(partialParams: ToOptional<{
      [K in keyof EnablePolicyTypeRequest]: (EnablePolicyTypeRequest)[K]
    }>): Request<EnablePolicyTypeResponse, AWSError> {
        this.boot();
        return this.client.enablePolicyType(
          this.ops["EnablePolicyType"].apply(partialParams)
        );
    }

    invokeInviteAccountToOrganization(partialParams: ToOptional<{
      [K in keyof InviteAccountToOrganizationRequest]: (InviteAccountToOrganizationRequest)[K]
    }>): Request<InviteAccountToOrganizationResponse, AWSError> {
        this.boot();
        return this.client.inviteAccountToOrganization(
          this.ops["InviteAccountToOrganization"].apply(partialParams)
        );
    }

    invokeListAWSServiceAccessForOrganization(partialParams: ToOptional<{
      [K in keyof ListAWSServiceAccessForOrganizationRequest]: (ListAWSServiceAccessForOrganizationRequest)[K]
    }>): Request<ListAWSServiceAccessForOrganizationResponse, AWSError> {
        this.boot();
        return this.client.listAWSServiceAccessForOrganization(
          this.ops["ListAWSServiceAccessForOrganization"].apply(partialParams)
        );
    }

    invokeListAccounts(partialParams: ToOptional<{
      [K in keyof ListAccountsRequest]: (ListAccountsRequest)[K]
    }>): Request<ListAccountsResponse, AWSError> {
        this.boot();
        return this.client.listAccounts(
          this.ops["ListAccounts"].apply(partialParams)
        );
    }

    invokeListAccountsForParent(partialParams: ToOptional<{
      [K in keyof ListAccountsForParentRequest & keyof Omit<ListAccountsForParentRequest, "ParentId">]: (ListAccountsForParentRequest)[K]
    }>): Request<ListAccountsForParentResponse, AWSError> {
        this.boot();
        return this.client.listAccountsForParent(
          this.ops["ListAccountsForParent"].apply(partialParams)
        );
    }

    invokeListChildren(partialParams: ToOptional<{
      [K in keyof ListChildrenRequest & keyof Omit<ListChildrenRequest, "ParentId">]: (ListChildrenRequest)[K]
    }>): Request<ListChildrenResponse, AWSError> {
        this.boot();
        return this.client.listChildren(
          this.ops["ListChildren"].apply(partialParams)
        );
    }

    invokeListCreateAccountStatus(partialParams: ToOptional<{
      [K in keyof ListCreateAccountStatusRequest]: (ListCreateAccountStatusRequest)[K]
    }>): Request<ListCreateAccountStatusResponse, AWSError> {
        this.boot();
        return this.client.listCreateAccountStatus(
          this.ops["ListCreateAccountStatus"].apply(partialParams)
        );
    }

    invokeListDelegatedAdministrators(partialParams: ToOptional<{
      [K in keyof ListDelegatedAdministratorsRequest]: (ListDelegatedAdministratorsRequest)[K]
    }>): Request<ListDelegatedAdministratorsResponse, AWSError> {
        this.boot();
        return this.client.listDelegatedAdministrators(
          this.ops["ListDelegatedAdministrators"].apply(partialParams)
        );
    }

    invokeListDelegatedServicesForAccount(partialParams: ToOptional<{
      [K in keyof ListDelegatedServicesForAccountRequest]: (ListDelegatedServicesForAccountRequest)[K]
    }>): Request<ListDelegatedServicesForAccountResponse, AWSError> {
        this.boot();
        return this.client.listDelegatedServicesForAccount(
          this.ops["ListDelegatedServicesForAccount"].apply(partialParams)
        );
    }

    invokeListHandshakesForAccount(partialParams: ToOptional<{
      [K in keyof ListHandshakesForAccountRequest]: (ListHandshakesForAccountRequest)[K]
    }>): Request<ListHandshakesForAccountResponse, AWSError> {
        this.boot();
        return this.client.listHandshakesForAccount(
          this.ops["ListHandshakesForAccount"].apply(partialParams)
        );
    }

    invokeListHandshakesForOrganization(partialParams: ToOptional<{
      [K in keyof ListHandshakesForOrganizationRequest]: (ListHandshakesForOrganizationRequest)[K]
    }>): Request<ListHandshakesForOrganizationResponse, AWSError> {
        this.boot();
        return this.client.listHandshakesForOrganization(
          this.ops["ListHandshakesForOrganization"].apply(partialParams)
        );
    }

    invokeListOrganizationalUnitsForParent(partialParams: ToOptional<{
      [K in keyof ListOrganizationalUnitsForParentRequest & keyof Omit<ListOrganizationalUnitsForParentRequest, "ParentId">]: (ListOrganizationalUnitsForParentRequest)[K]
    }>): Request<ListOrganizationalUnitsForParentResponse, AWSError> {
        this.boot();
        return this.client.listOrganizationalUnitsForParent(
          this.ops["ListOrganizationalUnitsForParent"].apply(partialParams)
        );
    }

    invokeListParents(partialParams: ToOptional<{
      [K in keyof ListParentsRequest]: (ListParentsRequest)[K]
    }>): Request<ListParentsResponse, AWSError> {
        this.boot();
        return this.client.listParents(
          this.ops["ListParents"].apply(partialParams)
        );
    }

    invokeListPolicies(partialParams: ToOptional<{
      [K in keyof ListPoliciesRequest]: (ListPoliciesRequest)[K]
    }>): Request<ListPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listPolicies(
          this.ops["ListPolicies"].apply(partialParams)
        );
    }

    invokeListPoliciesForTarget(partialParams: ToOptional<{
      [K in keyof ListPoliciesForTargetRequest]: (ListPoliciesForTargetRequest)[K]
    }>): Request<ListPoliciesForTargetResponse, AWSError> {
        this.boot();
        return this.client.listPoliciesForTarget(
          this.ops["ListPoliciesForTarget"].apply(partialParams)
        );
    }

    invokeListRoots(partialParams: ToOptional<{
      [K in keyof ListRootsRequest]: (ListRootsRequest)[K]
    }>): Request<ListRootsResponse, AWSError> {
        this.boot();
        return this.client.listRoots(
          this.ops["ListRoots"].apply(partialParams)
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

    invokeListTargetsForPolicy(partialParams: ToOptional<{
      [K in keyof ListTargetsForPolicyRequest]: (ListTargetsForPolicyRequest)[K]
    }>): Request<ListTargetsForPolicyResponse, AWSError> {
        this.boot();
        return this.client.listTargetsForPolicy(
          this.ops["ListTargetsForPolicy"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationalUnit(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationalUnitRequest]: (UpdateOrganizationalUnitRequest)[K]
    }>): Request<UpdateOrganizationalUnitResponse, AWSError> {
        this.boot();
        return this.client.updateOrganizationalUnit(
          this.ops["UpdateOrganizationalUnit"].apply(partialParams)
        );
    }

    invokeUpdatePolicy(partialParams: ToOptional<{
      [K in keyof UpdatePolicyRequest]: (UpdatePolicyRequest)[K]
    }>): Request<UpdatePolicyResponse, AWSError> {
        this.boot();
        return this.client.updatePolicy(
          this.ops["UpdatePolicy"].apply(partialParams)
        );
    }
}