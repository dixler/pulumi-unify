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
const schema = require("../apis/lambda-2015-03-31.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.lambda.Invocation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Lambda();
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
    invokeAddLayerVersionPermission(partialParams) {
        this.boot();
        return this.client.addLayerVersionPermission(this.ops["AddLayerVersionPermission"].apply(partialParams));
    }
    invokeAddPermission(partialParams) {
        this.boot();
        return this.client.addPermission(this.ops["AddPermission"].apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.createCodeSigningConfig(this.ops["CreateCodeSigningConfig"].apply(partialParams));
    }
    invokeCreateEventSourceMapping(partialParams) {
        this.boot();
        return this.client.createEventSourceMapping(this.ops["CreateEventSourceMapping"].apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        this.boot();
        return this.client.createFunction(this.ops["CreateFunction"].apply(partialParams));
    }
    invokeDeleteCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.deleteCodeSigningConfig(this.ops["DeleteCodeSigningConfig"].apply(partialParams));
    }
    invokeDeleteEventSourceMapping(partialParams) {
        this.boot();
        return this.client.deleteEventSourceMapping(this.ops["DeleteEventSourceMapping"].apply(partialParams));
    }
    invokeGetAccountSettings(partialParams) {
        this.boot();
        return this.client.getAccountSettings(this.ops["GetAccountSettings"].apply(partialParams));
    }
    invokeGetAlias(partialParams) {
        this.boot();
        return this.client.getAlias(this.ops["GetAlias"].apply(partialParams));
    }
    invokeGetCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.getCodeSigningConfig(this.ops["GetCodeSigningConfig"].apply(partialParams));
    }
    invokeGetEventSourceMapping(partialParams) {
        this.boot();
        return this.client.getEventSourceMapping(this.ops["GetEventSourceMapping"].apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        this.boot();
        return this.client.getFunction(this.ops["GetFunction"].apply(partialParams));
    }
    invokeGetFunctionCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.getFunctionCodeSigningConfig(this.ops["GetFunctionCodeSigningConfig"].apply(partialParams));
    }
    invokeGetFunctionConcurrency(partialParams) {
        this.boot();
        return this.client.getFunctionConcurrency(this.ops["GetFunctionConcurrency"].apply(partialParams));
    }
    invokeGetFunctionConfiguration(partialParams) {
        this.boot();
        return this.client.getFunctionConfiguration(this.ops["GetFunctionConfiguration"].apply(partialParams));
    }
    invokeGetFunctionEventInvokeConfig(partialParams) {
        this.boot();
        return this.client.getFunctionEventInvokeConfig(this.ops["GetFunctionEventInvokeConfig"].apply(partialParams));
    }
    invokeGetLayerVersion(partialParams) {
        this.boot();
        return this.client.getLayerVersion(this.ops["GetLayerVersion"].apply(partialParams));
    }
    invokeGetLayerVersionByArn(partialParams) {
        this.boot();
        return this.client.getLayerVersionByArn(this.ops["GetLayerVersionByArn"].apply(partialParams));
    }
    invokeGetLayerVersionPolicy(partialParams) {
        this.boot();
        return this.client.getLayerVersionPolicy(this.ops["GetLayerVersionPolicy"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetProvisionedConcurrencyConfig(partialParams) {
        this.boot();
        return this.client.getProvisionedConcurrencyConfig(this.ops["GetProvisionedConcurrencyConfig"].apply(partialParams));
    }
    invokeInvoke(partialParams) {
        this.boot();
        return this.client.invoke(this.ops["Invoke"].apply(partialParams));
    }
    invokeInvokeAsync(partialParams) {
        this.boot();
        return this.client.invokeAsync(this.ops["InvokeAsync"].apply(partialParams));
    }
    invokeListAliases(partialParams) {
        this.boot();
        return this.client.listAliases(this.ops["ListAliases"].apply(partialParams));
    }
    invokeListCodeSigningConfigs(partialParams) {
        this.boot();
        return this.client.listCodeSigningConfigs(this.ops["ListCodeSigningConfigs"].apply(partialParams));
    }
    invokeListEventSourceMappings(partialParams) {
        this.boot();
        return this.client.listEventSourceMappings(this.ops["ListEventSourceMappings"].apply(partialParams));
    }
    invokeListFunctionEventInvokeConfigs(partialParams) {
        this.boot();
        return this.client.listFunctionEventInvokeConfigs(this.ops["ListFunctionEventInvokeConfigs"].apply(partialParams));
    }
    invokeListFunctions(partialParams) {
        this.boot();
        return this.client.listFunctions(this.ops["ListFunctions"].apply(partialParams));
    }
    invokeListFunctionsByCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.listFunctionsByCodeSigningConfig(this.ops["ListFunctionsByCodeSigningConfig"].apply(partialParams));
    }
    invokeListLayerVersions(partialParams) {
        this.boot();
        return this.client.listLayerVersions(this.ops["ListLayerVersions"].apply(partialParams));
    }
    invokeListLayers(partialParams) {
        this.boot();
        return this.client.listLayers(this.ops["ListLayers"].apply(partialParams));
    }
    invokeListProvisionedConcurrencyConfigs(partialParams) {
        this.boot();
        return this.client.listProvisionedConcurrencyConfigs(this.ops["ListProvisionedConcurrencyConfigs"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListVersionsByFunction(partialParams) {
        this.boot();
        return this.client.listVersionsByFunction(this.ops["ListVersionsByFunction"].apply(partialParams));
    }
    invokePublishLayerVersion(partialParams) {
        this.boot();
        return this.client.publishLayerVersion(this.ops["PublishLayerVersion"].apply(partialParams));
    }
    invokePublishVersion(partialParams) {
        this.boot();
        return this.client.publishVersion(this.ops["PublishVersion"].apply(partialParams));
    }
    invokePutFunctionCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.putFunctionCodeSigningConfig(this.ops["PutFunctionCodeSigningConfig"].apply(partialParams));
    }
    invokePutFunctionConcurrency(partialParams) {
        this.boot();
        return this.client.putFunctionConcurrency(this.ops["PutFunctionConcurrency"].apply(partialParams));
    }
    invokePutFunctionEventInvokeConfig(partialParams) {
        this.boot();
        return this.client.putFunctionEventInvokeConfig(this.ops["PutFunctionEventInvokeConfig"].apply(partialParams));
    }
    invokePutProvisionedConcurrencyConfig(partialParams) {
        this.boot();
        return this.client.putProvisionedConcurrencyConfig(this.ops["PutProvisionedConcurrencyConfig"].apply(partialParams));
    }
    invokeUpdateAlias(partialParams) {
        this.boot();
        return this.client.updateAlias(this.ops["UpdateAlias"].apply(partialParams));
    }
    invokeUpdateCodeSigningConfig(partialParams) {
        this.boot();
        return this.client.updateCodeSigningConfig(this.ops["UpdateCodeSigningConfig"].apply(partialParams));
    }
    invokeUpdateEventSourceMapping(partialParams) {
        this.boot();
        return this.client.updateEventSourceMapping(this.ops["UpdateEventSourceMapping"].apply(partialParams));
    }
    invokeUpdateFunctionCode(partialParams) {
        this.boot();
        return this.client.updateFunctionCode(this.ops["UpdateFunctionCode"].apply(partialParams));
    }
    invokeUpdateFunctionConfiguration(partialParams) {
        this.boot();
        return this.client.updateFunctionConfiguration(this.ops["UpdateFunctionConfiguration"].apply(partialParams));
    }
    invokeUpdateFunctionEventInvokeConfig(partialParams) {
        this.boot();
        return this.client.updateFunctionEventInvokeConfig(this.ops["UpdateFunctionEventInvokeConfig"].apply(partialParams));
    }
}
exports.default = default_1;
