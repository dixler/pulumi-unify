
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateIpamPoolRequest,
    CreateManagedPrefixListRequest,
    CreateSecurityGroupRequest,
    DeleteIpamScopeRequest,
    GetIpamAddressHistoryRequest,
    GetIpamResourceCidrsRequest,
    ModifyIpamScopeRequest,
    CreateIpamPoolResult,
    CreateManagedPrefixListResult,
    CreateSecurityGroupResult,
    DeleteIpamScopeResult,
    GetIpamAddressHistoryResult,
    GetIpamResourceCidrsResult,
    ModifyIpamScopeResult
} from "aws-sdk/clients/ec2";
const schema = require("../apis/ec2-2016-11-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.ec2.VpcIpamPool {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.ec2.VpcIpamPool>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.EC2()
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

    invokeCreateIpamPool(partialParams: ToOptional<{
      [K in keyof CreateIpamPoolRequest & keyof Omit<CreateIpamPoolRequest, "IpamScopeId">]: (CreateIpamPoolRequest)[K]
    }>): Request<CreateIpamPoolResult, AWSError> {
        this.boot();
        return this.client.createIpamPool(
          this.ops["CreateIpamPool"].apply(partialParams)
        );
    }

    invokeCreateManagedPrefixList(partialParams: ToOptional<{
      [K in keyof CreateManagedPrefixListRequest & keyof Omit<CreateManagedPrefixListRequest, "AddressFamily">]: (CreateManagedPrefixListRequest)[K]
    }>): Request<CreateManagedPrefixListResult, AWSError> {
        this.boot();
        return this.client.createManagedPrefixList(
          this.ops["CreateManagedPrefixList"].apply(partialParams)
        );
    }

    invokeCreateSecurityGroup(partialParams: ToOptional<{
      [K in keyof CreateSecurityGroupRequest & keyof Omit<CreateSecurityGroupRequest, "Description">]: (CreateSecurityGroupRequest)[K]
    }>): Request<CreateSecurityGroupResult, AWSError> {
        this.boot();
        return this.client.createSecurityGroup(
          this.ops["CreateSecurityGroup"].apply(partialParams)
        );
    }

    invokeDeleteIpamScope(partialParams: ToOptional<{
      [K in keyof DeleteIpamScopeRequest & keyof Omit<DeleteIpamScopeRequest, "IpamScopeId">]: (DeleteIpamScopeRequest)[K]
    }>): Request<DeleteIpamScopeResult, AWSError> {
        this.boot();
        return this.client.deleteIpamScope(
          this.ops["DeleteIpamScope"].apply(partialParams)
        );
    }

    invokeGetIpamAddressHistory(partialParams: ToOptional<{
      [K in keyof GetIpamAddressHistoryRequest & keyof Omit<GetIpamAddressHistoryRequest, "IpamScopeId">]: (GetIpamAddressHistoryRequest)[K]
    }>): Request<GetIpamAddressHistoryResult, AWSError> {
        this.boot();
        return this.client.getIpamAddressHistory(
          this.ops["GetIpamAddressHistory"].apply(partialParams)
        );
    }

    invokeGetIpamResourceCidrs(partialParams: ToOptional<{
      [K in keyof GetIpamResourceCidrsRequest & keyof Omit<GetIpamResourceCidrsRequest, "IpamScopeId">]: (GetIpamResourceCidrsRequest)[K]
    }>): Request<GetIpamResourceCidrsResult, AWSError> {
        this.boot();
        return this.client.getIpamResourceCidrs(
          this.ops["GetIpamResourceCidrs"].apply(partialParams)
        );
    }

    invokeModifyIpamScope(partialParams: ToOptional<{
      [K in keyof ModifyIpamScopeRequest & keyof Omit<ModifyIpamScopeRequest, "IpamScopeId">]: (ModifyIpamScopeRequest)[K]
    }>): Request<ModifyIpamScopeResult, AWSError> {
        this.boot();
        return this.client.modifyIpamScope(
          this.ops["ModifyIpamScope"].apply(partialParams)
        );
    }
}