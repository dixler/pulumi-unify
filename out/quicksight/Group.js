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
class default_1 extends aws.quicksight.Group {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.QuickSight();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/quicksight-2018-04-01.normal.json"), this.client);
    }
    invokeCancelIngestion(partialParams) {
        return this.client.cancelIngestion(this.ops["CancelIngestion"].apply(partialParams));
    }
    invokeCreateAccountCustomization(partialParams) {
        return this.client.createAccountCustomization(this.ops["CreateAccountCustomization"].apply(partialParams));
    }
    invokeCreateAnalysis(partialParams) {
        return this.client.createAnalysis(this.ops["CreateAnalysis"].apply(partialParams));
    }
    invokeCreateDashboard(partialParams) {
        return this.client.createDashboard(this.ops["CreateDashboard"].apply(partialParams));
    }
    invokeCreateDataSet(partialParams) {
        return this.client.createDataSet(this.ops["CreateDataSet"].apply(partialParams));
    }
    invokeCreateDataSource(partialParams) {
        return this.client.createDataSource(this.ops["CreateDataSource"].apply(partialParams));
    }
    invokeCreateFolder(partialParams) {
        return this.client.createFolder(this.ops["CreateFolder"].apply(partialParams));
    }
    invokeCreateFolderMembership(partialParams) {
        return this.client.createFolderMembership(this.ops["CreateFolderMembership"].apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        return this.client.createGroup(this.ops["CreateGroup"].apply(partialParams));
    }
    invokeCreateGroupMembership(partialParams) {
        return this.client.createGroupMembership(this.ops["CreateGroupMembership"].apply(partialParams));
    }
    invokeCreateIAMPolicyAssignment(partialParams) {
        return this.client.createIAMPolicyAssignment(this.ops["CreateIAMPolicyAssignment"].apply(partialParams));
    }
    invokeCreateIngestion(partialParams) {
        return this.client.createIngestion(this.ops["CreateIngestion"].apply(partialParams));
    }
    invokeCreateNamespace(partialParams) {
        return this.client.createNamespace(this.ops["CreateNamespace"].apply(partialParams));
    }
    invokeCreateTemplate(partialParams) {
        return this.client.createTemplate(this.ops["CreateTemplate"].apply(partialParams));
    }
    invokeCreateTemplateAlias(partialParams) {
        return this.client.createTemplateAlias(this.ops["CreateTemplateAlias"].apply(partialParams));
    }
    invokeCreateTheme(partialParams) {
        return this.client.createTheme(this.ops["CreateTheme"].apply(partialParams));
    }
    invokeCreateThemeAlias(partialParams) {
        return this.client.createThemeAlias(this.ops["CreateThemeAlias"].apply(partialParams));
    }
    invokeDeleteAccountCustomization(partialParams) {
        return this.client.deleteAccountCustomization(this.ops["DeleteAccountCustomization"].apply(partialParams));
    }
    invokeDeleteAnalysis(partialParams) {
        return this.client.deleteAnalysis(this.ops["DeleteAnalysis"].apply(partialParams));
    }
    invokeDeleteDashboard(partialParams) {
        return this.client.deleteDashboard(this.ops["DeleteDashboard"].apply(partialParams));
    }
    invokeDeleteDataSet(partialParams) {
        return this.client.deleteDataSet(this.ops["DeleteDataSet"].apply(partialParams));
    }
    invokeDeleteDataSource(partialParams) {
        return this.client.deleteDataSource(this.ops["DeleteDataSource"].apply(partialParams));
    }
    invokeDeleteFolder(partialParams) {
        return this.client.deleteFolder(this.ops["DeleteFolder"].apply(partialParams));
    }
    invokeDeleteFolderMembership(partialParams) {
        return this.client.deleteFolderMembership(this.ops["DeleteFolderMembership"].apply(partialParams));
    }
    invokeDeleteGroup(partialParams) {
        return this.client.deleteGroup(this.ops["DeleteGroup"].apply(partialParams));
    }
    invokeDeleteGroupMembership(partialParams) {
        return this.client.deleteGroupMembership(this.ops["DeleteGroupMembership"].apply(partialParams));
    }
    invokeDeleteIAMPolicyAssignment(partialParams) {
        return this.client.deleteIAMPolicyAssignment(this.ops["DeleteIAMPolicyAssignment"].apply(partialParams));
    }
    invokeDeleteNamespace(partialParams) {
        return this.client.deleteNamespace(this.ops["DeleteNamespace"].apply(partialParams));
    }
    invokeDeleteTemplate(partialParams) {
        return this.client.deleteTemplate(this.ops["DeleteTemplate"].apply(partialParams));
    }
    invokeDeleteTemplateAlias(partialParams) {
        return this.client.deleteTemplateAlias(this.ops["DeleteTemplateAlias"].apply(partialParams));
    }
    invokeDeleteTheme(partialParams) {
        return this.client.deleteTheme(this.ops["DeleteTheme"].apply(partialParams));
    }
    invokeDeleteThemeAlias(partialParams) {
        return this.client.deleteThemeAlias(this.ops["DeleteThemeAlias"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteUserByPrincipalId(partialParams) {
        return this.client.deleteUserByPrincipalId(this.ops["DeleteUserByPrincipalId"].apply(partialParams));
    }
    invokeDescribeAccountCustomization(partialParams) {
        return this.client.describeAccountCustomization(this.ops["DescribeAccountCustomization"].apply(partialParams));
    }
    invokeDescribeAccountSettings(partialParams) {
        return this.client.describeAccountSettings(this.ops["DescribeAccountSettings"].apply(partialParams));
    }
    invokeDescribeAnalysis(partialParams) {
        return this.client.describeAnalysis(this.ops["DescribeAnalysis"].apply(partialParams));
    }
    invokeDescribeAnalysisPermissions(partialParams) {
        return this.client.describeAnalysisPermissions(this.ops["DescribeAnalysisPermissions"].apply(partialParams));
    }
    invokeDescribeDashboard(partialParams) {
        return this.client.describeDashboard(this.ops["DescribeDashboard"].apply(partialParams));
    }
    invokeDescribeDashboardPermissions(partialParams) {
        return this.client.describeDashboardPermissions(this.ops["DescribeDashboardPermissions"].apply(partialParams));
    }
    invokeDescribeDataSet(partialParams) {
        return this.client.describeDataSet(this.ops["DescribeDataSet"].apply(partialParams));
    }
    invokeDescribeDataSetPermissions(partialParams) {
        return this.client.describeDataSetPermissions(this.ops["DescribeDataSetPermissions"].apply(partialParams));
    }
    invokeDescribeDataSource(partialParams) {
        return this.client.describeDataSource(this.ops["DescribeDataSource"].apply(partialParams));
    }
    invokeDescribeDataSourcePermissions(partialParams) {
        return this.client.describeDataSourcePermissions(this.ops["DescribeDataSourcePermissions"].apply(partialParams));
    }
    invokeDescribeFolder(partialParams) {
        return this.client.describeFolder(this.ops["DescribeFolder"].apply(partialParams));
    }
    invokeDescribeFolderPermissions(partialParams) {
        return this.client.describeFolderPermissions(this.ops["DescribeFolderPermissions"].apply(partialParams));
    }
    invokeDescribeFolderResolvedPermissions(partialParams) {
        return this.client.describeFolderResolvedPermissions(this.ops["DescribeFolderResolvedPermissions"].apply(partialParams));
    }
    invokeDescribeGroup(partialParams) {
        return this.client.describeGroup(this.ops["DescribeGroup"].apply(partialParams));
    }
    invokeDescribeIAMPolicyAssignment(partialParams) {
        return this.client.describeIAMPolicyAssignment(this.ops["DescribeIAMPolicyAssignment"].apply(partialParams));
    }
    invokeDescribeIngestion(partialParams) {
        return this.client.describeIngestion(this.ops["DescribeIngestion"].apply(partialParams));
    }
    invokeDescribeIpRestriction(partialParams) {
        return this.client.describeIpRestriction(this.ops["DescribeIpRestriction"].apply(partialParams));
    }
    invokeDescribeNamespace(partialParams) {
        return this.client.describeNamespace(this.ops["DescribeNamespace"].apply(partialParams));
    }
    invokeDescribeTemplate(partialParams) {
        return this.client.describeTemplate(this.ops["DescribeTemplate"].apply(partialParams));
    }
    invokeDescribeTemplateAlias(partialParams) {
        return this.client.describeTemplateAlias(this.ops["DescribeTemplateAlias"].apply(partialParams));
    }
    invokeDescribeTemplatePermissions(partialParams) {
        return this.client.describeTemplatePermissions(this.ops["DescribeTemplatePermissions"].apply(partialParams));
    }
    invokeDescribeTheme(partialParams) {
        return this.client.describeTheme(this.ops["DescribeTheme"].apply(partialParams));
    }
    invokeDescribeThemeAlias(partialParams) {
        return this.client.describeThemeAlias(this.ops["DescribeThemeAlias"].apply(partialParams));
    }
    invokeDescribeThemePermissions(partialParams) {
        return this.client.describeThemePermissions(this.ops["DescribeThemePermissions"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeGenerateEmbedUrlForAnonymousUser(partialParams) {
        return this.client.generateEmbedUrlForAnonymousUser(this.ops["GenerateEmbedUrlForAnonymousUser"].apply(partialParams));
    }
    invokeGenerateEmbedUrlForRegisteredUser(partialParams) {
        return this.client.generateEmbedUrlForRegisteredUser(this.ops["GenerateEmbedUrlForRegisteredUser"].apply(partialParams));
    }
    invokeGetDashboardEmbedUrl(partialParams) {
        return this.client.getDashboardEmbedUrl(this.ops["GetDashboardEmbedUrl"].apply(partialParams));
    }
    invokeGetSessionEmbedUrl(partialParams) {
        return this.client.getSessionEmbedUrl(this.ops["GetSessionEmbedUrl"].apply(partialParams));
    }
    invokeListAnalyses(partialParams) {
        return this.client.listAnalyses(this.ops["ListAnalyses"].apply(partialParams));
    }
    invokeListDashboardVersions(partialParams) {
        return this.client.listDashboardVersions(this.ops["ListDashboardVersions"].apply(partialParams));
    }
    invokeListDashboards(partialParams) {
        return this.client.listDashboards(this.ops["ListDashboards"].apply(partialParams));
    }
    invokeListDataSets(partialParams) {
        return this.client.listDataSets(this.ops["ListDataSets"].apply(partialParams));
    }
    invokeListDataSources(partialParams) {
        return this.client.listDataSources(this.ops["ListDataSources"].apply(partialParams));
    }
    invokeListFolderMembers(partialParams) {
        return this.client.listFolderMembers(this.ops["ListFolderMembers"].apply(partialParams));
    }
    invokeListFolders(partialParams) {
        return this.client.listFolders(this.ops["ListFolders"].apply(partialParams));
    }
    invokeListGroupMemberships(partialParams) {
        return this.client.listGroupMemberships(this.ops["ListGroupMemberships"].apply(partialParams));
    }
    invokeListGroups(partialParams) {
        return this.client.listGroups(this.ops["ListGroups"].apply(partialParams));
    }
    invokeListIAMPolicyAssignments(partialParams) {
        return this.client.listIAMPolicyAssignments(this.ops["ListIAMPolicyAssignments"].apply(partialParams));
    }
    invokeListIAMPolicyAssignmentsForUser(partialParams) {
        return this.client.listIAMPolicyAssignmentsForUser(this.ops["ListIAMPolicyAssignmentsForUser"].apply(partialParams));
    }
    invokeListIngestions(partialParams) {
        return this.client.listIngestions(this.ops["ListIngestions"].apply(partialParams));
    }
    invokeListNamespaces(partialParams) {
        return this.client.listNamespaces(this.ops["ListNamespaces"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTemplateAliases(partialParams) {
        return this.client.listTemplateAliases(this.ops["ListTemplateAliases"].apply(partialParams));
    }
    invokeListTemplateVersions(partialParams) {
        return this.client.listTemplateVersions(this.ops["ListTemplateVersions"].apply(partialParams));
    }
    invokeListTemplates(partialParams) {
        return this.client.listTemplates(this.ops["ListTemplates"].apply(partialParams));
    }
    invokeListThemeAliases(partialParams) {
        return this.client.listThemeAliases(this.ops["ListThemeAliases"].apply(partialParams));
    }
    invokeListThemeVersions(partialParams) {
        return this.client.listThemeVersions(this.ops["ListThemeVersions"].apply(partialParams));
    }
    invokeListThemes(partialParams) {
        return this.client.listThemes(this.ops["ListThemes"].apply(partialParams));
    }
    invokeListUserGroups(partialParams) {
        return this.client.listUserGroups(this.ops["ListUserGroups"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeRegisterUser(partialParams) {
        return this.client.registerUser(this.ops["RegisterUser"].apply(partialParams));
    }
    invokeRestoreAnalysis(partialParams) {
        return this.client.restoreAnalysis(this.ops["RestoreAnalysis"].apply(partialParams));
    }
    invokeSearchAnalyses(partialParams) {
        return this.client.searchAnalyses(this.ops["SearchAnalyses"].apply(partialParams));
    }
    invokeSearchDashboards(partialParams) {
        return this.client.searchDashboards(this.ops["SearchDashboards"].apply(partialParams));
    }
    invokeSearchFolders(partialParams) {
        return this.client.searchFolders(this.ops["SearchFolders"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccountCustomization(partialParams) {
        return this.client.updateAccountCustomization(this.ops["UpdateAccountCustomization"].apply(partialParams));
    }
    invokeUpdateAccountSettings(partialParams) {
        return this.client.updateAccountSettings(this.ops["UpdateAccountSettings"].apply(partialParams));
    }
    invokeUpdateAnalysis(partialParams) {
        return this.client.updateAnalysis(this.ops["UpdateAnalysis"].apply(partialParams));
    }
    invokeUpdateAnalysisPermissions(partialParams) {
        return this.client.updateAnalysisPermissions(this.ops["UpdateAnalysisPermissions"].apply(partialParams));
    }
    invokeUpdateDashboard(partialParams) {
        return this.client.updateDashboard(this.ops["UpdateDashboard"].apply(partialParams));
    }
    invokeUpdateDashboardPermissions(partialParams) {
        return this.client.updateDashboardPermissions(this.ops["UpdateDashboardPermissions"].apply(partialParams));
    }
    invokeUpdateDashboardPublishedVersion(partialParams) {
        return this.client.updateDashboardPublishedVersion(this.ops["UpdateDashboardPublishedVersion"].apply(partialParams));
    }
    invokeUpdateDataSet(partialParams) {
        return this.client.updateDataSet(this.ops["UpdateDataSet"].apply(partialParams));
    }
    invokeUpdateDataSetPermissions(partialParams) {
        return this.client.updateDataSetPermissions(this.ops["UpdateDataSetPermissions"].apply(partialParams));
    }
    invokeUpdateDataSource(partialParams) {
        return this.client.updateDataSource(this.ops["UpdateDataSource"].apply(partialParams));
    }
    invokeUpdateDataSourcePermissions(partialParams) {
        return this.client.updateDataSourcePermissions(this.ops["UpdateDataSourcePermissions"].apply(partialParams));
    }
    invokeUpdateFolder(partialParams) {
        return this.client.updateFolder(this.ops["UpdateFolder"].apply(partialParams));
    }
    invokeUpdateFolderPermissions(partialParams) {
        return this.client.updateFolderPermissions(this.ops["UpdateFolderPermissions"].apply(partialParams));
    }
    invokeUpdateGroup(partialParams) {
        return this.client.updateGroup(this.ops["UpdateGroup"].apply(partialParams));
    }
    invokeUpdateIAMPolicyAssignment(partialParams) {
        return this.client.updateIAMPolicyAssignment(this.ops["UpdateIAMPolicyAssignment"].apply(partialParams));
    }
    invokeUpdateIpRestriction(partialParams) {
        return this.client.updateIpRestriction(this.ops["UpdateIpRestriction"].apply(partialParams));
    }
    invokeUpdateTemplate(partialParams) {
        return this.client.updateTemplate(this.ops["UpdateTemplate"].apply(partialParams));
    }
    invokeUpdateTemplateAlias(partialParams) {
        return this.client.updateTemplateAlias(this.ops["UpdateTemplateAlias"].apply(partialParams));
    }
    invokeUpdateTemplatePermissions(partialParams) {
        return this.client.updateTemplatePermissions(this.ops["UpdateTemplatePermissions"].apply(partialParams));
    }
    invokeUpdateTheme(partialParams) {
        return this.client.updateTheme(this.ops["UpdateTheme"].apply(partialParams));
    }
    invokeUpdateThemeAlias(partialParams) {
        return this.client.updateThemeAlias(this.ops["UpdateThemeAlias"].apply(partialParams));
    }
    invokeUpdateThemePermissions(partialParams) {
        return this.client.updateThemePermissions(this.ops["UpdateThemePermissions"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
