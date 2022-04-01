
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AssociateCustomDomainRequest,
    CreateServiceRequest,
    DeleteAutoScalingConfigurationRequest,
    DeleteServiceRequest,
    DescribeAutoScalingConfigurationRequest,
    DescribeCustomDomainsRequest,
    DescribeServiceRequest,
    DisassociateCustomDomainRequest,
    ListOperationsRequest,
    PauseServiceRequest,
    ResumeServiceRequest,
    StartDeploymentRequest,
    UpdateServiceRequest,
    AssociateCustomDomainResponse,
    CreateServiceResponse,
    DeleteAutoScalingConfigurationResponse,
    DeleteServiceResponse,
    DescribeAutoScalingConfigurationResponse,
    DescribeCustomDomainsResponse,
    DescribeServiceResponse,
    DisassociateCustomDomainResponse,
    ListOperationsResponse,
    PauseServiceResponse,
    ResumeServiceResponse,
    StartDeploymentResponse,
    UpdateServiceResponse
} from "aws-sdk/clients/apprunner";
const schema = require("../apis/apprunner-2020-05-15.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.apprunner.Service {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.apprunner.Service>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppRunner()
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

    invokeAssociateCustomDomain(partialParams: ToOptional<{
      [K in keyof AssociateCustomDomainRequest & keyof Omit<AssociateCustomDomainRequest, "ServiceArn">]: (AssociateCustomDomainRequest)[K]
    }>): Request<AssociateCustomDomainResponse, AWSError> {
        this.boot();
        return this.client.associateCustomDomain(
          this.ops["AssociateCustomDomain"].apply(partialParams)
        );
    }

    invokeCreateService(partialParams: ToOptional<{
      [K in keyof CreateServiceRequest & keyof Omit<CreateServiceRequest, "ServiceName">]: (CreateServiceRequest)[K]
    }>): Request<CreateServiceResponse, AWSError> {
        this.boot();
        return this.client.createService(
          this.ops["CreateService"].apply(partialParams)
        );
    }

    invokeDeleteAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteAutoScalingConfigurationRequest & keyof Omit<DeleteAutoScalingConfigurationRequest, "AutoScalingConfigurationArn">]: (DeleteAutoScalingConfigurationRequest)[K]
    }>): Request<DeleteAutoScalingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.deleteAutoScalingConfiguration(
          this.ops["DeleteAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteService(partialParams: ToOptional<{
      [K in keyof DeleteServiceRequest & keyof Omit<DeleteServiceRequest, "ServiceArn">]: (DeleteServiceRequest)[K]
    }>): Request<DeleteServiceResponse, AWSError> {
        this.boot();
        return this.client.deleteService(
          this.ops["DeleteService"].apply(partialParams)
        );
    }

    invokeDescribeAutoScalingConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeAutoScalingConfigurationRequest & keyof Omit<DescribeAutoScalingConfigurationRequest, "AutoScalingConfigurationArn">]: (DescribeAutoScalingConfigurationRequest)[K]
    }>): Request<DescribeAutoScalingConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeAutoScalingConfiguration(
          this.ops["DescribeAutoScalingConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeCustomDomains(partialParams: ToOptional<{
      [K in keyof DescribeCustomDomainsRequest & keyof Omit<DescribeCustomDomainsRequest, "ServiceArn">]: (DescribeCustomDomainsRequest)[K]
    }>): Request<DescribeCustomDomainsResponse, AWSError> {
        this.boot();
        return this.client.describeCustomDomains(
          this.ops["DescribeCustomDomains"].apply(partialParams)
        );
    }

    invokeDescribeService(partialParams: ToOptional<{
      [K in keyof DescribeServiceRequest & keyof Omit<DescribeServiceRequest, "ServiceArn">]: (DescribeServiceRequest)[K]
    }>): Request<DescribeServiceResponse, AWSError> {
        this.boot();
        return this.client.describeService(
          this.ops["DescribeService"].apply(partialParams)
        );
    }

    invokeDisassociateCustomDomain(partialParams: ToOptional<{
      [K in keyof DisassociateCustomDomainRequest & keyof Omit<DisassociateCustomDomainRequest, "ServiceArn">]: (DisassociateCustomDomainRequest)[K]
    }>): Request<DisassociateCustomDomainResponse, AWSError> {
        this.boot();
        return this.client.disassociateCustomDomain(
          this.ops["DisassociateCustomDomain"].apply(partialParams)
        );
    }

    invokeListOperations(partialParams: ToOptional<{
      [K in keyof ListOperationsRequest & keyof Omit<ListOperationsRequest, "ServiceArn">]: (ListOperationsRequest)[K]
    }>): Request<ListOperationsResponse, AWSError> {
        this.boot();
        return this.client.listOperations(
          this.ops["ListOperations"].apply(partialParams)
        );
    }

    invokePauseService(partialParams: ToOptional<{
      [K in keyof PauseServiceRequest & keyof Omit<PauseServiceRequest, "ServiceArn">]: (PauseServiceRequest)[K]
    }>): Request<PauseServiceResponse, AWSError> {
        this.boot();
        return this.client.pauseService(
          this.ops["PauseService"].apply(partialParams)
        );
    }

    invokeResumeService(partialParams: ToOptional<{
      [K in keyof ResumeServiceRequest & keyof Omit<ResumeServiceRequest, "ServiceArn">]: (ResumeServiceRequest)[K]
    }>): Request<ResumeServiceResponse, AWSError> {
        this.boot();
        return this.client.resumeService(
          this.ops["ResumeService"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "ServiceArn">]: (StartDeploymentRequest)[K]
    }>): Request<StartDeploymentResponse, AWSError> {
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeUpdateService(partialParams: ToOptional<{
      [K in keyof UpdateServiceRequest & keyof Omit<UpdateServiceRequest, "ServiceArn">]: (UpdateServiceRequest)[K]
    }>): Request<UpdateServiceResponse, AWSError> {
        this.boot();
        return this.client.updateService(
          this.ops["UpdateService"].apply(partialParams)
        );
    }
}