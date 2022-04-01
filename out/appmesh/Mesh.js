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
const schema = require("../apis/appmesh-2019-01-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.appmesh.Mesh {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AppMesh();
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
    invokeCreateGatewayRoute(partialParams) {
        this.boot();
        return this.client.createGatewayRoute(this.ops["CreateGatewayRoute"].apply(partialParams));
    }
    invokeCreateMesh(partialParams) {
        this.boot();
        return this.client.createMesh(this.ops["CreateMesh"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        this.boot();
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateVirtualGateway(partialParams) {
        this.boot();
        return this.client.createVirtualGateway(this.ops["CreateVirtualGateway"].apply(partialParams));
    }
    invokeCreateVirtualNode(partialParams) {
        this.boot();
        return this.client.createVirtualNode(this.ops["CreateVirtualNode"].apply(partialParams));
    }
    invokeCreateVirtualRouter(partialParams) {
        this.boot();
        return this.client.createVirtualRouter(this.ops["CreateVirtualRouter"].apply(partialParams));
    }
    invokeCreateVirtualService(partialParams) {
        this.boot();
        return this.client.createVirtualService(this.ops["CreateVirtualService"].apply(partialParams));
    }
    invokeDeleteGatewayRoute(partialParams) {
        this.boot();
        return this.client.deleteGatewayRoute(this.ops["DeleteGatewayRoute"].apply(partialParams));
    }
    invokeDeleteMesh(partialParams) {
        this.boot();
        return this.client.deleteMesh(this.ops["DeleteMesh"].apply(partialParams));
    }
    invokeDeleteRoute(partialParams) {
        this.boot();
        return this.client.deleteRoute(this.ops["DeleteRoute"].apply(partialParams));
    }
    invokeDeleteVirtualGateway(partialParams) {
        this.boot();
        return this.client.deleteVirtualGateway(this.ops["DeleteVirtualGateway"].apply(partialParams));
    }
    invokeDeleteVirtualNode(partialParams) {
        this.boot();
        return this.client.deleteVirtualNode(this.ops["DeleteVirtualNode"].apply(partialParams));
    }
    invokeDeleteVirtualRouter(partialParams) {
        this.boot();
        return this.client.deleteVirtualRouter(this.ops["DeleteVirtualRouter"].apply(partialParams));
    }
    invokeDeleteVirtualService(partialParams) {
        this.boot();
        return this.client.deleteVirtualService(this.ops["DeleteVirtualService"].apply(partialParams));
    }
    invokeDescribeGatewayRoute(partialParams) {
        this.boot();
        return this.client.describeGatewayRoute(this.ops["DescribeGatewayRoute"].apply(partialParams));
    }
    invokeDescribeMesh(partialParams) {
        this.boot();
        return this.client.describeMesh(this.ops["DescribeMesh"].apply(partialParams));
    }
    invokeDescribeRoute(partialParams) {
        this.boot();
        return this.client.describeRoute(this.ops["DescribeRoute"].apply(partialParams));
    }
    invokeDescribeVirtualGateway(partialParams) {
        this.boot();
        return this.client.describeVirtualGateway(this.ops["DescribeVirtualGateway"].apply(partialParams));
    }
    invokeDescribeVirtualNode(partialParams) {
        this.boot();
        return this.client.describeVirtualNode(this.ops["DescribeVirtualNode"].apply(partialParams));
    }
    invokeDescribeVirtualRouter(partialParams) {
        this.boot();
        return this.client.describeVirtualRouter(this.ops["DescribeVirtualRouter"].apply(partialParams));
    }
    invokeDescribeVirtualService(partialParams) {
        this.boot();
        return this.client.describeVirtualService(this.ops["DescribeVirtualService"].apply(partialParams));
    }
    invokeListGatewayRoutes(partialParams) {
        this.boot();
        return this.client.listGatewayRoutes(this.ops["ListGatewayRoutes"].apply(partialParams));
    }
    invokeListMeshes(partialParams) {
        this.boot();
        return this.client.listMeshes(this.ops["ListMeshes"].apply(partialParams));
    }
    invokeListRoutes(partialParams) {
        this.boot();
        return this.client.listRoutes(this.ops["ListRoutes"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListVirtualGateways(partialParams) {
        this.boot();
        return this.client.listVirtualGateways(this.ops["ListVirtualGateways"].apply(partialParams));
    }
    invokeListVirtualNodes(partialParams) {
        this.boot();
        return this.client.listVirtualNodes(this.ops["ListVirtualNodes"].apply(partialParams));
    }
    invokeListVirtualRouters(partialParams) {
        this.boot();
        return this.client.listVirtualRouters(this.ops["ListVirtualRouters"].apply(partialParams));
    }
    invokeListVirtualServices(partialParams) {
        this.boot();
        return this.client.listVirtualServices(this.ops["ListVirtualServices"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateGatewayRoute(partialParams) {
        this.boot();
        return this.client.updateGatewayRoute(this.ops["UpdateGatewayRoute"].apply(partialParams));
    }
    invokeUpdateMesh(partialParams) {
        this.boot();
        return this.client.updateMesh(this.ops["UpdateMesh"].apply(partialParams));
    }
    invokeUpdateRoute(partialParams) {
        this.boot();
        return this.client.updateRoute(this.ops["UpdateRoute"].apply(partialParams));
    }
    invokeUpdateVirtualGateway(partialParams) {
        this.boot();
        return this.client.updateVirtualGateway(this.ops["UpdateVirtualGateway"].apply(partialParams));
    }
    invokeUpdateVirtualNode(partialParams) {
        this.boot();
        return this.client.updateVirtualNode(this.ops["UpdateVirtualNode"].apply(partialParams));
    }
    invokeUpdateVirtualRouter(partialParams) {
        this.boot();
        return this.client.updateVirtualRouter(this.ops["UpdateVirtualRouter"].apply(partialParams));
    }
    invokeUpdateVirtualService(partialParams) {
        this.boot();
        return this.client.updateVirtualService(this.ops["UpdateVirtualService"].apply(partialParams));
    }
}
exports.default = default_1;
