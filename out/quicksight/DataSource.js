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
class default_1 extends aws.quicksight.DataSource {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.QuickSight();
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
    invokeCancelIngestion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.cancelIngestion(this.ops["CancelIngestion"].applicator.apply(partialParams));
    }
    invokeCreateAccountCustomization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAccountCustomization(this.ops["CreateAccountCustomization"].applicator.apply(partialParams));
    }
    invokeCreateAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createAnalysis(this.ops["CreateAnalysis"].applicator.apply(partialParams));
    }
    invokeCreateDashboard(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDashboard(this.ops["CreateDashboard"].applicator.apply(partialParams));
    }
    invokeCreateDataSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataSet(this.ops["CreateDataSet"].applicator.apply(partialParams));
    }
    invokeCreateDataSource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createDataSource(this.ops["CreateDataSource"].applicator.apply(partialParams));
    }
    invokeCreateFolder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFolder(this.ops["CreateFolder"].applicator.apply(partialParams));
    }
    invokeCreateFolderMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createFolderMembership(this.ops["CreateFolderMembership"].applicator.apply(partialParams));
    }
    invokeCreateGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroup(this.ops["CreateGroup"].applicator.apply(partialParams));
    }
    invokeCreateGroupMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createGroupMembership(this.ops["CreateGroupMembership"].applicator.apply(partialParams));
    }
    invokeCreateIAMPolicyAssignment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIAMPolicyAssignment(this.ops["CreateIAMPolicyAssignment"].applicator.apply(partialParams));
    }
    invokeCreateIngestion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createIngestion(this.ops["CreateIngestion"].applicator.apply(partialParams));
    }
    invokeCreateNamespace(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createNamespace(this.ops["CreateNamespace"].applicator.apply(partialParams));
    }
    invokeCreateTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTemplate(this.ops["CreateTemplate"].applicator.apply(partialParams));
    }
    invokeCreateTemplateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTemplateAlias(this.ops["CreateTemplateAlias"].applicator.apply(partialParams));
    }
    invokeCreateTheme(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createTheme(this.ops["CreateTheme"].applicator.apply(partialParams));
    }
    invokeCreateThemeAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createThemeAlias(this.ops["CreateThemeAlias"].applicator.apply(partialParams));
    }
    invokeDeleteAccountCustomization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAccountCustomization(this.ops["DeleteAccountCustomization"].applicator.apply(partialParams));
    }
    invokeDeleteAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteAnalysis(this.ops["DeleteAnalysis"].applicator.apply(partialParams));
    }
    invokeDeleteDashboard(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDashboard(this.ops["DeleteDashboard"].applicator.apply(partialParams));
    }
    invokeDeleteDataSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataSet(this.ops["DeleteDataSet"].applicator.apply(partialParams));
    }
    invokeDeleteDataSource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteDataSource(this.ops["DeleteDataSource"].applicator.apply(partialParams));
    }
    invokeDeleteFolder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFolder(this.ops["DeleteFolder"].applicator.apply(partialParams));
    }
    invokeDeleteFolderMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFolderMembership(this.ops["DeleteFolderMembership"].applicator.apply(partialParams));
    }
    invokeDeleteGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroup(this.ops["DeleteGroup"].applicator.apply(partialParams));
    }
    invokeDeleteGroupMembership(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteGroupMembership(this.ops["DeleteGroupMembership"].applicator.apply(partialParams));
    }
    invokeDeleteIAMPolicyAssignment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteIAMPolicyAssignment(this.ops["DeleteIAMPolicyAssignment"].applicator.apply(partialParams));
    }
    invokeDeleteNamespace(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteNamespace(this.ops["DeleteNamespace"].applicator.apply(partialParams));
    }
    invokeDeleteTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTemplate(this.ops["DeleteTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteTemplateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTemplateAlias(this.ops["DeleteTemplateAlias"].applicator.apply(partialParams));
    }
    invokeDeleteTheme(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteTheme(this.ops["DeleteTheme"].applicator.apply(partialParams));
    }
    invokeDeleteThemeAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteThemeAlias(this.ops["DeleteThemeAlias"].applicator.apply(partialParams));
    }
    invokeDeleteUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUser(this.ops["DeleteUser"].applicator.apply(partialParams));
    }
    invokeDeleteUserByPrincipalId(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteUserByPrincipalId(this.ops["DeleteUserByPrincipalId"].applicator.apply(partialParams));
    }
    invokeDescribeAccountCustomization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccountCustomization(this.ops["DescribeAccountCustomization"].applicator.apply(partialParams));
    }
    invokeDescribeAccountSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAccountSettings(this.ops["DescribeAccountSettings"].applicator.apply(partialParams));
    }
    invokeDescribeAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAnalysis(this.ops["DescribeAnalysis"].applicator.apply(partialParams));
    }
    invokeDescribeAnalysisPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeAnalysisPermissions(this.ops["DescribeAnalysisPermissions"].applicator.apply(partialParams));
    }
    invokeDescribeDashboard(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDashboard(this.ops["DescribeDashboard"].applicator.apply(partialParams));
    }
    invokeDescribeDashboardPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDashboardPermissions(this.ops["DescribeDashboardPermissions"].applicator.apply(partialParams));
    }
    invokeDescribeDataSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSet(this.ops["DescribeDataSet"].applicator.apply(partialParams));
    }
    invokeDescribeDataSetPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSetPermissions(this.ops["DescribeDataSetPermissions"].applicator.apply(partialParams));
    }
    invokeDescribeDataSource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSource(this.ops["DescribeDataSource"].applicator.apply(partialParams));
    }
    invokeDescribeDataSourcePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeDataSourcePermissions(this.ops["DescribeDataSourcePermissions"].applicator.apply(partialParams));
    }
    invokeDescribeFolder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFolder(this.ops["DescribeFolder"].applicator.apply(partialParams));
    }
    invokeDescribeFolderPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFolderPermissions(this.ops["DescribeFolderPermissions"].applicator.apply(partialParams));
    }
    invokeDescribeFolderResolvedPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeFolderResolvedPermissions(this.ops["DescribeFolderResolvedPermissions"].applicator.apply(partialParams));
    }
    invokeDescribeGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeGroup(this.ops["DescribeGroup"].applicator.apply(partialParams));
    }
    invokeDescribeIAMPolicyAssignment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIAMPolicyAssignment(this.ops["DescribeIAMPolicyAssignment"].applicator.apply(partialParams));
    }
    invokeDescribeIngestion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIngestion(this.ops["DescribeIngestion"].applicator.apply(partialParams));
    }
    invokeDescribeIpRestriction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeIpRestriction(this.ops["DescribeIpRestriction"].applicator.apply(partialParams));
    }
    invokeDescribeNamespace(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeNamespace(this.ops["DescribeNamespace"].applicator.apply(partialParams));
    }
    invokeDescribeTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTemplate(this.ops["DescribeTemplate"].applicator.apply(partialParams));
    }
    invokeDescribeTemplateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTemplateAlias(this.ops["DescribeTemplateAlias"].applicator.apply(partialParams));
    }
    invokeDescribeTemplatePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTemplatePermissions(this.ops["DescribeTemplatePermissions"].applicator.apply(partialParams));
    }
    invokeDescribeTheme(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeTheme(this.ops["DescribeTheme"].applicator.apply(partialParams));
    }
    invokeDescribeThemeAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThemeAlias(this.ops["DescribeThemeAlias"].applicator.apply(partialParams));
    }
    invokeDescribeThemePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeThemePermissions(this.ops["DescribeThemePermissions"].applicator.apply(partialParams));
    }
    invokeDescribeUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeUser(this.ops["DescribeUser"].applicator.apply(partialParams));
    }
    invokeGenerateEmbedUrlForAnonymousUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateEmbedUrlForAnonymousUser(this.ops["GenerateEmbedUrlForAnonymousUser"].applicator.apply(partialParams));
    }
    invokeGenerateEmbedUrlForRegisteredUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.generateEmbedUrlForRegisteredUser(this.ops["GenerateEmbedUrlForRegisteredUser"].applicator.apply(partialParams));
    }
    invokeGetDashboardEmbedUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDashboardEmbedUrl(this.ops["GetDashboardEmbedUrl"].applicator.apply(partialParams));
    }
    invokeGetSessionEmbedUrl(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getSessionEmbedUrl(this.ops["GetSessionEmbedUrl"].applicator.apply(partialParams));
    }
    invokeListAnalyses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAnalyses(this.ops["ListAnalyses"].applicator.apply(partialParams));
    }
    invokeListDashboardVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDashboardVersions(this.ops["ListDashboardVersions"].applicator.apply(partialParams));
    }
    invokeListDashboards(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDashboards(this.ops["ListDashboards"].applicator.apply(partialParams));
    }
    invokeListDataSets(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDataSets(this.ops["ListDataSets"].applicator.apply(partialParams));
    }
    invokeListDataSources(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listDataSources(this.ops["ListDataSources"].applicator.apply(partialParams));
    }
    invokeListFolderMembers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFolderMembers(this.ops["ListFolderMembers"].applicator.apply(partialParams));
    }
    invokeListFolders(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listFolders(this.ops["ListFolders"].applicator.apply(partialParams));
    }
    invokeListGroupMemberships(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroupMemberships(this.ops["ListGroupMemberships"].applicator.apply(partialParams));
    }
    invokeListGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listGroups(this.ops["ListGroups"].applicator.apply(partialParams));
    }
    invokeListIAMPolicyAssignments(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIAMPolicyAssignments(this.ops["ListIAMPolicyAssignments"].applicator.apply(partialParams));
    }
    invokeListIAMPolicyAssignmentsForUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIAMPolicyAssignmentsForUser(this.ops["ListIAMPolicyAssignmentsForUser"].applicator.apply(partialParams));
    }
    invokeListIngestions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listIngestions(this.ops["ListIngestions"].applicator.apply(partialParams));
    }
    invokeListNamespaces(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listNamespaces(this.ops["ListNamespaces"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeListTemplateAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplateAliases(this.ops["ListTemplateAliases"].applicator.apply(partialParams));
    }
    invokeListTemplateVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplateVersions(this.ops["ListTemplateVersions"].applicator.apply(partialParams));
    }
    invokeListTemplates(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTemplates(this.ops["ListTemplates"].applicator.apply(partialParams));
    }
    invokeListThemeAliases(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThemeAliases(this.ops["ListThemeAliases"].applicator.apply(partialParams));
    }
    invokeListThemeVersions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThemeVersions(this.ops["ListThemeVersions"].applicator.apply(partialParams));
    }
    invokeListThemes(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listThemes(this.ops["ListThemes"].applicator.apply(partialParams));
    }
    invokeListUserGroups(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUserGroups(this.ops["ListUserGroups"].applicator.apply(partialParams));
    }
    invokeListUsers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listUsers(this.ops["ListUsers"].applicator.apply(partialParams));
    }
    invokeRegisterUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.registerUser(this.ops["RegisterUser"].applicator.apply(partialParams));
    }
    invokeRestoreAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.restoreAnalysis(this.ops["RestoreAnalysis"].applicator.apply(partialParams));
    }
    invokeSearchAnalyses(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchAnalyses(this.ops["SearchAnalyses"].applicator.apply(partialParams));
    }
    invokeSearchDashboards(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchDashboards(this.ops["SearchDashboards"].applicator.apply(partialParams));
    }
    invokeSearchFolders(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.searchFolders(this.ops["SearchFolders"].applicator.apply(partialParams));
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
    invokeUpdateAccountCustomization(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountCustomization(this.ops["UpdateAccountCustomization"].applicator.apply(partialParams));
    }
    invokeUpdateAccountSettings(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAccountSettings(this.ops["UpdateAccountSettings"].applicator.apply(partialParams));
    }
    invokeUpdateAnalysis(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAnalysis(this.ops["UpdateAnalysis"].applicator.apply(partialParams));
    }
    invokeUpdateAnalysisPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateAnalysisPermissions(this.ops["UpdateAnalysisPermissions"].applicator.apply(partialParams));
    }
    invokeUpdateDashboard(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDashboard(this.ops["UpdateDashboard"].applicator.apply(partialParams));
    }
    invokeUpdateDashboardPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDashboardPermissions(this.ops["UpdateDashboardPermissions"].applicator.apply(partialParams));
    }
    invokeUpdateDashboardPublishedVersion(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDashboardPublishedVersion(this.ops["UpdateDashboardPublishedVersion"].applicator.apply(partialParams));
    }
    invokeUpdateDataSet(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSet(this.ops["UpdateDataSet"].applicator.apply(partialParams));
    }
    invokeUpdateDataSetPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSetPermissions(this.ops["UpdateDataSetPermissions"].applicator.apply(partialParams));
    }
    invokeUpdateDataSource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSource(this.ops["UpdateDataSource"].applicator.apply(partialParams));
    }
    invokeUpdateDataSourcePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDataSourcePermissions(this.ops["UpdateDataSourcePermissions"].applicator.apply(partialParams));
    }
    invokeUpdateFolder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFolder(this.ops["UpdateFolder"].applicator.apply(partialParams));
    }
    invokeUpdateFolderPermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateFolderPermissions(this.ops["UpdateFolderPermissions"].applicator.apply(partialParams));
    }
    invokeUpdateGroup(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateGroup(this.ops["UpdateGroup"].applicator.apply(partialParams));
    }
    invokeUpdateIAMPolicyAssignment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIAMPolicyAssignment(this.ops["UpdateIAMPolicyAssignment"].applicator.apply(partialParams));
    }
    invokeUpdateIpRestriction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateIpRestriction(this.ops["UpdateIpRestriction"].applicator.apply(partialParams));
    }
    invokeUpdateTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplate(this.ops["UpdateTemplate"].applicator.apply(partialParams));
    }
    invokeUpdateTemplateAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplateAlias(this.ops["UpdateTemplateAlias"].applicator.apply(partialParams));
    }
    invokeUpdateTemplatePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTemplatePermissions(this.ops["UpdateTemplatePermissions"].applicator.apply(partialParams));
    }
    invokeUpdateTheme(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateTheme(this.ops["UpdateTheme"].applicator.apply(partialParams));
    }
    invokeUpdateThemeAlias(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThemeAlias(this.ops["UpdateThemeAlias"].applicator.apply(partialParams));
    }
    invokeUpdateThemePermissions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateThemePermissions(this.ops["UpdateThemePermissions"].applicator.apply(partialParams));
    }
    invokeUpdateUser(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateUser(this.ops["UpdateUser"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
