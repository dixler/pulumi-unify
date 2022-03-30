
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

export default class extends aws.appconfig.Deployment {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.appconfig.Deployment>) {
        super(...args)
        this.client = new awssdk.AppConfig()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/appconfig-2019-10-09.normal.json"), this.client)
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): Application {
        return this.client.createApplication(
            this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest]: (CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest)[K]
    }>): ConfigurationProfile {
        return this.client.createConfigurationProfile(
            this.ops["CreateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeCreateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest]: (CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest)[K]
    }>): DeploymentStrategy {
        return this.client.createDeploymentStrategy(
            this.ops["CreateDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest]: (CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest)[K]
    }>): Environment {
        return this.client.createEnvironment(
            this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreateHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest]: (CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest)[K]
    }>): HostedConfigurationVersion {
        return this.client.createHostedConfigurationVersion(
            this.ops["CreateHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): void {
        return this.client.deleteApplication(
            this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteConfigurationProfile(partialParams: ToOptional<{
      [K in keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest]: (DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest)[K]
    }>): void {
        return this.client.deleteConfigurationProfile(
            this.ops["DeleteConfigurationProfile"].apply(partialParams)
        );
    }

    invokeDeleteDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest]: (DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest)[K]
    }>): void {
        return this.client.deleteDeploymentStrategy(
            this.ops["DeleteDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest]: (DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest)[K]
    }>): void {
        return this.client.deleteEnvironment(
            this.ops["DeleteEnvironment"].apply(partialParams)
        );
    }

    invokeDeleteHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest]: (DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest)[K]
    }>): void {
        return this.client.deleteHostedConfigurationVersion(
            this.ops["DeleteHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest]: (GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest)[K]
    }>): Application {
        return this.client.getApplication(
            this.ops["GetApplication"].apply(partialParams)
        );
    }

    invokeGetConfiguration(partialParams: ToOptional<{
      [K in keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest]: (GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest)[K]
    }>): Configuration {
        return this.client.getConfiguration(
            this.ops["GetConfiguration"].apply(partialParams)
        );
    }

    invokeGetConfigurationProfile(partialParams: ToOptional<{
      [K in keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest]: (GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest)[K]
    }>): ConfigurationProfile {
        return this.client.getConfigurationProfile(
            this.ops["GetConfigurationProfile"].apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): Deployment {
        return this.client.getDeployment(
            this.ops["GetDeployment"].apply(partialParams)
        );
    }

    invokeGetDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof Omit<GetDeploymentStrategyRequest, "DeploymentStrategyId"> & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest]: (GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & Omit<GetDeploymentStrategyRequest, "DeploymentStrategyId"> & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest)[K]
    }>): DeploymentStrategy {
        return this.client.getDeploymentStrategy(
            this.ops["GetDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest]: (GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest)[K]
    }>): Environment {
        return this.client.getEnvironment(
            this.ops["GetEnvironment"].apply(partialParams)
        );
    }

    invokeGetHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest]: (GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest)[K]
    }>): HostedConfigurationVersion {
        return this.client.getHostedConfigurationVersion(
            this.ops["GetHostedConfigurationVersion"].apply(partialParams)
        );
    }

    invokeListConfigurationProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListConfigurationProfilesRequest, "ApplicationId"> & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest]: (Omit<ListConfigurationProfilesRequest, "ApplicationId"> & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest)[K]
    }>): ConfigurationProfiles {
        return this.client.listConfigurationProfiles(
            this.ops["ListConfigurationProfiles"].apply(partialParams)
        );
    }

    invokeListDeployments(partialParams: ToOptional<{
      [K in keyof Omit<ListDeploymentsRequest, "ApplicationId"> & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof Omit<ListDeploymentsRequest, "EnvironmentId"> & keyof ListDeploymentsRequest]: (Omit<ListDeploymentsRequest, "ApplicationId"> & ListDeploymentsRequest & ListDeploymentsRequest & ListDeploymentsRequest & ListDeploymentsRequest & ListDeploymentsRequest & Omit<ListDeploymentsRequest, "EnvironmentId"> & ListDeploymentsRequest)[K]
    }>): Deployments {
        return this.client.listDeployments(
            this.ops["ListDeployments"].apply(partialParams)
        );
    }

    invokeListEnvironments(partialParams: ToOptional<{
      [K in keyof Omit<ListEnvironmentsRequest, "ApplicationId"> & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest]: (Omit<ListEnvironmentsRequest, "ApplicationId"> & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest)[K]
    }>): Environments {
        return this.client.listEnvironments(
            this.ops["ListEnvironments"].apply(partialParams)
        );
    }

    invokeListHostedConfigurationVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListHostedConfigurationVersionsRequest, "ApplicationId"> & keyof ListHostedConfigurationVersionsRequest & keyof Omit<ListHostedConfigurationVersionsRequest, "ConfigurationProfileId"> & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest]: (Omit<ListHostedConfigurationVersionsRequest, "ApplicationId"> & ListHostedConfigurationVersionsRequest & Omit<ListHostedConfigurationVersionsRequest, "ConfigurationProfileId"> & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest)[K]
    }>): HostedConfigurationVersions {
        return this.client.listHostedConfigurationVersions(
            this.ops["ListHostedConfigurationVersions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ResourceTags {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof Omit<StartDeploymentRequest, "ApplicationId"> & keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "ConfigurationProfileId"> & keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "DeploymentStrategyId"> & keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "EnvironmentId"> & keyof StartDeploymentRequest]: (Omit<StartDeploymentRequest, "ApplicationId"> & StartDeploymentRequest & Omit<StartDeploymentRequest, "ConfigurationProfileId"> & StartDeploymentRequest & Omit<StartDeploymentRequest, "DeploymentStrategyId"> & StartDeploymentRequest & Omit<StartDeploymentRequest, "EnvironmentId"> & StartDeploymentRequest)[K]
    }>): Deployment {
        return this.client.startDeployment(
            this.ops["StartDeployment"].apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof Omit<StopDeploymentRequest, "ApplicationId"> & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof Omit<StopDeploymentRequest, "EnvironmentId"> & keyof StopDeploymentRequest]: (Omit<StopDeploymentRequest, "ApplicationId"> & StopDeploymentRequest & StopDeploymentRequest & StopDeploymentRequest & StopDeploymentRequest & StopDeploymentRequest & Omit<StopDeploymentRequest, "EnvironmentId"> & StopDeploymentRequest)[K]
    }>): Deployment {
        return this.client.stopDeployment(
            this.ops["StopDeployment"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApplicationRequest, "ApplicationId"> & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (Omit<UpdateApplicationRequest, "ApplicationId"> & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): Application {
        return this.client.updateApplication(
            this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateConfigurationProfileRequest, "ApplicationId"> & keyof UpdateConfigurationProfileRequest & keyof Omit<UpdateConfigurationProfileRequest, "ConfigurationProfileId"> & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest]: (Omit<UpdateConfigurationProfileRequest, "ApplicationId"> & UpdateConfigurationProfileRequest & Omit<UpdateConfigurationProfileRequest, "ConfigurationProfileId"> & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest)[K]
    }>): ConfigurationProfile {
        return this.client.updateConfigurationProfile(
            this.ops["UpdateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeUpdateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof Omit<UpdateDeploymentStrategyRequest, "DeploymentStrategyId"> & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest]: (UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & Omit<UpdateDeploymentStrategyRequest, "DeploymentStrategyId"> & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest)[K]
    }>): DeploymentStrategy {
        return this.client.updateDeploymentStrategy(
            this.ops["UpdateDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof Omit<UpdateEnvironmentRequest, "ApplicationId"> & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof Omit<UpdateEnvironmentRequest, "EnvironmentId"> & keyof UpdateEnvironmentRequest]: (Omit<UpdateEnvironmentRequest, "ApplicationId"> & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & UpdateEnvironmentRequest & Omit<UpdateEnvironmentRequest, "EnvironmentId"> & UpdateEnvironmentRequest)[K]
    }>): Environment {
        return this.client.updateEnvironment(
            this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }

    invokeValidateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<ValidateConfigurationRequest, "ApplicationId"> & keyof ValidateConfigurationRequest & keyof Omit<ValidateConfigurationRequest, "ConfigurationProfileId"> & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest]: (Omit<ValidateConfigurationRequest, "ApplicationId"> & ValidateConfigurationRequest & Omit<ValidateConfigurationRequest, "ConfigurationProfileId"> & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest)[K]
    }>): void {
        return this.client.validateConfiguration(
            this.ops["ValidateConfiguration"].apply(partialParams)
        );
    }
}