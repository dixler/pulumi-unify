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
class default_1 extends aws.codecommit.Repository {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeCommit();
        this.ops = (0, parse_1.getResourceOperations)(this, require("../../aws-sdk-js/apis/codecommit-2015-04-13.normal.json"), this.client);
    }
    invokeAssociateApprovalRuleTemplateWithRepository(partialParams) {
        return this.client.associateApprovalRuleTemplateWithRepository(this.ops["AssociateApprovalRuleTemplateWithRepository"].apply(partialParams));
    }
    invokeBatchAssociateApprovalRuleTemplateWithRepositories(partialParams) {
        return this.client.batchAssociateApprovalRuleTemplateWithRepositories(this.ops["BatchAssociateApprovalRuleTemplateWithRepositories"].apply(partialParams));
    }
    invokeBatchDescribeMergeConflicts(partialParams) {
        return this.client.batchDescribeMergeConflicts(this.ops["BatchDescribeMergeConflicts"].apply(partialParams));
    }
    invokeBatchDisassociateApprovalRuleTemplateFromRepositories(partialParams) {
        return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(this.ops["BatchDisassociateApprovalRuleTemplateFromRepositories"].apply(partialParams));
    }
    invokeBatchGetCommits(partialParams) {
        return this.client.batchGetCommits(this.ops["BatchGetCommits"].apply(partialParams));
    }
    invokeBatchGetRepositories(partialParams) {
        return this.client.batchGetRepositories(this.ops["BatchGetRepositories"].apply(partialParams));
    }
    invokeCreateApprovalRuleTemplate(partialParams) {
        return this.client.createApprovalRuleTemplate(this.ops["CreateApprovalRuleTemplate"].apply(partialParams));
    }
    invokeCreateBranch(partialParams) {
        return this.client.createBranch(this.ops["CreateBranch"].apply(partialParams));
    }
    invokeCreateCommit(partialParams) {
        return this.client.createCommit(this.ops["CreateCommit"].apply(partialParams));
    }
    invokeCreatePullRequest(partialParams) {
        return this.client.createPullRequest(this.ops["CreatePullRequest"].apply(partialParams));
    }
    invokeCreatePullRequestApprovalRule(partialParams) {
        return this.client.createPullRequestApprovalRule(this.ops["CreatePullRequestApprovalRule"].apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        return this.client.createRepository(this.ops["CreateRepository"].apply(partialParams));
    }
    invokeCreateUnreferencedMergeCommit(partialParams) {
        return this.client.createUnreferencedMergeCommit(this.ops["CreateUnreferencedMergeCommit"].apply(partialParams));
    }
    invokeDeleteApprovalRuleTemplate(partialParams) {
        return this.client.deleteApprovalRuleTemplate(this.ops["DeleteApprovalRuleTemplate"].apply(partialParams));
    }
    invokeDeleteBranch(partialParams) {
        return this.client.deleteBranch(this.ops["DeleteBranch"].apply(partialParams));
    }
    invokeDeleteCommentContent(partialParams) {
        return this.client.deleteCommentContent(this.ops["DeleteCommentContent"].apply(partialParams));
    }
    invokeDeleteFile(partialParams) {
        return this.client.deleteFile(this.ops["DeleteFile"].apply(partialParams));
    }
    invokeDeletePullRequestApprovalRule(partialParams) {
        return this.client.deletePullRequestApprovalRule(this.ops["DeletePullRequestApprovalRule"].apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        return this.client.deleteRepository(this.ops["DeleteRepository"].apply(partialParams));
    }
    invokeDescribeMergeConflicts(partialParams) {
        return this.client.describeMergeConflicts(this.ops["DescribeMergeConflicts"].apply(partialParams));
    }
    invokeDescribePullRequestEvents(partialParams) {
        return this.client.describePullRequestEvents(this.ops["DescribePullRequestEvents"].apply(partialParams));
    }
    invokeDisassociateApprovalRuleTemplateFromRepository(partialParams) {
        return this.client.disassociateApprovalRuleTemplateFromRepository(this.ops["DisassociateApprovalRuleTemplateFromRepository"].apply(partialParams));
    }
    invokeEvaluatePullRequestApprovalRules(partialParams) {
        return this.client.evaluatePullRequestApprovalRules(this.ops["EvaluatePullRequestApprovalRules"].apply(partialParams));
    }
    invokeGetApprovalRuleTemplate(partialParams) {
        return this.client.getApprovalRuleTemplate(this.ops["GetApprovalRuleTemplate"].apply(partialParams));
    }
    invokeGetBlob(partialParams) {
        return this.client.getBlob(this.ops["GetBlob"].apply(partialParams));
    }
    invokeGetComment(partialParams) {
        return this.client.getComment(this.ops["GetComment"].apply(partialParams));
    }
    invokeGetCommentReactions(partialParams) {
        return this.client.getCommentReactions(this.ops["GetCommentReactions"].apply(partialParams));
    }
    invokeGetCommentsForComparedCommit(partialParams) {
        return this.client.getCommentsForComparedCommit(this.ops["GetCommentsForComparedCommit"].apply(partialParams));
    }
    invokeGetCommentsForPullRequest(partialParams) {
        return this.client.getCommentsForPullRequest(this.ops["GetCommentsForPullRequest"].apply(partialParams));
    }
    invokeGetCommit(partialParams) {
        return this.client.getCommit(this.ops["GetCommit"].apply(partialParams));
    }
    invokeGetDifferences(partialParams) {
        return this.client.getDifferences(this.ops["GetDifferences"].apply(partialParams));
    }
    invokeGetFile(partialParams) {
        return this.client.getFile(this.ops["GetFile"].apply(partialParams));
    }
    invokeGetFolder(partialParams) {
        return this.client.getFolder(this.ops["GetFolder"].apply(partialParams));
    }
    invokeGetMergeCommit(partialParams) {
        return this.client.getMergeCommit(this.ops["GetMergeCommit"].apply(partialParams));
    }
    invokeGetMergeConflicts(partialParams) {
        return this.client.getMergeConflicts(this.ops["GetMergeConflicts"].apply(partialParams));
    }
    invokeGetMergeOptions(partialParams) {
        return this.client.getMergeOptions(this.ops["GetMergeOptions"].apply(partialParams));
    }
    invokeGetPullRequest(partialParams) {
        return this.client.getPullRequest(this.ops["GetPullRequest"].apply(partialParams));
    }
    invokeGetPullRequestApprovalStates(partialParams) {
        return this.client.getPullRequestApprovalStates(this.ops["GetPullRequestApprovalStates"].apply(partialParams));
    }
    invokeGetPullRequestOverrideState(partialParams) {
        return this.client.getPullRequestOverrideState(this.ops["GetPullRequestOverrideState"].apply(partialParams));
    }
    invokeGetRepository(partialParams) {
        return this.client.getRepository(this.ops["GetRepository"].apply(partialParams));
    }
    invokeGetRepositoryTriggers(partialParams) {
        return this.client.getRepositoryTriggers(this.ops["GetRepositoryTriggers"].apply(partialParams));
    }
    invokeListAssociatedApprovalRuleTemplatesForRepository(partialParams) {
        return this.client.listAssociatedApprovalRuleTemplatesForRepository(this.ops["ListAssociatedApprovalRuleTemplatesForRepository"].apply(partialParams));
    }
    invokeListBranches(partialParams) {
        return this.client.listBranches(this.ops["ListBranches"].apply(partialParams));
    }
    invokeListPullRequests(partialParams) {
        return this.client.listPullRequests(this.ops["ListPullRequests"].apply(partialParams));
    }
    invokeListRepositoriesForApprovalRuleTemplate(partialParams) {
        return this.client.listRepositoriesForApprovalRuleTemplate(this.ops["ListRepositoriesForApprovalRuleTemplate"].apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].apply(partialParams));
    }
    invokeMergeBranchesByFastForward(partialParams) {
        return this.client.mergeBranchesByFastForward(this.ops["MergeBranchesByFastForward"].apply(partialParams));
    }
    invokeMergeBranchesBySquash(partialParams) {
        return this.client.mergeBranchesBySquash(this.ops["MergeBranchesBySquash"].apply(partialParams));
    }
    invokeMergeBranchesByThreeWay(partialParams) {
        return this.client.mergeBranchesByThreeWay(this.ops["MergeBranchesByThreeWay"].apply(partialParams));
    }
    invokeMergePullRequestByFastForward(partialParams) {
        return this.client.mergePullRequestByFastForward(this.ops["MergePullRequestByFastForward"].apply(partialParams));
    }
    invokeMergePullRequestBySquash(partialParams) {
        return this.client.mergePullRequestBySquash(this.ops["MergePullRequestBySquash"].apply(partialParams));
    }
    invokeMergePullRequestByThreeWay(partialParams) {
        return this.client.mergePullRequestByThreeWay(this.ops["MergePullRequestByThreeWay"].apply(partialParams));
    }
    invokeOverridePullRequestApprovalRules(partialParams) {
        return this.client.overridePullRequestApprovalRules(this.ops["OverridePullRequestApprovalRules"].apply(partialParams));
    }
    invokePostCommentForComparedCommit(partialParams) {
        return this.client.postCommentForComparedCommit(this.ops["PostCommentForComparedCommit"].apply(partialParams));
    }
    invokePostCommentForPullRequest(partialParams) {
        return this.client.postCommentForPullRequest(this.ops["PostCommentForPullRequest"].apply(partialParams));
    }
    invokePostCommentReply(partialParams) {
        return this.client.postCommentReply(this.ops["PostCommentReply"].apply(partialParams));
    }
    invokePutCommentReaction(partialParams) {
        return this.client.putCommentReaction(this.ops["PutCommentReaction"].apply(partialParams));
    }
    invokePutFile(partialParams) {
        return this.client.putFile(this.ops["PutFile"].apply(partialParams));
    }
    invokePutRepositoryTriggers(partialParams) {
        return this.client.putRepositoryTriggers(this.ops["PutRepositoryTriggers"].apply(partialParams));
    }
    invokeTagResource(partialParams) {
        return this.client.tagResource(this.ops["TagResource"].apply(partialParams));
    }
    invokeTestRepositoryTriggers(partialParams) {
        return this.client.testRepositoryTriggers(this.ops["TestRepositoryTriggers"].apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        return this.client.untagResource(this.ops["UntagResource"].apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateContent(partialParams) {
        return this.client.updateApprovalRuleTemplateContent(this.ops["UpdateApprovalRuleTemplateContent"].apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateDescription(partialParams) {
        return this.client.updateApprovalRuleTemplateDescription(this.ops["UpdateApprovalRuleTemplateDescription"].apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateName(partialParams) {
        return this.client.updateApprovalRuleTemplateName(this.ops["UpdateApprovalRuleTemplateName"].apply(partialParams));
    }
    invokeUpdateComment(partialParams) {
        return this.client.updateComment(this.ops["UpdateComment"].apply(partialParams));
    }
    invokeUpdateDefaultBranch(partialParams) {
        return this.client.updateDefaultBranch(this.ops["UpdateDefaultBranch"].apply(partialParams));
    }
    invokeUpdatePullRequestApprovalRuleContent(partialParams) {
        return this.client.updatePullRequestApprovalRuleContent(this.ops["UpdatePullRequestApprovalRuleContent"].apply(partialParams));
    }
    invokeUpdatePullRequestApprovalState(partialParams) {
        return this.client.updatePullRequestApprovalState(this.ops["UpdatePullRequestApprovalState"].apply(partialParams));
    }
    invokeUpdatePullRequestDescription(partialParams) {
        return this.client.updatePullRequestDescription(this.ops["UpdatePullRequestDescription"].apply(partialParams));
    }
    invokeUpdatePullRequestStatus(partialParams) {
        return this.client.updatePullRequestStatus(this.ops["UpdatePullRequestStatus"].apply(partialParams));
    }
    invokeUpdatePullRequestTitle(partialParams) {
        return this.client.updatePullRequestTitle(this.ops["UpdatePullRequestTitle"].apply(partialParams));
    }
    invokeUpdateRepositoryDescription(partialParams) {
        return this.client.updateRepositoryDescription(this.ops["UpdateRepositoryDescription"].apply(partialParams));
    }
    invokeUpdateRepositoryName(partialParams) {
        return this.client.updateRepositoryName(this.ops["UpdateRepositoryName"].apply(partialParams));
    }
}
exports.default = default_1;
