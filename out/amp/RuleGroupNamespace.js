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
const schema = require("../apis/amp-2020-08-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.amp.RuleGroupNamespace {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Amp();
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
    invokeCreateAlertManagerDefinition(partialParams) {
        this.boot();
        return this.client.createAlertManagerDefinition(this.ops["CreateAlertManagerDefinition"].apply(partialParams));
    }
    invokeCreateRuleGroupsNamespace(partialParams) {
        this.boot();
        return this.client.createRuleGroupsNamespace(this.ops["CreateRuleGroupsNamespace"].apply(partialParams));
    }
    invokeCreateWorkspace(partialParams) {
        this.boot();
        return this.client.createWorkspace(this.ops["CreateWorkspace"].apply(partialParams));
    }
    invokeDescribeAlertManagerDefinition(partialParams) {
        this.boot();
        return this.client.describeAlertManagerDefinition(this.ops["DescribeAlertManagerDefinition"].apply(partialParams));
    }
    invokeDescribeRuleGroupsNamespace(partialParams) {
        this.boot();
        return this.client.describeRuleGroupsNamespace(this.ops["DescribeRuleGroupsNamespace"].apply(partialParams));
    }
    invokeDescribeWorkspace(partialParams) {
        this.boot();
        return this.client.describeWorkspace(this.ops["DescribeWorkspace"].apply(partialParams));
    }
    invokeListRuleGroupsNamespaces(partialParams) {
        this.boot();
        return this.client.listRuleGroupsNamespaces(this.ops["ListRuleGroupsNamespaces"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListWorkspaces(partialParams) {
        this.boot();
        return this.client.listWorkspaces(this.ops["ListWorkspaces"].apply(partialParams));
    }
    invokePutAlertManagerDefinition(partialParams) {
        this.boot();
        return this.client.putAlertManagerDefinition(this.ops["PutAlertManagerDefinition"].apply(partialParams));
    }
    invokePutRuleGroupsNamespace(partialParams) {
        this.boot();
        return this.client.putRuleGroupsNamespace(this.ops["PutRuleGroupsNamespace"].apply(partialParams));
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
