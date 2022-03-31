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
class default_1 extends aws.lambda.Function {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Lambda();
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
    invokeAddLayerVersionPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addLayerVersionPermission(this.ops["AddLayerVersionPermission"].applicator.apply(partialParams));
    }
    invokeAddPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addPermission(this.ops["AddPermission"].applicator.apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAlias(this.ops["CreateAlias"].applicator.apply(partialParams));
    }
    invokeCreateCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCodeSigningConfig(this.ops["CreateCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeCreateEventSourceMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createEventSourceMapping(this.ops["CreateEventSourceMapping"].applicator.apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFunction(this.ops["CreateFunction"].applicator.apply(partialParams));
    }
    invokeDeleteAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAlias(this.ops["DeleteAlias"].applicator.apply(partialParams));
    }
    invokeDeleteCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCodeSigningConfig(this.ops["DeleteCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeDeleteEventSourceMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteEventSourceMapping(this.ops["DeleteEventSourceMapping"].applicator.apply(partialParams));
    }
    invokeDeleteFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunction(this.ops["DeleteFunction"].applicator.apply(partialParams));
    }
    invokeDeleteFunctionCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunctionCodeSigningConfig(this.ops["DeleteFunctionCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeDeleteFunctionConcurrency(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunctionConcurrency(this.ops["DeleteFunctionConcurrency"].applicator.apply(partialParams));
    }
    invokeDeleteFunctionEventInvokeConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFunctionEventInvokeConfig(this.ops["DeleteFunctionEventInvokeConfig"].applicator.apply(partialParams));
    }
    invokeDeleteLayerVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteLayerVersion(this.ops["DeleteLayerVersion"].applicator.apply(partialParams));
    }
    invokeDeleteProvisionedConcurrencyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteProvisionedConcurrencyConfig(this.ops["DeleteProvisionedConcurrencyConfig"].applicator.apply(partialParams));
    }
    invokeGetAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAlias(this.ops["GetAlias"].applicator.apply(partialParams));
    }
    invokeGetCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCodeSigningConfig(this.ops["GetCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeGetEventSourceMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getEventSourceMapping(this.ops["GetEventSourceMapping"].applicator.apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunction(this.ops["GetFunction"].applicator.apply(partialParams));
    }
    invokeGetFunctionCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionCodeSigningConfig(this.ops["GetFunctionCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeGetFunctionConcurrency(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionConcurrency(this.ops["GetFunctionConcurrency"].applicator.apply(partialParams));
    }
    invokeGetFunctionConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionConfiguration(this.ops["GetFunctionConfiguration"].applicator.apply(partialParams));
    }
    invokeGetFunctionEventInvokeConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFunctionEventInvokeConfig(this.ops["GetFunctionEventInvokeConfig"].applicator.apply(partialParams));
    }
    invokeGetLayerVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLayerVersion(this.ops["GetLayerVersion"].applicator.apply(partialParams));
    }
    invokeGetLayerVersionByArn(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLayerVersionByArn(this.ops["GetLayerVersionByArn"].applicator.apply(partialParams));
    }
    invokeGetLayerVersionPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getLayerVersionPolicy(this.ops["GetLayerVersionPolicy"].applicator.apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].applicator.apply(partialParams));
    }
    invokeGetProvisionedConcurrencyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getProvisionedConcurrencyConfig(this.ops["GetProvisionedConcurrencyConfig"].applicator.apply(partialParams));
    }
    invokeInvoke(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.invoke(this.ops["Invoke"].applicator.apply(partialParams));
    }
    invokeInvokeAsync(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.invokeAsync(this.ops["InvokeAsync"].applicator.apply(partialParams));
    }
    invokeListAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAliases(this.ops["ListAliases"].applicator.apply(partialParams));
    }
    invokeListFunctionEventInvokeConfigs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFunctionEventInvokeConfigs(this.ops["ListFunctionEventInvokeConfigs"].applicator.apply(partialParams));
    }
    invokeListFunctionsByCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFunctionsByCodeSigningConfig(this.ops["ListFunctionsByCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeListLayerVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLayerVersions(this.ops["ListLayerVersions"].applicator.apply(partialParams));
    }
    invokeListProvisionedConcurrencyConfigs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listProvisionedConcurrencyConfigs(this.ops["ListProvisionedConcurrencyConfigs"].applicator.apply(partialParams));
    }
    invokeListTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTags(this.ops["ListTags"].applicator.apply(partialParams));
    }
    invokeListVersionsByFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listVersionsByFunction(this.ops["ListVersionsByFunction"].applicator.apply(partialParams));
    }
    invokePublishLayerVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishLayerVersion(this.ops["PublishLayerVersion"].applicator.apply(partialParams));
    }
    invokePublishVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.publishVersion(this.ops["PublishVersion"].applicator.apply(partialParams));
    }
    invokePutFunctionCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFunctionCodeSigningConfig(this.ops["PutFunctionCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokePutFunctionConcurrency(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFunctionConcurrency(this.ops["PutFunctionConcurrency"].applicator.apply(partialParams));
    }
    invokePutFunctionEventInvokeConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFunctionEventInvokeConfig(this.ops["PutFunctionEventInvokeConfig"].applicator.apply(partialParams));
    }
    invokePutProvisionedConcurrencyConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putProvisionedConcurrencyConfig(this.ops["PutProvisionedConcurrencyConfig"].applicator.apply(partialParams));
    }
    invokeRemoveLayerVersionPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeLayerVersionPermission(this.ops["RemoveLayerVersionPermission"].applicator.apply(partialParams));
    }
    invokeRemovePermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removePermission(this.ops["RemovePermission"].applicator.apply(partialParams));
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
    invokeUpdateCodeSigningConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateCodeSigningConfig(this.ops["UpdateCodeSigningConfig"].applicator.apply(partialParams));
    }
    invokeUpdateEventSourceMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateEventSourceMapping(this.ops["UpdateEventSourceMapping"].applicator.apply(partialParams));
    }
    invokeUpdateFunctionCode(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunctionCode(this.ops["UpdateFunctionCode"].applicator.apply(partialParams));
    }
    invokeUpdateFunctionConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunctionConfiguration(this.ops["UpdateFunctionConfiguration"].applicator.apply(partialParams));
    }
    invokeUpdateFunctionEventInvokeConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFunctionEventInvokeConfig(this.ops["UpdateFunctionEventInvokeConfig"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
