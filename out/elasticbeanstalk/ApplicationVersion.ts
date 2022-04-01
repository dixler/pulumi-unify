
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    ApplyEnvironmentManagedActionRequest,
    CheckDNSAvailabilityMessage,
    ComposeEnvironmentsMessage,
    CreateApplicationMessage,
    CreateApplicationVersionMessage,
    CreateConfigurationTemplateMessage,
    CreateEnvironmentMessage,
    CreatePlatformVersionRequest,
    DeletePlatformVersionRequest,
    DescribeApplicationVersionsMessage,
    DescribeApplicationsMessage,
    DescribeConfigurationOptionsMessage,
    DescribeConfigurationSettingsMessage,
    DescribeEnvironmentHealthRequest,
    DescribeEnvironmentManagedActionHistoryRequest,
    DescribeEnvironmentManagedActionsRequest,
    DescribeEnvironmentResourcesMessage,
    DescribeEnvironmentsMessage,
    DescribeEventsMessage,
    DescribeInstancesHealthRequest,
    DescribePlatformVersionRequest,
    ListPlatformBranchesRequest,
    ListPlatformVersionsRequest,
    ListTagsForResourceMessage,
    RetrieveEnvironmentInfoMessage,
    TerminateEnvironmentMessage,
    UpdateApplicationMessage,
    UpdateApplicationResourceLifecycleMessage,
    UpdateApplicationVersionMessage,
    UpdateConfigurationTemplateMessage,
    UpdateEnvironmentMessage,
    ValidateConfigurationSettingsMessage,
    ApplyEnvironmentManagedActionResult,
    CheckDNSAvailabilityResultMessage,
    EnvironmentDescriptionsMessage,
    ApplicationDescriptionMessage,
    ApplicationVersionDescriptionMessage,
    ConfigurationSettingsDescription,
    EnvironmentDescription,
    CreatePlatformVersionResult,
    DeletePlatformVersionResult,
    ApplicationVersionDescriptionsMessage,
    ApplicationDescriptionsMessage,
    ConfigurationOptionsDescription,
    ConfigurationSettingsDescriptions,
    DescribeEnvironmentHealthResult,
    DescribeEnvironmentManagedActionHistoryResult,
    DescribeEnvironmentManagedActionsResult,
    EnvironmentResourceDescriptionsMessage,
    EventDescriptionsMessage,
    DescribeInstancesHealthResult,
    DescribePlatformVersionResult,
    ListPlatformBranchesResult,
    ListPlatformVersionsResult,
    ResourceTagsDescriptionMessage,
    RetrieveEnvironmentInfoResultMessage,
    ApplicationResourceLifecycleDescriptionMessage,
    ConfigurationSettingsValidationMessages
} from "aws-sdk/clients/elasticbeanstalk";
const schema = require("../apis/elasticbeanstalk-2010-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticbeanstalk.ApplicationVersion {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticbeanstalk.ApplicationVersion>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ElasticBeanstalk()
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

    invokeApplyEnvironmentManagedAction(partialParams: ToOptional<{
      [K in keyof ApplyEnvironmentManagedActionRequest]: (ApplyEnvironmentManagedActionRequest)[K]
    }>): Request<ApplyEnvironmentManagedActionResult, AWSError> {
        this.boot();
        return this.client.applyEnvironmentManagedAction(
          this.ops["ApplyEnvironmentManagedAction"].apply(partialParams)
        );
    }

    invokeCheckDNSAvailability(partialParams: ToOptional<{
      [K in keyof CheckDNSAvailabilityMessage]: (CheckDNSAvailabilityMessage)[K]
    }>): Request<CheckDNSAvailabilityResultMessage, AWSError> {
        this.boot();
        return this.client.checkDNSAvailability(
          this.ops["CheckDNSAvailability"].apply(partialParams)
        );
    }

    invokeComposeEnvironments(partialParams: ToOptional<{
      [K in keyof ComposeEnvironmentsMessage]: (ComposeEnvironmentsMessage)[K]
    }>): Request<EnvironmentDescriptionsMessage, AWSError> {
        this.boot();
        return this.client.composeEnvironments(
          this.ops["ComposeEnvironments"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationMessage]: (CreateApplicationMessage)[K]
    }>): Request<ApplicationDescriptionMessage, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateApplicationVersion(partialParams: ToOptional<{
      [K in keyof CreateApplicationVersionMessage]: (CreateApplicationVersionMessage)[K]
    }>): Request<ApplicationVersionDescriptionMessage, AWSError> {
        this.boot();
        return this.client.createApplicationVersion(
          this.ops["CreateApplicationVersion"].apply(partialParams)
        );
    }

    invokeCreateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof CreateConfigurationTemplateMessage]: (CreateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        this.boot();
        return this.client.createConfigurationTemplate(
          this.ops["CreateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMessage]: (CreateEnvironmentMessage)[K]
    }>): Request<EnvironmentDescription, AWSError> {
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreatePlatformVersion(partialParams: ToOptional<{
      [K in keyof CreatePlatformVersionRequest]: (CreatePlatformVersionRequest)[K]
    }>): Request<CreatePlatformVersionResult, AWSError> {
        this.boot();
        return this.client.createPlatformVersion(
          this.ops["CreatePlatformVersion"].apply(partialParams)
        );
    }

    invokeDeletePlatformVersion(partialParams: ToOptional<{
      [K in keyof DeletePlatformVersionRequest]: (DeletePlatformVersionRequest)[K]
    }>): Request<DeletePlatformVersionResult, AWSError> {
        this.boot();
        return this.client.deletePlatformVersion(
          this.ops["DeletePlatformVersion"].apply(partialParams)
        );
    }

    invokeDescribeApplicationVersions(partialParams: ToOptional<{
      [K in keyof DescribeApplicationVersionsMessage]: (DescribeApplicationVersionsMessage)[K]
    }>): Request<ApplicationVersionDescriptionsMessage, AWSError> {
        this.boot();
        return this.client.describeApplicationVersions(
          this.ops["DescribeApplicationVersions"].apply(partialParams)
        );
    }

    invokeDescribeApplications(partialParams: ToOptional<{
      [K in keyof DescribeApplicationsMessage]: (DescribeApplicationsMessage)[K]
    }>): Request<ApplicationDescriptionsMessage, AWSError> {
        this.boot();
        return this.client.describeApplications(
          this.ops["DescribeApplications"].apply(partialParams)
        );
    }

    invokeDescribeConfigurationOptions(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationOptionsMessage]: (DescribeConfigurationOptionsMessage)[K]
    }>): Request<ConfigurationOptionsDescription, AWSError> {
        this.boot();
        return this.client.describeConfigurationOptions(
          this.ops["DescribeConfigurationOptions"].apply(partialParams)
        );
    }

    invokeDescribeConfigurationSettings(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationSettingsMessage]: (DescribeConfigurationSettingsMessage)[K]
    }>): Request<ConfigurationSettingsDescriptions, AWSError> {
        this.boot();
        return this.client.describeConfigurationSettings(
          this.ops["DescribeConfigurationSettings"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentHealth(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentHealthRequest]: (DescribeEnvironmentHealthRequest)[K]
    }>): Request<DescribeEnvironmentHealthResult, AWSError> {
        this.boot();
        return this.client.describeEnvironmentHealth(
          this.ops["DescribeEnvironmentHealth"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentManagedActionHistory(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentManagedActionHistoryRequest]: (DescribeEnvironmentManagedActionHistoryRequest)[K]
    }>): Request<DescribeEnvironmentManagedActionHistoryResult, AWSError> {
        this.boot();
        return this.client.describeEnvironmentManagedActionHistory(
          this.ops["DescribeEnvironmentManagedActionHistory"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentManagedActions(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentManagedActionsRequest]: (DescribeEnvironmentManagedActionsRequest)[K]
    }>): Request<DescribeEnvironmentManagedActionsResult, AWSError> {
        this.boot();
        return this.client.describeEnvironmentManagedActions(
          this.ops["DescribeEnvironmentManagedActions"].apply(partialParams)
        );
    }

    invokeDescribeEnvironmentResources(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentResourcesMessage]: (DescribeEnvironmentResourcesMessage)[K]
    }>): Request<EnvironmentResourceDescriptionsMessage, AWSError> {
        this.boot();
        return this.client.describeEnvironmentResources(
          this.ops["DescribeEnvironmentResources"].apply(partialParams)
        );
    }

    invokeDescribeEnvironments(partialParams: ToOptional<{
      [K in keyof DescribeEnvironmentsMessage]: (DescribeEnvironmentsMessage)[K]
    }>): Request<EnvironmentDescriptionsMessage, AWSError> {
        this.boot();
        return this.client.describeEnvironments(
          this.ops["DescribeEnvironments"].apply(partialParams)
        );
    }

    invokeDescribeEvents(partialParams: ToOptional<{
      [K in keyof DescribeEventsMessage]: (DescribeEventsMessage)[K]
    }>): Request<EventDescriptionsMessage, AWSError> {
        this.boot();
        return this.client.describeEvents(
          this.ops["DescribeEvents"].apply(partialParams)
        );
    }

    invokeDescribeInstancesHealth(partialParams: ToOptional<{
      [K in keyof DescribeInstancesHealthRequest]: (DescribeInstancesHealthRequest)[K]
    }>): Request<DescribeInstancesHealthResult, AWSError> {
        this.boot();
        return this.client.describeInstancesHealth(
          this.ops["DescribeInstancesHealth"].apply(partialParams)
        );
    }

    invokeDescribePlatformVersion(partialParams: ToOptional<{
      [K in keyof DescribePlatformVersionRequest]: (DescribePlatformVersionRequest)[K]
    }>): Request<DescribePlatformVersionResult, AWSError> {
        this.boot();
        return this.client.describePlatformVersion(
          this.ops["DescribePlatformVersion"].apply(partialParams)
        );
    }

    invokeListPlatformBranches(partialParams: ToOptional<{
      [K in keyof ListPlatformBranchesRequest]: (ListPlatformBranchesRequest)[K]
    }>): Request<ListPlatformBranchesResult, AWSError> {
        this.boot();
        return this.client.listPlatformBranches(
          this.ops["ListPlatformBranches"].apply(partialParams)
        );
    }

    invokeListPlatformVersions(partialParams: ToOptional<{
      [K in keyof ListPlatformVersionsRequest]: (ListPlatformVersionsRequest)[K]
    }>): Request<ListPlatformVersionsResult, AWSError> {
        this.boot();
        return this.client.listPlatformVersions(
          this.ops["ListPlatformVersions"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage)[K]
    }>): Request<ResourceTagsDescriptionMessage, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRetrieveEnvironmentInfo(partialParams: ToOptional<{
      [K in keyof RetrieveEnvironmentInfoMessage]: (RetrieveEnvironmentInfoMessage)[K]
    }>): Request<RetrieveEnvironmentInfoResultMessage, AWSError> {
        this.boot();
        return this.client.retrieveEnvironmentInfo(
          this.ops["RetrieveEnvironmentInfo"].apply(partialParams)
        );
    }

    invokeTerminateEnvironment(partialParams: ToOptional<{
      [K in keyof TerminateEnvironmentMessage]: (TerminateEnvironmentMessage)[K]
    }>): Request<EnvironmentDescription, AWSError> {
        this.boot();
        return this.client.terminateEnvironment(
          this.ops["TerminateEnvironment"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMessage]: (UpdateApplicationMessage)[K]
    }>): Request<ApplicationDescriptionMessage, AWSError> {
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateApplicationResourceLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateApplicationResourceLifecycleMessage]: (UpdateApplicationResourceLifecycleMessage)[K]
    }>): Request<ApplicationResourceLifecycleDescriptionMessage, AWSError> {
        this.boot();
        return this.client.updateApplicationResourceLifecycle(
          this.ops["UpdateApplicationResourceLifecycle"].apply(partialParams)
        );
    }

    invokeUpdateApplicationVersion(partialParams: ToOptional<{
      [K in keyof UpdateApplicationVersionMessage]: (UpdateApplicationVersionMessage)[K]
    }>): Request<ApplicationVersionDescriptionMessage, AWSError> {
        this.boot();
        return this.client.updateApplicationVersion(
          this.ops["UpdateApplicationVersion"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationTemplateMessage]: (UpdateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        this.boot();
        return this.client.updateConfigurationTemplate(
          this.ops["UpdateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeUpdateEnvironment(partialParams: ToOptional<{
      [K in keyof UpdateEnvironmentMessage]: (UpdateEnvironmentMessage)[K]
    }>): Request<EnvironmentDescription, AWSError> {
        this.boot();
        return this.client.updateEnvironment(
          this.ops["UpdateEnvironment"].apply(partialParams)
        );
    }

    invokeValidateConfigurationSettings(partialParams: ToOptional<{
      [K in keyof ValidateConfigurationSettingsMessage]: (ValidateConfigurationSettingsMessage)[K]
    }>): Request<ConfigurationSettingsValidationMessages, AWSError> {
        this.boot();
        return this.client.validateConfigurationSettings(
          this.ops["ValidateConfigurationSettings"].apply(partialParams)
        );
    }
}