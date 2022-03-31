
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
const schema = require("../apis/appconfig-2019-10-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appconfig.Environment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.appconfig.Environment>) {
        super(...args)
        this.client = new awssdk.AppConfig()
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

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest & keyof CreateApplicationRequest]: (CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest & CreateApplicationRequest)[K]
    }>): Request<Application, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest & keyof CreateConfigurationProfileRequest]: (CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest & CreateConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConfigurationProfile(
          this.ops["CreateConfigurationProfile"].applicator.apply(partialParams)
        );
    }

    invokeCreateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest & keyof CreateDeploymentStrategyRequest]: (CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest & CreateDeploymentStrategyRequest)[K]
    }>): Request<DeploymentStrategy, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeploymentStrategy(
          this.ops["CreateDeploymentStrategy"].applicator.apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest & keyof CreateEnvironmentRequest]: (CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest & CreateEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeCreateHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest & keyof CreateHostedConfigurationVersionRequest]: (CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest & CreateHostedConfigurationVersionRequest)[K]
    }>): Request<HostedConfigurationVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHostedConfigurationVersion(
          this.ops["CreateHostedConfigurationVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest & keyof DeleteApplicationRequest]: (DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest & DeleteApplicationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConfigurationProfile(partialParams: ToOptional<{
      [K in keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest & keyof DeleteConfigurationProfileRequest]: (DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest & DeleteConfigurationProfileRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConfigurationProfile(
          this.ops["DeleteConfigurationProfile"].applicator.apply(partialParams)
        );
    }

    invokeDeleteDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest & keyof DeleteDeploymentStrategyRequest]: (DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest & DeleteDeploymentStrategyRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeploymentStrategy(
          this.ops["DeleteDeploymentStrategy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEnvironment(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest & keyof DeleteEnvironmentRequest]: (DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest & DeleteEnvironmentRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEnvironment(
          this.ops["DeleteEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeDeleteHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest & keyof DeleteHostedConfigurationVersionRequest]: (DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest & DeleteHostedConfigurationVersionRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHostedConfigurationVersion(
          this.ops["DeleteHostedConfigurationVersion"].applicator.apply(partialParams)
        );
    }

    invokeGetApplication(partialParams: ToOptional<{
      [K in keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest & keyof GetApplicationRequest]: (GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest & GetApplicationRequest)[K]
    }>): Request<Application, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApplication(
          this.ops["GetApplication"].applicator.apply(partialParams)
        );
    }

    invokeGetConfiguration(partialParams: ToOptional<{
      [K in keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest & keyof GetConfigurationRequest]: (GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest & GetConfigurationRequest)[K]
    }>): Request<Configuration, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConfiguration(
          this.ops["GetConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeGetConfigurationProfile(partialParams: ToOptional<{
      [K in keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest & keyof GetConfigurationProfileRequest]: (GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest & GetConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConfigurationProfile(
          this.ops["GetConfigurationProfile"].applicator.apply(partialParams)
        );
    }

    invokeGetDeployment(partialParams: ToOptional<{
      [K in keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest & keyof GetDeploymentRequest]: (GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest & GetDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployment(
          this.ops["GetDeployment"].applicator.apply(partialParams)
        );
    }

    invokeGetDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest & keyof GetDeploymentStrategyRequest]: (GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest & GetDeploymentStrategyRequest)[K]
    }>): Request<DeploymentStrategy, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeploymentStrategy(
          this.ops["GetDeploymentStrategy"].applicator.apply(partialParams)
        );
    }

    invokeGetEnvironment(partialParams: ToOptional<{
      [K in keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest & keyof GetEnvironmentRequest]: (GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest & GetEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEnvironment(
          this.ops["GetEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeGetHostedConfigurationVersion(partialParams: ToOptional<{
      [K in keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest & keyof GetHostedConfigurationVersionRequest]: (GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest & GetHostedConfigurationVersionRequest)[K]
    }>): Request<HostedConfigurationVersion, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getHostedConfigurationVersion(
          this.ops["GetHostedConfigurationVersion"].applicator.apply(partialParams)
        );
    }

    invokeListConfigurationProfiles(partialParams: ToOptional<{
      [K in keyof Omit<ListConfigurationProfilesRequest, "ApplicationId"> & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest & keyof ListConfigurationProfilesRequest]: (Omit<ListConfigurationProfilesRequest, "ApplicationId"> & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest & ListConfigurationProfilesRequest)[K]
    }>): Request<ConfigurationProfiles, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listConfigurationProfiles(
          this.ops["ListConfigurationProfiles"].applicator.apply(partialParams)
        );
    }

    invokeListDeployments(partialParams: ToOptional<{
      [K in keyof Omit<ListDeploymentsRequest, "ApplicationId"> & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest & keyof Omit<ListDeploymentsRequest, "EnvironmentId"> & keyof ListDeploymentsRequest & keyof ListDeploymentsRequest]: (Omit<ListDeploymentsRequest, "ApplicationId"> & ListDeploymentsRequest & ListDeploymentsRequest & Omit<ListDeploymentsRequest, "EnvironmentId"> & ListDeploymentsRequest & ListDeploymentsRequest)[K]
    }>): Request<Deployments, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDeployments(
          this.ops["ListDeployments"].applicator.apply(partialParams)
        );
    }

    invokeListEnvironments(partialParams: ToOptional<{
      [K in keyof Omit<ListEnvironmentsRequest, "ApplicationId"> & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest & keyof ListEnvironmentsRequest]: (Omit<ListEnvironmentsRequest, "ApplicationId"> & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest & ListEnvironmentsRequest)[K]
    }>): Request<Environments, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listEnvironments(
          this.ops["ListEnvironments"].applicator.apply(partialParams)
        );
    }

    invokeListHostedConfigurationVersions(partialParams: ToOptional<{
      [K in keyof Omit<ListHostedConfigurationVersionsRequest, "ApplicationId"> & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest & keyof ListHostedConfigurationVersionsRequest]: (Omit<ListHostedConfigurationVersionsRequest, "ApplicationId"> & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest & ListHostedConfigurationVersionsRequest)[K]
    }>): Request<HostedConfigurationVersions, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listHostedConfigurationVersions(
          this.ops["ListHostedConfigurationVersions"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof Omit<ListTagsForResourceRequest, "ResourceArn"> & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & Omit<ListTagsForResourceRequest, "ResourceArn"> & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ResourceTags, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeStartDeployment(partialParams: ToOptional<{
      [K in keyof Omit<StartDeploymentRequest, "ApplicationId"> & keyof StartDeploymentRequest & keyof StartDeploymentRequest & keyof Omit<StartDeploymentRequest, "EnvironmentId"> & keyof StartDeploymentRequest & keyof StartDeploymentRequest]: (Omit<StartDeploymentRequest, "ApplicationId"> & StartDeploymentRequest & StartDeploymentRequest & Omit<StartDeploymentRequest, "EnvironmentId"> & StartDeploymentRequest & StartDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startDeployment(
          this.ops["StartDeployment"].applicator.apply(partialParams)
        );
    }

    invokeStopDeployment(partialParams: ToOptional<{
      [K in keyof Omit<StopDeploymentRequest, "ApplicationId"> & keyof StopDeploymentRequest & keyof StopDeploymentRequest & keyof Omit<StopDeploymentRequest, "EnvironmentId"> & keyof StopDeploymentRequest & keyof StopDeploymentRequest]: (Omit<StopDeploymentRequest, "ApplicationId"> & StopDeploymentRequest & StopDeploymentRequest & Omit<StopDeploymentRequest, "EnvironmentId"> & StopDeploymentRequest & StopDeploymentRequest)[K]
    }>): Request<Deployment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopDeployment(
          this.ops["StopDeployment"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof Omit<TagResourceRequest, "ResourceArn"> & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & Omit<TagResourceRequest, "ResourceArn"> & TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof Omit<UntagResourceRequest, "ResourceArn"> & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & Omit<UntagResourceRequest, "ResourceArn"> & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof Omit<UpdateApplicationRequest, "ApplicationId"> & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest & keyof UpdateApplicationRequest]: (Omit<UpdateApplicationRequest, "ApplicationId"> & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest & UpdateApplicationRequest)[K]
    }>): Request<Application, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConfigurationProfile(partialParams: ToOptional<{
      [K in keyof Omit<UpdateConfigurationProfileRequest, "ApplicationId"> & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest & keyof UpdateConfigurationProfileRequest]: (Omit<UpdateConfigurationProfileRequest, "ApplicationId"> & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest & UpdateConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConfigurationProfile(
          this.ops["UpdateConfigurationProfile"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest & keyof UpdateDeploymentStrategyRequest]: (UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest & UpdateDeploymentStrategyRequest)[K]
    }>): Request<DeploymentStrategy, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeploymentStrategy(
          this.ops["UpdateDeploymentStrategy"].applicator.apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof Omit<UpdateEnvironmentRequest, "ApplicationId"> & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest & keyof Omit<UpdateEnvironmentRequest, "EnvironmentId"> & keyof UpdateEnvironmentRequest & keyof UpdateEnvironmentRequest]: (Omit<UpdateEnvironmentRequest, "ApplicationId"> & UpdateEnvironmentRequest & UpdateEnvironmentRequest & Omit<UpdateEnvironmentRequest, "EnvironmentId"> & UpdateEnvironmentRequest & UpdateEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeValidateConfiguration(partialParams: ToOptional<{
      [K in keyof Omit<ValidateConfigurationRequest, "ApplicationId"> & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest & keyof ValidateConfigurationRequest]: (Omit<ValidateConfigurationRequest, "ApplicationId"> & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest & ValidateConfigurationRequest)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateConfiguration(
          this.ops["ValidateConfiguration"].applicator.apply(partialParams)
        );
    }
}