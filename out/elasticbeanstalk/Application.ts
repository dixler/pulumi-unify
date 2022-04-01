
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApplicationMessage,
    CreateApplicationVersionMessage,
    CreateConfigurationTemplateMessage,
    CreateEnvironmentMessage,
    DescribeConfigurationSettingsMessage,
    UpdateApplicationMessage,
    UpdateApplicationResourceLifecycleMessage,
    UpdateApplicationVersionMessage,
    UpdateConfigurationTemplateMessage,
    ValidateConfigurationSettingsMessage,
    ApplicationDescriptionMessage,
    ApplicationVersionDescriptionMessage,
    ConfigurationSettingsDescription,
    EnvironmentDescription,
    ConfigurationSettingsDescriptions,
    ApplicationResourceLifecycleDescriptionMessage,
    ConfigurationSettingsValidationMessages
} from "aws-sdk/clients/elasticbeanstalk";
const schema = require("../apis/elasticbeanstalk-2010-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticbeanstalk.Application {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticbeanstalk.Application>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.ElasticBeanstalk()
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
      [K in keyof CreateApplicationMessage & keyof Omit<CreateApplicationMessage, "ApplicationName">]: (CreateApplicationMessage)[K]
    }>): Request<ApplicationDescriptionMessage, AWSError> {
        this.boot();
        return this.client.createApplication(
          this.ops["CreateApplication"].apply(partialParams)
        );
    }

    invokeCreateApplicationVersion(partialParams: ToOptional<{
      [K in keyof CreateApplicationVersionMessage & keyof Omit<CreateApplicationVersionMessage, "ApplicationName">]: (CreateApplicationVersionMessage)[K]
    }>): Request<ApplicationVersionDescriptionMessage, AWSError> {
        this.boot();
        return this.client.createApplicationVersion(
          this.ops["CreateApplicationVersion"].apply(partialParams)
        );
    }

    invokeCreateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof CreateConfigurationTemplateMessage & keyof Omit<CreateConfigurationTemplateMessage, "ApplicationName">]: (CreateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        this.boot();
        return this.client.createConfigurationTemplate(
          this.ops["CreateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentMessage & keyof Omit<CreateEnvironmentMessage, "ApplicationName">]: (CreateEnvironmentMessage)[K]
    }>): Request<EnvironmentDescription, AWSError> {
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].apply(partialParams)
        );
    }

    invokeDescribeConfigurationSettings(partialParams: ToOptional<{
      [K in keyof DescribeConfigurationSettingsMessage & keyof Omit<DescribeConfigurationSettingsMessage, "ApplicationName">]: (DescribeConfigurationSettingsMessage)[K]
    }>): Request<ConfigurationSettingsDescriptions, AWSError> {
        this.boot();
        return this.client.describeConfigurationSettings(
          this.ops["DescribeConfigurationSettings"].apply(partialParams)
        );
    }

    invokeUpdateApplication(partialParams: ToOptional<{
      [K in keyof UpdateApplicationMessage & keyof Omit<UpdateApplicationMessage, "ApplicationName">]: (UpdateApplicationMessage)[K]
    }>): Request<ApplicationDescriptionMessage, AWSError> {
        this.boot();
        return this.client.updateApplication(
          this.ops["UpdateApplication"].apply(partialParams)
        );
    }

    invokeUpdateApplicationResourceLifecycle(partialParams: ToOptional<{
      [K in keyof UpdateApplicationResourceLifecycleMessage & keyof Omit<UpdateApplicationResourceLifecycleMessage, "ApplicationName">]: (UpdateApplicationResourceLifecycleMessage)[K]
    }>): Request<ApplicationResourceLifecycleDescriptionMessage, AWSError> {
        this.boot();
        return this.client.updateApplicationResourceLifecycle(
          this.ops["UpdateApplicationResourceLifecycle"].apply(partialParams)
        );
    }

    invokeUpdateApplicationVersion(partialParams: ToOptional<{
      [K in keyof UpdateApplicationVersionMessage & keyof Omit<UpdateApplicationVersionMessage, "ApplicationName">]: (UpdateApplicationVersionMessage)[K]
    }>): Request<ApplicationVersionDescriptionMessage, AWSError> {
        this.boot();
        return this.client.updateApplicationVersion(
          this.ops["UpdateApplicationVersion"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationTemplateMessage & keyof Omit<UpdateConfigurationTemplateMessage, "ApplicationName">]: (UpdateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        this.boot();
        return this.client.updateConfigurationTemplate(
          this.ops["UpdateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeValidateConfigurationSettings(partialParams: ToOptional<{
      [K in keyof ValidateConfigurationSettingsMessage & keyof Omit<ValidateConfigurationSettingsMessage, "ApplicationName">]: (ValidateConfigurationSettingsMessage)[K]
    }>): Request<ConfigurationSettingsValidationMessages, AWSError> {
        this.boot();
        return this.client.validateConfigurationSettings(
          this.ops["ValidateConfigurationSettings"].apply(partialParams)
        );
    }
}