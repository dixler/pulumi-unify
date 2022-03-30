"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws = __importStar(require("@pulumi/aws"));
const awssdk = __importStar(require("aws-sdk"));
const parse_1 = require("../parse");
class default_1 extends aws.gamelift.Build {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.GameLift();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/gamelift-2015-10-01.normal.json"), this.client);
    }
    invokeAcceptMatch(partialParams) {
        return this.client.acceptMatch(this.ops["AcceptMatch"].apply(partialParams));
    }
    invokeClaimGameServer(partialParams) {
        return this.client.claimGameServer(this.ops["ClaimGameServer"].apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateFleetLocations(partialParams) {
        return this.client.createFleetLocations(this.ops["CreateFleetLocations"].apply(partialParams));
    }
    invokeCreateGameServerGroup(partialParams) {
        return this.client.createGameServerGroup(this.ops["CreateGameServerGroup"].apply(partialParams));
    }
    invokeCreateGameSession(partialParams) {
        return this.client.createGameSession(this.ops["CreateGameSession"].apply(partialParams));
    }
    invokeCreateGameSessionQueue(partialParams) {
        return this.client.createGameSessionQueue(this.ops["CreateGameSessionQueue"].apply(partialParams));
    }
    invokeCreateMatchmakingConfiguration(partialParams) {
        return this.client.createMatchmakingConfiguration(this.ops["CreateMatchmakingConfiguration"].apply(partialParams));
    }
    invokeCreateMatchmakingRuleSet(partialParams) {
        return this.client.createMatchmakingRuleSet(this.ops["CreateMatchmakingRuleSet"].apply(partialParams));
    }
    invokeCreatePlayerSession(partialParams) {
        return this.client.createPlayerSession(this.ops["CreatePlayerSession"].apply(partialParams));
    }
    invokeCreatePlayerSessions(partialParams) {
        return this.client.createPlayerSessions(this.ops["CreatePlayerSessions"].apply(partialParams));
    }
    invokeCreateVpcPeeringAuthorization(partialParams) {
        return this.client.createVpcPeeringAuthorization(this.ops["CreateVpcPeeringAuthorization"].apply(partialParams));
    }
    invokeCreateVpcPeeringConnection(partialParams) {
        return this.client.createVpcPeeringConnection(this.ops["CreateVpcPeeringConnection"].apply(partialParams));
    }
    invokeDeleteAlias(partialParams) {
        return this.client.deleteAlias(this.ops["DeleteAlias"].apply(partialParams));
    }
    invokeDeleteBuild(partialParams) {
        return this.client.deleteBuild(this.ops["DeleteBuild"].apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        return this.client.deleteFleet(this.ops["DeleteFleet"].apply(partialParams));
    }
    invokeDeleteFleetLocations(partialParams) {
        return this.client.deleteFleetLocations(this.ops["DeleteFleetLocations"].apply(partialParams));
    }
    invokeDeleteGameServerGroup(partialParams) {
        return this.client.deleteGameServerGroup(this.ops["DeleteGameServerGroup"].apply(partialParams));
    }
    invokeDeleteGameSessionQueue(partialParams) {
        return this.client.deleteGameSessionQueue(this.ops["DeleteGameSessionQueue"].apply(partialParams));
    }
    invokeDeleteMatchmakingConfiguration(partialParams) {
        return this.client.deleteMatchmakingConfiguration(this.ops["DeleteMatchmakingConfiguration"].apply(partialParams));
    }
    invokeDeleteMatchmakingRuleSet(partialParams) {
        return this.client.deleteMatchmakingRuleSet(this.ops["DeleteMatchmakingRuleSet"].apply(partialParams));
    }
    invokeDeleteScalingPolicy(partialParams) {
        return this.client.deleteScalingPolicy(this.ops["DeleteScalingPolicy"].apply(partialParams));
    }
    invokeDeleteScript(partialParams) {
        return this.client.deleteScript(this.ops["DeleteScript"].apply(partialParams));
    }
    invokeDeleteVpcPeeringAuthorization(partialParams) {
        return this.client.deleteVpcPeeringAuthorization(this.ops["DeleteVpcPeeringAuthorization"].apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].apply(partialParams));
    }
    invokeDeregisterGameServer(partialParams) {
        return this.client.deregisterGameServer(this.ops["DeregisterGameServer"].apply(partialParams));
    }
    invokeDescribeAlias(partialParams) {
        return this.client.describeAlias(this.ops["DescribeAlias"].apply(partialParams));
    }
    invokeDescribeBuild(partialParams) {
        return this.client.describeBuild(this.ops["DescribeBuild"].apply(partialParams));
    }
    invokeDescribeFleetEvents(partialParams) {
        return this.client.describeFleetEvents(this.ops["DescribeFleetEvents"].apply(partialParams));
    }
    invokeDescribeFleetLocationAttributes(partialParams) {
        return this.client.describeFleetLocationAttributes(this.ops["DescribeFleetLocationAttributes"].apply(partialParams));
    }
    invokeDescribeFleetLocationCapacity(partialParams) {
        return this.client.describeFleetLocationCapacity(this.ops["DescribeFleetLocationCapacity"].apply(partialParams));
    }
    invokeDescribeFleetLocationUtilization(partialParams) {
        return this.client.describeFleetLocationUtilization(this.ops["DescribeFleetLocationUtilization"].apply(partialParams));
    }
    invokeDescribeFleetPortSettings(partialParams) {
        return this.client.describeFleetPortSettings(this.ops["DescribeFleetPortSettings"].apply(partialParams));
    }
    invokeDescribeGameServer(partialParams) {
        return this.client.describeGameServer(this.ops["DescribeGameServer"].apply(partialParams));
    }
    invokeDescribeGameServerGroup(partialParams) {
        return this.client.describeGameServerGroup(this.ops["DescribeGameServerGroup"].apply(partialParams));
    }
    invokeDescribeGameServerInstances(partialParams) {
        return this.client.describeGameServerInstances(this.ops["DescribeGameServerInstances"].apply(partialParams));
    }
    invokeDescribeGameSessionPlacement(partialParams) {
        return this.client.describeGameSessionPlacement(this.ops["DescribeGameSessionPlacement"].apply(partialParams));
    }
    invokeDescribeInstances(partialParams) {
        return this.client.describeInstances(this.ops["DescribeInstances"].apply(partialParams));
    }
    invokeDescribeMatchmaking(partialParams) {
        return this.client.describeMatchmaking(this.ops["DescribeMatchmaking"].apply(partialParams));
    }
    invokeDescribeRuntimeConfiguration(partialParams) {
        return this.client.describeRuntimeConfiguration(this.ops["DescribeRuntimeConfiguration"].apply(partialParams));
    }
    invokeDescribeScalingPolicies(partialParams) {
        return this.client.describeScalingPolicies(this.ops["DescribeScalingPolicies"].apply(partialParams));
    }
    invokeDescribeScript(partialParams) {
        return this.client.describeScript(this.ops["DescribeScript"].apply(partialParams));
    }
    invokeGetGameSessionLogUrl(partialParams) {
        return this.client.getGameSessionLogUrl(this.ops["GetGameSessionLogUrl"].apply(partialParams));
    }
    invokeGetInstanceAccess(partialParams) {
        return this.client.getInstanceAccess(this.ops["GetInstanceAccess"].apply(partialParams));
    }
    invokeListGameServers(partialParams) {
        return this.client.listGameServers(this.ops["ListGameServers"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutScalingPolicy(partialParams) {
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].apply(partialParams));
    }
    invokeRegisterGameServer(partialParams) {
        return this.client.registerGameServer(this.ops["RegisterGameServer"].apply(partialParams));
    }
    invokeRequestUploadCredentials(partialParams) {
        return this.client.requestUploadCredentials(this.ops["RequestUploadCredentials"].apply(partialParams));
    }
    invokeResolveAlias(partialParams) {
        return this.client.resolveAlias(this.ops["ResolveAlias"].apply(partialParams));
    }
    invokeResumeGameServerGroup(partialParams) {
        return this.client.resumeGameServerGroup(this.ops["ResumeGameServerGroup"].apply(partialParams));
    }
    invokeStartFleetActions(partialParams) {
        return this.client.startFleetActions(this.ops["StartFleetActions"].apply(partialParams));
    }
    invokeStartGameSessionPlacement(partialParams) {
        return this.client.startGameSessionPlacement(this.ops["StartGameSessionPlacement"].apply(partialParams));
    }
    invokeStartMatchBackfill(partialParams) {
        return this.client.startMatchBackfill(this.ops["StartMatchBackfill"].apply(partialParams));
    }
    invokeStartMatchmaking(partialParams) {
        return this.client.startMatchmaking(this.ops["StartMatchmaking"].apply(partialParams));
    }
    invokeStopFleetActions(partialParams) {
        return this.client.stopFleetActions(this.ops["StopFleetActions"].apply(partialParams));
    }
    invokeStopGameSessionPlacement(partialParams) {
        return this.client.stopGameSessionPlacement(this.ops["StopGameSessionPlacement"].apply(partialParams));
    }
    invokeStopMatchmaking(partialParams) {
        return this.client.stopMatchmaking(this.ops["StopMatchmaking"].apply(partialParams));
    }
    invokeSuspendGameServerGroup(partialParams) {
        return this.client.suspendGameServerGroup(this.ops["SuspendGameServerGroup"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAlias(partialParams) {
        return this.client.updateAlias(this.ops["UpdateAlias"].apply(partialParams));
    }
    invokeUpdateBuild(partialParams) {
        return this.client.updateBuild(this.ops["UpdateBuild"].apply(partialParams));
    }
    invokeUpdateFleetAttributes(partialParams) {
        return this.client.updateFleetAttributes(this.ops["UpdateFleetAttributes"].apply(partialParams));
    }
    invokeUpdateFleetCapacity(partialParams) {
        return this.client.updateFleetCapacity(this.ops["UpdateFleetCapacity"].apply(partialParams));
    }
    invokeUpdateFleetPortSettings(partialParams) {
        return this.client.updateFleetPortSettings(this.ops["UpdateFleetPortSettings"].apply(partialParams));
    }
    invokeUpdateGameServer(partialParams) {
        return this.client.updateGameServer(this.ops["UpdateGameServer"].apply(partialParams));
    }
    invokeUpdateGameServerGroup(partialParams) {
        return this.client.updateGameServerGroup(this.ops["UpdateGameServerGroup"].apply(partialParams));
    }
    invokeUpdateGameSession(partialParams) {
        return this.client.updateGameSession(this.ops["UpdateGameSession"].apply(partialParams));
    }
    invokeUpdateGameSessionQueue(partialParams) {
        return this.client.updateGameSessionQueue(this.ops["UpdateGameSessionQueue"].apply(partialParams));
    }
    invokeUpdateMatchmakingConfiguration(partialParams) {
        return this.client.updateMatchmakingConfiguration(this.ops["UpdateMatchmakingConfiguration"].apply(partialParams));
    }
    invokeUpdateRuntimeConfiguration(partialParams) {
        return this.client.updateRuntimeConfiguration(this.ops["UpdateRuntimeConfiguration"].apply(partialParams));
    }
    invokeUpdateScript(partialParams) {
        return this.client.updateScript(this.ops["UpdateScript"].apply(partialParams));
    }
    invokeValidateMatchmakingRuleSet(partialParams) {
        return this.client.validateMatchmakingRuleSet(this.ops["ValidateMatchmakingRuleSet"].apply(partialParams));
    }
}
exports.default = default_1;
