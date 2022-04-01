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
const schema = require("../apis/secretsmanager-2017-10-17.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.secretsmanager.Secret {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SecretsManager();
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
    invokeCancelRotateSecret(partialParams) {
        this.boot();
        return this.client.cancelRotateSecret(this.ops["CancelRotateSecret"].apply(partialParams));
    }
    invokeCreateSecret(partialParams) {
        this.boot();
        return this.client.createSecret(this.ops["CreateSecret"].apply(partialParams));
    }
    invokeDeleteResourcePolicy(partialParams) {
        this.boot();
        return this.client.deleteResourcePolicy(this.ops["DeleteResourcePolicy"].apply(partialParams));
    }
    invokeDeleteSecret(partialParams) {
        this.boot();
        return this.client.deleteSecret(this.ops["DeleteSecret"].apply(partialParams));
    }
    invokeDescribeSecret(partialParams) {
        this.boot();
        return this.client.describeSecret(this.ops["DescribeSecret"].apply(partialParams));
    }
    invokeGetRandomPassword(partialParams) {
        this.boot();
        return this.client.getRandomPassword(this.ops["GetRandomPassword"].apply(partialParams));
    }
    invokeGetResourcePolicy(partialParams) {
        this.boot();
        return this.client.getResourcePolicy(this.ops["GetResourcePolicy"].apply(partialParams));
    }
    invokeGetSecretValue(partialParams) {
        this.boot();
        return this.client.getSecretValue(this.ops["GetSecretValue"].apply(partialParams));
    }
    invokeListSecretVersionIds(partialParams) {
        this.boot();
        return this.client.listSecretVersionIds(this.ops["ListSecretVersionIds"].apply(partialParams));
    }
    invokeListSecrets(partialParams) {
        this.boot();
        return this.client.listSecrets(this.ops["ListSecrets"].apply(partialParams));
    }
    invokePutResourcePolicy(partialParams) {
        this.boot();
        return this.client.putResourcePolicy(this.ops["PutResourcePolicy"].apply(partialParams));
    }
    invokePutSecretValue(partialParams) {
        this.boot();
        return this.client.putSecretValue(this.ops["PutSecretValue"].apply(partialParams));
    }
    invokeRemoveRegionsFromReplication(partialParams) {
        this.boot();
        return this.client.removeRegionsFromReplication(this.ops["RemoveRegionsFromReplication"].apply(partialParams));
    }
    invokeReplicateSecretToRegions(partialParams) {
        this.boot();
        return this.client.replicateSecretToRegions(this.ops["ReplicateSecretToRegions"].apply(partialParams));
    }
    invokeRestoreSecret(partialParams) {
        this.boot();
        return this.client.restoreSecret(this.ops["RestoreSecret"].apply(partialParams));
    }
    invokeRotateSecret(partialParams) {
        this.boot();
        return this.client.rotateSecret(this.ops["RotateSecret"].apply(partialParams));
    }
    invokeStopReplicationToReplica(partialParams) {
        this.boot();
        return this.client.stopReplicationToReplica(this.ops["StopReplicationToReplica"].apply(partialParams));
    }
    invokeUpdateSecret(partialParams) {
        this.boot();
        return this.client.updateSecret(this.ops["UpdateSecret"].apply(partialParams));
    }
    invokeUpdateSecretVersionStage(partialParams) {
        this.boot();
        return this.client.updateSecretVersionStage(this.ops["UpdateSecretVersionStage"].apply(partialParams));
    }
    invokeValidateResourcePolicy(partialParams) {
        this.boot();
        return this.client.validateResourcePolicy(this.ops["ValidateResourcePolicy"].apply(partialParams));
    }
}
exports.default = default_1;
