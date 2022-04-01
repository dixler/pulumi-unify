
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptMatchInput,
    ClaimGameServerInput,
    CreateAliasInput,
    CreateBuildInput,
    CreateFleetInput,
    CreateFleetLocationsInput,
    CreateGameServerGroupInput,
    CreateGameSessionInput,
    CreateGameSessionQueueInput,
    CreateMatchmakingConfigurationInput,
    CreateMatchmakingRuleSetInput,
    CreatePlayerSessionInput,
    CreatePlayerSessionsInput,
    CreateScriptInput,
    CreateVpcPeeringAuthorizationInput,
    CreateVpcPeeringConnectionInput,
    DeleteFleetLocationsInput,
    DeleteGameServerGroupInput,
    DeleteGameSessionQueueInput,
    DeleteMatchmakingConfigurationInput,
    DeleteMatchmakingRuleSetInput,
    DeleteVpcPeeringAuthorizationInput,
    DeleteVpcPeeringConnectionInput,
    DescribeAliasInput,
    DescribeBuildInput,
    DescribeEC2InstanceLimitsInput,
    DescribeFleetAttributesInput,
    DescribeFleetCapacityInput,
    DescribeFleetEventsInput,
    DescribeFleetLocationAttributesInput,
    DescribeFleetLocationCapacityInput,
    DescribeFleetLocationUtilizationInput,
    DescribeFleetPortSettingsInput,
    DescribeFleetUtilizationInput,
    DescribeGameServerInput,
    DescribeGameServerGroupInput,
    DescribeGameServerInstancesInput,
    DescribeGameSessionDetailsInput,
    DescribeGameSessionPlacementInput,
    DescribeGameSessionQueuesInput,
    DescribeGameSessionsInput,
    DescribeInstancesInput,
    DescribeMatchmakingInput,
    DescribeMatchmakingConfigurationsInput,
    DescribeMatchmakingRuleSetsInput,
    DescribePlayerSessionsInput,
    DescribeRuntimeConfigurationInput,
    DescribeScalingPoliciesInput,
    DescribeScriptInput,
    DescribeVpcPeeringAuthorizationsInput,
    DescribeVpcPeeringConnectionsInput,
    GetGameSessionLogUrlInput,
    GetInstanceAccessInput,
    ListAliasesInput,
    ListBuildsInput,
    ListFleetsInput,
    ListGameServerGroupsInput,
    ListGameServersInput,
    ListScriptsInput,
    ListTagsForResourceRequest,
    PutScalingPolicyInput,
    RegisterGameServerInput,
    RequestUploadCredentialsInput,
    ResolveAliasInput,
    ResumeGameServerGroupInput,
    SearchGameSessionsInput,
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
    CreateBuildOutput,
    CreateFleetOutput,
    CreateFleetLocationsOutput,
    CreateGameServerGroupOutput,
    CreateGameSessionOutput,
    CreateGameSessionQueueOutput,
    CreateMatchmakingConfigurationOutput,
    CreateMatchmakingRuleSetOutput,
    CreatePlayerSessionOutput,
    CreatePlayerSessionsOutput,
    CreateScriptOutput,
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
    DescribeEC2InstanceLimitsOutput,
    DescribeFleetAttributesOutput,
    DescribeFleetCapacityOutput,
    DescribeFleetEventsOutput,
    DescribeFleetLocationAttributesOutput,
    DescribeFleetLocationCapacityOutput,
    DescribeFleetLocationUtilizationOutput,
    DescribeFleetPortSettingsOutput,
    DescribeFleetUtilizationOutput,
    DescribeGameServerOutput,
    DescribeGameServerGroupOutput,
    DescribeGameServerInstancesOutput,
    DescribeGameSessionDetailsOutput,
    DescribeGameSessionPlacementOutput,
    DescribeGameSessionQueuesOutput,
    DescribeGameSessionsOutput,
    DescribeInstancesOutput,
    DescribeMatchmakingOutput,
    DescribeMatchmakingConfigurationsOutput,
    DescribeMatchmakingRuleSetsOutput,
    DescribePlayerSessionsOutput,
    DescribeRuntimeConfigurationOutput,
    DescribeScalingPoliciesOutput,
    DescribeScriptOutput,
    DescribeVpcPeeringAuthorizationsOutput,
    DescribeVpcPeeringConnectionsOutput,
    GetGameSessionLogUrlOutput,
    GetInstanceAccessOutput,
    ListAliasesOutput,
    ListBuildsOutput,
    ListFleetsOutput,
    ListGameServerGroupsOutput,
    ListGameServersOutput,
    ListScriptsOutput,
    ListTagsForResourceResponse,
    PutScalingPolicyOutput,
    RegisterGameServerOutput,
    RequestUploadCredentialsOutput,
    ResolveAliasOutput,
    ResumeGameServerGroupOutput,
    SearchGameSessionsOutput,
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
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.gamelift.Build>) {
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

    invokeAcceptMatch(partialParams: ToOptional<{
      [K in keyof AcceptMatchInput]: (AcceptMatchInput)[K]
    }>): Request<AcceptMatchOutput, AWSError> {
        this.boot();
        return this.client.acceptMatch(
          this.ops["AcceptMatch"].apply(partialParams)
        );
    }

    invokeClaimGameServer(partialParams: ToOptional<{
      [K in keyof ClaimGameServerInput]: (ClaimGameServerInput)[K]
    }>): Request<ClaimGameServerOutput, AWSError> {
        this.boot();
        return this.client.claimGameServer(
          this.ops["ClaimGameServer"].apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasInput & keyof Omit<CreateAliasInput, "Name">]: (CreateAliasInput)[K]
    }>): Request<CreateAliasOutput, AWSError> {
        this.boot();
        return this.client.createAlias(
          this.ops["CreateAlias"].apply(partialParams)
        );
    }

    invokeCreateBuild(partialParams: ToOptional<{
      [K in keyof CreateBuildInput]: (CreateBuildInput)[K]
    }>): Request<CreateBuildOutput, AWSError> {
        this.boot();
        return this.client.createBuild(
          this.ops["CreateBuild"].apply(partialParams)
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

    invokeCreateFleetLocations(partialParams: ToOptional<{
      [K in keyof CreateFleetLocationsInput]: (CreateFleetLocationsInput)[K]
    }>): Request<CreateFleetLocationsOutput, AWSError> {
        this.boot();
        return this.client.createFleetLocations(
          this.ops["CreateFleetLocations"].apply(partialParams)
        );
    }

    invokeCreateGameServerGroup(partialParams: ToOptional<{
      [K in keyof CreateGameServerGroupInput]: (CreateGameServerGroupInput)[K]
    }>): Request<CreateGameServerGroupOutput, AWSError> {
        this.boot();
        return this.client.createGameServerGroup(
          this.ops["CreateGameServerGroup"].apply(partialParams)
        );
    }

    invokeCreateGameSession(partialParams: ToOptional<{
      [K in keyof CreateGameSessionInput]: (CreateGameSessionInput)[K]
    }>): Request<CreateGameSessionOutput, AWSError> {
        this.boot();
        return this.client.createGameSession(
          this.ops["CreateGameSession"].apply(partialParams)
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

    invokeCreatePlayerSession(partialParams: ToOptional<{
      [K in keyof CreatePlayerSessionInput]: (CreatePlayerSessionInput)[K]
    }>): Request<CreatePlayerSessionOutput, AWSError> {
        this.boot();
        return this.client.createPlayerSession(
          this.ops["CreatePlayerSession"].apply(partialParams)
        );
    }

    invokeCreatePlayerSessions(partialParams: ToOptional<{
      [K in keyof CreatePlayerSessionsInput]: (CreatePlayerSessionsInput)[K]
    }>): Request<CreatePlayerSessionsOutput, AWSError> {
        this.boot();
        return this.client.createPlayerSessions(
          this.ops["CreatePlayerSessions"].apply(partialParams)
        );
    }

    invokeCreateScript(partialParams: ToOptional<{
      [K in keyof CreateScriptInput]: (CreateScriptInput)[K]
    }>): Request<CreateScriptOutput, AWSError> {
        this.boot();
        return this.client.createScript(
          this.ops["CreateScript"].apply(partialParams)
        );
    }

    invokeCreateVpcPeeringAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringAuthorizationInput]: (CreateVpcPeeringAuthorizationInput)[K]
    }>): Request<CreateVpcPeeringAuthorizationOutput, AWSError> {
        this.boot();
        return this.client.createVpcPeeringAuthorization(
          this.ops["CreateVpcPeeringAuthorization"].apply(partialParams)
        );
    }

    invokeCreateVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringConnectionInput]: (CreateVpcPeeringConnectionInput)[K]
    }>): Request<CreateVpcPeeringConnectionOutput, AWSError> {
        this.boot();
        return this.client.createVpcPeeringConnection(
          this.ops["CreateVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDeleteFleetLocations(partialParams: ToOptional<{
      [K in keyof DeleteFleetLocationsInput]: (DeleteFleetLocationsInput)[K]
    }>): Request<DeleteFleetLocationsOutput, AWSError> {
        this.boot();
        return this.client.deleteFleetLocations(
          this.ops["DeleteFleetLocations"].apply(partialParams)
        );
    }

    invokeDeleteGameServerGroup(partialParams: ToOptional<{
      [K in keyof DeleteGameServerGroupInput]: (DeleteGameServerGroupInput)[K]
    }>): Request<DeleteGameServerGroupOutput, AWSError> {
        this.boot();
        return this.client.deleteGameServerGroup(
          this.ops["DeleteGameServerGroup"].apply(partialParams)
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

    invokeDeleteVpcPeeringAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringAuthorizationInput]: (DeleteVpcPeeringAuthorizationInput)[K]
    }>): Request<DeleteVpcPeeringAuthorizationOutput, AWSError> {
        this.boot();
        return this.client.deleteVpcPeeringAuthorization(
          this.ops["DeleteVpcPeeringAuthorization"].apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionInput]: (DeleteVpcPeeringConnectionInput)[K]
    }>): Request<DeleteVpcPeeringConnectionOutput, AWSError> {
        this.boot();
        return this.client.deleteVpcPeeringConnection(
          this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDescribeAlias(partialParams: ToOptional<{
      [K in keyof DescribeAliasInput]: (DescribeAliasInput)[K]
    }>): Request<DescribeAliasOutput, AWSError> {
        this.boot();
        return this.client.describeAlias(
          this.ops["DescribeAlias"].apply(partialParams)
        );
    }

    invokeDescribeBuild(partialParams: ToOptional<{
      [K in keyof DescribeBuildInput]: (DescribeBuildInput)[K]
    }>): Request<DescribeBuildOutput, AWSError> {
        this.boot();
        return this.client.describeBuild(
          this.ops["DescribeBuild"].apply(partialParams)
        );
    }

    invokeDescribeEC2InstanceLimits(partialParams: ToOptional<{
      [K in keyof DescribeEC2InstanceLimitsInput]: (DescribeEC2InstanceLimitsInput)[K]
    }>): Request<DescribeEC2InstanceLimitsOutput, AWSError> {
        this.boot();
        return this.client.describeEC2InstanceLimits(
          this.ops["DescribeEC2InstanceLimits"].apply(partialParams)
        );
    }

    invokeDescribeFleetAttributes(partialParams: ToOptional<{
      [K in keyof DescribeFleetAttributesInput]: (DescribeFleetAttributesInput)[K]
    }>): Request<DescribeFleetAttributesOutput, AWSError> {
        this.boot();
        return this.client.describeFleetAttributes(
          this.ops["DescribeFleetAttributes"].apply(partialParams)
        );
    }

    invokeDescribeFleetCapacity(partialParams: ToOptional<{
      [K in keyof DescribeFleetCapacityInput]: (DescribeFleetCapacityInput)[K]
    }>): Request<DescribeFleetCapacityOutput, AWSError> {
        this.boot();
        return this.client.describeFleetCapacity(
          this.ops["DescribeFleetCapacity"].apply(partialParams)
        );
    }

    invokeDescribeFleetEvents(partialParams: ToOptional<{
      [K in keyof DescribeFleetEventsInput]: (DescribeFleetEventsInput)[K]
    }>): Request<DescribeFleetEventsOutput, AWSError> {
        this.boot();
        return this.client.describeFleetEvents(
          this.ops["DescribeFleetEvents"].apply(partialParams)
        );
    }

    invokeDescribeFleetLocationAttributes(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationAttributesInput]: (DescribeFleetLocationAttributesInput)[K]
    }>): Request<DescribeFleetLocationAttributesOutput, AWSError> {
        this.boot();
        return this.client.describeFleetLocationAttributes(
          this.ops["DescribeFleetLocationAttributes"].apply(partialParams)
        );
    }

    invokeDescribeFleetLocationCapacity(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationCapacityInput]: (DescribeFleetLocationCapacityInput)[K]
    }>): Request<DescribeFleetLocationCapacityOutput, AWSError> {
        this.boot();
        return this.client.describeFleetLocationCapacity(
          this.ops["DescribeFleetLocationCapacity"].apply(partialParams)
        );
    }

    invokeDescribeFleetLocationUtilization(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationUtilizationInput]: (DescribeFleetLocationUtilizationInput)[K]
    }>): Request<DescribeFleetLocationUtilizationOutput, AWSError> {
        this.boot();
        return this.client.describeFleetLocationUtilization(
          this.ops["DescribeFleetLocationUtilization"].apply(partialParams)
        );
    }

    invokeDescribeFleetPortSettings(partialParams: ToOptional<{
      [K in keyof DescribeFleetPortSettingsInput]: (DescribeFleetPortSettingsInput)[K]
    }>): Request<DescribeFleetPortSettingsOutput, AWSError> {
        this.boot();
        return this.client.describeFleetPortSettings(
          this.ops["DescribeFleetPortSettings"].apply(partialParams)
        );
    }

    invokeDescribeFleetUtilization(partialParams: ToOptional<{
      [K in keyof DescribeFleetUtilizationInput]: (DescribeFleetUtilizationInput)[K]
    }>): Request<DescribeFleetUtilizationOutput, AWSError> {
        this.boot();
        return this.client.describeFleetUtilization(
          this.ops["DescribeFleetUtilization"].apply(partialParams)
        );
    }

    invokeDescribeGameServer(partialParams: ToOptional<{
      [K in keyof DescribeGameServerInput]: (DescribeGameServerInput)[K]
    }>): Request<DescribeGameServerOutput, AWSError> {
        this.boot();
        return this.client.describeGameServer(
          this.ops["DescribeGameServer"].apply(partialParams)
        );
    }

    invokeDescribeGameServerGroup(partialParams: ToOptional<{
      [K in keyof DescribeGameServerGroupInput]: (DescribeGameServerGroupInput)[K]
    }>): Request<DescribeGameServerGroupOutput, AWSError> {
        this.boot();
        return this.client.describeGameServerGroup(
          this.ops["DescribeGameServerGroup"].apply(partialParams)
        );
    }

    invokeDescribeGameServerInstances(partialParams: ToOptional<{
      [K in keyof DescribeGameServerInstancesInput]: (DescribeGameServerInstancesInput)[K]
    }>): Request<DescribeGameServerInstancesOutput, AWSError> {
        this.boot();
        return this.client.describeGameServerInstances(
          this.ops["DescribeGameServerInstances"].apply(partialParams)
        );
    }

    invokeDescribeGameSessionDetails(partialParams: ToOptional<{
      [K in keyof DescribeGameSessionDetailsInput]: (DescribeGameSessionDetailsInput)[K]
    }>): Request<DescribeGameSessionDetailsOutput, AWSError> {
        this.boot();
        return this.client.describeGameSessionDetails(
          this.ops["DescribeGameSessionDetails"].apply(partialParams)
        );
    }

    invokeDescribeGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof DescribeGameSessionPlacementInput]: (DescribeGameSessionPlacementInput)[K]
    }>): Request<DescribeGameSessionPlacementOutput, AWSError> {
        this.boot();
        return this.client.describeGameSessionPlacement(
          this.ops["DescribeGameSessionPlacement"].apply(partialParams)
        );
    }

    invokeDescribeGameSessionQueues(partialParams: ToOptional<{
      [K in keyof DescribeGameSessionQueuesInput]: (DescribeGameSessionQueuesInput)[K]
    }>): Request<DescribeGameSessionQueuesOutput, AWSError> {
        this.boot();
        return this.client.describeGameSessionQueues(
          this.ops["DescribeGameSessionQueues"].apply(partialParams)
        );
    }

    invokeDescribeGameSessions(partialParams: ToOptional<{
      [K in keyof DescribeGameSessionsInput]: (DescribeGameSessionsInput)[K]
    }>): Request<DescribeGameSessionsOutput, AWSError> {
        this.boot();
        return this.client.describeGameSessions(
          this.ops["DescribeGameSessions"].apply(partialParams)
        );
    }

    invokeDescribeInstances(partialParams: ToOptional<{
      [K in keyof DescribeInstancesInput]: (DescribeInstancesInput)[K]
    }>): Request<DescribeInstancesOutput, AWSError> {
        this.boot();
        return this.client.describeInstances(
          this.ops["DescribeInstances"].apply(partialParams)
        );
    }

    invokeDescribeMatchmaking(partialParams: ToOptional<{
      [K in keyof DescribeMatchmakingInput]: (DescribeMatchmakingInput)[K]
    }>): Request<DescribeMatchmakingOutput, AWSError> {
        this.boot();
        return this.client.describeMatchmaking(
          this.ops["DescribeMatchmaking"].apply(partialParams)
        );
    }

    invokeDescribeMatchmakingConfigurations(partialParams: ToOptional<{
      [K in keyof DescribeMatchmakingConfigurationsInput]: (DescribeMatchmakingConfigurationsInput)[K]
    }>): Request<DescribeMatchmakingConfigurationsOutput, AWSError> {
        this.boot();
        return this.client.describeMatchmakingConfigurations(
          this.ops["DescribeMatchmakingConfigurations"].apply(partialParams)
        );
    }

    invokeDescribeMatchmakingRuleSets(partialParams: ToOptional<{
      [K in keyof DescribeMatchmakingRuleSetsInput]: (DescribeMatchmakingRuleSetsInput)[K]
    }>): Request<DescribeMatchmakingRuleSetsOutput, AWSError> {
        this.boot();
        return this.client.describeMatchmakingRuleSets(
          this.ops["DescribeMatchmakingRuleSets"].apply(partialParams)
        );
    }

    invokeDescribePlayerSessions(partialParams: ToOptional<{
      [K in keyof DescribePlayerSessionsInput]: (DescribePlayerSessionsInput)[K]
    }>): Request<DescribePlayerSessionsOutput, AWSError> {
        this.boot();
        return this.client.describePlayerSessions(
          this.ops["DescribePlayerSessions"].apply(partialParams)
        );
    }

    invokeDescribeRuntimeConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRuntimeConfigurationInput]: (DescribeRuntimeConfigurationInput)[K]
    }>): Request<DescribeRuntimeConfigurationOutput, AWSError> {
        this.boot();
        return this.client.describeRuntimeConfiguration(
          this.ops["DescribeRuntimeConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeScalingPolicies(partialParams: ToOptional<{
      [K in keyof DescribeScalingPoliciesInput]: (DescribeScalingPoliciesInput)[K]
    }>): Request<DescribeScalingPoliciesOutput, AWSError> {
        this.boot();
        return this.client.describeScalingPolicies(
          this.ops["DescribeScalingPolicies"].apply(partialParams)
        );
    }

    invokeDescribeScript(partialParams: ToOptional<{
      [K in keyof DescribeScriptInput]: (DescribeScriptInput)[K]
    }>): Request<DescribeScriptOutput, AWSError> {
        this.boot();
        return this.client.describeScript(
          this.ops["DescribeScript"].apply(partialParams)
        );
    }

    invokeDescribeVpcPeeringAuthorizations(partialParams: ToOptional<{
      [K in keyof DescribeVpcPeeringAuthorizationsInput]: (DescribeVpcPeeringAuthorizationsInput)[K]
    }>): Request<DescribeVpcPeeringAuthorizationsOutput, AWSError> {
        this.boot();
        return this.client.describeVpcPeeringAuthorizations(
          this.ops["DescribeVpcPeeringAuthorizations"].apply(partialParams)
        );
    }

    invokeDescribeVpcPeeringConnections(partialParams: ToOptional<{
      [K in keyof DescribeVpcPeeringConnectionsInput]: (DescribeVpcPeeringConnectionsInput)[K]
    }>): Request<DescribeVpcPeeringConnectionsOutput, AWSError> {
        this.boot();
        return this.client.describeVpcPeeringConnections(
          this.ops["DescribeVpcPeeringConnections"].apply(partialParams)
        );
    }

    invokeGetGameSessionLogUrl(partialParams: ToOptional<{
      [K in keyof GetGameSessionLogUrlInput]: (GetGameSessionLogUrlInput)[K]
    }>): Request<GetGameSessionLogUrlOutput, AWSError> {
        this.boot();
        return this.client.getGameSessionLogUrl(
          this.ops["GetGameSessionLogUrl"].apply(partialParams)
        );
    }

    invokeGetInstanceAccess(partialParams: ToOptional<{
      [K in keyof GetInstanceAccessInput]: (GetInstanceAccessInput)[K]
    }>): Request<GetInstanceAccessOutput, AWSError> {
        this.boot();
        return this.client.getInstanceAccess(
          this.ops["GetInstanceAccess"].apply(partialParams)
        );
    }

    invokeListAliases(partialParams: ToOptional<{
      [K in keyof ListAliasesInput]: (ListAliasesInput)[K]
    }>): Request<ListAliasesOutput, AWSError> {
        this.boot();
        return this.client.listAliases(
          this.ops["ListAliases"].apply(partialParams)
        );
    }

    invokeListBuilds(partialParams: ToOptional<{
      [K in keyof ListBuildsInput]: (ListBuildsInput)[K]
    }>): Request<ListBuildsOutput, AWSError> {
        this.boot();
        return this.client.listBuilds(
          this.ops["ListBuilds"].apply(partialParams)
        );
    }

    invokeListFleets(partialParams: ToOptional<{
      [K in keyof ListFleetsInput]: (ListFleetsInput)[K]
    }>): Request<ListFleetsOutput, AWSError> {
        this.boot();
        return this.client.listFleets(
          this.ops["ListFleets"].apply(partialParams)
        );
    }

    invokeListGameServerGroups(partialParams: ToOptional<{
      [K in keyof ListGameServerGroupsInput]: (ListGameServerGroupsInput)[K]
    }>): Request<ListGameServerGroupsOutput, AWSError> {
        this.boot();
        return this.client.listGameServerGroups(
          this.ops["ListGameServerGroups"].apply(partialParams)
        );
    }

    invokeListGameServers(partialParams: ToOptional<{
      [K in keyof ListGameServersInput]: (ListGameServersInput)[K]
    }>): Request<ListGameServersOutput, AWSError> {
        this.boot();
        return this.client.listGameServers(
          this.ops["ListGameServers"].apply(partialParams)
        );
    }

    invokeListScripts(partialParams: ToOptional<{
      [K in keyof ListScriptsInput]: (ListScriptsInput)[K]
    }>): Request<ListScriptsOutput, AWSError> {
        this.boot();
        return this.client.listScripts(
          this.ops["ListScripts"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
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

    invokeRegisterGameServer(partialParams: ToOptional<{
      [K in keyof RegisterGameServerInput]: (RegisterGameServerInput)[K]
    }>): Request<RegisterGameServerOutput, AWSError> {
        this.boot();
        return this.client.registerGameServer(
          this.ops["RegisterGameServer"].apply(partialParams)
        );
    }

    invokeRequestUploadCredentials(partialParams: ToOptional<{
      [K in keyof RequestUploadCredentialsInput]: (RequestUploadCredentialsInput)[K]
    }>): Request<RequestUploadCredentialsOutput, AWSError> {
        this.boot();
        return this.client.requestUploadCredentials(
          this.ops["RequestUploadCredentials"].apply(partialParams)
        );
    }

    invokeResolveAlias(partialParams: ToOptional<{
      [K in keyof ResolveAliasInput]: (ResolveAliasInput)[K]
    }>): Request<ResolveAliasOutput, AWSError> {
        this.boot();
        return this.client.resolveAlias(
          this.ops["ResolveAlias"].apply(partialParams)
        );
    }

    invokeResumeGameServerGroup(partialParams: ToOptional<{
      [K in keyof ResumeGameServerGroupInput]: (ResumeGameServerGroupInput)[K]
    }>): Request<ResumeGameServerGroupOutput, AWSError> {
        this.boot();
        return this.client.resumeGameServerGroup(
          this.ops["ResumeGameServerGroup"].apply(partialParams)
        );
    }

    invokeSearchGameSessions(partialParams: ToOptional<{
      [K in keyof SearchGameSessionsInput]: (SearchGameSessionsInput)[K]
    }>): Request<SearchGameSessionsOutput, AWSError> {
        this.boot();
        return this.client.searchGameSessions(
          this.ops["SearchGameSessions"].apply(partialParams)
        );
    }

    invokeStartFleetActions(partialParams: ToOptional<{
      [K in keyof StartFleetActionsInput]: (StartFleetActionsInput)[K]
    }>): Request<StartFleetActionsOutput, AWSError> {
        this.boot();
        return this.client.startFleetActions(
          this.ops["StartFleetActions"].apply(partialParams)
        );
    }

    invokeStartGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof StartGameSessionPlacementInput]: (StartGameSessionPlacementInput)[K]
    }>): Request<StartGameSessionPlacementOutput, AWSError> {
        this.boot();
        return this.client.startGameSessionPlacement(
          this.ops["StartGameSessionPlacement"].apply(partialParams)
        );
    }

    invokeStartMatchBackfill(partialParams: ToOptional<{
      [K in keyof StartMatchBackfillInput]: (StartMatchBackfillInput)[K]
    }>): Request<StartMatchBackfillOutput, AWSError> {
        this.boot();
        return this.client.startMatchBackfill(
          this.ops["StartMatchBackfill"].apply(partialParams)
        );
    }

    invokeStartMatchmaking(partialParams: ToOptional<{
      [K in keyof StartMatchmakingInput]: (StartMatchmakingInput)[K]
    }>): Request<StartMatchmakingOutput, AWSError> {
        this.boot();
        return this.client.startMatchmaking(
          this.ops["StartMatchmaking"].apply(partialParams)
        );
    }

    invokeStopFleetActions(partialParams: ToOptional<{
      [K in keyof StopFleetActionsInput]: (StopFleetActionsInput)[K]
    }>): Request<StopFleetActionsOutput, AWSError> {
        this.boot();
        return this.client.stopFleetActions(
          this.ops["StopFleetActions"].apply(partialParams)
        );
    }

    invokeStopGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof StopGameSessionPlacementInput]: (StopGameSessionPlacementInput)[K]
    }>): Request<StopGameSessionPlacementOutput, AWSError> {
        this.boot();
        return this.client.stopGameSessionPlacement(
          this.ops["StopGameSessionPlacement"].apply(partialParams)
        );
    }

    invokeStopMatchmaking(partialParams: ToOptional<{
      [K in keyof StopMatchmakingInput]: (StopMatchmakingInput)[K]
    }>): Request<StopMatchmakingOutput, AWSError> {
        this.boot();
        return this.client.stopMatchmaking(
          this.ops["StopMatchmaking"].apply(partialParams)
        );
    }

    invokeSuspendGameServerGroup(partialParams: ToOptional<{
      [K in keyof SuspendGameServerGroupInput]: (SuspendGameServerGroupInput)[K]
    }>): Request<SuspendGameServerGroupOutput, AWSError> {
        this.boot();
        return this.client.suspendGameServerGroup(
          this.ops["SuspendGameServerGroup"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasInput]: (UpdateAliasInput)[K]
    }>): Request<UpdateAliasOutput, AWSError> {
        this.boot();
        return this.client.updateAlias(
          this.ops["UpdateAlias"].apply(partialParams)
        );
    }

    invokeUpdateBuild(partialParams: ToOptional<{
      [K in keyof UpdateBuildInput]: (UpdateBuildInput)[K]
    }>): Request<UpdateBuildOutput, AWSError> {
        this.boot();
        return this.client.updateBuild(
          this.ops["UpdateBuild"].apply(partialParams)
        );
    }

    invokeUpdateFleetAttributes(partialParams: ToOptional<{
      [K in keyof UpdateFleetAttributesInput]: (UpdateFleetAttributesInput)[K]
    }>): Request<UpdateFleetAttributesOutput, AWSError> {
        this.boot();
        return this.client.updateFleetAttributes(
          this.ops["UpdateFleetAttributes"].apply(partialParams)
        );
    }

    invokeUpdateFleetCapacity(partialParams: ToOptional<{
      [K in keyof UpdateFleetCapacityInput]: (UpdateFleetCapacityInput)[K]
    }>): Request<UpdateFleetCapacityOutput, AWSError> {
        this.boot();
        return this.client.updateFleetCapacity(
          this.ops["UpdateFleetCapacity"].apply(partialParams)
        );
    }

    invokeUpdateFleetPortSettings(partialParams: ToOptional<{
      [K in keyof UpdateFleetPortSettingsInput]: (UpdateFleetPortSettingsInput)[K]
    }>): Request<UpdateFleetPortSettingsOutput, AWSError> {
        this.boot();
        return this.client.updateFleetPortSettings(
          this.ops["UpdateFleetPortSettings"].apply(partialParams)
        );
    }

    invokeUpdateGameServer(partialParams: ToOptional<{
      [K in keyof UpdateGameServerInput]: (UpdateGameServerInput)[K]
    }>): Request<UpdateGameServerOutput, AWSError> {
        this.boot();
        return this.client.updateGameServer(
          this.ops["UpdateGameServer"].apply(partialParams)
        );
    }

    invokeUpdateGameServerGroup(partialParams: ToOptional<{
      [K in keyof UpdateGameServerGroupInput]: (UpdateGameServerGroupInput)[K]
    }>): Request<UpdateGameServerGroupOutput, AWSError> {
        this.boot();
        return this.client.updateGameServerGroup(
          this.ops["UpdateGameServerGroup"].apply(partialParams)
        );
    }

    invokeUpdateGameSession(partialParams: ToOptional<{
      [K in keyof UpdateGameSessionInput]: (UpdateGameSessionInput)[K]
    }>): Request<UpdateGameSessionOutput, AWSError> {
        this.boot();
        return this.client.updateGameSession(
          this.ops["UpdateGameSession"].apply(partialParams)
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

    invokeUpdateRuntimeConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateRuntimeConfigurationInput]: (UpdateRuntimeConfigurationInput)[K]
    }>): Request<UpdateRuntimeConfigurationOutput, AWSError> {
        this.boot();
        return this.client.updateRuntimeConfiguration(
          this.ops["UpdateRuntimeConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateScript(partialParams: ToOptional<{
      [K in keyof UpdateScriptInput]: (UpdateScriptInput)[K]
    }>): Request<UpdateScriptOutput, AWSError> {
        this.boot();
        return this.client.updateScript(
          this.ops["UpdateScript"].apply(partialParams)
        );
    }

    invokeValidateMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof ValidateMatchmakingRuleSetInput]: (ValidateMatchmakingRuleSetInput)[K]
    }>): Request<ValidateMatchmakingRuleSetOutput, AWSError> {
        this.boot();
        return this.client.validateMatchmakingRuleSet(
          this.ops["ValidateMatchmakingRuleSet"].apply(partialParams)
        );
    }
}