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
class default_1 extends aws.ssm.MaintenanceWindowTarget {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.SSM();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/ssm-2014-11-06.normal.json"), this.client);
    }
    invokeAddTagsToResource(partialParams) {
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeAssociateOpsItemRelatedItem(partialParams) {
        return this.client.associateOpsItemRelatedItem(this.ops["AssociateOpsItemRelatedItem"].apply(partialParams));
    }
    invokeCancelCommand(partialParams) {
        return this.client.cancelCommand(this.ops["CancelCommand"].apply(partialParams));
    }
    invokeCancelMaintenanceWindowExecution(partialParams) {
        return this.client.cancelMaintenanceWindowExecution(this.ops["CancelMaintenanceWindowExecution"].apply(partialParams));
    }
    invokeCreateActivation(partialParams) {
        return this.client.createActivation(this.ops["CreateActivation"].apply(partialParams));
    }
    invokeCreateAssociation(partialParams) {
        return this.client.createAssociation(this.ops["CreateAssociation"].apply(partialParams));
    }
    invokeCreateAssociationBatch(partialParams) {
        return this.client.createAssociationBatch(this.ops["CreateAssociationBatch"].apply(partialParams));
    }
    invokeCreateDocument(partialParams) {
        return this.client.createDocument(this.ops["CreateDocument"].apply(partialParams));
    }
    invokeCreateMaintenanceWindow(partialParams) {
        return this.client.createMaintenanceWindow(this.ops["CreateMaintenanceWindow"].apply(partialParams));
    }
    invokeCreateOpsItem(partialParams) {
        return this.client.createOpsItem(this.ops["CreateOpsItem"].apply(partialParams));
    }
    invokeCreateOpsMetadata(partialParams) {
        return this.client.createOpsMetadata(this.ops["CreateOpsMetadata"].apply(partialParams));
    }
    invokeCreatePatchBaseline(partialParams) {
        return this.client.createPatchBaseline(this.ops["CreatePatchBaseline"].apply(partialParams));
    }
    invokeCreateResourceDataSync(partialParams) {
        return this.client.createResourceDataSync(this.ops["CreateResourceDataSync"].apply(partialParams));
    }
    invokeDeleteActivation(partialParams) {
        return this.client.deleteActivation(this.ops["DeleteActivation"].apply(partialParams));
    }
    invokeDeleteDocument(partialParams) {
        return this.client.deleteDocument(this.ops["DeleteDocument"].apply(partialParams));
    }
    invokeDeleteInventory(partialParams) {
        return this.client.deleteInventory(this.ops["DeleteInventory"].apply(partialParams));
    }
    invokeDeleteMaintenanceWindow(partialParams) {
        return this.client.deleteMaintenanceWindow(this.ops["DeleteMaintenanceWindow"].apply(partialParams));
    }
    invokeDeleteOpsMetadata(partialParams) {
        return this.client.deleteOpsMetadata(this.ops["DeleteOpsMetadata"].apply(partialParams));
    }
    invokeDeleteParameter(partialParams) {
        return this.client.deleteParameter(this.ops["DeleteParameter"].apply(partialParams));
    }
    invokeDeleteParameters(partialParams) {
        return this.client.deleteParameters(this.ops["DeleteParameters"].apply(partialParams));
    }
    invokeDeletePatchBaseline(partialParams) {
        return this.client.deletePatchBaseline(this.ops["DeletePatchBaseline"].apply(partialParams));
    }
    invokeDeleteResourceDataSync(partialParams) {
        return this.client.deleteResourceDataSync(this.ops["DeleteResourceDataSync"].apply(partialParams));
    }
    invokeDeregisterManagedInstance(partialParams) {
        return this.client.deregisterManagedInstance(this.ops["DeregisterManagedInstance"].apply(partialParams));
    }
    invokeDeregisterPatchBaselineForPatchGroup(partialParams) {
        return this.client.deregisterPatchBaselineForPatchGroup(this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeDeregisterTargetFromMaintenanceWindow(partialParams) {
        return this.client.deregisterTargetFromMaintenanceWindow(this.ops["DeregisterTargetFromMaintenanceWindow"].apply(partialParams));
    }
    invokeDeregisterTaskFromMaintenanceWindow(partialParams) {
        return this.client.deregisterTaskFromMaintenanceWindow(this.ops["DeregisterTaskFromMaintenanceWindow"].apply(partialParams));
    }
    invokeDescribeAssociationExecutionTargets(partialParams) {
        return this.client.describeAssociationExecutionTargets(this.ops["DescribeAssociationExecutionTargets"].apply(partialParams));
    }
    invokeDescribeAssociationExecutions(partialParams) {
        return this.client.describeAssociationExecutions(this.ops["DescribeAssociationExecutions"].apply(partialParams));
    }
    invokeDescribeAutomationStepExecutions(partialParams) {
        return this.client.describeAutomationStepExecutions(this.ops["DescribeAutomationStepExecutions"].apply(partialParams));
    }
    invokeDescribeDocument(partialParams) {
        return this.client.describeDocument(this.ops["DescribeDocument"].apply(partialParams));
    }
    invokeDescribeDocumentPermission(partialParams) {
        return this.client.describeDocumentPermission(this.ops["DescribeDocumentPermission"].apply(partialParams));
    }
    invokeDescribeEffectiveInstanceAssociations(partialParams) {
        return this.client.describeEffectiveInstanceAssociations(this.ops["DescribeEffectiveInstanceAssociations"].apply(partialParams));
    }
    invokeDescribeEffectivePatchesForPatchBaseline(partialParams) {
        return this.client.describeEffectivePatchesForPatchBaseline(this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams));
    }
    invokeDescribeInstanceAssociationsStatus(partialParams) {
        return this.client.describeInstanceAssociationsStatus(this.ops["DescribeInstanceAssociationsStatus"].apply(partialParams));
    }
    invokeDescribeInstancePatchStates(partialParams) {
        return this.client.describeInstancePatchStates(this.ops["DescribeInstancePatchStates"].apply(partialParams));
    }
    invokeDescribeInstancePatchStatesForPatchGroup(partialParams) {
        return this.client.describeInstancePatchStatesForPatchGroup(this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams));
    }
    invokeDescribeInstancePatches(partialParams) {
        return this.client.describeInstancePatches(this.ops["DescribeInstancePatches"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams) {
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutionTasks(partialParams) {
        return this.client.describeMaintenanceWindowExecutionTasks(this.ops["DescribeMaintenanceWindowExecutionTasks"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutions(partialParams) {
        return this.client.describeMaintenanceWindowExecutions(this.ops["DescribeMaintenanceWindowExecutions"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowTargets(partialParams) {
        return this.client.describeMaintenanceWindowTargets(this.ops["DescribeMaintenanceWindowTargets"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowTasks(partialParams) {
        return this.client.describeMaintenanceWindowTasks(this.ops["DescribeMaintenanceWindowTasks"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowsForTarget(partialParams) {
        return this.client.describeMaintenanceWindowsForTarget(this.ops["DescribeMaintenanceWindowsForTarget"].apply(partialParams));
    }
    invokeDescribePatchGroupState(partialParams) {
        return this.client.describePatchGroupState(this.ops["DescribePatchGroupState"].apply(partialParams));
    }
    invokeDescribePatchProperties(partialParams) {
        return this.client.describePatchProperties(this.ops["DescribePatchProperties"].apply(partialParams));
    }
    invokeDescribeSessions(partialParams) {
        return this.client.describeSessions(this.ops["DescribeSessions"].apply(partialParams));
    }
    invokeDisassociateOpsItemRelatedItem(partialParams) {
        return this.client.disassociateOpsItemRelatedItem(this.ops["DisassociateOpsItemRelatedItem"].apply(partialParams));
    }
    invokeGetAutomationExecution(partialParams) {
        return this.client.getAutomationExecution(this.ops["GetAutomationExecution"].apply(partialParams));
    }
    invokeGetCalendarState(partialParams) {
        return this.client.getCalendarState(this.ops["GetCalendarState"].apply(partialParams));
    }
    invokeGetCommandInvocation(partialParams) {
        return this.client.getCommandInvocation(this.ops["GetCommandInvocation"].apply(partialParams));
    }
    invokeGetConnectionStatus(partialParams) {
        return this.client.getConnectionStatus(this.ops["GetConnectionStatus"].apply(partialParams));
    }
    invokeGetDeployablePatchSnapshotForInstance(partialParams) {
        return this.client.getDeployablePatchSnapshotForInstance(this.ops["GetDeployablePatchSnapshotForInstance"].apply(partialParams));
    }
    invokeGetDocument(partialParams) {
        return this.client.getDocument(this.ops["GetDocument"].apply(partialParams));
    }
    invokeGetMaintenanceWindow(partialParams) {
        return this.client.getMaintenanceWindow(this.ops["GetMaintenanceWindow"].apply(partialParams));
    }
    invokeGetMaintenanceWindowExecution(partialParams) {
        return this.client.getMaintenanceWindowExecution(this.ops["GetMaintenanceWindowExecution"].apply(partialParams));
    }
    invokeGetMaintenanceWindowExecutionTask(partialParams) {
        return this.client.getMaintenanceWindowExecutionTask(this.ops["GetMaintenanceWindowExecutionTask"].apply(partialParams));
    }
    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams) {
        return this.client.getMaintenanceWindowExecutionTaskInvocation(this.ops["GetMaintenanceWindowExecutionTaskInvocation"].apply(partialParams));
    }
    invokeGetMaintenanceWindowTask(partialParams) {
        return this.client.getMaintenanceWindowTask(this.ops["GetMaintenanceWindowTask"].apply(partialParams));
    }
    invokeGetOpsItem(partialParams) {
        return this.client.getOpsItem(this.ops["GetOpsItem"].apply(partialParams));
    }
    invokeGetOpsMetadata(partialParams) {
        return this.client.getOpsMetadata(this.ops["GetOpsMetadata"].apply(partialParams));
    }
    invokeGetParameter(partialParams) {
        return this.client.getParameter(this.ops["GetParameter"].apply(partialParams));
    }
    invokeGetParameterHistory(partialParams) {
        return this.client.getParameterHistory(this.ops["GetParameterHistory"].apply(partialParams));
    }
    invokeGetParameters(partialParams) {
        return this.client.getParameters(this.ops["GetParameters"].apply(partialParams));
    }
    invokeGetParametersByPath(partialParams) {
        return this.client.getParametersByPath(this.ops["GetParametersByPath"].apply(partialParams));
    }
    invokeGetPatchBaseline(partialParams) {
        return this.client.getPatchBaseline(this.ops["GetPatchBaseline"].apply(partialParams));
    }
    invokeGetPatchBaselineForPatchGroup(partialParams) {
        return this.client.getPatchBaselineForPatchGroup(this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeGetServiceSetting(partialParams) {
        return this.client.getServiceSetting(this.ops["GetServiceSetting"].apply(partialParams));
    }
    invokeLabelParameterVersion(partialParams) {
        return this.client.labelParameterVersion(this.ops["LabelParameterVersion"].apply(partialParams));
    }
    invokeListAssociationVersions(partialParams) {
        return this.client.listAssociationVersions(this.ops["ListAssociationVersions"].apply(partialParams));
    }
    invokeListDocumentMetadataHistory(partialParams) {
        return this.client.listDocumentMetadataHistory(this.ops["ListDocumentMetadataHistory"].apply(partialParams));
    }
    invokeListDocumentVersions(partialParams) {
        return this.client.listDocumentVersions(this.ops["ListDocumentVersions"].apply(partialParams));
    }
    invokeListInventoryEntries(partialParams) {
        return this.client.listInventoryEntries(this.ops["ListInventoryEntries"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyDocumentPermission(partialParams) {
        return this.client.modifyDocumentPermission(this.ops["ModifyDocumentPermission"].apply(partialParams));
    }
    invokePutComplianceItems(partialParams) {
        return this.client.putComplianceItems(this.ops["PutComplianceItems"].apply(partialParams));
    }
    invokePutInventory(partialParams) {
        return this.client.putInventory(this.ops["PutInventory"].apply(partialParams));
    }
    invokePutParameter(partialParams) {
        return this.client.putParameter(this.ops["PutParameter"].apply(partialParams));
    }
    invokeRegisterDefaultPatchBaseline(partialParams) {
        return this.client.registerDefaultPatchBaseline(this.ops["RegisterDefaultPatchBaseline"].apply(partialParams));
    }
    invokeRegisterPatchBaselineForPatchGroup(partialParams) {
        return this.client.registerPatchBaselineForPatchGroup(this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeRegisterTargetWithMaintenanceWindow(partialParams) {
        return this.client.registerTargetWithMaintenanceWindow(this.ops["RegisterTargetWithMaintenanceWindow"].apply(partialParams));
    }
    invokeRegisterTaskWithMaintenanceWindow(partialParams) {
        return this.client.registerTaskWithMaintenanceWindow(this.ops["RegisterTaskWithMaintenanceWindow"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetServiceSetting(partialParams) {
        return this.client.resetServiceSetting(this.ops["ResetServiceSetting"].apply(partialParams));
    }
    invokeResumeSession(partialParams) {
        return this.client.resumeSession(this.ops["ResumeSession"].apply(partialParams));
    }
    invokeSendAutomationSignal(partialParams) {
        return this.client.sendAutomationSignal(this.ops["SendAutomationSignal"].apply(partialParams));
    }
    invokeSendCommand(partialParams) {
        return this.client.sendCommand(this.ops["SendCommand"].apply(partialParams));
    }
    invokeStartAssociationsOnce(partialParams) {
        return this.client.startAssociationsOnce(this.ops["StartAssociationsOnce"].apply(partialParams));
    }
    invokeStartAutomationExecution(partialParams) {
        return this.client.startAutomationExecution(this.ops["StartAutomationExecution"].apply(partialParams));
    }
    invokeStartChangeRequestExecution(partialParams) {
        return this.client.startChangeRequestExecution(this.ops["StartChangeRequestExecution"].apply(partialParams));
    }
    invokeStartSession(partialParams) {
        return this.client.startSession(this.ops["StartSession"].apply(partialParams));
    }
    invokeStopAutomationExecution(partialParams) {
        return this.client.stopAutomationExecution(this.ops["StopAutomationExecution"].apply(partialParams));
    }
    invokeTerminateSession(partialParams) {
        return this.client.terminateSession(this.ops["TerminateSession"].apply(partialParams));
    }
    invokeUnlabelParameterVersion(partialParams) {
        return this.client.unlabelParameterVersion(this.ops["UnlabelParameterVersion"].apply(partialParams));
    }
    invokeUpdateAssociation(partialParams) {
        return this.client.updateAssociation(this.ops["UpdateAssociation"].apply(partialParams));
    }
    invokeUpdateAssociationStatus(partialParams) {
        return this.client.updateAssociationStatus(this.ops["UpdateAssociationStatus"].apply(partialParams));
    }
    invokeUpdateDocument(partialParams) {
        return this.client.updateDocument(this.ops["UpdateDocument"].apply(partialParams));
    }
    invokeUpdateDocumentDefaultVersion(partialParams) {
        return this.client.updateDocumentDefaultVersion(this.ops["UpdateDocumentDefaultVersion"].apply(partialParams));
    }
    invokeUpdateDocumentMetadata(partialParams) {
        return this.client.updateDocumentMetadata(this.ops["UpdateDocumentMetadata"].apply(partialParams));
    }
    invokeUpdateMaintenanceWindow(partialParams) {
        return this.client.updateMaintenanceWindow(this.ops["UpdateMaintenanceWindow"].apply(partialParams));
    }
    invokeUpdateMaintenanceWindowTarget(partialParams) {
        return this.client.updateMaintenanceWindowTarget(this.ops["UpdateMaintenanceWindowTarget"].apply(partialParams));
    }
    invokeUpdateMaintenanceWindowTask(partialParams) {
        return this.client.updateMaintenanceWindowTask(this.ops["UpdateMaintenanceWindowTask"].apply(partialParams));
    }
    invokeUpdateManagedInstanceRole(partialParams) {
        return this.client.updateManagedInstanceRole(this.ops["UpdateManagedInstanceRole"].apply(partialParams));
    }
    invokeUpdateOpsItem(partialParams) {
        return this.client.updateOpsItem(this.ops["UpdateOpsItem"].apply(partialParams));
    }
    invokeUpdateOpsMetadata(partialParams) {
        return this.client.updateOpsMetadata(this.ops["UpdateOpsMetadata"].apply(partialParams));
    }
    invokeUpdatePatchBaseline(partialParams) {
        return this.client.updatePatchBaseline(this.ops["UpdatePatchBaseline"].apply(partialParams));
    }
    invokeUpdateResourceDataSync(partialParams) {
        return this.client.updateResourceDataSync(this.ops["UpdateResourceDataSync"].apply(partialParams));
    }
    invokeUpdateServiceSetting(partialParams) {
        return this.client.updateServiceSetting(this.ops["UpdateServiceSetting"].apply(partialParams));
    }
}
exports.default = default_1;
