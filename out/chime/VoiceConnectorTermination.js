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
const schema = require("../apis/chime-2018-05-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.chime.VoiceConnectorTermination {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Chime();
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
    invokeAssociatePhoneNumbersWithVoiceConnector(partialParams) {
        this.boot();
        return this.client.associatePhoneNumbersWithVoiceConnector(this.ops["AssociatePhoneNumbersWithVoiceConnector"].apply(partialParams));
    }
    invokeCreateProxySession(partialParams) {
        this.boot();
        return this.client.createProxySession(this.ops["CreateProxySession"].apply(partialParams));
    }
    invokeDisassociatePhoneNumbersFromVoiceConnector(partialParams) {
        this.boot();
        return this.client.disassociatePhoneNumbersFromVoiceConnector(this.ops["DisassociatePhoneNumbersFromVoiceConnector"].apply(partialParams));
    }
    invokeGetProxySession(partialParams) {
        this.boot();
        return this.client.getProxySession(this.ops["GetProxySession"].apply(partialParams));
    }
    invokeGetVoiceConnector(partialParams) {
        this.boot();
        return this.client.getVoiceConnector(this.ops["GetVoiceConnector"].apply(partialParams));
    }
    invokeGetVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorEmergencyCallingConfiguration(this.ops["GetVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorLoggingConfiguration(this.ops["GetVoiceConnectorLoggingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorOrigination(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorOrigination(this.ops["GetVoiceConnectorOrigination"].apply(partialParams));
    }
    invokeGetVoiceConnectorProxy(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorProxy(this.ops["GetVoiceConnectorProxy"].apply(partialParams));
    }
    invokeGetVoiceConnectorStreamingConfiguration(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorStreamingConfiguration(this.ops["GetVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokeGetVoiceConnectorTermination(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorTermination(this.ops["GetVoiceConnectorTermination"].apply(partialParams));
    }
    invokeGetVoiceConnectorTerminationHealth(partialParams) {
        this.boot();
        return this.client.getVoiceConnectorTerminationHealth(this.ops["GetVoiceConnectorTerminationHealth"].apply(partialParams));
    }
    invokeListProxySessions(partialParams) {
        this.boot();
        return this.client.listProxySessions(this.ops["ListProxySessions"].apply(partialParams));
    }
    invokeListVoiceConnectorTerminationCredentials(partialParams) {
        this.boot();
        return this.client.listVoiceConnectorTerminationCredentials(this.ops["ListVoiceConnectorTerminationCredentials"].apply(partialParams));
    }
    invokePutVoiceConnectorEmergencyCallingConfiguration(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorEmergencyCallingConfiguration(this.ops["PutVoiceConnectorEmergencyCallingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorLoggingConfiguration(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorLoggingConfiguration(this.ops["PutVoiceConnectorLoggingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorOrigination(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorOrigination(this.ops["PutVoiceConnectorOrigination"].apply(partialParams));
    }
    invokePutVoiceConnectorProxy(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorProxy(this.ops["PutVoiceConnectorProxy"].apply(partialParams));
    }
    invokePutVoiceConnectorStreamingConfiguration(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorStreamingConfiguration(this.ops["PutVoiceConnectorStreamingConfiguration"].apply(partialParams));
    }
    invokePutVoiceConnectorTermination(partialParams) {
        this.boot();
        return this.client.putVoiceConnectorTermination(this.ops["PutVoiceConnectorTermination"].apply(partialParams));
    }
    invokeUpdateProxySession(partialParams) {
        this.boot();
        return this.client.updateProxySession(this.ops["UpdateProxySession"].apply(partialParams));
    }
    invokeUpdateVoiceConnector(partialParams) {
        this.boot();
        return this.client.updateVoiceConnector(this.ops["UpdateVoiceConnector"].apply(partialParams));
    }
}
exports.default = default_1;
