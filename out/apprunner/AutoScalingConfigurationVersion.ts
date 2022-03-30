
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apprunner.AutoScalingConfigurationVersion {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.apprunner.AutoScalingConfigurationVersion>) {
        super(...args)
        this.client = new awssdk.AppRunner()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/apprunner-2020-05-15.normal.json"), this.client)
    }

    invokeAssociateCustomDomain(partialParams: ToOptional<{
      [K in keyof AssociateCustomDomainRequest & keyof AssociateCustomDomainRequest & keyof AssociateCustomDomainRequest]: (AssociateCustomDomainRequest & AssociateCustomDomainRequest & AssociateCustomDomainRequest)[K]
    }>): AssociateCustomDomainResponse {
        return this.client.associateCustomDomain(
            this.ops["AssociateCustomDomain"].apply(partialParams)
        );
    }

    invokeCreateAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof CreateAutoScalingConfigurationRequest & keyof Omit<CreateAutoScalingConfigurationRequest, "AutoScalingConfigurationName"> & keyof CreateAutoScalingConfigurationRequest]: (CreateAutoScalingConfigurationRequest & Omit<CreateAutoScalingConfigurationRequest, "AutoScalingConfigurationName"> & CreateAutoScalingConfigurationRequest)[K]
    }>): CreateAutoScalingConfigurationResponse {
        return this.client.createAutoScalingConfiguration(
            this.ops["CreateAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeCreateConnection(partialParams: ToOptional<{
      [K in keyof CreateConnectionRequest & keyof CreateConnectionRequest & keyof CreateConnectionRequest]: (CreateConnectionRequest & CreateConnectionRequest & CreateConnectionRequest)[K]
    }>): CreateConnectionResponse {
        return this.client.createConnection(
            this.ops["CreateConnection"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof CreateServiceRequest & keyof CreateServiceRequest]: (CreateServiceRequest & CreateServiceRequest & CreateServiceRequest)[K]
    }>): CreateServiceResponse {
        return this.client.createService(
            this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeCreateVpcConnector(partialParams: ToOptional<{
      [K in keyof CreateVpcConnectorRequest & keyof CreateVpcConnectorRequest & keyof CreateVpcConnectorRequest]: (CreateVpcConnectorRequest & CreateVpcConnectorRequest & CreateVpcConnectorRequest)[K]
    }>): CreateVpcConnectorResponse {
        return this.client.createVpcConnector(
            this.ops["CreateVpcConnector"].apply(partialParams)
        );
    }

    invokeDeleteAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteAutoScalingConfigurationRequest & keyof DeleteAutoScalingConfigurationRequest & keyof DeleteAutoScalingConfigurationRequest]: (DeleteAutoScalingConfigurationRequest & DeleteAutoScalingConfigurationRequest & DeleteAutoScalingConfigurationRequest)[K]
    }>): DeleteAutoScalingConfigurationResponse {
        return this.client.deleteAutoScalingConfiguration(
            this.ops["DeleteAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteConnection(partialParams: ToOptional<{
      [K in keyof DeleteConnectionRequest & keyof DeleteConnectionRequest & keyof DeleteConnectionRequest]: (DeleteConnectionRequest & DeleteConnectionRequest & DeleteConnectionRequest)[K]
    }>): DeleteConnectionResponse {
        return this.client.deleteConnection(
            this.ops["DeleteConnection"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof DeleteServiceRequest & keyof DeleteServiceRequest]: (DeleteServiceRequest & DeleteServiceRequest & DeleteServiceRequest)[K]
    }>): DeleteServiceResponse {
        return this.client.deleteService(
            this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDeleteVpcConnector(partialParams: ToOptional<{
      [K in keyof DeleteVpcConnectorRequest & keyof DeleteVpcConnectorRequest & keyof DeleteVpcConnectorRequest]: (DeleteVpcConnectorRequest & DeleteVpcConnectorRequest & DeleteVpcConnectorRequest)[K]
    }>): DeleteVpcConnectorResponse {
        return this.client.deleteVpcConnector(
            this.ops["DeleteVpcConnector"].apply(partialParams)
        );
    }

    invokeDescribeAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAutoScalingConfigurationRequest & keyof DescribeAutoScalingConfigurationRequest & keyof DescribeAutoScalingConfigurationRequest]: (DescribeAutoScalingConfigurationRequest & DescribeAutoScalingConfigurationRequest & DescribeAutoScalingConfigurationRequest)[K]
    }>): DescribeAutoScalingConfigurationResponse {
        return this.client.describeAutoScalingConfiguration(
            this.ops["DescribeAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeCustomDomains(partialParams: ToOptional<{
      [K in keyof DescribeCustomDomainsRequest & keyof DescribeCustomDomainsRequest & keyof DescribeCustomDomainsRequest]: (DescribeCustomDomainsRequest & DescribeCustomDomainsRequest & DescribeCustomDomainsRequest)[K]
    }>): DescribeCustomDomainsResponse {
        return this.client.describeCustomDomains(
            this.ops["DescribeCustomDomains"].apply(partialParams)
        );
    }

    invokeDescribeService(partialParams: ToOptional<{
      [K in keyof DescribeServiceRequest & keyof DescribeServiceRequest & keyof DescribeServiceRequest]: (DescribeServiceRequest & DescribeServiceRequest & DescribeServiceRequest)[K]
    }>): DescribeServiceResponse {
        return this.client.describeService(
            this.ops["DescribeService"].apply(partialParams)
        );
    }

    invokeDescribeVpcConnector(partialParams: ToOptional<{
      [K in keyof DescribeVpcConnectorRequest & keyof DescribeVpcConnectorRequest & keyof DescribeVpcConnectorRequest]: (DescribeVpcConnectorRequest & DescribeVpcConnectorRequest & DescribeVpcConnectorRequest)[K]
    }>): DescribeVpcConnectorResponse {
        return this.client.describeVpcConnector(
            this.ops["DescribeVpcConnector"].apply(partialParams)
        );
    }

    invokeDisassociateCustomDomain(partialParams: ToOptional<{
      [K in keyof DisassociateCustomDomainRequest & keyof DisassociateCustomDomainRequest & keyof DisassociateCustomDomainRequest]: (DisassociateCustomDomainRequest & DisassociateCustomDomainRequest & DisassociateCustomDomainRequest)[K]
    }>): DisassociateCustomDomainResponse {
        return this.client.disassociateCustomDomain(
            this.ops["DisassociateCustomDomain"].apply(partialParams)
        );
    }

    invokeListOperations(partialParams: ToOptional<{
      [K in keyof ListOperationsRequest & keyof ListOperationsRequest & keyof ListOperationsRequest]: (ListOperationsRequest & ListOperationsRequest & ListOperationsRequest)[K]
    }>): ListOperationsResponse {
        return this.client.listOperations(
            this.ops["ListOperations"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePauseService(partialParams: ToOptional<{
      [K in keyof PauseServiceRequest & keyof PauseServiceRequest & keyof PauseServiceRequest]: (PauseServiceRequest & PauseServiceRequest & PauseServiceRequest)[K]
    }>): PauseServiceResponse {
        return this.client.pauseService(
            this.ops["PauseService"].apply(partialParams)
        );
    }

    invokeResumeService(partialParams: ToOptional<{
      [K in keyof ResumeServiceRequest & keyof ResumeServiceRequest & keyof ResumeServiceRequest]: (ResumeServiceRequest & ResumeServiceRequest & ResumeServiceRequest)[K]
    }>): ResumeServiceResponse {
        return this.client.resumeService(
            this.ops["ResumeService"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): StartDeploymentResponse {
        return this.client.startDeployment(
            this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof UpdateServiceRequest & keyof UpdateServiceRequest]: (UpdateServiceRequest & UpdateServiceRequest & UpdateServiceRequest)[K]
    }>): UpdateServiceResponse {
        return this.client.updateService(
            this.ops["UpdateService"].apply(partialParams)
        );
    }
}