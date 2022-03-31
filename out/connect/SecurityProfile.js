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
class default_1 extends aws.connect.SecurityProfile {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.Connect();
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
    invokeAssociateApprovedOrigin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApprovedOrigin(this.ops["AssociateApprovedOrigin"].applicator.apply(partialParams));
    }
    invokeAssociateBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateBot(this.ops["AssociateBot"].applicator.apply(partialParams));
    }
    invokeAssociateDefaultVocabulary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateDefaultVocabulary(this.ops["AssociateDefaultVocabulary"].applicator.apply(partialParams));
    }
    invokeAssociateInstanceStorageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateInstanceStorageConfig(this.ops["AssociateInstanceStorageConfig"].applicator.apply(partialParams));
    }
    invokeAssociateLambdaFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateLambdaFunction(this.ops["AssociateLambdaFunction"].applicator.apply(partialParams));
    }
    invokeAssociateLexBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateLexBot(this.ops["AssociateLexBot"].applicator.apply(partialParams));
    }
    invokeAssociateQueueQuickConnects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateQueueQuickConnects(this.ops["AssociateQueueQuickConnects"].applicator.apply(partialParams));
    }
    invokeAssociateRoutingProfileQueues(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateRoutingProfileQueues(this.ops["AssociateRoutingProfileQueues"].applicator.apply(partialParams));
    }
    invokeAssociateSecurityKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateSecurityKey(this.ops["AssociateSecurityKey"].applicator.apply(partialParams));
    }
    invokeCreateAgentStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAgentStatus(this.ops["CreateAgentStatus"].applicator.apply(partialParams));
    }
    invokeCreateContactFlow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContactFlow(this.ops["CreateContactFlow"].applicator.apply(partialParams));
    }
    invokeCreateContactFlowModule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createContactFlowModule(this.ops["CreateContactFlowModule"].applicator.apply(partialParams));
    }
    invokeCreateHoursOfOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createHoursOfOperation(this.ops["CreateHoursOfOperation"].applicator.apply(partialParams));
    }
    invokeCreateInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createInstance(this.ops["CreateInstance"].applicator.apply(partialParams));
    }
    invokeCreateIntegrationAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIntegrationAssociation(this.ops["CreateIntegrationAssociation"].applicator.apply(partialParams));
    }
    invokeCreateQueue(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQueue(this.ops["CreateQueue"].applicator.apply(partialParams));
    }
    invokeCreateQuickConnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createQuickConnect(this.ops["CreateQuickConnect"].applicator.apply(partialParams));
    }
    invokeCreateRoutingProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRoutingProfile(this.ops["CreateRoutingProfile"].applicator.apply(partialParams));
    }
    invokeCreateSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createSecurityProfile(this.ops["CreateSecurityProfile"].applicator.apply(partialParams));
    }
    invokeCreateUseCase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUseCase(this.ops["CreateUseCase"].applicator.apply(partialParams));
    }
    invokeCreateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUser(this.ops["CreateUser"].applicator.apply(partialParams));
    }
    invokeCreateUserHierarchyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUserHierarchyGroup(this.ops["CreateUserHierarchyGroup"].applicator.apply(partialParams));
    }
    invokeCreateVocabulary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createVocabulary(this.ops["CreateVocabulary"].applicator.apply(partialParams));
    }
    invokeDeleteContactFlow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContactFlow(this.ops["DeleteContactFlow"].applicator.apply(partialParams));
    }
    invokeDeleteContactFlowModule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteContactFlowModule(this.ops["DeleteContactFlowModule"].applicator.apply(partialParams));
    }
    invokeDeleteHoursOfOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteHoursOfOperation(this.ops["DeleteHoursOfOperation"].applicator.apply(partialParams));
    }
    invokeDeleteInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteInstance(this.ops["DeleteInstance"].applicator.apply(partialParams));
    }
    invokeDeleteIntegrationAssociation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIntegrationAssociation(this.ops["DeleteIntegrationAssociation"].applicator.apply(partialParams));
    }
    invokeDeleteQuickConnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteQuickConnect(this.ops["DeleteQuickConnect"].applicator.apply(partialParams));
    }
    invokeDeleteSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteSecurityProfile(this.ops["DeleteSecurityProfile"].applicator.apply(partialParams));
    }
    invokeDeleteUseCase(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUseCase(this.ops["DeleteUseCase"].applicator.apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].applicator.apply(partialParams));
    }
    invokeDeleteUserHierarchyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserHierarchyGroup(this.ops["DeleteUserHierarchyGroup"].applicator.apply(partialParams));
    }
    invokeDeleteVocabulary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteVocabulary(this.ops["DeleteVocabulary"].applicator.apply(partialParams));
    }
    invokeDescribeAgentStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAgentStatus(this.ops["DescribeAgentStatus"].applicator.apply(partialParams));
    }
    invokeDescribeContact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContact(this.ops["DescribeContact"].applicator.apply(partialParams));
    }
    invokeDescribeContactFlow(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContactFlow(this.ops["DescribeContactFlow"].applicator.apply(partialParams));
    }
    invokeDescribeContactFlowModule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeContactFlowModule(this.ops["DescribeContactFlowModule"].applicator.apply(partialParams));
    }
    invokeDescribeHoursOfOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeHoursOfOperation(this.ops["DescribeHoursOfOperation"].applicator.apply(partialParams));
    }
    invokeDescribeInstance(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstance(this.ops["DescribeInstance"].applicator.apply(partialParams));
    }
    invokeDescribeInstanceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceAttribute(this.ops["DescribeInstanceAttribute"].applicator.apply(partialParams));
    }
    invokeDescribeInstanceStorageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeInstanceStorageConfig(this.ops["DescribeInstanceStorageConfig"].applicator.apply(partialParams));
    }
    invokeDescribeQueue(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeQueue(this.ops["DescribeQueue"].applicator.apply(partialParams));
    }
    invokeDescribeQuickConnect(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeQuickConnect(this.ops["DescribeQuickConnect"].applicator.apply(partialParams));
    }
    invokeDescribeRoutingProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeRoutingProfile(this.ops["DescribeRoutingProfile"].applicator.apply(partialParams));
    }
    invokeDescribeSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeSecurityProfile(this.ops["DescribeSecurityProfile"].applicator.apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUser(this.ops["DescribeUser"].applicator.apply(partialParams));
    }
    invokeDescribeUserHierarchyGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUserHierarchyGroup(this.ops["DescribeUserHierarchyGroup"].applicator.apply(partialParams));
    }
    invokeDescribeUserHierarchyStructure(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUserHierarchyStructure(this.ops["DescribeUserHierarchyStructure"].applicator.apply(partialParams));
    }
    invokeDescribeVocabulary(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeVocabulary(this.ops["DescribeVocabulary"].applicator.apply(partialParams));
    }
    invokeDisassociateApprovedOrigin(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApprovedOrigin(this.ops["DisassociateApprovedOrigin"].applicator.apply(partialParams));
    }
    invokeDisassociateBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateBot(this.ops["DisassociateBot"].applicator.apply(partialParams));
    }
    invokeDisassociateInstanceStorageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateInstanceStorageConfig(this.ops["DisassociateInstanceStorageConfig"].applicator.apply(partialParams));
    }
    invokeDisassociateLambdaFunction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateLambdaFunction(this.ops["DisassociateLambdaFunction"].applicator.apply(partialParams));
    }
    invokeDisassociateLexBot(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateLexBot(this.ops["DisassociateLexBot"].applicator.apply(partialParams));
    }
    invokeDisassociateQueueQuickConnects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateQueueQuickConnects(this.ops["DisassociateQueueQuickConnects"].applicator.apply(partialParams));
    }
    invokeDisassociateRoutingProfileQueues(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateRoutingProfileQueues(this.ops["DisassociateRoutingProfileQueues"].applicator.apply(partialParams));
    }
    invokeDisassociateSecurityKey(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateSecurityKey(this.ops["DisassociateSecurityKey"].applicator.apply(partialParams));
    }
    invokeGetContactAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getContactAttributes(this.ops["GetContactAttributes"].applicator.apply(partialParams));
    }
    invokeGetCurrentMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCurrentMetricData(this.ops["GetCurrentMetricData"].applicator.apply(partialParams));
    }
    invokeGetFederationToken(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFederationToken(this.ops["GetFederationToken"].applicator.apply(partialParams));
    }
    invokeGetMetricData(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMetricData(this.ops["GetMetricData"].applicator.apply(partialParams));
    }
    invokeListAgentStatuses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAgentStatuses(this.ops["ListAgentStatuses"].applicator.apply(partialParams));
    }
    invokeListApprovedOrigins(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listApprovedOrigins(this.ops["ListApprovedOrigins"].applicator.apply(partialParams));
    }
    invokeListBots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBots(this.ops["ListBots"].applicator.apply(partialParams));
    }
    invokeListContactFlowModules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listContactFlowModules(this.ops["ListContactFlowModules"].applicator.apply(partialParams));
    }
    invokeListContactFlows(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listContactFlows(this.ops["ListContactFlows"].applicator.apply(partialParams));
    }
    invokeListContactReferences(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listContactReferences(this.ops["ListContactReferences"].applicator.apply(partialParams));
    }
    invokeListDefaultVocabularies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDefaultVocabularies(this.ops["ListDefaultVocabularies"].applicator.apply(partialParams));
    }
    invokeListHoursOfOperations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listHoursOfOperations(this.ops["ListHoursOfOperations"].applicator.apply(partialParams));
    }
    invokeListInstanceAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceAttributes(this.ops["ListInstanceAttributes"].applicator.apply(partialParams));
    }
    invokeListInstanceStorageConfigs(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listInstanceStorageConfigs(this.ops["ListInstanceStorageConfigs"].applicator.apply(partialParams));
    }
    invokeListIntegrationAssociations(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIntegrationAssociations(this.ops["ListIntegrationAssociations"].applicator.apply(partialParams));
    }
    invokeListLambdaFunctions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLambdaFunctions(this.ops["ListLambdaFunctions"].applicator.apply(partialParams));
    }
    invokeListLexBots(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listLexBots(this.ops["ListLexBots"].applicator.apply(partialParams));
    }
    invokeListPhoneNumbers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPhoneNumbers(this.ops["ListPhoneNumbers"].applicator.apply(partialParams));
    }
    invokeListPrompts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPrompts(this.ops["ListPrompts"].applicator.apply(partialParams));
    }
    invokeListQueueQuickConnects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQueueQuickConnects(this.ops["ListQueueQuickConnects"].applicator.apply(partialParams));
    }
    invokeListQueues(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQueues(this.ops["ListQueues"].applicator.apply(partialParams));
    }
    invokeListQuickConnects(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listQuickConnects(this.ops["ListQuickConnects"].applicator.apply(partialParams));
    }
    invokeListRoutingProfileQueues(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoutingProfileQueues(this.ops["ListRoutingProfileQueues"].applicator.apply(partialParams));
    }
    invokeListRoutingProfiles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRoutingProfiles(this.ops["ListRoutingProfiles"].applicator.apply(partialParams));
    }
    invokeListSecurityKeys(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityKeys(this.ops["ListSecurityKeys"].applicator.apply(partialParams));
    }
    invokeListSecurityProfilePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityProfilePermissions(this.ops["ListSecurityProfilePermissions"].applicator.apply(partialParams));
    }
    invokeListSecurityProfiles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listSecurityProfiles(this.ops["ListSecurityProfiles"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListUseCases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUseCases(this.ops["ListUseCases"].applicator.apply(partialParams));
    }
    invokeListUserHierarchyGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserHierarchyGroups(this.ops["ListUserHierarchyGroups"].applicator.apply(partialParams));
    }
    invokeListUsers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].applicator.apply(partialParams));
    }
    invokeResumeContactRecording(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.resumeContactRecording(this.ops["ResumeContactRecording"].applicator.apply(partialParams));
    }
    invokeSearchVocabularies(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchVocabularies(this.ops["SearchVocabularies"].applicator.apply(partialParams));
    }
    invokeStartChatContact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startChatContact(this.ops["StartChatContact"].applicator.apply(partialParams));
    }
    invokeStartContactRecording(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startContactRecording(this.ops["StartContactRecording"].applicator.apply(partialParams));
    }
    invokeStartContactStreaming(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startContactStreaming(this.ops["StartContactStreaming"].applicator.apply(partialParams));
    }
    invokeStartOutboundVoiceContact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startOutboundVoiceContact(this.ops["StartOutboundVoiceContact"].applicator.apply(partialParams));
    }
    invokeStartTaskContact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.startTaskContact(this.ops["StartTaskContact"].applicator.apply(partialParams));
    }
    invokeStopContact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopContact(this.ops["StopContact"].applicator.apply(partialParams));
    }
    invokeStopContactRecording(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopContactRecording(this.ops["StopContactRecording"].applicator.apply(partialParams));
    }
    invokeStopContactStreaming(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.stopContactStreaming(this.ops["StopContactStreaming"].applicator.apply(partialParams));
    }
    invokeSuspendContactRecording(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.suspendContactRecording(this.ops["SuspendContactRecording"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateAgentStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAgentStatus(this.ops["UpdateAgentStatus"].applicator.apply(partialParams));
    }
    invokeUpdateContact(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContact(this.ops["UpdateContact"].applicator.apply(partialParams));
    }
    invokeUpdateContactAttributes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactAttributes(this.ops["UpdateContactAttributes"].applicator.apply(partialParams));
    }
    invokeUpdateContactFlowContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowContent(this.ops["UpdateContactFlowContent"].applicator.apply(partialParams));
    }
    invokeUpdateContactFlowMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowMetadata(this.ops["UpdateContactFlowMetadata"].applicator.apply(partialParams));
    }
    invokeUpdateContactFlowModuleContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowModuleContent(this.ops["UpdateContactFlowModuleContent"].applicator.apply(partialParams));
    }
    invokeUpdateContactFlowModuleMetadata(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowModuleMetadata(this.ops["UpdateContactFlowModuleMetadata"].applicator.apply(partialParams));
    }
    invokeUpdateContactFlowName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactFlowName(this.ops["UpdateContactFlowName"].applicator.apply(partialParams));
    }
    invokeUpdateContactSchedule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateContactSchedule(this.ops["UpdateContactSchedule"].applicator.apply(partialParams));
    }
    invokeUpdateHoursOfOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateHoursOfOperation(this.ops["UpdateHoursOfOperation"].applicator.apply(partialParams));
    }
    invokeUpdateInstanceAttribute(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceAttribute(this.ops["UpdateInstanceAttribute"].applicator.apply(partialParams));
    }
    invokeUpdateInstanceStorageConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateInstanceStorageConfig(this.ops["UpdateInstanceStorageConfig"].applicator.apply(partialParams));
    }
    invokeUpdateQueueHoursOfOperation(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueHoursOfOperation(this.ops["UpdateQueueHoursOfOperation"].applicator.apply(partialParams));
    }
    invokeUpdateQueueMaxContacts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueMaxContacts(this.ops["UpdateQueueMaxContacts"].applicator.apply(partialParams));
    }
    invokeUpdateQueueName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueName(this.ops["UpdateQueueName"].applicator.apply(partialParams));
    }
    invokeUpdateQueueOutboundCallerConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueOutboundCallerConfig(this.ops["UpdateQueueOutboundCallerConfig"].applicator.apply(partialParams));
    }
    invokeUpdateQueueStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQueueStatus(this.ops["UpdateQueueStatus"].applicator.apply(partialParams));
    }
    invokeUpdateQuickConnectConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQuickConnectConfig(this.ops["UpdateQuickConnectConfig"].applicator.apply(partialParams));
    }
    invokeUpdateQuickConnectName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateQuickConnectName(this.ops["UpdateQuickConnectName"].applicator.apply(partialParams));
    }
    invokeUpdateRoutingProfileConcurrency(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileConcurrency(this.ops["UpdateRoutingProfileConcurrency"].applicator.apply(partialParams));
    }
    invokeUpdateRoutingProfileDefaultOutboundQueue(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileDefaultOutboundQueue(this.ops["UpdateRoutingProfileDefaultOutboundQueue"].applicator.apply(partialParams));
    }
    invokeUpdateRoutingProfileName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileName(this.ops["UpdateRoutingProfileName"].applicator.apply(partialParams));
    }
    invokeUpdateRoutingProfileQueues(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRoutingProfileQueues(this.ops["UpdateRoutingProfileQueues"].applicator.apply(partialParams));
    }
    invokeUpdateSecurityProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateSecurityProfile(this.ops["UpdateSecurityProfile"].applicator.apply(partialParams));
    }
    invokeUpdateUserHierarchy(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserHierarchy(this.ops["UpdateUserHierarchy"].applicator.apply(partialParams));
    }
    invokeUpdateUserHierarchyGroupName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserHierarchyGroupName(this.ops["UpdateUserHierarchyGroupName"].applicator.apply(partialParams));
    }
    invokeUpdateUserHierarchyStructure(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserHierarchyStructure(this.ops["UpdateUserHierarchyStructure"].applicator.apply(partialParams));
    }
    invokeUpdateUserIdentityInfo(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserIdentityInfo(this.ops["UpdateUserIdentityInfo"].applicator.apply(partialParams));
    }
    invokeUpdateUserPhoneConfig(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserPhoneConfig(this.ops["UpdateUserPhoneConfig"].applicator.apply(partialParams));
    }
    invokeUpdateUserRoutingProfile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserRoutingProfile(this.ops["UpdateUserRoutingProfile"].applicator.apply(partialParams));
    }
    invokeUpdateUserSecurityProfiles(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUserSecurityProfiles(this.ops["UpdateUserSecurityProfiles"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
