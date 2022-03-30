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
class default_1 extends aws.kms.ReplicaExternalKey {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.KMS();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/kms-2014-11-01.normal.json"), this.client);
    }
    invokeCancelKeyDeletion(partialParams) {
        return this.client.cancelKeyDeletion(this.ops["CancelKeyDeletion"].apply(partialParams));
    }
    invokeConnectCustomKeyStore(partialParams) {
        return this.client.connectCustomKeyStore(this.ops["ConnectCustomKeyStore"].apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateCustomKeyStore(partialParams) {
        return this.client.createCustomKeyStore(this.ops["CreateCustomKeyStore"].apply(partialParams));
    }
    invokeCreateGrant(partialParams) {
        return this.client.createGrant(this.ops["CreateGrant"].apply(partialParams));
    }
    invokeDecrypt(partialParams) {
        return this.client.decrypt(this.ops["Decrypt"].apply(partialParams));
    }
    invokeDeleteAlias(partialParams) {
        return this.client.deleteAlias(this.ops["DeleteAlias"].apply(partialParams));
    }
    invokeDeleteCustomKeyStore(partialParams) {
        return this.client.deleteCustomKeyStore(this.ops["DeleteCustomKeyStore"].apply(partialParams));
    }
    invokeDeleteImportedKeyMaterial(partialParams) {
        return this.client.deleteImportedKeyMaterial(this.ops["DeleteImportedKeyMaterial"].apply(partialParams));
    }
    invokeDescribeKey(partialParams) {
        return this.client.describeKey(this.ops["DescribeKey"].apply(partialParams));
    }
    invokeDisableKey(partialParams) {
        return this.client.disableKey(this.ops["DisableKey"].apply(partialParams));
    }
    invokeDisableKeyRotation(partialParams) {
        return this.client.disableKeyRotation(this.ops["DisableKeyRotation"].apply(partialParams));
    }
    invokeDisconnectCustomKeyStore(partialParams) {
        return this.client.disconnectCustomKeyStore(this.ops["DisconnectCustomKeyStore"].apply(partialParams));
    }
    invokeEnableKey(partialParams) {
        return this.client.enableKey(this.ops["EnableKey"].apply(partialParams));
    }
    invokeEnableKeyRotation(partialParams) {
        return this.client.enableKeyRotation(this.ops["EnableKeyRotation"].apply(partialParams));
    }
    invokeEncrypt(partialParams) {
        return this.client.encrypt(this.ops["Encrypt"].apply(partialParams));
    }
    invokeGenerateDataKey(partialParams) {
        return this.client.generateDataKey(this.ops["GenerateDataKey"].apply(partialParams));
    }
    invokeGenerateDataKeyPair(partialParams) {
        return this.client.generateDataKeyPair(this.ops["GenerateDataKeyPair"].apply(partialParams));
    }
    invokeGenerateDataKeyPairWithoutPlaintext(partialParams) {
        return this.client.generateDataKeyPairWithoutPlaintext(this.ops["GenerateDataKeyPairWithoutPlaintext"].apply(partialParams));
    }
    invokeGenerateDataKeyWithoutPlaintext(partialParams) {
        return this.client.generateDataKeyWithoutPlaintext(this.ops["GenerateDataKeyWithoutPlaintext"].apply(partialParams));
    }
    invokeGetKeyPolicy(partialParams) {
        return this.client.getKeyPolicy(this.ops["GetKeyPolicy"].apply(partialParams));
    }
    invokeGetKeyRotationStatus(partialParams) {
        return this.client.getKeyRotationStatus(this.ops["GetKeyRotationStatus"].apply(partialParams));
    }
    invokeGetParametersForImport(partialParams) {
        return this.client.getParametersForImport(this.ops["GetParametersForImport"].apply(partialParams));
    }
    invokeGetPublicKey(partialParams) {
        return this.client.getPublicKey(this.ops["GetPublicKey"].apply(partialParams));
    }
    invokeImportKeyMaterial(partialParams) {
        return this.client.importKeyMaterial(this.ops["ImportKeyMaterial"].apply(partialParams));
    }
    invokeListGrants(partialParams) {
        return this.client.listGrants(this.ops["ListGrants"].apply(partialParams));
    }
    invokeListKeyPolicies(partialParams) {
        return this.client.listKeyPolicies(this.ops["ListKeyPolicies"].apply(partialParams));
    }
    invokeListResourceTags(partialParams) {
        return this.client.listResourceTags(this.ops["ListResourceTags"].apply(partialParams));
    }
    invokeListRetirableGrants(partialParams) {
        return this.client.listRetirableGrants(this.ops["ListRetirableGrants"].apply(partialParams));
    }
    invokePutKeyPolicy(partialParams) {
        return this.client.putKeyPolicy(this.ops["PutKeyPolicy"].apply(partialParams));
    }
    invokeReEncrypt(partialParams) {
        return this.client.reEncrypt(this.ops["ReEncrypt"].apply(partialParams));
    }
    invokeReplicateKey(partialParams) {
        return this.client.replicateKey(this.ops["ReplicateKey"].apply(partialParams));
    }
    invokeRevokeGrant(partialParams) {
        return this.client.revokeGrant(this.ops["RevokeGrant"].apply(partialParams));
    }
    invokeScheduleKeyDeletion(partialParams) {
        return this.client.scheduleKeyDeletion(this.ops["ScheduleKeyDeletion"].apply(partialParams));
    }
    invokeSign(partialParams) {
        return this.client.sign(this.ops["Sign"].apply(partialParams));
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
    invokeUpdateCustomKeyStore(partialParams) {
        return this.client.updateCustomKeyStore(this.ops["UpdateCustomKeyStore"].apply(partialParams));
    }
    invokeUpdateKeyDescription(partialParams) {
        return this.client.updateKeyDescription(this.ops["UpdateKeyDescription"].apply(partialParams));
    }
    invokeUpdatePrimaryRegion(partialParams) {
        return this.client.updatePrimaryRegion(this.ops["UpdatePrimaryRegion"].apply(partialParams));
    }
    invokeVerify(partialParams) {
        return this.client.verify(this.ops["Verify"].apply(partialParams));
    }
}
exports.default = default_1;
