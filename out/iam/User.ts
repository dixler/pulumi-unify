
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateLoginProfileRequest,
    CreateSAMLProviderRequest,
    CreateServiceSpecificCredentialRequest,
    CreateUserRequest,
    GenerateServiceLastAccessedDetailsRequest,
    GetLoginProfileRequest,
    GetSSHPublicKeyRequest,
    GetUserPolicyRequest,
    ListAttachedUserPoliciesRequest,
    ListGroupsForUserRequest,
    ListPoliciesGrantingServiceAccessRequest,
    ListUserPoliciesRequest,
    ListUserTagsRequest,
    UploadSSHPublicKeyRequest,
    CreateLoginProfileResponse,
    CreateSAMLProviderResponse,
    CreateServiceSpecificCredentialResponse,
    CreateUserResponse,
    GenerateServiceLastAccessedDetailsResponse,
    GetLoginProfileResponse,
    GetSSHPublicKeyResponse,
    GetUserPolicyResponse,
    ListAttachedUserPoliciesResponse,
    ListGroupsForUserResponse,
    ListPoliciesGrantingServiceAccessResponse,
    ListUserPoliciesResponse,
    ListUserTagsResponse,
    UploadSSHPublicKeyResponse
} from "aws-sdk/clients/iam";
const schema = require("../apis/iam-2010-05-08.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.iam.User {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.iam.User>) {
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

    invokeCreateLoginProfile(partialParams: ToOptional<{
      [K in keyof CreateLoginProfileRequest & keyof Omit<CreateLoginProfileRequest, "UserName">]: (CreateLoginProfileRequest)[K]
    }>): Request<CreateLoginProfileResponse, AWSError> {
        this.boot();
        return this.client.createLoginProfile(
          this.ops["CreateLoginProfile"].apply(partialParams)
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

    invokeCreateServiceSpecificCredential(partialParams: ToOptional<{
      [K in keyof CreateServiceSpecificCredentialRequest & keyof Omit<CreateServiceSpecificCredentialRequest, "UserName">]: (CreateServiceSpecificCredentialRequest)[K]
    }>): Request<CreateServiceSpecificCredentialResponse, AWSError> {
        this.boot();
        return this.client.createServiceSpecificCredential(
          this.ops["CreateServiceSpecificCredential"].apply(partialParams)
        );
    }

    invokeCreateUser(partialParams: ToOptional<{
      [K in keyof CreateUserRequest & keyof Omit<CreateUserRequest, "UserName">]: (CreateUserRequest)[K]
    }>): Request<CreateUserResponse, AWSError> {
        this.boot();
        return this.client.createUser(
          this.ops["CreateUser"].apply(partialParams)
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

    invokeGetLoginProfile(partialParams: ToOptional<{
      [K in keyof GetLoginProfileRequest & keyof Omit<GetLoginProfileRequest, "UserName">]: (GetLoginProfileRequest)[K]
    }>): Request<GetLoginProfileResponse, AWSError> {
        this.boot();
        return this.client.getLoginProfile(
          this.ops["GetLoginProfile"].apply(partialParams)
        );
    }

    invokeGetSSHPublicKey(partialParams: ToOptional<{
      [K in keyof GetSSHPublicKeyRequest & keyof Omit<GetSSHPublicKeyRequest, "UserName">]: (GetSSHPublicKeyRequest)[K]
    }>): Request<GetSSHPublicKeyResponse, AWSError> {
        this.boot();
        return this.client.getSSHPublicKey(
          this.ops["GetSSHPublicKey"].apply(partialParams)
        );
    }

    invokeGetUserPolicy(partialParams: ToOptional<{
      [K in keyof GetUserPolicyRequest & keyof Omit<GetUserPolicyRequest, "UserName">]: (GetUserPolicyRequest)[K]
    }>): Request<GetUserPolicyResponse, AWSError> {
        this.boot();
        return this.client.getUserPolicy(
          this.ops["GetUserPolicy"].apply(partialParams)
        );
    }

    invokeListAttachedUserPolicies(partialParams: ToOptional<{
      [K in keyof ListAttachedUserPoliciesRequest & keyof Omit<ListAttachedUserPoliciesRequest, "UserName">]: (ListAttachedUserPoliciesRequest)[K]
    }>): Request<ListAttachedUserPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listAttachedUserPolicies(
          this.ops["ListAttachedUserPolicies"].apply(partialParams)
        );
    }

    invokeListGroupsForUser(partialParams: ToOptional<{
      [K in keyof ListGroupsForUserRequest & keyof Omit<ListGroupsForUserRequest, "UserName">]: (ListGroupsForUserRequest)[K]
    }>): Request<ListGroupsForUserResponse, AWSError> {
        this.boot();
        return this.client.listGroupsForUser(
          this.ops["ListGroupsForUser"].apply(partialParams)
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

    invokeListUserPolicies(partialParams: ToOptional<{
      [K in keyof ListUserPoliciesRequest & keyof Omit<ListUserPoliciesRequest, "UserName">]: (ListUserPoliciesRequest)[K]
    }>): Request<ListUserPoliciesResponse, AWSError> {
        this.boot();
        return this.client.listUserPolicies(
          this.ops["ListUserPolicies"].apply(partialParams)
        );
    }

    invokeListUserTags(partialParams: ToOptional<{
      [K in keyof ListUserTagsRequest & keyof Omit<ListUserTagsRequest, "UserName">]: (ListUserTagsRequest)[K]
    }>): Request<ListUserTagsResponse, AWSError> {
        this.boot();
        return this.client.listUserTags(
          this.ops["ListUserTags"].apply(partialParams)
        );
    }

    invokeUploadSSHPublicKey(partialParams: ToOptional<{
      [K in keyof UploadSSHPublicKeyRequest & keyof Omit<UploadSSHPublicKeyRequest, "UserName">]: (UploadSSHPublicKeyRequest)[K]
    }>): Request<UploadSSHPublicKeyResponse, AWSError> {
        this.boot();
        return this.client.uploadSSHPublicKey(
          this.ops["UploadSSHPublicKey"].apply(partialParams)
        );
    }
}