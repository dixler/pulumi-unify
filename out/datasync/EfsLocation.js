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
class default_1 extends aws.datasync.EfsLocation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.DataSync();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/datasync-2018-11-09.normal.json"), this.client);
    }
    invokeCancelTaskExecution(partialParams) {
        return this.client.cancelTaskExecution(this.ops["CancelTaskExecution"].apply(partialParams));
    }
    invokeCreateAgent(partialParams) {
        return this.client.createAgent(this.ops["CreateAgent"].apply(partialParams));
    }
    invokeCreateLocationEfs(partialParams) {
        return this.client.createLocationEfs(this.ops["CreateLocationEfs"].apply(partialParams));
    }
    invokeCreateLocationFsxLustre(partialParams) {
        return this.client.createLocationFsxLustre(this.ops["CreateLocationFsxLustre"].apply(partialParams));
    }
    invokeCreateLocationFsxWindows(partialParams) {
        return this.client.createLocationFsxWindows(this.ops["CreateLocationFsxWindows"].apply(partialParams));
    }
    invokeCreateLocationHdfs(partialParams) {
        return this.client.createLocationHdfs(this.ops["CreateLocationHdfs"].apply(partialParams));
    }
    invokeCreateLocationNfs(partialParams) {
        return this.client.createLocationNfs(this.ops["CreateLocationNfs"].apply(partialParams));
    }
    invokeCreateLocationObjectStorage(partialParams) {
        return this.client.createLocationObjectStorage(this.ops["CreateLocationObjectStorage"].apply(partialParams));
    }
    invokeCreateLocationS3(partialParams) {
        return this.client.createLocationS3(this.ops["CreateLocationS3"].apply(partialParams));
    }
    invokeCreateLocationSmb(partialParams) {
        return this.client.createLocationSmb(this.ops["CreateLocationSmb"].apply(partialParams));
    }
    invokeCreateTask(partialParams) {
        return this.client.createTask(this.ops["CreateTask"].apply(partialParams));
    }
    invokeDeleteAgent(partialParams) {
        return this.client.deleteAgent(this.ops["DeleteAgent"].apply(partialParams));
    }
    invokeDeleteLocation(partialParams) {
        return this.client.deleteLocation(this.ops["DeleteLocation"].apply(partialParams));
    }
    invokeDeleteTask(partialParams) {
        return this.client.deleteTask(this.ops["DeleteTask"].apply(partialParams));
    }
    invokeDescribeAgent(partialParams) {
        return this.client.describeAgent(this.ops["DescribeAgent"].apply(partialParams));
    }
    invokeDescribeLocationEfs(partialParams) {
        return this.client.describeLocationEfs(this.ops["DescribeLocationEfs"].apply(partialParams));
    }
    invokeDescribeLocationFsxLustre(partialParams) {
        return this.client.describeLocationFsxLustre(this.ops["DescribeLocationFsxLustre"].apply(partialParams));
    }
    invokeDescribeLocationFsxWindows(partialParams) {
        return this.client.describeLocationFsxWindows(this.ops["DescribeLocationFsxWindows"].apply(partialParams));
    }
    invokeDescribeLocationHdfs(partialParams) {
        return this.client.describeLocationHdfs(this.ops["DescribeLocationHdfs"].apply(partialParams));
    }
    invokeDescribeLocationNfs(partialParams) {
        return this.client.describeLocationNfs(this.ops["DescribeLocationNfs"].apply(partialParams));
    }
    invokeDescribeLocationObjectStorage(partialParams) {
        return this.client.describeLocationObjectStorage(this.ops["DescribeLocationObjectStorage"].apply(partialParams));
    }
    invokeDescribeLocationS3(partialParams) {
        return this.client.describeLocationS3(this.ops["DescribeLocationS3"].apply(partialParams));
    }
    invokeDescribeLocationSmb(partialParams) {
        return this.client.describeLocationSmb(this.ops["DescribeLocationSmb"].apply(partialParams));
    }
    invokeDescribeTask(partialParams) {
        return this.client.describeTask(this.ops["DescribeTask"].apply(partialParams));
    }
    invokeDescribeTaskExecution(partialParams) {
        return this.client.describeTaskExecution(this.ops["DescribeTaskExecution"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeStartTaskExecution(partialParams) {
        return this.client.startTaskExecution(this.ops["StartTaskExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAgent(partialParams) {
        return this.client.updateAgent(this.ops["UpdateAgent"].apply(partialParams));
    }
    invokeUpdateLocationHdfs(partialParams) {
        return this.client.updateLocationHdfs(this.ops["UpdateLocationHdfs"].apply(partialParams));
    }
    invokeUpdateLocationNfs(partialParams) {
        return this.client.updateLocationNfs(this.ops["UpdateLocationNfs"].apply(partialParams));
    }
    invokeUpdateLocationObjectStorage(partialParams) {
        return this.client.updateLocationObjectStorage(this.ops["UpdateLocationObjectStorage"].apply(partialParams));
    }
    invokeUpdateLocationSmb(partialParams) {
        return this.client.updateLocationSmb(this.ops["UpdateLocationSmb"].apply(partialParams));
    }
    invokeUpdateTask(partialParams) {
        return this.client.updateTask(this.ops["UpdateTask"].apply(partialParams));
    }
    invokeUpdateTaskExecution(partialParams) {
        return this.client.updateTaskExecution(this.ops["UpdateTaskExecution"].apply(partialParams));
    }
}
exports.default = default_1;
