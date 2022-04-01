
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateApplicationRequest,
    CreateConfigurationProfileRequest,
    CreateDeploymentStrategyRequest,
    CreateEnvironmentRequest,
    Application,
    ConfigurationProfile,
    DeploymentStrategy,
    Environment
} from "aws-sdk/clients/appconfig";
const schema = require("../apis/appconfig-2019-10-09.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.appconfig.DeploymentStrategy {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.appconfig.DeploymentStrategy>) {
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
      [K in keyof CreateConfigurationProfileRequest & keyof Omit<CreateConfigurationProfileRequest, "Name">]: (CreateConfigurationProfileRequest)[K]
    }>): Request<ConfigurationProfile, AWSError> {
        this.boot();
        return this.client.createConfigurationProfile(
          this.ops["CreateConfigurationProfile"].apply(partialParams)
        );
    }

    invokeCreateDeploymentStrategy(partialParams: ToOptional<{
      [K in keyof CreateDeploymentStrategyRequest & keyof Omit<CreateDeploymentStrategyRequest, "Name" | "ReplicateTo">]: (CreateDeploymentStrategyRequest)[K]
    }>): Request<DeploymentStrategy, AWSError> {
        this.boot();
        return this.client.createDeploymentStrategy(
          this.ops["CreateDeploymentStrategy"].apply(partialParams)
        );
    }

    invokeCreateEnvironment(partialParams: ToOptional<{
      [K in keyof CreateEnvironmentRequest & keyof Omit<CreateEnvironmentRequest, "Name">]: (CreateEnvironmentRequest)[K]
    }>): Request<Environment, AWSError> {
        this.boot();
        return this.client.createEnvironment(
          this.ops["CreateEnvironment"].apply(partialParams)
        );
    }
}