
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateRoleRequest,
    CreateSAMLProviderRequest,
    DeleteServiceLinkedRoleRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetRoleRequest,
    GetRolePolicyRequest,
    ListAttachedRolePoliciesRequest,
    ListInstanceProfilesForRoleRequest,
    ListPoliciesGrantingServiceAccessRequest,
    ListRolePoliciesRequest,
    ListRoleTagsRequest,
    UpdateRoleRequest,
    UpdateRoleDescriptionRequest,
    CreateRoleResponse,
    CreateSAMLProviderResponse,
    DeleteServiceLinkedRoleResponse,
    GenerateServiceLastAccessedDetailsResponse,
    GetRoleResponse,
    GetRolePolicyResponse,
    ListAttachedRolePoliciesResponse,
    ListInstanceProfilesForRoleResponse,
    ListPoliciesGrantingServiceAccessResponse,
    ListRolePoliciesResponse,
    ListRoleTagsResponse,
    UpdateRoleResponse,
    UpdateRoleDescriptionResponse
} from "aws-sdk/clients/iam";
const schema = require("../apis/iam-2010-05-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.Role {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iam.Role>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.IAM()
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

    invokeCreateRole(partialParams: ToOptional<{
      [K in keyof CreateRoleRequest & keyof Omit<CreateRoleRequest, "RoleName">]: (CreateRoleRequest)[K]
    }>): Request<CreateRoleResponse, AWSError> {
        this.boot();
        return this.client.createRole(
          this.ops["CreateRole"].apply(partialParams)
        );
    }

    invokeCreateSAMLProvider(partialParams: ToOptional<{
      [K in keyof CreateSAMLProviderRequest & keyof Omit<CreateSAMLProviderRequest, "Name">]: (CreateSAMLProviderRequest)[K]
    }>): Request<CreateSAMLProviderResponse, AWSError> {
        this.boot();
        return this.client.createSAMLProvider(
          this.ops["CreateSAMLProvider"].apply(partialParams)
        );
    }

    invokeDeleteServiceLinkedRole(partialParams: ToOptional<{
      [K in keyof DeleteServiceLinkedRoleRequest & keyof Omit<DeleteServiceLinkedRoleRequest, "RoleName">]: (DeleteServiceLinkedRoleRequest)[K]
    }>): Request<DeleteServiceLinkedRoleResponse, AWSError> {
        this.boot();
        return this.client.deleteServiceLinkedRole(
          this.ops["DeleteServiceLinkedRole"].apply(partialParams)
        );
    }

    invokeGenerateServiceLastAccessedDetails(partialParams: ToOptional<{
      [K in keyof GenerateServiceLastAccessedDetailsRequest & keyof Omit<GenerateServiceLastAccessedDetailsRequest, "Arn">]: (GenerateServiceLastAccessedDetailsRequest)[K]
    }>): Request<GenerateServiceLastAccessedDetailsResponse, AWSError> {
        this.boot();
        return this.client.generateServiceLastAccessedDetails(
          this.ops["GenerateServiceLastAccessedDetails"].apply(partialParams)
        );
    }

    invokeGetRole(partialParams: ToOptional<{
      [K in keyof GetRoleRequest & keyof Omit<GetRoleRequest, "RoleName">]: (GetRoleRequest)[K]
    }>): Request<GetRoleResponse, AWSError> {
        this.boot();
        return this.client.getRole(
          this.ops["GetRole"].apply(partialParams)
        );
    }

    invokeGetRolePolicy(partialParams: ToOptional<{
      [K in keyof GetRolePolicyRequest & keyof Omit<GetRolePolicyRequest, "RoleName">]: (GetRolePolicyRequest)[K]
    }>): Request<GetRolePolicyResponse, AWSError> {
        this.boot();
        return this.client.getRolePolicy(
          this.ops["GetRolePolicy"].apply(partialParams)
        );
    }

    invokeListAttachedRolePolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedRolePoliciesRequest & keyof Omit<ListAttachedRolePoliciesRequest, "RoleName">]: (ListAttachedRolePoliciesRequest)[K]
    }>): Request<ListAttachedRolePoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedRolePolicies(
          this.ops["ListAttachedRolePolicies"].apply(partialParams)
        );
    }

    invokeListInstanceProfilesForRole(partialParams: ToOptional<{
      [K in keyof ListInstanceProfilesForRoleRequest & keyof Omit<ListInstanceProfilesForRoleRequest, "RoleName">]: (ListInstanceProfilesForRoleRequest)[K]
    }>): Request<ListInstanceProfilesForRoleResponse, AWSError> {
        this.boot();
        return this.client.listInstanceProfilesForRole(
          this.ops["ListInstanceProfilesForRole"].apply(partialParams)
        );
    }

    invokeListPoliciesGrantingServiceAccess(partialParams: ToOptional<{
      [K in keyof ListPoliciesGrantingServiceAccessRequest & keyof Omit<ListPoliciesGrantingServiceAccessRequest, "Arn">]: (ListPoliciesGrantingServiceAccessRequest)[K]
    }>): Request<ListPoliciesGrantingServiceAccessResponse, AWSError> {
        this.boot();
        return this.client.listPoliciesGrantingServiceAccess(
          this.ops["ListPoliciesGrantingServiceAccess"].apply(partialParams)
        );
    }

    invokeListRolePolicies(partialParams: ToOptional<{
      [K in keyof ListRolePoliciesRequest & keyof Omit<ListRolePoliciesRequest, "RoleName">]: (ListRolePoliciesRequest)[K]
    }>): Request<ListRolePoliciesResponse, AWSError> {
        this.boot();
        return this.client.listRolePolicies(
          this.ops["ListRolePolicies"].apply(partialParams)
        );
    }

    invokeListRoleTags(partialParams: ToOptional<{
      [K in keyof ListRoleTagsRequest & keyof Omit<ListRoleTagsRequest, "RoleName">]: (ListRoleTagsRequest)[K]
    }>): Request<ListRoleTagsResponse, AWSError> {
        this.boot();
        return this.client.listRoleTags(
          this.ops["ListRoleTags"].apply(partialParams)
        );
    }

    invokeUpdateRole(partialParams: ToOptional<{
      [K in keyof UpdateRoleRequest & keyof Omit<UpdateRoleRequest, "RoleName">]: (UpdateRoleRequest)[K]
    }>): Request<UpdateRoleResponse, AWSError> {
        this.boot();
        return this.client.updateRole(
          this.ops["UpdateRole"].apply(partialParams)
        );
    }

    invokeUpdateRoleDescription(partialParams: ToOptional<{
      [K in keyof UpdateRoleDescriptionRequest & keyof Omit<UpdateRoleDescriptionRequest, "RoleName" | "Description">]: (UpdateRoleDescriptionRequest)[K]
    }>): Request<UpdateRoleDescriptionResponse, AWSError> {
        this.boot();
        return this.client.updateRoleDescription(
          this.ops["UpdateRoleDescription"].apply(partialParams)
        );
    }
}