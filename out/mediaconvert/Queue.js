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
const schema = require("../apis/mediaconvert-2017-08-29.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.mediaconvert.Queue {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.MediaConvert();
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
    invokeAssociateCertificate(partialParams) {
        this.boot();
        return this.client.associateCertificate(this.ops["AssociateCertificate"].apply(partialParams));
    }
    invokeCancelJob(partialParams) {
        this.boot();
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreateJobTemplate(partialParams) {
        this.boot();
        return this.client.createJobTemplate(this.ops["CreateJobTemplate"].apply(partialParams));
    }
    invokeCreatePreset(partialParams) {
        this.boot();
        return this.client.createPreset(this.ops["CreatePreset"].apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        this.boot();
        return this.client.createQueue(this.ops["CreateQueue"].apply(partialParams));
    }
    invokeDeleteJobTemplate(partialParams) {
        this.boot();
        return this.client.deleteJobTemplate(this.ops["DeleteJobTemplate"].apply(partialParams));
    }
    invokeDeletePolicy(partialParams) {
        this.boot();
        return this.client.deletePolicy(this.ops["DeletePolicy"].apply(partialParams));
    }
    invokeDeletePreset(partialParams) {
        this.boot();
        return this.client.deletePreset(this.ops["DeletePreset"].apply(partialParams));
    }
    invokeDeleteQueue(partialParams) {
        this.boot();
        return this.client.deleteQueue(this.ops["DeleteQueue"].apply(partialParams));
    }
    invokeDescribeEndpoints(partialParams) {
        this.boot();
        return this.client.describeEndpoints(this.ops["DescribeEndpoints"].apply(partialParams));
    }
    invokeDisassociateCertificate(partialParams) {
        this.boot();
        return this.client.disassociateCertificate(this.ops["DisassociateCertificate"].apply(partialParams));
    }
    invokeGetJob(partialParams) {
        this.boot();
        return this.client.getJob(this.ops["GetJob"].apply(partialParams));
    }
    invokeGetJobTemplate(partialParams) {
        this.boot();
        return this.client.getJobTemplate(this.ops["GetJobTemplate"].apply(partialParams));
    }
    invokeGetPolicy(partialParams) {
        this.boot();
        return this.client.getPolicy(this.ops["GetPolicy"].apply(partialParams));
    }
    invokeGetPreset(partialParams) {
        this.boot();
        return this.client.getPreset(this.ops["GetPreset"].apply(partialParams));
    }
    invokeGetQueue(partialParams) {
        this.boot();
        return this.client.getQueue(this.ops["GetQueue"].apply(partialParams));
    }
    invokeListJobTemplates(partialParams) {
        this.boot();
        return this.client.listJobTemplates(this.ops["ListJobTemplates"].apply(partialParams));
    }
    invokeListJobs(partialParams) {
        this.boot();
        return this.client.listJobs(this.ops["ListJobs"].apply(partialParams));
    }
    invokeListPresets(partialParams) {
        this.boot();
        return this.client.listPresets(this.ops["ListPresets"].apply(partialParams));
    }
    invokeListQueues(partialParams) {
        this.boot();
        return this.client.listQueues(this.ops["ListQueues"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutPolicy(partialParams) {
        this.boot();
        return this.client.putPolicy(this.ops["PutPolicy"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateJobTemplate(partialParams) {
        this.boot();
        return this.client.updateJobTemplate(this.ops["UpdateJobTemplate"].apply(partialParams));
    }
    invokeUpdatePreset(partialParams) {
        this.boot();
        return this.client.updatePreset(this.ops["UpdatePreset"].apply(partialParams));
    }
    invokeUpdateQueue(partialParams) {
        this.boot();
        return this.client.updateQueue(this.ops["UpdateQueue"].apply(partialParams));
    }
}
exports.default = default_1;
