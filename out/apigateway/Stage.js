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
class default_1 extends aws.apigateway.Stage {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.APIGateway();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/apigateway-2015-07-09.normal.json"), this.client);
    }
    invokeCreateAuthorizer(partialParams) {
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].apply(partialParams));
    }
    invokeCreateBasePathMapping(partialParams) {
        return this.client.createBasePathMapping(this.ops["CreateBasePathMapping"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDocumentationPart(partialParams) {
        return this.client.createDocumentationPart(this.ops["CreateDocumentationPart"].apply(partialParams));
    }
    invokeCreateDocumentationVersion(partialParams) {
        return this.client.createDocumentationVersion(this.ops["CreateDocumentationVersion"].apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        return this.client.createDomainName(this.ops["CreateDomainName"].apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        return this.client.createModel(this.ops["CreateModel"].apply(partialParams));
    }
    invokeCreateRequestValidator(partialParams) {
        return this.client.createRequestValidator(this.ops["CreateRequestValidator"].apply(partialParams));
    }
    invokeCreateResource(partialParams) {
        return this.client.createResource(this.ops["CreateResource"].apply(partialParams));
    }
    invokeCreateRestApi(partialParams) {
        return this.client.createRestApi(this.ops["CreateRestApi"].apply(partialParams));
    }
    invokeCreateStage(partialParams) {
        return this.client.createStage(this.ops["CreateStage"].apply(partialParams));
    }
    invokeCreateUsagePlan(partialParams) {
        return this.client.createUsagePlan(this.ops["CreateUsagePlan"].apply(partialParams));
    }
    invokeCreateUsagePlanKey(partialParams) {
        return this.client.createUsagePlanKey(this.ops["CreateUsagePlanKey"].apply(partialParams));
    }
    invokeCreateVpcLink(partialParams) {
        return this.client.createVpcLink(this.ops["CreateVpcLink"].apply(partialParams));
    }
    invokeDeleteApiKey(partialParams) {
        return this.client.deleteApiKey(this.ops["DeleteApiKey"].apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].apply(partialParams));
    }
    invokeDeleteBasePathMapping(partialParams) {
        return this.client.deleteBasePathMapping(this.ops["DeleteBasePathMapping"].apply(partialParams));
    }
    invokeDeleteClientCertificate(partialParams) {
        return this.client.deleteClientCertificate(this.ops["DeleteClientCertificate"].apply(partialParams));
    }
    invokeDeleteDeployment(partialParams) {
        return this.client.deleteDeployment(this.ops["DeleteDeployment"].apply(partialParams));
    }
    invokeDeleteDocumentationPart(partialParams) {
        return this.client.deleteDocumentationPart(this.ops["DeleteDocumentationPart"].apply(partialParams));
    }
    invokeDeleteDocumentationVersion(partialParams) {
        return this.client.deleteDocumentationVersion(this.ops["DeleteDocumentationVersion"].apply(partialParams));
    }
    invokeDeleteDomainName(partialParams) {
        return this.client.deleteDomainName(this.ops["DeleteDomainName"].apply(partialParams));
    }
    invokeDeleteGatewayResponse(partialParams) {
        return this.client.deleteGatewayResponse(this.ops["DeleteGatewayResponse"].apply(partialParams));
    }
    invokeDeleteIntegration(partialParams) {
        return this.client.deleteIntegration(this.ops["DeleteIntegration"].apply(partialParams));
    }
    invokeDeleteIntegrationResponse(partialParams) {
        return this.client.deleteIntegrationResponse(this.ops["DeleteIntegrationResponse"].apply(partialParams));
    }
    invokeDeleteMethod(partialParams) {
        return this.client.deleteMethod(this.ops["DeleteMethod"].apply(partialParams));
    }
    invokeDeleteMethodResponse(partialParams) {
        return this.client.deleteMethodResponse(this.ops["DeleteMethodResponse"].apply(partialParams));
    }
    invokeDeleteModel(partialParams) {
        return this.client.deleteModel(this.ops["DeleteModel"].apply(partialParams));
    }
    invokeDeleteRequestValidator(partialParams) {
        return this.client.deleteRequestValidator(this.ops["DeleteRequestValidator"].apply(partialParams));
    }
    invokeDeleteResource(partialParams) {
        return this.client.deleteResource(this.ops["DeleteResource"].apply(partialParams));
    }
    invokeDeleteRestApi(partialParams) {
        return this.client.deleteRestApi(this.ops["DeleteRestApi"].apply(partialParams));
    }
    invokeDeleteStage(partialParams) {
        return this.client.deleteStage(this.ops["DeleteStage"].apply(partialParams));
    }
    invokeDeleteUsagePlan(partialParams) {
        return this.client.deleteUsagePlan(this.ops["DeleteUsagePlan"].apply(partialParams));
    }
    invokeDeleteUsagePlanKey(partialParams) {
        return this.client.deleteUsagePlanKey(this.ops["DeleteUsagePlanKey"].apply(partialParams));
    }
    invokeDeleteVpcLink(partialParams) {
        return this.client.deleteVpcLink(this.ops["DeleteVpcLink"].apply(partialParams));
    }
    invokeFlushStageAuthorizersCache(partialParams) {
        return this.client.flushStageAuthorizersCache(this.ops["FlushStageAuthorizersCache"].apply(partialParams));
    }
    invokeFlushStageCache(partialParams) {
        return this.client.flushStageCache(this.ops["FlushStageCache"].apply(partialParams));
    }
    invokeGetApiKey(partialParams) {
        return this.client.getApiKey(this.ops["GetApiKey"].apply(partialParams));
    }
    invokeGetAuthorizer(partialParams) {
        return this.client.getAuthorizer(this.ops["GetAuthorizer"].apply(partialParams));
    }
    invokeGetAuthorizers(partialParams) {
        return this.client.getAuthorizers(this.ops["GetAuthorizers"].apply(partialParams));
    }
    invokeGetBasePathMapping(partialParams) {
        return this.client.getBasePathMapping(this.ops["GetBasePathMapping"].apply(partialParams));
    }
    invokeGetBasePathMappings(partialParams) {
        return this.client.getBasePathMappings(this.ops["GetBasePathMappings"].apply(partialParams));
    }
    invokeGetClientCertificate(partialParams) {
        return this.client.getClientCertificate(this.ops["GetClientCertificate"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeployments(partialParams) {
        return this.client.getDeployments(this.ops["GetDeployments"].apply(partialParams));
    }
    invokeGetDocumentationPart(partialParams) {
        return this.client.getDocumentationPart(this.ops["GetDocumentationPart"].apply(partialParams));
    }
    invokeGetDocumentationParts(partialParams) {
        return this.client.getDocumentationParts(this.ops["GetDocumentationParts"].apply(partialParams));
    }
    invokeGetDocumentationVersion(partialParams) {
        return this.client.getDocumentationVersion(this.ops["GetDocumentationVersion"].apply(partialParams));
    }
    invokeGetDocumentationVersions(partialParams) {
        return this.client.getDocumentationVersions(this.ops["GetDocumentationVersions"].apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        return this.client.getDomainName(this.ops["GetDomainName"].apply(partialParams));
    }
    invokeGetExport(partialParams) {
        return this.client.getExport(this.ops["GetExport"].apply(partialParams));
    }
    invokeGetGatewayResponse(partialParams) {
        return this.client.getGatewayResponse(this.ops["GetGatewayResponse"].apply(partialParams));
    }
    invokeGetGatewayResponses(partialParams) {
        return this.client.getGatewayResponses(this.ops["GetGatewayResponses"].apply(partialParams));
    }
    invokeGetIntegration(partialParams) {
        return this.client.getIntegration(this.ops["GetIntegration"].apply(partialParams));
    }
    invokeGetIntegrationResponse(partialParams) {
        return this.client.getIntegrationResponse(this.ops["GetIntegrationResponse"].apply(partialParams));
    }
    invokeGetMethod(partialParams) {
        return this.client.getMethod(this.ops["GetMethod"].apply(partialParams));
    }
    invokeGetMethodResponse(partialParams) {
        return this.client.getMethodResponse(this.ops["GetMethodResponse"].apply(partialParams));
    }
    invokeGetModel(partialParams) {
        return this.client.getModel(this.ops["GetModel"].apply(partialParams));
    }
    invokeGetModelTemplate(partialParams) {
        return this.client.getModelTemplate(this.ops["GetModelTemplate"].apply(partialParams));
    }
    invokeGetModels(partialParams) {
        return this.client.getModels(this.ops["GetModels"].apply(partialParams));
    }
    invokeGetRequestValidator(partialParams) {
        return this.client.getRequestValidator(this.ops["GetRequestValidator"].apply(partialParams));
    }
    invokeGetRequestValidators(partialParams) {
        return this.client.getRequestValidators(this.ops["GetRequestValidators"].apply(partialParams));
    }
    invokeGetResource(partialParams) {
        return this.client.getResource(this.ops["GetResource"].apply(partialParams));
    }
    invokeGetResources(partialParams) {
        return this.client.getResources(this.ops["GetResources"].apply(partialParams));
    }
    invokeGetRestApi(partialParams) {
        return this.client.getRestApi(this.ops["GetRestApi"].apply(partialParams));
    }
    invokeGetSdk(partialParams) {
        return this.client.getSdk(this.ops["GetSdk"].apply(partialParams));
    }
    invokeGetSdkType(partialParams) {
        return this.client.getSdkType(this.ops["GetSdkType"].apply(partialParams));
    }
    invokeGetStage(partialParams) {
        return this.client.getStage(this.ops["GetStage"].apply(partialParams));
    }
    invokeGetStages(partialParams) {
        return this.client.getStages(this.ops["GetStages"].apply(partialParams));
    }
    invokeGetTags(partialParams) {
        return this.client.getTags(this.ops["GetTags"].apply(partialParams));
    }
    invokeGetUsage(partialParams) {
        return this.client.getUsage(this.ops["GetUsage"].apply(partialParams));
    }
    invokeGetUsagePlan(partialParams) {
        return this.client.getUsagePlan(this.ops["GetUsagePlan"].apply(partialParams));
    }
    invokeGetUsagePlanKey(partialParams) {
        return this.client.getUsagePlanKey(this.ops["GetUsagePlanKey"].apply(partialParams));
    }
    invokeGetUsagePlanKeys(partialParams) {
        return this.client.getUsagePlanKeys(this.ops["GetUsagePlanKeys"].apply(partialParams));
    }
    invokeGetVpcLink(partialParams) {
        return this.client.getVpcLink(this.ops["GetVpcLink"].apply(partialParams));
    }
    invokeImportApiKeys(partialParams) {
        return this.client.importApiKeys(this.ops["ImportApiKeys"].apply(partialParams));
    }
    invokeImportDocumentationParts(partialParams) {
        return this.client.importDocumentationParts(this.ops["ImportDocumentationParts"].apply(partialParams));
    }
    invokeImportRestApi(partialParams) {
        return this.client.importRestApi(this.ops["ImportRestApi"].apply(partialParams));
    }
    invokePutGatewayResponse(partialParams) {
        return this.client.putGatewayResponse(this.ops["PutGatewayResponse"].apply(partialParams));
    }
    invokePutIntegration(partialParams) {
        return this.client.putIntegration(this.ops["PutIntegration"].apply(partialParams));
    }
    invokePutIntegrationResponse(partialParams) {
        return this.client.putIntegrationResponse(this.ops["PutIntegrationResponse"].apply(partialParams));
    }
    invokePutMethod(partialParams) {
        return this.client.putMethod(this.ops["PutMethod"].apply(partialParams));
    }
    invokePutMethodResponse(partialParams) {
        return this.client.putMethodResponse(this.ops["PutMethodResponse"].apply(partialParams));
    }
    invokePutRestApi(partialParams) {
        return this.client.putRestApi(this.ops["PutRestApi"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestInvokeAuthorizer(partialParams) {
        return this.client.testInvokeAuthorizer(this.ops["TestInvokeAuthorizer"].apply(partialParams));
    }
    invokeTestInvokeMethod(partialParams) {
        return this.client.testInvokeMethod(this.ops["TestInvokeMethod"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApiKey(partialParams) {
        return this.client.updateApiKey(this.ops["UpdateApiKey"].apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].apply(partialParams));
    }
    invokeUpdateBasePathMapping(partialParams) {
        return this.client.updateBasePathMapping(this.ops["UpdateBasePathMapping"].apply(partialParams));
    }
    invokeUpdateClientCertificate(partialParams) {
        return this.client.updateClientCertificate(this.ops["UpdateClientCertificate"].apply(partialParams));
    }
    invokeUpdateDeployment(partialParams) {
        return this.client.updateDeployment(this.ops["UpdateDeployment"].apply(partialParams));
    }
    invokeUpdateDocumentationPart(partialParams) {
        return this.client.updateDocumentationPart(this.ops["UpdateDocumentationPart"].apply(partialParams));
    }
    invokeUpdateDocumentationVersion(partialParams) {
        return this.client.updateDocumentationVersion(this.ops["UpdateDocumentationVersion"].apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        return this.client.updateDomainName(this.ops["UpdateDomainName"].apply(partialParams));
    }
    invokeUpdateGatewayResponse(partialParams) {
        return this.client.updateGatewayResponse(this.ops["UpdateGatewayResponse"].apply(partialParams));
    }
    invokeUpdateIntegration(partialParams) {
        return this.client.updateIntegration(this.ops["UpdateIntegration"].apply(partialParams));
    }
    invokeUpdateIntegrationResponse(partialParams) {
        return this.client.updateIntegrationResponse(this.ops["UpdateIntegrationResponse"].apply(partialParams));
    }
    invokeUpdateMethod(partialParams) {
        return this.client.updateMethod(this.ops["UpdateMethod"].apply(partialParams));
    }
    invokeUpdateMethodResponse(partialParams) {
        return this.client.updateMethodResponse(this.ops["UpdateMethodResponse"].apply(partialParams));
    }
    invokeUpdateModel(partialParams) {
        return this.client.updateModel(this.ops["UpdateModel"].apply(partialParams));
    }
    invokeUpdateRequestValidator(partialParams) {
        return this.client.updateRequestValidator(this.ops["UpdateRequestValidator"].apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        return this.client.updateResource(this.ops["UpdateResource"].apply(partialParams));
    }
    invokeUpdateRestApi(partialParams) {
        return this.client.updateRestApi(this.ops["UpdateRestApi"].apply(partialParams));
    }
    invokeUpdateStage(partialParams) {
        return this.client.updateStage(this.ops["UpdateStage"].apply(partialParams));
    }
    invokeUpdateUsage(partialParams) {
        return this.client.updateUsage(this.ops["UpdateUsage"].apply(partialParams));
    }
    invokeUpdateUsagePlan(partialParams) {
        return this.client.updateUsagePlan(this.ops["UpdateUsagePlan"].apply(partialParams));
    }
    invokeUpdateVpcLink(partialParams) {
        return this.client.updateVpcLink(this.ops["UpdateVpcLink"].apply(partialParams));
    }
}
exports.default = default_1;
