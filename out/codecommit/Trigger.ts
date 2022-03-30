
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    AssociateApprovalRuleTemplateWithRepositoryInput,
    BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
    BatchDescribeMergeConflictsInput,
    BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
    BatchGetCommitsInput,
    BatchGetRepositoriesInput,
    CreateApprovalRuleTemplateInput,
    CreateBranchInput,
    CreateCommitInput,
    CreatePullRequestInput,
    CreatePullRequestApprovalRuleInput,
    CreateRepositoryInput,
    CreateUnreferencedMergeCommitInput,
    DeleteApprovalRuleTemplateInput,
    DeleteBranchInput,
    DeleteCommentContentInput,
    DeleteFileInput,
    DeletePullRequestApprovalRuleInput,
    DeleteRepositoryInput,
    DescribeMergeConflictsInput,
    DescribePullRequestEventsInput,
    DisassociateApprovalRuleTemplateFromRepositoryInput,
    EvaluatePullRequestApprovalRulesInput,
    GetApprovalRuleTemplateInput,
    GetBlobInput,
    GetCommentInput,
    GetCommentReactionsInput,
    GetCommentsForComparedCommitInput,
    GetCommentsForPullRequestInput,
    GetCommitInput,
    GetDifferencesInput,
    GetFileInput,
    GetFolderInput,
    GetMergeCommitInput,
    GetMergeConflictsInput,
    GetMergeOptionsInput,
    GetPullRequestInput,
    GetPullRequestApprovalStatesInput,
    GetPullRequestOverrideStateInput,
    GetRepositoryInput,
    GetRepositoryTriggersInput,
    ListAssociatedApprovalRuleTemplatesForRepositoryInput,
    ListBranchesInput,
    ListPullRequestsInput,
    ListRepositoriesForApprovalRuleTemplateInput,
    ListTagsForResourceInput,
    MergeBranchesByFastForwardInput,
    MergeBranchesBySquashInput,
    MergeBranchesByThreeWayInput,
    MergePullRequestByFastForwardInput,
    MergePullRequestBySquashInput,
    MergePullRequestByThreeWayInput,
    OverridePullRequestApprovalRulesInput,
    PostCommentForComparedCommitInput,
    PostCommentForPullRequestInput,
    PostCommentReplyInput,
    PutCommentReactionInput,
    PutFileInput,
    PutRepositoryTriggersInput,
    TagResourceInput,
    TestRepositoryTriggersInput,
    UntagResourceInput,
    UpdateApprovalRuleTemplateContentInput,
    UpdateApprovalRuleTemplateDescriptionInput,
    UpdateApprovalRuleTemplateNameInput,
    UpdateCommentInput,
    UpdateDefaultBranchInput,
    UpdatePullRequestApprovalRuleContentInput,
    UpdatePullRequestApprovalStateInput,
    UpdatePullRequestDescriptionInput,
    UpdatePullRequestStatusInput,
    UpdatePullRequestTitleInput,
    UpdateRepositoryDescriptionInput,
    UpdateRepositoryNameInput,
    BatchAssociateApprovalRuleTemplateWithRepositoriesOutput,
    BatchDescribeMergeConflictsOutput,
    BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput,
    BatchGetCommitsOutput,
    BatchGetRepositoriesOutput,
    CreateApprovalRuleTemplateOutput,
    CreateCommitOutput,
    CreatePullRequestOutput,
    CreatePullRequestApprovalRuleOutput,
    CreateRepositoryOutput,
    CreateUnreferencedMergeCommitOutput,
    DeleteApprovalRuleTemplateOutput,
    DeleteBranchOutput,
    DeleteCommentContentOutput,
    DeleteFileOutput,
    DeletePullRequestApprovalRuleOutput,
    DeleteRepositoryOutput,
    DescribeMergeConflictsOutput,
    DescribePullRequestEventsOutput,
    EvaluatePullRequestApprovalRulesOutput,
    GetApprovalRuleTemplateOutput,
    GetBlobOutput,
    GetCommentOutput,
    GetCommentReactionsOutput,
    GetCommentsForComparedCommitOutput,
    GetCommentsForPullRequestOutput,
    GetCommitOutput,
    GetDifferencesOutput,
    GetFileOutput,
    GetFolderOutput,
    GetMergeCommitOutput,
    GetMergeConflictsOutput,
    GetMergeOptionsOutput,
    GetPullRequestOutput,
    GetPullRequestApprovalStatesOutput,
    GetPullRequestOverrideStateOutput,
    GetRepositoryOutput,
    GetRepositoryTriggersOutput,
    ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
    ListBranchesOutput,
    ListPullRequestsOutput,
    ListRepositoriesForApprovalRuleTemplateOutput,
    ListTagsForResourceOutput,
    MergeBranchesByFastForwardOutput,
    MergeBranchesBySquashOutput,
    MergeBranchesByThreeWayOutput,
    MergePullRequestByFastForwardOutput,
    MergePullRequestBySquashOutput,
    MergePullRequestByThreeWayOutput,
    PostCommentForComparedCommitOutput,
    PostCommentForPullRequestOutput,
    PostCommentReplyOutput,
    PutFileOutput,
    PutRepositoryTriggersOutput,
    TestRepositoryTriggersOutput,
    UpdateApprovalRuleTemplateContentOutput,
    UpdateApprovalRuleTemplateDescriptionOutput,
    UpdateApprovalRuleTemplateNameOutput,
    UpdateCommentOutput,
    UpdatePullRequestApprovalRuleContentOutput,
    UpdatePullRequestDescriptionOutput,
    UpdatePullRequestStatusOutput,
    UpdatePullRequestTitleOutput
} from "aws-sdk/clients/codecommit";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codecommit.Trigger {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.codecommit.Trigger>) {
        super(...args)
        this.client = new awssdk.CodeCommit()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/codecommit-2015-04-13.normal.json"), this.client)
    }

    invokeAssociateApprovalRuleTemplateWithRepository(partialParams: ToOptional<{
      [K in keyof AssociateApprovalRuleTemplateWithRepositoryInput & keyof AssociateApprovalRuleTemplateWithRepositoryInput]: (AssociateApprovalRuleTemplateWithRepositoryInput & AssociateApprovalRuleTemplateWithRepositoryInput)[K]
    }>): void {
        return this.client.associateApprovalRuleTemplateWithRepository(
            this.ops["AssociateApprovalRuleTemplateWithRepository"].apply(partialParams)
        );
    }

    invokeBatchAssociateApprovalRuleTemplateWithRepositories(partialParams: ToOptional<{
      [K in keyof BatchAssociateApprovalRuleTemplateWithRepositoriesInput & keyof BatchAssociateApprovalRuleTemplateWithRepositoriesInput]: (BatchAssociateApprovalRuleTemplateWithRepositoriesInput & BatchAssociateApprovalRuleTemplateWithRepositoriesInput)[K]
    }>): BatchAssociateApprovalRuleTemplateWithRepositoriesOutput {
        return this.client.batchAssociateApprovalRuleTemplateWithRepositories(
            this.ops["BatchAssociateApprovalRuleTemplateWithRepositories"].apply(partialParams)
        );
    }

    invokeBatchDescribeMergeConflicts(partialParams: ToOptional<{
      [K in keyof BatchDescribeMergeConflictsInput & keyof BatchDescribeMergeConflictsInput]: (BatchDescribeMergeConflictsInput & BatchDescribeMergeConflictsInput)[K]
    }>): BatchDescribeMergeConflictsOutput {
        return this.client.batchDescribeMergeConflicts(
            this.ops["BatchDescribeMergeConflicts"].apply(partialParams)
        );
    }

    invokeBatchDisassociateApprovalRuleTemplateFromRepositories(partialParams: ToOptional<{
      [K in keyof BatchDisassociateApprovalRuleTemplateFromRepositoriesInput & keyof BatchDisassociateApprovalRuleTemplateFromRepositoriesInput]: (BatchDisassociateApprovalRuleTemplateFromRepositoriesInput & BatchDisassociateApprovalRuleTemplateFromRepositoriesInput)[K]
    }>): BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput {
        return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(
            this.ops["BatchDisassociateApprovalRuleTemplateFromRepositories"].apply(partialParams)
        );
    }

    invokeBatchGetCommits(partialParams: ToOptional<{
      [K in keyof BatchGetCommitsInput & keyof BatchGetCommitsInput]: (BatchGetCommitsInput & BatchGetCommitsInput)[K]
    }>): BatchGetCommitsOutput {
        return this.client.batchGetCommits(
            this.ops["BatchGetCommits"].apply(partialParams)
        );
    }

    invokeBatchGetRepositories(partialParams: ToOptional<{
      [K in keyof BatchGetRepositoriesInput & keyof BatchGetRepositoriesInput]: (BatchGetRepositoriesInput & BatchGetRepositoriesInput)[K]
    }>): BatchGetRepositoriesOutput {
        return this.client.batchGetRepositories(
            this.ops["BatchGetRepositories"].apply(partialParams)
        );
    }

    invokeCreateApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof CreateApprovalRuleTemplateInput & keyof CreateApprovalRuleTemplateInput]: (CreateApprovalRuleTemplateInput & CreateApprovalRuleTemplateInput)[K]
    }>): CreateApprovalRuleTemplateOutput {
        return this.client.createApprovalRuleTemplate(
            this.ops["CreateApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeCreateBranch(partialParams: ToOptional<{
      [K in keyof CreateBranchInput & keyof CreateBranchInput]: (CreateBranchInput & CreateBranchInput)[K]
    }>): void {
        return this.client.createBranch(
            this.ops["CreateBranch"].apply(partialParams)
        );
    }

    invokeCreateCommit(partialParams: ToOptional<{
      [K in keyof CreateCommitInput & keyof CreateCommitInput]: (CreateCommitInput & CreateCommitInput)[K]
    }>): CreateCommitOutput {
        return this.client.createCommit(
            this.ops["CreateCommit"].apply(partialParams)
        );
    }

    invokeCreatePullRequest(partialParams: ToOptional<{
      [K in keyof CreatePullRequestInput & keyof CreatePullRequestInput]: (CreatePullRequestInput & CreatePullRequestInput)[K]
    }>): CreatePullRequestOutput {
        return this.client.createPullRequest(
            this.ops["CreatePullRequest"].apply(partialParams)
        );
    }

    invokeCreatePullRequestApprovalRule(partialParams: ToOptional<{
      [K in keyof CreatePullRequestApprovalRuleInput & keyof CreatePullRequestApprovalRuleInput]: (CreatePullRequestApprovalRuleInput & CreatePullRequestApprovalRuleInput)[K]
    }>): CreatePullRequestApprovalRuleOutput {
        return this.client.createPullRequestApprovalRule(
            this.ops["CreatePullRequestApprovalRule"].apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryInput & keyof CreateRepositoryInput]: (CreateRepositoryInput & CreateRepositoryInput)[K]
    }>): CreateRepositoryOutput {
        return this.client.createRepository(
            this.ops["CreateRepository"].apply(partialParams)
        );
    }

    invokeCreateUnreferencedMergeCommit(partialParams: ToOptional<{
      [K in keyof CreateUnreferencedMergeCommitInput & keyof CreateUnreferencedMergeCommitInput]: (CreateUnreferencedMergeCommitInput & CreateUnreferencedMergeCommitInput)[K]
    }>): CreateUnreferencedMergeCommitOutput {
        return this.client.createUnreferencedMergeCommit(
            this.ops["CreateUnreferencedMergeCommit"].apply(partialParams)
        );
    }

    invokeDeleteApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof DeleteApprovalRuleTemplateInput & keyof DeleteApprovalRuleTemplateInput]: (DeleteApprovalRuleTemplateInput & DeleteApprovalRuleTemplateInput)[K]
    }>): DeleteApprovalRuleTemplateOutput {
        return this.client.deleteApprovalRuleTemplate(
            this.ops["DeleteApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof DeleteBranchInput & keyof DeleteBranchInput]: (DeleteBranchInput & DeleteBranchInput)[K]
    }>): DeleteBranchOutput {
        return this.client.deleteBranch(
            this.ops["DeleteBranch"].apply(partialParams)
        );
    }

    invokeDeleteCommentContent(partialParams: ToOptional<{
      [K in keyof DeleteCommentContentInput & keyof DeleteCommentContentInput]: (DeleteCommentContentInput & DeleteCommentContentInput)[K]
    }>): DeleteCommentContentOutput {
        return this.client.deleteCommentContent(
            this.ops["DeleteCommentContent"].apply(partialParams)
        );
    }

    invokeDeleteFile(partialParams: ToOptional<{
      [K in keyof DeleteFileInput & keyof DeleteFileInput]: (DeleteFileInput & DeleteFileInput)[K]
    }>): DeleteFileOutput {
        return this.client.deleteFile(
            this.ops["DeleteFile"].apply(partialParams)
        );
    }

    invokeDeletePullRequestApprovalRule(partialParams: ToOptional<{
      [K in keyof DeletePullRequestApprovalRuleInput & keyof DeletePullRequestApprovalRuleInput]: (DeletePullRequestApprovalRuleInput & DeletePullRequestApprovalRuleInput)[K]
    }>): DeletePullRequestApprovalRuleOutput {
        return this.client.deletePullRequestApprovalRule(
            this.ops["DeletePullRequestApprovalRule"].apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryInput & keyof DeleteRepositoryInput]: (DeleteRepositoryInput & DeleteRepositoryInput)[K]
    }>): DeleteRepositoryOutput {
        return this.client.deleteRepository(
            this.ops["DeleteRepository"].apply(partialParams)
        );
    }

    invokeDescribeMergeConflicts(partialParams: ToOptional<{
      [K in keyof DescribeMergeConflictsInput & keyof DescribeMergeConflictsInput]: (DescribeMergeConflictsInput & DescribeMergeConflictsInput)[K]
    }>): DescribeMergeConflictsOutput {
        return this.client.describeMergeConflicts(
            this.ops["DescribeMergeConflicts"].apply(partialParams)
        );
    }

    invokeDescribePullRequestEvents(partialParams: ToOptional<{
      [K in keyof DescribePullRequestEventsInput & keyof DescribePullRequestEventsInput]: (DescribePullRequestEventsInput & DescribePullRequestEventsInput)[K]
    }>): DescribePullRequestEventsOutput {
        return this.client.describePullRequestEvents(
            this.ops["DescribePullRequestEvents"].apply(partialParams)
        );
    }

    invokeDisassociateApprovalRuleTemplateFromRepository(partialParams: ToOptional<{
      [K in keyof DisassociateApprovalRuleTemplateFromRepositoryInput & keyof DisassociateApprovalRuleTemplateFromRepositoryInput]: (DisassociateApprovalRuleTemplateFromRepositoryInput & DisassociateApprovalRuleTemplateFromRepositoryInput)[K]
    }>): void {
        return this.client.disassociateApprovalRuleTemplateFromRepository(
            this.ops["DisassociateApprovalRuleTemplateFromRepository"].apply(partialParams)
        );
    }

    invokeEvaluatePullRequestApprovalRules(partialParams: ToOptional<{
      [K in keyof EvaluatePullRequestApprovalRulesInput & keyof EvaluatePullRequestApprovalRulesInput]: (EvaluatePullRequestApprovalRulesInput & EvaluatePullRequestApprovalRulesInput)[K]
    }>): EvaluatePullRequestApprovalRulesOutput {
        return this.client.evaluatePullRequestApprovalRules(
            this.ops["EvaluatePullRequestApprovalRules"].apply(partialParams)
        );
    }

    invokeGetApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof GetApprovalRuleTemplateInput & keyof GetApprovalRuleTemplateInput]: (GetApprovalRuleTemplateInput & GetApprovalRuleTemplateInput)[K]
    }>): GetApprovalRuleTemplateOutput {
        return this.client.getApprovalRuleTemplate(
            this.ops["GetApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeGetBlob(partialParams: ToOptional<{
      [K in keyof GetBlobInput & keyof GetBlobInput]: (GetBlobInput & GetBlobInput)[K]
    }>): GetBlobOutput {
        return this.client.getBlob(
            this.ops["GetBlob"].apply(partialParams)
        );
    }

    invokeGetComment(partialParams: ToOptional<{
      [K in keyof GetCommentInput & keyof GetCommentInput]: (GetCommentInput & GetCommentInput)[K]
    }>): GetCommentOutput {
        return this.client.getComment(
            this.ops["GetComment"].apply(partialParams)
        );
    }

    invokeGetCommentReactions(partialParams: ToOptional<{
      [K in keyof GetCommentReactionsInput & keyof GetCommentReactionsInput]: (GetCommentReactionsInput & GetCommentReactionsInput)[K]
    }>): GetCommentReactionsOutput {
        return this.client.getCommentReactions(
            this.ops["GetCommentReactions"].apply(partialParams)
        );
    }

    invokeGetCommentsForComparedCommit(partialParams: ToOptional<{
      [K in keyof GetCommentsForComparedCommitInput & keyof GetCommentsForComparedCommitInput]: (GetCommentsForComparedCommitInput & GetCommentsForComparedCommitInput)[K]
    }>): GetCommentsForComparedCommitOutput {
        return this.client.getCommentsForComparedCommit(
            this.ops["GetCommentsForComparedCommit"].apply(partialParams)
        );
    }

    invokeGetCommentsForPullRequest(partialParams: ToOptional<{
      [K in keyof GetCommentsForPullRequestInput & keyof GetCommentsForPullRequestInput]: (GetCommentsForPullRequestInput & GetCommentsForPullRequestInput)[K]
    }>): GetCommentsForPullRequestOutput {
        return this.client.getCommentsForPullRequest(
            this.ops["GetCommentsForPullRequest"].apply(partialParams)
        );
    }

    invokeGetCommit(partialParams: ToOptional<{
      [K in keyof GetCommitInput & keyof GetCommitInput]: (GetCommitInput & GetCommitInput)[K]
    }>): GetCommitOutput {
        return this.client.getCommit(
            this.ops["GetCommit"].apply(partialParams)
        );
    }

    invokeGetDifferences(partialParams: ToOptional<{
      [K in keyof GetDifferencesInput & keyof GetDifferencesInput]: (GetDifferencesInput & GetDifferencesInput)[K]
    }>): GetDifferencesOutput {
        return this.client.getDifferences(
            this.ops["GetDifferences"].apply(partialParams)
        );
    }

    invokeGetFile(partialParams: ToOptional<{
      [K in keyof GetFileInput & keyof GetFileInput]: (GetFileInput & GetFileInput)[K]
    }>): GetFileOutput {
        return this.client.getFile(
            this.ops["GetFile"].apply(partialParams)
        );
    }

    invokeGetFolder(partialParams: ToOptional<{
      [K in keyof GetFolderInput & keyof GetFolderInput]: (GetFolderInput & GetFolderInput)[K]
    }>): GetFolderOutput {
        return this.client.getFolder(
            this.ops["GetFolder"].apply(partialParams)
        );
    }

    invokeGetMergeCommit(partialParams: ToOptional<{
      [K in keyof GetMergeCommitInput & keyof GetMergeCommitInput]: (GetMergeCommitInput & GetMergeCommitInput)[K]
    }>): GetMergeCommitOutput {
        return this.client.getMergeCommit(
            this.ops["GetMergeCommit"].apply(partialParams)
        );
    }

    invokeGetMergeConflicts(partialParams: ToOptional<{
      [K in keyof GetMergeConflictsInput & keyof GetMergeConflictsInput]: (GetMergeConflictsInput & GetMergeConflictsInput)[K]
    }>): GetMergeConflictsOutput {
        return this.client.getMergeConflicts(
            this.ops["GetMergeConflicts"].apply(partialParams)
        );
    }

    invokeGetMergeOptions(partialParams: ToOptional<{
      [K in keyof GetMergeOptionsInput & keyof GetMergeOptionsInput]: (GetMergeOptionsInput & GetMergeOptionsInput)[K]
    }>): GetMergeOptionsOutput {
        return this.client.getMergeOptions(
            this.ops["GetMergeOptions"].apply(partialParams)
        );
    }

    invokeGetPullRequest(partialParams: ToOptional<{
      [K in keyof GetPullRequestInput & keyof GetPullRequestInput]: (GetPullRequestInput & GetPullRequestInput)[K]
    }>): GetPullRequestOutput {
        return this.client.getPullRequest(
            this.ops["GetPullRequest"].apply(partialParams)
        );
    }

    invokeGetPullRequestApprovalStates(partialParams: ToOptional<{
      [K in keyof GetPullRequestApprovalStatesInput & keyof GetPullRequestApprovalStatesInput]: (GetPullRequestApprovalStatesInput & GetPullRequestApprovalStatesInput)[K]
    }>): GetPullRequestApprovalStatesOutput {
        return this.client.getPullRequestApprovalStates(
            this.ops["GetPullRequestApprovalStates"].apply(partialParams)
        );
    }

    invokeGetPullRequestOverrideState(partialParams: ToOptional<{
      [K in keyof GetPullRequestOverrideStateInput & keyof GetPullRequestOverrideStateInput]: (GetPullRequestOverrideStateInput & GetPullRequestOverrideStateInput)[K]
    }>): GetPullRequestOverrideStateOutput {
        return this.client.getPullRequestOverrideState(
            this.ops["GetPullRequestOverrideState"].apply(partialParams)
        );
    }

    invokeGetRepository(partialParams: ToOptional<{
      [K in keyof GetRepositoryInput & keyof GetRepositoryInput]: (GetRepositoryInput & GetRepositoryInput)[K]
    }>): GetRepositoryOutput {
        return this.client.getRepository(
            this.ops["GetRepository"].apply(partialParams)
        );
    }

    invokeGetRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof GetRepositoryTriggersInput & keyof GetRepositoryTriggersInput]: (GetRepositoryTriggersInput & GetRepositoryTriggersInput)[K]
    }>): GetRepositoryTriggersOutput {
        return this.client.getRepositoryTriggers(
            this.ops["GetRepositoryTriggers"].apply(partialParams)
        );
    }

    invokeListAssociatedApprovalRuleTemplatesForRepository(partialParams: ToOptional<{
      [K in keyof ListAssociatedApprovalRuleTemplatesForRepositoryInput & keyof ListAssociatedApprovalRuleTemplatesForRepositoryInput]: (ListAssociatedApprovalRuleTemplatesForRepositoryInput & ListAssociatedApprovalRuleTemplatesForRepositoryInput)[K]
    }>): ListAssociatedApprovalRuleTemplatesForRepositoryOutput {
        return this.client.listAssociatedApprovalRuleTemplatesForRepository(
            this.ops["ListAssociatedApprovalRuleTemplatesForRepository"].apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof ListBranchesInput & keyof ListBranchesInput]: (ListBranchesInput & ListBranchesInput)[K]
    }>): ListBranchesOutput {
        return this.client.listBranches(
            this.ops["ListBranches"].apply(partialParams)
        );
    }

    invokeListPullRequests(partialParams: ToOptional<{
      [K in keyof ListPullRequestsInput & keyof ListPullRequestsInput]: (ListPullRequestsInput & ListPullRequestsInput)[K]
    }>): ListPullRequestsOutput {
        return this.client.listPullRequests(
            this.ops["ListPullRequests"].apply(partialParams)
        );
    }

    invokeListRepositoriesForApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof ListRepositoriesForApprovalRuleTemplateInput & keyof ListRepositoriesForApprovalRuleTemplateInput]: (ListRepositoriesForApprovalRuleTemplateInput & ListRepositoriesForApprovalRuleTemplateInput)[K]
    }>): ListRepositoriesForApprovalRuleTemplateOutput {
        return this.client.listRepositoriesForApprovalRuleTemplate(
            this.ops["ListRepositoriesForApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): ListTagsForResourceOutput {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeMergeBranchesByFastForward(partialParams: ToOptional<{
      [K in keyof MergeBranchesByFastForwardInput & keyof MergeBranchesByFastForwardInput]: (MergeBranchesByFastForwardInput & MergeBranchesByFastForwardInput)[K]
    }>): MergeBranchesByFastForwardOutput {
        return this.client.mergeBranchesByFastForward(
            this.ops["MergeBranchesByFastForward"].apply(partialParams)
        );
    }

    invokeMergeBranchesBySquash(partialParams: ToOptional<{
      [K in keyof MergeBranchesBySquashInput & keyof MergeBranchesBySquashInput]: (MergeBranchesBySquashInput & MergeBranchesBySquashInput)[K]
    }>): MergeBranchesBySquashOutput {
        return this.client.mergeBranchesBySquash(
            this.ops["MergeBranchesBySquash"].apply(partialParams)
        );
    }

    invokeMergeBranchesByThreeWay(partialParams: ToOptional<{
      [K in keyof MergeBranchesByThreeWayInput & keyof MergeBranchesByThreeWayInput]: (MergeBranchesByThreeWayInput & MergeBranchesByThreeWayInput)[K]
    }>): MergeBranchesByThreeWayOutput {
        return this.client.mergeBranchesByThreeWay(
            this.ops["MergeBranchesByThreeWay"].apply(partialParams)
        );
    }

    invokeMergePullRequestByFastForward(partialParams: ToOptional<{
      [K in keyof MergePullRequestByFastForwardInput & keyof MergePullRequestByFastForwardInput]: (MergePullRequestByFastForwardInput & MergePullRequestByFastForwardInput)[K]
    }>): MergePullRequestByFastForwardOutput {
        return this.client.mergePullRequestByFastForward(
            this.ops["MergePullRequestByFastForward"].apply(partialParams)
        );
    }

    invokeMergePullRequestBySquash(partialParams: ToOptional<{
      [K in keyof MergePullRequestBySquashInput & keyof MergePullRequestBySquashInput]: (MergePullRequestBySquashInput & MergePullRequestBySquashInput)[K]
    }>): MergePullRequestBySquashOutput {
        return this.client.mergePullRequestBySquash(
            this.ops["MergePullRequestBySquash"].apply(partialParams)
        );
    }

    invokeMergePullRequestByThreeWay(partialParams: ToOptional<{
      [K in keyof MergePullRequestByThreeWayInput & keyof MergePullRequestByThreeWayInput]: (MergePullRequestByThreeWayInput & MergePullRequestByThreeWayInput)[K]
    }>): MergePullRequestByThreeWayOutput {
        return this.client.mergePullRequestByThreeWay(
            this.ops["MergePullRequestByThreeWay"].apply(partialParams)
        );
    }

    invokeOverridePullRequestApprovalRules(partialParams: ToOptional<{
      [K in keyof OverridePullRequestApprovalRulesInput & keyof OverridePullRequestApprovalRulesInput]: (OverridePullRequestApprovalRulesInput & OverridePullRequestApprovalRulesInput)[K]
    }>): void {
        return this.client.overridePullRequestApprovalRules(
            this.ops["OverridePullRequestApprovalRules"].apply(partialParams)
        );
    }

    invokePostCommentForComparedCommit(partialParams: ToOptional<{
      [K in keyof PostCommentForComparedCommitInput & keyof PostCommentForComparedCommitInput]: (PostCommentForComparedCommitInput & PostCommentForComparedCommitInput)[K]
    }>): PostCommentForComparedCommitOutput {
        return this.client.postCommentForComparedCommit(
            this.ops["PostCommentForComparedCommit"].apply(partialParams)
        );
    }

    invokePostCommentForPullRequest(partialParams: ToOptional<{
      [K in keyof PostCommentForPullRequestInput & keyof PostCommentForPullRequestInput]: (PostCommentForPullRequestInput & PostCommentForPullRequestInput)[K]
    }>): PostCommentForPullRequestOutput {
        return this.client.postCommentForPullRequest(
            this.ops["PostCommentForPullRequest"].apply(partialParams)
        );
    }

    invokePostCommentReply(partialParams: ToOptional<{
      [K in keyof PostCommentReplyInput & keyof PostCommentReplyInput]: (PostCommentReplyInput & PostCommentReplyInput)[K]
    }>): PostCommentReplyOutput {
        return this.client.postCommentReply(
            this.ops["PostCommentReply"].apply(partialParams)
        );
    }

    invokePutCommentReaction(partialParams: ToOptional<{
      [K in keyof PutCommentReactionInput & keyof PutCommentReactionInput]: (PutCommentReactionInput & PutCommentReactionInput)[K]
    }>): void {
        return this.client.putCommentReaction(
            this.ops["PutCommentReaction"].apply(partialParams)
        );
    }

    invokePutFile(partialParams: ToOptional<{
      [K in keyof PutFileInput & keyof PutFileInput]: (PutFileInput & PutFileInput)[K]
    }>): PutFileOutput {
        return this.client.putFile(
            this.ops["PutFile"].apply(partialParams)
        );
    }

    invokePutRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof PutRepositoryTriggersInput & keyof PutRepositoryTriggersInput]: (PutRepositoryTriggersInput & PutRepositoryTriggersInput)[K]
    }>): PutRepositoryTriggersOutput {
        return this.client.putRepositoryTriggers(
            this.ops["PutRepositoryTriggers"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput)[K]
    }>): void {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof TestRepositoryTriggersInput & keyof Omit<TestRepositoryTriggersInput, "repositoryName">]: (TestRepositoryTriggersInput & Omit<TestRepositoryTriggersInput, "repositoryName">)[K]
    }>): TestRepositoryTriggersOutput {
        return this.client.testRepositoryTriggers(
            this.ops["TestRepositoryTriggers"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput)[K]
    }>): void {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateContent(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateContentInput & keyof UpdateApprovalRuleTemplateContentInput]: (UpdateApprovalRuleTemplateContentInput & UpdateApprovalRuleTemplateContentInput)[K]
    }>): UpdateApprovalRuleTemplateContentOutput {
        return this.client.updateApprovalRuleTemplateContent(
            this.ops["UpdateApprovalRuleTemplateContent"].apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateDescription(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateDescriptionInput & keyof UpdateApprovalRuleTemplateDescriptionInput]: (UpdateApprovalRuleTemplateDescriptionInput & UpdateApprovalRuleTemplateDescriptionInput)[K]
    }>): UpdateApprovalRuleTemplateDescriptionOutput {
        return this.client.updateApprovalRuleTemplateDescription(
            this.ops["UpdateApprovalRuleTemplateDescription"].apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateName(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateNameInput & keyof UpdateApprovalRuleTemplateNameInput]: (UpdateApprovalRuleTemplateNameInput & UpdateApprovalRuleTemplateNameInput)[K]
    }>): UpdateApprovalRuleTemplateNameOutput {
        return this.client.updateApprovalRuleTemplateName(
            this.ops["UpdateApprovalRuleTemplateName"].apply(partialParams)
        );
    }

    invokeUpdateComment(partialParams: ToOptional<{
      [K in keyof UpdateCommentInput & keyof UpdateCommentInput]: (UpdateCommentInput & UpdateCommentInput)[K]
    }>): UpdateCommentOutput {
        return this.client.updateComment(
            this.ops["UpdateComment"].apply(partialParams)
        );
    }

    invokeUpdateDefaultBranch(partialParams: ToOptional<{
      [K in keyof UpdateDefaultBranchInput & keyof Omit<UpdateDefaultBranchInput, "repositoryName">]: (UpdateDefaultBranchInput & Omit<UpdateDefaultBranchInput, "repositoryName">)[K]
    }>): void {
        return this.client.updateDefaultBranch(
            this.ops["UpdateDefaultBranch"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestApprovalRuleContent(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestApprovalRuleContentInput & keyof UpdatePullRequestApprovalRuleContentInput]: (UpdatePullRequestApprovalRuleContentInput & UpdatePullRequestApprovalRuleContentInput)[K]
    }>): UpdatePullRequestApprovalRuleContentOutput {
        return this.client.updatePullRequestApprovalRuleContent(
            this.ops["UpdatePullRequestApprovalRuleContent"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestApprovalState(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestApprovalStateInput & keyof UpdatePullRequestApprovalStateInput]: (UpdatePullRequestApprovalStateInput & UpdatePullRequestApprovalStateInput)[K]
    }>): void {
        return this.client.updatePullRequestApprovalState(
            this.ops["UpdatePullRequestApprovalState"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestDescription(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestDescriptionInput & keyof UpdatePullRequestDescriptionInput]: (UpdatePullRequestDescriptionInput & UpdatePullRequestDescriptionInput)[K]
    }>): UpdatePullRequestDescriptionOutput {
        return this.client.updatePullRequestDescription(
            this.ops["UpdatePullRequestDescription"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestStatus(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestStatusInput & keyof UpdatePullRequestStatusInput]: (UpdatePullRequestStatusInput & UpdatePullRequestStatusInput)[K]
    }>): UpdatePullRequestStatusOutput {
        return this.client.updatePullRequestStatus(
            this.ops["UpdatePullRequestStatus"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestTitle(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestTitleInput & keyof UpdatePullRequestTitleInput]: (UpdatePullRequestTitleInput & UpdatePullRequestTitleInput)[K]
    }>): UpdatePullRequestTitleOutput {
        return this.client.updatePullRequestTitle(
            this.ops["UpdatePullRequestTitle"].apply(partialParams)
        );
    }

    invokeUpdateRepositoryDescription(partialParams: ToOptional<{
      [K in keyof UpdateRepositoryDescriptionInput & keyof Omit<UpdateRepositoryDescriptionInput, "repositoryName">]: (UpdateRepositoryDescriptionInput & Omit<UpdateRepositoryDescriptionInput, "repositoryName">)[K]
    }>): void {
        return this.client.updateRepositoryDescription(
            this.ops["UpdateRepositoryDescription"].apply(partialParams)
        );
    }

    invokeUpdateRepositoryName(partialParams: ToOptional<{
      [K in keyof UpdateRepositoryNameInput & keyof Omit<UpdateRepositoryNameInput, "oldName"|"newName">]: (UpdateRepositoryNameInput & Omit<UpdateRepositoryNameInput, "oldName"|"newName">)[K]
    }>): void {
        return this.client.updateRepositoryName(
            this.ops["UpdateRepositoryName"].apply(partialParams)
        );
    }
}