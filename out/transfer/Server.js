"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
const parse_1 = require("../parse");
class default_1 extends aws.transfer.Server {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Transfer();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/transfer-2018-11-05.normal.json"), this.client);
    }
    invokeCreateAccess(partialParams) {
        return this.client.createAccess(this.ops["CreateAccess"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateWorkflow(partialParams) {
        return this.client.createWorkflow(this.ops["CreateWorkflow"].apply(partialParams));
    }
    invokeDeleteAccess(partialParams) {
        return this.client.deleteAccess(this.ops["DeleteAccess"].apply(partialParams));
    }
    invokeDeleteServer(partialParams) {
        return this.client.deleteServer(this.ops["DeleteServer"].apply(partialParams));
    }
    invokeDeleteSshPublicKey(partialParams) {
        return this.client.deleteSshPublicKey(this.ops["DeleteSshPublicKey"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteWorkflow(partialParams) {
        return this.client.deleteWorkflow(this.ops["DeleteWorkflow"].apply(partialParams));
    }
    invokeDescribeAccess(partialParams) {
        return this.client.describeAccess(this.ops["DescribeAccess"].apply(partialParams));
    }
    invokeDescribeExecution(partialParams) {
        return this.client.describeExecution(this.ops["DescribeExecution"].apply(partialParams));
    }
    invokeDescribeSecurityPolicy(partialParams) {
        return this.client.describeSecurityPolicy(this.ops["DescribeSecurityPolicy"].apply(partialParams));
    }
    invokeDescribeServer(partialParams) {
        return this.client.describeServer(this.ops["DescribeServer"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeDescribeWorkflow(partialParams) {
        return this.client.describeWorkflow(this.ops["DescribeWorkflow"].apply(partialParams));
    }
    invokeImportSshPublicKey(partialParams) {
        return this.client.importSshPublicKey(this.ops["ImportSshPublicKey"].apply(partialParams));
    }
    invokeListAccesses(partialParams) {
        return this.client.listAccesses(this.ops["ListAccesses"].apply(partialParams));
    }
    invokeListExecutions(partialParams) {
        return this.client.listExecutions(this.ops["ListExecutions"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeSendWorkflowStepState(partialParams) {
        return this.client.sendWorkflowStepState(this.ops["SendWorkflowStepState"].apply(partialParams));
    }
    invokeStartServer(partialParams) {
        return this.client.startServer(this.ops["StartServer"].apply(partialParams));
    }
    invokeStopServer(partialParams) {
        return this.client.stopServer(this.ops["StopServer"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestIdentityProvider(partialParams) {
        return this.client.testIdentityProvider(this.ops["TestIdentityProvider"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccess(partialParams) {
        return this.client.updateAccess(this.ops["UpdateAccess"].apply(partialParams));
    }
    invokeUpdateServer(partialParams) {
        return this.client.updateServer(this.ops["UpdateServer"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
