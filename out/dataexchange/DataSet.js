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
const schema = require("../apis/dataexchange-2017-07-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.dataexchange.DataSet {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DataExchange();
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
    invokeCreateDataSet(partialParams) {
        this.boot();
        return this.client.createDataSet(this.ops["CreateDataSet"].apply(partialParams));
    }
    invokeCreateEventAction(partialParams) {
        this.boot();
        return this.client.createEventAction(this.ops["CreateEventAction"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateRevision(partialParams) {
        this.boot();
        return this.client.createRevision(this.ops["CreateRevision"].apply(partialParams));
    }
    invokeGetAsset(partialParams) {
        this.boot();
        return this.client.getAsset(this.ops["GetAsset"].apply(partialParams));
    }
    invokeGetDataSet(partialParams) {
        this.boot();
        return this.client.getDataSet(this.ops["GetDataSet"].apply(partialParams));
    }
    invokeGetEventAction(partialParams) {
        this.boot();
        return this.client.getEventAction(this.ops["GetEventAction"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        this.boot();
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetRevision(partialParams) {
        this.boot();
        return this.client.getRevision(this.ops["GetRevision"].apply(partialParams));
    }
    invokeListDataSetRevisions(partialParams) {
        this.boot();
        return this.client.listDataSetRevisions(this.ops["ListDataSetRevisions"].apply(partialParams));
    }
    invokeListDataSets(partialParams) {
        this.boot();
        return this.client.listDataSets(this.ops["ListDataSets"].apply(partialParams));
    }
    invokeListEventActions(partialParams) {
        this.boot();
        return this.client.listEventActions(this.ops["ListEventActions"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListRevisionAssets(partialParams) {
        this.boot();
        return this.client.listRevisionAssets(this.ops["ListRevisionAssets"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeSendApiAsset(partialParams) {
        this.boot();
        return this.client.sendApiAsset(this.ops["SendApiAsset"].apply(partialParams));
    }
    invokeStartJob(partialParams) {
        this.boot();
        return this.client.startJob(this.ops["StartJob"].apply(partialParams));
    }
    invokeUpdateAsset(partialParams) {
        this.boot();
        return this.client.updateAsset(this.ops["UpdateAsset"].apply(partialParams));
    }
    invokeUpdateDataSet(partialParams) {
        this.boot();
        return this.client.updateDataSet(this.ops["UpdateDataSet"].apply(partialParams));
    }
    invokeUpdateEventAction(partialParams) {
        this.boot();
        return this.client.updateEventAction(this.ops["UpdateEventAction"].apply(partialParams));
    }
    invokeUpdateRevision(partialParams) {
        this.boot();
        return this.client.updateRevision(this.ops["UpdateRevision"].apply(partialParams));
    }
}
exports.default = default_1;
