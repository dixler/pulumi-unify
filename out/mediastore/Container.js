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
const schema = require("../apis/mediastore-2017-09-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.mediastore.Container {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.MediaStore();
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
    invokeCreateContainer(partialParams) {
        this.boot();
        return this.client.createContainer(this.ops["CreateContainer"].apply(partialParams));
    }
    invokeDeleteContainer(partialParams) {
        this.boot();
        return this.client.deleteContainer(this.ops["DeleteContainer"].apply(partialParams));
    }
    invokeDeleteContainerPolicy(partialParams) {
        this.boot();
        return this.client.deleteContainerPolicy(this.ops["DeleteContainerPolicy"].apply(partialParams));
    }
    invokeDeleteCorsPolicy(partialParams) {
        this.boot();
        return this.client.deleteCorsPolicy(this.ops["DeleteCorsPolicy"].apply(partialParams));
    }
    invokeDeleteLifecyclePolicy(partialParams) {
        this.boot();
        return this.client.deleteLifecyclePolicy(this.ops["DeleteLifecyclePolicy"].apply(partialParams));
    }
    invokeDeleteMetricPolicy(partialParams) {
        this.boot();
        return this.client.deleteMetricPolicy(this.ops["DeleteMetricPolicy"].apply(partialParams));
    }
    invokeDescribeContainer(partialParams) {
        this.boot();
        return this.client.describeContainer(this.ops["DescribeContainer"].apply(partialParams));
    }
    invokeGetContainerPolicy(partialParams) {
        this.boot();
        return this.client.getContainerPolicy(this.ops["GetContainerPolicy"].apply(partialParams));
    }
    invokeGetCorsPolicy(partialParams) {
        this.boot();
        return this.client.getCorsPolicy(this.ops["GetCorsPolicy"].apply(partialParams));
    }
    invokeGetLifecyclePolicy(partialParams) {
        this.boot();
        return this.client.getLifecyclePolicy(this.ops["GetLifecyclePolicy"].apply(partialParams));
    }
    invokeGetMetricPolicy(partialParams) {
        this.boot();
        return this.client.getMetricPolicy(this.ops["GetMetricPolicy"].apply(partialParams));
    }
    invokeListContainers(partialParams) {
        this.boot();
        return this.client.listContainers(this.ops["ListContainers"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokePutContainerPolicy(partialParams) {
        this.boot();
        return this.client.putContainerPolicy(this.ops["PutContainerPolicy"].apply(partialParams));
    }
    invokePutCorsPolicy(partialParams) {
        this.boot();
        return this.client.putCorsPolicy(this.ops["PutCorsPolicy"].apply(partialParams));
    }
    invokePutLifecyclePolicy(partialParams) {
        this.boot();
        return this.client.putLifecyclePolicy(this.ops["PutLifecyclePolicy"].apply(partialParams));
    }
    invokePutMetricPolicy(partialParams) {
        this.boot();
        return this.client.putMetricPolicy(this.ops["PutMetricPolicy"].apply(partialParams));
    }
    invokeStartAccessLogging(partialParams) {
        this.boot();
        return this.client.startAccessLogging(this.ops["StartAccessLogging"].apply(partialParams));
    }
    invokeStopAccessLogging(partialParams) {
        this.boot();
        return this.client.stopAccessLogging(this.ops["StopAccessLogging"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
}
exports.default = default_1;
