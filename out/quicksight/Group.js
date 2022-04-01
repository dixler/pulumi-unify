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
const schema = require("../apis/quicksight-2018-04-01.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.quicksight.Group {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.QuickSight();
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
    invokeCancelIngestion(partialParams) {
        this.boot();
        return this.client.cancelIngestion(this.ops["CancelIngestion"].apply(partialParams));
    }
    invokeCreateAccountCustomization(partialParams) {
        this.boot();
        return this.client.createAccountCustomization(this.ops["CreateAccountCustomization"].apply(partialParams));
    }
    invokeCreateAnalysis(partialParams) {
        this.boot();
        return this.client.createAnalysis(this.ops["CreateAnalysis"].apply(partialParams));
    }
    invokeCreateDashboard(partialParams) {
        this.boot();
        return this.client.createDashboard(this.ops["CreateDashboard"].apply(partialParams));
    }
    invokeCreateDataSet(partialParams) {
        this.boot();
        return this.client.createDataSet(this.ops["CreateDataSet"].apply(partialParams));
    }
    invokeCreateDataSource(partialParams) {
        this.boot();
        return this.client.createDataSource(this.ops["CreateDataSource"].apply(partialParams));
    }
    invokeCreateFolder(partialParams) {
        this.boot();
        return this.client.createFolder(this.ops["CreateFolder"].apply(partialParams));
    }
    invokeCreateFolderMembership(partialParams) {
        this.boot();
        return this.client.createFolderMembership(this.ops["CreateFolderMembership"].apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        this.boot();
        return this.client.createGroup(this.ops["CreateGroup"].apply(partialParams));
    }
    invokeCreateGroupMembership(partialParams) {
        this.boot();
        return this.client.createGroupMembership(this.ops["CreateGroupMembership"].apply(partialParams));
    }
    invokeCreateIAMPolicyAssignment(partialParams) {
        this.boot();
        return this.client.createIAMPolicyAssignment(this.ops["CreateIAMPolicyAssignment"].apply(partialParams));
    }
    invokeCreateIngestion(partialParams) {
        this.boot();
        return this.client.createIngestion(this.ops["CreateIngestion"].apply(partialParams));
    }
    invokeCreateNamespace(partialParams) {
        this.boot();
        return this.client.createNamespace(this.ops["CreateNamespace"].apply(partialParams));
    }
    invokeCreateTemplate(partialParams) {
        this.boot();
        return this.client.createTemplate(this.ops["CreateTemplate"].apply(partialParams));
    }
    invokeCreateTemplateAlias(partialParams) {
        this.boot();
        return this.client.createTemplateAlias(this.ops["CreateTemplateAlias"].apply(partialParams));
    }
    invokeCreateTheme(partialParams) {
        this.boot();
        return this.client.createTheme(this.ops["CreateTheme"].apply(partialParams));
    }
    invokeCreateThemeAlias(partialParams) {
        this.boot();
        return this.client.createThemeAlias(this.ops["CreateThemeAlias"].apply(partialParams));
    }
    invokeDeleteAccountCustomization(partialParams) {
        this.boot();
        return this.client.deleteAccountCustomization(this.ops["DeleteAccountCustomization"].apply(partialParams));
    }
    invokeDeleteAnalysis(partialParams) {
        this.boot();
        return this.client.deleteAnalysis(this.ops["DeleteAnalysis"].apply(partialParams));
    }
    invokeDeleteDashboard(partialParams) {
        this.boot();
        return this.client.deleteDashboard(this.ops["DeleteDashboard"].apply(partialParams));
    }
    invokeDeleteDataSet(partialParams) {
        this.boot();
        return this.client.deleteDataSet(this.ops["DeleteDataSet"].apply(partialParams));
    }
    invokeDeleteDataSource(partialParams) {
        this.boot();
        return this.client.deleteDataSource(this.ops["DeleteDataSource"].apply(partialParams));
    }
    invokeDeleteFolder(partialParams) {
        this.boot();
        return this.client.deleteFolder(this.ops["DeleteFolder"].apply(partialParams));
    }
    invokeDeleteFolderMembership(partialParams) {
        this.boot();
        return this.client.deleteFolderMembership(this.ops["DeleteFolderMembership"].apply(partialParams));
    }
    invokeDeleteGroup(partialParams) {
        this.boot();
        return this.client.deleteGroup(this.ops["DeleteGroup"].apply(partialParams));
    }
    invokeDeleteGroupMembership(partialParams) {
        this.boot();
        return this.client.deleteGroupMembership(this.ops["DeleteGroupMembership"].apply(partialParams));
    }
    invokeDeleteIAMPolicyAssignment(partialParams) {
        this.boot();
        return this.client.deleteIAMPolicyAssignment(this.ops["DeleteIAMPolicyAssignment"].apply(partialParams));
    }
    invokeDeleteNamespace(partialParams) {
        this.boot();
        return this.client.deleteNamespace(this.ops["DeleteNamespace"].apply(partialParams));
    }
    invokeDeleteTemplate(partialParams) {
        this.boot();
        return this.client.deleteTemplate(this.ops["DeleteTemplate"].apply(partialParams));
    }
    invokeDeleteTemplateAlias(partialParams) {
        this.boot();
        return this.client.deleteTemplateAlias(this.ops["DeleteTemplateAlias"].apply(partialParams));
    }
    invokeDeleteTheme(partialParams) {
        this.boot();
        return this.client.deleteTheme(this.ops["DeleteTheme"].apply(partialParams));
    }
    invokeDeleteThemeAlias(partialParams) {
        this.boot();
        return this.client.deleteThemeAlias(this.ops["DeleteThemeAlias"].apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].apply(partialParams));
    }
    invokeDeleteUserByPrincipalId(partialParams) {
        this.boot();
        return this.client.deleteUserByPrincipalId(this.ops["DeleteUserByPrincipalId"].apply(partialParams));
    }
    invokeDescribeAccountCustomization(partialParams) {
        this.boot();
        return this.client.describeAccountCustomization(this.ops["DescribeAccountCustomization"].apply(partialParams));
    }
    invokeDescribeAccountSettings(partialParams) {
        this.boot();
        return this.client.describeAccountSettings(this.ops["DescribeAccountSettings"].apply(partialParams));
    }
    invokeDescribeAnalysis(partialParams) {
        this.boot();
        return this.client.describeAnalysis(this.ops["DescribeAnalysis"].apply(partialParams));
    }
    invokeDescribeAnalysisPermissions(partialParams) {
        this.boot();
        return this.client.describeAnalysisPermissions(this.ops["DescribeAnalysisPermissions"].apply(partialParams));
    }
    invokeDescribeDashboard(partialParams) {
        this.boot();
        return this.client.describeDashboard(this.ops["DescribeDashboard"].apply(partialParams));
    }
    invokeDescribeDashboardPermissions(partialParams) {
        this.boot();
        return this.client.describeDashboardPermissions(this.ops["DescribeDashboardPermissions"].apply(partialParams));
    }
    invokeDescribeDataSet(partialParams) {
        this.boot();
        return this.client.describeDataSet(this.ops["DescribeDataSet"].apply(partialParams));
    }
    invokeDescribeDataSetPermissions(partialParams) {
        this.boot();
        return this.client.describeDataSetPermissions(this.ops["DescribeDataSetPermissions"].apply(partialParams));
    }
    invokeDescribeDataSource(partialParams) {
        this.boot();
        return this.client.describeDataSource(this.ops["DescribeDataSource"].apply(partialParams));
    }
    invokeDescribeDataSourcePermissions(partialParams) {
        this.boot();
        return this.client.describeDataSourcePermissions(this.ops["DescribeDataSourcePermissions"].apply(partialParams));
    }
    invokeDescribeFolder(partialParams) {
        this.boot();
        return this.client.describeFolder(this.ops["DescribeFolder"].apply(partialParams));
    }
    invokeDescribeFolderPermissions(partialParams) {
        this.boot();
        return this.client.describeFolderPermissions(this.ops["DescribeFolderPermissions"].apply(partialParams));
    }
    invokeDescribeFolderResolvedPermissions(partialParams) {
        this.boot();
        return this.client.describeFolderResolvedPermissions(this.ops["DescribeFolderResolvedPermissions"].apply(partialParams));
    }
    invokeDescribeGroup(partialParams) {
        this.boot();
        return this.client.describeGroup(this.ops["DescribeGroup"].apply(partialParams));
    }
    invokeDescribeIAMPolicyAssignment(partialParams) {
        this.boot();
        return this.client.describeIAMPolicyAssignment(this.ops["DescribeIAMPolicyAssignment"].apply(partialParams));
    }
    invokeDescribeIngestion(partialParams) {
        this.boot();
        return this.client.describeIngestion(this.ops["DescribeIngestion"].apply(partialParams));
    }
    invokeDescribeIpRestriction(partialParams) {
        this.boot();
        return this.client.describeIpRestriction(this.ops["DescribeIpRestriction"].apply(partialParams));
    }
    invokeDescribeNamespace(partialParams) {
        this.boot();
        return this.client.describeNamespace(this.ops["DescribeNamespace"].apply(partialParams));
    }
    invokeDescribeTemplate(partialParams) {
        this.boot();
        return this.client.describeTemplate(this.ops["DescribeTemplate"].apply(partialParams));
    }
    invokeDescribeTemplateAlias(partialParams) {
        this.boot();
        return this.client.describeTemplateAlias(this.ops["DescribeTemplateAlias"].apply(partialParams));
    }
    invokeDescribeTemplatePermissions(partialParams) {
        this.boot();
        return this.client.describeTemplatePermissions(this.ops["DescribeTemplatePermissions"].apply(partialParams));
    }
    invokeDescribeTheme(partialParams) {
        this.boot();
        return this.client.describeTheme(this.ops["DescribeTheme"].apply(partialParams));
    }
    invokeDescribeThemeAlias(partialParams) {
        this.boot();
        return this.client.describeThemeAlias(this.ops["DescribeThemeAlias"].apply(partialParams));
    }
    invokeDescribeThemePermissions(partialParams) {
        this.boot();
        return this.client.describeThemePermissions(this.ops["DescribeThemePermissions"].apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        this.boot();
        return this.client.describeUser(this.ops["DescribeUser"].apply(partialParams));
    }
    invokeGenerateEmbedUrlForAnonymousUser(partialParams) {
        this.boot();
        return this.client.generateEmbedUrlForAnonymousUser(this.ops["GenerateEmbedUrlForAnonymousUser"].apply(partialParams));
    }
    invokeGenerateEmbedUrlForRegisteredUser(partialParams) {
        this.boot();
        return this.client.generateEmbedUrlForRegisteredUser(this.ops["GenerateEmbedUrlForRegisteredUser"].apply(partialParams));
    }
    invokeGetDashboardEmbedUrl(partialParams) {
        this.boot();
        return this.client.getDashboardEmbedUrl(this.ops["GetDashboardEmbedUrl"].apply(partialParams));
    }
    invokeGetSessionEmbedUrl(partialParams) {
        this.boot();
        return this.client.getSessionEmbedUrl(this.ops["GetSessionEmbedUrl"].apply(partialParams));
    }
    invokeListAnalyses(partialParams) {
        this.boot();
        return this.client.listAnalyses(this.ops["ListAnalyses"].apply(partialParams));
    }
    invokeListDashboardVersions(partialParams) {
        this.boot();
        return this.client.listDashboardVersions(this.ops["ListDashboardVersions"].apply(partialParams));
    }
    invokeListDashboards(partialParams) {
        this.boot();
        return this.client.listDashboards(this.ops["ListDashboards"].apply(partialParams));
    }
    invokeListDataSets(partialParams) {
        this.boot();
        return this.client.listDataSets(this.ops["ListDataSets"].apply(partialParams));
    }
    invokeListDataSources(partialParams) {
        this.boot();
        return this.client.listDataSources(this.ops["ListDataSources"].apply(partialParams));
    }
    invokeListFolderMembers(partialParams) {
        this.boot();
        return this.client.listFolderMembers(this.ops["ListFolderMembers"].apply(partialParams));
    }
    invokeListFolders(partialParams) {
        this.boot();
        return this.client.listFolders(this.ops["ListFolders"].apply(partialParams));
    }
    invokeListGroupMemberships(partialParams) {
        this.boot();
        return this.client.listGroupMemberships(this.ops["ListGroupMemberships"].apply(partialParams));
    }
    invokeListGroups(partialParams) {
        this.boot();
        return this.client.listGroups(this.ops["ListGroups"].apply(partialParams));
    }
    invokeListIAMPolicyAssignments(partialParams) {
        this.boot();
        return this.client.listIAMPolicyAssignments(this.ops["ListIAMPolicyAssignments"].apply(partialParams));
    }
    invokeListIAMPolicyAssignmentsForUser(partialParams) {
        this.boot();
        return this.client.listIAMPolicyAssignmentsForUser(this.ops["ListIAMPolicyAssignmentsForUser"].apply(partialParams));
    }
    invokeListIngestions(partialParams) {
        this.boot();
        return this.client.listIngestions(this.ops["ListIngestions"].apply(partialParams));
    }
    invokeListNamespaces(partialParams) {
        this.boot();
        return this.client.listNamespaces(this.ops["ListNamespaces"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeListTemplateAliases(partialParams) {
        this.boot();
        return this.client.listTemplateAliases(this.ops["ListTemplateAliases"].apply(partialParams));
    }
    invokeListTemplateVersions(partialParams) {
        this.boot();
        return this.client.listTemplateVersions(this.ops["ListTemplateVersions"].apply(partialParams));
    }
    invokeListTemplates(partialParams) {
        this.boot();
        return this.client.listTemplates(this.ops["ListTemplates"].apply(partialParams));
    }
    invokeListThemeAliases(partialParams) {
        this.boot();
        return this.client.listThemeAliases(this.ops["ListThemeAliases"].apply(partialParams));
    }
    invokeListThemeVersions(partialParams) {
        this.boot();
        return this.client.listThemeVersions(this.ops["ListThemeVersions"].apply(partialParams));
    }
    invokeListThemes(partialParams) {
        this.boot();
        return this.client.listThemes(this.ops["ListThemes"].apply(partialParams));
    }
    invokeListUserGroups(partialParams) {
        this.boot();
        return this.client.listUserGroups(this.ops["ListUserGroups"].apply(partialParams));
    }
    invokeListUsers(partialParams) {
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].apply(partialParams));
    }
    invokeRegisterUser(partialParams) {
        this.boot();
        return this.client.registerUser(this.ops["RegisterUser"].apply(partialParams));
    }
    invokeRestoreAnalysis(partialParams) {
        this.boot();
        return this.client.restoreAnalysis(this.ops["RestoreAnalysis"].apply(partialParams));
    }
    invokeSearchAnalyses(partialParams) {
        this.boot();
        return this.client.searchAnalyses(this.ops["SearchAnalyses"].apply(partialParams));
    }
    invokeSearchDashboards(partialParams) {
        this.boot();
        return this.client.searchDashboards(this.ops["SearchDashboards"].apply(partialParams));
    }
    invokeSearchFolders(partialParams) {
        this.boot();
        return this.client.searchFolders(this.ops["SearchFolders"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateAccountCustomization(partialParams) {
        this.boot();
        return this.client.updateAccountCustomization(this.ops["UpdateAccountCustomization"].apply(partialParams));
    }
    invokeUpdateAccountSettings(partialParams) {
        this.boot();
        return this.client.updateAccountSettings(this.ops["UpdateAccountSettings"].apply(partialParams));
    }
    invokeUpdateAnalysis(partialParams) {
        this.boot();
        return this.client.updateAnalysis(this.ops["UpdateAnalysis"].apply(partialParams));
    }
    invokeUpdateAnalysisPermissions(partialParams) {
        this.boot();
        return this.client.updateAnalysisPermissions(this.ops["UpdateAnalysisPermissions"].apply(partialParams));
    }
    invokeUpdateDashboard(partialParams) {
        this.boot();
        return this.client.updateDashboard(this.ops["UpdateDashboard"].apply(partialParams));
    }
    invokeUpdateDashboardPermissions(partialParams) {
        this.boot();
        return this.client.updateDashboardPermissions(this.ops["UpdateDashboardPermissions"].apply(partialParams));
    }
    invokeUpdateDashboardPublishedVersion(partialParams) {
        this.boot();
        return this.client.updateDashboardPublishedVersion(this.ops["UpdateDashboardPublishedVersion"].apply(partialParams));
    }
    invokeUpdateDataSet(partialParams) {
        this.boot();
        return this.client.updateDataSet(this.ops["UpdateDataSet"].apply(partialParams));
    }
    invokeUpdateDataSetPermissions(partialParams) {
        this.boot();
        return this.client.updateDataSetPermissions(this.ops["UpdateDataSetPermissions"].apply(partialParams));
    }
    invokeUpdateDataSource(partialParams) {
        this.boot();
        return this.client.updateDataSource(this.ops["UpdateDataSource"].apply(partialParams));
    }
    invokeUpdateDataSourcePermissions(partialParams) {
        this.boot();
        return this.client.updateDataSourcePermissions(this.ops["UpdateDataSourcePermissions"].apply(partialParams));
    }
    invokeUpdateFolder(partialParams) {
        this.boot();
        return this.client.updateFolder(this.ops["UpdateFolder"].apply(partialParams));
    }
    invokeUpdateFolderPermissions(partialParams) {
        this.boot();
        return this.client.updateFolderPermissions(this.ops["UpdateFolderPermissions"].apply(partialParams));
    }
    invokeUpdateGroup(partialParams) {
        this.boot();
        return this.client.updateGroup(this.ops["UpdateGroup"].apply(partialParams));
    }
    invokeUpdateIAMPolicyAssignment(partialParams) {
        this.boot();
        return this.client.updateIAMPolicyAssignment(this.ops["UpdateIAMPolicyAssignment"].apply(partialParams));
    }
    invokeUpdateIpRestriction(partialParams) {
        this.boot();
        return this.client.updateIpRestriction(this.ops["UpdateIpRestriction"].apply(partialParams));
    }
    invokeUpdateTemplate(partialParams) {
        this.boot();
        return this.client.updateTemplate(this.ops["UpdateTemplate"].apply(partialParams));
    }
    invokeUpdateTemplateAlias(partialParams) {
        this.boot();
        return this.client.updateTemplateAlias(this.ops["UpdateTemplateAlias"].apply(partialParams));
    }
    invokeUpdateTemplatePermissions(partialParams) {
        this.boot();
        return this.client.updateTemplatePermissions(this.ops["UpdateTemplatePermissions"].apply(partialParams));
    }
    invokeUpdateTheme(partialParams) {
        this.boot();
        return this.client.updateTheme(this.ops["UpdateTheme"].apply(partialParams));
    }
    invokeUpdateThemeAlias(partialParams) {
        this.boot();
        return this.client.updateThemeAlias(this.ops["UpdateThemeAlias"].apply(partialParams));
    }
    invokeUpdateThemePermissions(partialParams) {
        this.boot();
        return this.client.updateThemePermissions(this.ops["UpdateThemePermissions"].apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].apply(partialParams));
    }
}
exports.default = default_1;
