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
const schema = require("../apis/dynamodb-2012-08-10.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.dynamodb.Table {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DynamoDB();
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
    invokeCreateBackup(partialParams) {
        this.boot();
        return this.client.createBackup(this.ops["CreateBackup"].apply(partialParams));
    }
    invokeCreateTable(partialParams) {
        this.boot();
        return this.client.createTable(this.ops["CreateTable"].apply(partialParams));
    }
    invokeDeleteItem(partialParams) {
        this.boot();
        return this.client.deleteItem(this.ops["DeleteItem"].apply(partialParams));
    }
    invokeDeleteTable(partialParams) {
        this.boot();
        return this.client.deleteTable(this.ops["DeleteTable"].apply(partialParams));
    }
    invokeDescribeContinuousBackups(partialParams) {
        this.boot();
        return this.client.describeContinuousBackups(this.ops["DescribeContinuousBackups"].apply(partialParams));
    }
    invokeDescribeContributorInsights(partialParams) {
        this.boot();
        return this.client.describeContributorInsights(this.ops["DescribeContributorInsights"].apply(partialParams));
    }
    invokeDescribeKinesisStreamingDestination(partialParams) {
        this.boot();
        return this.client.describeKinesisStreamingDestination(this.ops["DescribeKinesisStreamingDestination"].apply(partialParams));
    }
    invokeDescribeTable(partialParams) {
        this.boot();
        return this.client.describeTable(this.ops["DescribeTable"].apply(partialParams));
    }
    invokeDescribeTableReplicaAutoScaling(partialParams) {
        this.boot();
        return this.client.describeTableReplicaAutoScaling(this.ops["DescribeTableReplicaAutoScaling"].apply(partialParams));
    }
    invokeDescribeTimeToLive(partialParams) {
        this.boot();
        return this.client.describeTimeToLive(this.ops["DescribeTimeToLive"].apply(partialParams));
    }
    invokeDisableKinesisStreamingDestination(partialParams) {
        this.boot();
        return this.client.disableKinesisStreamingDestination(this.ops["DisableKinesisStreamingDestination"].apply(partialParams));
    }
    invokeEnableKinesisStreamingDestination(partialParams) {
        this.boot();
        return this.client.enableKinesisStreamingDestination(this.ops["EnableKinesisStreamingDestination"].apply(partialParams));
    }
    invokeExportTableToPointInTime(partialParams) {
        this.boot();
        return this.client.exportTableToPointInTime(this.ops["ExportTableToPointInTime"].apply(partialParams));
    }
    invokeGetItem(partialParams) {
        this.boot();
        return this.client.getItem(this.ops["GetItem"].apply(partialParams));
    }
    invokePutItem(partialParams) {
        this.boot();
        return this.client.putItem(this.ops["PutItem"].apply(partialParams));
    }
    invokeQuery(partialParams) {
        this.boot();
        return this.client.query(this.ops["Query"].apply(partialParams));
    }
    invokeScan(partialParams) {
        this.boot();
        return this.client.scan(this.ops["Scan"].apply(partialParams));
    }
    invokeUpdateContinuousBackups(partialParams) {
        this.boot();
        return this.client.updateContinuousBackups(this.ops["UpdateContinuousBackups"].apply(partialParams));
    }
    invokeUpdateContributorInsights(partialParams) {
        this.boot();
        return this.client.updateContributorInsights(this.ops["UpdateContributorInsights"].apply(partialParams));
    }
    invokeUpdateItem(partialParams) {
        this.boot();
        return this.client.updateItem(this.ops["UpdateItem"].apply(partialParams));
    }
    invokeUpdateTable(partialParams) {
        this.boot();
        return this.client.updateTable(this.ops["UpdateTable"].apply(partialParams));
    }
    invokeUpdateTableReplicaAutoScaling(partialParams) {
        this.boot();
        return this.client.updateTableReplicaAutoScaling(this.ops["UpdateTableReplicaAutoScaling"].apply(partialParams));
    }
    invokeUpdateTimeToLive(partialParams) {
        this.boot();
        return this.client.updateTimeToLive(this.ops["UpdateTimeToLive"].apply(partialParams));
    }
}
exports.default = default_1;
