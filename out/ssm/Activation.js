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
class default_1 extends aws.ssm.Activation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.SSM();
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]) => {
            this.capitalizedParams[(0, parse_1.upperCamelCase)(key)] = value;
            if (this[(0, parse_1.upperCamelCase)(this.constructor.name) + (0, parse_1.upperCamelCase)(key)] === undefined) {
                this.capitalizedParams[this.constructor.name + (0, parse_1.upperCamelCase)(key)] = value;
            }
            console.log(this.capitalizedParams);
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
    invokeAddTagsToResource(partialParams) {
        this.boot();
        return this.client.addTagsToResource(this.ops["AddTagsToResource"].apply(partialParams));
    }
    invokeAssociateOpsItemRelatedItem(partialParams) {
        this.boot();
        return this.client.associateOpsItemRelatedItem(this.ops["AssociateOpsItemRelatedItem"].apply(partialParams));
    }
    invokeCancelCommand(partialParams) {
        this.boot();
        return this.client.cancelCommand(this.ops["CancelCommand"].apply(partialParams));
    }
    invokeCancelMaintenanceWindowExecution(partialParams) {
        this.boot();
        return this.client.cancelMaintenanceWindowExecution(this.ops["CancelMaintenanceWindowExecution"].apply(partialParams));
    }
    invokeCreateActivation(partialParams) {
        this.boot();
        return this.client.createActivation(this.ops["CreateActivation"].apply(partialParams));
    }
    invokeCreateAssociation(partialParams) {
        this.boot();
        return this.client.createAssociation(this.ops["CreateAssociation"].apply(partialParams));
    }
    invokeCreateAssociationBatch(partialParams) {
        this.boot();
        return this.client.createAssociationBatch(this.ops["CreateAssociationBatch"].apply(partialParams));
    }
    invokeCreateDocument(partialParams) {
        this.boot();
        return this.client.createDocument(this.ops["CreateDocument"].apply(partialParams));
    }
    invokeCreateMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.createMaintenanceWindow(this.ops["CreateMaintenanceWindow"].apply(partialParams));
    }
    invokeCreateOpsItem(partialParams) {
        this.boot();
        return this.client.createOpsItem(this.ops["CreateOpsItem"].apply(partialParams));
    }
    invokeCreateOpsMetadata(partialParams) {
        this.boot();
        return this.client.createOpsMetadata(this.ops["CreateOpsMetadata"].apply(partialParams));
    }
    invokeCreatePatchBaseline(partialParams) {
        this.boot();
        return this.client.createPatchBaseline(this.ops["CreatePatchBaseline"].apply(partialParams));
    }
    invokeCreateResourceDataSync(partialParams) {
        this.boot();
        return this.client.createResourceDataSync(this.ops["CreateResourceDataSync"].apply(partialParams));
    }
    invokeDeleteActivation(partialParams) {
        this.boot();
        return this.client.deleteActivation(this.ops["DeleteActivation"].apply(partialParams));
    }
    invokeDeleteAssociation(partialParams) {
        this.boot();
        return this.client.deleteAssociation(this.ops["DeleteAssociation"].apply(partialParams));
    }
    invokeDeleteDocument(partialParams) {
        this.boot();
        return this.client.deleteDocument(this.ops["DeleteDocument"].apply(partialParams));
    }
    invokeDeleteInventory(partialParams) {
        this.boot();
        return this.client.deleteInventory(this.ops["DeleteInventory"].apply(partialParams));
    }
    invokeDeleteMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.deleteMaintenanceWindow(this.ops["DeleteMaintenanceWindow"].apply(partialParams));
    }
    invokeDeleteOpsMetadata(partialParams) {
        this.boot();
        return this.client.deleteOpsMetadata(this.ops["DeleteOpsMetadata"].apply(partialParams));
    }
    invokeDeleteParameter(partialParams) {
        this.boot();
        return this.client.deleteParameter(this.ops["DeleteParameter"].apply(partialParams));
    }
    invokeDeleteParameters(partialParams) {
        this.boot();
        return this.client.deleteParameters(this.ops["DeleteParameters"].apply(partialParams));
    }
    invokeDeletePatchBaseline(partialParams) {
        this.boot();
        return this.client.deletePatchBaseline(this.ops["DeletePatchBaseline"].apply(partialParams));
    }
    invokeDeleteResourceDataSync(partialParams) {
        this.boot();
        return this.client.deleteResourceDataSync(this.ops["DeleteResourceDataSync"].apply(partialParams));
    }
    invokeDeregisterManagedInstance(partialParams) {
        this.boot();
        return this.client.deregisterManagedInstance(this.ops["DeregisterManagedInstance"].apply(partialParams));
    }
    invokeDeregisterPatchBaselineForPatchGroup(partialParams) {
        this.boot();
        return this.client.deregisterPatchBaselineForPatchGroup(this.ops["DeregisterPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeDeregisterTargetFromMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.deregisterTargetFromMaintenanceWindow(this.ops["DeregisterTargetFromMaintenanceWindow"].apply(partialParams));
    }
    invokeDeregisterTaskFromMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.deregisterTaskFromMaintenanceWindow(this.ops["DeregisterTaskFromMaintenanceWindow"].apply(partialParams));
    }
    invokeDescribeActivations(partialParams) {
        this.boot();
        return this.client.describeActivations(this.ops["DescribeActivations"].apply(partialParams));
    }
    invokeDescribeAssociation(partialParams) {
        this.boot();
        return this.client.describeAssociation(this.ops["DescribeAssociation"].apply(partialParams));
    }
    invokeDescribeAssociationExecutionTargets(partialParams) {
        this.boot();
        return this.client.describeAssociationExecutionTargets(this.ops["DescribeAssociationExecutionTargets"].apply(partialParams));
    }
    invokeDescribeAssociationExecutions(partialParams) {
        this.boot();
        return this.client.describeAssociationExecutions(this.ops["DescribeAssociationExecutions"].apply(partialParams));
    }
    invokeDescribeAutomationExecutions(partialParams) {
        this.boot();
        return this.client.describeAutomationExecutions(this.ops["DescribeAutomationExecutions"].apply(partialParams));
    }
    invokeDescribeAutomationStepExecutions(partialParams) {
        this.boot();
        return this.client.describeAutomationStepExecutions(this.ops["DescribeAutomationStepExecutions"].apply(partialParams));
    }
    invokeDescribeAvailablePatches(partialParams) {
        this.boot();
        return this.client.describeAvailablePatches(this.ops["DescribeAvailablePatches"].apply(partialParams));
    }
    invokeDescribeDocument(partialParams) {
        this.boot();
        return this.client.describeDocument(this.ops["DescribeDocument"].apply(partialParams));
    }
    invokeDescribeDocumentPermission(partialParams) {
        this.boot();
        return this.client.describeDocumentPermission(this.ops["DescribeDocumentPermission"].apply(partialParams));
    }
    invokeDescribeEffectiveInstanceAssociations(partialParams) {
        this.boot();
        return this.client.describeEffectiveInstanceAssociations(this.ops["DescribeEffectiveInstanceAssociations"].apply(partialParams));
    }
    invokeDescribeEffectivePatchesForPatchBaseline(partialParams) {
        this.boot();
        return this.client.describeEffectivePatchesForPatchBaseline(this.ops["DescribeEffectivePatchesForPatchBaseline"].apply(partialParams));
    }
    invokeDescribeInstanceAssociationsStatus(partialParams) {
        this.boot();
        return this.client.describeInstanceAssociationsStatus(this.ops["DescribeInstanceAssociationsStatus"].apply(partialParams));
    }
    invokeDescribeInstanceInformation(partialParams) {
        this.boot();
        return this.client.describeInstanceInformation(this.ops["DescribeInstanceInformation"].apply(partialParams));
    }
    invokeDescribeInstancePatchStates(partialParams) {
        this.boot();
        return this.client.describeInstancePatchStates(this.ops["DescribeInstancePatchStates"].apply(partialParams));
    }
    invokeDescribeInstancePatchStatesForPatchGroup(partialParams) {
        this.boot();
        return this.client.describeInstancePatchStatesForPatchGroup(this.ops["DescribeInstancePatchStatesForPatchGroup"].apply(partialParams));
    }
    invokeDescribeInstancePatches(partialParams) {
        this.boot();
        return this.client.describeInstancePatches(this.ops["DescribeInstancePatches"].apply(partialParams));
    }
    invokeDescribeInventoryDeletions(partialParams) {
        this.boot();
        return this.client.describeInventoryDeletions(this.ops["DescribeInventoryDeletions"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutionTaskInvocations(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTaskInvocations(this.ops["DescribeMaintenanceWindowExecutionTaskInvocations"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutionTasks(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowExecutionTasks(this.ops["DescribeMaintenanceWindowExecutionTasks"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowExecutions(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowExecutions(this.ops["DescribeMaintenanceWindowExecutions"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowSchedule(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowSchedule(this.ops["DescribeMaintenanceWindowSchedule"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowTargets(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowTargets(this.ops["DescribeMaintenanceWindowTargets"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowTasks(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowTasks(this.ops["DescribeMaintenanceWindowTasks"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindows(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindows(this.ops["DescribeMaintenanceWindows"].apply(partialParams));
    }
    invokeDescribeMaintenanceWindowsForTarget(partialParams) {
        this.boot();
        return this.client.describeMaintenanceWindowsForTarget(this.ops["DescribeMaintenanceWindowsForTarget"].apply(partialParams));
    }
    invokeDescribeOpsItems(partialParams) {
        this.boot();
        return this.client.describeOpsItems(this.ops["DescribeOpsItems"].apply(partialParams));
    }
    invokeDescribeParameters(partialParams) {
        this.boot();
        return this.client.describeParameters(this.ops["DescribeParameters"].apply(partialParams));
    }
    invokeDescribePatchBaselines(partialParams) {
        this.boot();
        return this.client.describePatchBaselines(this.ops["DescribePatchBaselines"].apply(partialParams));
    }
    invokeDescribePatchGroupState(partialParams) {
        this.boot();
        return this.client.describePatchGroupState(this.ops["DescribePatchGroupState"].apply(partialParams));
    }
    invokeDescribePatchGroups(partialParams) {
        this.boot();
        return this.client.describePatchGroups(this.ops["DescribePatchGroups"].apply(partialParams));
    }
    invokeDescribePatchProperties(partialParams) {
        this.boot();
        return this.client.describePatchProperties(this.ops["DescribePatchProperties"].apply(partialParams));
    }
    invokeDescribeSessions(partialParams) {
        this.boot();
        return this.client.describeSessions(this.ops["DescribeSessions"].apply(partialParams));
    }
    invokeDisassociateOpsItemRelatedItem(partialParams) {
        this.boot();
        return this.client.disassociateOpsItemRelatedItem(this.ops["DisassociateOpsItemRelatedItem"].apply(partialParams));
    }
    invokeGetAutomationExecution(partialParams) {
        this.boot();
        return this.client.getAutomationExecution(this.ops["GetAutomationExecution"].apply(partialParams));
    }
    invokeGetCalendarState(partialParams) {
        this.boot();
        return this.client.getCalendarState(this.ops["GetCalendarState"].apply(partialParams));
    }
    invokeGetCommandInvocation(partialParams) {
        this.boot();
        return this.client.getCommandInvocation(this.ops["GetCommandInvocation"].apply(partialParams));
    }
    invokeGetConnectionStatus(partialParams) {
        this.boot();
        return this.client.getConnectionStatus(this.ops["GetConnectionStatus"].apply(partialParams));
    }
    invokeGetDefaultPatchBaseline(partialParams) {
        this.boot();
        return this.client.getDefaultPatchBaseline(this.ops["GetDefaultPatchBaseline"].apply(partialParams));
    }
    invokeGetDeployablePatchSnapshotForInstance(partialParams) {
        this.boot();
        return this.client.getDeployablePatchSnapshotForInstance(this.ops["GetDeployablePatchSnapshotForInstance"].apply(partialParams));
    }
    invokeGetDocument(partialParams) {
        this.boot();
        return this.client.getDocument(this.ops["GetDocument"].apply(partialParams));
    }
    invokeGetInventory(partialParams) {
        this.boot();
        return this.client.getInventory(this.ops["GetInventory"].apply(partialParams));
    }
    invokeGetInventorySchema(partialParams) {
        this.boot();
        return this.client.getInventorySchema(this.ops["GetInventorySchema"].apply(partialParams));
    }
    invokeGetMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.getMaintenanceWindow(this.ops["GetMaintenanceWindow"].apply(partialParams));
    }
    invokeGetMaintenanceWindowExecution(partialParams) {
        this.boot();
        return this.client.getMaintenanceWindowExecution(this.ops["GetMaintenanceWindowExecution"].apply(partialParams));
    }
    invokeGetMaintenanceWindowExecutionTask(partialParams) {
        this.boot();
        return this.client.getMaintenanceWindowExecutionTask(this.ops["GetMaintenanceWindowExecutionTask"].apply(partialParams));
    }
    invokeGetMaintenanceWindowExecutionTaskInvocation(partialParams) {
        this.boot();
        return this.client.getMaintenanceWindowExecutionTaskInvocation(this.ops["GetMaintenanceWindowExecutionTaskInvocation"].apply(partialParams));
    }
    invokeGetMaintenanceWindowTask(partialParams) {
        this.boot();
        return this.client.getMaintenanceWindowTask(this.ops["GetMaintenanceWindowTask"].apply(partialParams));
    }
    invokeGetOpsItem(partialParams) {
        this.boot();
        return this.client.getOpsItem(this.ops["GetOpsItem"].apply(partialParams));
    }
    invokeGetOpsMetadata(partialParams) {
        this.boot();
        return this.client.getOpsMetadata(this.ops["GetOpsMetadata"].apply(partialParams));
    }
    invokeGetOpsSummary(partialParams) {
        this.boot();
        return this.client.getOpsSummary(this.ops["GetOpsSummary"].apply(partialParams));
    }
    invokeGetParameter(partialParams) {
        this.boot();
        return this.client.getParameter(this.ops["GetParameter"].apply(partialParams));
    }
    invokeGetParameterHistory(partialParams) {
        this.boot();
        return this.client.getParameterHistory(this.ops["GetParameterHistory"].apply(partialParams));
    }
    invokeGetParameters(partialParams) {
        this.boot();
        return this.client.getParameters(this.ops["GetParameters"].apply(partialParams));
    }
    invokeGetParametersByPath(partialParams) {
        this.boot();
        return this.client.getParametersByPath(this.ops["GetParametersByPath"].apply(partialParams));
    }
    invokeGetPatchBaseline(partialParams) {
        this.boot();
        return this.client.getPatchBaseline(this.ops["GetPatchBaseline"].apply(partialParams));
    }
    invokeGetPatchBaselineForPatchGroup(partialParams) {
        this.boot();
        return this.client.getPatchBaselineForPatchGroup(this.ops["GetPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeGetServiceSetting(partialParams) {
        this.boot();
        return this.client.getServiceSetting(this.ops["GetServiceSetting"].apply(partialParams));
    }
    invokeLabelParameterVersion(partialParams) {
        this.boot();
        return this.client.labelParameterVersion(this.ops["LabelParameterVersion"].apply(partialParams));
    }
    invokeListAssociationVersions(partialParams) {
        this.boot();
        return this.client.listAssociationVersions(this.ops["ListAssociationVersions"].apply(partialParams));
    }
    invokeListAssociations(partialParams) {
        this.boot();
        return this.client.listAssociations(this.ops["ListAssociations"].apply(partialParams));
    }
    invokeListCommandInvocations(partialParams) {
        this.boot();
        return this.client.listCommandInvocations(this.ops["ListCommandInvocations"].apply(partialParams));
    }
    invokeListCommands(partialParams) {
        this.boot();
        return this.client.listCommands(this.ops["ListCommands"].apply(partialParams));
    }
    invokeListComplianceItems(partialParams) {
        this.boot();
        return this.client.listComplianceItems(this.ops["ListComplianceItems"].apply(partialParams));
    }
    invokeListComplianceSummaries(partialParams) {
        this.boot();
        return this.client.listComplianceSummaries(this.ops["ListComplianceSummaries"].apply(partialParams));
    }
    invokeListDocumentMetadataHistory(partialParams) {
        this.boot();
        return this.client.listDocumentMetadataHistory(this.ops["ListDocumentMetadataHistory"].apply(partialParams));
    }
    invokeListDocumentVersions(partialParams) {
        this.boot();
        return this.client.listDocumentVersions(this.ops["ListDocumentVersions"].apply(partialParams));
    }
    invokeListDocuments(partialParams) {
        this.boot();
        return this.client.listDocuments(this.ops["ListDocuments"].apply(partialParams));
    }
    invokeListInventoryEntries(partialParams) {
        this.boot();
        return this.client.listInventoryEntries(this.ops["ListInventoryEntries"].apply(partialParams));
    }
    invokeListOpsItemEvents(partialParams) {
        this.boot();
        return this.client.listOpsItemEvents(this.ops["ListOpsItemEvents"].apply(partialParams));
    }
    invokeListOpsItemRelatedItems(partialParams) {
        this.boot();
        return this.client.listOpsItemRelatedItems(this.ops["ListOpsItemRelatedItems"].apply(partialParams));
    }
    invokeListOpsMetadata(partialParams) {
        this.boot();
        return this.client.listOpsMetadata(this.ops["ListOpsMetadata"].apply(partialParams));
    }
    invokeListResourceComplianceSummaries(partialParams) {
        this.boot();
        return this.client.listResourceComplianceSummaries(this.ops["ListResourceComplianceSummaries"].apply(partialParams));
    }
    invokeListResourceDataSync(partialParams) {
        this.boot();
        return this.client.listResourceDataSync(this.ops["ListResourceDataSync"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeModifyDocumentPermission(partialParams) {
        this.boot();
        return this.client.modifyDocumentPermission(this.ops["ModifyDocumentPermission"].apply(partialParams));
    }
    invokePutComplianceItems(partialParams) {
        this.boot();
        return this.client.putComplianceItems(this.ops["PutComplianceItems"].apply(partialParams));
    }
    invokePutInventory(partialParams) {
        this.boot();
        return this.client.putInventory(this.ops["PutInventory"].apply(partialParams));
    }
    invokePutParameter(partialParams) {
        this.boot();
        return this.client.putParameter(this.ops["PutParameter"].apply(partialParams));
    }
    invokeRegisterDefaultPatchBaseline(partialParams) {
        this.boot();
        return this.client.registerDefaultPatchBaseline(this.ops["RegisterDefaultPatchBaseline"].apply(partialParams));
    }
    invokeRegisterPatchBaselineForPatchGroup(partialParams) {
        this.boot();
        return this.client.registerPatchBaselineForPatchGroup(this.ops["RegisterPatchBaselineForPatchGroup"].apply(partialParams));
    }
    invokeRegisterTargetWithMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.registerTargetWithMaintenanceWindow(this.ops["RegisterTargetWithMaintenanceWindow"].apply(partialParams));
    }
    invokeRegisterTaskWithMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.registerTaskWithMaintenanceWindow(this.ops["RegisterTaskWithMaintenanceWindow"].apply(partialParams));
    }
    invokeRemoveTagsFromResource(partialParams) {
        this.boot();
        return this.client.removeTagsFromResource(this.ops["RemoveTagsFromResource"].apply(partialParams));
    }
    invokeResetServiceSetting(partialParams) {
        this.boot();
        return this.client.resetServiceSetting(this.ops["ResetServiceSetting"].apply(partialParams));
    }
    invokeResumeSession(partialParams) {
        this.boot();
        return this.client.resumeSession(this.ops["ResumeSession"].apply(partialParams));
    }
    invokeSendAutomationSignal(partialParams) {
        this.boot();
        return this.client.sendAutomationSignal(this.ops["SendAutomationSignal"].apply(partialParams));
    }
    invokeSendCommand(partialParams) {
        this.boot();
        return this.client.sendCommand(this.ops["SendCommand"].apply(partialParams));
    }
    invokeStartAssociationsOnce(partialParams) {
        this.boot();
        return this.client.startAssociationsOnce(this.ops["StartAssociationsOnce"].apply(partialParams));
    }
    invokeStartAutomationExecution(partialParams) {
        this.boot();
        return this.client.startAutomationExecution(this.ops["StartAutomationExecution"].apply(partialParams));
    }
    invokeStartChangeRequestExecution(partialParams) {
        this.boot();
        return this.client.startChangeRequestExecution(this.ops["StartChangeRequestExecution"].apply(partialParams));
    }
    invokeStartSession(partialParams) {
        this.boot();
        return this.client.startSession(this.ops["StartSession"].apply(partialParams));
    }
    invokeStopAutomationExecution(partialParams) {
        this.boot();
        return this.client.stopAutomationExecution(this.ops["StopAutomationExecution"].apply(partialParams));
    }
    invokeTerminateSession(partialParams) {
        this.boot();
        return this.client.terminateSession(this.ops["TerminateSession"].apply(partialParams));
    }
    invokeUnlabelParameterVersion(partialParams) {
        this.boot();
        return this.client.unlabelParameterVersion(this.ops["UnlabelParameterVersion"].apply(partialParams));
    }
    invokeUpdateAssociation(partialParams) {
        this.boot();
        return this.client.updateAssociation(this.ops["UpdateAssociation"].apply(partialParams));
    }
    invokeUpdateAssociationStatus(partialParams) {
        this.boot();
        return this.client.updateAssociationStatus(this.ops["UpdateAssociationStatus"].apply(partialParams));
    }
    invokeUpdateDocument(partialParams) {
        this.boot();
        return this.client.updateDocument(this.ops["UpdateDocument"].apply(partialParams));
    }
    invokeUpdateDocumentDefaultVersion(partialParams) {
        this.boot();
        return this.client.updateDocumentDefaultVersion(this.ops["UpdateDocumentDefaultVersion"].apply(partialParams));
    }
    invokeUpdateDocumentMetadata(partialParams) {
        this.boot();
        return this.client.updateDocumentMetadata(this.ops["UpdateDocumentMetadata"].apply(partialParams));
    }
    invokeUpdateMaintenanceWindow(partialParams) {
        this.boot();
        return this.client.updateMaintenanceWindow(this.ops["UpdateMaintenanceWindow"].apply(partialParams));
    }
    invokeUpdateMaintenanceWindowTarget(partialParams) {
        this.boot();
        return this.client.updateMaintenanceWindowTarget(this.ops["UpdateMaintenanceWindowTarget"].apply(partialParams));
    }
    invokeUpdateMaintenanceWindowTask(partialParams) {
        this.boot();
        return this.client.updateMaintenanceWindowTask(this.ops["UpdateMaintenanceWindowTask"].apply(partialParams));
    }
    invokeUpdateManagedInstanceRole(partialParams) {
        this.boot();
        return this.client.updateManagedInstanceRole(this.ops["UpdateManagedInstanceRole"].apply(partialParams));
    }
    invokeUpdateOpsItem(partialParams) {
        this.boot();
        return this.client.updateOpsItem(this.ops["UpdateOpsItem"].apply(partialParams));
    }
    invokeUpdateOpsMetadata(partialParams) {
        this.boot();
        return this.client.updateOpsMetadata(this.ops["UpdateOpsMetadata"].apply(partialParams));
    }
    invokeUpdatePatchBaseline(partialParams) {
        this.boot();
        return this.client.updatePatchBaseline(this.ops["UpdatePatchBaseline"].apply(partialParams));
    }
    invokeUpdateResourceDataSync(partialParams) {
        this.boot();
        return this.client.updateResourceDataSync(this.ops["UpdateResourceDataSync"].apply(partialParams));
    }
    invokeUpdateServiceSetting(partialParams) {
        this.boot();
        return this.client.updateServiceSetting(this.ops["UpdateServiceSetting"].apply(partialParams));
    }
}
exports.default = default_1;
