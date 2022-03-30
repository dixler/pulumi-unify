
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.gamelift.Build {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.gamelift.Build>) {
        super(...args)
        this.client = new awssdk.GameLift()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/gamelift-2015-10-01.normal.json"), this.client)
    }

    invokeAcceptMatch(partialParams: ToOptional<{
      [K in keyof AcceptMatchInput & keyof AcceptMatchInput & keyof AcceptMatchInput & keyof AcceptMatchInput]: (AcceptMatchInput & AcceptMatchInput & AcceptMatchInput & AcceptMatchInput)[K]
    }>): AcceptMatchOutput {
        return this.client.acceptMatch(
            this.ops["AcceptMatch"].apply(partialParams)
        );
    }

    invokeClaimGameServer(partialParams: ToOptional<{
      [K in keyof ClaimGameServerInput & keyof ClaimGameServerInput & keyof ClaimGameServerInput & keyof ClaimGameServerInput]: (ClaimGameServerInput & ClaimGameServerInput & ClaimGameServerInput & ClaimGameServerInput)[K]
    }>): ClaimGameServerOutput {
        return this.client.claimGameServer(
            this.ops["ClaimGameServer"].apply(partialParams)
        );
    }

    invokeCreateAlias(partialParams: ToOptional<{
      [K in keyof CreateAliasInput & keyof CreateAliasInput & keyof CreateAliasInput & keyof CreateAliasInput]: (CreateAliasInput & CreateAliasInput & CreateAliasInput & CreateAliasInput)[K]
    }>): CreateAliasOutput {
        return this.client.createAlias(
            this.ops["CreateAlias"].apply(partialParams)
        );
    }

    invokeCreateFleet(partialParams: ToOptional<{
      [K in keyof CreateFleetInput & keyof CreateFleetInput & keyof CreateFleetInput & keyof CreateFleetInput]: (CreateFleetInput & CreateFleetInput & CreateFleetInput & CreateFleetInput)[K]
    }>): CreateFleetOutput {
        return this.client.createFleet(
            this.ops["CreateFleet"].apply(partialParams)
        );
    }

    invokeCreateFleetLocations(partialParams: ToOptional<{
      [K in keyof CreateFleetLocationsInput & keyof CreateFleetLocationsInput & keyof CreateFleetLocationsInput & keyof CreateFleetLocationsInput]: (CreateFleetLocationsInput & CreateFleetLocationsInput & CreateFleetLocationsInput & CreateFleetLocationsInput)[K]
    }>): CreateFleetLocationsOutput {
        return this.client.createFleetLocations(
            this.ops["CreateFleetLocations"].apply(partialParams)
        );
    }

    invokeCreateGameServerGroup(partialParams: ToOptional<{
      [K in keyof CreateGameServerGroupInput & keyof CreateGameServerGroupInput & keyof CreateGameServerGroupInput & keyof CreateGameServerGroupInput]: (CreateGameServerGroupInput & CreateGameServerGroupInput & CreateGameServerGroupInput & CreateGameServerGroupInput)[K]
    }>): CreateGameServerGroupOutput {
        return this.client.createGameServerGroup(
            this.ops["CreateGameServerGroup"].apply(partialParams)
        );
    }

    invokeCreateGameSession(partialParams: ToOptional<{
      [K in keyof CreateGameSessionInput & keyof CreateGameSessionInput & keyof CreateGameSessionInput & keyof CreateGameSessionInput]: (CreateGameSessionInput & CreateGameSessionInput & CreateGameSessionInput & CreateGameSessionInput)[K]
    }>): CreateGameSessionOutput {
        return this.client.createGameSession(
            this.ops["CreateGameSession"].apply(partialParams)
        );
    }

    invokeCreateGameSessionQueue(partialParams: ToOptional<{
      [K in keyof CreateGameSessionQueueInput & keyof CreateGameSessionQueueInput & keyof CreateGameSessionQueueInput & keyof CreateGameSessionQueueInput]: (CreateGameSessionQueueInput & CreateGameSessionQueueInput & CreateGameSessionQueueInput & CreateGameSessionQueueInput)[K]
    }>): CreateGameSessionQueueOutput {
        return this.client.createGameSessionQueue(
            this.ops["CreateGameSessionQueue"].apply(partialParams)
        );
    }

    invokeCreateMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof CreateMatchmakingConfigurationInput & keyof CreateMatchmakingConfigurationInput & keyof CreateMatchmakingConfigurationInput & keyof CreateMatchmakingConfigurationInput]: (CreateMatchmakingConfigurationInput & CreateMatchmakingConfigurationInput & CreateMatchmakingConfigurationInput & CreateMatchmakingConfigurationInput)[K]
    }>): CreateMatchmakingConfigurationOutput {
        return this.client.createMatchmakingConfiguration(
            this.ops["CreateMatchmakingConfiguration"].apply(partialParams)
        );
    }

    invokeCreateMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof CreateMatchmakingRuleSetInput & keyof CreateMatchmakingRuleSetInput & keyof CreateMatchmakingRuleSetInput & keyof CreateMatchmakingRuleSetInput]: (CreateMatchmakingRuleSetInput & CreateMatchmakingRuleSetInput & CreateMatchmakingRuleSetInput & CreateMatchmakingRuleSetInput)[K]
    }>): CreateMatchmakingRuleSetOutput {
        return this.client.createMatchmakingRuleSet(
            this.ops["CreateMatchmakingRuleSet"].apply(partialParams)
        );
    }

    invokeCreatePlayerSession(partialParams: ToOptional<{
      [K in keyof CreatePlayerSessionInput & keyof CreatePlayerSessionInput & keyof CreatePlayerSessionInput & keyof CreatePlayerSessionInput]: (CreatePlayerSessionInput & CreatePlayerSessionInput & CreatePlayerSessionInput & CreatePlayerSessionInput)[K]
    }>): CreatePlayerSessionOutput {
        return this.client.createPlayerSession(
            this.ops["CreatePlayerSession"].apply(partialParams)
        );
    }

    invokeCreatePlayerSessions(partialParams: ToOptional<{
      [K in keyof CreatePlayerSessionsInput & keyof CreatePlayerSessionsInput & keyof CreatePlayerSessionsInput & keyof CreatePlayerSessionsInput]: (CreatePlayerSessionsInput & CreatePlayerSessionsInput & CreatePlayerSessionsInput & CreatePlayerSessionsInput)[K]
    }>): CreatePlayerSessionsOutput {
        return this.client.createPlayerSessions(
            this.ops["CreatePlayerSessions"].apply(partialParams)
        );
    }

    invokeCreateVpcPeeringAuthorization(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringAuthorizationInput & keyof CreateVpcPeeringAuthorizationInput & keyof CreateVpcPeeringAuthorizationInput & keyof CreateVpcPeeringAuthorizationInput]: (CreateVpcPeeringAuthorizationInput & CreateVpcPeeringAuthorizationInput & CreateVpcPeeringAuthorizationInput & CreateVpcPeeringAuthorizationInput)[K]
    }>): CreateVpcPeeringAuthorizationOutput {
        return this.client.createVpcPeeringAuthorization(
            this.ops["CreateVpcPeeringAuthorization"].apply(partialParams)
        );
    }

    invokeCreateVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof CreateVpcPeeringConnectionInput & keyof CreateVpcPeeringConnectionInput & keyof CreateVpcPeeringConnectionInput & keyof CreateVpcPeeringConnectionInput]: (CreateVpcPeeringConnectionInput & CreateVpcPeeringConnectionInput & CreateVpcPeeringConnectionInput & CreateVpcPeeringConnectionInput)[K]
    }>): CreateVpcPeeringConnectionOutput {
        return this.client.createVpcPeeringConnection(
            this.ops["CreateVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDeleteAlias(partialParams: ToOptional<{
      [K in keyof DeleteAliasInput & keyof DeleteAliasInput & keyof DeleteAliasInput & keyof DeleteAliasInput]: (DeleteAliasInput & DeleteAliasInput & DeleteAliasInput & DeleteAliasInput)[K]
    }>): void {
        return this.client.deleteAlias(
            this.ops["DeleteAlias"].apply(partialParams)
        );
    }

    invokeDeleteBuild(partialParams: ToOptional<{
      [K in keyof DeleteBuildInput & keyof DeleteBuildInput & keyof DeleteBuildInput & keyof DeleteBuildInput]: (DeleteBuildInput & DeleteBuildInput & DeleteBuildInput & DeleteBuildInput)[K]
    }>): void {
        return this.client.deleteBuild(
            this.ops["DeleteBuild"].apply(partialParams)
        );
    }

    invokeDeleteFleet(partialParams: ToOptional<{
      [K in keyof DeleteFleetInput & keyof DeleteFleetInput & keyof DeleteFleetInput & keyof DeleteFleetInput]: (DeleteFleetInput & DeleteFleetInput & DeleteFleetInput & DeleteFleetInput)[K]
    }>): void {
        return this.client.deleteFleet(
            this.ops["DeleteFleet"].apply(partialParams)
        );
    }

    invokeDeleteFleetLocations(partialParams: ToOptional<{
      [K in keyof DeleteFleetLocationsInput & keyof DeleteFleetLocationsInput & keyof DeleteFleetLocationsInput & keyof DeleteFleetLocationsInput]: (DeleteFleetLocationsInput & DeleteFleetLocationsInput & DeleteFleetLocationsInput & DeleteFleetLocationsInput)[K]
    }>): DeleteFleetLocationsOutput {
        return this.client.deleteFleetLocations(
            this.ops["DeleteFleetLocations"].apply(partialParams)
        );
    }

    invokeDeleteGameServerGroup(partialParams: ToOptional<{
      [K in keyof DeleteGameServerGroupInput & keyof DeleteGameServerGroupInput & keyof DeleteGameServerGroupInput & keyof DeleteGameServerGroupInput]: (DeleteGameServerGroupInput & DeleteGameServerGroupInput & DeleteGameServerGroupInput & DeleteGameServerGroupInput)[K]
    }>): DeleteGameServerGroupOutput {
        return this.client.deleteGameServerGroup(
            this.ops["DeleteGameServerGroup"].apply(partialParams)
        );
    }

    invokeDeleteGameSessionQueue(partialParams: ToOptional<{
      [K in keyof DeleteGameSessionQueueInput & keyof DeleteGameSessionQueueInput & keyof DeleteGameSessionQueueInput & keyof DeleteGameSessionQueueInput]: (DeleteGameSessionQueueInput & DeleteGameSessionQueueInput & DeleteGameSessionQueueInput & DeleteGameSessionQueueInput)[K]
    }>): DeleteGameSessionQueueOutput {
        return this.client.deleteGameSessionQueue(
            this.ops["DeleteGameSessionQueue"].apply(partialParams)
        );
    }

    invokeDeleteMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof DeleteMatchmakingConfigurationInput & keyof DeleteMatchmakingConfigurationInput & keyof DeleteMatchmakingConfigurationInput & keyof DeleteMatchmakingConfigurationInput]: (DeleteMatchmakingConfigurationInput & DeleteMatchmakingConfigurationInput & DeleteMatchmakingConfigurationInput & DeleteMatchmakingConfigurationInput)[K]
    }>): DeleteMatchmakingConfigurationOutput {
        return this.client.deleteMatchmakingConfiguration(
            this.ops["DeleteMatchmakingConfiguration"].apply(partialParams)
        );
    }

    invokeDeleteMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof DeleteMatchmakingRuleSetInput & keyof DeleteMatchmakingRuleSetInput & keyof DeleteMatchmakingRuleSetInput & keyof DeleteMatchmakingRuleSetInput]: (DeleteMatchmakingRuleSetInput & DeleteMatchmakingRuleSetInput & DeleteMatchmakingRuleSetInput & DeleteMatchmakingRuleSetInput)[K]
    }>): DeleteMatchmakingRuleSetOutput {
        return this.client.deleteMatchmakingRuleSet(
            this.ops["DeleteMatchmakingRuleSet"].apply(partialParams)
        );
    }

    invokeDeleteScalingPolicy(partialParams: ToOptional<{
      [K in keyof DeleteScalingPolicyInput & keyof DeleteScalingPolicyInput & keyof DeleteScalingPolicyInput & keyof DeleteScalingPolicyInput]: (DeleteScalingPolicyInput & DeleteScalingPolicyInput & DeleteScalingPolicyInput & DeleteScalingPolicyInput)[K]
    }>): void {
        return this.client.deleteScalingPolicy(
            this.ops["DeleteScalingPolicy"].apply(partialParams)
        );
    }

    invokeDeleteScript(partialParams: ToOptional<{
      [K in keyof DeleteScriptInput & keyof DeleteScriptInput & keyof DeleteScriptInput & keyof DeleteScriptInput]: (DeleteScriptInput & DeleteScriptInput & DeleteScriptInput & DeleteScriptInput)[K]
    }>): void {
        return this.client.deleteScript(
            this.ops["DeleteScript"].apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringAuthorization(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringAuthorizationInput & keyof DeleteVpcPeeringAuthorizationInput & keyof DeleteVpcPeeringAuthorizationInput & keyof DeleteVpcPeeringAuthorizationInput]: (DeleteVpcPeeringAuthorizationInput & DeleteVpcPeeringAuthorizationInput & DeleteVpcPeeringAuthorizationInput & DeleteVpcPeeringAuthorizationInput)[K]
    }>): DeleteVpcPeeringAuthorizationOutput {
        return this.client.deleteVpcPeeringAuthorization(
            this.ops["DeleteVpcPeeringAuthorization"].apply(partialParams)
        );
    }

    invokeDeleteVpcPeeringConnection(partialParams: ToOptional<{
      [K in keyof DeleteVpcPeeringConnectionInput & keyof DeleteVpcPeeringConnectionInput & keyof DeleteVpcPeeringConnectionInput & keyof DeleteVpcPeeringConnectionInput]: (DeleteVpcPeeringConnectionInput & DeleteVpcPeeringConnectionInput & DeleteVpcPeeringConnectionInput & DeleteVpcPeeringConnectionInput)[K]
    }>): DeleteVpcPeeringConnectionOutput {
        return this.client.deleteVpcPeeringConnection(
            this.ops["DeleteVpcPeeringConnection"].apply(partialParams)
        );
    }

    invokeDeregisterGameServer(partialParams: ToOptional<{
      [K in keyof DeregisterGameServerInput & keyof DeregisterGameServerInput & keyof DeregisterGameServerInput & keyof DeregisterGameServerInput]: (DeregisterGameServerInput & DeregisterGameServerInput & DeregisterGameServerInput & DeregisterGameServerInput)[K]
    }>): void {
        return this.client.deregisterGameServer(
            this.ops["DeregisterGameServer"].apply(partialParams)
        );
    }

    invokeDescribeAlias(partialParams: ToOptional<{
      [K in keyof DescribeAliasInput & keyof DescribeAliasInput & keyof DescribeAliasInput & keyof DescribeAliasInput]: (DescribeAliasInput & DescribeAliasInput & DescribeAliasInput & DescribeAliasInput)[K]
    }>): DescribeAliasOutput {
        return this.client.describeAlias(
            this.ops["DescribeAlias"].apply(partialParams)
        );
    }

    invokeDescribeBuild(partialParams: ToOptional<{
      [K in keyof DescribeBuildInput & keyof DescribeBuildInput & keyof DescribeBuildInput & keyof DescribeBuildInput]: (DescribeBuildInput & DescribeBuildInput & DescribeBuildInput & DescribeBuildInput)[K]
    }>): DescribeBuildOutput {
        return this.client.describeBuild(
            this.ops["DescribeBuild"].apply(partialParams)
        );
    }

    invokeDescribeFleetEvents(partialParams: ToOptional<{
      [K in keyof DescribeFleetEventsInput & keyof DescribeFleetEventsInput & keyof DescribeFleetEventsInput & keyof DescribeFleetEventsInput]: (DescribeFleetEventsInput & DescribeFleetEventsInput & DescribeFleetEventsInput & DescribeFleetEventsInput)[K]
    }>): DescribeFleetEventsOutput {
        return this.client.describeFleetEvents(
            this.ops["DescribeFleetEvents"].apply(partialParams)
        );
    }

    invokeDescribeFleetLocationAttributes(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationAttributesInput & keyof DescribeFleetLocationAttributesInput & keyof DescribeFleetLocationAttributesInput & keyof DescribeFleetLocationAttributesInput]: (DescribeFleetLocationAttributesInput & DescribeFleetLocationAttributesInput & DescribeFleetLocationAttributesInput & DescribeFleetLocationAttributesInput)[K]
    }>): DescribeFleetLocationAttributesOutput {
        return this.client.describeFleetLocationAttributes(
            this.ops["DescribeFleetLocationAttributes"].apply(partialParams)
        );
    }

    invokeDescribeFleetLocationCapacity(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationCapacityInput & keyof DescribeFleetLocationCapacityInput & keyof DescribeFleetLocationCapacityInput & keyof DescribeFleetLocationCapacityInput]: (DescribeFleetLocationCapacityInput & DescribeFleetLocationCapacityInput & DescribeFleetLocationCapacityInput & DescribeFleetLocationCapacityInput)[K]
    }>): DescribeFleetLocationCapacityOutput {
        return this.client.describeFleetLocationCapacity(
            this.ops["DescribeFleetLocationCapacity"].apply(partialParams)
        );
    }

    invokeDescribeFleetLocationUtilization(partialParams: ToOptional<{
      [K in keyof DescribeFleetLocationUtilizationInput & keyof DescribeFleetLocationUtilizationInput & keyof DescribeFleetLocationUtilizationInput & keyof DescribeFleetLocationUtilizationInput]: (DescribeFleetLocationUtilizationInput & DescribeFleetLocationUtilizationInput & DescribeFleetLocationUtilizationInput & DescribeFleetLocationUtilizationInput)[K]
    }>): DescribeFleetLocationUtilizationOutput {
        return this.client.describeFleetLocationUtilization(
            this.ops["DescribeFleetLocationUtilization"].apply(partialParams)
        );
    }

    invokeDescribeFleetPortSettings(partialParams: ToOptional<{
      [K in keyof DescribeFleetPortSettingsInput & keyof DescribeFleetPortSettingsInput & keyof DescribeFleetPortSettingsInput & keyof DescribeFleetPortSettingsInput]: (DescribeFleetPortSettingsInput & DescribeFleetPortSettingsInput & DescribeFleetPortSettingsInput & DescribeFleetPortSettingsInput)[K]
    }>): DescribeFleetPortSettingsOutput {
        return this.client.describeFleetPortSettings(
            this.ops["DescribeFleetPortSettings"].apply(partialParams)
        );
    }

    invokeDescribeGameServer(partialParams: ToOptional<{
      [K in keyof DescribeGameServerInput & keyof DescribeGameServerInput & keyof DescribeGameServerInput & keyof DescribeGameServerInput]: (DescribeGameServerInput & DescribeGameServerInput & DescribeGameServerInput & DescribeGameServerInput)[K]
    }>): DescribeGameServerOutput {
        return this.client.describeGameServer(
            this.ops["DescribeGameServer"].apply(partialParams)
        );
    }

    invokeDescribeGameServerGroup(partialParams: ToOptional<{
      [K in keyof DescribeGameServerGroupInput & keyof DescribeGameServerGroupInput & keyof DescribeGameServerGroupInput & keyof DescribeGameServerGroupInput]: (DescribeGameServerGroupInput & DescribeGameServerGroupInput & DescribeGameServerGroupInput & DescribeGameServerGroupInput)[K]
    }>): DescribeGameServerGroupOutput {
        return this.client.describeGameServerGroup(
            this.ops["DescribeGameServerGroup"].apply(partialParams)
        );
    }

    invokeDescribeGameServerInstances(partialParams: ToOptional<{
      [K in keyof DescribeGameServerInstancesInput & keyof DescribeGameServerInstancesInput & keyof DescribeGameServerInstancesInput & keyof DescribeGameServerInstancesInput]: (DescribeGameServerInstancesInput & DescribeGameServerInstancesInput & DescribeGameServerInstancesInput & DescribeGameServerInstancesInput)[K]
    }>): DescribeGameServerInstancesOutput {
        return this.client.describeGameServerInstances(
            this.ops["DescribeGameServerInstances"].apply(partialParams)
        );
    }

    invokeDescribeGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof DescribeGameSessionPlacementInput & keyof DescribeGameSessionPlacementInput & keyof DescribeGameSessionPlacementInput & keyof DescribeGameSessionPlacementInput]: (DescribeGameSessionPlacementInput & DescribeGameSessionPlacementInput & DescribeGameSessionPlacementInput & DescribeGameSessionPlacementInput)[K]
    }>): DescribeGameSessionPlacementOutput {
        return this.client.describeGameSessionPlacement(
            this.ops["DescribeGameSessionPlacement"].apply(partialParams)
        );
    }

    invokeDescribeInstances(partialParams: ToOptional<{
      [K in keyof DescribeInstancesInput & keyof DescribeInstancesInput & keyof DescribeInstancesInput & keyof DescribeInstancesInput]: (DescribeInstancesInput & DescribeInstancesInput & DescribeInstancesInput & DescribeInstancesInput)[K]
    }>): DescribeInstancesOutput {
        return this.client.describeInstances(
            this.ops["DescribeInstances"].apply(partialParams)
        );
    }

    invokeDescribeMatchmaking(partialParams: ToOptional<{
      [K in keyof DescribeMatchmakingInput & keyof DescribeMatchmakingInput & keyof DescribeMatchmakingInput & keyof DescribeMatchmakingInput]: (DescribeMatchmakingInput & DescribeMatchmakingInput & DescribeMatchmakingInput & DescribeMatchmakingInput)[K]
    }>): DescribeMatchmakingOutput {
        return this.client.describeMatchmaking(
            this.ops["DescribeMatchmaking"].apply(partialParams)
        );
    }

    invokeDescribeRuntimeConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeRuntimeConfigurationInput & keyof DescribeRuntimeConfigurationInput & keyof DescribeRuntimeConfigurationInput & keyof DescribeRuntimeConfigurationInput]: (DescribeRuntimeConfigurationInput & DescribeRuntimeConfigurationInput & DescribeRuntimeConfigurationInput & DescribeRuntimeConfigurationInput)[K]
    }>): DescribeRuntimeConfigurationOutput {
        return this.client.describeRuntimeConfiguration(
            this.ops["DescribeRuntimeConfiguration"].apply(partialParams)
        );
    }

    invokeDescribeScalingPolicies(partialParams: ToOptional<{
      [K in keyof DescribeScalingPoliciesInput & keyof DescribeScalingPoliciesInput & keyof DescribeScalingPoliciesInput & keyof DescribeScalingPoliciesInput]: (DescribeScalingPoliciesInput & DescribeScalingPoliciesInput & DescribeScalingPoliciesInput & DescribeScalingPoliciesInput)[K]
    }>): DescribeScalingPoliciesOutput {
        return this.client.describeScalingPolicies(
            this.ops["DescribeScalingPolicies"].apply(partialParams)
        );
    }

    invokeDescribeScript(partialParams: ToOptional<{
      [K in keyof DescribeScriptInput & keyof DescribeScriptInput & keyof DescribeScriptInput & keyof DescribeScriptInput]: (DescribeScriptInput & DescribeScriptInput & DescribeScriptInput & DescribeScriptInput)[K]
    }>): DescribeScriptOutput {
        return this.client.describeScript(
            this.ops["DescribeScript"].apply(partialParams)
        );
    }

    invokeGetGameSessionLogUrl(partialParams: ToOptional<{
      [K in keyof GetGameSessionLogUrlInput & keyof GetGameSessionLogUrlInput & keyof GetGameSessionLogUrlInput & keyof GetGameSessionLogUrlInput]: (GetGameSessionLogUrlInput & GetGameSessionLogUrlInput & GetGameSessionLogUrlInput & GetGameSessionLogUrlInput)[K]
    }>): GetGameSessionLogUrlOutput {
        return this.client.getGameSessionLogUrl(
            this.ops["GetGameSessionLogUrl"].apply(partialParams)
        );
    }

    invokeGetInstanceAccess(partialParams: ToOptional<{
      [K in keyof GetInstanceAccessInput & keyof GetInstanceAccessInput & keyof GetInstanceAccessInput & keyof GetInstanceAccessInput]: (GetInstanceAccessInput & GetInstanceAccessInput & GetInstanceAccessInput & GetInstanceAccessInput)[K]
    }>): GetInstanceAccessOutput {
        return this.client.getInstanceAccess(
            this.ops["GetInstanceAccess"].apply(partialParams)
        );
    }

    invokeListGameServers(partialParams: ToOptional<{
      [K in keyof ListGameServersInput & keyof ListGameServersInput & keyof ListGameServersInput & keyof ListGameServersInput]: (ListGameServersInput & ListGameServersInput & ListGameServersInput & ListGameServersInput)[K]
    }>): ListGameServersOutput {
        return this.client.listGameServers(
            this.ops["ListGameServers"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutScalingPolicy(partialParams: ToOptional<{
      [K in keyof PutScalingPolicyInput & keyof Omit<PutScalingPolicyInput, "Name"> & keyof PutScalingPolicyInput & keyof PutScalingPolicyInput]: (PutScalingPolicyInput & Omit<PutScalingPolicyInput, "Name"> & PutScalingPolicyInput & PutScalingPolicyInput)[K]
    }>): PutScalingPolicyOutput {
        return this.client.putScalingPolicy(
            this.ops["PutScalingPolicy"].apply(partialParams)
        );
    }

    invokeRegisterGameServer(partialParams: ToOptional<{
      [K in keyof RegisterGameServerInput & keyof RegisterGameServerInput & keyof RegisterGameServerInput & keyof RegisterGameServerInput]: (RegisterGameServerInput & RegisterGameServerInput & RegisterGameServerInput & RegisterGameServerInput)[K]
    }>): RegisterGameServerOutput {
        return this.client.registerGameServer(
            this.ops["RegisterGameServer"].apply(partialParams)
        );
    }

    invokeRequestUploadCredentials(partialParams: ToOptional<{
      [K in keyof RequestUploadCredentialsInput & keyof RequestUploadCredentialsInput & keyof RequestUploadCredentialsInput & keyof RequestUploadCredentialsInput]: (RequestUploadCredentialsInput & RequestUploadCredentialsInput & RequestUploadCredentialsInput & RequestUploadCredentialsInput)[K]
    }>): RequestUploadCredentialsOutput {
        return this.client.requestUploadCredentials(
            this.ops["RequestUploadCredentials"].apply(partialParams)
        );
    }

    invokeResolveAlias(partialParams: ToOptional<{
      [K in keyof ResolveAliasInput & keyof ResolveAliasInput & keyof ResolveAliasInput & keyof ResolveAliasInput]: (ResolveAliasInput & ResolveAliasInput & ResolveAliasInput & ResolveAliasInput)[K]
    }>): ResolveAliasOutput {
        return this.client.resolveAlias(
            this.ops["ResolveAlias"].apply(partialParams)
        );
    }

    invokeResumeGameServerGroup(partialParams: ToOptional<{
      [K in keyof ResumeGameServerGroupInput & keyof ResumeGameServerGroupInput & keyof ResumeGameServerGroupInput & keyof ResumeGameServerGroupInput]: (ResumeGameServerGroupInput & ResumeGameServerGroupInput & ResumeGameServerGroupInput & ResumeGameServerGroupInput)[K]
    }>): ResumeGameServerGroupOutput {
        return this.client.resumeGameServerGroup(
            this.ops["ResumeGameServerGroup"].apply(partialParams)
        );
    }

    invokeStartFleetActions(partialParams: ToOptional<{
      [K in keyof StartFleetActionsInput & keyof StartFleetActionsInput & keyof StartFleetActionsInput & keyof StartFleetActionsInput]: (StartFleetActionsInput & StartFleetActionsInput & StartFleetActionsInput & StartFleetActionsInput)[K]
    }>): StartFleetActionsOutput {
        return this.client.startFleetActions(
            this.ops["StartFleetActions"].apply(partialParams)
        );
    }

    invokeStartGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof StartGameSessionPlacementInput & keyof StartGameSessionPlacementInput & keyof StartGameSessionPlacementInput & keyof StartGameSessionPlacementInput]: (StartGameSessionPlacementInput & StartGameSessionPlacementInput & StartGameSessionPlacementInput & StartGameSessionPlacementInput)[K]
    }>): StartGameSessionPlacementOutput {
        return this.client.startGameSessionPlacement(
            this.ops["StartGameSessionPlacement"].apply(partialParams)
        );
    }

    invokeStartMatchBackfill(partialParams: ToOptional<{
      [K in keyof StartMatchBackfillInput & keyof StartMatchBackfillInput & keyof StartMatchBackfillInput & keyof StartMatchBackfillInput]: (StartMatchBackfillInput & StartMatchBackfillInput & StartMatchBackfillInput & StartMatchBackfillInput)[K]
    }>): StartMatchBackfillOutput {
        return this.client.startMatchBackfill(
            this.ops["StartMatchBackfill"].apply(partialParams)
        );
    }

    invokeStartMatchmaking(partialParams: ToOptional<{
      [K in keyof StartMatchmakingInput & keyof StartMatchmakingInput & keyof StartMatchmakingInput & keyof StartMatchmakingInput]: (StartMatchmakingInput & StartMatchmakingInput & StartMatchmakingInput & StartMatchmakingInput)[K]
    }>): StartMatchmakingOutput {
        return this.client.startMatchmaking(
            this.ops["StartMatchmaking"].apply(partialParams)
        );
    }

    invokeStopFleetActions(partialParams: ToOptional<{
      [K in keyof StopFleetActionsInput & keyof StopFleetActionsInput & keyof StopFleetActionsInput & keyof StopFleetActionsInput]: (StopFleetActionsInput & StopFleetActionsInput & StopFleetActionsInput & StopFleetActionsInput)[K]
    }>): StopFleetActionsOutput {
        return this.client.stopFleetActions(
            this.ops["StopFleetActions"].apply(partialParams)
        );
    }

    invokeStopGameSessionPlacement(partialParams: ToOptional<{
      [K in keyof StopGameSessionPlacementInput & keyof StopGameSessionPlacementInput & keyof StopGameSessionPlacementInput & keyof StopGameSessionPlacementInput]: (StopGameSessionPlacementInput & StopGameSessionPlacementInput & StopGameSessionPlacementInput & StopGameSessionPlacementInput)[K]
    }>): StopGameSessionPlacementOutput {
        return this.client.stopGameSessionPlacement(
            this.ops["StopGameSessionPlacement"].apply(partialParams)
        );
    }

    invokeStopMatchmaking(partialParams: ToOptional<{
      [K in keyof StopMatchmakingInput & keyof StopMatchmakingInput & keyof StopMatchmakingInput & keyof StopMatchmakingInput]: (StopMatchmakingInput & StopMatchmakingInput & StopMatchmakingInput & StopMatchmakingInput)[K]
    }>): StopMatchmakingOutput {
        return this.client.stopMatchmaking(
            this.ops["StopMatchmaking"].apply(partialParams)
        );
    }

    invokeSuspendGameServerGroup(partialParams: ToOptional<{
      [K in keyof SuspendGameServerGroupInput & keyof SuspendGameServerGroupInput & keyof SuspendGameServerGroupInput & keyof SuspendGameServerGroupInput]: (SuspendGameServerGroupInput & SuspendGameServerGroupInput & SuspendGameServerGroupInput & SuspendGameServerGroupInput)[K]
    }>): SuspendGameServerGroupOutput {
        return this.client.suspendGameServerGroup(
            this.ops["SuspendGameServerGroup"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateAlias(partialParams: ToOptional<{
      [K in keyof UpdateAliasInput & keyof UpdateAliasInput & keyof UpdateAliasInput & keyof UpdateAliasInput]: (UpdateAliasInput & UpdateAliasInput & UpdateAliasInput & UpdateAliasInput)[K]
    }>): UpdateAliasOutput {
        return this.client.updateAlias(
            this.ops["UpdateAlias"].apply(partialParams)
        );
    }

    invokeUpdateBuild(partialParams: ToOptional<{
      [K in keyof UpdateBuildInput & keyof UpdateBuildInput & keyof UpdateBuildInput & keyof UpdateBuildInput]: (UpdateBuildInput & UpdateBuildInput & UpdateBuildInput & UpdateBuildInput)[K]
    }>): UpdateBuildOutput {
        return this.client.updateBuild(
            this.ops["UpdateBuild"].apply(partialParams)
        );
    }

    invokeUpdateFleetAttributes(partialParams: ToOptional<{
      [K in keyof UpdateFleetAttributesInput & keyof UpdateFleetAttributesInput & keyof UpdateFleetAttributesInput & keyof UpdateFleetAttributesInput]: (UpdateFleetAttributesInput & UpdateFleetAttributesInput & UpdateFleetAttributesInput & UpdateFleetAttributesInput)[K]
    }>): UpdateFleetAttributesOutput {
        return this.client.updateFleetAttributes(
            this.ops["UpdateFleetAttributes"].apply(partialParams)
        );
    }

    invokeUpdateFleetCapacity(partialParams: ToOptional<{
      [K in keyof UpdateFleetCapacityInput & keyof UpdateFleetCapacityInput & keyof UpdateFleetCapacityInput & keyof UpdateFleetCapacityInput]: (UpdateFleetCapacityInput & UpdateFleetCapacityInput & UpdateFleetCapacityInput & UpdateFleetCapacityInput)[K]
    }>): UpdateFleetCapacityOutput {
        return this.client.updateFleetCapacity(
            this.ops["UpdateFleetCapacity"].apply(partialParams)
        );
    }

    invokeUpdateFleetPortSettings(partialParams: ToOptional<{
      [K in keyof UpdateFleetPortSettingsInput & keyof UpdateFleetPortSettingsInput & keyof UpdateFleetPortSettingsInput & keyof UpdateFleetPortSettingsInput]: (UpdateFleetPortSettingsInput & UpdateFleetPortSettingsInput & UpdateFleetPortSettingsInput & UpdateFleetPortSettingsInput)[K]
    }>): UpdateFleetPortSettingsOutput {
        return this.client.updateFleetPortSettings(
            this.ops["UpdateFleetPortSettings"].apply(partialParams)
        );
    }

    invokeUpdateGameServer(partialParams: ToOptional<{
      [K in keyof UpdateGameServerInput & keyof UpdateGameServerInput & keyof UpdateGameServerInput & keyof UpdateGameServerInput]: (UpdateGameServerInput & UpdateGameServerInput & UpdateGameServerInput & UpdateGameServerInput)[K]
    }>): UpdateGameServerOutput {
        return this.client.updateGameServer(
            this.ops["UpdateGameServer"].apply(partialParams)
        );
    }

    invokeUpdateGameServerGroup(partialParams: ToOptional<{
      [K in keyof UpdateGameServerGroupInput & keyof UpdateGameServerGroupInput & keyof UpdateGameServerGroupInput & keyof UpdateGameServerGroupInput]: (UpdateGameServerGroupInput & UpdateGameServerGroupInput & UpdateGameServerGroupInput & UpdateGameServerGroupInput)[K]
    }>): UpdateGameServerGroupOutput {
        return this.client.updateGameServerGroup(
            this.ops["UpdateGameServerGroup"].apply(partialParams)
        );
    }

    invokeUpdateGameSession(partialParams: ToOptional<{
      [K in keyof UpdateGameSessionInput & keyof UpdateGameSessionInput & keyof UpdateGameSessionInput & keyof UpdateGameSessionInput]: (UpdateGameSessionInput & UpdateGameSessionInput & UpdateGameSessionInput & UpdateGameSessionInput)[K]
    }>): UpdateGameSessionOutput {
        return this.client.updateGameSession(
            this.ops["UpdateGameSession"].apply(partialParams)
        );
    }

    invokeUpdateGameSessionQueue(partialParams: ToOptional<{
      [K in keyof UpdateGameSessionQueueInput & keyof Omit<UpdateGameSessionQueueInput, "Name"> & keyof UpdateGameSessionQueueInput & keyof UpdateGameSessionQueueInput]: (UpdateGameSessionQueueInput & Omit<UpdateGameSessionQueueInput, "Name"> & UpdateGameSessionQueueInput & UpdateGameSessionQueueInput)[K]
    }>): UpdateGameSessionQueueOutput {
        return this.client.updateGameSessionQueue(
            this.ops["UpdateGameSessionQueue"].apply(partialParams)
        );
    }

    invokeUpdateMatchmakingConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateMatchmakingConfigurationInput & keyof Omit<UpdateMatchmakingConfigurationInput, "Name"> & keyof UpdateMatchmakingConfigurationInput & keyof UpdateMatchmakingConfigurationInput]: (UpdateMatchmakingConfigurationInput & Omit<UpdateMatchmakingConfigurationInput, "Name"> & UpdateMatchmakingConfigurationInput & UpdateMatchmakingConfigurationInput)[K]
    }>): UpdateMatchmakingConfigurationOutput {
        return this.client.updateMatchmakingConfiguration(
            this.ops["UpdateMatchmakingConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateRuntimeConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateRuntimeConfigurationInput & keyof UpdateRuntimeConfigurationInput & keyof UpdateRuntimeConfigurationInput & keyof UpdateRuntimeConfigurationInput]: (UpdateRuntimeConfigurationInput & UpdateRuntimeConfigurationInput & UpdateRuntimeConfigurationInput & UpdateRuntimeConfigurationInput)[K]
    }>): UpdateRuntimeConfigurationOutput {
        return this.client.updateRuntimeConfiguration(
            this.ops["UpdateRuntimeConfiguration"].apply(partialParams)
        );
    }

    invokeUpdateScript(partialParams: ToOptional<{
      [K in keyof UpdateScriptInput & keyof UpdateScriptInput & keyof UpdateScriptInput & keyof UpdateScriptInput]: (UpdateScriptInput & UpdateScriptInput & UpdateScriptInput & UpdateScriptInput)[K]
    }>): UpdateScriptOutput {
        return this.client.updateScript(
            this.ops["UpdateScript"].apply(partialParams)
        );
    }

    invokeValidateMatchmakingRuleSet(partialParams: ToOptional<{
      [K in keyof ValidateMatchmakingRuleSetInput & keyof ValidateMatchmakingRuleSetInput & keyof ValidateMatchmakingRuleSetInput & keyof ValidateMatchmakingRuleSetInput]: (ValidateMatchmakingRuleSetInput & ValidateMatchmakingRuleSetInput & ValidateMatchmakingRuleSetInput & ValidateMatchmakingRuleSetInput)[K]
    }>): ValidateMatchmakingRuleSetOutput {
        return this.client.validateMatchmakingRuleSet(
            this.ops["ValidateMatchmakingRuleSet"].apply(partialParams)
        );
    }
}