
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptMatchInput,
    ClaimGameServerInput,
    CreateAliasInput,
    CreateFleetInput,
    CreateFleetLocationsInput,
    CreateGameServerGroupInput,
    CreateGameSessionInput,
    CreateGameSessionQueueInput,
    CreateMatchmakingConfigurationInput,
    CreateMatchmakingRuleSetInput,
    CreatePlayerSessionInput,
    CreatePlayerSessionsInput,
    CreateVpcPeeringAuthorizationInput,
    CreateVpcPeeringConnectionInput,
    DeleteAliasInput,
    DeleteBuildInput,
    DeleteFleetInput,
    DeleteFleetLocationsInput,
    DeleteGameServerGroupInput,
    DeleteGameSessionQueueInput,
    DeleteMatchmakingConfigurationInput,
    DeleteMatchmakingRuleSetInput,
    DeleteScalingPolicyInput,
    DeleteScriptInput,
    DeleteVpcPeeringAuthorizationInput,
    DeleteVpcPeeringConnectionInput,
    DeregisterGameServerInput,
    DescribeAliasInput,
    DescribeBuildInput,
    DescribeFleetEventsInput,
    DescribeFleetLocationAttributesInput,
    DescribeFleetLocationCapacityInput,
    DescribeFleetLocationUtilizationInput,
    DescribeFleetPortSettingsInput,
    DescribeGameServerInput,
    DescribeGameServerGroupInput,
    DescribeGameServerInstancesInput,
    DescribeGameSessionPlacementInput,
    DescribeInstancesInput,
    DescribeMatchmakingInput,
    DescribeRuntimeConfigurationInput,
    DescribeScalingPoliciesInput,
    DescribeScriptInput,
    GetGameSessionLogUrlInput,
    GetInstanceAccessInput,
    ListGameServersInput,
    ListTagsForResourceRequest,
    PutScalingPolicyInput,
    RegisterGameServerInput,
    RequestUploadCredentialsInput,
    ResolveAliasInput,
    ResumeGameServerGroupInput,
    StartFleetActionsInput,
    StartGameSessionPlacementInput,
    StartMatchBackfillInput,
    StartMatchmakingInput,
    StopFleetActionsInput,
    StopGameSessionPlacementInput,
    StopMatchmakingInput,
    SuspendGameServerGroupInput,
    TagResourceRequest,
    UntagResourceRequest,
    UpdateAliasInput,
    UpdateBuildInput,
    UpdateFleetAttributesInput,
    UpdateFleetCapacityInput,
    UpdateFleetPortSettingsInput,
    UpdateGameServerInput,
    UpdateGameServerGroupInput,
    UpdateGameSessionInput,
    UpdateGameSessionQueueInput,
    UpdateMatchmakingConfigurationInput,
    UpdateRuntimeConfigurationInput,
    UpdateScriptInput,
    ValidateMatchmakingRuleSetInput,
    AcceptMatchOutput,
    ClaimGameServerOutput,
    CreateAliasOutput,
    CreateFleetOutput,
    CreateFleetLocationsOutput,
    CreateGameServerGroupOutput,
    CreateGameSessionOutput,
    CreateGameSessionQueueOutput,
    CreateMatchmakingConfigurationOutput,
    CreateMatchmakingRuleSetOutput,
    CreatePlayerSessionOutput,
    CreatePlayerSessionsOutput,
    CreateVpcPeeringAuthorizationOutput,
    CreateVpcPeeringConnectionOutput,
    DeleteFleetLocationsOutput,
    DeleteGameServerGroupOutput,
    DeleteGameSessionQueueOutput,
    DeleteMatchmakingConfigurationOutput,
    DeleteMatchmakingRuleSetOutput,
    DeleteVpcPeeringAuthorizationOutput,
    DeleteVpcPeeringConnectionOutput,
    DescribeAliasOutput,
    DescribeBuildOutput,
    DescribeFleetEventsOutput,
    DescribeFleetLocationAttributesOutput,
    DescribeFleetLocationCapacityOutput,
    DescribeFleetLocationUtilizationOutput,
    DescribeFleetPortSettingsOutput,
    DescribeGameServerOutput,
    DescribeGameServerGroupOutput,
    DescribeGameServerInstancesOutput,
    DescribeGameSessionPlacementOutput,
    DescribeInstancesOutput,
    DescribeMatchmakingOutput,
    DescribeRuntimeConfigurationOutput,
    DescribeScalingPoliciesOutput,
    DescribeScriptOutput,
    GetGameSessionLogUrlOutput,
    GetInstanceAccessOutput,
    ListGameServersOutput,
    ListTagsForResourceResponse,
    PutScalingPolicyOutput,
    RegisterGameServerOutput,
    RequestUploadCredentialsOutput,
    ResolveAliasOutput,
    ResumeGameServerGroupOutput,
    StartFleetActionsOutput,
    StartGameSessionPlacementOutput,
    StartMatchBackfillOutput,
    StartMatchmakingOutput,
    StopFleetActionsOutput,
    StopGameSessionPlacementOutput,
    StopMatchmakingOutput,
    SuspendGameServerGroupOutput,
    TagResourceResponse,
    UntagResourceResponse,
    UpdateAliasOutput,
    UpdateBuildOutput,
    UpdateFleetAttributesOutput,
    UpdateFleetCapacityOutput,
    UpdateFleetPortSettingsOutput,
    UpdateGameServerOutput,
    UpdateGameServerGroupOutput,
    UpdateGameSessionOutput,
    UpdateGameSessionQueueOutput,
    UpdateMatchmakingConfigurationOutput,
    UpdateRuntimeConfigurationOutput,
    UpdateScriptOutput,
    ValidateMatchmakingRuleSetOutput
} from "aws-sdk/clients/gamelift";
const schema = require("../apis/gamelift-2015-10-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.gamelift.Build {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.gamelift.Build>) {
        super(...args)
        this.client = new awssdk.GameLift()
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

    invokeAcceptMatch(partialParams: ToOptional<{
      [K in keyof AcceptMatchInput & keyof AcceptMatchInput & keyof AcceptMatchInput & keyof AcceptMatchInput]: (AcceptMatchInput & AcceptMatchInput & AcceptMatchInput & AcceptMatchInput)[K]
    }>): Request<AcceptMatchOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptMatch(
          this.ops["AcceptMatch"].applicator.apply(partialParams)
        );
    }

    invokeClaimGameServer(partialParams: ToOptional<{
      [K in keyof ClaimGameServerInput & keyof ClaimGameServerInput & keyof ClaimGameServerInput & keyof ClaimGameServerInput]: (ClaimGameServerInput & ClaimGameServerInput & ClaimGameServerInput & ClaimGameServerInput)[K]
    }>): Request<ClaimGameServerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.claimGameServer(
          this.ops["ClaimGameServer"].applicator.apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasInput & keyof CreateAliasInput & keyof CreateAliasInput & keyof CreateAliasInput]: (CreateAliasInput & CreateAliasInput & CreateAliasInput & CreateAliasInput)[K]
    }>): Request<CreateAliasOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].applicator.apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetInput & keyof CreateFleetInput & keyof CreateFleetInput & keyof CreateFleetInput]: (CreateFleetInput & CreateFleetInput & CreateFleetInput & CreateFleetInput)[K]
    }>): Request<CreateFleetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(
          this.ops["CreateFleet"].applicator.apply(partialParams)
        );
    }

    invokeCreateFleetLocations(partialParams: ToOptional<{
      [K in keyof CreateFleetLocationsInput & keyof CreateFleetLocationsInput & keyof CreateFleetLocationsInput & keyof CreateFleetLocationsInput]: (CreateFleetLocationsInput & CreateFleetLocationsInput & CreateFleetLocationsInput & CreateFleetLocationsInput)[K]
    }>): Request<CreateFleetLocationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleetLocations(
          this.ops["CreateFleetLocations"].applicator.apply(partialParams)
        );
    }

    invokeCreateGameServerGroup(partialParams: ToOptional<{
      [K in keyof CreateGameServerGroupInput & keyof CreateGameServerGroupInput & keyof CreateGameServerGroupInput & keyof CreateGameServerGroupInput]: (CreateGameServerGroupInput & CreateGameServerGroupInput & CreateGameServerGroupInput & CreateGameServerGroupInput)[K]
    }>): Request<CreateGameServerGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGameServerGroup(
          this.ops["CreateGameServerGroup"].applicator.apply(partialParams)
        );
    }

    invokeCreateGameSession(partialParams: ToOptional<{
      [K in keyof CreateGameSessionInput & keyof CreateGameSessionInput & keyof CreateGameSessionInput & keyof CreateGameSessionInput]: (CreateGameSessionInput & CreateGameSessionInput & CreateGameSessionInput & CreateGameSessionInput)[K]
    }>): Request<CreateGameSessionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGameSession(
          this.ops["CreateGameSession"].applicator.apply(partialParams)
        );
    }

    invokeCreateGameSessionQueue(partialParams: ToOptional<{
      [K in keyof CreateGameSessionQueueInput & keyof CreateGameSessionQueueInput & keyof CreateGameSessionQueueInput & keyof CreateGameSessionQueueInput]: (CreateGameSessionQueueInput & CreateGameSessionQueueInput & CreateGameSessionQueueInput & CreateGameSessionQueueInput)[K]
    }>): Request<CreateGameSessionQueueOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGameSessionQueue(
          this.ops["CreateGameSessionQueue"].applicator.apply(partialParams)
        );
    }

    invokeCreateMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof CreateMatchmakingConfigurationInput & keyof CreateMatchmakingConfigurationInput & keyof CreateMatchmakingConfigurationInput & keyof CreateMatchmakingConfigurationInput]: (CreateMatchmakingConfigurationInput & CreateMatchmakingConfigurationInput & CreateMatchmakingConfigurationInput & CreateMatchmakingConfigurationInput)[K]
    }>): Request<CreateMatchmakingConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMatchmakingConfiguration(
          this.ops["CreateMatchmakingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeCreateMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof CreateMatchmakingRuleSetInput & keyof CreateMatchmakingRuleSetInput & keyof CreateMatchmakingRuleSetInput & keyof CreateMatchmakingRuleSetInput]: (CreateMatchmakingRuleSetInput & CreateMatchmakingRuleSetInput & CreateMatchmakingRuleSetInput & CreateMatchmakingRuleSetInput)[K]
    }>): Request<CreateMatchmakingRuleSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMatchmakingRuleSet(
          this.ops["CreateMatchmakingRuleSet"].applicator.apply(partialParams)
        );
    }

    invokeCreatePlayerSession(partialParams: ToOptional<{
      [K in keyof CreatePlayerSessionInput & keyof CreatePlayerSessionInput & keyof CreatePlayerSessionInput & keyof CreatePlayerSessionInput]: (CreatePlayerSessionInput & CreatePlayerSessionInput & CreatePlayerSessionInput & CreatePlayerSessionInput)[K]
    }>): Request<CreatePlayerSessionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlayerSession(
          this.ops["CreatePlayerSession"].applicator.apply(partialParams)
        );
    }

    invokeCreatePlayerSessions(partialParams: ToOptional<{
      [K in keyof CreatePlayerSessionsInput & keyof CreatePlayerSessionsInput & keyof CreatePlayerSessionsInput & keyof CreatePlayerSessionsInput]: (CreatePlayerSessionsInput & CreatePlayerSessionsInput & CreatePlayerSessionsInput & CreatePlayerSessionsInput)[K]
    }>): Request<CreatePlayerSessionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlayerSessions(
          this.ops["CreatePlayerSessions"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcPeeringAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringAuthorizationInput & keyof CreateVpcPeeringAuthorizationInput & keyof CreateVpcPeeringAuthorizationInput & keyof CreateVpcPeeringAuthorizationInput]: (CreateVpcPeeringAuthorizationInput & CreateVpcPeeringAuthorizationInput & CreateVpcPeeringAuthorizationInput & CreateVpcPeeringAuthorizationInput)[K]
    }>): Request<CreateVpcPeeringAuthorizationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcPeeringAuthorization(
          this.ops["CreateVpcPeeringAuthorization"].applicator.apply(partialParams)
        );
    }

    invokeCreateVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringConnectionInput & keyof CreateVpcPeeringConnectionInput & keyof CreateVpcPeeringConnectionInput & keyof CreateVpcPeeringConnectionInput]: (CreateVpcPeeringConnectionInput & CreateVpcPeeringConnectionInput & CreateVpcPeeringConnectionInput & CreateVpcPeeringConnectionInput)[K]
    }>): Request<CreateVpcPeeringConnectionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcPeeringConnection(
          this.ops["CreateVpcPeeringConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeleteAlias(partialParams: ToOptional<{
      [K in keyof DeleteAliasInput & keyof DeleteAliasInput & keyof DeleteAliasInput & keyof DeleteAliasInput]: (DeleteAliasInput & DeleteAliasInput & DeleteAliasInput & DeleteAliasInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlias(
          this.ops["DeleteAlias"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBuild(partialParams: ToOptional<{
      [K in keyof DeleteBuildInput & keyof DeleteBuildInput & keyof DeleteBuildInput & keyof DeleteBuildInput]: (DeleteBuildInput & DeleteBuildInput & DeleteBuildInput & DeleteBuildInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBuild(
          this.ops["DeleteBuild"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetInput & keyof DeleteFleetInput & keyof DeleteFleetInput & keyof DeleteFleetInput]: (DeleteFleetInput & DeleteFleetInput & DeleteFleetInput & DeleteFleetInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleet(
          this.ops["DeleteFleet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFleetLocations(partialParams: ToOptional<{
      [K in keyof DeleteFleetLocationsInput & keyof DeleteFleetLocationsInput & keyof DeleteFleetLocationsInput & keyof DeleteFleetLocationsInput]: (DeleteFleetLocationsInput & DeleteFleetLocationsInput & DeleteFleetLocationsInput & DeleteFleetLocationsInput)[K]
    }>): Request<DeleteFleetLocationsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleetLocations(
          this.ops["DeleteFleetLocations"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGameServerGroup(partialParams: ToOptional<{
      [K in keyof DeleteGameServerGroupInput & keyof DeleteGameServerGroupInput & keyof DeleteGameServerGroupInput & keyof DeleteGameServerGroupInput]: (DeleteGameServerGroupInput & DeleteGameServerGroupInput & DeleteGameServerGroupInput & DeleteGameServerGroupInput)[K]
    }>): Request<DeleteGameServerGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGameServerGroup(
          this.ops["DeleteGameServerGroup"].applicator.apply(partialParams)
        );
    }

    invokeDeleteGameSessionQueue(partialParams: ToOptional<{
      [K in keyof DeleteGameSessionQueueInput & keyof DeleteGameSessionQueueInput & keyof DeleteGameSessionQueueInput & keyof DeleteGameSessionQueueInput]: (DeleteGameSessionQueueInput & DeleteGameSessionQueueInput & DeleteGameSessionQueueInput & DeleteGameSessionQueueInput)[K]
    }>): Request<DeleteGameSessionQueueOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGameSessionQueue(
          this.ops["DeleteGameSessionQueue"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteMatchmakingConfigurationInput & keyof DeleteMatchmakingConfigurationInput & keyof DeleteMatchmakingConfigurationInput & keyof DeleteMatchmakingConfigurationInput]: (DeleteMatchmakingConfigurationInput & DeleteMatchmakingConfigurationInput & DeleteMatchmakingConfigurationInput & DeleteMatchmakingConfigurationInput)[K]
    }>): Request<DeleteMatchmakingConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMatchmakingConfiguration(
          this.ops["DeleteMatchmakingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDeleteMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof DeleteMatchmakingRuleSetInput & keyof DeleteMatchmakingRuleSetInput & keyof DeleteMatchmakingRuleSetInput & keyof DeleteMatchmakingRuleSetInput]: (DeleteMatchmakingRuleSetInput & DeleteMatchmakingRuleSetInput & DeleteMatchmakingRuleSetInput & DeleteMatchmakingRuleSetInput)[K]
    }>): Request<DeleteMatchmakingRuleSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMatchmakingRuleSet(
          this.ops["DeleteMatchmakingRuleSet"].applicator.apply(partialParams)
        );
    }

    invokeDeleteScalingPolicy(partialParams: ToOptional<{
      [K in keyof DeleteScalingPolicyInput & keyof DeleteScalingPolicyInput & keyof DeleteScalingPolicyInput & keyof DeleteScalingPolicyInput]: (DeleteScalingPolicyInput & DeleteScalingPolicyInput & DeleteScalingPolicyInput & DeleteScalingPolicyInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScalingPolicy(
          this.ops["DeleteScalingPolicy"].applicator.apply(partialParams)
        );
    }

    invokeDeleteScript(partialParams: ToOptional<{
      [K in keyof DeleteScriptInput & keyof DeleteScriptInput & keyof DeleteScriptInput & keyof DeleteScriptInput]: (DeleteScriptInput & DeleteScriptInput & DeleteScriptInput & DeleteScriptInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScript(
          this.ops["DeleteScript"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringAuthorizationInput & keyof DeleteVpcPeeringAuthorizationInput & keyof DeleteVpcPeeringAuthorizationInput & keyof DeleteVpcPeeringAuthorizationInput]: (DeleteVpcPeeringAuthorizationInput & DeleteVpcPeeringAuthorizationInput & DeleteVpcPeeringAuthorizationInput & DeleteVpcPeeringAuthorizationInput)[K]
    }>): Request<DeleteVpcPeeringAuthorizationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcPeeringAuthorization(
          this.ops["DeleteVpcPeeringAuthorization"].applicator.apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionInput & keyof DeleteVpcPeeringConnectionInput & keyof DeleteVpcPeeringConnectionInput & keyof DeleteVpcPeeringConnectionInput]: (DeleteVpcPeeringConnectionInput & DeleteVpcPeeringConnectionInput & DeleteVpcPeeringConnectionInput & DeleteVpcPeeringConnectionInput)[K]
    }>): Request<DeleteVpcPeeringConnectionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcPeeringConnection(
          this.ops["DeleteVpcPeeringConnection"].applicator.apply(partialParams)
        );
    }

    invokeDeregisterGameServer(partialParams: ToOptional<{
      [K in keyof DeregisterGameServerInput & keyof DeregisterGameServerInput & keyof DeregisterGameServerInput & keyof DeregisterGameServerInput]: (DeregisterGameServerInput & DeregisterGameServerInput & DeregisterGameServerInput & DeregisterGameServerInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterGameServer(
          this.ops["DeregisterGameServer"].applicator.apply(partialParams)
        );
    }

    invokeDescribeAlias(partialParams: ToOptional<{
      [K in keyof DescribeAliasInput & keyof DescribeAliasInput & keyof DescribeAliasInput & keyof DescribeAliasInput]: (DescribeAliasInput & DescribeAliasInput & DescribeAliasInput & DescribeAliasInput)[K]
    }>): Request<DescribeAliasOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAlias(
          this.ops["DescribeAlias"].applicator.apply(partialParams)
        );
    }

    invokeDescribeBuild(partialParams: ToOptional<{
      [K in keyof DescribeBuildInput & keyof DescribeBuildInput & keyof DescribeBuildInput & keyof DescribeBuildInput]: (DescribeBuildInput & DescribeBuildInput & DescribeBuildInput & DescribeBuildInput)[K]
    }>): Request<DescribeBuildOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBuild(
          this.ops["DescribeBuild"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetEvents(partialParams: ToOptional<{
      [K in keyof DescribeFleetEventsInput & keyof DescribeFleetEventsInput & keyof DescribeFleetEventsInput & keyof DescribeFleetEventsInput]: (DescribeFleetEventsInput & DescribeFleetEventsInput & DescribeFleetEventsInput & DescribeFleetEventsInput)[K]
    }>): Request<DescribeFleetEventsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetEvents(
          this.ops["DescribeFleetEvents"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetLocationAttributes(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationAttributesInput & keyof DescribeFleetLocationAttributesInput & keyof DescribeFleetLocationAttributesInput & keyof DescribeFleetLocationAttributesInput]: (DescribeFleetLocationAttributesInput & DescribeFleetLocationAttributesInput & DescribeFleetLocationAttributesInput & DescribeFleetLocationAttributesInput)[K]
    }>): Request<DescribeFleetLocationAttributesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetLocationAttributes(
          this.ops["DescribeFleetLocationAttributes"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetLocationCapacity(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationCapacityInput & keyof DescribeFleetLocationCapacityInput & keyof DescribeFleetLocationCapacityInput & keyof DescribeFleetLocationCapacityInput]: (DescribeFleetLocationCapacityInput & DescribeFleetLocationCapacityInput & DescribeFleetLocationCapacityInput & DescribeFleetLocationCapacityInput)[K]
    }>): Request<DescribeFleetLocationCapacityOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetLocationCapacity(
          this.ops["DescribeFleetLocationCapacity"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetLocationUtilization(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationUtilizationInput & keyof DescribeFleetLocationUtilizationInput & keyof DescribeFleetLocationUtilizationInput & keyof DescribeFleetLocationUtilizationInput]: (DescribeFleetLocationUtilizationInput & DescribeFleetLocationUtilizationInput & DescribeFleetLocationUtilizationInput & DescribeFleetLocationUtilizationInput)[K]
    }>): Request<DescribeFleetLocationUtilizationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetLocationUtilization(
          this.ops["DescribeFleetLocationUtilization"].applicator.apply(partialParams)
        );
    }

    invokeDescribeFleetPortSettings(partialParams: ToOptional<{
      [K in keyof DescribeFleetPortSettingsInput & keyof DescribeFleetPortSettingsInput & keyof DescribeFleetPortSettingsInput & keyof DescribeFleetPortSettingsInput]: (DescribeFleetPortSettingsInput & DescribeFleetPortSettingsInput & DescribeFleetPortSettingsInput & DescribeFleetPortSettingsInput)[K]
    }>): Request<DescribeFleetPortSettingsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetPortSettings(
          this.ops["DescribeFleetPortSettings"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGameServer(partialParams: ToOptional<{
      [K in keyof DescribeGameServerInput & keyof DescribeGameServerInput & keyof DescribeGameServerInput & keyof DescribeGameServerInput]: (DescribeGameServerInput & DescribeGameServerInput & DescribeGameServerInput & DescribeGameServerInput)[K]
    }>): Request<DescribeGameServerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameServer(
          this.ops["DescribeGameServer"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGameServerGroup(partialParams: ToOptional<{
      [K in keyof DescribeGameServerGroupInput & keyof DescribeGameServerGroupInput & keyof DescribeGameServerGroupInput & keyof DescribeGameServerGroupInput]: (DescribeGameServerGroupInput & DescribeGameServerGroupInput & DescribeGameServerGroupInput & DescribeGameServerGroupInput)[K]
    }>): Request<DescribeGameServerGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameServerGroup(
          this.ops["DescribeGameServerGroup"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGameServerInstances(partialParams: ToOptional<{
      [K in keyof DescribeGameServerInstancesInput & keyof DescribeGameServerInstancesInput & keyof DescribeGameServerInstancesInput & keyof DescribeGameServerInstancesInput]: (DescribeGameServerInstancesInput & DescribeGameServerInstancesInput & DescribeGameServerInstancesInput & DescribeGameServerInstancesInput)[K]
    }>): Request<DescribeGameServerInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameServerInstances(
          this.ops["DescribeGameServerInstances"].applicator.apply(partialParams)
        );
    }

    invokeDescribeGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof DescribeGameSessionPlacementInput & keyof DescribeGameSessionPlacementInput & keyof DescribeGameSessionPlacementInput & keyof DescribeGameSessionPlacementInput]: (DescribeGameSessionPlacementInput & DescribeGameSessionPlacementInput & DescribeGameSessionPlacementInput & DescribeGameSessionPlacementInput)[K]
    }>): Request<DescribeGameSessionPlacementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameSessionPlacement(
          this.ops["DescribeGameSessionPlacement"].applicator.apply(partialParams)
        );
    }

    invokeDescribeInstances(partialParams: ToOptional<{
      [K in keyof DescribeInstancesInput & keyof DescribeInstancesInput & keyof DescribeInstancesInput & keyof DescribeInstancesInput]: (DescribeInstancesInput & DescribeInstancesInput & DescribeInstancesInput & DescribeInstancesInput)[K]
    }>): Request<DescribeInstancesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstances(
          this.ops["DescribeInstances"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMatchmaking(partialParams: ToOptional<{
      [K in keyof DescribeMatchmakingInput & keyof DescribeMatchmakingInput & keyof DescribeMatchmakingInput & keyof DescribeMatchmakingInput]: (DescribeMatchmakingInput & DescribeMatchmakingInput & DescribeMatchmakingInput & DescribeMatchmakingInput)[K]
    }>): Request<DescribeMatchmakingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMatchmaking(
          this.ops["DescribeMatchmaking"].applicator.apply(partialParams)
        );
    }

    invokeDescribeRuntimeConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRuntimeConfigurationInput & keyof DescribeRuntimeConfigurationInput & keyof DescribeRuntimeConfigurationInput & keyof DescribeRuntimeConfigurationInput]: (DescribeRuntimeConfigurationInput & DescribeRuntimeConfigurationInput & DescribeRuntimeConfigurationInput & DescribeRuntimeConfigurationInput)[K]
    }>): Request<DescribeRuntimeConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRuntimeConfiguration(
          this.ops["DescribeRuntimeConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeDescribeScalingPolicies(partialParams: ToOptional<{
      [K in keyof DescribeScalingPoliciesInput & keyof DescribeScalingPoliciesInput & keyof DescribeScalingPoliciesInput & keyof DescribeScalingPoliciesInput]: (DescribeScalingPoliciesInput & DescribeScalingPoliciesInput & DescribeScalingPoliciesInput & DescribeScalingPoliciesInput)[K]
    }>): Request<DescribeScalingPoliciesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScalingPolicies(
          this.ops["DescribeScalingPolicies"].applicator.apply(partialParams)
        );
    }

    invokeDescribeScript(partialParams: ToOptional<{
      [K in keyof DescribeScriptInput & keyof DescribeScriptInput & keyof DescribeScriptInput & keyof DescribeScriptInput]: (DescribeScriptInput & DescribeScriptInput & DescribeScriptInput & DescribeScriptInput)[K]
    }>): Request<DescribeScriptOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScript(
          this.ops["DescribeScript"].applicator.apply(partialParams)
        );
    }

    invokeGetGameSessionLogUrl(partialParams: ToOptional<{
      [K in keyof GetGameSessionLogUrlInput & keyof GetGameSessionLogUrlInput & keyof GetGameSessionLogUrlInput & keyof GetGameSessionLogUrlInput]: (GetGameSessionLogUrlInput & GetGameSessionLogUrlInput & GetGameSessionLogUrlInput & GetGameSessionLogUrlInput)[K]
    }>): Request<GetGameSessionLogUrlOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGameSessionLogUrl(
          this.ops["GetGameSessionLogUrl"].applicator.apply(partialParams)
        );
    }

    invokeGetInstanceAccess(partialParams: ToOptional<{
      [K in keyof GetInstanceAccessInput & keyof GetInstanceAccessInput & keyof GetInstanceAccessInput & keyof GetInstanceAccessInput]: (GetInstanceAccessInput & GetInstanceAccessInput & GetInstanceAccessInput & GetInstanceAccessInput)[K]
    }>): Request<GetInstanceAccessOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceAccess(
          this.ops["GetInstanceAccess"].applicator.apply(partialParams)
        );
    }

    invokeListGameServers(partialParams: ToOptional<{
      [K in keyof ListGameServersInput & keyof ListGameServersInput & keyof ListGameServersInput & keyof ListGameServersInput]: (ListGameServersInput & ListGameServersInput & ListGameServersInput & ListGameServersInput)[K]
    }>): Request<ListGameServersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGameServers(
          this.ops["ListGameServers"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokePutScalingPolicy(partialParams: ToOptional<{
      [K in keyof PutScalingPolicyInput & keyof Omit<PutScalingPolicyInput, "Name"> & keyof PutScalingPolicyInput & keyof PutScalingPolicyInput]: (PutScalingPolicyInput & Omit<PutScalingPolicyInput, "Name"> & PutScalingPolicyInput & PutScalingPolicyInput)[K]
    }>): Request<PutScalingPolicyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putScalingPolicy(
          this.ops["PutScalingPolicy"].applicator.apply(partialParams)
        );
    }

    invokeRegisterGameServer(partialParams: ToOptional<{
      [K in keyof RegisterGameServerInput & keyof RegisterGameServerInput & keyof RegisterGameServerInput & keyof RegisterGameServerInput]: (RegisterGameServerInput & RegisterGameServerInput & RegisterGameServerInput & RegisterGameServerInput)[K]
    }>): Request<RegisterGameServerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerGameServer(
          this.ops["RegisterGameServer"].applicator.apply(partialParams)
        );
    }

    invokeRequestUploadCredentials(partialParams: ToOptional<{
      [K in keyof RequestUploadCredentialsInput & keyof RequestUploadCredentialsInput & keyof RequestUploadCredentialsInput & keyof RequestUploadCredentialsInput]: (RequestUploadCredentialsInput & RequestUploadCredentialsInput & RequestUploadCredentialsInput & RequestUploadCredentialsInput)[K]
    }>): Request<RequestUploadCredentialsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestUploadCredentials(
          this.ops["RequestUploadCredentials"].applicator.apply(partialParams)
        );
    }

    invokeResolveAlias(partialParams: ToOptional<{
      [K in keyof ResolveAliasInput & keyof ResolveAliasInput & keyof ResolveAliasInput & keyof ResolveAliasInput]: (ResolveAliasInput & ResolveAliasInput & ResolveAliasInput & ResolveAliasInput)[K]
    }>): Request<ResolveAliasOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resolveAlias(
          this.ops["ResolveAlias"].applicator.apply(partialParams)
        );
    }

    invokeResumeGameServerGroup(partialParams: ToOptional<{
      [K in keyof ResumeGameServerGroupInput & keyof ResumeGameServerGroupInput & keyof ResumeGameServerGroupInput & keyof ResumeGameServerGroupInput]: (ResumeGameServerGroupInput & ResumeGameServerGroupInput & ResumeGameServerGroupInput & ResumeGameServerGroupInput)[K]
    }>): Request<ResumeGameServerGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeGameServerGroup(
          this.ops["ResumeGameServerGroup"].applicator.apply(partialParams)
        );
    }

    invokeStartFleetActions(partialParams: ToOptional<{
      [K in keyof StartFleetActionsInput & keyof StartFleetActionsInput & keyof StartFleetActionsInput & keyof StartFleetActionsInput]: (StartFleetActionsInput & StartFleetActionsInput & StartFleetActionsInput & StartFleetActionsInput)[K]
    }>): Request<StartFleetActionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startFleetActions(
          this.ops["StartFleetActions"].applicator.apply(partialParams)
        );
    }

    invokeStartGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof StartGameSessionPlacementInput & keyof StartGameSessionPlacementInput & keyof StartGameSessionPlacementInput & keyof StartGameSessionPlacementInput]: (StartGameSessionPlacementInput & StartGameSessionPlacementInput & StartGameSessionPlacementInput & StartGameSessionPlacementInput)[K]
    }>): Request<StartGameSessionPlacementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startGameSessionPlacement(
          this.ops["StartGameSessionPlacement"].applicator.apply(partialParams)
        );
    }

    invokeStartMatchBackfill(partialParams: ToOptional<{
      [K in keyof StartMatchBackfillInput & keyof StartMatchBackfillInput & keyof StartMatchBackfillInput & keyof StartMatchBackfillInput]: (StartMatchBackfillInput & StartMatchBackfillInput & StartMatchBackfillInput & StartMatchBackfillInput)[K]
    }>): Request<StartMatchBackfillOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMatchBackfill(
          this.ops["StartMatchBackfill"].applicator.apply(partialParams)
        );
    }

    invokeStartMatchmaking(partialParams: ToOptional<{
      [K in keyof StartMatchmakingInput & keyof StartMatchmakingInput & keyof StartMatchmakingInput & keyof StartMatchmakingInput]: (StartMatchmakingInput & StartMatchmakingInput & StartMatchmakingInput & StartMatchmakingInput)[K]
    }>): Request<StartMatchmakingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMatchmaking(
          this.ops["StartMatchmaking"].applicator.apply(partialParams)
        );
    }

    invokeStopFleetActions(partialParams: ToOptional<{
      [K in keyof StopFleetActionsInput & keyof StopFleetActionsInput & keyof StopFleetActionsInput & keyof StopFleetActionsInput]: (StopFleetActionsInput & StopFleetActionsInput & StopFleetActionsInput & StopFleetActionsInput)[K]
    }>): Request<StopFleetActionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopFleetActions(
          this.ops["StopFleetActions"].applicator.apply(partialParams)
        );
    }

    invokeStopGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof StopGameSessionPlacementInput & keyof StopGameSessionPlacementInput & keyof StopGameSessionPlacementInput & keyof StopGameSessionPlacementInput]: (StopGameSessionPlacementInput & StopGameSessionPlacementInput & StopGameSessionPlacementInput & StopGameSessionPlacementInput)[K]
    }>): Request<StopGameSessionPlacementOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopGameSessionPlacement(
          this.ops["StopGameSessionPlacement"].applicator.apply(partialParams)
        );
    }

    invokeStopMatchmaking(partialParams: ToOptional<{
      [K in keyof StopMatchmakingInput & keyof StopMatchmakingInput & keyof StopMatchmakingInput & keyof StopMatchmakingInput]: (StopMatchmakingInput & StopMatchmakingInput & StopMatchmakingInput & StopMatchmakingInput)[K]
    }>): Request<StopMatchmakingOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMatchmaking(
          this.ops["StopMatchmaking"].applicator.apply(partialParams)
        );
    }

    invokeSuspendGameServerGroup(partialParams: ToOptional<{
      [K in keyof SuspendGameServerGroupInput & keyof SuspendGameServerGroupInput & keyof SuspendGameServerGroupInput & keyof SuspendGameServerGroupInput]: (SuspendGameServerGroupInput & SuspendGameServerGroupInput & SuspendGameServerGroupInput & SuspendGameServerGroupInput)[K]
    }>): Request<SuspendGameServerGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.suspendGameServerGroup(
          this.ops["SuspendGameServerGroup"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasInput & keyof UpdateAliasInput & keyof UpdateAliasInput & keyof UpdateAliasInput]: (UpdateAliasInput & UpdateAliasInput & UpdateAliasInput & UpdateAliasInput)[K]
    }>): Request<UpdateAliasOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAlias(
          this.ops["UpdateAlias"].applicator.apply(partialParams)
        );
    }

    invokeUpdateBuild(partialParams: ToOptional<{
      [K in keyof UpdateBuildInput & keyof UpdateBuildInput & keyof UpdateBuildInput & keyof UpdateBuildInput]: (UpdateBuildInput & UpdateBuildInput & UpdateBuildInput & UpdateBuildInput)[K]
    }>): Request<UpdateBuildOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBuild(
          this.ops["UpdateBuild"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFleetAttributes(partialParams: ToOptional<{
      [K in keyof UpdateFleetAttributesInput & keyof UpdateFleetAttributesInput & keyof UpdateFleetAttributesInput & keyof UpdateFleetAttributesInput]: (UpdateFleetAttributesInput & UpdateFleetAttributesInput & UpdateFleetAttributesInput & UpdateFleetAttributesInput)[K]
    }>): Request<UpdateFleetAttributesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetAttributes(
          this.ops["UpdateFleetAttributes"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFleetCapacity(partialParams: ToOptional<{
      [K in keyof UpdateFleetCapacityInput & keyof UpdateFleetCapacityInput & keyof UpdateFleetCapacityInput & keyof UpdateFleetCapacityInput]: (UpdateFleetCapacityInput & UpdateFleetCapacityInput & UpdateFleetCapacityInput & UpdateFleetCapacityInput)[K]
    }>): Request<UpdateFleetCapacityOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetCapacity(
          this.ops["UpdateFleetCapacity"].applicator.apply(partialParams)
        );
    }

    invokeUpdateFleetPortSettings(partialParams: ToOptional<{
      [K in keyof UpdateFleetPortSettingsInput & keyof UpdateFleetPortSettingsInput & keyof UpdateFleetPortSettingsInput & keyof UpdateFleetPortSettingsInput]: (UpdateFleetPortSettingsInput & UpdateFleetPortSettingsInput & UpdateFleetPortSettingsInput & UpdateFleetPortSettingsInput)[K]
    }>): Request<UpdateFleetPortSettingsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetPortSettings(
          this.ops["UpdateFleetPortSettings"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGameServer(partialParams: ToOptional<{
      [K in keyof UpdateGameServerInput & keyof UpdateGameServerInput & keyof UpdateGameServerInput & keyof UpdateGameServerInput]: (UpdateGameServerInput & UpdateGameServerInput & UpdateGameServerInput & UpdateGameServerInput)[K]
    }>): Request<UpdateGameServerOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameServer(
          this.ops["UpdateGameServer"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGameServerGroup(partialParams: ToOptional<{
      [K in keyof UpdateGameServerGroupInput & keyof UpdateGameServerGroupInput & keyof UpdateGameServerGroupInput & keyof UpdateGameServerGroupInput]: (UpdateGameServerGroupInput & UpdateGameServerGroupInput & UpdateGameServerGroupInput & UpdateGameServerGroupInput)[K]
    }>): Request<UpdateGameServerGroupOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameServerGroup(
          this.ops["UpdateGameServerGroup"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGameSession(partialParams: ToOptional<{
      [K in keyof UpdateGameSessionInput & keyof UpdateGameSessionInput & keyof UpdateGameSessionInput & keyof UpdateGameSessionInput]: (UpdateGameSessionInput & UpdateGameSessionInput & UpdateGameSessionInput & UpdateGameSessionInput)[K]
    }>): Request<UpdateGameSessionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameSession(
          this.ops["UpdateGameSession"].applicator.apply(partialParams)
        );
    }

    invokeUpdateGameSessionQueue(partialParams: ToOptional<{
      [K in keyof UpdateGameSessionQueueInput & keyof Omit<UpdateGameSessionQueueInput, "Name"> & keyof UpdateGameSessionQueueInput & keyof UpdateGameSessionQueueInput]: (UpdateGameSessionQueueInput & Omit<UpdateGameSessionQueueInput, "Name"> & UpdateGameSessionQueueInput & UpdateGameSessionQueueInput)[K]
    }>): Request<UpdateGameSessionQueueOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameSessionQueue(
          this.ops["UpdateGameSessionQueue"].applicator.apply(partialParams)
        );
    }

    invokeUpdateMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateMatchmakingConfigurationInput & keyof Omit<UpdateMatchmakingConfigurationInput, "Name"> & keyof UpdateMatchmakingConfigurationInput & keyof UpdateMatchmakingConfigurationInput]: (UpdateMatchmakingConfigurationInput & Omit<UpdateMatchmakingConfigurationInput, "Name"> & UpdateMatchmakingConfigurationInput & UpdateMatchmakingConfigurationInput)[K]
    }>): Request<UpdateMatchmakingConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMatchmakingConfiguration(
          this.ops["UpdateMatchmakingConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRuntimeConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateRuntimeConfigurationInput & keyof UpdateRuntimeConfigurationInput & keyof UpdateRuntimeConfigurationInput & keyof UpdateRuntimeConfigurationInput]: (UpdateRuntimeConfigurationInput & UpdateRuntimeConfigurationInput & UpdateRuntimeConfigurationInput & UpdateRuntimeConfigurationInput)[K]
    }>): Request<UpdateRuntimeConfigurationOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRuntimeConfiguration(
          this.ops["UpdateRuntimeConfiguration"].applicator.apply(partialParams)
        );
    }

    invokeUpdateScript(partialParams: ToOptional<{
      [K in keyof UpdateScriptInput & keyof UpdateScriptInput & keyof UpdateScriptInput & keyof UpdateScriptInput]: (UpdateScriptInput & UpdateScriptInput & UpdateScriptInput & UpdateScriptInput)[K]
    }>): Request<UpdateScriptOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateScript(
          this.ops["UpdateScript"].applicator.apply(partialParams)
        );
    }

    invokeValidateMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof ValidateMatchmakingRuleSetInput & keyof ValidateMatchmakingRuleSetInput & keyof ValidateMatchmakingRuleSetInput & keyof ValidateMatchmakingRuleSetInput]: (ValidateMatchmakingRuleSetInput & ValidateMatchmakingRuleSetInput & ValidateMatchmakingRuleSetInput & ValidateMatchmakingRuleSetInput)[K]
    }>): Request<ValidateMatchmakingRuleSetOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateMatchmakingRuleSet(
          this.ops["ValidateMatchmakingRuleSet"].applicator.apply(partialParams)
        );
    }
}