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
const schema = require("../apis/elasticache-2015-02-02.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.elasticache.GlobalReplicationGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ElastiCache();
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
    invokeCreateGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.createGlobalReplicationGroup(this.ops["CreateGlobalReplicationGroup"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateUserGroup(partialParams) {
        this.boot();
        return this.client.createUserGroup(this.ops["CreateUserGroup"].apply(partialParams));
    }
    invokeDecreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.decreaseNodeGroupsInGlobalReplicationGroup(this.ops["DecreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeDeleteGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.deleteGlobalReplicationGroup(this.ops["DeleteGlobalReplicationGroup"].apply(partialParams));
    }
    invokeDisassociateGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.disassociateGlobalReplicationGroup(this.ops["DisassociateGlobalReplicationGroup"].apply(partialParams));
    }
    invokeFailoverGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.failoverGlobalReplicationGroup(this.ops["FailoverGlobalReplicationGroup"].apply(partialParams));
    }
    invokeIncreaseNodeGroupsInGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.increaseNodeGroupsInGlobalReplicationGroup(this.ops["IncreaseNodeGroupsInGlobalReplicationGroup"].apply(partialParams));
    }
    invokeModifyGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.modifyGlobalReplicationGroup(this.ops["ModifyGlobalReplicationGroup"].apply(partialParams));
    }
    invokeRebalanceSlotsInGlobalReplicationGroup(partialParams) {
        this.boot();
        return this.client.rebalanceSlotsInGlobalReplicationGroup(this.ops["RebalanceSlotsInGlobalReplicationGroup"].apply(partialParams));
    }
}
exports.default = default_1;
