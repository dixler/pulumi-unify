"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
const schema = require("../apis/gamelift-2015-10-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.gamelift.Alias {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.GameLift();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
        });
    }
    boot() {
        if (this.booted) {
            return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema);
        this.booted = true;
    }
    invokeAcceptMatch(partialParams) {
        this.boot();
        return this.client.acceptMatch(this.ops["AcceptMatch"].apply(partialParams));
    }
    invokeClaimGameServer(partialParams) {
        this.boot();
        return this.client.claimGameServer(this.ops["ClaimGameServer"].apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateBuild(partialParams) {
        this.boot();
        return this.client.createBuild(this.ops["CreateBuild"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
    }
    invokeCreateFleetLocations(partialParams) {
        this.boot();
        return this.client.createFleetLocations(this.ops["CreateFleetLocations"].apply(partialParams));
    }
    invokeCreateGameServerGroup(partialParams) {
        this.boot();
        return this.client.createGameServerGroup(this.ops["CreateGameServerGroup"].apply(partialParams));
    }
    invokeCreateGameSession(partialParams) {
        this.boot();
        return this.client.createGameSession(this.ops["CreateGameSession"].apply(partialParams));
    }
    invokeCreateGameSessionQueue(partialParams) {
        this.boot();
        return this.client.createGameSessionQueue(this.ops["CreateGameSessionQueue"].apply(partialParams));
    }
    invokeCreateMatchmakingConfiguration(partialParams) {
        this.boot();
        return this.client.createMatchmakingConfiguration(this.ops["CreateMatchmakingConfiguration"].apply(partialParams));
    }
    invokeCreateMatchmakingRuleSet(partialParams) {
        this.boot();
        return this.client.createMatchmakingRuleSet(this.ops["CreateMatchmakingRuleSet"].apply(partialParams));
    }
    invokeCreatePlayerSession(partialParams) {
        this.boot();
        return this.client.createPlayerSession(this.ops["CreatePlayerSession"].apply(partialParams));
    }
    invokeCreatePlayerSessions(partialParams) {
        this.boot();
        return this.client.createPlayerSessions(this.ops["CreatePlayerSessions"].apply(partialParams));
    }
    invokeCreateScript(partialParams) {
        this.boot();
        return this.client.createScript(this.ops["CreateScript"].apply(partialParams));
    }
    invokeCreateVpcPeeringAuthorization(partialParams) {
        this.boot();
        return this.client.createVpcPeeringAuthorization(this.ops["CreateVpcPeeringAuthorization"].apply(partialParams));
    }
    invokeCreateVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.createVpcPeeringConnection(this.ops["CreateVpcPeeringConnection"].apply(partialParams));
    }
    invokeDeleteFleetLocations(partialParams) {
        this.boot();
        return this.client.deleteFleetLocations(this.ops["DeleteFleetLocations"].apply(partialParams));
    }
    invokeDeleteGameServerGroup(partialParams) {
        this.boot();
        return this.client.deleteGameServerGroup(this.ops["DeleteGameServerGroup"].apply(partialParams));
    }
    invokeDeleteGameSessionQueue(partialParams) {
        this.boot();
        return this.client.deleteGameSessionQueue(this.ops["DeleteGameSessionQueue"].apply(partialParams));
    }
    invokeDeleteMatchmakingConfiguration(partialParams) {
        this.boot();
        return this.client.deleteMatchmakingConfiguration(this.ops["DeleteMatchmakingConfiguration"].apply(partialParams));
    }
    invokeDeleteMatchmakingRuleSet(partialParams) {
        this.boot();
        return this.client.deleteMatchmakingRuleSet(this.ops["DeleteMatchmakingRuleSet"].apply(partialParams));
    }
    invokeDeleteVpcPeeringAuthorization(partialParams) {
        this.boot();
        return this.client.deleteVpcPeeringAuthorization(this.ops["DeleteVpcPeeringAuthorization"].apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        this.boot();
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].apply(partialParams));
    }
    invokeDescribeAlias(partialParams) {
        this.boot();
        return this.client.describeAlias(this.ops["DescribeAlias"].apply(partialParams));
    }
    invokeDescribeBuild(partialParams) {
        this.boot();
        return this.client.describeBuild(this.ops["DescribeBuild"].apply(partialParams));
    }
    invokeDescribeEC2InstanceLimits(partialParams) {
        this.boot();
        return this.client.describeEC2InstanceLimits(this.ops["DescribeEC2InstanceLimits"].apply(partialParams));
    }
    invokeDescribeFleetAttributes(partialParams) {
        this.boot();
        return this.client.describeFleetAttributes(this.ops["DescribeFleetAttributes"].apply(partialParams));
    }
    invokeDescribeFleetCapacity(partialParams) {
        this.boot();
        return this.client.describeFleetCapacity(this.ops["DescribeFleetCapacity"].apply(partialParams));
    }
    invokeDescribeFleetEvents(partialParams) {
        this.boot();
        return this.client.describeFleetEvents(this.ops["DescribeFleetEvents"].apply(partialParams));
    }
    invokeDescribeFleetLocationAttributes(partialParams) {
        this.boot();
        return this.client.describeFleetLocationAttributes(this.ops["DescribeFleetLocationAttributes"].apply(partialParams));
    }
    invokeDescribeFleetLocationCapacity(partialParams) {
        this.boot();
        return this.client.describeFleetLocationCapacity(this.ops["DescribeFleetLocationCapacity"].apply(partialParams));
    }
    invokeDescribeFleetLocationUtilization(partialParams) {
        this.boot();
        return this.client.describeFleetLocationUtilization(this.ops["DescribeFleetLocationUtilization"].apply(partialParams));
    }
    invokeDescribeFleetPortSettings(partialParams) {
        this.boot();
        return this.client.describeFleetPortSettings(this.ops["DescribeFleetPortSettings"].apply(partialParams));
    }
    invokeDescribeFleetUtilization(partialParams) {
        this.boot();
        return this.client.describeFleetUtilization(this.ops["DescribeFleetUtilization"].apply(partialParams));
    }
    invokeDescribeGameServer(partialParams) {
        this.boot();
        return this.client.describeGameServer(this.ops["DescribeGameServer"].apply(partialParams));
    }
    invokeDescribeGameServerGroup(partialParams) {
        this.boot();
        return this.client.describeGameServerGroup(this.ops["DescribeGameServerGroup"].apply(partialParams));
    }
    invokeDescribeGameServerInstances(partialParams) {
        this.boot();
        return this.client.describeGameServerInstances(this.ops["DescribeGameServerInstances"].apply(partialParams));
    }
    invokeDescribeGameSessionDetails(partialParams) {
        this.boot();
        return this.client.describeGameSessionDetails(this.ops["DescribeGameSessionDetails"].apply(partialParams));
    }
    invokeDescribeGameSessionPlacement(partialParams) {
        this.boot();
        return this.client.describeGameSessionPlacement(this.ops["DescribeGameSessionPlacement"].apply(partialParams));
    }
    invokeDescribeGameSessionQueues(partialParams) {
        this.boot();
        return this.client.describeGameSessionQueues(this.ops["DescribeGameSessionQueues"].apply(partialParams));
    }
    invokeDescribeGameSessions(partialParams) {
        this.boot();
        return this.client.describeGameSessions(this.ops["DescribeGameSessions"].apply(partialParams));
    }
    invokeDescribeInstances(partialParams) {
        this.boot();
        return this.client.describeInstances(this.ops["DescribeInstances"].apply(partialParams));
    }
    invokeDescribeMatchmaking(partialParams) {
        this.boot();
        return this.client.describeMatchmaking(this.ops["DescribeMatchmaking"].apply(partialParams));
    }
    invokeDescribeMatchmakingConfigurations(partialParams) {
        this.boot();
        return this.client.describeMatchmakingConfigurations(this.ops["DescribeMatchmakingConfigurations"].apply(partialParams));
    }
    invokeDescribeMatchmakingRuleSets(partialParams) {
        this.boot();
        return this.client.describeMatchmakingRuleSets(this.ops["DescribeMatchmakingRuleSets"].apply(partialParams));
    }
    invokeDescribePlayerSessions(partialParams) {
        this.boot();
        return this.client.describePlayerSessions(this.ops["DescribePlayerSessions"].apply(partialParams));
    }
    invokeDescribeRuntimeConfiguration(partialParams) {
        this.boot();
        return this.client.describeRuntimeConfiguration(this.ops["DescribeRuntimeConfiguration"].apply(partialParams));
    }
    invokeDescribeScalingPolicies(partialParams) {
        this.boot();
        return this.client.describeScalingPolicies(this.ops["DescribeScalingPolicies"].apply(partialParams));
    }
    invokeDescribeScript(partialParams) {
        this.boot();
        return this.client.describeScript(this.ops["DescribeScript"].apply(partialParams));
    }
    invokeDescribeVpcPeeringAuthorizations(partialParams) {
        this.boot();
        return this.client.describeVpcPeeringAuthorizations(this.ops["DescribeVpcPeeringAuthorizations"].apply(partialParams));
    }
    invokeDescribeVpcPeeringConnections(partialParams) {
        this.boot();
        return this.client.describeVpcPeeringConnections(this.ops["DescribeVpcPeeringConnections"].apply(partialParams));
    }
    invokeGetGameSessionLogUrl(partialParams) {
        this.boot();
        return this.client.getGameSessionLogUrl(this.ops["GetGameSessionLogUrl"].apply(partialParams));
    }
    invokeGetInstanceAccess(partialParams) {
        this.boot();
        return this.client.getInstanceAccess(this.ops["GetInstanceAccess"].apply(partialParams));
    }
    invokeListAliases(partialParams) {
        this.boot();
        return this.client.listAliases(this.ops["ListAliases"].apply(partialParams));
    }
    invokeListBuilds(partialParams) {
        this.boot();
        return this.client.listBuilds(this.ops["ListBuilds"].apply(partialParams));
    }
    invokeListFleets(partialParams) {
        this.boot();
        return this.client.listFleets(this.ops["ListFleets"].apply(partialParams));
    }
    invokeListGameServerGroups(partialParams) {
        this.boot();
        return this.client.listGameServerGroups(this.ops["ListGameServerGroups"].apply(partialParams));
    }
    invokeListGameServers(partialParams) {
        this.boot();
        return this.client.listGameServers(this.ops["ListGameServers"].apply(partialParams));
    }
    invokeListScripts(partialParams) {
        this.boot();
        return this.client.listScripts(this.ops["ListScripts"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutScalingPolicy(partialParams) {
        this.boot();
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].apply(partialParams));
    }
    invokeRegisterGameServer(partialParams) {
        this.boot();
        return this.client.registerGameServer(this.ops["RegisterGameServer"].apply(partialParams));
    }
    invokeRequestUploadCredentials(partialParams) {
        this.boot();
        return this.client.requestUploadCredentials(this.ops["RequestUploadCredentials"].apply(partialParams));
    }
    invokeResolveAlias(partialParams) {
        this.boot();
        return this.client.resolveAlias(this.ops["ResolveAlias"].apply(partialParams));
    }
    invokeResumeGameServerGroup(partialParams) {
        this.boot();
        return this.client.resumeGameServerGroup(this.ops["ResumeGameServerGroup"].apply(partialParams));
    }
    invokeSearchGameSessions(partialParams) {
        this.boot();
        return this.client.searchGameSessions(this.ops["SearchGameSessions"].apply(partialParams));
    }
    invokeStartFleetActions(partialParams) {
        this.boot();
        return this.client.startFleetActions(this.ops["StartFleetActions"].apply(partialParams));
    }
    invokeStartGameSessionPlacement(partialParams) {
        this.boot();
        return this.client.startGameSessionPlacement(this.ops["StartGameSessionPlacement"].apply(partialParams));
    }
    invokeStartMatchBackfill(partialParams) {
        this.boot();
        return this.client.startMatchBackfill(this.ops["StartMatchBackfill"].apply(partialParams));
    }
    invokeStartMatchmaking(partialParams) {
        this.boot();
        return this.client.startMatchmaking(this.ops["StartMatchmaking"].apply(partialParams));
    }
    invokeStopFleetActions(partialParams) {
        this.boot();
        return this.client.stopFleetActions(this.ops["StopFleetActions"].apply(partialParams));
    }
    invokeStopGameSessionPlacement(partialParams) {
        this.boot();
        return this.client.stopGameSessionPlacement(this.ops["StopGameSessionPlacement"].apply(partialParams));
    }
    invokeStopMatchmaking(partialParams) {
        this.boot();
        return this.client.stopMatchmaking(this.ops["StopMatchmaking"].apply(partialParams));
    }
    invokeSuspendGameServerGroup(partialParams) {
        this.boot();
        return this.client.suspendGameServerGroup(this.ops["SuspendGameServerGroup"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAlias(partialParams) {
        this.boot();
        return this.client.updateAlias(this.ops["UpdateAlias"].apply(partialParams));
    }
    invokeUpdateBuild(partialParams) {
        this.boot();
        return this.client.updateBuild(this.ops["UpdateBuild"].apply(partialParams));
    }
    invokeUpdateFleetAttributes(partialParams) {
        this.boot();
        return this.client.updateFleetAttributes(this.ops["UpdateFleetAttributes"].apply(partialParams));
    }
    invokeUpdateFleetCapacity(partialParams) {
        this.boot();
        return this.client.updateFleetCapacity(this.ops["UpdateFleetCapacity"].apply(partialParams));
    }
    invokeUpdateFleetPortSettings(partialParams) {
        this.boot();
        return this.client.updateFleetPortSettings(this.ops["UpdateFleetPortSettings"].apply(partialParams));
    }
    invokeUpdateGameServer(partialParams) {
        this.boot();
        return this.client.updateGameServer(this.ops["UpdateGameServer"].apply(partialParams));
    }
    invokeUpdateGameServerGroup(partialParams) {
        this.boot();
        return this.client.updateGameServerGroup(this.ops["UpdateGameServerGroup"].apply(partialParams));
    }
    invokeUpdateGameSession(partialParams) {
        this.boot();
        return this.client.updateGameSession(this.ops["UpdateGameSession"].apply(partialParams));
    }
    invokeUpdateGameSessionQueue(partialParams) {
        this.boot();
        return this.client.updateGameSessionQueue(this.ops["UpdateGameSessionQueue"].apply(partialParams));
    }
    invokeUpdateMatchmakingConfiguration(partialParams) {
        this.boot();
        return this.client.updateMatchmakingConfiguration(this.ops["UpdateMatchmakingConfiguration"].apply(partialParams));
    }
    invokeUpdateRuntimeConfiguration(partialParams) {
        this.boot();
        return this.client.updateRuntimeConfiguration(this.ops["UpdateRuntimeConfiguration"].apply(partialParams));
    }
    invokeUpdateScript(partialParams) {
        this.boot();
        return this.client.updateScript(this.ops["UpdateScript"].apply(partialParams));
    }
    invokeValidateMatchmakingRuleSet(partialParams) {
        this.boot();
        return this.client.validateMatchmakingRuleSet(this.ops["ValidateMatchmakingRuleSet"].apply(partialParams));
    }
}
exports.default = default_1;
