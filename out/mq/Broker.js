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
class default_1 extends aws.mq.Broker {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.MQ();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/mq-2017-11-27.normal.json"), this.client);
    }
    invokeCreateBroker(partialParams) {
        return this.client.createBroker(this.ops["CreateBroker"].apply(partialParams));
    }
    invokeCreateConfiguration(partialParams) {
        return this.client.createConfiguration(this.ops["CreateConfiguration"].apply(partialParams));
    }
    invokeCreateTags(partialParams) {
        return this.client.createTags(this.ops["CreateTags"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeDeleteBroker(partialParams) {
        return this.client.deleteBroker(this.ops["DeleteBroker"].apply(partialParams));
    }
    invokeDeleteTags(partialParams) {
        return this.client.deleteTags(this.ops["DeleteTags"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDescribeBroker(partialParams) {
        return this.client.describeBroker(this.ops["DescribeBroker"].apply(partialParams));
    }
    invokeDescribeConfiguration(partialParams) {
        return this.client.describeConfiguration(this.ops["DescribeConfiguration"].apply(partialParams));
    }
    invokeDescribeConfigurationRevision(partialParams) {
        return this.client.describeConfigurationRevision(this.ops["DescribeConfigurationRevision"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeListConfigurationRevisions(partialParams) {
        return this.client.listConfigurationRevisions(this.ops["ListConfigurationRevisions"].apply(partialParams));
    }
    invokeListTags(partialParams) {
        return this.client.listTags(this.ops["ListTags"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeRebootBroker(partialParams) {
        return this.client.rebootBroker(this.ops["RebootBroker"].apply(partialParams));
    }
    invokeUpdateBroker(partialParams) {
        return this.client.updateBroker(this.ops["UpdateBroker"].apply(partialParams));
    }
    invokeUpdateConfiguration(partialParams) {
        return this.client.updateConfiguration(this.ops["UpdateConfiguration"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
