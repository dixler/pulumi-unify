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
const schema = require("../apis/apigatewayv2-2018-11-29.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.apigatewayv2.RouteResponse {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ApiGatewayV2();
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
    invokeCreateApi(partialParams) {
        this.boot();
        return this.client.createApi(this.ops["CreateApi"].apply(partialParams));
    }
    invokeCreateApiMapping(partialParams) {
        this.boot();
        return this.client.createApiMapping(this.ops["CreateApiMapping"].apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        this.boot();
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        this.boot();
        return this.client.createDomainName(this.ops["CreateDomainName"].apply(partialParams));
    }
    invokeCreateIntegration(partialParams) {
        this.boot();
        return this.client.createIntegration(this.ops["CreateIntegration"].apply(partialParams));
    }
    invokeCreateIntegrationResponse(partialParams) {
        this.boot();
        return this.client.createIntegrationResponse(this.ops["CreateIntegrationResponse"].apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        this.boot();
        return this.client.createModel(this.ops["CreateModel"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        this.boot();
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateRouteResponse(partialParams) {
        this.boot();
        return this.client.createRouteResponse(this.ops["CreateRouteResponse"].apply(partialParams));
    }
    invokeCreateStage(partialParams) {
        this.boot();
        return this.client.createStage(this.ops["CreateStage"].apply(partialParams));
    }
    invokeCreateVpcLink(partialParams) {
        this.boot();
        return this.client.createVpcLink(this.ops["CreateVpcLink"].apply(partialParams));
    }
    invokeDeleteVpcLink(partialParams) {
        this.boot();
        return this.client.deleteVpcLink(this.ops["DeleteVpcLink"].apply(partialParams));
    }
    invokeExportApi(partialParams) {
        this.boot();
        return this.client.exportApi(this.ops["ExportApi"].apply(partialParams));
    }
    invokeGetApi(partialParams) {
        this.boot();
        return this.client.getApi(this.ops["GetApi"].apply(partialParams));
    }
    invokeGetApiMapping(partialParams) {
        this.boot();
        return this.client.getApiMapping(this.ops["GetApiMapping"].apply(partialParams));
    }
    invokeGetApiMappings(partialParams) {
        this.boot();
        return this.client.getApiMappings(this.ops["GetApiMappings"].apply(partialParams));
    }
    invokeGetApis(partialParams) {
        this.boot();
        return this.client.getApis(this.ops["GetApis"].apply(partialParams));
    }
    invokeGetAuthorizer(partialParams) {
        this.boot();
        return this.client.getAuthorizer(this.ops["GetAuthorizer"].apply(partialParams));
    }
    invokeGetAuthorizers(partialParams) {
        this.boot();
        return this.client.getAuthorizers(this.ops["GetAuthorizers"].apply(partialParams));
    }
    invokeGetDeployment(partialParams) {
        this.boot();
        return this.client.getDeployment(this.ops["GetDeployment"].apply(partialParams));
    }
    invokeGetDeployments(partialParams) {
        this.boot();
        return this.client.getDeployments(this.ops["GetDeployments"].apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        this.boot();
        return this.client.getDomainName(this.ops["GetDomainName"].apply(partialParams));
    }
    invokeGetDomainNames(partialParams) {
        this.boot();
        return this.client.getDomainNames(this.ops["GetDomainNames"].apply(partialParams));
    }
    invokeGetIntegration(partialParams) {
        this.boot();
        return this.client.getIntegration(this.ops["GetIntegration"].apply(partialParams));
    }
    invokeGetIntegrationResponse(partialParams) {
        this.boot();
        return this.client.getIntegrationResponse(this.ops["GetIntegrationResponse"].apply(partialParams));
    }
    invokeGetIntegrationResponses(partialParams) {
        this.boot();
        return this.client.getIntegrationResponses(this.ops["GetIntegrationResponses"].apply(partialParams));
    }
    invokeGetIntegrations(partialParams) {
        this.boot();
        return this.client.getIntegrations(this.ops["GetIntegrations"].apply(partialParams));
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
    invokeGetRoute(partialParams) {
        this.boot();
        return this.client.getRoute(this.ops["GetRoute"].apply(partialParams));
    }
    invokeGetRouteResponse(partialParams) {
        this.boot();
        return this.client.getRouteResponse(this.ops["GetRouteResponse"].apply(partialParams));
    }
    invokeGetRouteResponses(partialParams) {
        this.boot();
        return this.client.getRouteResponses(this.ops["GetRouteResponses"].apply(partialParams));
    }
    invokeGetRoutes(partialParams) {
        this.boot();
        return this.client.getRoutes(this.ops["GetRoutes"].apply(partialParams));
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
    invokeGetVpcLink(partialParams) {
        this.boot();
        return this.client.getVpcLink(this.ops["GetVpcLink"].apply(partialParams));
    }
    invokeGetVpcLinks(partialParams) {
        this.boot();
        return this.client.getVpcLinks(this.ops["GetVpcLinks"].apply(partialParams));
    }
    invokeImportApi(partialParams) {
        this.boot();
        return this.client.importApi(this.ops["ImportApi"].apply(partialParams));
    }
    invokeReimportApi(partialParams) {
        this.boot();
        return this.client.reimportApi(this.ops["ReimportApi"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUpdateApi(partialParams) {
        this.boot();
        return this.client.updateApi(this.ops["UpdateApi"].apply(partialParams));
    }
    invokeUpdateApiMapping(partialParams) {
        this.boot();
        return this.client.updateApiMapping(this.ops["UpdateApiMapping"].apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        this.boot();
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].apply(partialParams));
    }
    invokeUpdateDeployment(partialParams) {
        this.boot();
        return this.client.updateDeployment(this.ops["UpdateDeployment"].apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        this.boot();
        return this.client.updateDomainName(this.ops["UpdateDomainName"].apply(partialParams));
    }
    invokeUpdateIntegration(partialParams) {
        this.boot();
        return this.client.updateIntegration(this.ops["UpdateIntegration"].apply(partialParams));
    }
    invokeUpdateIntegrationResponse(partialParams) {
        this.boot();
        return this.client.updateIntegrationResponse(this.ops["UpdateIntegrationResponse"].apply(partialParams));
    }
    invokeUpdateModel(partialParams) {
        this.boot();
        return this.client.updateModel(this.ops["UpdateModel"].apply(partialParams));
    }
    invokeUpdateRoute(partialParams) {
        this.boot();
        return this.client.updateRoute(this.ops["UpdateRoute"].apply(partialParams));
    }
    invokeUpdateRouteResponse(partialParams) {
        this.boot();
        return this.client.updateRouteResponse(this.ops["UpdateRouteResponse"].apply(partialParams));
    }
    invokeUpdateStage(partialParams) {
        this.boot();
        return this.client.updateStage(this.ops["UpdateStage"].apply(partialParams));
    }
    invokeUpdateVpcLink(partialParams) {
        this.boot();
        return this.client.updateVpcLink(this.ops["UpdateVpcLink"].apply(partialParams));
    }
}
exports.default = default_1;
