
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateConfigurationTemplateMessage,
    UpdateConfigurationTemplateMessage,
    ConfigurationSettingsDescription
} from "aws-sdk/clients/elasticbeanstalk";
const schema = require("../apis/elasticbeanstalk-2010-12-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.elasticbeanstalk.Environment {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.elasticbeanstalk.Environment>) {
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

    invokeCreateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof CreateConfigurationTemplateMessage & keyof Omit<CreateConfigurationTemplateMessage, "TemplateName">]: (CreateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        this.boot();
        return this.client.createConfigurationTemplate(
          this.ops["CreateConfigurationTemplate"].apply(partialParams)
        );
    }

    invokeUpdateConfigurationTemplate(partialParams: ToOptional<{
      [K in keyof UpdateConfigurationTemplateMessage & keyof Omit<UpdateConfigurationTemplateMessage, "TemplateName">]: (UpdateConfigurationTemplateMessage)[K]
    }>): Request<ConfigurationSettingsDescription, AWSError> {
        this.boot();
        return this.client.updateConfigurationTemplate(
          this.ops["UpdateConfigurationTemplate"].apply(partialParams)
        );
    }
}