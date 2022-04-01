
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApplicationRequest,
    CreateConfigurationProfileRequest,
    CreateDeploymentStrategyRequest,
    CreateEnvironmentRequest,
    CreateHostedConfigurationVersionRequest,
    GetApplicationRequest,
    GetConfigurationProfileRequest,
    GetDeploymentRequest,
    GetEnvironmentRequest,
    GetHostedConfigurationVersionRequest,
    ListConfigurationProfilesRequest,
    ListDeploymentsRequest,
    ListEnvironmentsRequest,
    ListHostedConfigurationVersionsRequest,
    StartDeploymentRequest,
    StopDeploymentRequest,
    UpdateApplicationRequest,
    UpdateConfigurationProfileRequest,
    UpdateEnvironmentRequest,
    Application,
    ConfigurationProfile,
    DeploymentStrategy,
    Environment,
    HostedConfigurationVersion,
    Deployment,
    ConfigurationProfiles,
    Deployments,
    Environments,
    HostedConfigurationVersions
} from "aws-sdk/clients/appconfig";
const schema = require("../apis/appconfig-2019-10-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appconfig.ConfigurationProfile {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appconfig.ConfigurationProfile>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.AppConfig()
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

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof Omit<CreateApplicationRequest, "Name">]: (CreateApplicationRequest)[K]
    }>): Request<Application, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof CreateConfigurationProfileRequest & keyof Omit<CreateConfigurationProfileRequest, "ApplicationId" | "Name" | "LocationUri">]: (CreateConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        this.boot();
        return this.client.createConfigurationProfile(
          this.ops["CreateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeCreateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof CreateDeploymentStrategyRequest & keyof Omit<CreateDeploymentStrategyRequest, "Name">]: (CreateDeploymentStrategyRequest)[K]
    }>): Request<DeploymentStrategy, AWSError> {
        this.boot();
        return this.client.createDeploymentStrategy(
          this.ops["CreateDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentRequest & keyof Omit<CreateEnvironmentRequest, "ApplicationId" | "Name">]: (CreateEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreateHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof CreateHostedConfigurationVersionRequest & keyof Omit<CreateHostedConfigurationVersionRequest, "ApplicationId" | "ConfigurationProfileId">]: (CreateHostedConfigurationVersionRequest)[K]
    }>): Request<HostedConfigurationVersion, AWSError> {
        this.boot();
        return this.client.createHostedConfigurationVersion(
          this.ops["CreateHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationRequest & keyof Omit<GetApplicationRequest, "ApplicationId">]: (GetApplicationRequest)[K]
    }>): Request<Application, AWSError> {
        this.boot();
        return this.client.getApplication(
          this.ops["GetApplication"].apply(partialParams)
        );
    }

    invokeGetConfigurationProfile(partialParams: ToOptional<{
      [K in keyof GetConfigurationProfileRequest & keyof Omit<GetConfigurationProfileRequest, "ApplicationId" | "ConfigurationProfileId">]: (GetConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        this.boot();
        return this.client.getConfigurationProfile(
          this.ops["GetConfigurationProfile"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof Omit<GetDeploymentRequest, "ApplicationId">]: (GetDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentRequest & keyof Omit<GetEnvironmentRequest, "ApplicationId">]: (GetEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        this.boot();
        return this.client.getEnvironment(
          this.ops["GetEnvironment"].apply(partialParams)
        );
    }

    invokeGetHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof GetHostedConfigurationVersionRequest & keyof Omit<GetHostedConfigurationVersionRequest, "ApplicationId" | "ConfigurationProfileId">]: (GetHostedConfigurationVersionRequest)[K]
    }>): Request<HostedConfigurationVersion, AWSError> {
        this.boot();
        return this.client.getHostedConfigurationVersion(
          this.ops["GetHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeListConfigurationProfiles(partialParams: ToOptional<{
      [K in keyof ListConfigurationProfilesRequest & keyof Omit<ListConfigurationProfilesRequest, "ApplicationId">]: (ListConfigurationProfilesRequest)[K]
    }>): Request<ConfigurationProfiles, AWSError> {
        this.boot();
        return this.client.listConfigurationProfiles(
          this.ops["ListConfigurationProfiles"].apply(partialParams)
        );
    }

    invokeListDeployments(partialParams: ToOptional<{
      [K in keyof ListDeploymentsRequest & keyof Omit<ListDeploymentsRequest, "ApplicationId">]: (ListDeploymentsRequest)[K]
    }>): Request<Deployments, AWSError> {
        this.boot();
        return this.client.listDeployments(
          this.ops["ListDeployments"].apply(partialParams)
        );
    }

    invokeListEnvironments(partialParams: ToOptional<{
      [K in keyof ListEnvironmentsRequest & keyof Omit<ListEnvironmentsRequest, "ApplicationId">]: (ListEnvironmentsRequest)[K]
    }>): Request<Environments, AWSError> {
        this.boot();
        return this.client.listEnvironments(
          this.ops["ListEnvironments"].apply(partialParams)
        );
    }

    invokeListHostedConfigurationVersions(partialParams: ToOptional<{
      [K in keyof ListHostedConfigurationVersionsRequest & keyof Omit<ListHostedConfigurationVersionsRequest, "ApplicationId" | "ConfigurationProfileId">]: (ListHostedConfigurationVersionsRequest)[K]
    }>): Request<HostedConfigurationVersions, AWSError> {
        this.boot();
        return this.client.listHostedConfigurationVersions(
          this.ops["ListHostedConfigurationVersions"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "ApplicationId" | "ConfigurationProfileId">]: (StartDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof StopDeploymentRequest & keyof Omit<StopDeploymentRequest, "ApplicationId">]: (StopDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        this.boot();
        return this.client.stopDeployment(
          this.ops["StopDeployment"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof Omit<UpdateApplicationRequest, "ApplicationId">]: (UpdateApplicationRequest)[K]
    }>): Request<Application, AWSError> {
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationProfileRequest & keyof Omit<UpdateConfigurationProfileRequest, "ApplicationId" | "ConfigurationProfileId">]: (UpdateConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        this.boot();
        return this.client.updateConfigurationProfile(
          this.ops["UpdateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentRequest & keyof Omit<UpdateEnvironmentRequest, "ApplicationId">]: (UpdateEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }
}