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
class default_1 extends aws.lambda.Permission {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Lambda();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/lambda-2015-03-31.normal.json"), this.client);
    }
    invokeAddLayerVersionPermission(partialParams) {
        return this.client.addLayerVersionPermission(this.ops["AddLayerVersionPermission"].apply(partialParams));
    }
    invokeAddPermission(partialParams) {
        return this.client.addPermission(this.ops["AddPermission"].apply(partialParams));
    }
    invokeCreateAlias(partialParams) {
        return this.client.createAlias(this.ops["CreateAlias"].apply(partialParams));
    }
    invokeCreateCodeSigningConfig(partialParams) {
        return this.client.createCodeSigningConfig(this.ops["CreateCodeSigningConfig"].apply(partialParams));
    }
    invokeCreateEventSourceMapping(partialParams) {
        return this.client.createEventSourceMapping(this.ops["CreateEventSourceMapping"].apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        return this.client.createFunction(this.ops["CreateFunction"].apply(partialParams));
    }
    invokeDeleteAlias(partialParams) {
        return this.client.deleteAlias(this.ops["DeleteAlias"].apply(partialParams));
    }
    invokeDeleteCodeSigningConfig(partialParams) {
        return this.client.deleteCodeSigningConfig(this.ops["DeleteCodeSigningConfig"].apply(partialParams));
    }
    invokeDeleteEventSourceMapping(partialParams) {
        return this.client.deleteEventSourceMapping(this.ops["DeleteEventSourceMapping"].apply(partialParams));
    }
    invokeDeleteFunction(partialParams) {
        return this.client.deleteFunction(this.ops["DeleteFunction"].apply(partialParams));
    }
    invokeDeleteFunctionCodeSigningConfig(partialParams) {
        return this.client.deleteFunctionCodeSigningConfig(this.ops["DeleteFunctionCodeSigningConfig"].apply(partialParams));
    }
    invokeDeleteFunctionConcurrency(partialParams) {
        return this.client.deleteFunctionConcurrency(this.ops["DeleteFunctionConcurrency"].apply(partialParams));
    }
    invokeDeleteFunctionEventInvokeConfig(partialParams) {
        return this.client.deleteFunctionEventInvokeConfig(this.ops["DeleteFunctionEventInvokeConfig"].apply(partialParams));
    }
    invokeDeleteLayerVersion(partialParams) {
        return this.client.deleteLayerVersion(this.ops["DeleteLayerVersion"].apply(partialParams));
    }
    invokeDeleteProvisionedConcurrencyConfig(partialParams) {
        return this.client.deleteProvisionedConcurrencyConfig(this.ops["DeleteProvisionedConcurrencyConfig"].apply(partialParams));
    }
    invokeGetAlias(partialParams) {
        return this.client.getAlias(this.ops["GetAlias"].apply(partialParams));
    }
    invokeGetCodeSigningConfig(partialParams) {
        return this.client.getCodeSigningConfig(this.ops["GetCodeSigningConfig"].apply(partialParams));
    }
    invokeGetEventSourceMapping(partialParams) {
        return this.client.getEventSourceMapping(this.ops["GetEventSourceMapping"].apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        return this.client.getFunction(this.ops["GetFunction"].apply(partialParams));
    }
    invokeGetFunctionCodeSigningConfig(partialParams) {
        return this.client.getFunctionCodeSigningConfig(this.ops["GetFunctionCodeSigningConfig"].apply(partialParams));
    }
    invokeGetFunctionConcurrency(partialParams) {
        return this.client.getFunctionConcurrency(this.ops["GetFunctionConcurrency"].apply(partialParams));
    }
    invokeGetFunctionConfiguration(partialParams) {
        return this.client.getFunctionConfiguration(this.ops["GetFunctionConfiguration"].apply(partialParams));
    }
    invokeGetFunctionEventInvokeConfig(partialParams) {
        return this.client.getFunctionEventInvokeConfig(this.ops["GetFunctionEventInvokeConfig"].apply(partialParams));
    }
    invokeGetLayerVersion(partialParams) {
        return this.client.getLayerVersion(this.ops["GetLayerVersion"].apply(partialParams));
    }
    invokeGetLayerVersionByArn(partialParams) {
        return this.client.getLayerVersionByArn(this.ops["GetLayerVersionByArn"].apply(partialParams));
    }
    invokeGetLayerVersionPolicy(partialParams) {
        return this.client.getLayerVersionPolicy(this.ops["GetLayerVersionPolicy"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetProvisionedConcurrencyConfig(partialParams) {
        return this.client.getProvisionedConcurrencyConfig(this.ops["GetProvisionedConcurrencyConfig"].apply(partialParams));
    }
    invokeInvoke(partialParams) {
        return this.client.invoke(this.ops["Invoke"].apply(partialParams));
    }
    invokeInvokeAsync(partialParams) {
        return this.client.invokeAsync(this.ops["InvokeAsync"].apply(partialParams));
    }
    invokeListAliases(partialParams) {
        return this.client.listAliases(this.ops["ListAliases"].apply(partialParams));
    }
    invokeListFunctionEventInvokeConfigs(partialParams) {
        return this.client.listFunctionEventInvokeConfigs(this.ops["ListFunctionEventInvokeConfigs"].apply(partialParams));
    }
    invokeListFunctionsByCodeSigningConfig(partialParams) {
        return this.client.listFunctionsByCodeSigningConfig(this.ops["ListFunctionsByCodeSigningConfig"].apply(partialParams));
    }
    invokeListLayerVersions(partialParams) {
        return this.client.listLayerVersions(this.ops["ListLayerVersions"].apply(partialParams));
    }
    invokeListProvisionedConcurrencyConfigs(partialParams) {
        return this.client.listProvisionedConcurrencyConfigs(this.ops["ListProvisionedConcurrencyConfigs"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListVersionsByFunction(partialParams) {
        return this.client.listVersionsByFunction(this.ops["ListVersionsByFunction"].apply(partialParams));
    }
    invokePublishLayerVersion(partialParams) {
        return this.client.publishLayerVersion(this.ops["PublishLayerVersion"].apply(partialParams));
    }
    invokePublishVersion(partialParams) {
        return this.client.publishVersion(this.ops["PublishVersion"].apply(partialParams));
    }
    invokePutFunctionCodeSigningConfig(partialParams) {
        return this.client.putFunctionCodeSigningConfig(this.ops["PutFunctionCodeSigningConfig"].apply(partialParams));
    }
    invokePutFunctionConcurrency(partialParams) {
        return this.client.putFunctionConcurrency(this.ops["PutFunctionConcurrency"].apply(partialParams));
    }
    invokePutFunctionEventInvokeConfig(partialParams) {
        return this.client.putFunctionEventInvokeConfig(this.ops["PutFunctionEventInvokeConfig"].apply(partialParams));
    }
    invokePutProvisionedConcurrencyConfig(partialParams) {
        return this.client.putProvisionedConcurrencyConfig(this.ops["PutProvisionedConcurrencyConfig"].apply(partialParams));
    }
    invokeRemoveLayerVersionPermission(partialParams) {
        return this.client.removeLayerVersionPermission(this.ops["RemoveLayerVersionPermission"].apply(partialParams));
    }
    invokeRemovePermission(partialParams) {
        return this.client.removePermission(this.ops["RemovePermission"].apply(partialParams));
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
    invokeUpdateCodeSigningConfig(partialParams) {
        return this.client.updateCodeSigningConfig(this.ops["UpdateCodeSigningConfig"].apply(partialParams));
    }
    invokeUpdateEventSourceMapping(partialParams) {
        return this.client.updateEventSourceMapping(this.ops["UpdateEventSourceMapping"].apply(partialParams));
    }
    invokeUpdateFunctionCode(partialParams) {
        return this.client.updateFunctionCode(this.ops["UpdateFunctionCode"].apply(partialParams));
    }
    invokeUpdateFunctionConfiguration(partialParams) {
        return this.client.updateFunctionConfiguration(this.ops["UpdateFunctionConfiguration"].apply(partialParams));
    }
    invokeUpdateFunctionEventInvokeConfig(partialParams) {
        return this.client.updateFunctionEventInvokeConfig(this.ops["UpdateFunctionEventInvokeConfig"].apply(partialParams));
    }
}
exports.default = default_1;
