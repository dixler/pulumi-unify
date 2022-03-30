
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    ApplyEnvironmentManagedActionRequest,
    AssociateEnvironmentOperationsRoleMessage,
    CheckDNSAvailabilityMessage,
    CreateApplicationMessage,
    CreateApplicationVersionMessage,
    CreateConfigurationTemplateMessage,
    CreateEnvironmentMessage,
    CreatePlatformVersionRequest,
    DeleteApplicationMessage,
    DeleteApplicationVersionMessage,
    DeleteConfigurationTemplateMessage,
    DeleteEnvironmentConfigurationMessage,
    DescribeConfigurationSettingsMessage,
    DisassociateEnvironmentOperationsRoleMessage,
    ListTagsForResourceMessage,
    RequestEnvironmentInfoMessage,
    RetrieveEnvironmentInfoMessage,
    UpdateApplicationMessage,
    UpdateApplicationResourceLifecycleMessage,
    UpdateApplicationVersionMessage,
    UpdateConfigurationTemplateMessage,
    UpdateTagsForResourceMessage,
    ValidateConfigurationSettingsMessage,
    ApplyEnvironmentManagedActionResult,
    CheckDNSAvailabilityResultMessage,
    ApplicationDescriptionMessage,
    ApplicationVersionDescriptionMessage,
    ConfigurationSettingsDescription,
    EnvironmentDescription,
    CreatePlatformVersionResult,
    ConfigurationSettingsDescriptions,
    ResourceTagsDescriptionMessage,
    RetrieveEnvironmentInfoResultMessage,
    ApplicationResourceLifecycleDescriptionMessage,
    ConfigurationSettingsValidationMessages
} from "aws-sdk/clients/elasticbeanstalk";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticbeanstalk.Application {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.elasticbeanstalk.Application>) {
        super(...args)
        this.client = new awssdk.ElasticBeanstalk()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/elasticbeanstalk-2010-12-01.normal.json"), this.client)
    }

    invokeApplyEnvironmentManagedAction(partialParams: ToOptional<{
      [K in keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest]: (ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest)[K]
    }>): ApplyEnvironmentManagedActionResult {
        return this.client.applyEnvironmentManagedAction(
            this.ops["ApplyEnvironmentManagedAction"].apply(partialParams)
        );
    }

    invokeAssociateEnvironmentOperationsRole(partialParams: ToOptional<{
      [K in keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage]: (AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage)[K]
    }>): void {
        return this.client.associateEnvironmentOperationsRole(
            this.ops["AssociateEnvironmentOperationsRole"].apply(partialParams)
        );
    }

    invokeCheckDNSAvailability(partialParams: ToOptional<{
      [K in keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage]: (CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage)[K]
    }>): CheckDNSAvailabilityResultMessage {
        return this.client.checkDNSAvailability(
            this.ops["CheckDNSAvailability"].apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationMessage & keyof CreateApplicationMessage & keyof CreateApplicationMessage]: (CreateApplicationMessage & CreateApplicationMessage & CreateApplicationMessage)[K]
    }>): ApplicationDescriptionMessage {
        return this.client.createApplication(
            this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateApplicationVersion(partialParams: ToOptional<{
      [K in keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage]: (CreateApplicationVersionMessage & CreateApplicationVersionMessage & CreateApplicationVersionMessage)[K]
    }>): ApplicationVersionDescriptionMessage {
        return this.client.createApplicationVersion(
            this.ops["CreateApplicationVersion"].apply(partialParams)
        );
    }

    invokeCreateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage]: (CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage)[K]
    }>): ConfigurationSettingsDescription {
        return this.client.createConfigurationTemplate(
            this.ops["CreateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage]: (CreateEnvironmentMessage & CreateEnvironmentMessage & CreateEnvironmentMessage)[K]
    }>): EnvironmentDescription {
        return this.client.createEnvironment(
            this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeCreatePlatformVersion(partialParams: ToOptional<{
      [K in keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest]: (CreatePlatformVersionRequest & CreatePlatformVersionRequest & CreatePlatformVersionRequest)[K]
    }>): CreatePlatformVersionResult {
        return this.client.createPlatformVersion(
            this.ops["CreatePlatformVersion"].apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationMessage & keyof DeleteApplicationMessage & keyof DeleteApplicationMessage]: (DeleteApplicationMessage & DeleteApplicationMessage & DeleteApplicationMessage)[K]
    }>): void {
        return this.client.deleteApplication(
            this.ops["DeleteApplication"].apply(partialParams)
        );
    }

    invokeDeleteApplicationVersion(partialParams: ToOptional<{
      [K in keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage]: (DeleteApplicationVersionMessage & DeleteApplicationVersionMessage & DeleteApplicationVersionMessage)[K]
    }>): void {
        return this.client.deleteApplicationVersion(
            this.ops["DeleteApplicationVersion"].apply(partialParams)
        );
    }

    invokeDeleteConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage]: (DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage)[K]
    }>): void {
        return this.client.deleteConfigurationTemplate(
            this.ops["DeleteConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeDeleteEnvironmentConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage]: (DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage)[K]
    }>): void {
        return this.client.deleteEnvironmentConfiguration(
            this.ops["DeleteEnvironmentConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeConfigurationSettings(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage]: (DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage)[K]
    }>): ConfigurationSettingsDescriptions {
        return this.client.describeConfigurationSettings(
            this.ops["DescribeConfigurationSettings"].apply(partialParams)
        );
    }

    invokeDisassociateEnvironmentOperationsRole(partialParams: ToOptional<{
      [K in keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage]: (DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage)[K]
    }>): void {
        return this.client.disassociateEnvironmentOperationsRole(
            this.ops["DisassociateEnvironmentOperationsRole"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): ResourceTagsDescriptionMessage {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeRequestEnvironmentInfo(partialParams: ToOptional<{
      [K in keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage]: (RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage)[K]
    }>): void {
        return this.client.requestEnvironmentInfo(
            this.ops["RequestEnvironmentInfo"].apply(partialParams)
        );
    }

    invokeRetrieveEnvironmentInfo(partialParams: ToOptional<{
      [K in keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage]: (RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage)[K]
    }>): RetrieveEnvironmentInfoResultMessage {
        return this.client.retrieveEnvironmentInfo(
            this.ops["RetrieveEnvironmentInfo"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMessage & keyof UpdateApplicationMessage & keyof UpdateApplicationMessage]: (UpdateApplicationMessage & UpdateApplicationMessage & UpdateApplicationMessage)[K]
    }>): ApplicationDescriptionMessage {
        return this.client.updateApplication(
            this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateApplicationResourceLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage]: (UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage)[K]
    }>): ApplicationResourceLifecycleDescriptionMessage {
        return this.client.updateApplicationResourceLifecycle(
            this.ops["UpdateApplicationResourceLifecycle"].apply(partialParams)
        );
    }

    invokeUpdateApplicationVersion(partialParams: ToOptional<{
      [K in keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage]: (UpdateApplicationVersionMessage & UpdateApplicationVersionMessage & UpdateApplicationVersionMessage)[K]
    }>): ApplicationVersionDescriptionMessage {
        return this.client.updateApplicationVersion(
            this.ops["UpdateApplicationVersion"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage]: (UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage)[K]
    }>): ConfigurationSettingsDescription {
        return this.client.updateConfigurationTemplate(
            this.ops["UpdateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeUpdateTagsForResource(partialParams: ToOptional<{
      [K in keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage]: (UpdateTagsForResourceMessage & UpdateTagsForResourceMessage & UpdateTagsForResourceMessage)[K]
    }>): void {
        return this.client.updateTagsForResource(
            this.ops["UpdateTagsForResource"].apply(partialParams)
        );
    }

    invokeValidateConfigurationSettings(partialParams: ToOptional<{
      [K in keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage]: (ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage)[K]
    }>): ConfigurationSettingsValidationMessages {
        return this.client.validateConfigurationSettings(
            this.ops["ValidateConfigurationSettings"].apply(partialParams)
        );
    }
}