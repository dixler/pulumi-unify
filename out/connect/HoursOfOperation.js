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
const schema = require("../apis/connect-2017-08-08.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.connect.HoursOfOperation {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.Connect();
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
    invokeAssociateDefaultVocabulary(partialParams) {
        this.boot();
        return this.client.associateDefaultVocabulary(this.ops["AssociateDefaultVocabulary"].apply(partialParams));
    }
    invokeAssociateInstanceStorageConfig(partialParams) {
        this.boot();
        return this.client.associateInstanceStorageConfig(this.ops["AssociateInstanceStorageConfig"].apply(partialParams));
    }
    invokeAssociateSecurityKey(partialParams) {
        this.boot();
        return this.client.associateSecurityKey(this.ops["AssociateSecurityKey"].apply(partialParams));
    }
    invokeCreateAgentStatus(partialParams) {
        this.boot();
        return this.client.createAgentStatus(this.ops["CreateAgentStatus"].apply(partialParams));
    }
    invokeCreateContactFlow(partialParams) {
        this.boot();
        return this.client.createContactFlow(this.ops["CreateContactFlow"].apply(partialParams));
    }
    invokeCreateContactFlowModule(partialParams) {
        this.boot();
        return this.client.createContactFlowModule(this.ops["CreateContactFlowModule"].apply(partialParams));
    }
    invokeCreateHoursOfOperation(partialParams) {
        this.boot();
        return this.client.createHoursOfOperation(this.ops["CreateHoursOfOperation"].apply(partialParams));
    }
    invokeCreateInstance(partialParams) {
        this.boot();
        return this.client.createInstance(this.ops["CreateInstance"].apply(partialParams));
    }
    invokeCreateIntegrationAssociation(partialParams) {
        this.boot();
        return this.client.createIntegrationAssociation(this.ops["CreateIntegrationAssociation"].apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        this.boot();
        return this.client.createQueue(this.ops["CreateQueue"].apply(partialParams));
    }
    invokeCreateQuickConnect(partialParams) {
        this.boot();
        return this.client.createQuickConnect(this.ops["CreateQuickConnect"].apply(partialParams));
    }
    invokeCreateRoutingProfile(partialParams) {
        this.boot();
        return this.client.createRoutingProfile(this.ops["CreateRoutingProfile"].apply(partialParams));
    }
    invokeCreateSecurityProfile(partialParams) {
        this.boot();
        return this.client.createSecurityProfile(this.ops["CreateSecurityProfile"].apply(partialParams));
    }
    invokeCreateUseCase(partialParams) {
        this.boot();
        return this.client.createUseCase(this.ops["CreateUseCase"].apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].apply(partialParams));
    }
    invokeCreateUserHierarchyGroup(partialParams) {
        this.boot();
        return this.client.createUserHierarchyGroup(this.ops["CreateUserHierarchyGroup"].apply(partialParams));
    }
    invokeCreateVocabulary(partialParams) {
        this.boot();
        return this.client.createVocabulary(this.ops["CreateVocabulary"].apply(partialParams));
    }
    invokeDeleteContactFlowModule(partialParams) {
        this.boot();
        return this.client.deleteContactFlowModule(this.ops["DeleteContactFlowModule"].apply(partialParams));
    }
    invokeDeleteVocabulary(partialParams) {
        this.boot();
        return this.client.deleteVocabulary(this.ops["DeleteVocabulary"].apply(partialParams));
    }
    invokeDescribeAgentStatus(partialParams) {
        this.boot();
        return this.client.describeAgentStatus(this.ops["DescribeAgentStatus"].apply(partialParams));
    }
    invokeDescribeContact(partialParams) {
        this.boot();
        return this.client.describeContact(this.ops["DescribeContact"].apply(partialParams));
    }
    invokeDescribeContactFlow(partialParams) {
        this.boot();
        return this.client.describeContactFlow(this.ops["DescribeContactFlow"].apply(partialParams));
    }
    invokeDescribeContactFlowModule(partialParams) {
        this.boot();
        return this.client.describeContactFlowModule(this.ops["DescribeContactFlowModule"].apply(partialParams));
    }
    invokeDescribeHoursOfOperation(partialParams) {
        this.boot();
        return this.client.describeHoursOfOperation(this.ops["DescribeHoursOfOperation"].apply(partialParams));
    }
    invokeDescribeInstance(partialParams) {
        this.boot();
        return this.client.describeInstance(this.ops["DescribeInstance"].apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        this.boot();
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].apply(partialParams));
    }
    invokeDescribeInstanceStorageConfig(partialParams) {
        this.boot();
        return this.client.describeInstanceStorageConfig(this.ops["DescribeInstanceStorageConfig"].apply(partialParams));
    }
    invokeDescribeQueue(partialParams) {
        this.boot();
        return this.client.describeQueue(this.ops["DescribeQueue"].apply(partialParams));
    }
    invokeDescribeQuickConnect(partialParams) {
        this.boot();
        return this.client.describeQuickConnect(this.ops["DescribeQuickConnect"].apply(partialParams));
    }
    invokeDescribeRoutingProfile(partialParams) {
        this.boot();
        return this.client.describeRoutingProfile(this.ops["DescribeRoutingProfile"].apply(partialParams));
    }
    invokeDescribeSecurityProfile(partialParams) {
        this.boot();
        return this.client.describeSecurityProfile(this.ops["DescribeSecurityProfile"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        this.boot();
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeDescribeUserHierarchyGroup(partialParams) {
        this.boot();
        return this.client.describeUserHierarchyGroup(this.ops["DescribeUserHierarchyGroup"].apply(partialParams));
    }
    invokeDescribeUserHierarchyStructure(partialParams) {
        this.boot();
        return this.client.describeUserHierarchyStructure(this.ops["DescribeUserHierarchyStructure"].apply(partialParams));
    }
    invokeDescribeVocabulary(partialParams) {
        this.boot();
        return this.client.describeVocabulary(this.ops["DescribeVocabulary"].apply(partialParams));
    }
    invokeGetContactAttributes(partialParams) {
        this.boot();
        return this.client.getContactAttributes(this.ops["GetContactAttributes"].apply(partialParams));
    }
    invokeGetCurrentMetricData(partialParams) {
        this.boot();
        return this.client.getCurrentMetricData(this.ops["GetCurrentMetricData"].apply(partialParams));
    }
    invokeGetFederationToken(partialParams) {
        this.boot();
        return this.client.getFederationToken(this.ops["GetFederationToken"].apply(partialParams));
    }
    invokeGetMetricData(partialParams) {
        this.boot();
        return this.client.getMetricData(this.ops["GetMetricData"].apply(partialParams));
    }
    invokeListAgentStatuses(partialParams) {
        this.boot();
        return this.client.listAgentStatuses(this.ops["ListAgentStatuses"].apply(partialParams));
    }
    invokeListApprovedOrigins(partialParams) {
        this.boot();
        return this.client.listApprovedOrigins(this.ops["ListApprovedOrigins"].apply(partialParams));
    }
    invokeListBots(partialParams) {
        this.boot();
        return this.client.listBots(this.ops["ListBots"].apply(partialParams));
    }
    invokeListContactFlowModules(partialParams) {
        this.boot();
        return this.client.listContactFlowModules(this.ops["ListContactFlowModules"].apply(partialParams));
    }
    invokeListContactFlows(partialParams) {
        this.boot();
        return this.client.listContactFlows(this.ops["ListContactFlows"].apply(partialParams));
    }
    invokeListContactReferences(partialParams) {
        this.boot();
        return this.client.listContactReferences(this.ops["ListContactReferences"].apply(partialParams));
    }
    invokeListDefaultVocabularies(partialParams) {
        this.boot();
        return this.client.listDefaultVocabularies(this.ops["ListDefaultVocabularies"].apply(partialParams));
    }
    invokeListHoursOfOperations(partialParams) {
        this.boot();
        return this.client.listHoursOfOperations(this.ops["ListHoursOfOperations"].apply(partialParams));
    }
    invokeListInstanceAttributes(partialParams) {
        this.boot();
        return this.client.listInstanceAttributes(this.ops["ListInstanceAttributes"].apply(partialParams));
    }
    invokeListInstanceStorageConfigs(partialParams) {
        this.boot();
        return this.client.listInstanceStorageConfigs(this.ops["ListInstanceStorageConfigs"].apply(partialParams));
    }
    invokeListInstances(partialParams) {
        this.boot();
        return this.client.listInstances(this.ops["ListInstances"].apply(partialParams));
    }
    invokeListIntegrationAssociations(partialParams) {
        this.boot();
        return this.client.listIntegrationAssociations(this.ops["ListIntegrationAssociations"].apply(partialParams));
    }
    invokeListLambdaFunctions(partialParams) {
        this.boot();
        return this.client.listLambdaFunctions(this.ops["ListLambdaFunctions"].apply(partialParams));
    }
    invokeListLexBots(partialParams) {
        this.boot();
        return this.client.listLexBots(this.ops["ListLexBots"].apply(partialParams));
    }
    invokeListPhoneNumbers(partialParams) {
        this.boot();
        return this.client.listPhoneNumbers(this.ops["ListPhoneNumbers"].apply(partialParams));
    }
    invokeListPrompts(partialParams) {
        this.boot();
        return this.client.listPrompts(this.ops["ListPrompts"].apply(partialParams));
    }
    invokeListQueueQuickConnects(partialParams) {
        this.boot();
        return this.client.listQueueQuickConnects(this.ops["ListQueueQuickConnects"].apply(partialParams));
    }
    invokeListQueues(partialParams) {
        this.boot();
        return this.client.listQueues(this.ops["ListQueues"].apply(partialParams));
    }
    invokeListQuickConnects(partialParams) {
        this.boot();
        return this.client.listQuickConnects(this.ops["ListQuickConnects"].apply(partialParams));
    }
    invokeListRoutingProfileQueues(partialParams) {
        this.boot();
        return this.client.listRoutingProfileQueues(this.ops["ListRoutingProfileQueues"].apply(partialParams));
    }
    invokeListRoutingProfiles(partialParams) {
        this.boot();
        return this.client.listRoutingProfiles(this.ops["ListRoutingProfiles"].apply(partialParams));
    }
    invokeListSecurityKeys(partialParams) {
        this.boot();
        return this.client.listSecurityKeys(this.ops["ListSecurityKeys"].apply(partialParams));
    }
    invokeListSecurityProfilePermissions(partialParams) {
        this.boot();
        return this.client.listSecurityProfilePermissions(this.ops["ListSecurityProfilePermissions"].apply(partialParams));
    }
    invokeListSecurityProfiles(partialParams) {
        this.boot();
        return this.client.listSecurityProfiles(this.ops["ListSecurityProfiles"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListUseCases(partialParams) {
        this.boot();
        return this.client.listUseCases(this.ops["ListUseCases"].apply(partialParams));
    }
    invokeListUserHierarchyGroups(partialParams) {
        this.boot();
        return this.client.listUserHierarchyGroups(this.ops["ListUserHierarchyGroups"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeResumeContactRecording(partialParams) {
        this.boot();
        return this.client.resumeContactRecording(this.ops["ResumeContactRecording"].apply(partialParams));
    }
    invokeSearchVocabularies(partialParams) {
        this.boot();
        return this.client.searchVocabularies(this.ops["SearchVocabularies"].apply(partialParams));
    }
    invokeStartChatContact(partialParams) {
        this.boot();
        return this.client.startChatContact(this.ops["StartChatContact"].apply(partialParams));
    }
    invokeStartContactRecording(partialParams) {
        this.boot();
        return this.client.startContactRecording(this.ops["StartContactRecording"].apply(partialParams));
    }
    invokeStartContactStreaming(partialParams) {
        this.boot();
        return this.client.startContactStreaming(this.ops["StartContactStreaming"].apply(partialParams));
    }
    invokeStartOutboundVoiceContact(partialParams) {
        this.boot();
        return this.client.startOutboundVoiceContact(this.ops["StartOutboundVoiceContact"].apply(partialParams));
    }
    invokeStartTaskContact(partialParams) {
        this.boot();
        return this.client.startTaskContact(this.ops["StartTaskContact"].apply(partialParams));
    }
    invokeStopContact(partialParams) {
        this.boot();
        return this.client.stopContact(this.ops["StopContact"].apply(partialParams));
    }
    invokeStopContactRecording(partialParams) {
        this.boot();
        return this.client.stopContactRecording(this.ops["StopContactRecording"].apply(partialParams));
    }
    invokeStopContactStreaming(partialParams) {
        this.boot();
        return this.client.stopContactStreaming(this.ops["StopContactStreaming"].apply(partialParams));
    }
    invokeSuspendContactRecording(partialParams) {
        this.boot();
        return this.client.suspendContactRecording(this.ops["SuspendContactRecording"].apply(partialParams));
    }
    invokeUpdateContact(partialParams) {
        this.boot();
        return this.client.updateContact(this.ops["UpdateContact"].apply(partialParams));
    }
    invokeUpdateContactAttributes(partialParams) {
        this.boot();
        return this.client.updateContactAttributes(this.ops["UpdateContactAttributes"].apply(partialParams));
    }
    invokeUpdateContactFlowModuleContent(partialParams) {
        this.boot();
        return this.client.updateContactFlowModuleContent(this.ops["UpdateContactFlowModuleContent"].apply(partialParams));
    }
    invokeUpdateContactFlowModuleMetadata(partialParams) {
        this.boot();
        return this.client.updateContactFlowModuleMetadata(this.ops["UpdateContactFlowModuleMetadata"].apply(partialParams));
    }
    invokeUpdateContactSchedule(partialParams) {
        this.boot();
        return this.client.updateContactSchedule(this.ops["UpdateContactSchedule"].apply(partialParams));
    }
}
exports.default = default_1;
