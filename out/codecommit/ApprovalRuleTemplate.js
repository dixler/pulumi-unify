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
const schema = require("../apis/codecommit-2015-04-13.normal.json");
const parse_1 = require("../parse");
class default_1 extends aws.codecommit.ApprovalRuleTemplate {
    constructor(...args) {
        super(...args);
        this.booted = false;
        this.client = new awssdk.CodeCommit();
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
    invokeBatchAssociateApprovalRuleTemplateWithRepositories(partialParams) {
        this.boot();
        return this.client.batchAssociateApprovalRuleTemplateWithRepositories(this.ops["BatchAssociateApprovalRuleTemplateWithRepositories"].apply(partialParams));
    }
    invokeBatchDescribeMergeConflicts(partialParams) {
        this.boot();
        return this.client.batchDescribeMergeConflicts(this.ops["BatchDescribeMergeConflicts"].apply(partialParams));
    }
    invokeBatchDisassociateApprovalRuleTemplateFromRepositories(partialParams) {
        this.boot();
        return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(this.ops["BatchDisassociateApprovalRuleTemplateFromRepositories"].apply(partialParams));
    }
    invokeBatchGetCommits(partialParams) {
        this.boot();
        return this.client.batchGetCommits(this.ops["BatchGetCommits"].apply(partialParams));
    }
    invokeBatchGetRepositories(partialParams) {
        this.boot();
        return this.client.batchGetRepositories(this.ops["BatchGetRepositories"].apply(partialParams));
    }
    invokeCreateApprovalRuleTemplate(partialParams) {
        this.boot();
        return this.client.createApprovalRuleTemplate(this.ops["CreateApprovalRuleTemplate"].apply(partialParams));
    }
    invokeCreateCommit(partialParams) {
        this.boot();
        return this.client.createCommit(this.ops["CreateCommit"].apply(partialParams));
    }
    invokeCreatePullRequest(partialParams) {
        this.boot();
        return this.client.createPullRequest(this.ops["CreatePullRequest"].apply(partialParams));
    }
    invokeCreatePullRequestApprovalRule(partialParams) {
        this.boot();
        return this.client.createPullRequestApprovalRule(this.ops["CreatePullRequestApprovalRule"].apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        this.boot();
        return this.client.createRepository(this.ops["CreateRepository"].apply(partialParams));
    }
    invokeCreateUnreferencedMergeCommit(partialParams) {
        this.boot();
        return this.client.createUnreferencedMergeCommit(this.ops["CreateUnreferencedMergeCommit"].apply(partialParams));
    }
    invokeDeleteApprovalRuleTemplate(partialParams) {
        this.boot();
        return this.client.deleteApprovalRuleTemplate(this.ops["DeleteApprovalRuleTemplate"].apply(partialParams));
    }
    invokeDeleteBranch(partialParams) {
        this.boot();
        return this.client.deleteBranch(this.ops["DeleteBranch"].apply(partialParams));
    }
    invokeDeleteCommentContent(partialParams) {
        this.boot();
        return this.client.deleteCommentContent(this.ops["DeleteCommentContent"].apply(partialParams));
    }
    invokeDeleteFile(partialParams) {
        this.boot();
        return this.client.deleteFile(this.ops["DeleteFile"].apply(partialParams));
    }
    invokeDeletePullRequestApprovalRule(partialParams) {
        this.boot();
        return this.client.deletePullRequestApprovalRule(this.ops["DeletePullRequestApprovalRule"].apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        this.boot();
        return this.client.deleteRepository(this.ops["DeleteRepository"].apply(partialParams));
    }
    invokeDescribeMergeConflicts(partialParams) {
        this.boot();
        return this.client.describeMergeConflicts(this.ops["DescribeMergeConflicts"].apply(partialParams));
    }
    invokeDescribePullRequestEvents(partialParams) {
        this.boot();
        return this.client.describePullRequestEvents(this.ops["DescribePullRequestEvents"].apply(partialParams));
    }
    invokeEvaluatePullRequestApprovalRules(partialParams) {
        this.boot();
        return this.client.evaluatePullRequestApprovalRules(this.ops["EvaluatePullRequestApprovalRules"].apply(partialParams));
    }
    invokeGetApprovalRuleTemplate(partialParams) {
        this.boot();
        return this.client.getApprovalRuleTemplate(this.ops["GetApprovalRuleTemplate"].apply(partialParams));
    }
    invokeGetBlob(partialParams) {
        this.boot();
        return this.client.getBlob(this.ops["GetBlob"].apply(partialParams));
    }
    invokeGetBranch(partialParams) {
        this.boot();
        return this.client.getBranch(this.ops["GetBranch"].apply(partialParams));
    }
    invokeGetComment(partialParams) {
        this.boot();
        return this.client.getComment(this.ops["GetComment"].apply(partialParams));
    }
    invokeGetCommentReactions(partialParams) {
        this.boot();
        return this.client.getCommentReactions(this.ops["GetCommentReactions"].apply(partialParams));
    }
    invokeGetCommentsForComparedCommit(partialParams) {
        this.boot();
        return this.client.getCommentsForComparedCommit(this.ops["GetCommentsForComparedCommit"].apply(partialParams));
    }
    invokeGetCommentsForPullRequest(partialParams) {
        this.boot();
        return this.client.getCommentsForPullRequest(this.ops["GetCommentsForPullRequest"].apply(partialParams));
    }
    invokeGetCommit(partialParams) {
        this.boot();
        return this.client.getCommit(this.ops["GetCommit"].apply(partialParams));
    }
    invokeGetDifferences(partialParams) {
        this.boot();
        return this.client.getDifferences(this.ops["GetDifferences"].apply(partialParams));
    }
    invokeGetFile(partialParams) {
        this.boot();
        return this.client.getFile(this.ops["GetFile"].apply(partialParams));
    }
    invokeGetFolder(partialParams) {
        this.boot();
        return this.client.getFolder(this.ops["GetFolder"].apply(partialParams));
    }
    invokeGetMergeCommit(partialParams) {
        this.boot();
        return this.client.getMergeCommit(this.ops["GetMergeCommit"].apply(partialParams));
    }
    invokeGetMergeConflicts(partialParams) {
        this.boot();
        return this.client.getMergeConflicts(this.ops["GetMergeConflicts"].apply(partialParams));
    }
    invokeGetMergeOptions(partialParams) {
        this.boot();
        return this.client.getMergeOptions(this.ops["GetMergeOptions"].apply(partialParams));
    }
    invokeGetPullRequest(partialParams) {
        this.boot();
        return this.client.getPullRequest(this.ops["GetPullRequest"].apply(partialParams));
    }
    invokeGetPullRequestApprovalStates(partialParams) {
        this.boot();
        return this.client.getPullRequestApprovalStates(this.ops["GetPullRequestApprovalStates"].apply(partialParams));
    }
    invokeGetPullRequestOverrideState(partialParams) {
        this.boot();
        return this.client.getPullRequestOverrideState(this.ops["GetPullRequestOverrideState"].apply(partialParams));
    }
    invokeGetRepository(partialParams) {
        this.boot();
        return this.client.getRepository(this.ops["GetRepository"].apply(partialParams));
    }
    invokeGetRepositoryTriggers(partialParams) {
        this.boot();
        return this.client.getRepositoryTriggers(this.ops["GetRepositoryTriggers"].apply(partialParams));
    }
    invokeListApprovalRuleTemplates(partialParams) {
        this.boot();
        return this.client.listApprovalRuleTemplates(this.ops["ListApprovalRuleTemplates"].apply(partialParams));
    }
    invokeListAssociatedApprovalRuleTemplatesForRepository(partialParams) {
        this.boot();
        return this.client.listAssociatedApprovalRuleTemplatesForRepository(this.ops["ListAssociatedApprovalRuleTemplatesForRepository"].apply(partialParams));
    }
    invokeListBranches(partialParams) {
        this.boot();
        return this.client.listBranches(this.ops["ListBranches"].apply(partialParams));
    }
    invokeListPullRequests(partialParams) {
        this.boot();
        return this.client.listPullRequests(this.ops["ListPullRequests"].apply(partialParams));
    }
    invokeListRepositories(partialParams) {
        this.boot();
        return this.client.listRepositories(this.ops["ListRepositories"].apply(partialParams));
    }
    invokeListRepositoriesForApprovalRuleTemplate(partialParams) {
        this.boot();
        return this.client.listRepositoriesForApprovalRuleTemplate(this.ops["ListRepositoriesForApprovalRuleTemplate"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeMergeBranchesByFastForward(partialParams) {
        this.boot();
        return this.client.mergeBranchesByFastForward(this.ops["MergeBranchesByFastForward"].apply(partialParams));
    }
    invokeMergeBranchesBySquash(partialParams) {
        this.boot();
        return this.client.mergeBranchesBySquash(this.ops["MergeBranchesBySquash"].apply(partialParams));
    }
    invokeMergeBranchesByThreeWay(partialParams) {
        this.boot();
        return this.client.mergeBranchesByThreeWay(this.ops["MergeBranchesByThreeWay"].apply(partialParams));
    }
    invokeMergePullRequestByFastForward(partialParams) {
        this.boot();
        return this.client.mergePullRequestByFastForward(this.ops["MergePullRequestByFastForward"].apply(partialParams));
    }
    invokeMergePullRequestBySquash(partialParams) {
        this.boot();
        return this.client.mergePullRequestBySquash(this.ops["MergePullRequestBySquash"].apply(partialParams));
    }
    invokeMergePullRequestByThreeWay(partialParams) {
        this.boot();
        return this.client.mergePullRequestByThreeWay(this.ops["MergePullRequestByThreeWay"].apply(partialParams));
    }
    invokePostCommentForComparedCommit(partialParams) {
        this.boot();
        return this.client.postCommentForComparedCommit(this.ops["PostCommentForComparedCommit"].apply(partialParams));
    }
    invokePostCommentForPullRequest(partialParams) {
        this.boot();
        return this.client.postCommentForPullRequest(this.ops["PostCommentForPullRequest"].apply(partialParams));
    }
    invokePostCommentReply(partialParams) {
        this.boot();
        return this.client.postCommentReply(this.ops["PostCommentReply"].apply(partialParams));
    }
    invokePutFile(partialParams) {
        this.boot();
        return this.client.putFile(this.ops["PutFile"].apply(partialParams));
    }
    invokePutRepositoryTriggers(partialParams) {
        this.boot();
        return this.client.putRepositoryTriggers(this.ops["PutRepositoryTriggers"].apply(partialParams));
    }
    invokeTestRepositoryTriggers(partialParams) {
        this.boot();
        return this.client.testRepositoryTriggers(this.ops["TestRepositoryTriggers"].apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateContent(partialParams) {
        this.boot();
        return this.client.updateApprovalRuleTemplateContent(this.ops["UpdateApprovalRuleTemplateContent"].apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateDescription(partialParams) {
        this.boot();
        return this.client.updateApprovalRuleTemplateDescription(this.ops["UpdateApprovalRuleTemplateDescription"].apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateName(partialParams) {
        this.boot();
        return this.client.updateApprovalRuleTemplateName(this.ops["UpdateApprovalRuleTemplateName"].apply(partialParams));
    }
    invokeUpdateComment(partialParams) {
        this.boot();
        return this.client.updateComment(this.ops["UpdateComment"].apply(partialParams));
    }
    invokeUpdatePullRequestApprovalRuleContent(partialParams) {
        this.boot();
        return this.client.updatePullRequestApprovalRuleContent(this.ops["UpdatePullRequestApprovalRuleContent"].apply(partialParams));
    }
    invokeUpdatePullRequestDescription(partialParams) {
        this.boot();
        return this.client.updatePullRequestDescription(this.ops["UpdatePullRequestDescription"].apply(partialParams));
    }
    invokeUpdatePullRequestStatus(partialParams) {
        this.boot();
        return this.client.updatePullRequestStatus(this.ops["UpdatePullRequestStatus"].apply(partialParams));
    }
    invokeUpdatePullRequestTitle(partialParams) {
        this.boot();
        return this.client.updatePullRequestTitle(this.ops["UpdatePullRequestTitle"].apply(partialParams));
    }
}
exports.default = default_1;
