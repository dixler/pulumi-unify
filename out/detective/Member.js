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
const schema = require("../apis/detective-2018-10-26.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.detective.Member {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Detective();
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
    invokeCreateGraph(partialParams) {
        this.boot();
        return this.client.createGraph(this.ops["CreateGraph"].apply(partialParams));
    }
    invokeCreateMembers(partialParams) {
        this.boot();
        return this.client.createMembers(this.ops["CreateMembers"].apply(partialParams));
    }
    invokeDeleteMembers(partialParams) {
        this.boot();
        return this.client.deleteMembers(this.ops["DeleteMembers"].apply(partialParams));
    }
    invokeDescribeOrganizationConfiguration(partialParams) {
        this.boot();
        return this.client.describeOrganizationConfiguration(this.ops["DescribeOrganizationConfiguration"].apply(partialParams));
    }
    invokeGetMembers(partialParams) {
        this.boot();
        return this.client.getMembers(this.ops["GetMembers"].apply(partialParams));
    }
    invokeListGraphs(partialParams) {
        this.boot();
        return this.client.listGraphs(this.ops["ListGraphs"].apply(partialParams));
    }
    invokeListInvitations(partialParams) {
        this.boot();
        return this.client.listInvitations(this.ops["ListInvitations"].apply(partialParams));
    }
    invokeListMembers(partialParams) {
        this.boot();
        return this.client.listMembers(this.ops["ListMembers"].apply(partialParams));
    }
    invokeListOrganizationAdminAccounts(partialParams) {
        this.boot();
        return this.client.listOrganizationAdminAccounts(this.ops["ListOrganizationAdminAccounts"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
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
