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
const schema = require("../apis/cloudtrail-2013-11-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloudtrail.Trail {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CloudTrail();
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
    invokeAddTags(partialParams) {
        this.boot();
        return this.client.addTags(this.ops["AddTags"].apply(partialParams));
    }
    invokeCancelQuery(partialParams) {
        this.boot();
        return this.client.cancelQuery(this.ops["CancelQuery"].apply(partialParams));
    }
    invokeCreateEventDataStore(partialParams) {
        this.boot();
        return this.client.createEventDataStore(this.ops["CreateEventDataStore"].apply(partialParams));
    }
    invokeCreateTrail(partialParams) {
        this.boot();
        return this.client.createTrail(this.ops["CreateTrail"].apply(partialParams));
    }
    invokeDeleteEventDataStore(partialParams) {
        this.boot();
        return this.client.deleteEventDataStore(this.ops["DeleteEventDataStore"].apply(partialParams));
    }
    invokeDeleteTrail(partialParams) {
        this.boot();
        return this.client.deleteTrail(this.ops["DeleteTrail"].apply(partialParams));
    }
    invokeDescribeQuery(partialParams) {
        this.boot();
        return this.client.describeQuery(this.ops["DescribeQuery"].apply(partialParams));
    }
    invokeDescribeTrails(partialParams) {
        this.boot();
        return this.client.describeTrails(this.ops["DescribeTrails"].apply(partialParams));
    }
    invokeGetEventDataStore(partialParams) {
        this.boot();
        return this.client.getEventDataStore(this.ops["GetEventDataStore"].apply(partialParams));
    }
    invokeGetEventSelectors(partialParams) {
        this.boot();
        return this.client.getEventSelectors(this.ops["GetEventSelectors"].apply(partialParams));
    }
    invokeGetInsightSelectors(partialParams) {
        this.boot();
        return this.client.getInsightSelectors(this.ops["GetInsightSelectors"].apply(partialParams));
    }
    invokeGetQueryResults(partialParams) {
        this.boot();
        return this.client.getQueryResults(this.ops["GetQueryResults"].apply(partialParams));
    }
    invokeGetTrail(partialParams) {
        this.boot();
        return this.client.getTrail(this.ops["GetTrail"].apply(partialParams));
    }
    invokeGetTrailStatus(partialParams) {
        this.boot();
        return this.client.getTrailStatus(this.ops["GetTrailStatus"].apply(partialParams));
    }
    invokeListEventDataStores(partialParams) {
        this.boot();
        return this.client.listEventDataStores(this.ops["ListEventDataStores"].apply(partialParams));
    }
    invokeListPublicKeys(partialParams) {
        this.boot();
        return this.client.listPublicKeys(this.ops["ListPublicKeys"].apply(partialParams));
    }
    invokeListQueries(partialParams) {
        this.boot();
        return this.client.listQueries(this.ops["ListQueries"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListTrails(partialParams) {
        this.boot();
        return this.client.listTrails(this.ops["ListTrails"].apply(partialParams));
    }
    invokeLookupEvents(partialParams) {
        this.boot();
        return this.client.lookupEvents(this.ops["LookupEvents"].apply(partialParams));
    }
    invokePutEventSelectors(partialParams) {
        this.boot();
        return this.client.putEventSelectors(this.ops["PutEventSelectors"].apply(partialParams));
    }
    invokePutInsightSelectors(partialParams) {
        this.boot();
        return this.client.putInsightSelectors(this.ops["PutInsightSelectors"].apply(partialParams));
    }
    invokeRemoveTags(partialParams) {
        this.boot();
        return this.client.removeTags(this.ops["RemoveTags"].apply(partialParams));
    }
    invokeRestoreEventDataStore(partialParams) {
        this.boot();
        return this.client.restoreEventDataStore(this.ops["RestoreEventDataStore"].apply(partialParams));
    }
    invokeStartLogging(partialParams) {
        this.boot();
        return this.client.startLogging(this.ops["StartLogging"].apply(partialParams));
    }
    invokeStartQuery(partialParams) {
        this.boot();
        return this.client.startQuery(this.ops["StartQuery"].apply(partialParams));
    }
    invokeStopLogging(partialParams) {
        this.boot();
        return this.client.stopLogging(this.ops["StopLogging"].apply(partialParams));
    }
    invokeUpdateEventDataStore(partialParams) {
        this.boot();
        return this.client.updateEventDataStore(this.ops["UpdateEventDataStore"].apply(partialParams));
    }
    invokeUpdateTrail(partialParams) {
        this.boot();
        return this.client.updateTrail(this.ops["UpdateTrail"].apply(partialParams));
    }
}
exports.default = default_1;
