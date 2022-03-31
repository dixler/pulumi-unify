
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
    ListOperationsRequest,
    ListTagsForResourceRequest,
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
    ListOperationsResponse,
    ListTagsForResourceResponse,
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

export default class extends aws.apprunner.Connection {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.apprunner.Connection>) {
        super(...args)
        this.client = new awssdk.AppRunner()
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

    invokeAssociateCustomDomain(partialParams: ToOptional<{
      [K in keyof AssociateCustomDomainRequest & keyof AssociateCustomDomainRequest & keyof AssociateCustomDomainRequest & keyof AssociateCustomDomainRequest]: (AssociateCustomDomainRequest & AssociateCustomDomainRequest & AssociateCustomDomainRequest & AssociateCustomDomainRequest)[K]
    }>): Request<AssociateCustomDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateCustomDomain(
          this.ops["AssociateCustomDomain"].applicator.apply(partialParams)
        );
    }

    invokeCreateAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof CreateAutoScalingConfigurationRequest & keyof CreateAutoScalingConfigurationRequest & keyof CreateAutoScalingConfigurationRequest & keyof CreateAutoScalingConfigurationRequest]: (CreateAutoScalingConfigurationRequest & CreateAutoScalingConfigurationRequest & CreateAutoScalingConfigurationRequest & CreateAutoScalingConfigurationRequest)[K]
    }>): Request<CreateAutoScalingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAutoScalingConfiguration(
          this.ops["CreateAutoScalingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest & keyof Omit<CreateConnectionRequest, "ConnectionName"> & keyof CreateConnectionRequest & keyof CreateConnectionRequest]: (CreateConnectionRequest & Omit<CreateConnectionRequest, "ConnectionName"> & CreateConnectionRequest & CreateConnectionRequest)[K]
    }>): Request<CreateConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConnection(
          this.ops["CreateConnection"].applicator.apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest]: (CreateServiceRequest & CreateServiceRequest & CreateServiceRequest & CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcConnector(partialParams: ToOptional<{
      [K in keyof CreateVpcConnectorRequest & keyof CreateVpcConnectorRequest & keyof CreateVpcConnectorRequest & keyof CreateVpcConnectorRequest]: (CreateVpcConnectorRequest & CreateVpcConnectorRequest & CreateVpcConnectorRequest & CreateVpcConnectorRequest)[K]
    }>): Request<CreateVpcConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcConnector(
          this.ops["CreateVpcConnector"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteAutoScalingConfigurationRequest & keyof DeleteAutoScalingConfigurationRequest & keyof DeleteAutoScalingConfigurationRequest & keyof DeleteAutoScalingConfigurationRequest]: (DeleteAutoScalingConfigurationRequest & DeleteAutoScalingConfigurationRequest & DeleteAutoScalingConfigurationRequest & DeleteAutoScalingConfigurationRequest)[K]
    }>): Request<DeleteAutoScalingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAutoScalingConfiguration(
          this.ops["DeleteAutoScalingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest]: (DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest)[K]
    }>): Request<DeleteConnectionResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConnection(
          this.ops["DeleteConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest]: (DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcConnector(partialParams: ToOptional<{
      [K in keyof DeleteVpcConnectorRequest & keyof DeleteVpcConnectorRequest & keyof DeleteVpcConnectorRequest & keyof DeleteVpcConnectorRequest]: (DeleteVpcConnectorRequest & DeleteVpcConnectorRequest & DeleteVpcConnectorRequest & DeleteVpcConnectorRequest)[K]
    }>): Request<DeleteVpcConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcConnector(
          this.ops["DeleteVpcConnector"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAutoScalingConfigurationRequest & keyof DescribeAutoScalingConfigurationRequest & keyof DescribeAutoScalingConfigurationRequest & keyof DescribeAutoScalingConfigurationRequest]: (DescribeAutoScalingConfigurationRequest & DescribeAutoScalingConfigurationRequest & DescribeAutoScalingConfigurationRequest & DescribeAutoScalingConfigurationRequest)[K]
    }>): Request<DescribeAutoScalingConfigurationResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAutoScalingConfiguration(
          this.ops["DescribeAutoScalingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeCustomDomains(partialParams: ToOptional<{
      [K in keyof DescribeCustomDomainsRequest & keyof DescribeCustomDomainsRequest & keyof DescribeCustomDomainsRequest & keyof DescribeCustomDomainsRequest]: (DescribeCustomDomainsRequest & DescribeCustomDomainsRequest & DescribeCustomDomainsRequest & DescribeCustomDomainsRequest)[K]
    }>): Request<DescribeCustomDomainsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeCustomDomains(
          this.ops["DescribeCustomDomains"].applicator.apply(partialParams)
        );
    }

    invokeDescribeService(partialParams: ToOptional<{
      [K in keyof DescribeServiceRequest & keyof DescribeServiceRequest & keyof DescribeServiceRequest & keyof DescribeServiceRequest]: (DescribeServiceRequest & DescribeServiceRequest & DescribeServiceRequest & DescribeServiceRequest)[K]
    }>): Request<DescribeServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeService(
          this.ops["DescribeService"].applicator.apply(partialParams)
        );
    }

    invokeDescribeVpcConnector(partialParams: ToOptional<{
      [K in keyof DescribeVpcConnectorRequest & keyof DescribeVpcConnectorRequest & keyof DescribeVpcConnectorRequest & keyof DescribeVpcConnectorRequest]: (DescribeVpcConnectorRequest & DescribeVpcConnectorRequest & DescribeVpcConnectorRequest & DescribeVpcConnectorRequest)[K]
    }>): Request<DescribeVpcConnectorResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVpcConnector(
          this.ops["DescribeVpcConnector"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateCustomDomain(partialParams: ToOptional<{
      [K in keyof DisassociateCustomDomainRequest & keyof DisassociateCustomDomainRequest & keyof DisassociateCustomDomainRequest & keyof DisassociateCustomDomainRequest]: (DisassociateCustomDomainRequest & DisassociateCustomDomainRequest & DisassociateCustomDomainRequest & DisassociateCustomDomainRequest)[K]
    }>): Request<DisassociateCustomDomainResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateCustomDomain(
          this.ops["DisassociateCustomDomain"].applicator.apply(partialParams)
        );
    }

    invokeListOperations(partialParams: ToOptional<{
      [K in keyof ListOperationsRequest & keyof ListOperationsRequest & keyof ListOperationsRequest & keyof ListOperationsRequest]: (ListOperationsRequest & ListOperationsRequest & ListOperationsRequest & ListOperationsRequest)[K]
    }>): Request<ListOperationsResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listOperations(
          this.ops["ListOperations"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePauseService(partialParams: ToOptional<{
      [K in keyof PauseServiceRequest & keyof PauseServiceRequest & keyof PauseServiceRequest & keyof PauseServiceRequest]: (PauseServiceRequest & PauseServiceRequest & PauseServiceRequest & PauseServiceRequest)[K]
    }>): Request<PauseServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.pauseService(
          this.ops["PauseService"].applicator.apply(partialParams)
        );
    }

    invokeResumeService(partialParams: ToOptional<{
      [K in keyof ResumeServiceRequest & keyof ResumeServiceRequest & keyof ResumeServiceRequest & keyof ResumeServiceRequest]: (ResumeServiceRequest & ResumeServiceRequest & ResumeServiceRequest & ResumeServiceRequest)[K]
    }>): Request<ResumeServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeService(
          this.ops["ResumeService"].applicator.apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): Request<StartDeploymentResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest]: (UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].applicator.apply(partialParams)
        );
    }
}