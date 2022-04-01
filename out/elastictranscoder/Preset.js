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
const schema = require("../apis/elastictranscoder-2012-09-25.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.elastictranscoder.Preset {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.ElasticTranscoder();
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
    invokeCancelJob(partialParams) {
        this.boot();
        return this.client.cancelJob(this.ops["CancelJob"].apply(partialParams));
    }
    invokeCreateJob(partialParams) {
        this.boot();
        return this.client.createJob(this.ops["CreateJob"].apply(partialParams));
    }
    invokeCreatePipeline(partialParams) {
        this.boot();
        return this.client.createPipeline(this.ops["CreatePipeline"].apply(partialParams));
    }
    invokeCreatePreset(partialParams) {
        this.boot();
        return this.client.createPreset(this.ops["CreatePreset"].apply(partialParams));
    }
    invokeDeletePipeline(partialParams) {
        this.boot();
        return this.client.deletePipeline(this.ops["DeletePipeline"].apply(partialParams));
    }
    invokeDeletePreset(partialParams) {
        this.boot();
        return this.client.deletePreset(this.ops["DeletePreset"].apply(partialParams));
    }
    invokeListJobsByPipeline(partialParams) {
        this.boot();
        return this.client.listJobsByPipeline(this.ops["ListJobsByPipeline"].apply(partialParams));
    }
    invokeListJobsByStatus(partialParams) {
        this.boot();
        return this.client.listJobsByStatus(this.ops["ListJobsByStatus"].apply(partialParams));
    }
    invokeListPipelines(partialParams) {
        this.boot();
        return this.client.listPipelines(this.ops["ListPipelines"].apply(partialParams));
    }
    invokeListPresets(partialParams) {
        this.boot();
        return this.client.listPresets(this.ops["ListPresets"].apply(partialParams));
    }
    invokeReadJob(partialParams) {
        this.boot();
        return this.client.readJob(this.ops["ReadJob"].apply(partialParams));
    }
    invokeReadPipeline(partialParams) {
        this.boot();
        return this.client.readPipeline(this.ops["ReadPipeline"].apply(partialParams));
    }
    invokeReadPreset(partialParams) {
        this.boot();
        return this.client.readPreset(this.ops["ReadPreset"].apply(partialParams));
    }
    invokeTestRole(partialParams) {
        this.boot();
        return this.client.testRole(this.ops["TestRole"].apply(partialParams));
    }
    invokeUpdatePipeline(partialParams) {
        this.boot();
        return this.client.updatePipeline(this.ops["UpdatePipeline"].apply(partialParams));
    }
    invokeUpdatePipelineNotifications(partialParams) {
        this.boot();
        return this.client.updatePipelineNotifications(this.ops["UpdatePipelineNotifications"].apply(partialParams));
    }
    invokeUpdatePipelineStatus(partialParams) {
        this.boot();
        return this.client.updatePipelineStatus(this.ops["UpdatePipelineStatus"].apply(partialParams));
    }
}
exports.default = default_1;
