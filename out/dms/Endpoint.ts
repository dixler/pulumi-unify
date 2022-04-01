
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateEndpointMessage,
    DeleteCertificateMessage,
    DeleteConnectionMessage,
    DeleteEndpointMessage,
    DescribeEndpointSettingsMessage,
    DescribeRefreshSchemasStatusMessage,
    DescribeSchemasMessage,
    ModifyEndpointMessage,
    RefreshSchemasMessage,
    TestConnectionMessage,
    CreateEndpointResponse,
    DeleteCertificateResponse,
    DeleteConnectionResponse,
    DeleteEndpointResponse,
    DescribeEndpointSettingsResponse,
    DescribeRefreshSchemasStatusResponse,
    DescribeSchemasResponse,
    ModifyEndpointResponse,
    RefreshSchemasResponse,
    TestConnectionResponse
} from "aws-sdk/clients/dms";
const schema = require("../apis/dms-2016-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.dms.Endpoint {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.dms.Endpoint>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.DMS()
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

    invokeCreateEndpoint(partialParams: ToOptional<{
      [K in keyof CreateEndpointMessage & keyof Omit<CreateEndpointMessage, "EndpointType" | "EngineName">]: (CreateEndpointMessage)[K]
    }>): Request<CreateEndpointResponse, AWSError> {
        this.boot();
        return this.client.createEndpoint(
          this.ops["CreateEndpoint"].apply(partialParams)
        );
    }

    invokeDeleteCertificate(partialParams: ToOptional<{
      [K in keyof DeleteCertificateMessage & keyof Omit<DeleteCertificateMessage, "CertificateArn">]: (DeleteCertificateMessage)[K]
    }>): Request<DeleteCertificateResponse, AWSError> {
        this.boot();
        return this.client.deleteCertificate(
          this.ops["DeleteCertificate"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionMessage & keyof Omit<DeleteConnectionMessage, "EndpointArn">]: (DeleteConnectionMessage)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteEndpoint(partialParams: ToOptional<{
      [K in keyof DeleteEndpointMessage & keyof Omit<DeleteEndpointMessage, "EndpointArn">]: (DeleteEndpointMessage)[K]
    }>): Request<DeleteEndpointResponse, AWSError> {
        this.boot();
        return this.client.deleteEndpoint(
          this.ops["DeleteEndpoint"].apply(partialParams)
        );
    }

    invokeDescribeEndpointSettings(partialParams: ToOptional<{
      [K in keyof DescribeEndpointSettingsMessage & keyof Omit<DescribeEndpointSettingsMessage, "EngineName">]: (DescribeEndpointSettingsMessage)[K]
    }>): Request<DescribeEndpointSettingsResponse, AWSError> {
        this.boot();
        return this.client.describeEndpointSettings(
          this.ops["DescribeEndpointSettings"].apply(partialParams)
        );
    }

    invokeDescribeRefreshSchemasStatus(partialParams: ToOptional<{
      [K in keyof DescribeRefreshSchemasStatusMessage & keyof Omit<DescribeRefreshSchemasStatusMessage, "EndpointArn">]: (DescribeRefreshSchemasStatusMessage)[K]
    }>): Request<DescribeRefreshSchemasStatusResponse, AWSError> {
        this.boot();
        return this.client.describeRefreshSchemasStatus(
          this.ops["DescribeRefreshSchemasStatus"].apply(partialParams)
        );
    }

    invokeDescribeSchemas(partialParams: ToOptional<{
      [K in keyof DescribeSchemasMessage & keyof Omit<DescribeSchemasMessage, "EndpointArn">]: (DescribeSchemasMessage)[K]
    }>): Request<DescribeSchemasResponse, AWSError> {
        this.boot();
        return this.client.describeSchemas(
          this.ops["DescribeSchemas"].apply(partialParams)
        );
    }

    invokeModifyEndpoint(partialParams: ToOptional<{
      [K in keyof ModifyEndpointMessage & keyof Omit<ModifyEndpointMessage, "EndpointArn">]: (ModifyEndpointMessage)[K]
    }>): Request<ModifyEndpointResponse, AWSError> {
        this.boot();
        return this.client.modifyEndpoint(
          this.ops["ModifyEndpoint"].apply(partialParams)
        );
    }

    invokeRefreshSchemas(partialParams: ToOptional<{
      [K in keyof RefreshSchemasMessage & keyof Omit<RefreshSchemasMessage, "EndpointArn">]: (RefreshSchemasMessage)[K]
    }>): Request<RefreshSchemasResponse, AWSError> {
        this.boot();
        return this.client.refreshSchemas(
          this.ops["RefreshSchemas"].apply(partialParams)
        );
    }

    invokeTestConnection(partialParams: ToOptional<{
      [K in keyof TestConnectionMessage & keyof Omit<TestConnectionMessage, "EndpointArn">]: (TestConnectionMessage)[K]
    }>): Request<TestConnectionResponse, AWSError> {
        this.boot();
        return this.client.testConnection(
          this.ops["TestConnection"].apply(partialParams)
        );
    }
}