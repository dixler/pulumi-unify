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
    invokeAddPermission(partialParams) {
        this.boot();
        return this.client.addPermission(this.ops["AddPermission"].apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateEventSourceMapping(partialParams) {
        this.boot();
        return this.client.createEventSourceMapping(this.ops["CreateEventSourceMapping"].apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        this.boot();
        return this.client.createFunction(this.ops["CreateFunction"].apply(partialParams));
    }
    invokeGetAlias(partialParams) {
        this.boot();
        return this.client.getAlias(this.ops["GetAlias"].apply(partialParams));
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
    invokeListFunctionEventInvokeConfigs(partialParams) {
        this.boot();
        return this.client.listFunctionEventInvokeConfigs(this.ops["ListFunctionEventInvokeConfigs"].apply(partialParams));
    }
    invokeListProvisionedConcurrencyConfigs(partialParams) {
        this.boot();
        return this.client.listProvisionedConcurrencyConfigs(this.ops["ListProvisionedConcurrencyConfigs"].apply(partialParams));
    }
    invokeListVersionsByFunction(partialParams) {
        this.boot();
        return this.client.listVersionsByFunction(this.ops["ListVersionsByFunction"].apply(partialParams));
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
