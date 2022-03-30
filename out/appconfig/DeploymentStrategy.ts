
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    CreateApplicationRequest,
    CreateConfigurationProfileRequest,
    CreateDeploymentStrategyRequest,
    CreateEnvironmentRequest,
    CreateHostedConfigurationVersionRequest,
    DeleteApplicationRequest,
    DeleteConfigurationProfileRequest,
    DeleteDeploymentStrategyRequest,
    DeleteEnvironmentRequest,
    DeleteHostedConfigurationVersionRequest,
    GetApplicationRequest,
    GetConfigurationRequest,
    GetConfigurationProfileRequest,
    GetDeploymentRequest,
    GetDeploymentStrategyRequest,
    GetEnvironmentRequest,
    GetHostedConfigurationVersionRequest,
    ListConfigurationProfilesRequest,
    ListDeploymentsRequest,
    ListEnvironmentsRequest,
    ListHostedConfigurationVersionsRequest,
    ListTagsForResourceRequest,
    StartDeploymentRequest,
    StopDeploymentRequest,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateApplicationRequest,
    UpdateConfigurationProfileRequest,
    UpdateDeploymentStrategyRequest,
    UpdateEnvironmentRequest,
    ValidateConfigurationRequest,
    Application,
    ConfigurationProfile,
    DeploymentStrategy,
    Environment,
    HostedConfigurationVersion,
    Configuration,
    Deployment,
    ConfigurationProfiles,
    Deployments,
    Environments,
    HostedConfigurationVersions,
    ResourceTags
} from "aws-sdk/clients/appconfig";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appconfig.DeploymentStrategy {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.appconfig.DeploymentStrategy>) {
        super(...args)
        this.client = new awssdk.AppConfig()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/appconfig-2019-10-09.normal.json"), this.client)
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): Application {
        return this.client.createApplication(
            this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest]: (CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest)[K]
    }>): ConfigurationProfile {
        return this.client.createConfigurationProfile(
            this.ops["CreateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeCreateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest]: (CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest)[K]
    }>): DeploymentStrategy {
        return this.client.createDeploymentStrategy(
            this.ops["CreateDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest]: (CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest)[K]
    }>): Environment {
        return this.client.createEnvironment(
            this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreateHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest]: (CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest)[K]
    }>): HostedConfigurationVersion {
        return this.client.createHostedConfigurationVersion(
            this.ops["CreateHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): void {
        return this.client.deleteApplication(
            this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteConfigurationProfile(partialParams: ToOptional<{
      [K in keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest]: (DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest)[K]
    }>): void {
        return this.client.deleteConfigurationProfile(
            this.ops["DeleteConfigurationProfile"].apply(partialParams)
        );
    }

    invokeDeleteDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest]: (DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest)[K]
    }>): void {
        return this.client.deleteDeploymentStrategy(
            this.ops["DeleteDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest]: (DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest)[K]
    }>): void {
        return this.client.deleteEnvironment(
            this.ops["DeleteEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest]: (DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest)[K]
    }>): void {
        return this.client.deleteHostedConfigurationVersion(
            this.ops["DeleteHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest]: (GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest)[K]
    }>): Application {
        return this.client.getApplication(
            this.ops["GetApplication"].apply(partialParams)
        );
    }

    invokeGetConfiguration(partialParams: ToOptional<{
      [K in keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest]: (GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest)[K]
    }>): Configuration {
        return this.client.getConfiguration(
            this.ops["GetConfiguration"].apply(partialParams)
        );
    }

    invokeGetConfigurationProfile(partialParams: ToOptional<{
      [K in keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest]: (GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest)[K]
    }>): ConfigurationProfile {
        return this.client.getConfigurationProfile(
            this.ops["GetConfigurationProfile"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): Deployment {
        return this.client.getDeployment(
            this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest]: (GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest)[K]
    }>): DeploymentStrategy {
        return this.client.getDeploymentStrategy(
            this.ops["GetDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest]: (GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest)[K]
    }>): Environment {
        return this.client.getEnvironment(
            this.ops["GetEnvironment"].apply(partialParams)
        );
    }

    invokeGetHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest]: (GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest)[K]
    }>): HostedConfigurationVersion {
        return this.client.getHostedConfigurationVersion(
            this.ops["GetHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeListConfigurationProfiles(partialParams: ToOptional<{
      [K in keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest]: (ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest)[K]
    }>): ConfigurationProfiles {
        return this.client.listConfigurationProfiles(
            this.ops["ListConfigurationProfiles"].apply(partialParams)
        );
    }

    invokeListDeployments(partialParams: ToOptional<{
      [K in keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest]: (ListDeploymentsRequest & ListDeploymentsRequest & ListDeploymentsRequest & ListDeploymentsRequest & ListDeploymentsRequest)[K]
    }>): Deployments {
        return this.client.listDeployments(
            this.ops["ListDeployments"].apply(partialParams)
        );
    }

    invokeListEnvironments(partialParams: ToOptional<{
      [K in keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest]: (ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest)[K]
    }>): Environments {
        return this.client.listEnvironments(
            this.ops["ListEnvironments"].apply(partialParams)
        );
    }

    invokeListHostedConfigurationVersions(partialParams: ToOptional<{
      [K in keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest]: (ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest)[K]
    }>): HostedConfigurationVersions {
        return this.client.listHostedConfigurationVersions(
            this.ops["ListHostedConfigurationVersions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ResourceTags {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): Deployment {
        return this.client.startDeployment(
            this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof StopDeploymentRequest]: (StopDeploymentRequest & StopDeploymentRequest & StopDeploymentRequest & StopDeploymentRequest & StopDeploymentRequest)[K]
    }>): Deployment {
        return this.client.stopDeployment(
            this.ops["StopDeployment"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): Application {
        return this.client.updateApplication(
            this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest]: (UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest)[K]
    }>): ConfigurationProfile {
        return this.client.updateConfigurationProfile(
            this.ops["UpdateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeUpdateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest]: (UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest)[K]
    }>): DeploymentStrategy {
        return this.client.updateDeploymentStrategy(
            this.ops["UpdateDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest]: (UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest)[K]
    }>): Environment {
        return this.client.updateEnvironment(
            this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }

    invokeValidateConfiguration(partialParams: ToOptional<{
      [K in keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest]: (ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest)[K]
    }>): void {
        return this.client.validateConfiguration(
            this.ops["ValidateConfiguration"].apply(partialParams)
        );
    }
}