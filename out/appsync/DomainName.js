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
class default_1 extends aws.appsync.DomainName {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.AppSync();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/appsync-2017-07-25.normal.json"), this.client);
    }
    invokeAssociateApi(partialParams) {
        return this.client.associateApi(this.ops["AssociateApi"].apply(partialParams));
    }
    invokeCreateApiCache(partialParams) {
        return this.client.createApiCache(this.ops["CreateApiCache"].apply(partialParams));
    }
    invokeCreateApiKey(partialParams) {
        return this.client.createApiKey(this.ops["CreateApiKey"].apply(partialParams));
    }
    invokeCreateDataSource(partialParams) {
        return this.client.createDataSource(this.ops["CreateDataSource"].apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        return this.client.createDomainName(this.ops["CreateDomainName"].apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        return this.client.createFunction(this.ops["CreateFunction"].apply(partialParams));
    }
    invokeCreateGraphqlApi(partialParams) {
        return this.client.createGraphqlApi(this.ops["CreateGraphqlApi"].apply(partialParams));
    }
    invokeCreateResolver(partialParams) {
        return this.client.createResolver(this.ops["CreateResolver"].apply(partialParams));
    }
    invokeCreateType(partialParams) {
        return this.client.createType(this.ops["CreateType"].apply(partialParams));
    }
    invokeDeleteApiCache(partialParams) {
        return this.client.deleteApiCache(this.ops["DeleteApiCache"].apply(partialParams));
    }
    invokeDeleteApiKey(partialParams) {
        return this.client.deleteApiKey(this.ops["DeleteApiKey"].apply(partialParams));
    }
    invokeDeleteDataSource(partialParams) {
        return this.client.deleteDataSource(this.ops["DeleteDataSource"].apply(partialParams));
    }
    invokeDeleteDomainName(partialParams) {
        return this.client.deleteDomainName(this.ops["DeleteDomainName"].apply(partialParams));
    }
    invokeDeleteFunction(partialParams) {
        return this.client.deleteFunction(this.ops["DeleteFunction"].apply(partialParams));
    }
    invokeDeleteGraphqlApi(partialParams) {
        return this.client.deleteGraphqlApi(this.ops["DeleteGraphqlApi"].apply(partialParams));
    }
    invokeDeleteResolver(partialParams) {
        return this.client.deleteResolver(this.ops["DeleteResolver"].apply(partialParams));
    }
    invokeDeleteType(partialParams) {
        return this.client.deleteType(this.ops["DeleteType"].apply(partialParams));
    }
    invokeDisassociateApi(partialParams) {
        return this.client.disassociateApi(this.ops["DisassociateApi"].apply(partialParams));
    }
    invokeFlushApiCache(partialParams) {
        return this.client.flushApiCache(this.ops["FlushApiCache"].apply(partialParams));
    }
    invokeGetApiAssociation(partialParams) {
        return this.client.getApiAssociation(this.ops["GetApiAssociation"].apply(partialParams));
    }
    invokeGetApiCache(partialParams) {
        return this.client.getApiCache(this.ops["GetApiCache"].apply(partialParams));
    }
    invokeGetDataSource(partialParams) {
        return this.client.getDataSource(this.ops["GetDataSource"].apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        return this.client.getDomainName(this.ops["GetDomainName"].apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        return this.client.getFunction(this.ops["GetFunction"].apply(partialParams));
    }
    invokeGetGraphqlApi(partialParams) {
        return this.client.getGraphqlApi(this.ops["GetGraphqlApi"].apply(partialParams));
    }
    invokeGetIntrospectionSchema(partialParams) {
        return this.client.getIntrospectionSchema(this.ops["GetIntrospectionSchema"].apply(partialParams));
    }
    invokeGetResolver(partialParams) {
        return this.client.getResolver(this.ops["GetResolver"].apply(partialParams));
    }
    invokeGetSchemaCreationStatus(partialParams) {
        return this.client.getSchemaCreationStatus(this.ops["GetSchemaCreationStatus"].apply(partialParams));
    }
    invokeGetType(partialParams) {
        return this.client.getType(this.ops["GetType"].apply(partialParams));
    }
    invokeListApiKeys(partialParams) {
        return this.client.listApiKeys(this.ops["ListApiKeys"].apply(partialParams));
    }
    invokeListDataSources(partialParams) {
        return this.client.listDataSources(this.ops["ListDataSources"].apply(partialParams));
    }
    invokeListFunctions(partialParams) {
        return this.client.listFunctions(this.ops["ListFunctions"].apply(partialParams));
    }
    invokeListResolvers(partialParams) {
        return this.client.listResolvers(this.ops["ListResolvers"].apply(partialParams));
    }
    invokeListResolversByFunction(partialParams) {
        return this.client.listResolversByFunction(this.ops["ListResolversByFunction"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTypes(partialParams) {
        return this.client.listTypes(this.ops["ListTypes"].apply(partialParams));
    }
    invokeStartSchemaCreation(partialParams) {
        return this.client.startSchemaCreation(this.ops["StartSchemaCreation"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApiCache(partialParams) {
        return this.client.updateApiCache(this.ops["UpdateApiCache"].apply(partialParams));
    }
    invokeUpdateApiKey(partialParams) {
        return this.client.updateApiKey(this.ops["UpdateApiKey"].apply(partialParams));
    }
    invokeUpdateDataSource(partialParams) {
        return this.client.updateDataSource(this.ops["UpdateDataSource"].apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        return this.client.updateDomainName(this.ops["UpdateDomainName"].apply(partialParams));
    }
    invokeUpdateFunction(partialParams) {
        return this.client.updateFunction(this.ops["UpdateFunction"].apply(partialParams));
    }
    invokeUpdateGraphqlApi(partialParams) {
        return this.client.updateGraphqlApi(this.ops["UpdateGraphqlApi"].apply(partialParams));
    }
    invokeUpdateResolver(partialParams) {
        return this.client.updateResolver(this.ops["UpdateResolver"].apply(partialParams));
    }
    invokeUpdateType(partialParams) {
        return this.client.updateType(this.ops["UpdateType"].apply(partialParams));
    }
}
exports.default = default_1;
