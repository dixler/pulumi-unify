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
class default_1 extends aws.cloudformation.StackSet {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudFormation();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/cloudformation-2010-05-15.normal.json"), this.client);
    }
    invokeBatchDescribeTypeConfigurations(partialParams) {
        return this.client.batchDescribeTypeConfigurations(this.ops["BatchDescribeTypeConfigurations"].apply(partialParams));
    }
    invokeCancelUpdateStack(partialParams) {
        return this.client.cancelUpdateStack(this.ops["CancelUpdateStack"].apply(partialParams));
    }
    invokeContinueUpdateRollback(partialParams) {
        return this.client.continueUpdateRollback(this.ops["ContinueUpdateRollback"].apply(partialParams));
    }
    invokeCreateChangeSet(partialParams) {
        return this.client.createChangeSet(this.ops["CreateChangeSet"].apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        return this.client.createStack(this.ops["CreateStack"].apply(partialParams));
    }
    invokeCreateStackInstances(partialParams) {
        return this.client.createStackInstances(this.ops["CreateStackInstances"].apply(partialParams));
    }
    invokeCreateStackSet(partialParams) {
        return this.client.createStackSet(this.ops["CreateStackSet"].apply(partialParams));
    }
    invokeDeleteChangeSet(partialParams) {
        return this.client.deleteChangeSet(this.ops["DeleteChangeSet"].apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        return this.client.deleteStack(this.ops["DeleteStack"].apply(partialParams));
    }
    invokeDeleteStackInstances(partialParams) {
        return this.client.deleteStackInstances(this.ops["DeleteStackInstances"].apply(partialParams));
    }
    invokeDeleteStackSet(partialParams) {
        return this.client.deleteStackSet(this.ops["DeleteStackSet"].apply(partialParams));
    }
    invokeDescribeChangeSet(partialParams) {
        return this.client.describeChangeSet(this.ops["DescribeChangeSet"].apply(partialParams));
    }
    invokeDescribeChangeSetHooks(partialParams) {
        return this.client.describeChangeSetHooks(this.ops["DescribeChangeSetHooks"].apply(partialParams));
    }
    invokeDescribeStackDriftDetectionStatus(partialParams) {
        return this.client.describeStackDriftDetectionStatus(this.ops["DescribeStackDriftDetectionStatus"].apply(partialParams));
    }
    invokeDescribeStackInstance(partialParams) {
        return this.client.describeStackInstance(this.ops["DescribeStackInstance"].apply(partialParams));
    }
    invokeDescribeStackResource(partialParams) {
        return this.client.describeStackResource(this.ops["DescribeStackResource"].apply(partialParams));
    }
    invokeDescribeStackResourceDrifts(partialParams) {
        return this.client.describeStackResourceDrifts(this.ops["DescribeStackResourceDrifts"].apply(partialParams));
    }
    invokeDescribeStackSet(partialParams) {
        return this.client.describeStackSet(this.ops["DescribeStackSet"].apply(partialParams));
    }
    invokeDescribeStackSetOperation(partialParams) {
        return this.client.describeStackSetOperation(this.ops["DescribeStackSetOperation"].apply(partialParams));
    }
    invokeDescribeTypeRegistration(partialParams) {
        return this.client.describeTypeRegistration(this.ops["DescribeTypeRegistration"].apply(partialParams));
    }
    invokeDetectStackDrift(partialParams) {
        return this.client.detectStackDrift(this.ops["DetectStackDrift"].apply(partialParams));
    }
    invokeDetectStackResourceDrift(partialParams) {
        return this.client.detectStackResourceDrift(this.ops["DetectStackResourceDrift"].apply(partialParams));
    }
    invokeDetectStackSetDrift(partialParams) {
        return this.client.detectStackSetDrift(this.ops["DetectStackSetDrift"].apply(partialParams));
    }
    invokeExecuteChangeSet(partialParams) {
        return this.client.executeChangeSet(this.ops["ExecuteChangeSet"].apply(partialParams));
    }
    invokeGetStackPolicy(partialParams) {
        return this.client.getStackPolicy(this.ops["GetStackPolicy"].apply(partialParams));
    }
    invokeImportStacksToStackSet(partialParams) {
        return this.client.importStacksToStackSet(this.ops["ImportStacksToStackSet"].apply(partialParams));
    }
    invokeListChangeSets(partialParams) {
        return this.client.listChangeSets(this.ops["ListChangeSets"].apply(partialParams));
    }
    invokeListImports(partialParams) {
        return this.client.listImports(this.ops["ListImports"].apply(partialParams));
    }
    invokeListStackInstances(partialParams) {
        return this.client.listStackInstances(this.ops["ListStackInstances"].apply(partialParams));
    }
    invokeListStackResources(partialParams) {
        return this.client.listStackResources(this.ops["ListStackResources"].apply(partialParams));
    }
    invokeListStackSetOperationResults(partialParams) {
        return this.client.listStackSetOperationResults(this.ops["ListStackSetOperationResults"].apply(partialParams));
    }
    invokeListStackSetOperations(partialParams) {
        return this.client.listStackSetOperations(this.ops["ListStackSetOperations"].apply(partialParams));
    }
    invokeRecordHandlerProgress(partialParams) {
        return this.client.recordHandlerProgress(this.ops["RecordHandlerProgress"].apply(partialParams));
    }
    invokeRegisterType(partialParams) {
        return this.client.registerType(this.ops["RegisterType"].apply(partialParams));
    }
    invokeRollbackStack(partialParams) {
        return this.client.rollbackStack(this.ops["RollbackStack"].apply(partialParams));
    }
    invokeSetStackPolicy(partialParams) {
        return this.client.setStackPolicy(this.ops["SetStackPolicy"].apply(partialParams));
    }
    invokeSetTypeConfiguration(partialParams) {
        return this.client.setTypeConfiguration(this.ops["SetTypeConfiguration"].apply(partialParams));
    }
    invokeSignalResource(partialParams) {
        return this.client.signalResource(this.ops["SignalResource"].apply(partialParams));
    }
    invokeStopStackSetOperation(partialParams) {
        return this.client.stopStackSetOperation(this.ops["StopStackSetOperation"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
    invokeUpdateStackInstances(partialParams) {
        return this.client.updateStackInstances(this.ops["UpdateStackInstances"].apply(partialParams));
    }
    invokeUpdateStackSet(partialParams) {
        return this.client.updateStackSet(this.ops["UpdateStackSet"].apply(partialParams));
    }
    invokeUpdateTerminationProtection(partialParams) {
        return this.client.updateTerminationProtection(this.ops["UpdateTerminationProtection"].apply(partialParams));
    }
}
exports.default = default_1;
