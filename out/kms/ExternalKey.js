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
class default_1 extends aws.kms.ExternalKey {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.KMS();
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
    invokeCancelKeyDeletion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelKeyDeletion(this.ops["CancelKeyDeletion"].applicator.apply(partialParams));
    }
    invokeConnectCustomKeyStore(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.connectCustomKeyStore(this.ops["ConnectCustomKeyStore"].applicator.apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].applicator.apply(partialParams));
    }
    invokeCreateCustomKeyStore(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCustomKeyStore(this.ops["CreateCustomKeyStore"].applicator.apply(partialParams));
    }
    invokeCreateGrant(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGrant(this.ops["CreateGrant"].applicator.apply(partialParams));
    }
    invokeDecrypt(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.decrypt(this.ops["Decrypt"].applicator.apply(partialParams));
    }
    invokeDeleteAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlias(this.ops["DeleteAlias"].applicator.apply(partialParams));
    }
    invokeDeleteCustomKeyStore(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCustomKeyStore(this.ops["DeleteCustomKeyStore"].applicator.apply(partialParams));
    }
    invokeDeleteImportedKeyMaterial(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteImportedKeyMaterial(this.ops["DeleteImportedKeyMaterial"].applicator.apply(partialParams));
    }
    invokeDescribeKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeKey(this.ops["DescribeKey"].applicator.apply(partialParams));
    }
    invokeDisableKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableKey(this.ops["DisableKey"].applicator.apply(partialParams));
    }
    invokeDisableKeyRotation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disableKeyRotation(this.ops["DisableKeyRotation"].applicator.apply(partialParams));
    }
    invokeDisconnectCustomKeyStore(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disconnectCustomKeyStore(this.ops["DisconnectCustomKeyStore"].applicator.apply(partialParams));
    }
    invokeEnableKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableKey(this.ops["EnableKey"].applicator.apply(partialParams));
    }
    invokeEnableKeyRotation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.enableKeyRotation(this.ops["EnableKeyRotation"].applicator.apply(partialParams));
    }
    invokeEncrypt(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.encrypt(this.ops["Encrypt"].applicator.apply(partialParams));
    }
    invokeGenerateDataKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKey(this.ops["GenerateDataKey"].applicator.apply(partialParams));
    }
    invokeGenerateDataKeyPair(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKeyPair(this.ops["GenerateDataKeyPair"].applicator.apply(partialParams));
    }
    invokeGenerateDataKeyPairWithoutPlaintext(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKeyPairWithoutPlaintext(this.ops["GenerateDataKeyPairWithoutPlaintext"].applicator.apply(partialParams));
    }
    invokeGenerateDataKeyWithoutPlaintext(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateDataKeyWithoutPlaintext(this.ops["GenerateDataKeyWithoutPlaintext"].applicator.apply(partialParams));
    }
    invokeGetKeyPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyPolicy(this.ops["GetKeyPolicy"].applicator.apply(partialParams));
    }
    invokeGetKeyRotationStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getKeyRotationStatus(this.ops["GetKeyRotationStatus"].applicator.apply(partialParams));
    }
    invokeGetParametersForImport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParametersForImport(this.ops["GetParametersForImport"].applicator.apply(partialParams));
    }
    invokeGetPublicKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPublicKey(this.ops["GetPublicKey"].applicator.apply(partialParams));
    }
    invokeImportKeyMaterial(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importKeyMaterial(this.ops["ImportKeyMaterial"].applicator.apply(partialParams));
    }
    invokeListGrants(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGrants(this.ops["ListGrants"].applicator.apply(partialParams));
    }
    invokeListKeyPolicies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listKeyPolicies(this.ops["ListKeyPolicies"].applicator.apply(partialParams));
    }
    invokeListResourceTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listResourceTags(this.ops["ListResourceTags"].applicator.apply(partialParams));
    }
    invokeListRetirableGrants(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRetirableGrants(this.ops["ListRetirableGrants"].applicator.apply(partialParams));
    }
    invokePutKeyPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putKeyPolicy(this.ops["PutKeyPolicy"].applicator.apply(partialParams));
    }
    invokeReEncrypt(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reEncrypt(this.ops["ReEncrypt"].applicator.apply(partialParams));
    }
    invokeReplicateKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.replicateKey(this.ops["ReplicateKey"].applicator.apply(partialParams));
    }
    invokeRevokeGrant(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.revokeGrant(this.ops["RevokeGrant"].applicator.apply(partialParams));
    }
    invokeScheduleKeyDeletion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.scheduleKeyDeletion(this.ops["ScheduleKeyDeletion"].applicator.apply(partialParams));
    }
    invokeSign(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sign(this.ops["Sign"].applicator.apply(partialParams));
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
    invokeUpdateCustomKeyStore(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCustomKeyStore(this.ops["UpdateCustomKeyStore"].applicator.apply(partialParams));
    }
    invokeUpdateKeyDescription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateKeyDescription(this.ops["UpdateKeyDescription"].applicator.apply(partialParams));
    }
    invokeUpdatePrimaryRegion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePrimaryRegion(this.ops["UpdatePrimaryRegion"].applicator.apply(partialParams));
    }
    invokeVerify(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.verify(this.ops["Verify"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
