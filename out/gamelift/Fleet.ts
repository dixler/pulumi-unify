
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    CreateAliasInput,
    CreateFleetInput,
    CreateGameSessionQueueInput,
    CreateMatchmakingConfigurationInput,
    CreateMatchmakingRuleSetInput,
    DeleteGameSessionQueueInput,
    DeleteMatchmakingConfigurationInput,
    DeleteMatchmakingRuleSetInput,
    DescribeBuildInput,
    DescribeScriptInput,
    PutScalingPolicyInput,
    RequestUploadCredentialsInput,
    UpdateBuildInput,
    UpdateGameSessionQueueInput,
    UpdateMatchmakingConfigurationInput,
    UpdateScriptInput,
    CreateAliasOutput,
    CreateFleetOutput,
    CreateGameSessionQueueOutput,
    CreateMatchmakingConfigurationOutput,
    CreateMatchmakingRuleSetOutput,
    DeleteGameSessionQueueOutput,
    DeleteMatchmakingConfigurationOutput,
    DeleteMatchmakingRuleSetOutput,
    DescribeBuildOutput,
    DescribeScriptOutput,
    PutScalingPolicyOutput,
    RequestUploadCredentialsOutput,
    UpdateBuildOutput,
    UpdateGameSessionQueueOutput,
    UpdateMatchmakingConfigurationOutput,
    UpdateScriptOutput
} from "aws-sdk/clients/gamelift";
const schema = require("../apis/gamelift-2015-10-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.gamelift.Fleet {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.gamelift.Fleet>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.GameLift()
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

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasInput & keyof Omit<CreateAliasInput, "Name">]: (CreateAliasInput)[K]
    }>): Request<CreateAliasOutput, AWSError> {
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetInput & keyof Omit<CreateFleetInput, "Name">]: (CreateFleetInput)[K]
    }>): Request<CreateFleetOutput, AWSError> {
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateGameSessionQueue(partialParams: ToOptional<{
      [K in keyof CreateGameSessionQueueInput & keyof Omit<CreateGameSessionQueueInput, "Name">]: (CreateGameSessionQueueInput)[K]
    }>): Request<CreateGameSessionQueueOutput, AWSError> {
        this.boot();
        return this.client.createGameSessionQueue(
          this.ops["CreateGameSessionQueue"].apply(partialParams)
        );
    }

    invokeCreateMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof CreateMatchmakingConfigurationInput & keyof Omit<CreateMatchmakingConfigurationInput, "Name">]: (CreateMatchmakingConfigurationInput)[K]
    }>): Request<CreateMatchmakingConfigurationOutput, AWSError> {
        this.boot();
        return this.client.createMatchmakingConfiguration(
          this.ops["CreateMatchmakingConfiguration"].apply(partialParams)
        );
    }

    invokeCreateMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof CreateMatchmakingRuleSetInput & keyof Omit<CreateMatchmakingRuleSetInput, "Name">]: (CreateMatchmakingRuleSetInput)[K]
    }>): Request<CreateMatchmakingRuleSetOutput, AWSError> {
        this.boot();
        return this.client.createMatchmakingRuleSet(
          this.ops["CreateMatchmakingRuleSet"].apply(partialParams)
        );
    }

    invokeDeleteGameSessionQueue(partialParams: ToOptional<{
      [K in keyof DeleteGameSessionQueueInput & keyof Omit<DeleteGameSessionQueueInput, "Name">]: (DeleteGameSessionQueueInput)[K]
    }>): Request<DeleteGameSessionQueueOutput, AWSError> {
        this.boot();
        return this.client.deleteGameSessionQueue(
          this.ops["DeleteGameSessionQueue"].apply(partialParams)
        );
    }

    invokeDeleteMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteMatchmakingConfigurationInput & keyof Omit<DeleteMatchmakingConfigurationInput, "Name">]: (DeleteMatchmakingConfigurationInput)[K]
    }>): Request<DeleteMatchmakingConfigurationOutput, AWSError> {
        this.boot();
        return this.client.deleteMatchmakingConfiguration(
          this.ops["DeleteMatchmakingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof DeleteMatchmakingRuleSetInput & keyof Omit<DeleteMatchmakingRuleSetInput, "Name">]: (DeleteMatchmakingRuleSetInput)[K]
    }>): Request<DeleteMatchmakingRuleSetOutput, AWSError> {
        this.boot();
        return this.client.deleteMatchmakingRuleSet(
          this.ops["DeleteMatchmakingRuleSet"].apply(partialParams)
        );
    }

    invokeDescribeBuild(partialParams: ToOptional<{
      [K in keyof DescribeBuildInput & keyof Omit<DescribeBuildInput, "BuildId">]: (DescribeBuildInput)[K]
    }>): Request<DescribeBuildOutput, AWSError> {
        this.boot();
        return this.client.describeBuild(
          this.ops["DescribeBuild"].apply(partialParams)
        );
    }

    invokeDescribeScript(partialParams: ToOptional<{
      [K in keyof DescribeScriptInput & keyof Omit<DescribeScriptInput, "ScriptId">]: (DescribeScriptInput)[K]
    }>): Request<DescribeScriptOutput, AWSError> {
        this.boot();
        return this.client.describeScript(
          this.ops["DescribeScript"].apply(partialParams)
        );
    }

    invokePutScalingPolicy(partialParams: ToOptional<{
      [K in keyof PutScalingPolicyInput & keyof Omit<PutScalingPolicyInput, "Name">]: (PutScalingPolicyInput)[K]
    }>): Request<PutScalingPolicyOutput, AWSError> {
        this.boot();
        return this.client.putScalingPolicy(
          this.ops["PutScalingPolicy"].apply(partialParams)
        );
    }

    invokeRequestUploadCredentials(partialParams: ToOptional<{
      [K in keyof RequestUploadCredentialsInput & keyof Omit<RequestUploadCredentialsInput, "BuildId">]: (RequestUploadCredentialsInput)[K]
    }>): Request<RequestUploadCredentialsOutput, AWSError> {
        this.boot();
        return this.client.requestUploadCredentials(
          this.ops["RequestUploadCredentials"].apply(partialParams)
        );
    }

    invokeUpdateBuild(partialParams: ToOptional<{
      [K in keyof UpdateBuildInput & keyof Omit<UpdateBuildInput, "BuildId">]: (UpdateBuildInput)[K]
    }>): Request<UpdateBuildOutput, AWSError> {
        this.boot();
        return this.client.updateBuild(
          this.ops["UpdateBuild"].apply(partialParams)
        );
    }

    invokeUpdateGameSessionQueue(partialParams: ToOptional<{
      [K in keyof UpdateGameSessionQueueInput & keyof Omit<UpdateGameSessionQueueInput, "Name">]: (UpdateGameSessionQueueInput)[K]
    }>): Request<UpdateGameSessionQueueOutput, AWSError> {
        this.boot();
        return this.client.updateGameSessionQueue(
          this.ops["UpdateGameSessionQueue"].apply(partialParams)
        );
    }

    invokeUpdateMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateMatchmakingConfigurationInput & keyof Omit<UpdateMatchmakingConfigurationInput, "Name">]: (UpdateMatchmakingConfigurationInput)[K]
    }>): Request<UpdateMatchmakingConfigurationOutput, AWSError> {
        this.boot();
        return this.client.updateMatchmakingConfiguration(
          this.ops["UpdateMatchmakingConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateScript(partialParams: ToOptional<{
      [K in keyof UpdateScriptInput & keyof Omit<UpdateScriptInput, "ScriptId">]: (UpdateScriptInput)[K]
    }>): Request<UpdateScriptOutput, AWSError> {
        this.boot();
        return this.client.updateScript(
          this.ops["UpdateScript"].apply(partialParams)
        );
    }
}