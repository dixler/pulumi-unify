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
class default_1 extends aws.cloudformation.Stack {
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
    invokeContinueUpdateRollback(partialParams) {
        this.boot();
        return this.client.continueUpdateRollback(this.ops["ContinueUpdateRollback"].apply(partialParams));
    }
    invokeCreateChangeSet(partialParams) {
        this.boot();
        return this.client.createChangeSet(this.ops["CreateChangeSet"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        this.boot();
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeDescribeStackResource(partialParams) {
        this.boot();
        return this.client.describeStackResource(this.ops["DescribeStackResource"].apply(partialParams));
    }
    invokeDescribeStackResourceDrifts(partialParams) {
        this.boot();
        return this.client.describeStackResourceDrifts(this.ops["DescribeStackResourceDrifts"].apply(partialParams));
    }
    invokeDetectStackDrift(partialParams) {
        this.boot();
        return this.client.detectStackDrift(this.ops["DetectStackDrift"].apply(partialParams));
    }
    invokeDetectStackResourceDrift(partialParams) {
        this.boot();
        return this.client.detectStackResourceDrift(this.ops["DetectStackResourceDrift"].apply(partialParams));
    }
    invokeGetStackPolicy(partialParams) {
        this.boot();
        return this.client.getStackPolicy(this.ops["GetStackPolicy"].apply(partialParams));
    }
    invokeListChangeSets(partialParams) {
        this.boot();
        return this.client.listChangeSets(this.ops["ListChangeSets"].apply(partialParams));
    }
    invokeListStackResources(partialParams) {
        this.boot();
        return this.client.listStackResources(this.ops["ListStackResources"].apply(partialParams));
    }
    invokeRollbackStack(partialParams) {
        this.boot();
        return this.client.rollbackStack(this.ops["RollbackStack"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        this.boot();
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
    invokeUpdateTerminationProtection(partialParams) {
        this.boot();
        return this.client.updateTerminationProtection(this.ops["UpdateTerminationProtection"].apply(partialParams));
    }
}
exports.default = default_1;
