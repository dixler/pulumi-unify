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
const schema = require("../apis/kms-2014-11-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.kms.ReplicaKey {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.KMS();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeCancelKeyDeletion(partialParams) {
        this.boot();
        return this.client.cancelKeyDeletion(this.ops["CancelKeyDeletion"].apply(partialParams));
    }
    invokeConnectCustomKeyStore(partialParams) {
        this.boot();
        return this.client.connectCustomKeyStore(this.ops["ConnectCustomKeyStore"].apply(partialParams));
    }
    invokeCreateCustomKeyStore(partialParams) {
        this.boot();
        return this.client.createCustomKeyStore(this.ops["CreateCustomKeyStore"].apply(partialParams));
    }
    invokeCreateGrant(partialParams) {
        this.boot();
        return this.client.createGrant(this.ops["CreateGrant"].apply(partialParams));
    }
    invokeCreateKey(partialParams) {
        this.boot();
        return this.client.createKey(this.ops["CreateKey"].apply(partialParams));
    }
    invokeDecrypt(partialParams) {
        this.boot();
        return this.client.decrypt(this.ops["Decrypt"].apply(partialParams));
    }
    invokeDeleteCustomKeyStore(partialParams) {
        this.boot();
        return this.client.deleteCustomKeyStore(this.ops["DeleteCustomKeyStore"].apply(partialParams));
    }
    invokeDescribeCustomKeyStores(partialParams) {
        this.boot();
        return this.client.describeCustomKeyStores(this.ops["DescribeCustomKeyStores"].apply(partialParams));
    }
    invokeDescribeKey(partialParams) {
        this.boot();
        return this.client.describeKey(this.ops["DescribeKey"].apply(partialParams));
    }
    invokeDisconnectCustomKeyStore(partialParams) {
        this.boot();
        return this.client.disconnectCustomKeyStore(this.ops["DisconnectCustomKeyStore"].apply(partialParams));
    }
    invokeEncrypt(partialParams) {
        this.boot();
        return this.client.encrypt(this.ops["Encrypt"].apply(partialParams));
    }
    invokeGenerateDataKey(partialParams) {
        this.boot();
        return this.client.generateDataKey(this.ops["GenerateDataKey"].apply(partialParams));
    }
    invokeGenerateDataKeyPair(partialParams) {
        this.boot();
        return this.client.generateDataKeyPair(this.ops["GenerateDataKeyPair"].apply(partialParams));
    }
    invokeGenerateDataKeyPairWithoutPlaintext(partialParams) {
        this.boot();
        return this.client.generateDataKeyPairWithoutPlaintext(this.ops["GenerateDataKeyPairWithoutPlaintext"].apply(partialParams));
    }
    invokeGenerateDataKeyWithoutPlaintext(partialParams) {
        this.boot();
        return this.client.generateDataKeyWithoutPlaintext(this.ops["GenerateDataKeyWithoutPlaintext"].apply(partialParams));
    }
    invokeGenerateRandom(partialParams) {
        this.boot();
        return this.client.generateRandom(this.ops["GenerateRandom"].apply(partialParams));
    }
    invokeGetKeyPolicy(partialParams) {
        this.boot();
        return this.client.getKeyPolicy(this.ops["GetKeyPolicy"].apply(partialParams));
    }
    invokeGetKeyRotationStatus(partialParams) {
        this.boot();
        return this.client.getKeyRotationStatus(this.ops["GetKeyRotationStatus"].apply(partialParams));
    }
    invokeGetParametersForImport(partialParams) {
        this.boot();
        return this.client.getParametersForImport(this.ops["GetParametersForImport"].apply(partialParams));
    }
    invokeGetPublicKey(partialParams) {
        this.boot();
        return this.client.getPublicKey(this.ops["GetPublicKey"].apply(partialParams));
    }
    invokeImportKeyMaterial(partialParams) {
        this.boot();
        return this.client.importKeyMaterial(this.ops["ImportKeyMaterial"].apply(partialParams));
    }
    invokeListAliases(partialParams) {
        this.boot();
        return this.client.listAliases(this.ops["ListAliases"].apply(partialParams));
    }
    invokeListGrants(partialParams) {
        this.boot();
        return this.client.listGrants(this.ops["ListGrants"].apply(partialParams));
    }
    invokeListKeyPolicies(partialParams) {
        this.boot();
        return this.client.listKeyPolicies(this.ops["ListKeyPolicies"].apply(partialParams));
    }
    invokeListKeys(partialParams) {
        this.boot();
        return this.client.listKeys(this.ops["ListKeys"].apply(partialParams));
    }
    invokeListResourceTags(partialParams) {
        this.boot();
        return this.client.listResourceTags(this.ops["ListResourceTags"].apply(partialParams));
    }
    invokeListRetirableGrants(partialParams) {
        this.boot();
        return this.client.listRetirableGrants(this.ops["ListRetirableGrants"].apply(partialParams));
    }
    invokeReEncrypt(partialParams) {
        this.boot();
        return this.client.reEncrypt(this.ops["ReEncrypt"].apply(partialParams));
    }
    invokeReplicateKey(partialParams) {
        this.boot();
        return this.client.replicateKey(this.ops["ReplicateKey"].apply(partialParams));
    }
    invokeScheduleKeyDeletion(partialParams) {
        this.boot();
        return this.client.scheduleKeyDeletion(this.ops["ScheduleKeyDeletion"].apply(partialParams));
    }
    invokeSign(partialParams) {
        this.boot();
        return this.client.sign(this.ops["Sign"].apply(partialParams));
    }
    invokeUpdateCustomKeyStore(partialParams) {
        this.boot();
        return this.client.updateCustomKeyStore(this.ops["UpdateCustomKeyStore"].apply(partialParams));
    }
    invokeVerify(partialParams) {
        this.boot();
        return this.client.verify(this.ops["Verify"].apply(partialParams));
    }
}
exports.default = default_1;
