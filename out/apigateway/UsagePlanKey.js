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
        this.client = new awssdk.APIGateway();
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
    invokeCreateAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].applicator.apply(partialParams));
    }
    invokeCreateBasePathMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBasePathMapping(this.ops["CreateBasePathMapping"].applicator.apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].applicator.apply(partialParams));
    }
    invokeCreateDocumentationPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDocumentationPart(this.ops["CreateDocumentationPart"].applicator.apply(partialParams));
    }
    invokeCreateDocumentationVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDocumentationVersion(this.ops["CreateDocumentationVersion"].applicator.apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainName(this.ops["CreateDomainName"].applicator.apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModel(this.ops["CreateModel"].applicator.apply(partialParams));
    }
    invokeCreateRequestValidator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRequestValidator(this.ops["CreateRequestValidator"].applicator.apply(partialParams));
    }
    invokeCreateResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResource(this.ops["CreateResource"].applicator.apply(partialParams));
    }
    invokeCreateRestApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRestApi(this.ops["CreateRestApi"].applicator.apply(partialParams));
    }
    invokeCreateStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStage(this.ops["CreateStage"].applicator.apply(partialParams));
    }
    invokeCreateUsagePlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUsagePlan(this.ops["CreateUsagePlan"].applicator.apply(partialParams));
    }
    invokeCreateUsagePlanKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUsagePlanKey(this.ops["CreateUsagePlanKey"].applicator.apply(partialParams));
    }
    invokeCreateVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcLink(this.ops["CreateVpcLink"].applicator.apply(partialParams));
    }
    invokeDeleteApiKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApiKey(this.ops["DeleteApiKey"].applicator.apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].applicator.apply(partialParams));
    }
    invokeDeleteBasePathMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBasePathMapping(this.ops["DeleteBasePathMapping"].applicator.apply(partialParams));
    }
    invokeDeleteClientCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteClientCertificate(this.ops["DeleteClientCertificate"].applicator.apply(partialParams));
    }
    invokeDeleteDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeployment(this.ops["DeleteDeployment"].applicator.apply(partialParams));
    }
    invokeDeleteDocumentationPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDocumentationPart(this.ops["DeleteDocumentationPart"].applicator.apply(partialParams));
    }
    invokeDeleteDocumentationVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDocumentationVersion(this.ops["DeleteDocumentationVersion"].applicator.apply(partialParams));
    }
    invokeDeleteDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainName(this.ops["DeleteDomainName"].applicator.apply(partialParams));
    }
    invokeDeleteGatewayResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGatewayResponse(this.ops["DeleteGatewayResponse"].applicator.apply(partialParams));
    }
    invokeDeleteIntegration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegration(this.ops["DeleteIntegration"].applicator.apply(partialParams));
    }
    invokeDeleteIntegrationResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegrationResponse(this.ops["DeleteIntegrationResponse"].applicator.apply(partialParams));
    }
    invokeDeleteMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMethod(this.ops["DeleteMethod"].applicator.apply(partialParams));
    }
    invokeDeleteMethodResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMethodResponse(this.ops["DeleteMethodResponse"].applicator.apply(partialParams));
    }
    invokeDeleteModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModel(this.ops["DeleteModel"].applicator.apply(partialParams));
    }
    invokeDeleteRequestValidator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRequestValidator(this.ops["DeleteRequestValidator"].applicator.apply(partialParams));
    }
    invokeDeleteResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResource(this.ops["DeleteResource"].applicator.apply(partialParams));
    }
    invokeDeleteRestApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRestApi(this.ops["DeleteRestApi"].applicator.apply(partialParams));
    }
    invokeDeleteStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStage(this.ops["DeleteStage"].applicator.apply(partialParams));
    }
    invokeDeleteUsagePlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUsagePlan(this.ops["DeleteUsagePlan"].applicator.apply(partialParams));
    }
    invokeDeleteUsagePlanKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUsagePlanKey(this.ops["DeleteUsagePlanKey"].applicator.apply(partialParams));
    }
    invokeDeleteVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcLink(this.ops["DeleteVpcLink"].applicator.apply(partialParams));
    }
    invokeFlushStageAuthorizersCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.flushStageAuthorizersCache(this.ops["FlushStageAuthorizersCache"].applicator.apply(partialParams));
    }
    invokeFlushStageCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.flushStageCache(this.ops["FlushStageCache"].applicator.apply(partialParams));
    }
    invokeGetApiKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiKey(this.ops["GetApiKey"].applicator.apply(partialParams));
    }
    invokeGetAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizer(this.ops["GetAuthorizer"].applicator.apply(partialParams));
    }
    invokeGetAuthorizers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAuthorizers(this.ops["GetAuthorizers"].applicator.apply(partialParams));
    }
    invokeGetBasePathMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBasePathMapping(this.ops["GetBasePathMapping"].applicator.apply(partialParams));
    }
    invokeGetBasePathMappings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBasePathMappings(this.ops["GetBasePathMappings"].applicator.apply(partialParams));
    }
    invokeGetClientCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getClientCertificate(this.ops["GetClientCertificate"].applicator.apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployment(this.ops["GetDeployment"].applicator.apply(partialParams));
    }
    invokeGetDeployments(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployments(this.ops["GetDeployments"].applicator.apply(partialParams));
    }
    invokeGetDocumentationPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationPart(this.ops["GetDocumentationPart"].applicator.apply(partialParams));
    }
    invokeGetDocumentationParts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationParts(this.ops["GetDocumentationParts"].applicator.apply(partialParams));
    }
    invokeGetDocumentationVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationVersion(this.ops["GetDocumentationVersion"].applicator.apply(partialParams));
    }
    invokeGetDocumentationVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocumentationVersions(this.ops["GetDocumentationVersions"].applicator.apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainName(this.ops["GetDomainName"].applicator.apply(partialParams));
    }
    invokeGetExport(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getExport(this.ops["GetExport"].applicator.apply(partialParams));
    }
    invokeGetGatewayResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGatewayResponse(this.ops["GetGatewayResponse"].applicator.apply(partialParams));
    }
    invokeGetGatewayResponses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getGatewayResponses(this.ops["GetGatewayResponses"].applicator.apply(partialParams));
    }
    invokeGetIntegration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegration(this.ops["GetIntegration"].applicator.apply(partialParams));
    }
    invokeGetIntegrationResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrationResponse(this.ops["GetIntegrationResponse"].applicator.apply(partialParams));
    }
    invokeGetMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMethod(this.ops["GetMethod"].applicator.apply(partialParams));
    }
    invokeGetMethodResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMethodResponse(this.ops["GetMethodResponse"].applicator.apply(partialParams));
    }
    invokeGetModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModel(this.ops["GetModel"].applicator.apply(partialParams));
    }
    invokeGetModelTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModelTemplate(this.ops["GetModelTemplate"].applicator.apply(partialParams));
    }
    invokeGetModels(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getModels(this.ops["GetModels"].applicator.apply(partialParams));
    }
    invokeGetRequestValidator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRequestValidator(this.ops["GetRequestValidator"].applicator.apply(partialParams));
    }
    invokeGetRequestValidators(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRequestValidators(this.ops["GetRequestValidators"].applicator.apply(partialParams));
    }
    invokeGetResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResource(this.ops["GetResource"].applicator.apply(partialParams));
    }
    invokeGetResources(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getResources(this.ops["GetResources"].applicator.apply(partialParams));
    }
    invokeGetRestApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRestApi(this.ops["GetRestApi"].applicator.apply(partialParams));
    }
    invokeGetSdk(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSdk(this.ops["GetSdk"].applicator.apply(partialParams));
    }
    invokeGetSdkType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSdkType(this.ops["GetSdkType"].applicator.apply(partialParams));
    }
    invokeGetStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStage(this.ops["GetStage"].applicator.apply(partialParams));
    }
    invokeGetStages(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStages(this.ops["GetStages"].applicator.apply(partialParams));
    }
    invokeGetTags(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getTags(this.ops["GetTags"].applicator.apply(partialParams));
    }
    invokeGetUsage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsage(this.ops["GetUsage"].applicator.apply(partialParams));
    }
    invokeGetUsagePlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsagePlan(this.ops["GetUsagePlan"].applicator.apply(partialParams));
    }
    invokeGetUsagePlanKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsagePlanKey(this.ops["GetUsagePlanKey"].applicator.apply(partialParams));
    }
    invokeGetUsagePlanKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getUsagePlanKeys(this.ops["GetUsagePlanKeys"].applicator.apply(partialParams));
    }
    invokeGetVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVpcLink(this.ops["GetVpcLink"].applicator.apply(partialParams));
    }
    invokeImportApiKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importApiKeys(this.ops["ImportApiKeys"].applicator.apply(partialParams));
    }
    invokeImportDocumentationParts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importDocumentationParts(this.ops["ImportDocumentationParts"].applicator.apply(partialParams));
    }
    invokeImportRestApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importRestApi(this.ops["ImportRestApi"].applicator.apply(partialParams));
    }
    invokePutGatewayResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putGatewayResponse(this.ops["PutGatewayResponse"].applicator.apply(partialParams));
    }
    invokePutIntegration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putIntegration(this.ops["PutIntegration"].applicator.apply(partialParams));
    }
    invokePutIntegrationResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putIntegrationResponse(this.ops["PutIntegrationResponse"].applicator.apply(partialParams));
    }
    invokePutMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putMethod(this.ops["PutMethod"].applicator.apply(partialParams));
    }
    invokePutMethodResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putMethodResponse(this.ops["PutMethodResponse"].applicator.apply(partialParams));
    }
    invokePutRestApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRestApi(this.ops["PutRestApi"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTestInvokeAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testInvokeAuthorizer(this.ops["TestInvokeAuthorizer"].applicator.apply(partialParams));
    }
    invokeTestInvokeMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testInvokeMethod(this.ops["TestInvokeMethod"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateApiKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApiKey(this.ops["UpdateApiKey"].applicator.apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].applicator.apply(partialParams));
    }
    invokeUpdateBasePathMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateBasePathMapping(this.ops["UpdateBasePathMapping"].applicator.apply(partialParams));
    }
    invokeUpdateClientCertificate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateClientCertificate(this.ops["UpdateClientCertificate"].applicator.apply(partialParams));
    }
    invokeUpdateDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeployment(this.ops["UpdateDeployment"].applicator.apply(partialParams));
    }
    invokeUpdateDocumentationPart(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentationPart(this.ops["UpdateDocumentationPart"].applicator.apply(partialParams));
    }
    invokeUpdateDocumentationVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentationVersion(this.ops["UpdateDocumentationVersion"].applicator.apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainName(this.ops["UpdateDomainName"].applicator.apply(partialParams));
    }
    invokeUpdateGatewayResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGatewayResponse(this.ops["UpdateGatewayResponse"].applicator.apply(partialParams));
    }
    invokeUpdateIntegration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIntegration(this.ops["UpdateIntegration"].applicator.apply(partialParams));
    }
    invokeUpdateIntegrationResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIntegrationResponse(this.ops["UpdateIntegrationResponse"].applicator.apply(partialParams));
    }
    invokeUpdateMethod(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMethod(this.ops["UpdateMethod"].applicator.apply(partialParams));
    }
    invokeUpdateMethodResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMethodResponse(this.ops["UpdateMethodResponse"].applicator.apply(partialParams));
    }
    invokeUpdateModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateModel(this.ops["UpdateModel"].applicator.apply(partialParams));
    }
    invokeUpdateRequestValidator(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRequestValidator(this.ops["UpdateRequestValidator"].applicator.apply(partialParams));
    }
    invokeUpdateResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResource(this.ops["UpdateResource"].applicator.apply(partialParams));
    }
    invokeUpdateRestApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRestApi(this.ops["UpdateRestApi"].applicator.apply(partialParams));
    }
    invokeUpdateStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStage(this.ops["UpdateStage"].applicator.apply(partialParams));
    }
    invokeUpdateUsage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUsage(this.ops["UpdateUsage"].applicator.apply(partialParams));
    }
    invokeUpdateUsagePlan(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUsagePlan(this.ops["UpdateUsagePlan"].applicator.apply(partialParams));
    }
    invokeUpdateVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVpcLink(this.ops["UpdateVpcLink"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
