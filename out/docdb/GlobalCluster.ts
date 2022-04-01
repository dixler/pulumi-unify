
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateDBClusterMessage,
    CreateDBInstanceMessage,
    CreateGlobalClusterMessage,
    DeleteGlobalClusterMessage,
    DescribeOrderableDBInstanceOptionsMessage,
    ModifyGlobalClusterMessage,
    RemoveFromGlobalClusterMessage,
    RestoreDBClusterFromSnapshotMessage,
    CreateDBClusterResult,
    CreateDBInstanceResult,
    CreateGlobalClusterResult,
    DeleteGlobalClusterResult,
    OrderableDBInstanceOptionsMessage,
    ModifyGlobalClusterResult,
    RemoveFromGlobalClusterResult,
    RestoreDBClusterFromSnapshotResult
} from "aws-sdk/clients/docdb";
const schema = require("../apis/docdb-2014-10-31.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.docdb.GlobalCluster {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.docdb.GlobalCluster>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DocDB()
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

    invokeCreateDBCluster(partialParams: ToOptional<{
      [K in keyof CreateDBClusterMessage & keyof Omit<CreateDBClusterMessage, "Engine">]: (CreateDBClusterMessage)[K]
    }>): Request<CreateDBClusterResult, AWSError> {
        this.boot();
        return this.client.createDBCluster(
          this.ops["CreateDBCluster"].apply(partialParams)
        );
    }

    invokeCreateDBInstance(partialParams: ToOptional<{
      [K in keyof CreateDBInstanceMessage & keyof Omit<CreateDBInstanceMessage, "Engine">]: (CreateDBInstanceMessage)[K]
    }>): Request<CreateDBInstanceResult, AWSError> {
        this.boot();
        return this.client.createDBInstance(
          this.ops["CreateDBInstance"].apply(partialParams)
        );
    }

    invokeCreateGlobalCluster(partialParams: ToOptional<{
      [K in keyof CreateGlobalClusterMessage & keyof Omit<CreateGlobalClusterMessage, "GlobalClusterIdentifier">]: (CreateGlobalClusterMessage)[K]
    }>): Request<CreateGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.createGlobalCluster(
          this.ops["CreateGlobalCluster"].apply(partialParams)
        );
    }

    invokeDeleteGlobalCluster(partialParams: ToOptional<{
      [K in keyof DeleteGlobalClusterMessage & keyof Omit<DeleteGlobalClusterMessage, "GlobalClusterIdentifier">]: (DeleteGlobalClusterMessage)[K]
    }>): Request<DeleteGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.deleteGlobalCluster(
          this.ops["DeleteGlobalCluster"].apply(partialParams)
        );
    }

    invokeDescribeOrderableDBInstanceOptions(partialParams: ToOptional<{
      [K in keyof DescribeOrderableDBInstanceOptionsMessage & keyof Omit<DescribeOrderableDBInstanceOptionsMessage, "Engine">]: (DescribeOrderableDBInstanceOptionsMessage)[K]
    }>): Request<OrderableDBInstanceOptionsMessage, AWSError> {
        this.boot();
        return this.client.describeOrderableDBInstanceOptions(
          this.ops["DescribeOrderableDBInstanceOptions"].apply(partialParams)
        );
    }

    invokeModifyGlobalCluster(partialParams: ToOptional<{
      [K in keyof ModifyGlobalClusterMessage & keyof Omit<ModifyGlobalClusterMessage, "GlobalClusterIdentifier">]: (ModifyGlobalClusterMessage)[K]
    }>): Request<ModifyGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.modifyGlobalCluster(
          this.ops["ModifyGlobalCluster"].apply(partialParams)
        );
    }

    invokeRemoveFromGlobalCluster(partialParams: ToOptional<{
      [K in keyof RemoveFromGlobalClusterMessage & keyof Omit<RemoveFromGlobalClusterMessage, "GlobalClusterIdentifier">]: (RemoveFromGlobalClusterMessage)[K]
    }>): Request<RemoveFromGlobalClusterResult, AWSError> {
        this.boot();
        return this.client.removeFromGlobalCluster(
          this.ops["RemoveFromGlobalCluster"].apply(partialParams)
        );
    }

    invokeRestoreDBClusterFromSnapshot(partialParams: ToOptional<{
      [K in keyof RestoreDBClusterFromSnapshotMessage & keyof Omit<RestoreDBClusterFromSnapshotMessage, "Engine">]: (RestoreDBClusterFromSnapshotMessage)[K]
    }>): Request<RestoreDBClusterFromSnapshotResult, AWSError> {
        this.boot();
        return this.client.restoreDBClusterFromSnapshot(
          this.ops["RestoreDBClusterFromSnapshot"].apply(partialParams)
        );
    }
}