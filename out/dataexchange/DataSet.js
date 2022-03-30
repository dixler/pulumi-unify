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
class default_1 extends aws.dataexchange.DataSet {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DataExchange();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/dataexchange-2017-07-25.normal.json"), this.client);
    }
    invokeCancelJob(partialParams) {
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateDataSet(partialParams) {
        return this.client.createDataSet(this.ops["CreateDataSet"].apply(partialParams));
    }
    invokeCreateEventAction(partialParams) {
        return this.client.createEventAction(this.ops["CreateEventAction"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateRevision(partialParams) {
        return this.client.createRevision(this.ops["CreateRevision"].apply(partialParams));
    }
    invokeDeleteAsset(partialParams) {
        return this.client.deleteAsset(this.ops["DeleteAsset"].apply(partialParams));
    }
    invokeDeleteDataSet(partialParams) {
        return this.client.deleteDataSet(this.ops["DeleteDataSet"].apply(partialParams));
    }
    invokeDeleteEventAction(partialParams) {
        return this.client.deleteEventAction(this.ops["DeleteEventAction"].apply(partialParams));
    }
    invokeDeleteRevision(partialParams) {
        return this.client.deleteRevision(this.ops["DeleteRevision"].apply(partialParams));
    }
    invokeGetAsset(partialParams) {
        return this.client.getAsset(this.ops["GetAsset"].apply(partialParams));
    }
    invokeGetDataSet(partialParams) {
        return this.client.getDataSet(this.ops["GetDataSet"].apply(partialParams));
    }
    invokeGetEventAction(partialParams) {
        return this.client.getEventAction(this.ops["GetEventAction"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetRevision(partialParams) {
        return this.client.getRevision(this.ops["GetRevision"].apply(partialParams));
    }
    invokeListDataSetRevisions(partialParams) {
        return this.client.listDataSetRevisions(this.ops["ListDataSetRevisions"].apply(partialParams));
    }
    invokeListRevisionAssets(partialParams) {
        return this.client.listRevisionAssets(this.ops["ListRevisionAssets"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeSendApiAsset(partialParams) {
        return this.client.sendApiAsset(this.ops["SendApiAsset"].apply(partialParams));
    }
    invokeStartJob(partialParams) {
        return this.client.startJob(this.ops["StartJob"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAsset(partialParams) {
        return this.client.updateAsset(this.ops["UpdateAsset"].apply(partialParams));
    }
    invokeUpdateDataSet(partialParams) {
        return this.client.updateDataSet(this.ops["UpdateDataSet"].apply(partialParams));
    }
    invokeUpdateEventAction(partialParams) {
        return this.client.updateEventAction(this.ops["UpdateEventAction"].apply(partialParams));
    }
    invokeUpdateRevision(partialParams) {
        return this.client.updateRevision(this.ops["UpdateRevision"].apply(partialParams));
    }
}
exports.default = default_1;
