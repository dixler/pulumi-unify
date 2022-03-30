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
class default_1 extends aws.athena.NamedQuery {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Athena();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/athena-2017-05-18.normal.json"), this.client);
    }
    invokeBatchGetNamedQuery(partialParams) {
        return this.client.batchGetNamedQuery(this.ops["BatchGetNamedQuery"].apply(partialParams));
    }
    invokeBatchGetQueryExecution(partialParams) {
        return this.client.batchGetQueryExecution(this.ops["BatchGetQueryExecution"].apply(partialParams));
    }
    invokeCreateDataCatalog(partialParams) {
        return this.client.createDataCatalog(this.ops["CreateDataCatalog"].apply(partialParams));
    }
    invokeCreateNamedQuery(partialParams) {
        return this.client.createNamedQuery(this.ops["CreateNamedQuery"].apply(partialParams));
    }
    invokeCreatePreparedStatement(partialParams) {
        return this.client.createPreparedStatement(this.ops["CreatePreparedStatement"].apply(partialParams));
    }
    invokeCreateWorkGroup(partialParams) {
        return this.client.createWorkGroup(this.ops["CreateWorkGroup"].apply(partialParams));
    }
    invokeDeleteDataCatalog(partialParams) {
        return this.client.deleteDataCatalog(this.ops["DeleteDataCatalog"].apply(partialParams));
    }
    invokeDeleteNamedQuery(partialParams) {
        return this.client.deleteNamedQuery(this.ops["DeleteNamedQuery"].apply(partialParams));
    }
    invokeDeletePreparedStatement(partialParams) {
        return this.client.deletePreparedStatement(this.ops["DeletePreparedStatement"].apply(partialParams));
    }
    invokeDeleteWorkGroup(partialParams) {
        return this.client.deleteWorkGroup(this.ops["DeleteWorkGroup"].apply(partialParams));
    }
    invokeGetDataCatalog(partialParams) {
        return this.client.getDataCatalog(this.ops["GetDataCatalog"].apply(partialParams));
    }
    invokeGetDatabase(partialParams) {
        return this.client.getDatabase(this.ops["GetDatabase"].apply(partialParams));
    }
    invokeGetNamedQuery(partialParams) {
        return this.client.getNamedQuery(this.ops["GetNamedQuery"].apply(partialParams));
    }
    invokeGetPreparedStatement(partialParams) {
        return this.client.getPreparedStatement(this.ops["GetPreparedStatement"].apply(partialParams));
    }
    invokeGetQueryExecution(partialParams) {
        return this.client.getQueryExecution(this.ops["GetQueryExecution"].apply(partialParams));
    }
    invokeGetQueryResults(partialParams) {
        return this.client.getQueryResults(this.ops["GetQueryResults"].apply(partialParams));
    }
    invokeGetTableMetadata(partialParams) {
        return this.client.getTableMetadata(this.ops["GetTableMetadata"].apply(partialParams));
    }
    invokeGetWorkGroup(partialParams) {
        return this.client.getWorkGroup(this.ops["GetWorkGroup"].apply(partialParams));
    }
    invokeListDatabases(partialParams) {
        return this.client.listDatabases(this.ops["ListDatabases"].apply(partialParams));
    }
    invokeListPreparedStatements(partialParams) {
        return this.client.listPreparedStatements(this.ops["ListPreparedStatements"].apply(partialParams));
    }
    invokeListTableMetadata(partialParams) {
        return this.client.listTableMetadata(this.ops["ListTableMetadata"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartQueryExecution(partialParams) {
        return this.client.startQueryExecution(this.ops["StartQueryExecution"].apply(partialParams));
    }
    invokeStopQueryExecution(partialParams) {
        return this.client.stopQueryExecution(this.ops["StopQueryExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateDataCatalog(partialParams) {
        return this.client.updateDataCatalog(this.ops["UpdateDataCatalog"].apply(partialParams));
    }
    invokeUpdatePreparedStatement(partialParams) {
        return this.client.updatePreparedStatement(this.ops["UpdatePreparedStatement"].apply(partialParams));
    }
    invokeUpdateWorkGroup(partialParams) {
        return this.client.updateWorkGroup(this.ops["UpdateWorkGroup"].apply(partialParams));
    }
}
exports.default = default_1;
