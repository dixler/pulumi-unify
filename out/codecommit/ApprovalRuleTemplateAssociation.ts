
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    BatchAssociateApprovalRuleTemplateWithRepositoriesInput,
    BatchDescribeMergeConflictsInput,
    BatchDisassociateApprovalRuleTemplateFromRepositoriesInput,
    BatchGetCommitsInput,
    BatchGetRepositoriesInput,
    CreateApprovalRuleTemplateInput,
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
    EvaluatePullRequestApprovalRulesInput,
    GetApprovalRuleTemplateInput,
    GetBlobInput,
    GetBranchInput,
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
    ListApprovalRuleTemplatesInput,
    ListAssociatedApprovalRuleTemplatesForRepositoryInput,
    ListBranchesInput,
    ListPullRequestsInput,
    ListRepositoriesInput,
    ListRepositoriesForApprovalRuleTemplateInput,
    ListTagsForResourceInput,
    MergeBranchesByFastForwardInput,
    MergeBranchesBySquashInput,
    MergeBranchesByThreeWayInput,
    MergePullRequestByFastForwardInput,
    MergePullRequestBySquashInput,
    MergePullRequestByThreeWayInput,
    PostCommentForComparedCommitInput,
    PostCommentForPullRequestInput,
    PostCommentReplyInput,
    PutFileInput,
    PutRepositoryTriggersInput,
    TestRepositoryTriggersInput,
    UpdateApprovalRuleTemplateContentInput,
    UpdateApprovalRuleTemplateDescriptionInput,
    UpdateApprovalRuleTemplateNameInput,
    UpdateCommentInput,
    UpdatePullRequestApprovalRuleContentInput,
    UpdatePullRequestDescriptionInput,
    UpdatePullRequestStatusInput,
    UpdatePullRequestTitleInput,
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
    GetBranchOutput,
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
    ListApprovalRuleTemplatesOutput,
    ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
    ListBranchesOutput,
    ListPullRequestsOutput,
    ListRepositoriesOutput,
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
const schema = require("../apis/codecommit-2015-04-13.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codecommit.ApprovalRuleTemplateAssociation {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.codecommit.ApprovalRuleTemplateAssociation>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CodeCommit()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
          console.log(this.capitalizedParams);
        })
    }
    boot() {
        if (this.booted) {
          return;
        }
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema);
        this.booted = true;
    }

    invokeBatchAssociateApprovalRuleTemplateWithRepositories(partialParams: ToOptional<{
      [K in keyof BatchAssociateApprovalRuleTemplateWithRepositoriesInput]: (BatchAssociateApprovalRuleTemplateWithRepositoriesInput)[K]
    }>): Request<BatchAssociateApprovalRuleTemplateWithRepositoriesOutput, AWSError> {
        this.boot();
        return this.client.batchAssociateApprovalRuleTemplateWithRepositories(
          this.ops["BatchAssociateApprovalRuleTemplateWithRepositories"].apply(partialParams)
        );
    }

    invokeBatchDescribeMergeConflicts(partialParams: ToOptional<{
      [K in keyof BatchDescribeMergeConflictsInput]: (BatchDescribeMergeConflictsInput)[K]
    }>): Request<BatchDescribeMergeConflictsOutput, AWSError> {
        this.boot();
        return this.client.batchDescribeMergeConflicts(
          this.ops["BatchDescribeMergeConflicts"].apply(partialParams)
        );
    }

    invokeBatchDisassociateApprovalRuleTemplateFromRepositories(partialParams: ToOptional<{
      [K in keyof BatchDisassociateApprovalRuleTemplateFromRepositoriesInput]: (BatchDisassociateApprovalRuleTemplateFromRepositoriesInput)[K]
    }>): Request<BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput, AWSError> {
        this.boot();
        return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(
          this.ops["BatchDisassociateApprovalRuleTemplateFromRepositories"].apply(partialParams)
        );
    }

    invokeBatchGetCommits(partialParams: ToOptional<{
      [K in keyof BatchGetCommitsInput]: (BatchGetCommitsInput)[K]
    }>): Request<BatchGetCommitsOutput, AWSError> {
        this.boot();
        return this.client.batchGetCommits(
          this.ops["BatchGetCommits"].apply(partialParams)
        );
    }

    invokeBatchGetRepositories(partialParams: ToOptional<{
      [K in keyof BatchGetRepositoriesInput]: (BatchGetRepositoriesInput)[K]
    }>): Request<BatchGetRepositoriesOutput, AWSError> {
        this.boot();
        return this.client.batchGetRepositories(
          this.ops["BatchGetRepositories"].apply(partialParams)
        );
    }

    invokeCreateApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof CreateApprovalRuleTemplateInput]: (CreateApprovalRuleTemplateInput)[K]
    }>): Request<CreateApprovalRuleTemplateOutput, AWSError> {
        this.boot();
        return this.client.createApprovalRuleTemplate(
          this.ops["CreateApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeCreateCommit(partialParams: ToOptional<{
      [K in keyof CreateCommitInput]: (CreateCommitInput)[K]
    }>): Request<CreateCommitOutput, AWSError> {
        this.boot();
        return this.client.createCommit(
          this.ops["CreateCommit"].apply(partialParams)
        );
    }

    invokeCreatePullRequest(partialParams: ToOptional<{
      [K in keyof CreatePullRequestInput]: (CreatePullRequestInput)[K]
    }>): Request<CreatePullRequestOutput, AWSError> {
        this.boot();
        return this.client.createPullRequest(
          this.ops["CreatePullRequest"].apply(partialParams)
        );
    }

    invokeCreatePullRequestApprovalRule(partialParams: ToOptional<{
      [K in keyof CreatePullRequestApprovalRuleInput]: (CreatePullRequestApprovalRuleInput)[K]
    }>): Request<CreatePullRequestApprovalRuleOutput, AWSError> {
        this.boot();
        return this.client.createPullRequestApprovalRule(
          this.ops["CreatePullRequestApprovalRule"].apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryInput]: (CreateRepositoryInput)[K]
    }>): Request<CreateRepositoryOutput, AWSError> {
        this.boot();
        return this.client.createRepository(
          this.ops["CreateRepository"].apply(partialParams)
        );
    }

    invokeCreateUnreferencedMergeCommit(partialParams: ToOptional<{
      [K in keyof CreateUnreferencedMergeCommitInput]: (CreateUnreferencedMergeCommitInput)[K]
    }>): Request<CreateUnreferencedMergeCommitOutput, AWSError> {
        this.boot();
        return this.client.createUnreferencedMergeCommit(
          this.ops["CreateUnreferencedMergeCommit"].apply(partialParams)
        );
    }

    invokeDeleteApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof DeleteApprovalRuleTemplateInput]: (DeleteApprovalRuleTemplateInput)[K]
    }>): Request<DeleteApprovalRuleTemplateOutput, AWSError> {
        this.boot();
        return this.client.deleteApprovalRuleTemplate(
          this.ops["DeleteApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof DeleteBranchInput]: (DeleteBranchInput)[K]
    }>): Request<DeleteBranchOutput, AWSError> {
        this.boot();
        return this.client.deleteBranch(
          this.ops["DeleteBranch"].apply(partialParams)
        );
    }

    invokeDeleteCommentContent(partialParams: ToOptional<{
      [K in keyof DeleteCommentContentInput]: (DeleteCommentContentInput)[K]
    }>): Request<DeleteCommentContentOutput, AWSError> {
        this.boot();
        return this.client.deleteCommentContent(
          this.ops["DeleteCommentContent"].apply(partialParams)
        );
    }

    invokeDeleteFile(partialParams: ToOptional<{
      [K in keyof DeleteFileInput]: (DeleteFileInput)[K]
    }>): Request<DeleteFileOutput, AWSError> {
        this.boot();
        return this.client.deleteFile(
          this.ops["DeleteFile"].apply(partialParams)
        );
    }

    invokeDeletePullRequestApprovalRule(partialParams: ToOptional<{
      [K in keyof DeletePullRequestApprovalRuleInput]: (DeletePullRequestApprovalRuleInput)[K]
    }>): Request<DeletePullRequestApprovalRuleOutput, AWSError> {
        this.boot();
        return this.client.deletePullRequestApprovalRule(
          this.ops["DeletePullRequestApprovalRule"].apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryInput]: (DeleteRepositoryInput)[K]
    }>): Request<DeleteRepositoryOutput, AWSError> {
        this.boot();
        return this.client.deleteRepository(
          this.ops["DeleteRepository"].apply(partialParams)
        );
    }

    invokeDescribeMergeConflicts(partialParams: ToOptional<{
      [K in keyof DescribeMergeConflictsInput]: (DescribeMergeConflictsInput)[K]
    }>): Request<DescribeMergeConflictsOutput, AWSError> {
        this.boot();
        return this.client.describeMergeConflicts(
          this.ops["DescribeMergeConflicts"].apply(partialParams)
        );
    }

    invokeDescribePullRequestEvents(partialParams: ToOptional<{
      [K in keyof DescribePullRequestEventsInput]: (DescribePullRequestEventsInput)[K]
    }>): Request<DescribePullRequestEventsOutput, AWSError> {
        this.boot();
        return this.client.describePullRequestEvents(
          this.ops["DescribePullRequestEvents"].apply(partialParams)
        );
    }

    invokeEvaluatePullRequestApprovalRules(partialParams: ToOptional<{
      [K in keyof EvaluatePullRequestApprovalRulesInput]: (EvaluatePullRequestApprovalRulesInput)[K]
    }>): Request<EvaluatePullRequestApprovalRulesOutput, AWSError> {
        this.boot();
        return this.client.evaluatePullRequestApprovalRules(
          this.ops["EvaluatePullRequestApprovalRules"].apply(partialParams)
        );
    }

    invokeGetApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof GetApprovalRuleTemplateInput]: (GetApprovalRuleTemplateInput)[K]
    }>): Request<GetApprovalRuleTemplateOutput, AWSError> {
        this.boot();
        return this.client.getApprovalRuleTemplate(
          this.ops["GetApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeGetBlob(partialParams: ToOptional<{
      [K in keyof GetBlobInput]: (GetBlobInput)[K]
    }>): Request<GetBlobOutput, AWSError> {
        this.boot();
        return this.client.getBlob(
          this.ops["GetBlob"].apply(partialParams)
        );
    }

    invokeGetBranch(partialParams: ToOptional<{
      [K in keyof GetBranchInput]: (GetBranchInput)[K]
    }>): Request<GetBranchOutput, AWSError> {
        this.boot();
        return this.client.getBranch(
          this.ops["GetBranch"].apply(partialParams)
        );
    }

    invokeGetComment(partialParams: ToOptional<{
      [K in keyof GetCommentInput]: (GetCommentInput)[K]
    }>): Request<GetCommentOutput, AWSError> {
        this.boot();
        return this.client.getComment(
          this.ops["GetComment"].apply(partialParams)
        );
    }

    invokeGetCommentReactions(partialParams: ToOptional<{
      [K in keyof GetCommentReactionsInput]: (GetCommentReactionsInput)[K]
    }>): Request<GetCommentReactionsOutput, AWSError> {
        this.boot();
        return this.client.getCommentReactions(
          this.ops["GetCommentReactions"].apply(partialParams)
        );
    }

    invokeGetCommentsForComparedCommit(partialParams: ToOptional<{
      [K in keyof GetCommentsForComparedCommitInput]: (GetCommentsForComparedCommitInput)[K]
    }>): Request<GetCommentsForComparedCommitOutput, AWSError> {
        this.boot();
        return this.client.getCommentsForComparedCommit(
          this.ops["GetCommentsForComparedCommit"].apply(partialParams)
        );
    }

    invokeGetCommentsForPullRequest(partialParams: ToOptional<{
      [K in keyof GetCommentsForPullRequestInput]: (GetCommentsForPullRequestInput)[K]
    }>): Request<GetCommentsForPullRequestOutput, AWSError> {
        this.boot();
        return this.client.getCommentsForPullRequest(
          this.ops["GetCommentsForPullRequest"].apply(partialParams)
        );
    }

    invokeGetCommit(partialParams: ToOptional<{
      [K in keyof GetCommitInput]: (GetCommitInput)[K]
    }>): Request<GetCommitOutput, AWSError> {
        this.boot();
        return this.client.getCommit(
          this.ops["GetCommit"].apply(partialParams)
        );
    }

    invokeGetDifferences(partialParams: ToOptional<{
      [K in keyof GetDifferencesInput]: (GetDifferencesInput)[K]
    }>): Request<GetDifferencesOutput, AWSError> {
        this.boot();
        return this.client.getDifferences(
          this.ops["GetDifferences"].apply(partialParams)
        );
    }

    invokeGetFile(partialParams: ToOptional<{
      [K in keyof GetFileInput]: (GetFileInput)[K]
    }>): Request<GetFileOutput, AWSError> {
        this.boot();
        return this.client.getFile(
          this.ops["GetFile"].apply(partialParams)
        );
    }

    invokeGetFolder(partialParams: ToOptional<{
      [K in keyof GetFolderInput]: (GetFolderInput)[K]
    }>): Request<GetFolderOutput, AWSError> {
        this.boot();
        return this.client.getFolder(
          this.ops["GetFolder"].apply(partialParams)
        );
    }

    invokeGetMergeCommit(partialParams: ToOptional<{
      [K in keyof GetMergeCommitInput]: (GetMergeCommitInput)[K]
    }>): Request<GetMergeCommitOutput, AWSError> {
        this.boot();
        return this.client.getMergeCommit(
          this.ops["GetMergeCommit"].apply(partialParams)
        );
    }

    invokeGetMergeConflicts(partialParams: ToOptional<{
      [K in keyof GetMergeConflictsInput]: (GetMergeConflictsInput)[K]
    }>): Request<GetMergeConflictsOutput, AWSError> {
        this.boot();
        return this.client.getMergeConflicts(
          this.ops["GetMergeConflicts"].apply(partialParams)
        );
    }

    invokeGetMergeOptions(partialParams: ToOptional<{
      [K in keyof GetMergeOptionsInput]: (GetMergeOptionsInput)[K]
    }>): Request<GetMergeOptionsOutput, AWSError> {
        this.boot();
        return this.client.getMergeOptions(
          this.ops["GetMergeOptions"].apply(partialParams)
        );
    }

    invokeGetPullRequest(partialParams: ToOptional<{
      [K in keyof GetPullRequestInput]: (GetPullRequestInput)[K]
    }>): Request<GetPullRequestOutput, AWSError> {
        this.boot();
        return this.client.getPullRequest(
          this.ops["GetPullRequest"].apply(partialParams)
        );
    }

    invokeGetPullRequestApprovalStates(partialParams: ToOptional<{
      [K in keyof GetPullRequestApprovalStatesInput]: (GetPullRequestApprovalStatesInput)[K]
    }>): Request<GetPullRequestApprovalStatesOutput, AWSError> {
        this.boot();
        return this.client.getPullRequestApprovalStates(
          this.ops["GetPullRequestApprovalStates"].apply(partialParams)
        );
    }

    invokeGetPullRequestOverrideState(partialParams: ToOptional<{
      [K in keyof GetPullRequestOverrideStateInput]: (GetPullRequestOverrideStateInput)[K]
    }>): Request<GetPullRequestOverrideStateOutput, AWSError> {
        this.boot();
        return this.client.getPullRequestOverrideState(
          this.ops["GetPullRequestOverrideState"].apply(partialParams)
        );
    }

    invokeGetRepository(partialParams: ToOptional<{
      [K in keyof GetRepositoryInput]: (GetRepositoryInput)[K]
    }>): Request<GetRepositoryOutput, AWSError> {
        this.boot();
        return this.client.getRepository(
          this.ops["GetRepository"].apply(partialParams)
        );
    }

    invokeGetRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof GetRepositoryTriggersInput]: (GetRepositoryTriggersInput)[K]
    }>): Request<GetRepositoryTriggersOutput, AWSError> {
        this.boot();
        return this.client.getRepositoryTriggers(
          this.ops["GetRepositoryTriggers"].apply(partialParams)
        );
    }

    invokeListApprovalRuleTemplates(partialParams: ToOptional<{
      [K in keyof ListApprovalRuleTemplatesInput]: (ListApprovalRuleTemplatesInput)[K]
    }>): Request<ListApprovalRuleTemplatesOutput, AWSError> {
        this.boot();
        return this.client.listApprovalRuleTemplates(
          this.ops["ListApprovalRuleTemplates"].apply(partialParams)
        );
    }

    invokeListAssociatedApprovalRuleTemplatesForRepository(partialParams: ToOptional<{
      [K in keyof ListAssociatedApprovalRuleTemplatesForRepositoryInput]: (ListAssociatedApprovalRuleTemplatesForRepositoryInput)[K]
    }>): Request<ListAssociatedApprovalRuleTemplatesForRepositoryOutput, AWSError> {
        this.boot();
        return this.client.listAssociatedApprovalRuleTemplatesForRepository(
          this.ops["ListAssociatedApprovalRuleTemplatesForRepository"].apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof ListBranchesInput]: (ListBranchesInput)[K]
    }>): Request<ListBranchesOutput, AWSError> {
        this.boot();
        return this.client.listBranches(
          this.ops["ListBranches"].apply(partialParams)
        );
    }

    invokeListPullRequests(partialParams: ToOptional<{
      [K in keyof ListPullRequestsInput]: (ListPullRequestsInput)[K]
    }>): Request<ListPullRequestsOutput, AWSError> {
        this.boot();
        return this.client.listPullRequests(
          this.ops["ListPullRequests"].apply(partialParams)
        );
    }

    invokeListRepositories(partialParams: ToOptional<{
      [K in keyof ListRepositoriesInput]: (ListRepositoriesInput)[K]
    }>): Request<ListRepositoriesOutput, AWSError> {
        this.boot();
        return this.client.listRepositories(
          this.ops["ListRepositories"].apply(partialParams)
        );
    }

    invokeListRepositoriesForApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof ListRepositoriesForApprovalRuleTemplateInput]: (ListRepositoriesForApprovalRuleTemplateInput)[K]
    }>): Request<ListRepositoriesForApprovalRuleTemplateOutput, AWSError> {
        this.boot();
        return this.client.listRepositoriesForApprovalRuleTemplate(
          this.ops["ListRepositoriesForApprovalRuleTemplate"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput]: (ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeMergeBranchesByFastForward(partialParams: ToOptional<{
      [K in keyof MergeBranchesByFastForwardInput]: (MergeBranchesByFastForwardInput)[K]
    }>): Request<MergeBranchesByFastForwardOutput, AWSError> {
        this.boot();
        return this.client.mergeBranchesByFastForward(
          this.ops["MergeBranchesByFastForward"].apply(partialParams)
        );
    }

    invokeMergeBranchesBySquash(partialParams: ToOptional<{
      [K in keyof MergeBranchesBySquashInput]: (MergeBranchesBySquashInput)[K]
    }>): Request<MergeBranchesBySquashOutput, AWSError> {
        this.boot();
        return this.client.mergeBranchesBySquash(
          this.ops["MergeBranchesBySquash"].apply(partialParams)
        );
    }

    invokeMergeBranchesByThreeWay(partialParams: ToOptional<{
      [K in keyof MergeBranchesByThreeWayInput]: (MergeBranchesByThreeWayInput)[K]
    }>): Request<MergeBranchesByThreeWayOutput, AWSError> {
        this.boot();
        return this.client.mergeBranchesByThreeWay(
          this.ops["MergeBranchesByThreeWay"].apply(partialParams)
        );
    }

    invokeMergePullRequestByFastForward(partialParams: ToOptional<{
      [K in keyof MergePullRequestByFastForwardInput]: (MergePullRequestByFastForwardInput)[K]
    }>): Request<MergePullRequestByFastForwardOutput, AWSError> {
        this.boot();
        return this.client.mergePullRequestByFastForward(
          this.ops["MergePullRequestByFastForward"].apply(partialParams)
        );
    }

    invokeMergePullRequestBySquash(partialParams: ToOptional<{
      [K in keyof MergePullRequestBySquashInput]: (MergePullRequestBySquashInput)[K]
    }>): Request<MergePullRequestBySquashOutput, AWSError> {
        this.boot();
        return this.client.mergePullRequestBySquash(
          this.ops["MergePullRequestBySquash"].apply(partialParams)
        );
    }

    invokeMergePullRequestByThreeWay(partialParams: ToOptional<{
      [K in keyof MergePullRequestByThreeWayInput]: (MergePullRequestByThreeWayInput)[K]
    }>): Request<MergePullRequestByThreeWayOutput, AWSError> {
        this.boot();
        return this.client.mergePullRequestByThreeWay(
          this.ops["MergePullRequestByThreeWay"].apply(partialParams)
        );
    }

    invokePostCommentForComparedCommit(partialParams: ToOptional<{
      [K in keyof PostCommentForComparedCommitInput]: (PostCommentForComparedCommitInput)[K]
    }>): Request<PostCommentForComparedCommitOutput, AWSError> {
        this.boot();
        return this.client.postCommentForComparedCommit(
          this.ops["PostCommentForComparedCommit"].apply(partialParams)
        );
    }

    invokePostCommentForPullRequest(partialParams: ToOptional<{
      [K in keyof PostCommentForPullRequestInput]: (PostCommentForPullRequestInput)[K]
    }>): Request<PostCommentForPullRequestOutput, AWSError> {
        this.boot();
        return this.client.postCommentForPullRequest(
          this.ops["PostCommentForPullRequest"].apply(partialParams)
        );
    }

    invokePostCommentReply(partialParams: ToOptional<{
      [K in keyof PostCommentReplyInput]: (PostCommentReplyInput)[K]
    }>): Request<PostCommentReplyOutput, AWSError> {
        this.boot();
        return this.client.postCommentReply(
          this.ops["PostCommentReply"].apply(partialParams)
        );
    }

    invokePutFile(partialParams: ToOptional<{
      [K in keyof PutFileInput]: (PutFileInput)[K]
    }>): Request<PutFileOutput, AWSError> {
        this.boot();
        return this.client.putFile(
          this.ops["PutFile"].apply(partialParams)
        );
    }

    invokePutRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof PutRepositoryTriggersInput]: (PutRepositoryTriggersInput)[K]
    }>): Request<PutRepositoryTriggersOutput, AWSError> {
        this.boot();
        return this.client.putRepositoryTriggers(
          this.ops["PutRepositoryTriggers"].apply(partialParams)
        );
    }

    invokeTestRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof TestRepositoryTriggersInput]: (TestRepositoryTriggersInput)[K]
    }>): Request<TestRepositoryTriggersOutput, AWSError> {
        this.boot();
        return this.client.testRepositoryTriggers(
          this.ops["TestRepositoryTriggers"].apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateContent(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateContentInput]: (UpdateApprovalRuleTemplateContentInput)[K]
    }>): Request<UpdateApprovalRuleTemplateContentOutput, AWSError> {
        this.boot();
        return this.client.updateApprovalRuleTemplateContent(
          this.ops["UpdateApprovalRuleTemplateContent"].apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateDescription(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateDescriptionInput]: (UpdateApprovalRuleTemplateDescriptionInput)[K]
    }>): Request<UpdateApprovalRuleTemplateDescriptionOutput, AWSError> {
        this.boot();
        return this.client.updateApprovalRuleTemplateDescription(
          this.ops["UpdateApprovalRuleTemplateDescription"].apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateName(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateNameInput]: (UpdateApprovalRuleTemplateNameInput)[K]
    }>): Request<UpdateApprovalRuleTemplateNameOutput, AWSError> {
        this.boot();
        return this.client.updateApprovalRuleTemplateName(
          this.ops["UpdateApprovalRuleTemplateName"].apply(partialParams)
        );
    }

    invokeUpdateComment(partialParams: ToOptional<{
      [K in keyof UpdateCommentInput]: (UpdateCommentInput)[K]
    }>): Request<UpdateCommentOutput, AWSError> {
        this.boot();
        return this.client.updateComment(
          this.ops["UpdateComment"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestApprovalRuleContent(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestApprovalRuleContentInput]: (UpdatePullRequestApprovalRuleContentInput)[K]
    }>): Request<UpdatePullRequestApprovalRuleContentOutput, AWSError> {
        this.boot();
        return this.client.updatePullRequestApprovalRuleContent(
          this.ops["UpdatePullRequestApprovalRuleContent"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestDescription(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestDescriptionInput]: (UpdatePullRequestDescriptionInput)[K]
    }>): Request<UpdatePullRequestDescriptionOutput, AWSError> {
        this.boot();
        return this.client.updatePullRequestDescription(
          this.ops["UpdatePullRequestDescription"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestStatus(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestStatusInput]: (UpdatePullRequestStatusInput)[K]
    }>): Request<UpdatePullRequestStatusOutput, AWSError> {
        this.boot();
        return this.client.updatePullRequestStatus(
          this.ops["UpdatePullRequestStatus"].apply(partialParams)
        );
    }

    invokeUpdatePullRequestTitle(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestTitleInput]: (UpdatePullRequestTitleInput)[K]
    }>): Request<UpdatePullRequestTitleOutput, AWSError> {
        this.boot();
        return this.client.updatePullRequestTitle(
          this.ops["UpdatePullRequestTitle"].apply(partialParams)
        );
    }
}