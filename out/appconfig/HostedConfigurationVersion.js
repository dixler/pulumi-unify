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
const schema = require("../apis/appconfig-2019-10-09.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.appconfig.HostedConfigurationVersion {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AppConfig();
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
    invokeCreateConfigurationProfile(partialParams) {
        this.boot();
        return this.client.createConfigurationProfile(this.ops["CreateConfigurationProfile"].apply(partialParams));
    }
    invokeCreateEnvironment(partialParams) {
        this.boot();
        return this.client.createEnvironment(this.ops["CreateEnvironment"].apply(partialParams));
    }
    invokeCreateHostedConfigurationVersion(partialParams) {
        this.boot();
        return this.client.createHostedConfigurationVersion(this.ops["CreateHostedConfigurationVersion"].apply(partialParams));
    }
    invokeGetApplication(partialParams) {
        this.boot();
        return this.client.getApplication(this.ops["GetApplication"].apply(partialParams));
    }
    invokeGetConfigurationProfile(partialParams) {
        this.boot();
        return this.client.getConfigurationProfile(this.ops["GetConfigurationProfile"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        this.boot();
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetEnvironment(partialParams) {
        this.boot();
        return this.client.getEnvironment(this.ops["GetEnvironment"].apply(partialParams));
    }
    invokeGetHostedConfigurationVersion(partialParams) {
        this.boot();
        return this.client.getHostedConfigurationVersion(this.ops["GetHostedConfigurationVersion"].apply(partialParams));
    }
    invokeListConfigurationProfiles(partialParams) {
        this.boot();
        return this.client.listConfigurationProfiles(this.ops["ListConfigurationProfiles"].apply(partialParams));
    }
    invokeListDeployments(partialParams) {
        this.boot();
        return this.client.listDeployments(this.ops["ListDeployments"].apply(partialParams));
    }
    invokeListEnvironments(partialParams) {
        this.boot();
        return this.client.listEnvironments(this.ops["ListEnvironments"].apply(partialParams));
    }
    invokeListHostedConfigurationVersions(partialParams) {
        this.boot();
        return this.client.listHostedConfigurationVersions(this.ops["ListHostedConfigurationVersions"].apply(partialParams));
    }
    invokeStartDeployment(partialParams) {
        this.boot();
        return this.client.startDeployment(this.ops["StartDeployment"].apply(partialParams));
    }
    invokeStopDeployment(partialParams) {
        this.boot();
        return this.client.stopDeployment(this.ops["StopDeployment"].apply(partialParams));
    }
    invokeUpdateApplication(partialParams) {
        this.boot();
        return this.client.updateApplication(this.ops["UpdateApplication"].apply(partialParams));
    }
    invokeUpdateConfigurationProfile(partialParams) {
        this.boot();
        return this.client.updateConfigurationProfile(this.ops["UpdateConfigurationProfile"].apply(partialParams));
    }
    invokeUpdateEnvironment(partialParams) {
        this.boot();
        return this.client.updateEnvironment(this.ops["UpdateEnvironment"].apply(partialParams));
    }
}
exports.default = default_1;
