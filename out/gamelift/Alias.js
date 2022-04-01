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
    invokeCreateAlias(partialParams) {
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateFleet(partialParams) {
        this.boot();
        return this.client.createFleet(this.ops["CreateFleet"].apply(partialParams));
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
    invokePutScalingPolicy(partialParams) {
        this.boot();
        return this.client.putScalingPolicy(this.ops["PutScalingPolicy"].apply(partialParams));
    }
    invokeUpdateGameSessionQueue(partialParams) {
        this.boot();
        return this.client.updateGameSessionQueue(this.ops["UpdateGameSessionQueue"].apply(partialParams));
    }
    invokeUpdateMatchmakingConfiguration(partialParams) {
        this.boot();
        return this.client.updateMatchmakingConfiguration(this.ops["UpdateMatchmakingConfiguration"].apply(partialParams));
    }
}
exports.default = default_1;
