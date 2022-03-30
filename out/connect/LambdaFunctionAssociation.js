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
class default_1 extends aws.connect.LambdaFunctionAssociation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Connect();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/connect-2017-08-08.normal.json"), this.client);
    }
    invokeAssociateApprovedOrigin(partialParams) {
        return this.client.associateApprovedOrigin(this.ops["AssociateApprovedOrigin"].apply(partialParams));
    }
    invokeAssociateBot(partialParams) {
        return this.client.associateBot(this.ops["AssociateBot"].apply(partialParams));
    }
    invokeAssociateDefaultVocabulary(partialParams) {
        return this.client.associateDefaultVocabulary(this.ops["AssociateDefaultVocabulary"].apply(partialParams));
    }
    invokeAssociateInstanceStorageConfig(partialParams) {
        return this.client.associateInstanceStorageConfig(this.ops["AssociateInstanceStorageConfig"].apply(partialParams));
    }
    invokeAssociateLambdaFunction(partialParams) {
        return this.client.associateLambdaFunction(this.ops["AssociateLambdaFunction"].apply(partialParams));
    }
    invokeAssociateLexBot(partialParams) {
        return this.client.associateLexBot(this.ops["AssociateLexBot"].apply(partialParams));
    }
    invokeAssociateQueueQuickConnects(partialParams) {
        return this.client.associateQueueQuickConnects(this.ops["AssociateQueueQuickConnects"].apply(partialParams));
    }
    invokeAssociateRoutingProfileQueues(partialParams) {
        return this.client.associateRoutingProfileQueues(this.ops["AssociateRoutingProfileQueues"].apply(partialParams));
    }
    invokeAssociateSecurityKey(partialParams) {
        return this.client.associateSecurityKey(this.ops["AssociateSecurityKey"].apply(partialParams));
    }
    invokeCreateAgentStatus(partialParams) {
        return this.client.createAgentStatus(this.ops["CreateAgentStatus"].apply(partialParams));
    }
    invokeCreateContactFlow(partialParams) {
        return this.client.createContactFlow(this.ops["CreateContactFlow"].apply(partialParams));
    }
    invokeCreateContactFlowModule(partialParams) {
        return this.client.createContactFlowModule(this.ops["CreateContactFlowModule"].apply(partialParams));
    }
    invokeCreateHoursOfOperation(partialParams) {
        return this.client.createHoursOfOperation(this.ops["CreateHoursOfOperation"].apply(partialParams));
    }
    invokeCreateInstance(partialParams) {
        return this.client.createInstance(this.ops["CreateInstance"].apply(partialParams));
    }
    invokeCreateIntegrationAssociation(partialParams) {
        return this.client.createIntegrationAssociation(this.ops["CreateIntegrationAssociation"].apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        return this.client.createQueue(this.ops["CreateQueue"].apply(partialParams));
    }
    invokeCreateQuickConnect(partialParams) {
        return this.client.createQuickConnect(this.ops["CreateQuickConnect"].apply(partialParams));
    }
    invokeCreateRoutingProfile(partialParams) {
        return this.client.createRoutingProfile(this.ops["CreateRoutingProfile"].apply(partialParams));
    }
    invokeCreateSecurityProfile(partialParams) {
        return this.client.createSecurityProfile(this.ops["CreateSecurityProfile"].apply(partialParams));
    }
    invokeCreateUseCase(partialParams) {
        return this.client.createUseCase(this.ops["CreateUseCase"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateUserHierarchyGroup(partialParams) {
        return this.client.createUserHierarchyGroup(this.ops["CreateUserHierarchyGroup"].apply(partialParams));
    }
    invokeCreateVocabulary(partialParams) {
        return this.client.createVocabulary(this.ops["CreateVocabulary"].apply(partialParams));
    }
    invokeDeleteContactFlow(partialParams) {
        return this.client.deleteContactFlow(this.ops["DeleteContactFlow"].apply(partialParams));
    }
    invokeDeleteContactFlowModule(partialParams) {
        return this.client.deleteContactFlowModule(this.ops["DeleteContactFlowModule"].apply(partialParams));
    }
    invokeDeleteHoursOfOperation(partialParams) {
        return this.client.deleteHoursOfOperation(this.ops["DeleteHoursOfOperation"].apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        return this.client.deleteInstance(this.ops["DeleteInstance"].apply(partialParams));
    }
    invokeDeleteIntegrationAssociation(partialParams) {
        return this.client.deleteIntegrationAssociation(this.ops["DeleteIntegrationAssociation"].apply(partialParams));
    }
    invokeDeleteQuickConnect(partialParams) {
        return this.client.deleteQuickConnect(this.ops["DeleteQuickConnect"].apply(partialParams));
    }
    invokeDeleteSecurityProfile(partialParams) {
        return this.client.deleteSecurityProfile(this.ops["DeleteSecurityProfile"].apply(partialParams));
    }
    invokeDeleteUseCase(partialParams) {
        return this.client.deleteUseCase(this.ops["DeleteUseCase"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteUserHierarchyGroup(partialParams) {
        return this.client.deleteUserHierarchyGroup(this.ops["DeleteUserHierarchyGroup"].apply(partialParams));
    }
    invokeDeleteVocabulary(partialParams) {
        return this.client.deleteVocabulary(this.ops["DeleteVocabulary"].apply(partialParams));
    }
    invokeDescribeAgentStatus(partialParams) {
        return this.client.describeAgentStatus(this.ops["DescribeAgentStatus"].apply(partialParams));
    }
    invokeDescribeContact(partialParams) {
        return this.client.describeContact(this.ops["DescribeContact"].apply(partialParams));
    }
    invokeDescribeContactFlow(partialParams) {
        return this.client.describeContactFlow(this.ops["DescribeContactFlow"].apply(partialParams));
    }
    invokeDescribeContactFlowModule(partialParams) {
        return this.client.describeContactFlowModule(this.ops["DescribeContactFlowModule"].apply(partialParams));
    }
    invokeDescribeHoursOfOperation(partialParams) {
        return this.client.describeHoursOfOperation(this.ops["DescribeHoursOfOperation"].apply(partialParams));
    }
    invokeDescribeInstance(partialParams) {
        return this.client.describeInstance(this.ops["DescribeInstance"].apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].apply(partialParams));
    }
    invokeDescribeInstanceStorageConfig(partialParams) {
        return this.client.describeInstanceStorageConfig(this.ops["DescribeInstanceStorageConfig"].apply(partialParams));
    }
    invokeDescribeQueue(partialParams) {
        return this.client.describeQueue(this.ops["DescribeQueue"].apply(partialParams));
    }
    invokeDescribeQuickConnect(partialParams) {
        return this.client.describeQuickConnect(this.ops["DescribeQuickConnect"].apply(partialParams));
    }
    invokeDescribeRoutingProfile(partialParams) {
        return this.client.describeRoutingProfile(this.ops["DescribeRoutingProfile"].apply(partialParams));
    }
    invokeDescribeSecurityProfile(partialParams) {
        return this.client.describeSecurityProfile(this.ops["DescribeSecurityProfile"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeDescribeUserHierarchyGroup(partialParams) {
        return this.client.describeUserHierarchyGroup(this.ops["DescribeUserHierarchyGroup"].apply(partialParams));
    }
    invokeDescribeUserHierarchyStructure(partialParams) {
        return this.client.describeUserHierarchyStructure(this.ops["DescribeUserHierarchyStructure"].apply(partialParams));
    }
    invokeDescribeVocabulary(partialParams) {
        return this.client.describeVocabulary(this.ops["DescribeVocabulary"].apply(partialParams));
    }
    invokeDisassociateApprovedOrigin(partialParams) {
        return this.client.disassociateApprovedOrigin(this.ops["DisassociateApprovedOrigin"].apply(partialParams));
    }
    invokeDisassociateBot(partialParams) {
        return this.client.disassociateBot(this.ops["DisassociateBot"].apply(partialParams));
    }
    invokeDisassociateInstanceStorageConfig(partialParams) {
        return this.client.disassociateInstanceStorageConfig(this.ops["DisassociateInstanceStorageConfig"].apply(partialParams));
    }
    invokeDisassociateLambdaFunction(partialParams) {
        return this.client.disassociateLambdaFunction(this.ops["DisassociateLambdaFunction"].apply(partialParams));
    }
    invokeDisassociateLexBot(partialParams) {
        return this.client.disassociateLexBot(this.ops["DisassociateLexBot"].apply(partialParams));
    }
    invokeDisassociateQueueQuickConnects(partialParams) {
        return this.client.disassociateQueueQuickConnects(this.ops["DisassociateQueueQuickConnects"].apply(partialParams));
    }
    invokeDisassociateRoutingProfileQueues(partialParams) {
        return this.client.disassociateRoutingProfileQueues(this.ops["DisassociateRoutingProfileQueues"].apply(partialParams));
    }
    invokeDisassociateSecurityKey(partialParams) {
        return this.client.disassociateSecurityKey(this.ops["DisassociateSecurityKey"].apply(partialParams));
    }
    invokeGetContactAttributes(partialParams) {
        return this.client.getContactAttributes(this.ops["GetContactAttributes"].apply(partialParams));
    }
    invokeGetCurrentMetricData(partialParams) {
        return this.client.getCurrentMetricData(this.ops["GetCurrentMetricData"].apply(partialParams));
    }
    invokeGetFederationToken(partialParams) {
        return this.client.getFederationToken(this.ops["GetFederationToken"].apply(partialParams));
    }
    invokeGetMetricData(partialParams) {
        return this.client.getMetricData(this.ops["GetMetricData"].apply(partialParams));
    }
    invokeListAgentStatuses(partialParams) {
        return this.client.listAgentStatuses(this.ops["ListAgentStatuses"].apply(partialParams));
    }
    invokeListApprovedOrigins(partialParams) {
        return this.client.listApprovedOrigins(this.ops["ListApprovedOrigins"].apply(partialParams));
    }
    invokeListBots(partialParams) {
        return this.client.listBots(this.ops["ListBots"].apply(partialParams));
    }
    invokeListContactFlowModules(partialParams) {
        return this.client.listContactFlowModules(this.ops["ListContactFlowModules"].apply(partialParams));
    }
    invokeListContactFlows(partialParams) {
        return this.client.listContactFlows(this.ops["ListContactFlows"].apply(partialParams));
    }
    invokeListContactReferences(partialParams) {
        return this.client.listContactReferences(this.ops["ListContactReferences"].apply(partialParams));
    }
    invokeListDefaultVocabularies(partialParams) {
        return this.client.listDefaultVocabularies(this.ops["ListDefaultVocabularies"].apply(partialParams));
    }
    invokeListHoursOfOperations(partialParams) {
        return this.client.listHoursOfOperations(this.ops["ListHoursOfOperations"].apply(partialParams));
    }
    invokeListInstanceAttributes(partialParams) {
        return this.client.listInstanceAttributes(this.ops["ListInstanceAttributes"].apply(partialParams));
    }
    invokeListInstanceStorageConfigs(partialParams) {
        return this.client.listInstanceStorageConfigs(this.ops["ListInstanceStorageConfigs"].apply(partialParams));
    }
    invokeListIntegrationAssociations(partialParams) {
        return this.client.listIntegrationAssociations(this.ops["ListIntegrationAssociations"].apply(partialParams));
    }
    invokeListLambdaFunctions(partialParams) {
        return this.client.listLambdaFunctions(this.ops["ListLambdaFunctions"].apply(partialParams));
    }
    invokeListLexBots(partialParams) {
        return this.client.listLexBots(this.ops["ListLexBots"].apply(partialParams));
    }
    invokeListPhoneNumbers(partialParams) {
        return this.client.listPhoneNumbers(this.ops["ListPhoneNumbers"].apply(partialParams));
    }
    invokeListPrompts(partialParams) {
        return this.client.listPrompts(this.ops["ListPrompts"].apply(partialParams));
    }
    invokeListQueueQuickConnects(partialParams) {
        return this.client.listQueueQuickConnects(this.ops["ListQueueQuickConnects"].apply(partialParams));
    }
    invokeListQueues(partialParams) {
        return this.client.listQueues(this.ops["ListQueues"].apply(partialParams));
    }
    invokeListQuickConnects(partialParams) {
        return this.client.listQuickConnects(this.ops["ListQuickConnects"].apply(partialParams));
    }
    invokeListRoutingProfileQueues(partialParams) {
        return this.client.listRoutingProfileQueues(this.ops["ListRoutingProfileQueues"].apply(partialParams));
    }
    invokeListRoutingProfiles(partialParams) {
        return this.client.listRoutingProfiles(this.ops["ListRoutingProfiles"].apply(partialParams));
    }
    invokeListSecurityKeys(partialParams) {
        return this.client.listSecurityKeys(this.ops["ListSecurityKeys"].apply(partialParams));
    }
    invokeListSecurityProfilePermissions(partialParams) {
        return this.client.listSecurityProfilePermissions(this.ops["ListSecurityProfilePermissions"].apply(partialParams));
    }
    invokeListSecurityProfiles(partialParams) {
        return this.client.listSecurityProfiles(this.ops["ListSecurityProfiles"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUseCases(partialParams) {
        return this.client.listUseCases(this.ops["ListUseCases"].apply(partialParams));
    }
    invokeListUserHierarchyGroups(partialParams) {
        return this.client.listUserHierarchyGroups(this.ops["ListUserHierarchyGroups"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeResumeContactRecording(partialParams) {
        return this.client.resumeContactRecording(this.ops["ResumeContactRecording"].apply(partialParams));
    }
    invokeSearchVocabularies(partialParams) {
        return this.client.searchVocabularies(this.ops["SearchVocabularies"].apply(partialParams));
    }
    invokeStartChatContact(partialParams) {
        return this.client.startChatContact(this.ops["StartChatContact"].apply(partialParams));
    }
    invokeStartContactRecording(partialParams) {
        return this.client.startContactRecording(this.ops["StartContactRecording"].apply(partialParams));
    }
    invokeStartContactStreaming(partialParams) {
        return this.client.startContactStreaming(this.ops["StartContactStreaming"].apply(partialParams));
    }
    invokeStartOutboundVoiceContact(partialParams) {
        return this.client.startOutboundVoiceContact(this.ops["StartOutboundVoiceContact"].apply(partialParams));
    }
    invokeStartTaskContact(partialParams) {
        return this.client.startTaskContact(this.ops["StartTaskContact"].apply(partialParams));
    }
    invokeStopContact(partialParams) {
        return this.client.stopContact(this.ops["StopContact"].apply(partialParams));
    }
    invokeStopContactRecording(partialParams) {
        return this.client.stopContactRecording(this.ops["StopContactRecording"].apply(partialParams));
    }
    invokeStopContactStreaming(partialParams) {
        return this.client.stopContactStreaming(this.ops["StopContactStreaming"].apply(partialParams));
    }
    invokeSuspendContactRecording(partialParams) {
        return this.client.suspendContactRecording(this.ops["SuspendContactRecording"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAgentStatus(partialParams) {
        return this.client.updateAgentStatus(this.ops["UpdateAgentStatus"].apply(partialParams));
    }
    invokeUpdateContact(partialParams) {
        return this.client.updateContact(this.ops["UpdateContact"].apply(partialParams));
    }
    invokeUpdateContactAttributes(partialParams) {
        return this.client.updateContactAttributes(this.ops["UpdateContactAttributes"].apply(partialParams));
    }
    invokeUpdateContactFlowContent(partialParams) {
        return this.client.updateContactFlowContent(this.ops["UpdateContactFlowContent"].apply(partialParams));
    }
    invokeUpdateContactFlowMetadata(partialParams) {
        return this.client.updateContactFlowMetadata(this.ops["UpdateContactFlowMetadata"].apply(partialParams));
    }
    invokeUpdateContactFlowModuleContent(partialParams) {
        return this.client.updateContactFlowModuleContent(this.ops["UpdateContactFlowModuleContent"].apply(partialParams));
    }
    invokeUpdateContactFlowModuleMetadata(partialParams) {
        return this.client.updateContactFlowModuleMetadata(this.ops["UpdateContactFlowModuleMetadata"].apply(partialParams));
    }
    invokeUpdateContactFlowName(partialParams) {
        return this.client.updateContactFlowName(this.ops["UpdateContactFlowName"].apply(partialParams));
    }
    invokeUpdateContactSchedule(partialParams) {
        return this.client.updateContactSchedule(this.ops["UpdateContactSchedule"].apply(partialParams));
    }
    invokeUpdateHoursOfOperation(partialParams) {
        return this.client.updateHoursOfOperation(this.ops["UpdateHoursOfOperation"].apply(partialParams));
    }
    invokeUpdateInstanceAttribute(partialParams) {
        return this.client.updateInstanceAttribute(this.ops["UpdateInstanceAttribute"].apply(partialParams));
    }
    invokeUpdateInstanceStorageConfig(partialParams) {
        return this.client.updateInstanceStorageConfig(this.ops["UpdateInstanceStorageConfig"].apply(partialParams));
    }
    invokeUpdateQueueHoursOfOperation(partialParams) {
        return this.client.updateQueueHoursOfOperation(this.ops["UpdateQueueHoursOfOperation"].apply(partialParams));
    }
    invokeUpdateQueueMaxContacts(partialParams) {
        return this.client.updateQueueMaxContacts(this.ops["UpdateQueueMaxContacts"].apply(partialParams));
    }
    invokeUpdateQueueName(partialParams) {
        return this.client.updateQueueName(this.ops["UpdateQueueName"].apply(partialParams));
    }
    invokeUpdateQueueOutboundCallerConfig(partialParams) {
        return this.client.updateQueueOutboundCallerConfig(this.ops["UpdateQueueOutboundCallerConfig"].apply(partialParams));
    }
    invokeUpdateQueueStatus(partialParams) {
        return this.client.updateQueueStatus(this.ops["UpdateQueueStatus"].apply(partialParams));
    }
    invokeUpdateQuickConnectConfig(partialParams) {
        return this.client.updateQuickConnectConfig(this.ops["UpdateQuickConnectConfig"].apply(partialParams));
    }
    invokeUpdateQuickConnectName(partialParams) {
        return this.client.updateQuickConnectName(this.ops["UpdateQuickConnectName"].apply(partialParams));
    }
    invokeUpdateRoutingProfileConcurrency(partialParams) {
        return this.client.updateRoutingProfileConcurrency(this.ops["UpdateRoutingProfileConcurrency"].apply(partialParams));
    }
    invokeUpdateRoutingProfileDefaultOutboundQueue(partialParams) {
        return this.client.updateRoutingProfileDefaultOutboundQueue(this.ops["UpdateRoutingProfileDefaultOutboundQueue"].apply(partialParams));
    }
    invokeUpdateRoutingProfileName(partialParams) {
        return this.client.updateRoutingProfileName(this.ops["UpdateRoutingProfileName"].apply(partialParams));
    }
    invokeUpdateRoutingProfileQueues(partialParams) {
        return this.client.updateRoutingProfileQueues(this.ops["UpdateRoutingProfileQueues"].apply(partialParams));
    }
    invokeUpdateSecurityProfile(partialParams) {
        return this.client.updateSecurityProfile(this.ops["UpdateSecurityProfile"].apply(partialParams));
    }
    invokeUpdateUserHierarchy(partialParams) {
        return this.client.updateUserHierarchy(this.ops["UpdateUserHierarchy"].apply(partialParams));
    }
    invokeUpdateUserHierarchyGroupName(partialParams) {
        return this.client.updateUserHierarchyGroupName(this.ops["UpdateUserHierarchyGroupName"].apply(partialParams));
    }
    invokeUpdateUserHierarchyStructure(partialParams) {
        return this.client.updateUserHierarchyStructure(this.ops["UpdateUserHierarchyStructure"].apply(partialParams));
    }
    invokeUpdateUserIdentityInfo(partialParams) {
        return this.client.updateUserIdentityInfo(this.ops["UpdateUserIdentityInfo"].apply(partialParams));
    }
    invokeUpdateUserPhoneConfig(partialParams) {
        return this.client.updateUserPhoneConfig(this.ops["UpdateUserPhoneConfig"].apply(partialParams));
    }
    invokeUpdateUserRoutingProfile(partialParams) {
        return this.client.updateUserRoutingProfile(this.ops["UpdateUserRoutingProfile"].apply(partialParams));
    }
    invokeUpdateUserSecurityProfiles(partialParams) {
        return this.client.updateUserSecurityProfiles(this.ops["UpdateUserSecurityProfiles"].apply(partialParams));
    }
}
exports.default = default_1;
