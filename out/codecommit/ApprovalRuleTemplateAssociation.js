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
class default_1 extends aws.codecommit.ApprovalRuleTemplateAssociation {
    constructor(...args) {
        super(...args);
        this.client = new awssdk.CodeCommit();
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
    invokeAssociateApprovalRuleTemplateWithRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApprovalRuleTemplateWithRepository(this.ops["AssociateApprovalRuleTemplateWithRepository"].applicator.apply(partialParams));
    }
    invokeBatchAssociateApprovalRuleTemplateWithRepositories(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchAssociateApprovalRuleTemplateWithRepositories(this.ops["BatchAssociateApprovalRuleTemplateWithRepositories"].applicator.apply(partialParams));
    }
    invokeBatchDescribeMergeConflicts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDescribeMergeConflicts(this.ops["BatchDescribeMergeConflicts"].applicator.apply(partialParams));
    }
    invokeBatchDisassociateApprovalRuleTemplateFromRepositories(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(this.ops["BatchDisassociateApprovalRuleTemplateFromRepositories"].applicator.apply(partialParams));
    }
    invokeBatchGetCommits(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetCommits(this.ops["BatchGetCommits"].applicator.apply(partialParams));
    }
    invokeBatchGetRepositories(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetRepositories(this.ops["BatchGetRepositories"].applicator.apply(partialParams));
    }
    invokeCreateApprovalRuleTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApprovalRuleTemplate(this.ops["CreateApprovalRuleTemplate"].applicator.apply(partialParams));
    }
    invokeCreateBranch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBranch(this.ops["CreateBranch"].applicator.apply(partialParams));
    }
    invokeCreateCommit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCommit(this.ops["CreateCommit"].applicator.apply(partialParams));
    }
    invokeCreatePullRequest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPullRequest(this.ops["CreatePullRequest"].applicator.apply(partialParams));
    }
    invokeCreatePullRequestApprovalRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPullRequestApprovalRule(this.ops["CreatePullRequestApprovalRule"].applicator.apply(partialParams));
    }
    invokeCreateRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRepository(this.ops["CreateRepository"].applicator.apply(partialParams));
    }
    invokeCreateUnreferencedMergeCommit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUnreferencedMergeCommit(this.ops["CreateUnreferencedMergeCommit"].applicator.apply(partialParams));
    }
    invokeDeleteApprovalRuleTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApprovalRuleTemplate(this.ops["DeleteApprovalRuleTemplate"].applicator.apply(partialParams));
    }
    invokeDeleteBranch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBranch(this.ops["DeleteBranch"].applicator.apply(partialParams));
    }
    invokeDeleteCommentContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCommentContent(this.ops["DeleteCommentContent"].applicator.apply(partialParams));
    }
    invokeDeleteFile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFile(this.ops["DeleteFile"].applicator.apply(partialParams));
    }
    invokeDeletePullRequestApprovalRule(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePullRequestApprovalRule(this.ops["DeletePullRequestApprovalRule"].applicator.apply(partialParams));
    }
    invokeDeleteRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepository(this.ops["DeleteRepository"].applicator.apply(partialParams));
    }
    invokeDescribeMergeConflicts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMergeConflicts(this.ops["DescribeMergeConflicts"].applicator.apply(partialParams));
    }
    invokeDescribePullRequestEvents(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePullRequestEvents(this.ops["DescribePullRequestEvents"].applicator.apply(partialParams));
    }
    invokeDisassociateApprovalRuleTemplateFromRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApprovalRuleTemplateFromRepository(this.ops["DisassociateApprovalRuleTemplateFromRepository"].applicator.apply(partialParams));
    }
    invokeEvaluatePullRequestApprovalRules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.evaluatePullRequestApprovalRules(this.ops["EvaluatePullRequestApprovalRules"].applicator.apply(partialParams));
    }
    invokeGetApprovalRuleTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApprovalRuleTemplate(this.ops["GetApprovalRuleTemplate"].applicator.apply(partialParams));
    }
    invokeGetBlob(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlob(this.ops["GetBlob"].applicator.apply(partialParams));
    }
    invokeGetComment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComment(this.ops["GetComment"].applicator.apply(partialParams));
    }
    invokeGetCommentReactions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommentReactions(this.ops["GetCommentReactions"].applicator.apply(partialParams));
    }
    invokeGetCommentsForComparedCommit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommentsForComparedCommit(this.ops["GetCommentsForComparedCommit"].applicator.apply(partialParams));
    }
    invokeGetCommentsForPullRequest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommentsForPullRequest(this.ops["GetCommentsForPullRequest"].applicator.apply(partialParams));
    }
    invokeGetCommit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommit(this.ops["GetCommit"].applicator.apply(partialParams));
    }
    invokeGetDifferences(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDifferences(this.ops["GetDifferences"].applicator.apply(partialParams));
    }
    invokeGetFile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFile(this.ops["GetFile"].applicator.apply(partialParams));
    }
    invokeGetFolder(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFolder(this.ops["GetFolder"].applicator.apply(partialParams));
    }
    invokeGetMergeCommit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMergeCommit(this.ops["GetMergeCommit"].applicator.apply(partialParams));
    }
    invokeGetMergeConflicts(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMergeConflicts(this.ops["GetMergeConflicts"].applicator.apply(partialParams));
    }
    invokeGetMergeOptions(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMergeOptions(this.ops["GetMergeOptions"].applicator.apply(partialParams));
    }
    invokeGetPullRequest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPullRequest(this.ops["GetPullRequest"].applicator.apply(partialParams));
    }
    invokeGetPullRequestApprovalStates(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPullRequestApprovalStates(this.ops["GetPullRequestApprovalStates"].applicator.apply(partialParams));
    }
    invokeGetPullRequestOverrideState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPullRequestOverrideState(this.ops["GetPullRequestOverrideState"].applicator.apply(partialParams));
    }
    invokeGetRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepository(this.ops["GetRepository"].applicator.apply(partialParams));
    }
    invokeGetRepositoryTriggers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepositoryTriggers(this.ops["GetRepositoryTriggers"].applicator.apply(partialParams));
    }
    invokeListAssociatedApprovalRuleTemplatesForRepository(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssociatedApprovalRuleTemplatesForRepository(this.ops["ListAssociatedApprovalRuleTemplatesForRepository"].applicator.apply(partialParams));
    }
    invokeListBranches(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBranches(this.ops["ListBranches"].applicator.apply(partialParams));
    }
    invokeListPullRequests(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPullRequests(this.ops["ListPullRequests"].applicator.apply(partialParams));
    }
    invokeListRepositoriesForApprovalRuleTemplate(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRepositoriesForApprovalRuleTemplate(this.ops["ListRepositoriesForApprovalRuleTemplate"].applicator.apply(partialParams));
    }
    invokeListTagsForResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(this.ops["ListTagsForResource"].applicator.apply(partialParams));
    }
    invokeMergeBranchesByFastForward(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeBranchesByFastForward(this.ops["MergeBranchesByFastForward"].applicator.apply(partialParams));
    }
    invokeMergeBranchesBySquash(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeBranchesBySquash(this.ops["MergeBranchesBySquash"].applicator.apply(partialParams));
    }
    invokeMergeBranchesByThreeWay(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeBranchesByThreeWay(this.ops["MergeBranchesByThreeWay"].applicator.apply(partialParams));
    }
    invokeMergePullRequestByFastForward(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergePullRequestByFastForward(this.ops["MergePullRequestByFastForward"].applicator.apply(partialParams));
    }
    invokeMergePullRequestBySquash(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergePullRequestBySquash(this.ops["MergePullRequestBySquash"].applicator.apply(partialParams));
    }
    invokeMergePullRequestByThreeWay(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergePullRequestByThreeWay(this.ops["MergePullRequestByThreeWay"].applicator.apply(partialParams));
    }
    invokeOverridePullRequestApprovalRules(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.overridePullRequestApprovalRules(this.ops["OverridePullRequestApprovalRules"].applicator.apply(partialParams));
    }
    invokePostCommentForComparedCommit(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.postCommentForComparedCommit(this.ops["PostCommentForComparedCommit"].applicator.apply(partialParams));
    }
    invokePostCommentForPullRequest(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.postCommentForPullRequest(this.ops["PostCommentForPullRequest"].applicator.apply(partialParams));
    }
    invokePostCommentReply(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.postCommentReply(this.ops["PostCommentReply"].applicator.apply(partialParams));
    }
    invokePutCommentReaction(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putCommentReaction(this.ops["PutCommentReaction"].applicator.apply(partialParams));
    }
    invokePutFile(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFile(this.ops["PutFile"].applicator.apply(partialParams));
    }
    invokePutRepositoryTriggers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRepositoryTriggers(this.ops["PutRepositoryTriggers"].applicator.apply(partialParams));
    }
    invokeTagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(this.ops["TagResource"].applicator.apply(partialParams));
    }
    invokeTestRepositoryTriggers(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testRepositoryTriggers(this.ops["TestRepositoryTriggers"].applicator.apply(partialParams));
    }
    invokeUntagResource(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(this.ops["UntagResource"].applicator.apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApprovalRuleTemplateContent(this.ops["UpdateApprovalRuleTemplateContent"].applicator.apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateDescription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApprovalRuleTemplateDescription(this.ops["UpdateApprovalRuleTemplateDescription"].applicator.apply(partialParams));
    }
    invokeUpdateApprovalRuleTemplateName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApprovalRuleTemplateName(this.ops["UpdateApprovalRuleTemplateName"].applicator.apply(partialParams));
    }
    invokeUpdateComment(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateComment(this.ops["UpdateComment"].applicator.apply(partialParams));
    }
    invokeUpdateDefaultBranch(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDefaultBranch(this.ops["UpdateDefaultBranch"].applicator.apply(partialParams));
    }
    invokeUpdatePullRequestApprovalRuleContent(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestApprovalRuleContent(this.ops["UpdatePullRequestApprovalRuleContent"].applicator.apply(partialParams));
    }
    invokeUpdatePullRequestApprovalState(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestApprovalState(this.ops["UpdatePullRequestApprovalState"].applicator.apply(partialParams));
    }
    invokeUpdatePullRequestDescription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestDescription(this.ops["UpdatePullRequestDescription"].applicator.apply(partialParams));
    }
    invokeUpdatePullRequestStatus(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestStatus(this.ops["UpdatePullRequestStatus"].applicator.apply(partialParams));
    }
    invokeUpdatePullRequestTitle(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestTitle(this.ops["UpdatePullRequestTitle"].applicator.apply(partialParams));
    }
    invokeUpdateRepositoryDescription(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRepositoryDescription(this.ops["UpdateRepositoryDescription"].applicator.apply(partialParams));
    }
    invokeUpdateRepositoryName(partialParams) {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRepositoryName(this.ops["UpdateRepositoryName"].applicator.apply(partialParams));
    }
}
exports.default = default_1;
