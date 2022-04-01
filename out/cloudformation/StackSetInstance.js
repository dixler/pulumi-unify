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
const schema = require("../apis/cloudformation-2010-05-15.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.cloudformation.StackSetInstance {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CloudFormation();
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
    invokeCreateStackInstances(partialParams) {
        this.boot();
        return this.client.createStackInstances(this.ops["CreateStackInstances"].apply(partialParams));
    }
    invokeCreateStackSet(partialParams) {
        this.boot();
        return this.client.createStackSet(this.ops["CreateStackSet"].apply(partialParams));
    }
    invokeDeleteStackInstances(partialParams) {
        this.boot();
        return this.client.deleteStackInstances(this.ops["DeleteStackInstances"].apply(partialParams));
    }
    invokeDeleteStackSet(partialParams) {
        this.boot();
        return this.client.deleteStackSet(this.ops["DeleteStackSet"].apply(partialParams));
    }
    invokeDescribeStackInstance(partialParams) {
        this.boot();
        return this.client.describeStackInstance(this.ops["DescribeStackInstance"].apply(partialParams));
    }
    invokeDescribeStackSet(partialParams) {
        this.boot();
        return this.client.describeStackSet(this.ops["DescribeStackSet"].apply(partialParams));
    }
    invokeDescribeStackSetOperation(partialParams) {
        this.boot();
        return this.client.describeStackSetOperation(this.ops["DescribeStackSetOperation"].apply(partialParams));
    }
    invokeDetectStackSetDrift(partialParams) {
        this.boot();
        return this.client.detectStackSetDrift(this.ops["DetectStackSetDrift"].apply(partialParams));
    }
    invokeImportStacksToStackSet(partialParams) {
        this.boot();
        return this.client.importStacksToStackSet(this.ops["ImportStacksToStackSet"].apply(partialParams));
    }
    invokeListStackInstances(partialParams) {
        this.boot();
        return this.client.listStackInstances(this.ops["ListStackInstances"].apply(partialParams));
    }
    invokeListStackSetOperationResults(partialParams) {
        this.boot();
        return this.client.listStackSetOperationResults(this.ops["ListStackSetOperationResults"].apply(partialParams));
    }
    invokeListStackSetOperations(partialParams) {
        this.boot();
        return this.client.listStackSetOperations(this.ops["ListStackSetOperations"].apply(partialParams));
    }
    invokeStopStackSetOperation(partialParams) {
        this.boot();
        return this.client.stopStackSetOperation(this.ops["StopStackSetOperation"].apply(partialParams));
    }
    invokeUpdateStackInstances(partialParams) {
        this.boot();
        return this.client.updateStackInstances(this.ops["UpdateStackInstances"].apply(partialParams));
    }
    invokeUpdateStackSet(partialParams) {
        this.boot();
        return this.client.updateStackSet(this.ops["UpdateStackSet"].apply(partialParams));
    }
}
exports.default = default_1;
