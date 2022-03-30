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
class default_1 extends aws.cloudtrail.Trail {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudTrail();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloudtrail-2013-11-01.normal.json"), this.client);
    }
    invokeAddTags(partialParams) {
        return this.client.addTags(this.ops["AddTags"].apply(partialParams));
    }
    invokeCancelQuery(partialParams) {
        return this.client.cancelQuery(this.ops["CancelQuery"].apply(partialParams));
    }
    invokeCreateEventDataStore(partialParams) {
        return this.client.createEventDataStore(this.ops["CreateEventDataStore"].apply(partialParams));
    }
    invokeCreateTrail(partialParams) {
        return this.client.createTrail(this.ops["CreateTrail"].apply(partialParams));
    }
    invokeDeleteEventDataStore(partialParams) {
        return this.client.deleteEventDataStore(this.ops["DeleteEventDataStore"].apply(partialParams));
    }
    invokeDeleteTrail(partialParams) {
        return this.client.deleteTrail(this.ops["DeleteTrail"].apply(partialParams));
    }
    invokeDescribeQuery(partialParams) {
        return this.client.describeQuery(this.ops["DescribeQuery"].apply(partialParams));
    }
    invokeGetEventDataStore(partialParams) {
        return this.client.getEventDataStore(this.ops["GetEventDataStore"].apply(partialParams));
    }
    invokeGetEventSelectors(partialParams) {
        return this.client.getEventSelectors(this.ops["GetEventSelectors"].apply(partialParams));
    }
    invokeGetInsightSelectors(partialParams) {
        return this.client.getInsightSelectors(this.ops["GetInsightSelectors"].apply(partialParams));
    }
    invokeGetQueryResults(partialParams) {
        return this.client.getQueryResults(this.ops["GetQueryResults"].apply(partialParams));
    }
    invokeGetTrail(partialParams) {
        return this.client.getTrail(this.ops["GetTrail"].apply(partialParams));
    }
    invokeGetTrailStatus(partialParams) {
        return this.client.getTrailStatus(this.ops["GetTrailStatus"].apply(partialParams));
    }
    invokeListQueries(partialParams) {
        return this.client.listQueries(this.ops["ListQueries"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokePutEventSelectors(partialParams) {
        return this.client.putEventSelectors(this.ops["PutEventSelectors"].apply(partialParams));
    }
    invokePutInsightSelectors(partialParams) {
        return this.client.putInsightSelectors(this.ops["PutInsightSelectors"].apply(partialParams));
    }
    invokeRemoveTags(partialParams) {
        return this.client.removeTags(this.ops["RemoveTags"].apply(partialParams));
    }
    invokeRestoreEventDataStore(partialParams) {
        return this.client.restoreEventDataStore(this.ops["RestoreEventDataStore"].apply(partialParams));
    }
    invokeStartLogging(partialParams) {
        return this.client.startLogging(this.ops["StartLogging"].apply(partialParams));
    }
    invokeStartQuery(partialParams) {
        return this.client.startQuery(this.ops["StartQuery"].apply(partialParams));
    }
    invokeStopLogging(partialParams) {
        return this.client.stopLogging(this.ops["StopLogging"].apply(partialParams));
    }
    invokeUpdateEventDataStore(partialParams) {
        return this.client.updateEventDataStore(this.ops["UpdateEventDataStore"].apply(partialParams));
    }
    invokeUpdateTrail(partialParams) {
        return this.client.updateTrail(this.ops["UpdateTrail"].apply(partialParams));
    }
}
exports.default = default_1;
