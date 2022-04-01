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
const schema = require("../apis/apigateway-2015-07-09.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.apigateway.UsagePlanKey {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.APIGateway();
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
    invokeCreateApiKey(partialParams) {
        this.boot();
        return this.client.createApiKey(this.ops["CreateApiKey"].apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        this.boot();
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].apply(partialParams));
    }
    invokeCreateBasePathMapping(partialParams) {
        this.boot();
        return this.client.createBasePathMapping(this.ops["CreateBasePathMapping"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDocumentationPart(partialParams) {
        this.boot();
        return this.client.createDocumentationPart(this.ops["CreateDocumentationPart"].apply(partialParams));
    }
    invokeCreateDocumentationVersion(partialParams) {
        this.boot();
        return this.client.createDocumentationVersion(this.ops["CreateDocumentationVersion"].apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        this.boot();
        return this.client.createDomainName(this.ops["CreateDomainName"].apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        this.boot();
        return this.client.createModel(this.ops["CreateModel"].apply(partialParams));
    }
    invokeCreateRequestValidator(partialParams) {
        this.boot();
        return this.client.createRequestValidator(this.ops["CreateRequestValidator"].apply(partialParams));
    }
    invokeCreateResource(partialParams) {
        this.boot();
        return this.client.createResource(this.ops["CreateResource"].apply(partialParams));
    }
    invokeCreateRestApi(partialParams) {
        this.boot();
        return this.client.createRestApi(this.ops["CreateRestApi"].apply(partialParams));
    }
    invokeCreateStage(partialParams) {
        this.boot();
        return this.client.createStage(this.ops["CreateStage"].apply(partialParams));
    }
    invokeCreateUsagePlan(partialParams) {
        this.boot();
        return this.client.createUsagePlan(this.ops["CreateUsagePlan"].apply(partialParams));
    }
    invokeCreateUsagePlanKey(partialParams) {
        this.boot();
        return this.client.createUsagePlanKey(this.ops["CreateUsagePlanKey"].apply(partialParams));
    }
    invokeCreateVpcLink(partialParams) {
        this.boot();
        return this.client.createVpcLink(this.ops["CreateVpcLink"].apply(partialParams));
    }
    invokeGenerateClientCertificate(partialParams) {
        this.boot();
        return this.client.generateClientCertificate(this.ops["GenerateClientCertificate"].apply(partialParams));
    }
    invokeGetAccount(partialParams) {
        this.boot();
        return this.client.getAccount(this.ops["GetAccount"].apply(partialParams));
    }
    invokeGetApiKey(partialParams) {
        this.boot();
        return this.client.getApiKey(this.ops["GetApiKey"].apply(partialParams));
    }
    invokeGetApiKeys(partialParams) {
        this.boot();
        return this.client.getApiKeys(this.ops["GetApiKeys"].apply(partialParams));
    }
    invokeGetAuthorizer(partialParams) {
        this.boot();
        return this.client.getAuthorizer(this.ops["GetAuthorizer"].apply(partialParams));
    }
    invokeGetAuthorizers(partialParams) {
        this.boot();
        return this.client.getAuthorizers(this.ops["GetAuthorizers"].apply(partialParams));
    }
    invokeGetBasePathMapping(partialParams) {
        this.boot();
        return this.client.getBasePathMapping(this.ops["GetBasePathMapping"].apply(partialParams));
    }
    invokeGetBasePathMappings(partialParams) {
        this.boot();
        return this.client.getBasePathMappings(this.ops["GetBasePathMappings"].apply(partialParams));
    }
    invokeGetClientCertificate(partialParams) {
        this.boot();
        return this.client.getClientCertificate(this.ops["GetClientCertificate"].apply(partialParams));
    }
    invokeGetClientCertificates(partialParams) {
        this.boot();
        return this.client.getClientCertificates(this.ops["GetClientCertificates"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        this.boot();
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeployments(partialParams) {
        this.boot();
        return this.client.getDeployments(this.ops["GetDeployments"].apply(partialParams));
    }
    invokeGetDocumentationPart(partialParams) {
        this.boot();
        return this.client.getDocumentationPart(this.ops["GetDocumentationPart"].apply(partialParams));
    }
    invokeGetDocumentationParts(partialParams) {
        this.boot();
        return this.client.getDocumentationParts(this.ops["GetDocumentationParts"].apply(partialParams));
    }
    invokeGetDocumentationVersion(partialParams) {
        this.boot();
        return this.client.getDocumentationVersion(this.ops["GetDocumentationVersion"].apply(partialParams));
    }
    invokeGetDocumentationVersions(partialParams) {
        this.boot();
        return this.client.getDocumentationVersions(this.ops["GetDocumentationVersions"].apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        this.boot();
        return this.client.getDomainName(this.ops["GetDomainName"].apply(partialParams));
    }
    invokeGetDomainNames(partialParams) {
        this.boot();
        return this.client.getDomainNames(this.ops["GetDomainNames"].apply(partialParams));
    }
    invokeGetExport(partialParams) {
        this.boot();
        return this.client.getExport(this.ops["GetExport"].apply(partialParams));
    }
    invokeGetGatewayResponse(partialParams) {
        this.boot();
        return this.client.getGatewayResponse(this.ops["GetGatewayResponse"].apply(partialParams));
    }
    invokeGetGatewayResponses(partialParams) {
        this.boot();
        return this.client.getGatewayResponses(this.ops["GetGatewayResponses"].apply(partialParams));
    }
    invokeGetIntegration(partialParams) {
        this.boot();
        return this.client.getIntegration(this.ops["GetIntegration"].apply(partialParams));
    }
    invokeGetIntegrationResponse(partialParams) {
        this.boot();
        return this.client.getIntegrationResponse(this.ops["GetIntegrationResponse"].apply(partialParams));
    }
    invokeGetMethod(partialParams) {
        this.boot();
        return this.client.getMethod(this.ops["GetMethod"].apply(partialParams));
    }
    invokeGetMethodResponse(partialParams) {
        this.boot();
        return this.client.getMethodResponse(this.ops["GetMethodResponse"].apply(partialParams));
    }
    invokeGetModel(partialParams) {
        this.boot();
        return this.client.getModel(this.ops["GetModel"].apply(partialParams));
    }
    invokeGetModelTemplate(partialParams) {
        this.boot();
        return this.client.getModelTemplate(this.ops["GetModelTemplate"].apply(partialParams));
    }
    invokeGetModels(partialParams) {
        this.boot();
        return this.client.getModels(this.ops["GetModels"].apply(partialParams));
    }
    invokeGetRequestValidator(partialParams) {
        this.boot();
        return this.client.getRequestValidator(this.ops["GetRequestValidator"].apply(partialParams));
    }
    invokeGetRequestValidators(partialParams) {
        this.boot();
        return this.client.getRequestValidators(this.ops["GetRequestValidators"].apply(partialParams));
    }
    invokeGetResource(partialParams) {
        this.boot();
        return this.client.getResource(this.ops["GetResource"].apply(partialParams));
    }
    invokeGetResources(partialParams) {
        this.boot();
        return this.client.getResources(this.ops["GetResources"].apply(partialParams));
    }
    invokeGetRestApi(partialParams) {
        this.boot();
        return this.client.getRestApi(this.ops["GetRestApi"].apply(partialParams));
    }
    invokeGetRestApis(partialParams) {
        this.boot();
        return this.client.getRestApis(this.ops["GetRestApis"].apply(partialParams));
    }
    invokeGetSdk(partialParams) {
        this.boot();
        return this.client.getSdk(this.ops["GetSdk"].apply(partialParams));
    }
    invokeGetSdkType(partialParams) {
        this.boot();
        return this.client.getSdkType(this.ops["GetSdkType"].apply(partialParams));
    }
    invokeGetSdkTypes(partialParams) {
        this.boot();
        return this.client.getSdkTypes(this.ops["GetSdkTypes"].apply(partialParams));
    }
    invokeGetStage(partialParams) {
        this.boot();
        return this.client.getStage(this.ops["GetStage"].apply(partialParams));
    }
    invokeGetStages(partialParams) {
        this.boot();
        return this.client.getStages(this.ops["GetStages"].apply(partialParams));
    }
    invokeGetTags(partialParams) {
        this.boot();
        return this.client.getTags(this.ops["GetTags"].apply(partialParams));
    }
    invokeGetUsage(partialParams) {
        this.boot();
        return this.client.getUsage(this.ops["GetUsage"].apply(partialParams));
    }
    invokeGetUsagePlan(partialParams) {
        this.boot();
        return this.client.getUsagePlan(this.ops["GetUsagePlan"].apply(partialParams));
    }
    invokeGetUsagePlanKey(partialParams) {
        this.boot();
        return this.client.getUsagePlanKey(this.ops["GetUsagePlanKey"].apply(partialParams));
    }
    invokeGetUsagePlanKeys(partialParams) {
        this.boot();
        return this.client.getUsagePlanKeys(this.ops["GetUsagePlanKeys"].apply(partialParams));
    }
    invokeGetUsagePlans(partialParams) {
        this.boot();
        return this.client.getUsagePlans(this.ops["GetUsagePlans"].apply(partialParams));
    }
    invokeGetVpcLink(partialParams) {
        this.boot();
        return this.client.getVpcLink(this.ops["GetVpcLink"].apply(partialParams));
    }
    invokeGetVpcLinks(partialParams) {
        this.boot();
        return this.client.getVpcLinks(this.ops["GetVpcLinks"].apply(partialParams));
    }
    invokeImportApiKeys(partialParams) {
        this.boot();
        return this.client.importApiKeys(this.ops["ImportApiKeys"].apply(partialParams));
    }
    invokeImportDocumentationParts(partialParams) {
        this.boot();
        return this.client.importDocumentationParts(this.ops["ImportDocumentationParts"].apply(partialParams));
    }
    invokeImportRestApi(partialParams) {
        this.boot();
        return this.client.importRestApi(this.ops["ImportRestApi"].apply(partialParams));
    }
    invokePutGatewayResponse(partialParams) {
        this.boot();
        return this.client.putGatewayResponse(this.ops["PutGatewayResponse"].apply(partialParams));
    }
    invokePutIntegration(partialParams) {
        this.boot();
        return this.client.putIntegration(this.ops["PutIntegration"].apply(partialParams));
    }
    invokePutIntegrationResponse(partialParams) {
        this.boot();
        return this.client.putIntegrationResponse(this.ops["PutIntegrationResponse"].apply(partialParams));
    }
    invokePutMethod(partialParams) {
        this.boot();
        return this.client.putMethod(this.ops["PutMethod"].apply(partialParams));
    }
    invokePutMethodResponse(partialParams) {
        this.boot();
        return this.client.putMethodResponse(this.ops["PutMethodResponse"].apply(partialParams));
    }
    invokePutRestApi(partialParams) {
        this.boot();
        return this.client.putRestApi(this.ops["PutRestApi"].apply(partialParams));
    }
    invokeTestInvokeAuthorizer(partialParams) {
        this.boot();
        return this.client.testInvokeAuthorizer(this.ops["TestInvokeAuthorizer"].apply(partialParams));
    }
    invokeTestInvokeMethod(partialParams) {
        this.boot();
        return this.client.testInvokeMethod(this.ops["TestInvokeMethod"].apply(partialParams));
    }
    invokeUpdateAccount(partialParams) {
        this.boot();
        return this.client.updateAccount(this.ops["UpdateAccount"].apply(partialParams));
    }
    invokeUpdateApiKey(partialParams) {
        this.boot();
        return this.client.updateApiKey(this.ops["UpdateApiKey"].apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        this.boot();
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].apply(partialParams));
    }
    invokeUpdateBasePathMapping(partialParams) {
        this.boot();
        return this.client.updateBasePathMapping(this.ops["UpdateBasePathMapping"].apply(partialParams));
    }
    invokeUpdateClientCertificate(partialParams) {
        this.boot();
        return this.client.updateClientCertificate(this.ops["UpdateClientCertificate"].apply(partialParams));
    }
    invokeUpdateDeployment(partialParams) {
        this.boot();
        return this.client.updateDeployment(this.ops["UpdateDeployment"].apply(partialParams));
    }
    invokeUpdateDocumentationPart(partialParams) {
        this.boot();
        return this.client.updateDocumentationPart(this.ops["UpdateDocumentationPart"].apply(partialParams));
    }
    invokeUpdateDocumentationVersion(partialParams) {
        this.boot();
        return this.client.updateDocumentationVersion(this.ops["UpdateDocumentationVersion"].apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        this.boot();
        return this.client.updateDomainName(this.ops["UpdateDomainName"].apply(partialParams));
    }
    invokeUpdateGatewayResponse(partialParams) {
        this.boot();
        return this.client.updateGatewayResponse(this.ops["UpdateGatewayResponse"].apply(partialParams));
    }
    invokeUpdateIntegration(partialParams) {
        this.boot();
        return this.client.updateIntegration(this.ops["UpdateIntegration"].apply(partialParams));
    }
    invokeUpdateIntegrationResponse(partialParams) {
        this.boot();
        return this.client.updateIntegrationResponse(this.ops["UpdateIntegrationResponse"].apply(partialParams));
    }
    invokeUpdateMethod(partialParams) {
        this.boot();
        return this.client.updateMethod(this.ops["UpdateMethod"].apply(partialParams));
    }
    invokeUpdateMethodResponse(partialParams) {
        this.boot();
        return this.client.updateMethodResponse(this.ops["UpdateMethodResponse"].apply(partialParams));
    }
    invokeUpdateModel(partialParams) {
        this.boot();
        return this.client.updateModel(this.ops["UpdateModel"].apply(partialParams));
    }
    invokeUpdateRequestValidator(partialParams) {
        this.boot();
        return this.client.updateRequestValidator(this.ops["UpdateRequestValidator"].apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        this.boot();
        return this.client.updateResource(this.ops["UpdateResource"].apply(partialParams));
    }
    invokeUpdateRestApi(partialParams) {
        this.boot();
        return this.client.updateRestApi(this.ops["UpdateRestApi"].apply(partialParams));
    }
    invokeUpdateStage(partialParams) {
        this.boot();
        return this.client.updateStage(this.ops["UpdateStage"].apply(partialParams));
    }
    invokeUpdateUsage(partialParams) {
        this.boot();
        return this.client.updateUsage(this.ops["UpdateUsage"].apply(partialParams));
    }
    invokeUpdateUsagePlan(partialParams) {
        this.boot();
        return this.client.updateUsagePlan(this.ops["UpdateUsagePlan"].apply(partialParams));
    }
    invokeUpdateVpcLink(partialParams) {
        this.boot();
        return this.client.updateVpcLink(this.ops["UpdateVpcLink"].apply(partialParams));
    }
}
exports.default = default_1;
