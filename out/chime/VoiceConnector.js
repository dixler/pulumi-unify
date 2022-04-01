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
class default_1 extends aws.chime.VoiceConnector {
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
    invokeCreateAccount(partialParams) {
        this.boot();
        return this.client.createAccount(this.ops["CreateAccount"].apply(partialParams));
    }
    invokeCreateAppInstance(partialParams) {
        this.boot();
        return this.client.createAppInstance(this.ops["CreateAppInstance"].apply(partialParams));
    }
    invokeCreateAppInstanceUser(partialParams) {
        this.boot();
        return this.client.createAppInstanceUser(this.ops["CreateAppInstanceUser"].apply(partialParams));
    }
    invokeCreateChannel(partialParams) {
        this.boot();
        return this.client.createChannel(this.ops["CreateChannel"].apply(partialParams));
    }
    invokeCreateRoom(partialParams) {
        this.boot();
        return this.client.createRoom(this.ops["CreateRoom"].apply(partialParams));
    }
    invokeCreateSipMediaApplication(partialParams) {
        this.boot();
        return this.client.createSipMediaApplication(this.ops["CreateSipMediaApplication"].apply(partialParams));
    }
    invokeCreateSipRule(partialParams) {
        this.boot();
        return this.client.createSipRule(this.ops["CreateSipRule"].apply(partialParams));
    }
    invokeCreateVoiceConnector(partialParams) {
        this.boot();
        return this.client.createVoiceConnector(this.ops["CreateVoiceConnector"].apply(partialParams));
    }
    invokeCreateVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.createVoiceConnectorGroup(this.ops["CreateVoiceConnectorGroup"].apply(partialParams));
    }
    invokeUpdateAppInstance(partialParams) {
        this.boot();
        return this.client.updateAppInstance(this.ops["UpdateAppInstance"].apply(partialParams));
    }
    invokeUpdateAppInstanceUser(partialParams) {
        this.boot();
        return this.client.updateAppInstanceUser(this.ops["UpdateAppInstanceUser"].apply(partialParams));
    }
    invokeUpdateChannel(partialParams) {
        this.boot();
        return this.client.updateChannel(this.ops["UpdateChannel"].apply(partialParams));
    }
    invokeUpdateSipRule(partialParams) {
        this.boot();
        return this.client.updateSipRule(this.ops["UpdateSipRule"].apply(partialParams));
    }
    invokeUpdateVoiceConnector(partialParams) {
        this.boot();
        return this.client.updateVoiceConnector(this.ops["UpdateVoiceConnector"].apply(partialParams));
    }
    invokeUpdateVoiceConnectorGroup(partialParams) {
        this.boot();
        return this.client.updateVoiceConnectorGroup(this.ops["UpdateVoiceConnectorGroup"].apply(partialParams));
    }
}
exports.default = default_1;
