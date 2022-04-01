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
const schema = require("../apis/dax-2017-04-19.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.dax.ParameterGroup {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DAX();
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
    invokeCreateCluster(partialParams) {
        this.boot();
        return this.client.createCluster(this.ops["CreateCluster"].apply(partialParams));
    }
    invokeCreateParameterGroup(partialParams) {
        this.boot();
        return this.client.createParameterGroup(this.ops["CreateParameterGroup"].apply(partialParams));
    }
    invokeCreateSubnetGroup(partialParams) {
        this.boot();
        return this.client.createSubnetGroup(this.ops["CreateSubnetGroup"].apply(partialParams));
    }
    invokeDecreaseReplicationFactor(partialParams) {
        this.boot();
        return this.client.decreaseReplicationFactor(this.ops["DecreaseReplicationFactor"].apply(partialParams));
    }
    invokeDeleteCluster(partialParams) {
        this.boot();
        return this.client.deleteCluster(this.ops["DeleteCluster"].apply(partialParams));
    }
    invokeDeleteParameterGroup(partialParams) {
        this.boot();
        return this.client.deleteParameterGroup(this.ops["DeleteParameterGroup"].apply(partialParams));
    }
    invokeDeleteSubnetGroup(partialParams) {
        this.boot();
        return this.client.deleteSubnetGroup(this.ops["DeleteSubnetGroup"].apply(partialParams));
    }
    invokeDescribeClusters(partialParams) {
        this.boot();
        return this.client.describeClusters(this.ops["DescribeClusters"].apply(partialParams));
    }
    invokeDescribeDefaultParameters(partialParams) {
        this.boot();
        return this.client.describeDefaultParameters(this.ops["DescribeDefaultParameters"].apply(partialParams));
    }
    invokeDescribeEvents(partialParams) {
        this.boot();
        return this.client.describeEvents(this.ops["DescribeEvents"].apply(partialParams));
    }
    invokeDescribeParameterGroups(partialParams) {
        this.boot();
        return this.client.describeParameterGroups(this.ops["DescribeParameterGroups"].apply(partialParams));
    }
    invokeDescribeParameters(partialParams) {
        this.boot();
        return this.client.describeParameters(this.ops["DescribeParameters"].apply(partialParams));
    }
    invokeDescribeSubnetGroups(partialParams) {
        this.boot();
        return this.client.describeSubnetGroups(this.ops["DescribeSubnetGroups"].apply(partialParams));
    }
    invokeIncreaseReplicationFactor(partialParams) {
        this.boot();
        return this.client.increaseReplicationFactor(this.ops["IncreaseReplicationFactor"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        this.boot();
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeRebootNode(partialParams) {
        this.boot();
        return this.client.rebootNode(this.ops["RebootNode"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateCluster(partialParams) {
        this.boot();
        return this.client.updateCluster(this.ops["UpdateCluster"].apply(partialParams));
    }
    invokeUpdateParameterGroup(partialParams) {
        this.boot();
        return this.client.updateParameterGroup(this.ops["UpdateParameterGroup"].apply(partialParams));
    }
    invokeUpdateSubnetGroup(partialParams) {
        this.boot();
        return this.client.updateSubnetGroup(this.ops["UpdateSubnetGroup"].apply(partialParams));
    }
}
exports.default = default_1;
