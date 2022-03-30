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
class default_1 extends aws.apigatewayv2.VpcLink {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ApiGatewayV2();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/apigatewayv2-2018-11-29.normal.json"), this.client);
    }
    invokeCreateApi(partialParams) {
        return this.client.createApi(this.ops["CreateApi"].apply(partialParams));
    }
    invokeCreateApiMapping(partialParams) {
        return this.client.createApiMapping(this.ops["CreateApiMapping"].apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        return this.client.createDomainName(this.ops["CreateDomainName"].apply(partialParams));
    }
    invokeCreateIntegration(partialParams) {
        return this.client.createIntegration(this.ops["CreateIntegration"].apply(partialParams));
    }
    invokeCreateIntegrationResponse(partialParams) {
        return this.client.createIntegrationResponse(this.ops["CreateIntegrationResponse"].apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        return this.client.createModel(this.ops["CreateModel"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateRouteResponse(partialParams) {
        return this.client.createRouteResponse(this.ops["CreateRouteResponse"].apply(partialParams));
    }
    invokeCreateStage(partialParams) {
        return this.client.createStage(this.ops["CreateStage"].apply(partialParams));
    }
    invokeCreateVpcLink(partialParams) {
        return this.client.createVpcLink(this.ops["CreateVpcLink"].apply(partialParams));
    }
    invokeDeleteAccessLogSettings(partialParams) {
        return this.client.deleteAccessLogSettings(this.ops["DeleteAccessLogSettings"].apply(partialParams));
    }
    invokeDeleteApi(partialParams) {
        return this.client.deleteApi(this.ops["DeleteApi"].apply(partialParams));
    }
    invokeDeleteApiMapping(partialParams) {
        return this.client.deleteApiMapping(this.ops["DeleteApiMapping"].apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].apply(partialParams));
    }
    invokeDeleteCorsConfiguration(partialParams) {
        return this.client.deleteCorsConfiguration(this.ops["DeleteCorsConfiguration"].apply(partialParams));
    }
    invokeDeleteDeployment(partialParams) {
        return this.client.deleteDeployment(this.ops["DeleteDeployment"].apply(partialParams));
    }
    invokeDeleteDomainName(partialParams) {
        return this.client.deleteDomainName(this.ops["DeleteDomainName"].apply(partialParams));
    }
    invokeDeleteIntegration(partialParams) {
        return this.client.deleteIntegration(this.ops["DeleteIntegration"].apply(partialParams));
    }
    invokeDeleteIntegrationResponse(partialParams) {
        return this.client.deleteIntegrationResponse(this.ops["DeleteIntegrationResponse"].apply(partialParams));
    }
    invokeDeleteModel(partialParams) {
        return this.client.deleteModel(this.ops["DeleteModel"].apply(partialParams));
    }
    invokeDeleteRoute(partialParams) {
        return this.client.deleteRoute(this.ops["DeleteRoute"].apply(partialParams));
    }
    invokeDeleteRouteRequestParameter(partialParams) {
        return this.client.deleteRouteRequestParameter(this.ops["DeleteRouteRequestParameter"].apply(partialParams));
    }
    invokeDeleteRouteResponse(partialParams) {
        return this.client.deleteRouteResponse(this.ops["DeleteRouteResponse"].apply(partialParams));
    }
    invokeDeleteRouteSettings(partialParams) {
        return this.client.deleteRouteSettings(this.ops["DeleteRouteSettings"].apply(partialParams));
    }
    invokeDeleteStage(partialParams) {
        return this.client.deleteStage(this.ops["DeleteStage"].apply(partialParams));
    }
    invokeDeleteVpcLink(partialParams) {
        return this.client.deleteVpcLink(this.ops["DeleteVpcLink"].apply(partialParams));
    }
    invokeExportApi(partialParams) {
        return this.client.exportApi(this.ops["ExportApi"].apply(partialParams));
    }
    invokeResetAuthorizersCache(partialParams) {
        return this.client.resetAuthorizersCache(this.ops["ResetAuthorizersCache"].apply(partialParams));
    }
    invokeGetApi(partialParams) {
        return this.client.getApi(this.ops["GetApi"].apply(partialParams));
    }
    invokeGetApiMapping(partialParams) {
        return this.client.getApiMapping(this.ops["GetApiMapping"].apply(partialParams));
    }
    invokeGetApiMappings(partialParams) {
        return this.client.getApiMappings(this.ops["GetApiMappings"].apply(partialParams));
    }
    invokeGetAuthorizer(partialParams) {
        return this.client.getAuthorizer(this.ops["GetAuthorizer"].apply(partialParams));
    }
    invokeGetAuthorizers(partialParams) {
        return this.client.getAuthorizers(this.ops["GetAuthorizers"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeployments(partialParams) {
        return this.client.getDeployments(this.ops["GetDeployments"].apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        return this.client.getDomainName(this.ops["GetDomainName"].apply(partialParams));
    }
    invokeGetIntegration(partialParams) {
        return this.client.getIntegration(this.ops["GetIntegration"].apply(partialParams));
    }
    invokeGetIntegrationResponse(partialParams) {
        return this.client.getIntegrationResponse(this.ops["GetIntegrationResponse"].apply(partialParams));
    }
    invokeGetIntegrationResponses(partialParams) {
        return this.client.getIntegrationResponses(this.ops["GetIntegrationResponses"].apply(partialParams));
    }
    invokeGetIntegrations(partialParams) {
        return this.client.getIntegrations(this.ops["GetIntegrations"].apply(partialParams));
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
    invokeGetRoute(partialParams) {
        return this.client.getRoute(this.ops["GetRoute"].apply(partialParams));
    }
    invokeGetRouteResponse(partialParams) {
        return this.client.getRouteResponse(this.ops["GetRouteResponse"].apply(partialParams));
    }
    invokeGetRouteResponses(partialParams) {
        return this.client.getRouteResponses(this.ops["GetRouteResponses"].apply(partialParams));
    }
    invokeGetRoutes(partialParams) {
        return this.client.getRoutes(this.ops["GetRoutes"].apply(partialParams));
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
    invokeGetVpcLink(partialParams) {
        return this.client.getVpcLink(this.ops["GetVpcLink"].apply(partialParams));
    }
    invokeImportApi(partialParams) {
        return this.client.importApi(this.ops["ImportApi"].apply(partialParams));
    }
    invokeReimportApi(partialParams) {
        return this.client.reimportApi(this.ops["ReimportApi"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApi(partialParams) {
        return this.client.updateApi(this.ops["UpdateApi"].apply(partialParams));
    }
    invokeUpdateApiMapping(partialParams) {
        return this.client.updateApiMapping(this.ops["UpdateApiMapping"].apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].apply(partialParams));
    }
    invokeUpdateDeployment(partialParams) {
        return this.client.updateDeployment(this.ops["UpdateDeployment"].apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        return this.client.updateDomainName(this.ops["UpdateDomainName"].apply(partialParams));
    }
    invokeUpdateIntegration(partialParams) {
        return this.client.updateIntegration(this.ops["UpdateIntegration"].apply(partialParams));
    }
    invokeUpdateIntegrationResponse(partialParams) {
        return this.client.updateIntegrationResponse(this.ops["UpdateIntegrationResponse"].apply(partialParams));
    }
    invokeUpdateModel(partialParams) {
        return this.client.updateModel(this.ops["UpdateModel"].apply(partialParams));
    }
    invokeUpdateRoute(partialParams) {
        return this.client.updateRoute(this.ops["UpdateRoute"].apply(partialParams));
    }
    invokeUpdateRouteResponse(partialParams) {
        return this.client.updateRouteResponse(this.ops["UpdateRouteResponse"].apply(partialParams));
    }
    invokeUpdateStage(partialParams) {
        return this.client.updateStage(this.ops["UpdateStage"].apply(partialParams));
    }
    invokeUpdateVpcLink(partialParams) {
        return this.client.updateVpcLink(this.ops["UpdateVpcLink"].apply(partialParams));
    }
}
exports.default = default_1;
