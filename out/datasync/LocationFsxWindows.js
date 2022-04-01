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
const schema = require("../apis/datasync-2018-11-09.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.datasync.LocationFsxWindows {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.DataSync();
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
    invokeCancelTaskExecution(partialParams) {
        this.boot();
        return this.client.cancelTaskExecution(this.ops["CancelTaskExecution"].apply(partialParams));
    }
    invokeCreateAgent(partialParams) {
        this.boot();
        return this.client.createAgent(this.ops["CreateAgent"].apply(partialParams));
    }
    invokeCreateLocationEfs(partialParams) {
        this.boot();
        return this.client.createLocationEfs(this.ops["CreateLocationEfs"].apply(partialParams));
    }
    invokeCreateLocationFsxLustre(partialParams) {
        this.boot();
        return this.client.createLocationFsxLustre(this.ops["CreateLocationFsxLustre"].apply(partialParams));
    }
    invokeCreateLocationFsxWindows(partialParams) {
        this.boot();
        return this.client.createLocationFsxWindows(this.ops["CreateLocationFsxWindows"].apply(partialParams));
    }
    invokeCreateLocationHdfs(partialParams) {
        this.boot();
        return this.client.createLocationHdfs(this.ops["CreateLocationHdfs"].apply(partialParams));
    }
    invokeCreateLocationNfs(partialParams) {
        this.boot();
        return this.client.createLocationNfs(this.ops["CreateLocationNfs"].apply(partialParams));
    }
    invokeCreateLocationObjectStorage(partialParams) {
        this.boot();
        return this.client.createLocationObjectStorage(this.ops["CreateLocationObjectStorage"].apply(partialParams));
    }
    invokeCreateLocationS3(partialParams) {
        this.boot();
        return this.client.createLocationS3(this.ops["CreateLocationS3"].apply(partialParams));
    }
    invokeCreateLocationSmb(partialParams) {
        this.boot();
        return this.client.createLocationSmb(this.ops["CreateLocationSmb"].apply(partialParams));
    }
    invokeCreateTask(partialParams) {
        this.boot();
        return this.client.createTask(this.ops["CreateTask"].apply(partialParams));
    }
    invokeDeleteAgent(partialParams) {
        this.boot();
        return this.client.deleteAgent(this.ops["DeleteAgent"].apply(partialParams));
    }
    invokeDeleteLocation(partialParams) {
        this.boot();
        return this.client.deleteLocation(this.ops["DeleteLocation"].apply(partialParams));
    }
    invokeDeleteTask(partialParams) {
        this.boot();
        return this.client.deleteTask(this.ops["DeleteTask"].apply(partialParams));
    }
    invokeDescribeAgent(partialParams) {
        this.boot();
        return this.client.describeAgent(this.ops["DescribeAgent"].apply(partialParams));
    }
    invokeDescribeLocationEfs(partialParams) {
        this.boot();
        return this.client.describeLocationEfs(this.ops["DescribeLocationEfs"].apply(partialParams));
    }
    invokeDescribeLocationFsxLustre(partialParams) {
        this.boot();
        return this.client.describeLocationFsxLustre(this.ops["DescribeLocationFsxLustre"].apply(partialParams));
    }
    invokeDescribeLocationFsxWindows(partialParams) {
        this.boot();
        return this.client.describeLocationFsxWindows(this.ops["DescribeLocationFsxWindows"].apply(partialParams));
    }
    invokeDescribeLocationHdfs(partialParams) {
        this.boot();
        return this.client.describeLocationHdfs(this.ops["DescribeLocationHdfs"].apply(partialParams));
    }
    invokeDescribeLocationNfs(partialParams) {
        this.boot();
        return this.client.describeLocationNfs(this.ops["DescribeLocationNfs"].apply(partialParams));
    }
    invokeDescribeLocationObjectStorage(partialParams) {
        this.boot();
        return this.client.describeLocationObjectStorage(this.ops["DescribeLocationObjectStorage"].apply(partialParams));
    }
    invokeDescribeLocationS3(partialParams) {
        this.boot();
        return this.client.describeLocationS3(this.ops["DescribeLocationS3"].apply(partialParams));
    }
    invokeDescribeLocationSmb(partialParams) {
        this.boot();
        return this.client.describeLocationSmb(this.ops["DescribeLocationSmb"].apply(partialParams));
    }
    invokeDescribeTask(partialParams) {
        this.boot();
        return this.client.describeTask(this.ops["DescribeTask"].apply(partialParams));
    }
    invokeDescribeTaskExecution(partialParams) {
        this.boot();
        return this.client.describeTaskExecution(this.ops["DescribeTaskExecution"].apply(partialParams));
    }
    invokeListAgents(partialParams) {
        this.boot();
        return this.client.listAgents(this.ops["ListAgents"].apply(partialParams));
    }
    invokeListLocations(partialParams) {
        this.boot();
        return this.client.listLocations(this.ops["ListLocations"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTaskExecutions(partialParams) {
        this.boot();
        return this.client.listTaskExecutions(this.ops["ListTaskExecutions"].apply(partialParams));
    }
    invokeListTasks(partialParams) {
        this.boot();
        return this.client.listTasks(this.ops["ListTasks"].apply(partialParams));
    }
    invokeStartTaskExecution(partialParams) {
        this.boot();
        return this.client.startTaskExecution(this.ops["StartTaskExecution"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAgent(partialParams) {
        this.boot();
        return this.client.updateAgent(this.ops["UpdateAgent"].apply(partialParams));
    }
    invokeUpdateLocationHdfs(partialParams) {
        this.boot();
        return this.client.updateLocationHdfs(this.ops["UpdateLocationHdfs"].apply(partialParams));
    }
    invokeUpdateLocationNfs(partialParams) {
        this.boot();
        return this.client.updateLocationNfs(this.ops["UpdateLocationNfs"].apply(partialParams));
    }
    invokeUpdateLocationObjectStorage(partialParams) {
        this.boot();
        return this.client.updateLocationObjectStorage(this.ops["UpdateLocationObjectStorage"].apply(partialParams));
    }
    invokeUpdateLocationSmb(partialParams) {
        this.boot();
        return this.client.updateLocationSmb(this.ops["UpdateLocationSmb"].apply(partialParams));
    }
    invokeUpdateTask(partialParams) {
        this.boot();
        return this.client.updateTask(this.ops["UpdateTask"].apply(partialParams));
    }
    invokeUpdateTaskExecution(partialParams) {
        this.boot();
        return this.client.updateTaskExecution(this.ops["UpdateTaskExecution"].apply(partialParams));
    }
}
exports.default = default_1;
