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
class default_1 extends aws.secretsmanager.SecretVersion {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SecretsManager();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/secretsmanager-2017-10-17.normal.json"), this.client);
    }
    invokeCancelRotateSecret(partialParams) {
        return this.client.cancelRotateSecret(this.ops["CancelRotateSecret"].apply(partialParams));
    }
    invokeCreateSecret(partialParams) {
        return this.client.createSecret(this.ops["CreateSecret"].apply(partialParams));
    }
    invokeDeleteResourcePolicy(partialParams) {
        return this.client.deleteResourcePolicy(this.ops["DeleteResourcePolicy"].apply(partialParams));
    }
    invokeDeleteSecret(partialParams) {
        return this.client.deleteSecret(this.ops["DeleteSecret"].apply(partialParams));
    }
    invokeDescribeSecret(partialParams) {
        return this.client.describeSecret(this.ops["DescribeSecret"].apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].apply(partialParams));
    }
    invokeGetSecretValue(partialParams) {
        return this.client.getSecretValue(this.ops["GetSecretValue"].apply(partialParams));
    }
    invokeListSecretVersionIds(partialParams) {
        return this.client.listSecretVersionIds(this.ops["ListSecretVersionIds"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokePutSecretValue(partialParams) {
        return this.client.putSecretValue(this.ops["PutSecretValue"].apply(partialParams));
    }
    invokeRemoveRegionsFromReplication(partialParams) {
        return this.client.removeRegionsFromReplication(this.ops["RemoveRegionsFromReplication"].apply(partialParams));
    }
    invokeReplicateSecretToRegions(partialParams) {
        return this.client.replicateSecretToRegions(this.ops["ReplicateSecretToRegions"].apply(partialParams));
    }
    invokeRestoreSecret(partialParams) {
        return this.client.restoreSecret(this.ops["RestoreSecret"].apply(partialParams));
    }
    invokeRotateSecret(partialParams) {
        return this.client.rotateSecret(this.ops["RotateSecret"].apply(partialParams));
    }
    invokeStopReplicationToReplica(partialParams) {
        return this.client.stopReplicationToReplica(this.ops["StopReplicationToReplica"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateSecret(partialParams) {
        return this.client.updateSecret(this.ops["UpdateSecret"].apply(partialParams));
    }
    invokeUpdateSecretVersionStage(partialParams) {
        return this.client.updateSecretVersionStage(this.ops["UpdateSecretVersionStage"].apply(partialParams));
    }
    invokeValidateResourcePolicy(partialParams) {
        return this.client.validateResourcePolicy(this.ops["ValidateResourcePolicy"].apply(partialParams));
    }
}
exports.default = default_1;
