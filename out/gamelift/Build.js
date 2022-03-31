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
class default_1 extends aws.gamelift.Build {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.GameLift();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeAcceptMatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.acceptMatch(this.ops["AcceptMatch"].applicator.apply(partialParams));
    }
    invokeClaimGameServer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.claimGameServer(this.ops["ClaimGameServer"].applicator.apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].applicator.apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].applicator.apply(partialParams));
    }
    invokeCreateFleetLocations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFleetLocations(this.ops["CreateFleetLocations"].applicator.apply(partialParams));
    }
    invokeCreateGameServerGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGameServerGroup(this.ops["CreateGameServerGroup"].applicator.apply(partialParams));
    }
    invokeCreateGameSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGameSession(this.ops["CreateGameSession"].applicator.apply(partialParams));
    }
    invokeCreateGameSessionQueue(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGameSessionQueue(this.ops["CreateGameSessionQueue"].applicator.apply(partialParams));
    }
    invokeCreateMatchmakingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMatchmakingConfiguration(this.ops["CreateMatchmakingConfiguration"].applicator.apply(partialParams));
    }
    invokeCreateMatchmakingRuleSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMatchmakingRuleSet(this.ops["CreateMatchmakingRuleSet"].applicator.apply(partialParams));
    }
    invokeCreatePlayerSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlayerSession(this.ops["CreatePlayerSession"].applicator.apply(partialParams));
    }
    invokeCreatePlayerSessions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPlayerSessions(this.ops["CreatePlayerSessions"].applicator.apply(partialParams));
    }
    invokeCreateVpcPeeringAuthorization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcPeeringAuthorization(this.ops["CreateVpcPeeringAuthorization"].applicator.apply(partialParams));
    }
    invokeCreateVpcPeeringConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcPeeringConnection(this.ops["CreateVpcPeeringConnection"].applicator.apply(partialParams));
    }
    invokeDeleteAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlias(this.ops["DeleteAlias"].applicator.apply(partialParams));
    }
    invokeDeleteBuild(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBuild(this.ops["DeleteBuild"].applicator.apply(partialParams));
    }
    invokeDeleteFleet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleet(this.ops["DeleteFleet"].applicator.apply(partialParams));
    }
    invokeDeleteFleetLocations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFleetLocations(this.ops["DeleteFleetLocations"].applicator.apply(partialParams));
    }
    invokeDeleteGameServerGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGameServerGroup(this.ops["DeleteGameServerGroup"].applicator.apply(partialParams));
    }
    invokeDeleteGameSessionQueue(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGameSessionQueue(this.ops["DeleteGameSessionQueue"].applicator.apply(partialParams));
    }
    invokeDeleteMatchmakingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMatchmakingConfiguration(this.ops["DeleteMatchmakingConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteMatchmakingRuleSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMatchmakingRuleSet(this.ops["DeleteMatchmakingRuleSet"].applicator.apply(partialParams));
    }
    invokeDeleteScalingPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScalingPolicy(this.ops["DeleteScalingPolicy"].applicator.apply(partialParams));
    }
    invokeDeleteScript(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteScript(this.ops["DeleteScript"].applicator.apply(partialParams));
    }
    invokeDeleteVpcPeeringAuthorization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcPeeringAuthorization(this.ops["DeleteVpcPeeringAuthorization"].applicator.apply(partialParams));
    }
    invokeDeleteVpcPeeringConnection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcPeeringConnection(this.ops["DeleteVpcPeeringConnection"].applicator.apply(partialParams));
    }
    invokeDeregisterGameServer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterGameServer(this.ops["DeregisterGameServer"].applicator.apply(partialParams));
    }
    invokeDescribeAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAlias(this.ops["DescribeAlias"].applicator.apply(partialParams));
    }
    invokeDescribeBuild(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeBuild(this.ops["DescribeBuild"].applicator.apply(partialParams));
    }
    invokeDescribeFleetEvents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetEvents(this.ops["DescribeFleetEvents"].applicator.apply(partialParams));
    }
    invokeDescribeFleetLocationAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetLocationAttributes(this.ops["DescribeFleetLocationAttributes"].applicator.apply(partialParams));
    }
    invokeDescribeFleetLocationCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetLocationCapacity(this.ops["DescribeFleetLocationCapacity"].applicator.apply(partialParams));
    }
    invokeDescribeFleetLocationUtilization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetLocationUtilization(this.ops["DescribeFleetLocationUtilization"].applicator.apply(partialParams));
    }
    invokeDescribeFleetPortSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFleetPortSettings(this.ops["DescribeFleetPortSettings"].applicator.apply(partialParams));
    }
    invokeDescribeGameServer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameServer(this.ops["DescribeGameServer"].applicator.apply(partialParams));
    }
    invokeDescribeGameServerGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameServerGroup(this.ops["DescribeGameServerGroup"].applicator.apply(partialParams));
    }
    invokeDescribeGameServerInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameServerInstances(this.ops["DescribeGameServerInstances"].applicator.apply(partialParams));
    }
    invokeDescribeGameSessionPlacement(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGameSessionPlacement(this.ops["DescribeGameSessionPlacement"].applicator.apply(partialParams));
    }
    invokeDescribeInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstances(this.ops["DescribeInstances"].applicator.apply(partialParams));
    }
    invokeDescribeMatchmaking(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMatchmaking(this.ops["DescribeMatchmaking"].applicator.apply(partialParams));
    }
    invokeDescribeRuntimeConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRuntimeConfiguration(this.ops["DescribeRuntimeConfiguration"].applicator.apply(partialParams));
    }
    invokeDescribeScalingPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScalingPolicies(this.ops["DescribeScalingPolicies"].applicator.apply(partialParams));
    }
    invokeDescribeScript(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeScript(this.ops["DescribeScript"].applicator.apply(partialParams));
    }
    invokeGetGameSessionLogUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGameSessionLogUrl(this.ops["GetGameSessionLogUrl"].applicator.apply(partialParams));
    }
    invokeGetInstanceAccess(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getInstanceAccess(this.ops["GetInstanceAccess"].applicator.apply(partialParams));
    }
    invokeListGameServers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGameServers(this.ops["ListGameServers"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokePutScalingPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].applicator.apply(partialParams));
    }
    invokeRegisterGameServer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerGameServer(this.ops["RegisterGameServer"].applicator.apply(partialParams));
    }
    invokeRequestUploadCredentials(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.requestUploadCredentials(this.ops["RequestUploadCredentials"].applicator.apply(partialParams));
    }
    invokeResolveAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resolveAlias(this.ops["ResolveAlias"].applicator.apply(partialParams));
    }
    invokeResumeGameServerGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeGameServerGroup(this.ops["ResumeGameServerGroup"].applicator.apply(partialParams));
    }
    invokeStartFleetActions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startFleetActions(this.ops["StartFleetActions"].applicator.apply(partialParams));
    }
    invokeStartGameSessionPlacement(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startGameSessionPlacement(this.ops["StartGameSessionPlacement"].applicator.apply(partialParams));
    }
    invokeStartMatchBackfill(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMatchBackfill(this.ops["StartMatchBackfill"].applicator.apply(partialParams));
    }
    invokeStartMatchmaking(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startMatchmaking(this.ops["StartMatchmaking"].applicator.apply(partialParams));
    }
    invokeStopFleetActions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopFleetActions(this.ops["StopFleetActions"].applicator.apply(partialParams));
    }
    invokeStopGameSessionPlacement(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopGameSessionPlacement(this.ops["StopGameSessionPlacement"].applicator.apply(partialParams));
    }
    invokeStopMatchmaking(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopMatchmaking(this.ops["StopMatchmaking"].applicator.apply(partialParams));
    }
    invokeSuspendGameServerGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.suspendGameServerGroup(this.ops["SuspendGameServerGroup"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAlias(this.ops["UpdateAlias"].applicator.apply(partialParams));
    }
    invokeUpdateBuild(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBuild(this.ops["UpdateBuild"].applicator.apply(partialParams));
    }
    invokeUpdateFleetAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetAttributes(this.ops["UpdateFleetAttributes"].applicator.apply(partialParams));
    }
    invokeUpdateFleetCapacity(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetCapacity(this.ops["UpdateFleetCapacity"].applicator.apply(partialParams));
    }
    invokeUpdateFleetPortSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFleetPortSettings(this.ops["UpdateFleetPortSettings"].applicator.apply(partialParams));
    }
    invokeUpdateGameServer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameServer(this.ops["UpdateGameServer"].applicator.apply(partialParams));
    }
    invokeUpdateGameServerGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameServerGroup(this.ops["UpdateGameServerGroup"].applicator.apply(partialParams));
    }
    invokeUpdateGameSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameSession(this.ops["UpdateGameSession"].applicator.apply(partialParams));
    }
    invokeUpdateGameSessionQueue(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGameSessionQueue(this.ops["UpdateGameSessionQueue"].applicator.apply(partialParams));
    }
    invokeUpdateMatchmakingConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMatchmakingConfiguration(this.ops["UpdateMatchmakingConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateRuntimeConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRuntimeConfiguration(this.ops["UpdateRuntimeConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateScript(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateScript(this.ops["UpdateScript"].applicator.apply(partialParams));
    }
    invokeValidateMatchmakingRuleSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.validateMatchmakingRuleSet(this.ops["ValidateMatchmakingRuleSet"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
