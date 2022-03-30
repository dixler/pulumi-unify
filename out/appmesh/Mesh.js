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
class default_1 extends aws.appmesh.Mesh {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AppMesh();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/appmesh-2019-01-25.normal.json"), this.client);
    }
    invokeCreateGatewayRoute(partialParams) {
        return this.client.createGatewayRoute(this.ops["CreateGatewayRoute"].apply(partialParams));
    }
    invokeCreateMesh(partialParams) {
        return this.client.createMesh(this.ops["CreateMesh"].apply(partialParams));
    }
    invokeCreateRoute(partialParams) {
        return this.client.createRoute(this.ops["CreateRoute"].apply(partialParams));
    }
    invokeCreateVirtualGateway(partialParams) {
        return this.client.createVirtualGateway(this.ops["CreateVirtualGateway"].apply(partialParams));
    }
    invokeCreateVirtualNode(partialParams) {
        return this.client.createVirtualNode(this.ops["CreateVirtualNode"].apply(partialParams));
    }
    invokeCreateVirtualRouter(partialParams) {
        return this.client.createVirtualRouter(this.ops["CreateVirtualRouter"].apply(partialParams));
    }
    invokeCreateVirtualService(partialParams) {
        return this.client.createVirtualService(this.ops["CreateVirtualService"].apply(partialParams));
    }
    invokeDeleteGatewayRoute(partialParams) {
        return this.client.deleteGatewayRoute(this.ops["DeleteGatewayRoute"].apply(partialParams));
    }
    invokeDeleteMesh(partialParams) {
        return this.client.deleteMesh(this.ops["DeleteMesh"].apply(partialParams));
    }
    invokeDeleteRoute(partialParams) {
        return this.client.deleteRoute(this.ops["DeleteRoute"].apply(partialParams));
    }
    invokeDeleteVirtualGateway(partialParams) {
        return this.client.deleteVirtualGateway(this.ops["DeleteVirtualGateway"].apply(partialParams));
    }
    invokeDeleteVirtualNode(partialParams) {
        return this.client.deleteVirtualNode(this.ops["DeleteVirtualNode"].apply(partialParams));
    }
    invokeDeleteVirtualRouter(partialParams) {
        return this.client.deleteVirtualRouter(this.ops["DeleteVirtualRouter"].apply(partialParams));
    }
    invokeDeleteVirtualService(partialParams) {
        return this.client.deleteVirtualService(this.ops["DeleteVirtualService"].apply(partialParams));
    }
    invokeDescribeGatewayRoute(partialParams) {
        return this.client.describeGatewayRoute(this.ops["DescribeGatewayRoute"].apply(partialParams));
    }
    invokeDescribeMesh(partialParams) {
        return this.client.describeMesh(this.ops["DescribeMesh"].apply(partialParams));
    }
    invokeDescribeRoute(partialParams) {
        return this.client.describeRoute(this.ops["DescribeRoute"].apply(partialParams));
    }
    invokeDescribeVirtualGateway(partialParams) {
        return this.client.describeVirtualGateway(this.ops["DescribeVirtualGateway"].apply(partialParams));
    }
    invokeDescribeVirtualNode(partialParams) {
        return this.client.describeVirtualNode(this.ops["DescribeVirtualNode"].apply(partialParams));
    }
    invokeDescribeVirtualRouter(partialParams) {
        return this.client.describeVirtualRouter(this.ops["DescribeVirtualRouter"].apply(partialParams));
    }
    invokeDescribeVirtualService(partialParams) {
        return this.client.describeVirtualService(this.ops["DescribeVirtualService"].apply(partialParams));
    }
    invokeListGatewayRoutes(partialParams) {
        return this.client.listGatewayRoutes(this.ops["ListGatewayRoutes"].apply(partialParams));
    }
    invokeListRoutes(partialParams) {
        return this.client.listRoutes(this.ops["ListRoutes"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListVirtualGateways(partialParams) {
        return this.client.listVirtualGateways(this.ops["ListVirtualGateways"].apply(partialParams));
    }
    invokeListVirtualNodes(partialParams) {
        return this.client.listVirtualNodes(this.ops["ListVirtualNodes"].apply(partialParams));
    }
    invokeListVirtualRouters(partialParams) {
        return this.client.listVirtualRouters(this.ops["ListVirtualRouters"].apply(partialParams));
    }
    invokeListVirtualServices(partialParams) {
        return this.client.listVirtualServices(this.ops["ListVirtualServices"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateGatewayRoute(partialParams) {
        return this.client.updateGatewayRoute(this.ops["UpdateGatewayRoute"].apply(partialParams));
    }
    invokeUpdateMesh(partialParams) {
        return this.client.updateMesh(this.ops["UpdateMesh"].apply(partialParams));
    }
    invokeUpdateRoute(partialParams) {
        return this.client.updateRoute(this.ops["UpdateRoute"].apply(partialParams));
    }
    invokeUpdateVirtualGateway(partialParams) {
        return this.client.updateVirtualGateway(this.ops["UpdateVirtualGateway"].apply(partialParams));
    }
    invokeUpdateVirtualNode(partialParams) {
        return this.client.updateVirtualNode(this.ops["UpdateVirtualNode"].apply(partialParams));
    }
    invokeUpdateVirtualRouter(partialParams) {
        return this.client.updateVirtualRouter(this.ops["UpdateVirtualRouter"].apply(partialParams));
    }
    invokeUpdateVirtualService(partialParams) {
        return this.client.updateVirtualService(this.ops["UpdateVirtualService"].apply(partialParams));
    }
}
exports.default = default_1;
