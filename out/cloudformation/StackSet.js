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
class default_1 extends aws.cloudformation.StackSet {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CloudFormation();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]) => {
            try {
                this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value.value;
                return;
            }
            catch (e) {
            }
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
        });
        this.ops = (0, parse_1.getResourceOperations)(this.capitalizedParams, schema, this.client);
    }
    invokeBatchDescribeTypeConfigurations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDescribeTypeConfigurations(this.ops["BatchDescribeTypeConfigurations"].applicator.apply(partialParams));
    }
    invokeCancelUpdateStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelUpdateStack(this.ops["CancelUpdateStack"].applicator.apply(partialParams));
    }
    invokeContinueUpdateRollback(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.continueUpdateRollback(this.ops["ContinueUpdateRollback"].applicator.apply(partialParams));
    }
    invokeCreateChangeSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createChangeSet(this.ops["CreateChangeSet"].applicator.apply(partialParams));
    }
    invokeCreateStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStack(this.ops["CreateStack"].applicator.apply(partialParams));
    }
    invokeCreateStackInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStackInstances(this.ops["CreateStackInstances"].applicator.apply(partialParams));
    }
    invokeCreateStackSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createStackSet(this.ops["CreateStackSet"].applicator.apply(partialParams));
    }
    invokeDeleteChangeSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteChangeSet(this.ops["DeleteChangeSet"].applicator.apply(partialParams));
    }
    invokeDeleteStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStack(this.ops["DeleteStack"].applicator.apply(partialParams));
    }
    invokeDeleteStackInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStackInstances(this.ops["DeleteStackInstances"].applicator.apply(partialParams));
    }
    invokeDeleteStackSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteStackSet(this.ops["DeleteStackSet"].applicator.apply(partialParams));
    }
    invokeDescribeChangeSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChangeSet(this.ops["DescribeChangeSet"].applicator.apply(partialParams));
    }
    invokeDescribeChangeSetHooks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeChangeSetHooks(this.ops["DescribeChangeSetHooks"].applicator.apply(partialParams));
    }
    invokeDescribeStackDriftDetectionStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackDriftDetectionStatus(this.ops["DescribeStackDriftDetectionStatus"].applicator.apply(partialParams));
    }
    invokeDescribeStackInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackInstance(this.ops["DescribeStackInstance"].applicator.apply(partialParams));
    }
    invokeDescribeStackResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackResource(this.ops["DescribeStackResource"].applicator.apply(partialParams));
    }
    invokeDescribeStackResourceDrifts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackResourceDrifts(this.ops["DescribeStackResourceDrifts"].applicator.apply(partialParams));
    }
    invokeDescribeStackSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackSet(this.ops["DescribeStackSet"].applicator.apply(partialParams));
    }
    invokeDescribeStackSetOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeStackSetOperation(this.ops["DescribeStackSetOperation"].applicator.apply(partialParams));
    }
    invokeDescribeTypeRegistration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTypeRegistration(this.ops["DescribeTypeRegistration"].applicator.apply(partialParams));
    }
    invokeDetectStackDrift(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detectStackDrift(this.ops["DetectStackDrift"].applicator.apply(partialParams));
    }
    invokeDetectStackResourceDrift(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detectStackResourceDrift(this.ops["DetectStackResourceDrift"].applicator.apply(partialParams));
    }
    invokeDetectStackSetDrift(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.detectStackSetDrift(this.ops["DetectStackSetDrift"].applicator.apply(partialParams));
    }
    invokeExecuteChangeSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.executeChangeSet(this.ops["ExecuteChangeSet"].applicator.apply(partialParams));
    }
    invokeGetStackPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getStackPolicy(this.ops["GetStackPolicy"].applicator.apply(partialParams));
    }
    invokeImportStacksToStackSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.importStacksToStackSet(this.ops["ImportStacksToStackSet"].applicator.apply(partialParams));
    }
    invokeListChangeSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listChangeSets(this.ops["ListChangeSets"].applicator.apply(partialParams));
    }
    invokeListImports(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listImports(this.ops["ListImports"].applicator.apply(partialParams));
    }
    invokeListStackInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackInstances(this.ops["ListStackInstances"].applicator.apply(partialParams));
    }
    invokeListStackResources(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackResources(this.ops["ListStackResources"].applicator.apply(partialParams));
    }
    invokeListStackSetOperationResults(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackSetOperationResults(this.ops["ListStackSetOperationResults"].applicator.apply(partialParams));
    }
    invokeListStackSetOperations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listStackSetOperations(this.ops["ListStackSetOperations"].applicator.apply(partialParams));
    }
    invokeRecordHandlerProgress(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.recordHandlerProgress(this.ops["RecordHandlerProgress"].applicator.apply(partialParams));
    }
    invokeRegisterType(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerType(this.ops["RegisterType"].applicator.apply(partialParams));
    }
    invokeRollbackStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.rollbackStack(this.ops["RollbackStack"].applicator.apply(partialParams));
    }
    invokeSetStackPolicy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setStackPolicy(this.ops["SetStackPolicy"].applicator.apply(partialParams));
    }
    invokeSetTypeConfiguration(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.setTypeConfiguration(this.ops["SetTypeConfiguration"].applicator.apply(partialParams));
    }
    invokeSignalResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.signalResource(this.ops["SignalResource"].applicator.apply(partialParams));
    }
    invokeStopStackSetOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopStackSetOperation(this.ops["StopStackSetOperation"].applicator.apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStack(this.ops["UpdateStack"].applicator.apply(partialParams));
    }
    invokeUpdateStackInstances(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStackInstances(this.ops["UpdateStackInstances"].applicator.apply(partialParams));
    }
    invokeUpdateStackSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateStackSet(this.ops["UpdateStackSet"].applicator.apply(partialParams));
    }
    invokeUpdateTerminationProtection(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTerminationProtection(this.ops["UpdateTerminationProtection"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
