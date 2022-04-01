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
const schema = require("../apis/mediapackage-2017-10-12.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.mediapackage.Channel {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.MediaPackage();
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
    invokeConfigureLogs(partialParams) {
        this.boot();
        return this.client.configureLogs(this.ops["ConfigureLogs"].apply(partialParams));
    }
    invokeCreateChannel(partialParams) {
        this.boot();
        return this.client.createChannel(this.ops["CreateChannel"].apply(partialParams));
    }
    invokeCreateHarvestJob(partialParams) {
        this.boot();
        return this.client.createHarvestJob(this.ops["CreateHarvestJob"].apply(partialParams));
    }
    invokeCreateOriginEndpoint(partialParams) {
        this.boot();
        return this.client.createOriginEndpoint(this.ops["CreateOriginEndpoint"].apply(partialParams));
    }
    invokeDeleteChannel(partialParams) {
        this.boot();
        return this.client.deleteChannel(this.ops["DeleteChannel"].apply(partialParams));
    }
    invokeDeleteOriginEndpoint(partialParams) {
        this.boot();
        return this.client.deleteOriginEndpoint(this.ops["DeleteOriginEndpoint"].apply(partialParams));
    }
    invokeDescribeChannel(partialParams) {
        this.boot();
        return this.client.describeChannel(this.ops["DescribeChannel"].apply(partialParams));
    }
    invokeDescribeHarvestJob(partialParams) {
        this.boot();
        return this.client.describeHarvestJob(this.ops["DescribeHarvestJob"].apply(partialParams));
    }
    invokeDescribeOriginEndpoint(partialParams) {
        this.boot();
        return this.client.describeOriginEndpoint(this.ops["DescribeOriginEndpoint"].apply(partialParams));
    }
    invokeListChannels(partialParams) {
        this.boot();
        return this.client.listChannels(this.ops["ListChannels"].apply(partialParams));
    }
    invokeListHarvestJobs(partialParams) {
        this.boot();
        return this.client.listHarvestJobs(this.ops["ListHarvestJobs"].apply(partialParams));
    }
    invokeListOriginEndpoints(partialParams) {
        this.boot();
        return this.client.listOriginEndpoints(this.ops["ListOriginEndpoints"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeRotateChannelCredentials(partialParams) {
        this.boot();
        return this.client.rotateChannelCredentials(this.ops["RotateChannelCredentials"].apply(partialParams));
    }
    invokeRotateIngestEndpointCredentials(partialParams) {
        this.boot();
        return this.client.rotateIngestEndpointCredentials(this.ops["RotateIngestEndpointCredentials"].apply(partialParams));
    }
    invokeUpdateChannel(partialParams) {
        this.boot();
        return this.client.updateChannel(this.ops["UpdateChannel"].apply(partialParams));
    }
    invokeUpdateOriginEndpoint(partialParams) {
        this.boot();
        return this.client.updateOriginEndpoint(this.ops["UpdateOriginEndpoint"].apply(partialParams));
    }
}
exports.default = default_1;
