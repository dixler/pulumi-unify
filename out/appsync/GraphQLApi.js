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
const schema = require("../apis/appsync-2017-07-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.appsync.GraphQLApi {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.AppSync();
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
    invokeAssociateApi(partialParams) {
        this.boot();
        return this.client.associateApi(this.ops["AssociateApi"].apply(partialParams));
    }
    invokeCreateApiCache(partialParams) {
        this.boot();
        return this.client.createApiCache(this.ops["CreateApiCache"].apply(partialParams));
    }
    invokeCreateApiKey(partialParams) {
        this.boot();
        return this.client.createApiKey(this.ops["CreateApiKey"].apply(partialParams));
    }
    invokeCreateDataSource(partialParams) {
        this.boot();
        return this.client.createDataSource(this.ops["CreateDataSource"].apply(partialParams));
    }
    invokeCreateDomainName(partialParams) {
        this.boot();
        return this.client.createDomainName(this.ops["CreateDomainName"].apply(partialParams));
    }
    invokeCreateFunction(partialParams) {
        this.boot();
        return this.client.createFunction(this.ops["CreateFunction"].apply(partialParams));
    }
    invokeCreateGraphqlApi(partialParams) {
        this.boot();
        return this.client.createGraphqlApi(this.ops["CreateGraphqlApi"].apply(partialParams));
    }
    invokeCreateResolver(partialParams) {
        this.boot();
        return this.client.createResolver(this.ops["CreateResolver"].apply(partialParams));
    }
    invokeCreateType(partialParams) {
        this.boot();
        return this.client.createType(this.ops["CreateType"].apply(partialParams));
    }
    invokeDeleteApiCache(partialParams) {
        this.boot();
        return this.client.deleteApiCache(this.ops["DeleteApiCache"].apply(partialParams));
    }
    invokeDeleteApiKey(partialParams) {
        this.boot();
        return this.client.deleteApiKey(this.ops["DeleteApiKey"].apply(partialParams));
    }
    invokeDeleteDataSource(partialParams) {
        this.boot();
        return this.client.deleteDataSource(this.ops["DeleteDataSource"].apply(partialParams));
    }
    invokeDeleteDomainName(partialParams) {
        this.boot();
        return this.client.deleteDomainName(this.ops["DeleteDomainName"].apply(partialParams));
    }
    invokeDeleteFunction(partialParams) {
        this.boot();
        return this.client.deleteFunction(this.ops["DeleteFunction"].apply(partialParams));
    }
    invokeDeleteGraphqlApi(partialParams) {
        this.boot();
        return this.client.deleteGraphqlApi(this.ops["DeleteGraphqlApi"].apply(partialParams));
    }
    invokeDeleteResolver(partialParams) {
        this.boot();
        return this.client.deleteResolver(this.ops["DeleteResolver"].apply(partialParams));
    }
    invokeDeleteType(partialParams) {
        this.boot();
        return this.client.deleteType(this.ops["DeleteType"].apply(partialParams));
    }
    invokeDisassociateApi(partialParams) {
        this.boot();
        return this.client.disassociateApi(this.ops["DisassociateApi"].apply(partialParams));
    }
    invokeFlushApiCache(partialParams) {
        this.boot();
        return this.client.flushApiCache(this.ops["FlushApiCache"].apply(partialParams));
    }
    invokeGetApiAssociation(partialParams) {
        this.boot();
        return this.client.getApiAssociation(this.ops["GetApiAssociation"].apply(partialParams));
    }
    invokeGetApiCache(partialParams) {
        this.boot();
        return this.client.getApiCache(this.ops["GetApiCache"].apply(partialParams));
    }
    invokeGetDataSource(partialParams) {
        this.boot();
        return this.client.getDataSource(this.ops["GetDataSource"].apply(partialParams));
    }
    invokeGetDomainName(partialParams) {
        this.boot();
        return this.client.getDomainName(this.ops["GetDomainName"].apply(partialParams));
    }
    invokeGetFunction(partialParams) {
        this.boot();
        return this.client.getFunction(this.ops["GetFunction"].apply(partialParams));
    }
    invokeGetGraphqlApi(partialParams) {
        this.boot();
        return this.client.getGraphqlApi(this.ops["GetGraphqlApi"].apply(partialParams));
    }
    invokeGetIntrospectionSchema(partialParams) {
        this.boot();
        return this.client.getIntrospectionSchema(this.ops["GetIntrospectionSchema"].apply(partialParams));
    }
    invokeGetResolver(partialParams) {
        this.boot();
        return this.client.getResolver(this.ops["GetResolver"].apply(partialParams));
    }
    invokeGetSchemaCreationStatus(partialParams) {
        this.boot();
        return this.client.getSchemaCreationStatus(this.ops["GetSchemaCreationStatus"].apply(partialParams));
    }
    invokeGetType(partialParams) {
        this.boot();
        return this.client.getType(this.ops["GetType"].apply(partialParams));
    }
    invokeListApiKeys(partialParams) {
        this.boot();
        return this.client.listApiKeys(this.ops["ListApiKeys"].apply(partialParams));
    }
    invokeListDataSources(partialParams) {
        this.boot();
        return this.client.listDataSources(this.ops["ListDataSources"].apply(partialParams));
    }
    invokeListDomainNames(partialParams) {
        this.boot();
        return this.client.listDomainNames(this.ops["ListDomainNames"].apply(partialParams));
    }
    invokeListFunctions(partialParams) {
        this.boot();
        return this.client.listFunctions(this.ops["ListFunctions"].apply(partialParams));
    }
    invokeListGraphqlApis(partialParams) {
        this.boot();
        return this.client.listGraphqlApis(this.ops["ListGraphqlApis"].apply(partialParams));
    }
    invokeListResolvers(partialParams) {
        this.boot();
        return this.client.listResolvers(this.ops["ListResolvers"].apply(partialParams));
    }
    invokeListResolversByFunction(partialParams) {
        this.boot();
        return this.client.listResolversByFunction(this.ops["ListResolversByFunction"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTypes(partialParams) {
        this.boot();
        return this.client.listTypes(this.ops["ListTypes"].apply(partialParams));
    }
    invokeStartSchemaCreation(partialParams) {
        this.boot();
        return this.client.startSchemaCreation(this.ops["StartSchemaCreation"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApiCache(partialParams) {
        this.boot();
        return this.client.updateApiCache(this.ops["UpdateApiCache"].apply(partialParams));
    }
    invokeUpdateApiKey(partialParams) {
        this.boot();
        return this.client.updateApiKey(this.ops["UpdateApiKey"].apply(partialParams));
    }
    invokeUpdateDataSource(partialParams) {
        this.boot();
        return this.client.updateDataSource(this.ops["UpdateDataSource"].apply(partialParams));
    }
    invokeUpdateDomainName(partialParams) {
        this.boot();
        return this.client.updateDomainName(this.ops["UpdateDomainName"].apply(partialParams));
    }
    invokeUpdateFunction(partialParams) {
        this.boot();
        return this.client.updateFunction(this.ops["UpdateFunction"].apply(partialParams));
    }
    invokeUpdateGraphqlApi(partialParams) {
        this.boot();
        return this.client.updateGraphqlApi(this.ops["UpdateGraphqlApi"].apply(partialParams));
    }
    invokeUpdateResolver(partialParams) {
        this.boot();
        return this.client.updateResolver(this.ops["UpdateResolver"].apply(partialParams));
    }
    invokeUpdateType(partialParams) {
        this.boot();
        return this.client.updateType(this.ops["UpdateType"].apply(partialParams));
    }
}
exports.default = default_1;
