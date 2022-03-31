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
class default_1 extends aws.apigatewayv2.ApiMapping {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.ApiGatewayV2();
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
    invokeCreateApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApi(this.ops["CreateApi"].applicator.apply(partialParams));
    }
    invokeCreateApiMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApiMapping(this.ops["CreateApiMapping"].applicator.apply(partialParams));
    }
    invokeCreateAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAuthorizer(this.ops["CreateAuthorizer"].applicator.apply(partialParams));
    }
    invokeCreateDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDeployment(this.ops["CreateDeployment"].applicator.apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDomainName(this.ops["CreateDomainName"].applicator.apply(partialParams));
    }
    invokeCreateIntegration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIntegration(this.ops["CreateIntegration"].applicator.apply(partialParams));
    }
    invokeCreateIntegrationResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIntegrationResponse(this.ops["CreateIntegrationResponse"].applicator.apply(partialParams));
    }
    invokeCreateModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createModel(this.ops["CreateModel"].applicator.apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoute(this.ops["CreateRoute"].applicator.apply(partialParams));
    }
    invokeCreateRouteResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRouteResponse(this.ops["CreateRouteResponse"].applicator.apply(partialParams));
    }
    invokeCreateStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStage(this.ops["CreateStage"].applicator.apply(partialParams));
    }
    invokeCreateVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVpcLink(this.ops["CreateVpcLink"].applicator.apply(partialParams));
    }
    invokeDeleteAccessLogSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccessLogSettings(this.ops["DeleteAccessLogSettings"].applicator.apply(partialParams));
    }
    invokeDeleteApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApi(this.ops["DeleteApi"].applicator.apply(partialParams));
    }
    invokeDeleteApiMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApiMapping(this.ops["DeleteApiMapping"].applicator.apply(partialParams));
    }
    invokeDeleteAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAuthorizer(this.ops["DeleteAuthorizer"].applicator.apply(partialParams));
    }
    invokeDeleteCorsConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCorsConfiguration(this.ops["DeleteCorsConfiguration"].applicator.apply(partialParams));
    }
    invokeDeleteDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDeployment(this.ops["DeleteDeployment"].applicator.apply(partialParams));
    }
    invokeDeleteDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDomainName(this.ops["DeleteDomainName"].applicator.apply(partialParams));
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
    invokeDeleteModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteModel(this.ops["DeleteModel"].applicator.apply(partialParams));
    }
    invokeDeleteRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRoute(this.ops["DeleteRoute"].applicator.apply(partialParams));
    }
    invokeDeleteRouteRequestParameter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteRequestParameter(this.ops["DeleteRouteRequestParameter"].applicator.apply(partialParams));
    }
    invokeDeleteRouteResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteResponse(this.ops["DeleteRouteResponse"].applicator.apply(partialParams));
    }
    invokeDeleteRouteSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRouteSettings(this.ops["DeleteRouteSettings"].applicator.apply(partialParams));
    }
    invokeDeleteStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStage(this.ops["DeleteStage"].applicator.apply(partialParams));
    }
    invokeDeleteVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVpcLink(this.ops["DeleteVpcLink"].applicator.apply(partialParams));
    }
    invokeExportApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.exportApi(this.ops["ExportApi"].applicator.apply(partialParams));
    }
    invokeResetAuthorizersCache(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetAuthorizersCache(this.ops["ResetAuthorizersCache"].applicator.apply(partialParams));
    }
    invokeGetApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApi(this.ops["GetApi"].applicator.apply(partialParams));
    }
    invokeGetApiMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiMapping(this.ops["GetApiMapping"].applicator.apply(partialParams));
    }
    invokeGetApiMappings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApiMappings(this.ops["GetApiMappings"].applicator.apply(partialParams));
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
    invokeGetDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDomainName(this.ops["GetDomainName"].applicator.apply(partialParams));
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
    invokeGetIntegrationResponses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrationResponses(this.ops["GetIntegrationResponses"].applicator.apply(partialParams));
    }
    invokeGetIntegrations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getIntegrations(this.ops["GetIntegrations"].applicator.apply(partialParams));
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
    invokeGetRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoute(this.ops["GetRoute"].applicator.apply(partialParams));
    }
    invokeGetRouteResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRouteResponse(this.ops["GetRouteResponse"].applicator.apply(partialParams));
    }
    invokeGetRouteResponses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRouteResponses(this.ops["GetRouteResponses"].applicator.apply(partialParams));
    }
    invokeGetRoutes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRoutes(this.ops["GetRoutes"].applicator.apply(partialParams));
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
    invokeGetVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getVpcLink(this.ops["GetVpcLink"].applicator.apply(partialParams));
    }
    invokeImportApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importApi(this.ops["ImportApi"].applicator.apply(partialParams));
    }
    invokeReimportApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.reimportApi(this.ops["ReimportApi"].applicator.apply(partialParams));
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
    invokeUpdateApi(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApi(this.ops["UpdateApi"].applicator.apply(partialParams));
    }
    invokeUpdateApiMapping(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApiMapping(this.ops["UpdateApiMapping"].applicator.apply(partialParams));
    }
    invokeUpdateAuthorizer(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAuthorizer(this.ops["UpdateAuthorizer"].applicator.apply(partialParams));
    }
    invokeUpdateDeployment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDeployment(this.ops["UpdateDeployment"].applicator.apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDomainName(this.ops["UpdateDomainName"].applicator.apply(partialParams));
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
    invokeUpdateModel(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateModel(this.ops["UpdateModel"].applicator.apply(partialParams));
    }
    invokeUpdateRoute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoute(this.ops["UpdateRoute"].applicator.apply(partialParams));
    }
    invokeUpdateRouteResponse(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRouteResponse(this.ops["UpdateRouteResponse"].applicator.apply(partialParams));
    }
    invokeUpdateStage(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStage(this.ops["UpdateStage"].applicator.apply(partialParams));
    }
    invokeUpdateVpcLink(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateVpcLink(this.ops["UpdateVpcLink"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
