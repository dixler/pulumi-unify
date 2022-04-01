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
class default_1 extends aws.cloudformation.StackSetInstance {
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
    invokeActivateType(partialParams) {
        this.boot();
        return this.client.activateType(this.ops["ActivateType"].apply(partialParams));
    }
    invokeBatchDescribeTypeConfigurations(partialParams) {
        this.boot();
        return this.client.batchDescribeTypeConfigurations(this.ops["BatchDescribeTypeConfigurations"].apply(partialParams));
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
    invokeCreateStackInstances(partialParams) {
        this.boot();
        return this.client.createStackInstances(this.ops["CreateStackInstances"].apply(partialParams));
    }
    invokeCreateStackSet(partialParams) {
        this.boot();
        return this.client.createStackSet(this.ops["CreateStackSet"].apply(partialParams));
    }
    invokeDeactivateType(partialParams) {
        this.boot();
        return this.client.deactivateType(this.ops["DeactivateType"].apply(partialParams));
    }
    invokeDeleteChangeSet(partialParams) {
        this.boot();
        return this.client.deleteChangeSet(this.ops["DeleteChangeSet"].apply(partialParams));
    }
    invokeDeleteStackInstances(partialParams) {
        this.boot();
        return this.client.deleteStackInstances(this.ops["DeleteStackInstances"].apply(partialParams));
    }
    invokeDeleteStackSet(partialParams) {
        this.boot();
        return this.client.deleteStackSet(this.ops["DeleteStackSet"].apply(partialParams));
    }
    invokeDeregisterType(partialParams) {
        this.boot();
        return this.client.deregisterType(this.ops["DeregisterType"].apply(partialParams));
    }
    invokeDescribeAccountLimits(partialParams) {
        this.boot();
        return this.client.describeAccountLimits(this.ops["DescribeAccountLimits"].apply(partialParams));
    }
    invokeDescribeChangeSet(partialParams) {
        this.boot();
        return this.client.describeChangeSet(this.ops["DescribeChangeSet"].apply(partialParams));
    }
    invokeDescribeChangeSetHooks(partialParams) {
        this.boot();
        return this.client.describeChangeSetHooks(this.ops["DescribeChangeSetHooks"].apply(partialParams));
    }
    invokeDescribePublisher(partialParams) {
        this.boot();
        return this.client.describePublisher(this.ops["DescribePublisher"].apply(partialParams));
    }
    invokeDescribeStackDriftDetectionStatus(partialParams) {
        this.boot();
        return this.client.describeStackDriftDetectionStatus(this.ops["DescribeStackDriftDetectionStatus"].apply(partialParams));
    }
    invokeDescribeStackEvents(partialParams) {
        this.boot();
        return this.client.describeStackEvents(this.ops["DescribeStackEvents"].apply(partialParams));
    }
    invokeDescribeStackInstance(partialParams) {
        this.boot();
        return this.client.describeStackInstance(this.ops["DescribeStackInstance"].apply(partialParams));
    }
    invokeDescribeStackResource(partialParams) {
        this.boot();
        return this.client.describeStackResource(this.ops["DescribeStackResource"].apply(partialParams));
    }
    invokeDescribeStackResourceDrifts(partialParams) {
        this.boot();
        return this.client.describeStackResourceDrifts(this.ops["DescribeStackResourceDrifts"].apply(partialParams));
    }
    invokeDescribeStackResources(partialParams) {
        this.boot();
        return this.client.describeStackResources(this.ops["DescribeStackResources"].apply(partialParams));
    }
    invokeDescribeStackSet(partialParams) {
        this.boot();
        return this.client.describeStackSet(this.ops["DescribeStackSet"].apply(partialParams));
    }
    invokeDescribeStackSetOperation(partialParams) {
        this.boot();
        return this.client.describeStackSetOperation(this.ops["DescribeStackSetOperation"].apply(partialParams));
    }
    invokeDescribeStacks(partialParams) {
        this.boot();
        return this.client.describeStacks(this.ops["DescribeStacks"].apply(partialParams));
    }
    invokeDescribeType(partialParams) {
        this.boot();
        return this.client.describeType(this.ops["DescribeType"].apply(partialParams));
    }
    invokeDescribeTypeRegistration(partialParams) {
        this.boot();
        return this.client.describeTypeRegistration(this.ops["DescribeTypeRegistration"].apply(partialParams));
    }
    invokeDetectStackDrift(partialParams) {
        this.boot();
        return this.client.detectStackDrift(this.ops["DetectStackDrift"].apply(partialParams));
    }
    invokeDetectStackResourceDrift(partialParams) {
        this.boot();
        return this.client.detectStackResourceDrift(this.ops["DetectStackResourceDrift"].apply(partialParams));
    }
    invokeDetectStackSetDrift(partialParams) {
        this.boot();
        return this.client.detectStackSetDrift(this.ops["DetectStackSetDrift"].apply(partialParams));
    }
    invokeEstimateTemplateCost(partialParams) {
        this.boot();
        return this.client.estimateTemplateCost(this.ops["EstimateTemplateCost"].apply(partialParams));
    }
    invokeExecuteChangeSet(partialParams) {
        this.boot();
        return this.client.executeChangeSet(this.ops["ExecuteChangeSet"].apply(partialParams));
    }
    invokeGetStackPolicy(partialParams) {
        this.boot();
        return this.client.getStackPolicy(this.ops["GetStackPolicy"].apply(partialParams));
    }
    invokeGetTemplate(partialParams) {
        this.boot();
        return this.client.getTemplate(this.ops["GetTemplate"].apply(partialParams));
    }
    invokeGetTemplateSummary(partialParams) {
        this.boot();
        return this.client.getTemplateSummary(this.ops["GetTemplateSummary"].apply(partialParams));
    }
    invokeImportStacksToStackSet(partialParams) {
        this.boot();
        return this.client.importStacksToStackSet(this.ops["ImportStacksToStackSet"].apply(partialParams));
    }
    invokeListChangeSets(partialParams) {
        this.boot();
        return this.client.listChangeSets(this.ops["ListChangeSets"].apply(partialParams));
    }
    invokeListExports(partialParams) {
        this.boot();
        return this.client.listExports(this.ops["ListExports"].apply(partialParams));
    }
    invokeListImports(partialParams) {
        this.boot();
        return this.client.listImports(this.ops["ListImports"].apply(partialParams));
    }
    invokeListStackInstances(partialParams) {
        this.boot();
        return this.client.listStackInstances(this.ops["ListStackInstances"].apply(partialParams));
    }
    invokeListStackResources(partialParams) {
        this.boot();
        return this.client.listStackResources(this.ops["ListStackResources"].apply(partialParams));
    }
    invokeListStackSetOperationResults(partialParams) {
        this.boot();
        return this.client.listStackSetOperationResults(this.ops["ListStackSetOperationResults"].apply(partialParams));
    }
    invokeListStackSetOperations(partialParams) {
        this.boot();
        return this.client.listStackSetOperations(this.ops["ListStackSetOperations"].apply(partialParams));
    }
    invokeListStackSets(partialParams) {
        this.boot();
        return this.client.listStackSets(this.ops["ListStackSets"].apply(partialParams));
    }
    invokeListStacks(partialParams) {
        this.boot();
        return this.client.listStacks(this.ops["ListStacks"].apply(partialParams));
    }
    invokeListTypeRegistrations(partialParams) {
        this.boot();
        return this.client.listTypeRegistrations(this.ops["ListTypeRegistrations"].apply(partialParams));
    }
    invokeListTypeVersions(partialParams) {
        this.boot();
        return this.client.listTypeVersions(this.ops["ListTypeVersions"].apply(partialParams));
    }
    invokeListTypes(partialParams) {
        this.boot();
        return this.client.listTypes(this.ops["ListTypes"].apply(partialParams));
    }
    invokePublishType(partialParams) {
        this.boot();
        return this.client.publishType(this.ops["PublishType"].apply(partialParams));
    }
    invokeRecordHandlerProgress(partialParams) {
        this.boot();
        return this.client.recordHandlerProgress(this.ops["RecordHandlerProgress"].apply(partialParams));
    }
    invokeRegisterPublisher(partialParams) {
        this.boot();
        return this.client.registerPublisher(this.ops["RegisterPublisher"].apply(partialParams));
    }
    invokeRegisterType(partialParams) {
        this.boot();
        return this.client.registerType(this.ops["RegisterType"].apply(partialParams));
    }
    invokeRollbackStack(partialParams) {
        this.boot();
        return this.client.rollbackStack(this.ops["RollbackStack"].apply(partialParams));
    }
    invokeSetTypeConfiguration(partialParams) {
        this.boot();
        return this.client.setTypeConfiguration(this.ops["SetTypeConfiguration"].apply(partialParams));
    }
    invokeSetTypeDefaultVersion(partialParams) {
        this.boot();
        return this.client.setTypeDefaultVersion(this.ops["SetTypeDefaultVersion"].apply(partialParams));
    }
    invokeStopStackSetOperation(partialParams) {
        this.boot();
        return this.client.stopStackSetOperation(this.ops["StopStackSetOperation"].apply(partialParams));
    }
    invokeTestType(partialParams) {
        this.boot();
        return this.client.testType(this.ops["TestType"].apply(partialParams));
    }
    invokeUpdateStack(partialParams) {
        this.boot();
        return this.client.updateStack(this.ops["UpdateStack"].apply(partialParams));
    }
    invokeUpdateStackInstances(partialParams) {
        this.boot();
        return this.client.updateStackInstances(this.ops["UpdateStackInstances"].apply(partialParams));
    }
    invokeUpdateStackSet(partialParams) {
        this.boot();
        return this.client.updateStackSet(this.ops["UpdateStackSet"].apply(partialParams));
    }
    invokeUpdateTerminationProtection(partialParams) {
        this.boot();
        return this.client.updateTerminationProtection(this.ops["UpdateTerminationProtection"].apply(partialParams));
    }
    invokeValidateTemplate(partialParams) {
        this.boot();
        return this.client.validateTemplate(this.ops["ValidateTemplate"].apply(partialParams));
    }
}
exports.default = default_1;
