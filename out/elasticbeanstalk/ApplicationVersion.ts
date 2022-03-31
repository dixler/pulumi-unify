
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    constructor(...args: ConstructorParameters<typeof aws.elasticbeanstalk.ApplicationVersion>) {
        super(...args)
        this.client = new awssdk.ElasticBeanstalk()
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

    invokeApplyEnvironmentManagedAction(partialParams: ToOptional<{
      [K in keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest & keyof ApplyEnvironmentManagedActionRequest]: (ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest & ApplyEnvironmentManagedActionRequest)[K]
    }>): Request<ApplyEnvironmentManagedActionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.applyEnvironmentManagedAction(
          this.ops["ApplyEnvironmentManagedAction"].applicator.apply(partialParams)
        );
    }

    invokeAssociateEnvironmentOperationsRole(partialParams: ToOptional<{
      [K in keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage & keyof AssociateEnvironmentOperationsRoleMessage]: (AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage & AssociateEnvironmentOperationsRoleMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateEnvironmentOperationsRole(
          this.ops["AssociateEnvironmentOperationsRole"].applicator.apply(partialParams)
        );
    }

    invokeCheckDNSAvailability(partialParams: ToOptional<{
      [K in keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage & keyof CheckDNSAvailabilityMessage]: (CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage & CheckDNSAvailabilityMessage)[K]
    }>): Request<CheckDNSAvailabilityResultMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.checkDNSAvailability(
          this.ops["CheckDNSAvailability"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplication(partialParams: ToOptional<{
      [K in keyof CreateApplicationMessage & keyof CreateApplicationMessage & keyof CreateApplicationMessage & keyof CreateApplicationMessage & keyof CreateApplicationMessage & keyof CreateApplicationMessage]: (CreateApplicationMessage & CreateApplicationMessage & CreateApplicationMessage & CreateApplicationMessage & CreateApplicationMessage & CreateApplicationMessage)[K]
    }>): Request<ApplicationDescriptionMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].applicator.apply(partialParams)
        );
    }

    invokeCreateApplicationVersion(partialParams: ToOptional<{
      [K in keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage & keyof CreateApplicationVersionMessage]: (CreateApplicationVersionMessage & CreateApplicationVersionMessage & CreateApplicationVersionMessage & CreateApplicationVersionMessage & CreateApplicationVersionMessage & CreateApplicationVersionMessage)[K]
    }>): Request<ApplicationVersionDescriptionMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApplicationVersion(
          this.ops["CreateApplicationVersion"].applicator.apply(partialParams)
        );
    }

    invokeCreateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage & keyof CreateConfigurationTemplateMessage]: (CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage & CreateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createConfigurationTemplate(
          this.ops["CreateConfigurationTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage & keyof CreateEnvironmentMessage]: (CreateEnvironmentMessage & CreateEnvironmentMessage & CreateEnvironmentMessage & CreateEnvironmentMessage & CreateEnvironmentMessage & CreateEnvironmentMessage)[K]
    }>): Request<EnvironmentDescription, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].applicator.apply(partialParams)
        );
    }

    invokeCreatePlatformVersion(partialParams: ToOptional<{
      [K in keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest & keyof CreatePlatformVersionRequest]: (CreatePlatformVersionRequest & CreatePlatformVersionRequest & CreatePlatformVersionRequest & CreatePlatformVersionRequest & CreatePlatformVersionRequest & CreatePlatformVersionRequest)[K]
    }>): Request<CreatePlatformVersionResult, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlatformVersion(
          this.ops["CreatePlatformVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplication(partialParams: ToOptional<{
      [K in keyof DeleteApplicationMessage & keyof DeleteApplicationMessage & keyof DeleteApplicationMessage & keyof DeleteApplicationMessage & keyof DeleteApplicationMessage & keyof DeleteApplicationMessage]: (DeleteApplicationMessage & DeleteApplicationMessage & DeleteApplicationMessage & DeleteApplicationMessage & DeleteApplicationMessage & DeleteApplicationMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplication(
          this.ops["DeleteApplication"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApplicationVersion(partialParams: ToOptional<{
      [K in keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage & keyof DeleteApplicationVersionMessage]: (DeleteApplicationVersionMessage & DeleteApplicationVersionMessage & DeleteApplicationVersionMessage & DeleteApplicationVersionMessage & DeleteApplicationVersionMessage & DeleteApplicationVersionMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApplicationVersion(
          this.ops["DeleteApplicationVersion"].applicator.apply(partialParams)
        );
    }

    invokeDeleteConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage & keyof DeleteConfigurationTemplateMessage]: (DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage & DeleteConfigurationTemplateMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteConfigurationTemplate(
          this.ops["DeleteConfigurationTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteEnvironmentConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage & keyof DeleteEnvironmentConfigurationMessage]: (DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage & DeleteEnvironmentConfigurationMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEnvironmentConfiguration(
          this.ops["DeleteEnvironmentConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeConfigurationSettings(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage & keyof DescribeConfigurationSettingsMessage]: (DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage & DescribeConfigurationSettingsMessage)[K]
    }>): Request<ConfigurationSettingsDescriptions, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeConfigurationSettings(
          this.ops["DescribeConfigurationSettings"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateEnvironmentOperationsRole(partialParams: ToOptional<{
      [K in keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage & keyof DisassociateEnvironmentOperationsRoleMessage]: (DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage & DisassociateEnvironmentOperationsRoleMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateEnvironmentOperationsRole(
          this.ops["DisassociateEnvironmentOperationsRole"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage & keyof ListTagsForResourceMessage]: (ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage & ListTagsForResourceMessage)[K]
    }>): Request<ResourceTagsDescriptionMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeRequestEnvironmentInfo(partialParams: ToOptional<{
      [K in keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage & keyof RequestEnvironmentInfoMessage]: (RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage & RequestEnvironmentInfoMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestEnvironmentInfo(
          this.ops["RequestEnvironmentInfo"].applicator.apply(partialParams)
        );
    }

    invokeRetrieveEnvironmentInfo(partialParams: ToOptional<{
      [K in keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage & keyof RetrieveEnvironmentInfoMessage]: (RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage & RetrieveEnvironmentInfoMessage)[K]
    }>): Request<RetrieveEnvironmentInfoResultMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.retrieveEnvironmentInfo(
          this.ops["RetrieveEnvironmentInfo"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMessage & keyof UpdateApplicationMessage & keyof UpdateApplicationMessage & keyof UpdateApplicationMessage & keyof UpdateApplicationMessage & keyof UpdateApplicationMessage]: (UpdateApplicationMessage & UpdateApplicationMessage & UpdateApplicationMessage & UpdateApplicationMessage & UpdateApplicationMessage & UpdateApplicationMessage)[K]
    }>): Request<ApplicationDescriptionMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplicationResourceLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage & keyof UpdateApplicationResourceLifecycleMessage]: (UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage & UpdateApplicationResourceLifecycleMessage)[K]
    }>): Request<ApplicationResourceLifecycleDescriptionMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplicationResourceLifecycle(
          this.ops["UpdateApplicationResourceLifecycle"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApplicationVersion(partialParams: ToOptional<{
      [K in keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage & keyof UpdateApplicationVersionMessage]: (UpdateApplicationVersionMessage & UpdateApplicationVersionMessage & UpdateApplicationVersionMessage & UpdateApplicationVersionMessage & UpdateApplicationVersionMessage & UpdateApplicationVersionMessage)[K]
    }>): Request<ApplicationVersionDescriptionMessage, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApplicationVersion(
          this.ops["UpdateApplicationVersion"].applicator.apply(partialParams)
        );
    }

    invokeUpdateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage & keyof UpdateConfigurationTemplateMessage]: (UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage & UpdateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateConfigurationTemplate(
          this.ops["UpdateConfigurationTemplate"].applicator.apply(partialParams)
        );
    }

    invokeUpdateTagsForResource(partialParams: ToOptional<{
      [K in keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage & keyof UpdateTagsForResourceMessage]: (UpdateTagsForResourceMessage & UpdateTagsForResourceMessage & UpdateTagsForResourceMessage & UpdateTagsForResourceMessage & UpdateTagsForResourceMessage & UpdateTagsForResourceMessage)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTagsForResource(
          this.ops["UpdateTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeValidateConfigurationSettings(partialParams: ToOptional<{
      [K in keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage & keyof ValidateConfigurationSettingsMessage]: (ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage & ValidateConfigurationSettingsMessage)[K]
    }>): Request<ConfigurationSettingsValidationMessages, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateConfigurationSettings(
          this.ops["ValidateConfigurationSettings"].applicator.apply(partialParams)
        );
    }
}