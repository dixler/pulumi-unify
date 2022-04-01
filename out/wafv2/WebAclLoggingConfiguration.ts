
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateWebACLRequest,
    DeleteLoggingConfigurationRequest,
    DeletePermissionPolicyRequest,
    DisassociateWebACLRequest,
    GetLoggingConfigurationRequest,
    GetPermissionPolicyRequest,
    GetWebACLForResourceRequest,
    PutPermissionPolicyRequest,
    AssociateWebACLResponse,
    DeleteLoggingConfigurationResponse,
    DeletePermissionPolicyResponse,
    DisassociateWebACLResponse,
    GetLoggingConfigurationResponse,
    GetPermissionPolicyResponse,
    GetWebACLForResourceResponse,
    PutPermissionPolicyResponse
} from "aws-sdk/clients/wafv2";
const schema = require("../apis/wafv2-2019-07-29.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.wafv2.WebAclLoggingConfiguration {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.wafv2.WebAclLoggingConfiguration>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.WAFV2()
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

    invokeAssociateWebACL(partialParams: ToOptional<{
      [K in keyof AssociateWebACLRequest & keyof Omit<AssociateWebACLRequest, "ResourceArn">]: (AssociateWebACLRequest)[K]
    }>): Request<AssociateWebACLResponse, AWSError> {
        this.boot();
        return this.client.associateWebACL(
          this.ops["AssociateWebACL"].apply(partialParams)
        );
    }

    invokeDeleteLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteLoggingConfigurationRequest & keyof Omit<DeleteLoggingConfigurationRequest, "ResourceArn">]: (DeleteLoggingConfigurationRequest)[K]
    }>): Request<DeleteLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteLoggingConfiguration(
          this.ops["DeleteLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeDeletePermissionPolicy(partialParams: ToOptional<{
      [K in keyof DeletePermissionPolicyRequest & keyof Omit<DeletePermissionPolicyRequest, "ResourceArn">]: (DeletePermissionPolicyRequest)[K]
    }>): Request<DeletePermissionPolicyResponse, AWSError> {
        this.boot();
        return this.client.deletePermissionPolicy(
          this.ops["DeletePermissionPolicy"].apply(partialParams)
        );
    }

    invokeDisassociateWebACL(partialParams: ToOptional<{
      [K in keyof DisassociateWebACLRequest & keyof Omit<DisassociateWebACLRequest, "ResourceArn">]: (DisassociateWebACLRequest)[K]
    }>): Request<DisassociateWebACLResponse, AWSError> {
        this.boot();
        return this.client.disassociateWebACL(
          this.ops["DisassociateWebACL"].apply(partialParams)
        );
    }

    invokeGetLoggingConfiguration(partialParams: ToOptional<{
      [K in keyof GetLoggingConfigurationRequest & keyof Omit<GetLoggingConfigurationRequest, "ResourceArn">]: (GetLoggingConfigurationRequest)[K]
    }>): Request<GetLoggingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getLoggingConfiguration(
          this.ops["GetLoggingConfiguration"].apply(partialParams)
        );
    }

    invokeGetPermissionPolicy(partialParams: ToOptional<{
      [K in keyof GetPermissionPolicyRequest & keyof Omit<GetPermissionPolicyRequest, "ResourceArn">]: (GetPermissionPolicyRequest)[K]
    }>): Request<GetPermissionPolicyResponse, AWSError> {
        this.boot();
        return this.client.getPermissionPolicy(
          this.ops["GetPermissionPolicy"].apply(partialParams)
        );
    }

    invokeGetWebACLForResource(partialParams: ToOptional<{
      [K in keyof GetWebACLForResourceRequest & keyof Omit<GetWebACLForResourceRequest, "ResourceArn">]: (GetWebACLForResourceRequest)[K]
    }>): Request<GetWebACLForResourceResponse, AWSError> {
        this.boot();
        return this.client.getWebACLForResource(
          this.ops["GetWebACLForResource"].apply(partialParams)
        );
    }

    invokePutPermissionPolicy(partialParams: ToOptional<{
      [K in keyof PutPermissionPolicyRequest & keyof Omit<PutPermissionPolicyRequest, "ResourceArn">]: (PutPermissionPolicyRequest)[K]
    }>): Request<PutPermissionPolicyResponse, AWSError> {
        this.boot();
        return this.client.putPermissionPolicy(
          this.ops["PutPermissionPolicy"].apply(partialParams)
        );
    }
}