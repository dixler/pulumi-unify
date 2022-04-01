
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateCustomDomainRequest,
    CreateAutoScalingConfigurationRequest,
    CreateConnectionRequest,
    CreateServiceRequest,
    CreateVpcConnectorRequest,
    DeleteAutoScalingConfigurationRequest,
    DeleteConnectionRequest,
    DeleteServiceRequest,
    DeleteVpcConnectorRequest,
    DescribeAutoScalingConfigurationRequest,
    DescribeCustomDomainsRequest,
    DescribeServiceRequest,
    DescribeVpcConnectorRequest,
    DisassociateCustomDomainRequest,
    ListAutoScalingConfigurationsRequest,
    ListConnectionsRequest,
    ListOperationsRequest,
    ListServicesRequest,
    ListTagsForResourceRequest,
    ListVpcConnectorsRequest,
    PauseServiceRequest,
    ResumeServiceRequest,
    StartDeploymentRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateServiceRequest,
    AssociateCustomDomainResponse,
    CreateAutoScalingConfigurationResponse,
    CreateConnectionResponse,
    CreateServiceResponse,
    CreateVpcConnectorResponse,
    DeleteAutoScalingConfigurationResponse,
    DeleteConnectionResponse,
    DeleteServiceResponse,
    DeleteVpcConnectorResponse,
    DescribeAutoScalingConfigurationResponse,
    DescribeCustomDomainsResponse,
    DescribeServiceResponse,
    DescribeVpcConnectorResponse,
    DisassociateCustomDomainResponse,
    ListAutoScalingConfigurationsResponse,
    ListConnectionsResponse,
    ListOperationsResponse,
    ListServicesResponse,
    ListTagsForResourceResponse,
    ListVpcConnectorsResponse,
    PauseServiceResponse,
    ResumeServiceResponse,
    StartDeploymentResponse,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateServiceResponse
} from "aws-sdk/clients/apprunner";
const schema = require("../apis/apprunner-2020-05-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apprunner.AutoScalingConfigurationVersion {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apprunner.AutoScalingConfigurationVersion>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppRunner()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
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

    invokeAssociateCustomDomain(partialParams: ToOptional<{
      [K in keyof AssociateCustomDomainRequest]: (AssociateCustomDomainRequest)[K]
    }>): Request<AssociateCustomDomainResponse, AWSError> {
        this.boot();
        return this.client.associateCustomDomain(
          this.ops["AssociateCustomDomain"].apply(partialParams)
        );
    }

    invokeCreateAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof CreateAutoScalingConfigurationRequest & keyof Omit<CreateAutoScalingConfigurationRequest, "AutoScalingConfigurationName">]: (CreateAutoScalingConfigurationRequest)[K]
    }>): Request<CreateAutoScalingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.createAutoScalingConfiguration(
          this.ops["CreateAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest]: (CreateConnectionRequest)[K]
    }>): Request<CreateConnectionResponse, AWSError> {
        this.boot();
        return this.client.createConnection(
          this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest]: (CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeCreateVpcConnector(partialParams: ToOptional<{
      [K in keyof CreateVpcConnectorRequest]: (CreateVpcConnectorRequest)[K]
    }>): Request<CreateVpcConnectorResponse, AWSError> {
        this.boot();
        return this.client.createVpcConnector(
          this.ops["CreateVpcConnector"].apply(partialParams)
        );
    }

    invokeDeleteAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteAutoScalingConfigurationRequest]: (DeleteAutoScalingConfigurationRequest)[K]
    }>): Request<DeleteAutoScalingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteAutoScalingConfiguration(
          this.ops["DeleteAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest]: (DeleteConnectionRequest)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest]: (DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDeleteVpcConnector(partialParams: ToOptional<{
      [K in keyof DeleteVpcConnectorRequest]: (DeleteVpcConnectorRequest)[K]
    }>): Request<DeleteVpcConnectorResponse, AWSError> {
        this.boot();
        return this.client.deleteVpcConnector(
          this.ops["DeleteVpcConnector"].apply(partialParams)
        );
    }

    invokeDescribeAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAutoScalingConfigurationRequest]: (DescribeAutoScalingConfigurationRequest)[K]
    }>): Request<DescribeAutoScalingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeAutoScalingConfiguration(
          this.ops["DescribeAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeCustomDomains(partialParams: ToOptional<{
      [K in keyof DescribeCustomDomainsRequest]: (DescribeCustomDomainsRequest)[K]
    }>): Request<DescribeCustomDomainsResponse, AWSError> {
        this.boot();
        return this.client.describeCustomDomains(
          this.ops["DescribeCustomDomains"].apply(partialParams)
        );
    }

    invokeDescribeService(partialParams: ToOptional<{
      [K in keyof DescribeServiceRequest]: (DescribeServiceRequest)[K]
    }>): Request<DescribeServiceResponse, AWSError> {
        this.boot();
        return this.client.describeService(
          this.ops["DescribeService"].apply(partialParams)
        );
    }

    invokeDescribeVpcConnector(partialParams: ToOptional<{
      [K in keyof DescribeVpcConnectorRequest]: (DescribeVpcConnectorRequest)[K]
    }>): Request<DescribeVpcConnectorResponse, AWSError> {
        this.boot();
        return this.client.describeVpcConnector(
          this.ops["DescribeVpcConnector"].apply(partialParams)
        );
    }

    invokeDisassociateCustomDomain(partialParams: ToOptional<{
      [K in keyof DisassociateCustomDomainRequest]: (DisassociateCustomDomainRequest)[K]
    }>): Request<DisassociateCustomDomainResponse, AWSError> {
        this.boot();
        return this.client.disassociateCustomDomain(
          this.ops["DisassociateCustomDomain"].apply(partialParams)
        );
    }

    invokeListAutoScalingConfigurations(partialParams: ToOptional<{
      [K in keyof ListAutoScalingConfigurationsRequest]: (ListAutoScalingConfigurationsRequest)[K]
    }>): Request<ListAutoScalingConfigurationsResponse, AWSError> {
        this.boot();
        return this.client.listAutoScalingConfigurations(
          this.ops["ListAutoScalingConfigurations"].apply(partialParams)
        );
    }

    invokeListConnections(partialParams: ToOptional<{
      [K in keyof ListConnectionsRequest]: (ListConnectionsRequest)[K]
    }>): Request<ListConnectionsResponse, AWSError> {
        this.boot();
        return this.client.listConnections(
          this.ops["ListConnections"].apply(partialParams)
        );
    }

    invokeListOperations(partialParams: ToOptional<{
      [K in keyof ListOperationsRequest]: (ListOperationsRequest)[K]
    }>): Request<ListOperationsResponse, AWSError> {
        this.boot();
        return this.client.listOperations(
          this.ops["ListOperations"].apply(partialParams)
        );
    }

    invokeListServices(partialParams: ToOptional<{
      [K in keyof ListServicesRequest]: (ListServicesRequest)[K]
    }>): Request<ListServicesResponse, AWSError> {
        this.boot();
        return this.client.listServices(
          this.ops["ListServices"].apply(partialParams)
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

    invokeListVpcConnectors(partialParams: ToOptional<{
      [K in keyof ListVpcConnectorsRequest]: (ListVpcConnectorsRequest)[K]
    }>): Request<ListVpcConnectorsResponse, AWSError> {
        this.boot();
        return this.client.listVpcConnectors(
          this.ops["ListVpcConnectors"].apply(partialParams)
        );
    }

    invokePauseService(partialParams: ToOptional<{
      [K in keyof PauseServiceRequest]: (PauseServiceRequest)[K]
    }>): Request<PauseServiceResponse, AWSError> {
        this.boot();
        return this.client.pauseService(
          this.ops["PauseService"].apply(partialParams)
        );
    }

    invokeResumeService(partialParams: ToOptional<{
      [K in keyof ResumeServiceRequest]: (ResumeServiceRequest)[K]
    }>): Request<ResumeServiceResponse, AWSError> {
        this.boot();
        return this.client.resumeService(
          this.ops["ResumeService"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest]: (StartDeploymentRequest)[K]
    }>): Request<StartDeploymentResponse, AWSError> {
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest]: (UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].apply(partialParams)
        );
    }
}