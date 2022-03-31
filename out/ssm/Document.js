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
const schema = require("../apis/ssm-2014-11-06.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.ssm.Document {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SSM();
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
    invokeAddTagsToResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].applicator.apply(partialParams));
    }
    invokeAssociateOpsItemRelatedItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateOpsItemRelatedItem(this.ops["AssociateOpsItemRelatedItem"].applicator.apply(partialParams));
    }
    invokeCancelCommand(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelCommand(this.ops["CancelCommand"].applicator.apply(partialParams));
    }
    invokeCancelMaintenanceWindowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelMaintenanceWindowExecution(this.ops["CancelMaintenanceWindowExecution"].applicator.apply(partialParams));
    }
    invokeCreateActivation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createActivation(this.ops["CreateActivation"].applicator.apply(partialParams));
    }
    invokeCreateAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssociation(this.ops["CreateAssociation"].applicator.apply(partialParams));
    }
    invokeCreateAssociationBatch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAssociationBatch(this.ops["CreateAssociationBatch"].applicator.apply(partialParams));
    }
    invokeCreateDocument(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDocument(this.ops["CreateDocument"].applicator.apply(partialParams));
    }
    invokeCreateMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createMaintenanceWindow(this.ops["CreateMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeCreateOpsItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpsItem(this.ops["CreateOpsItem"].applicator.apply(partialParams));
    }
    invokeCreateOpsMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createOpsMetadata(this.ops["CreateOpsMetadata"].applicator.apply(partialParams));
    }
    invokeCreatePatchBaseline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPatchBaseline(this.ops["CreatePatchBaseline"].applicator.apply(partialParams));
    }
    invokeCreateResourceDataSync(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createResourceDataSync(this.ops["CreateResourceDataSync"].applicator.apply(partialParams));
    }
    invokeDeleteActivation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteActivation(this.ops["DeleteActivation"].applicator.apply(partialParams));
    }
    invokeDeleteDocument(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDocument(this.ops["DeleteDocument"].applicator.apply(partialParams));
    }
    invokeDeleteInventory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInventory(this.ops["DeleteInventory"].applicator.apply(partialParams));
    }
    invokeDeleteMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteMaintenanceWindow(this.ops["DeleteMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeDeleteOpsMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteOpsMetadata(this.ops["DeleteOpsMetadata"].applicator.apply(partialParams));
    }
    invokeDeleteParameter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteParameter(this.ops["DeleteParameter"].applicator.apply(partialParams));
    }
    invokeDeleteParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteParameters(this.ops["DeleteParameters"].applicator.apply(partialParams));
    }
    invokeDeletePatchBaseline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePatchBaseline(this.ops["DeletePatchBaseline"].applicator.apply(partialParams));
    }
    invokeDeleteResourceDataSync(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteResourceDataSync(this.ops["DeleteResourceDataSync"].applicator.apply(partialParams));
    }
    invokeDeregisterManagedInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterManagedInstance(this.ops["DeregisterManagedInstance"].applicator.apply(partialParams));
    }
    invokeDeregisterPatchBaselineForPatchGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterPatchBaselineForPatchGroup(this.ops["DeregisterPatchBaselineForPatchGroup"].applicator.apply(partialParams));
    }
    invokeDeregisterTargetFromMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterTargetFromMaintenanceWindow(this.ops["DeregisterTargetFromMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeDeregisterTaskFromMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deregisterTaskFromMaintenanceWindow(this.ops["DeregisterTaskFromMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeDescribeAssociationExecutionTargets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssociationExecutionTargets(this.ops["DescribeAssociationExecutionTargets"].applicator.apply(partialParams));
    }
    invokeDescribeAssociationExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAssociationExecutions(this.ops["DescribeAssociationExecutions"].applicator.apply(partialParams));
    }
    invokeDescribeAutomationStepExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAutomationStepExecutions(this.ops["DescribeAutomationStepExecutions"].applicator.apply(partialParams));
    }
    invokeDescribeDocument(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDocument(this.ops["DescribeDocument"].applicator.apply(partialParams));
    }
    invokeDescribeDocumentPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDocumentPermission(this.ops["DescribeDocumentPermission"].applicator.apply(partialParams));
    }
    invokeDescribeEffectiveInstanceAssociations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEffectiveInstanceAssociations(this.ops["DescribeEffectiveInstanceAssociations"].applicator.apply(partialParams));
    }
    invokeDescribeEffectivePatchesForPatchBaseline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeEffectivePatchesForPatchBaseline(this.ops["DescribeEffectivePatchesForPatchBaseline"].applicator.apply(partialParams));
    }
    invokeDescribeInstanceAssociationsStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceAssociationsStatus(this.ops["DescribeInstanceAssociationsStatus"].applicator.apply(partialParams));
    }
    invokeDescribeInstancePatchStates(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstancePatchStates(this.ops["DescribeInstancePatchStates"].applicator.apply(partialParams));
    }
    invokeDescribeInstancePatchStatesForPatchGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstancePatchStatesForPatchGroup(this.ops["DescribeInstancePatchStatesForPatchGroup"].applicator.apply(partialParams));
    }
    invokeDescribeInstancePatches(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstancePatches(this.ops["DescribeInstancePatches"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutionTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTasks(this.ops["DescribeMaintenanceWindowExecutionTasks"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowExecutions(this.ops["DescribeMaintenanceWindowExecutions"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceWindowTargets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowTargets(this.ops["DescribeMaintenanceWindowTargets"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceWindowTasks(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowTasks(this.ops["DescribeMaintenanceWindowTasks"].applicator.apply(partialParams));
    }
    invokeDescribeMaintenanceWindowsForTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMaintenanceWindowsForTarget(this.ops["DescribeMaintenanceWindowsForTarget"].applicator.apply(partialParams));
    }
    invokeDescribePatchGroupState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePatchGroupState(this.ops["DescribePatchGroupState"].applicator.apply(partialParams));
    }
    invokeDescribePatchProperties(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePatchProperties(this.ops["DescribePatchProperties"].applicator.apply(partialParams));
    }
    invokeDescribeSessions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSessions(this.ops["DescribeSessions"].applicator.apply(partialParams));
    }
    invokeDisassociateOpsItemRelatedItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateOpsItemRelatedItem(this.ops["DisassociateOpsItemRelatedItem"].applicator.apply(partialParams));
    }
    invokeGetAutomationExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getAutomationExecution(this.ops["GetAutomationExecution"].applicator.apply(partialParams));
    }
    invokeGetCalendarState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCalendarState(this.ops["GetCalendarState"].applicator.apply(partialParams));
    }
    invokeGetCommandInvocation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommandInvocation(this.ops["GetCommandInvocation"].applicator.apply(partialParams));
    }
    invokeGetConnectionStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getConnectionStatus(this.ops["GetConnectionStatus"].applicator.apply(partialParams));
    }
    invokeGetDeployablePatchSnapshotForInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDeployablePatchSnapshotForInstance(this.ops["GetDeployablePatchSnapshotForInstance"].applicator.apply(partialParams));
    }
    invokeGetDocument(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDocument(this.ops["GetDocument"].applicator.apply(partialParams));
    }
    invokeGetMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindow(this.ops["GetMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeGetMaintenanceWindowExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowExecution(this.ops["GetMaintenanceWindowExecution"].applicator.apply(partialParams));
    }
    invokeGetMaintenanceWindowExecutionTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowExecutionTask(this.ops["GetMaintenanceWindowExecutionTask"].applicator.apply(partialParams));
    }
    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowExecutionTaskInvocation(this.ops["GetMaintenanceWindowExecutionTaskInvocation"].applicator.apply(partialParams));
    }
    invokeGetMaintenanceWindowTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMaintenanceWindowTask(this.ops["GetMaintenanceWindowTask"].applicator.apply(partialParams));
    }
    invokeGetOpsItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpsItem(this.ops["GetOpsItem"].applicator.apply(partialParams));
    }
    invokeGetOpsMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getOpsMetadata(this.ops["GetOpsMetadata"].applicator.apply(partialParams));
    }
    invokeGetParameter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParameter(this.ops["GetParameter"].applicator.apply(partialParams));
    }
    invokeGetParameterHistory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParameterHistory(this.ops["GetParameterHistory"].applicator.apply(partialParams));
    }
    invokeGetParameters(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParameters(this.ops["GetParameters"].applicator.apply(partialParams));
    }
    invokeGetParametersByPath(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getParametersByPath(this.ops["GetParametersByPath"].applicator.apply(partialParams));
    }
    invokeGetPatchBaseline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPatchBaseline(this.ops["GetPatchBaseline"].applicator.apply(partialParams));
    }
    invokeGetPatchBaselineForPatchGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPatchBaselineForPatchGroup(this.ops["GetPatchBaselineForPatchGroup"].applicator.apply(partialParams));
    }
    invokeGetServiceSetting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getServiceSetting(this.ops["GetServiceSetting"].applicator.apply(partialParams));
    }
    invokeLabelParameterVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.labelParameterVersion(this.ops["LabelParameterVersion"].applicator.apply(partialParams));
    }
    invokeListAssociationVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssociationVersions(this.ops["ListAssociationVersions"].applicator.apply(partialParams));
    }
    invokeListDocumentMetadataHistory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDocumentMetadataHistory(this.ops["ListDocumentMetadataHistory"].applicator.apply(partialParams));
    }
    invokeListDocumentVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDocumentVersions(this.ops["ListDocumentVersions"].applicator.apply(partialParams));
    }
    invokeListInventoryEntries(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInventoryEntries(this.ops["ListInventoryEntries"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeModifyDocumentPermission(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.modifyDocumentPermission(this.ops["ModifyDocumentPermission"].applicator.apply(partialParams));
    }
    invokePutComplianceItems(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putComplianceItems(this.ops["PutComplianceItems"].applicator.apply(partialParams));
    }
    invokePutInventory(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putInventory(this.ops["PutInventory"].applicator.apply(partialParams));
    }
    invokePutParameter(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putParameter(this.ops["PutParameter"].applicator.apply(partialParams));
    }
    invokeRegisterDefaultPatchBaseline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerDefaultPatchBaseline(this.ops["RegisterDefaultPatchBaseline"].applicator.apply(partialParams));
    }
    invokeRegisterPatchBaselineForPatchGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerPatchBaselineForPatchGroup(this.ops["RegisterPatchBaselineForPatchGroup"].applicator.apply(partialParams));
    }
    invokeRegisterTargetWithMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerTargetWithMaintenanceWindow(this.ops["RegisterTargetWithMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeRegisterTaskWithMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerTaskWithMaintenanceWindow(this.ops["RegisterTaskWithMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].applicator.apply(partialParams));
    }
    invokeResetServiceSetting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resetServiceSetting(this.ops["ResetServiceSetting"].applicator.apply(partialParams));
    }
    invokeResumeSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeSession(this.ops["ResumeSession"].applicator.apply(partialParams));
    }
    invokeSendAutomationSignal(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendAutomationSignal(this.ops["SendAutomationSignal"].applicator.apply(partialParams));
    }
    invokeSendCommand(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.sendCommand(this.ops["SendCommand"].applicator.apply(partialParams));
    }
    invokeStartAssociationsOnce(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAssociationsOnce(this.ops["StartAssociationsOnce"].applicator.apply(partialParams));
    }
    invokeStartAutomationExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startAutomationExecution(this.ops["StartAutomationExecution"].applicator.apply(partialParams));
    }
    invokeStartChangeRequestExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startChangeRequestExecution(this.ops["StartChangeRequestExecution"].applicator.apply(partialParams));
    }
    invokeStartSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startSession(this.ops["StartSession"].applicator.apply(partialParams));
    }
    invokeStopAutomationExecution(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopAutomationExecution(this.ops["StopAutomationExecution"].applicator.apply(partialParams));
    }
    invokeTerminateSession(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.terminateSession(this.ops["TerminateSession"].applicator.apply(partialParams));
    }
    invokeUnlabelParameterVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.unlabelParameterVersion(this.ops["UnlabelParameterVersion"].applicator.apply(partialParams));
    }
    invokeUpdateAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssociation(this.ops["UpdateAssociation"].applicator.apply(partialParams));
    }
    invokeUpdateAssociationStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAssociationStatus(this.ops["UpdateAssociationStatus"].applicator.apply(partialParams));
    }
    invokeUpdateDocument(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocument(this.ops["UpdateDocument"].applicator.apply(partialParams));
    }
    invokeUpdateDocumentDefaultVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentDefaultVersion(this.ops["UpdateDocumentDefaultVersion"].applicator.apply(partialParams));
    }
    invokeUpdateDocumentMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDocumentMetadata(this.ops["UpdateDocumentMetadata"].applicator.apply(partialParams));
    }
    invokeUpdateMaintenanceWindow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceWindow(this.ops["UpdateMaintenanceWindow"].applicator.apply(partialParams));
    }
    invokeUpdateMaintenanceWindowTarget(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceWindowTarget(this.ops["UpdateMaintenanceWindowTarget"].applicator.apply(partialParams));
    }
    invokeUpdateMaintenanceWindowTask(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateMaintenanceWindowTask(this.ops["UpdateMaintenanceWindowTask"].applicator.apply(partialParams));
    }
    invokeUpdateManagedInstanceRole(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateManagedInstanceRole(this.ops["UpdateManagedInstanceRole"].applicator.apply(partialParams));
    }
    invokeUpdateOpsItem(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpsItem(this.ops["UpdateOpsItem"].applicator.apply(partialParams));
    }
    invokeUpdateOpsMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateOpsMetadata(this.ops["UpdateOpsMetadata"].applicator.apply(partialParams));
    }
    invokeUpdatePatchBaseline(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePatchBaseline(this.ops["UpdatePatchBaseline"].applicator.apply(partialParams));
    }
    invokeUpdateResourceDataSync(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateResourceDataSync(this.ops["UpdateResourceDataSync"].applicator.apply(partialParams));
    }
    invokeUpdateServiceSetting(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateServiceSetting(this.ops["UpdateServiceSetting"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
