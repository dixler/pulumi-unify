
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
const schema = require("../apis/codecommit-2015-04-13.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codecommit.Trigger {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    constructor(...args: ConstructorParameters<typeof aws.codecommit.Trigger>) {
        super(...args)
        this.client = new awssdk.CodeCommit()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
    }
    boot() {
        Object.entries(this.capitalizedParams).forEach(([key, value]: [string, any]) => {
          try {
            this.capitalizedParams[upperCamelCase(key)] = value.value;
            return;
          } catch (e) {

          }
          this.capitalizedParams[upperCamelCase(key)] = value;
        })
        this.ops = getResourceOperations(this.capitalizedParams as any, schema, this.client)
    }

    invokeAssociateApprovalRuleTemplateWithRepository(partialParams: ToOptional<{
      [K in keyof AssociateApprovalRuleTemplateWithRepositoryInput & keyof AssociateApprovalRuleTemplateWithRepositoryInput]: (AssociateApprovalRuleTemplateWithRepositoryInput & AssociateApprovalRuleTemplateWithRepositoryInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.associateApprovalRuleTemplateWithRepository(
          this.ops["AssociateApprovalRuleTemplateWithRepository"].applicator.apply(partialParams)
        );
    }

    invokeBatchAssociateApprovalRuleTemplateWithRepositories(partialParams: ToOptional<{
      [K in keyof BatchAssociateApprovalRuleTemplateWithRepositoriesInput & keyof BatchAssociateApprovalRuleTemplateWithRepositoriesInput]: (BatchAssociateApprovalRuleTemplateWithRepositoriesInput & BatchAssociateApprovalRuleTemplateWithRepositoriesInput)[K]
    }>): Request<BatchAssociateApprovalRuleTemplateWithRepositoriesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchAssociateApprovalRuleTemplateWithRepositories(
          this.ops["BatchAssociateApprovalRuleTemplateWithRepositories"].applicator.apply(partialParams)
        );
    }

    invokeBatchDescribeMergeConflicts(partialParams: ToOptional<{
      [K in keyof BatchDescribeMergeConflictsInput & keyof BatchDescribeMergeConflictsInput]: (BatchDescribeMergeConflictsInput & BatchDescribeMergeConflictsInput)[K]
    }>): Request<BatchDescribeMergeConflictsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDescribeMergeConflicts(
          this.ops["BatchDescribeMergeConflicts"].applicator.apply(partialParams)
        );
    }

    invokeBatchDisassociateApprovalRuleTemplateFromRepositories(partialParams: ToOptional<{
      [K in keyof BatchDisassociateApprovalRuleTemplateFromRepositoriesInput & keyof BatchDisassociateApprovalRuleTemplateFromRepositoriesInput]: (BatchDisassociateApprovalRuleTemplateFromRepositoriesInput & BatchDisassociateApprovalRuleTemplateFromRepositoriesInput)[K]
    }>): Request<BatchDisassociateApprovalRuleTemplateFromRepositoriesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchDisassociateApprovalRuleTemplateFromRepositories(
          this.ops["BatchDisassociateApprovalRuleTemplateFromRepositories"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetCommits(partialParams: ToOptional<{
      [K in keyof BatchGetCommitsInput & keyof BatchGetCommitsInput]: (BatchGetCommitsInput & BatchGetCommitsInput)[K]
    }>): Request<BatchGetCommitsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetCommits(
          this.ops["BatchGetCommits"].applicator.apply(partialParams)
        );
    }

    invokeBatchGetRepositories(partialParams: ToOptional<{
      [K in keyof BatchGetRepositoriesInput & keyof BatchGetRepositoriesInput]: (BatchGetRepositoriesInput & BatchGetRepositoriesInput)[K]
    }>): Request<BatchGetRepositoriesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.batchGetRepositories(
          this.ops["BatchGetRepositories"].applicator.apply(partialParams)
        );
    }

    invokeCreateApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof CreateApprovalRuleTemplateInput & keyof CreateApprovalRuleTemplateInput]: (CreateApprovalRuleTemplateInput & CreateApprovalRuleTemplateInput)[K]
    }>): Request<CreateApprovalRuleTemplateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createApprovalRuleTemplate(
          this.ops["CreateApprovalRuleTemplate"].applicator.apply(partialParams)
        );
    }

    invokeCreateBranch(partialParams: ToOptional<{
      [K in keyof CreateBranchInput & keyof CreateBranchInput]: (CreateBranchInput & CreateBranchInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createBranch(
          this.ops["CreateBranch"].applicator.apply(partialParams)
        );
    }

    invokeCreateCommit(partialParams: ToOptional<{
      [K in keyof CreateCommitInput & keyof CreateCommitInput]: (CreateCommitInput & CreateCommitInput)[K]
    }>): Request<CreateCommitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createCommit(
          this.ops["CreateCommit"].applicator.apply(partialParams)
        );
    }

    invokeCreatePullRequest(partialParams: ToOptional<{
      [K in keyof CreatePullRequestInput & keyof CreatePullRequestInput]: (CreatePullRequestInput & CreatePullRequestInput)[K]
    }>): Request<CreatePullRequestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPullRequest(
          this.ops["CreatePullRequest"].applicator.apply(partialParams)
        );
    }

    invokeCreatePullRequestApprovalRule(partialParams: ToOptional<{
      [K in keyof CreatePullRequestApprovalRuleInput & keyof CreatePullRequestApprovalRuleInput]: (CreatePullRequestApprovalRuleInput & CreatePullRequestApprovalRuleInput)[K]
    }>): Request<CreatePullRequestApprovalRuleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createPullRequestApprovalRule(
          this.ops["CreatePullRequestApprovalRule"].applicator.apply(partialParams)
        );
    }

    invokeCreateRepository(partialParams: ToOptional<{
      [K in keyof CreateRepositoryInput & keyof CreateRepositoryInput]: (CreateRepositoryInput & CreateRepositoryInput)[K]
    }>): Request<CreateRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createRepository(
          this.ops["CreateRepository"].applicator.apply(partialParams)
        );
    }

    invokeCreateUnreferencedMergeCommit(partialParams: ToOptional<{
      [K in keyof CreateUnreferencedMergeCommitInput & keyof CreateUnreferencedMergeCommitInput]: (CreateUnreferencedMergeCommitInput & CreateUnreferencedMergeCommitInput)[K]
    }>): Request<CreateUnreferencedMergeCommitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.createUnreferencedMergeCommit(
          this.ops["CreateUnreferencedMergeCommit"].applicator.apply(partialParams)
        );
    }

    invokeDeleteApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof DeleteApprovalRuleTemplateInput & keyof DeleteApprovalRuleTemplateInput]: (DeleteApprovalRuleTemplateInput & DeleteApprovalRuleTemplateInput)[K]
    }>): Request<DeleteApprovalRuleTemplateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteApprovalRuleTemplate(
          this.ops["DeleteApprovalRuleTemplate"].applicator.apply(partialParams)
        );
    }

    invokeDeleteBranch(partialParams: ToOptional<{
      [K in keyof DeleteBranchInput & keyof DeleteBranchInput]: (DeleteBranchInput & DeleteBranchInput)[K]
    }>): Request<DeleteBranchOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteBranch(
          this.ops["DeleteBranch"].applicator.apply(partialParams)
        );
    }

    invokeDeleteCommentContent(partialParams: ToOptional<{
      [K in keyof DeleteCommentContentInput & keyof DeleteCommentContentInput]: (DeleteCommentContentInput & DeleteCommentContentInput)[K]
    }>): Request<DeleteCommentContentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteCommentContent(
          this.ops["DeleteCommentContent"].applicator.apply(partialParams)
        );
    }

    invokeDeleteFile(partialParams: ToOptional<{
      [K in keyof DeleteFileInput & keyof DeleteFileInput]: (DeleteFileInput & DeleteFileInput)[K]
    }>): Request<DeleteFileOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteFile(
          this.ops["DeleteFile"].applicator.apply(partialParams)
        );
    }

    invokeDeletePullRequestApprovalRule(partialParams: ToOptional<{
      [K in keyof DeletePullRequestApprovalRuleInput & keyof DeletePullRequestApprovalRuleInput]: (DeletePullRequestApprovalRuleInput & DeletePullRequestApprovalRuleInput)[K]
    }>): Request<DeletePullRequestApprovalRuleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deletePullRequestApprovalRule(
          this.ops["DeletePullRequestApprovalRule"].applicator.apply(partialParams)
        );
    }

    invokeDeleteRepository(partialParams: ToOptional<{
      [K in keyof DeleteRepositoryInput & keyof DeleteRepositoryInput]: (DeleteRepositoryInput & DeleteRepositoryInput)[K]
    }>): Request<DeleteRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.deleteRepository(
          this.ops["DeleteRepository"].applicator.apply(partialParams)
        );
    }

    invokeDescribeMergeConflicts(partialParams: ToOptional<{
      [K in keyof DescribeMergeConflictsInput & keyof DescribeMergeConflictsInput]: (DescribeMergeConflictsInput & DescribeMergeConflictsInput)[K]
    }>): Request<DescribeMergeConflictsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describeMergeConflicts(
          this.ops["DescribeMergeConflicts"].applicator.apply(partialParams)
        );
    }

    invokeDescribePullRequestEvents(partialParams: ToOptional<{
      [K in keyof DescribePullRequestEventsInput & keyof DescribePullRequestEventsInput]: (DescribePullRequestEventsInput & DescribePullRequestEventsInput)[K]
    }>): Request<DescribePullRequestEventsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.describePullRequestEvents(
          this.ops["DescribePullRequestEvents"].applicator.apply(partialParams)
        );
    }

    invokeDisassociateApprovalRuleTemplateFromRepository(partialParams: ToOptional<{
      [K in keyof DisassociateApprovalRuleTemplateFromRepositoryInput & keyof DisassociateApprovalRuleTemplateFromRepositoryInput]: (DisassociateApprovalRuleTemplateFromRepositoryInput & DisassociateApprovalRuleTemplateFromRepositoryInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.disassociateApprovalRuleTemplateFromRepository(
          this.ops["DisassociateApprovalRuleTemplateFromRepository"].applicator.apply(partialParams)
        );
    }

    invokeEvaluatePullRequestApprovalRules(partialParams: ToOptional<{
      [K in keyof EvaluatePullRequestApprovalRulesInput & keyof EvaluatePullRequestApprovalRulesInput]: (EvaluatePullRequestApprovalRulesInput & EvaluatePullRequestApprovalRulesInput)[K]
    }>): Request<EvaluatePullRequestApprovalRulesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.evaluatePullRequestApprovalRules(
          this.ops["EvaluatePullRequestApprovalRules"].applicator.apply(partialParams)
        );
    }

    invokeGetApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof GetApprovalRuleTemplateInput & keyof GetApprovalRuleTemplateInput]: (GetApprovalRuleTemplateInput & GetApprovalRuleTemplateInput)[K]
    }>): Request<GetApprovalRuleTemplateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getApprovalRuleTemplate(
          this.ops["GetApprovalRuleTemplate"].applicator.apply(partialParams)
        );
    }

    invokeGetBlob(partialParams: ToOptional<{
      [K in keyof GetBlobInput & keyof GetBlobInput]: (GetBlobInput & GetBlobInput)[K]
    }>): Request<GetBlobOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getBlob(
          this.ops["GetBlob"].applicator.apply(partialParams)
        );
    }

    invokeGetComment(partialParams: ToOptional<{
      [K in keyof GetCommentInput & keyof GetCommentInput]: (GetCommentInput & GetCommentInput)[K]
    }>): Request<GetCommentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getComment(
          this.ops["GetComment"].applicator.apply(partialParams)
        );
    }

    invokeGetCommentReactions(partialParams: ToOptional<{
      [K in keyof GetCommentReactionsInput & keyof GetCommentReactionsInput]: (GetCommentReactionsInput & GetCommentReactionsInput)[K]
    }>): Request<GetCommentReactionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommentReactions(
          this.ops["GetCommentReactions"].applicator.apply(partialParams)
        );
    }

    invokeGetCommentsForComparedCommit(partialParams: ToOptional<{
      [K in keyof GetCommentsForComparedCommitInput & keyof GetCommentsForComparedCommitInput]: (GetCommentsForComparedCommitInput & GetCommentsForComparedCommitInput)[K]
    }>): Request<GetCommentsForComparedCommitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommentsForComparedCommit(
          this.ops["GetCommentsForComparedCommit"].applicator.apply(partialParams)
        );
    }

    invokeGetCommentsForPullRequest(partialParams: ToOptional<{
      [K in keyof GetCommentsForPullRequestInput & keyof GetCommentsForPullRequestInput]: (GetCommentsForPullRequestInput & GetCommentsForPullRequestInput)[K]
    }>): Request<GetCommentsForPullRequestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommentsForPullRequest(
          this.ops["GetCommentsForPullRequest"].applicator.apply(partialParams)
        );
    }

    invokeGetCommit(partialParams: ToOptional<{
      [K in keyof GetCommitInput & keyof GetCommitInput]: (GetCommitInput & GetCommitInput)[K]
    }>): Request<GetCommitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getCommit(
          this.ops["GetCommit"].applicator.apply(partialParams)
        );
    }

    invokeGetDifferences(partialParams: ToOptional<{
      [K in keyof GetDifferencesInput & keyof GetDifferencesInput]: (GetDifferencesInput & GetDifferencesInput)[K]
    }>): Request<GetDifferencesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getDifferences(
          this.ops["GetDifferences"].applicator.apply(partialParams)
        );
    }

    invokeGetFile(partialParams: ToOptional<{
      [K in keyof GetFileInput & keyof GetFileInput]: (GetFileInput & GetFileInput)[K]
    }>): Request<GetFileOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFile(
          this.ops["GetFile"].applicator.apply(partialParams)
        );
    }

    invokeGetFolder(partialParams: ToOptional<{
      [K in keyof GetFolderInput & keyof GetFolderInput]: (GetFolderInput & GetFolderInput)[K]
    }>): Request<GetFolderOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getFolder(
          this.ops["GetFolder"].applicator.apply(partialParams)
        );
    }

    invokeGetMergeCommit(partialParams: ToOptional<{
      [K in keyof GetMergeCommitInput & keyof GetMergeCommitInput]: (GetMergeCommitInput & GetMergeCommitInput)[K]
    }>): Request<GetMergeCommitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMergeCommit(
          this.ops["GetMergeCommit"].applicator.apply(partialParams)
        );
    }

    invokeGetMergeConflicts(partialParams: ToOptional<{
      [K in keyof GetMergeConflictsInput & keyof GetMergeConflictsInput]: (GetMergeConflictsInput & GetMergeConflictsInput)[K]
    }>): Request<GetMergeConflictsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMergeConflicts(
          this.ops["GetMergeConflicts"].applicator.apply(partialParams)
        );
    }

    invokeGetMergeOptions(partialParams: ToOptional<{
      [K in keyof GetMergeOptionsInput & keyof GetMergeOptionsInput]: (GetMergeOptionsInput & GetMergeOptionsInput)[K]
    }>): Request<GetMergeOptionsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getMergeOptions(
          this.ops["GetMergeOptions"].applicator.apply(partialParams)
        );
    }

    invokeGetPullRequest(partialParams: ToOptional<{
      [K in keyof GetPullRequestInput & keyof GetPullRequestInput]: (GetPullRequestInput & GetPullRequestInput)[K]
    }>): Request<GetPullRequestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPullRequest(
          this.ops["GetPullRequest"].applicator.apply(partialParams)
        );
    }

    invokeGetPullRequestApprovalStates(partialParams: ToOptional<{
      [K in keyof GetPullRequestApprovalStatesInput & keyof GetPullRequestApprovalStatesInput]: (GetPullRequestApprovalStatesInput & GetPullRequestApprovalStatesInput)[K]
    }>): Request<GetPullRequestApprovalStatesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPullRequestApprovalStates(
          this.ops["GetPullRequestApprovalStates"].applicator.apply(partialParams)
        );
    }

    invokeGetPullRequestOverrideState(partialParams: ToOptional<{
      [K in keyof GetPullRequestOverrideStateInput & keyof GetPullRequestOverrideStateInput]: (GetPullRequestOverrideStateInput & GetPullRequestOverrideStateInput)[K]
    }>): Request<GetPullRequestOverrideStateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getPullRequestOverrideState(
          this.ops["GetPullRequestOverrideState"].applicator.apply(partialParams)
        );
    }

    invokeGetRepository(partialParams: ToOptional<{
      [K in keyof GetRepositoryInput & keyof GetRepositoryInput]: (GetRepositoryInput & GetRepositoryInput)[K]
    }>): Request<GetRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepository(
          this.ops["GetRepository"].applicator.apply(partialParams)
        );
    }

    invokeGetRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof GetRepositoryTriggersInput & keyof GetRepositoryTriggersInput]: (GetRepositoryTriggersInput & GetRepositoryTriggersInput)[K]
    }>): Request<GetRepositoryTriggersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.getRepositoryTriggers(
          this.ops["GetRepositoryTriggers"].applicator.apply(partialParams)
        );
    }

    invokeListAssociatedApprovalRuleTemplatesForRepository(partialParams: ToOptional<{
      [K in keyof ListAssociatedApprovalRuleTemplatesForRepositoryInput & keyof ListAssociatedApprovalRuleTemplatesForRepositoryInput]: (ListAssociatedApprovalRuleTemplatesForRepositoryInput & ListAssociatedApprovalRuleTemplatesForRepositoryInput)[K]
    }>): Request<ListAssociatedApprovalRuleTemplatesForRepositoryOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listAssociatedApprovalRuleTemplatesForRepository(
          this.ops["ListAssociatedApprovalRuleTemplatesForRepository"].applicator.apply(partialParams)
        );
    }

    invokeListBranches(partialParams: ToOptional<{
      [K in keyof ListBranchesInput & keyof ListBranchesInput]: (ListBranchesInput & ListBranchesInput)[K]
    }>): Request<ListBranchesOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listBranches(
          this.ops["ListBranches"].applicator.apply(partialParams)
        );
    }

    invokeListPullRequests(partialParams: ToOptional<{
      [K in keyof ListPullRequestsInput & keyof ListPullRequestsInput]: (ListPullRequestsInput & ListPullRequestsInput)[K]
    }>): Request<ListPullRequestsOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listPullRequests(
          this.ops["ListPullRequests"].applicator.apply(partialParams)
        );
    }

    invokeListRepositoriesForApprovalRuleTemplate(partialParams: ToOptional<{
      [K in keyof ListRepositoriesForApprovalRuleTemplateInput & keyof ListRepositoriesForApprovalRuleTemplateInput]: (ListRepositoriesForApprovalRuleTemplateInput & ListRepositoriesForApprovalRuleTemplateInput)[K]
    }>): Request<ListRepositoriesForApprovalRuleTemplateOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listRepositoriesForApprovalRuleTemplate(
          this.ops["ListRepositoriesForApprovalRuleTemplate"].applicator.apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceInput & keyof ListTagsForResourceInput]: (ListTagsForResourceInput & ListTagsForResourceInput)[K]
    }>): Request<ListTagsForResourceOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].applicator.apply(partialParams)
        );
    }

    invokeMergeBranchesByFastForward(partialParams: ToOptional<{
      [K in keyof MergeBranchesByFastForwardInput & keyof MergeBranchesByFastForwardInput]: (MergeBranchesByFastForwardInput & MergeBranchesByFastForwardInput)[K]
    }>): Request<MergeBranchesByFastForwardOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeBranchesByFastForward(
          this.ops["MergeBranchesByFastForward"].applicator.apply(partialParams)
        );
    }

    invokeMergeBranchesBySquash(partialParams: ToOptional<{
      [K in keyof MergeBranchesBySquashInput & keyof MergeBranchesBySquashInput]: (MergeBranchesBySquashInput & MergeBranchesBySquashInput)[K]
    }>): Request<MergeBranchesBySquashOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeBranchesBySquash(
          this.ops["MergeBranchesBySquash"].applicator.apply(partialParams)
        );
    }

    invokeMergeBranchesByThreeWay(partialParams: ToOptional<{
      [K in keyof MergeBranchesByThreeWayInput & keyof MergeBranchesByThreeWayInput]: (MergeBranchesByThreeWayInput & MergeBranchesByThreeWayInput)[K]
    }>): Request<MergeBranchesByThreeWayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergeBranchesByThreeWay(
          this.ops["MergeBranchesByThreeWay"].applicator.apply(partialParams)
        );
    }

    invokeMergePullRequestByFastForward(partialParams: ToOptional<{
      [K in keyof MergePullRequestByFastForwardInput & keyof MergePullRequestByFastForwardInput]: (MergePullRequestByFastForwardInput & MergePullRequestByFastForwardInput)[K]
    }>): Request<MergePullRequestByFastForwardOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergePullRequestByFastForward(
          this.ops["MergePullRequestByFastForward"].applicator.apply(partialParams)
        );
    }

    invokeMergePullRequestBySquash(partialParams: ToOptional<{
      [K in keyof MergePullRequestBySquashInput & keyof MergePullRequestBySquashInput]: (MergePullRequestBySquashInput & MergePullRequestBySquashInput)[K]
    }>): Request<MergePullRequestBySquashOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergePullRequestBySquash(
          this.ops["MergePullRequestBySquash"].applicator.apply(partialParams)
        );
    }

    invokeMergePullRequestByThreeWay(partialParams: ToOptional<{
      [K in keyof MergePullRequestByThreeWayInput & keyof MergePullRequestByThreeWayInput]: (MergePullRequestByThreeWayInput & MergePullRequestByThreeWayInput)[K]
    }>): Request<MergePullRequestByThreeWayOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.mergePullRequestByThreeWay(
          this.ops["MergePullRequestByThreeWay"].applicator.apply(partialParams)
        );
    }

    invokeOverridePullRequestApprovalRules(partialParams: ToOptional<{
      [K in keyof OverridePullRequestApprovalRulesInput & keyof OverridePullRequestApprovalRulesInput]: (OverridePullRequestApprovalRulesInput & OverridePullRequestApprovalRulesInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.overridePullRequestApprovalRules(
          this.ops["OverridePullRequestApprovalRules"].applicator.apply(partialParams)
        );
    }

    invokePostCommentForComparedCommit(partialParams: ToOptional<{
      [K in keyof PostCommentForComparedCommitInput & keyof PostCommentForComparedCommitInput]: (PostCommentForComparedCommitInput & PostCommentForComparedCommitInput)[K]
    }>): Request<PostCommentForComparedCommitOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.postCommentForComparedCommit(
          this.ops["PostCommentForComparedCommit"].applicator.apply(partialParams)
        );
    }

    invokePostCommentForPullRequest(partialParams: ToOptional<{
      [K in keyof PostCommentForPullRequestInput & keyof PostCommentForPullRequestInput]: (PostCommentForPullRequestInput & PostCommentForPullRequestInput)[K]
    }>): Request<PostCommentForPullRequestOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.postCommentForPullRequest(
          this.ops["PostCommentForPullRequest"].applicator.apply(partialParams)
        );
    }

    invokePostCommentReply(partialParams: ToOptional<{
      [K in keyof PostCommentReplyInput & keyof PostCommentReplyInput]: (PostCommentReplyInput & PostCommentReplyInput)[K]
    }>): Request<PostCommentReplyOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.postCommentReply(
          this.ops["PostCommentReply"].applicator.apply(partialParams)
        );
    }

    invokePutCommentReaction(partialParams: ToOptional<{
      [K in keyof PutCommentReactionInput & keyof PutCommentReactionInput]: (PutCommentReactionInput & PutCommentReactionInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putCommentReaction(
          this.ops["PutCommentReaction"].applicator.apply(partialParams)
        );
    }

    invokePutFile(partialParams: ToOptional<{
      [K in keyof PutFileInput & keyof PutFileInput]: (PutFileInput & PutFileInput)[K]
    }>): Request<PutFileOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putFile(
          this.ops["PutFile"].applicator.apply(partialParams)
        );
    }

    invokePutRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof PutRepositoryTriggersInput & keyof PutRepositoryTriggersInput]: (PutRepositoryTriggersInput & PutRepositoryTriggersInput)[K]
    }>): Request<PutRepositoryTriggersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.putRepositoryTriggers(
          this.ops["PutRepositoryTriggers"].applicator.apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceInput & keyof TagResourceInput]: (TagResourceInput & TagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].applicator.apply(partialParams)
        );
    }

    invokeTestRepositoryTriggers(partialParams: ToOptional<{
      [K in keyof TestRepositoryTriggersInput & keyof Omit<TestRepositoryTriggersInput, "repositoryName">]: (TestRepositoryTriggersInput & Omit<TestRepositoryTriggersInput, "repositoryName">)[K]
    }>): Request<TestRepositoryTriggersOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.testRepositoryTriggers(
          this.ops["TestRepositoryTriggers"].applicator.apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceInput & keyof UntagResourceInput]: (UntagResourceInput & UntagResourceInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateContent(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateContentInput & keyof UpdateApprovalRuleTemplateContentInput]: (UpdateApprovalRuleTemplateContentInput & UpdateApprovalRuleTemplateContentInput)[K]
    }>): Request<UpdateApprovalRuleTemplateContentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApprovalRuleTemplateContent(
          this.ops["UpdateApprovalRuleTemplateContent"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateDescription(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateDescriptionInput & keyof UpdateApprovalRuleTemplateDescriptionInput]: (UpdateApprovalRuleTemplateDescriptionInput & UpdateApprovalRuleTemplateDescriptionInput)[K]
    }>): Request<UpdateApprovalRuleTemplateDescriptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApprovalRuleTemplateDescription(
          this.ops["UpdateApprovalRuleTemplateDescription"].applicator.apply(partialParams)
        );
    }

    invokeUpdateApprovalRuleTemplateName(partialParams: ToOptional<{
      [K in keyof UpdateApprovalRuleTemplateNameInput & keyof UpdateApprovalRuleTemplateNameInput]: (UpdateApprovalRuleTemplateNameInput & UpdateApprovalRuleTemplateNameInput)[K]
    }>): Request<UpdateApprovalRuleTemplateNameOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateApprovalRuleTemplateName(
          this.ops["UpdateApprovalRuleTemplateName"].applicator.apply(partialParams)
        );
    }

    invokeUpdateComment(partialParams: ToOptional<{
      [K in keyof UpdateCommentInput & keyof UpdateCommentInput]: (UpdateCommentInput & UpdateCommentInput)[K]
    }>): Request<UpdateCommentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateComment(
          this.ops["UpdateComment"].applicator.apply(partialParams)
        );
    }

    invokeUpdateDefaultBranch(partialParams: ToOptional<{
      [K in keyof UpdateDefaultBranchInput & keyof Omit<UpdateDefaultBranchInput, "repositoryName">]: (UpdateDefaultBranchInput & Omit<UpdateDefaultBranchInput, "repositoryName">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateDefaultBranch(
          this.ops["UpdateDefaultBranch"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePullRequestApprovalRuleContent(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestApprovalRuleContentInput & keyof UpdatePullRequestApprovalRuleContentInput]: (UpdatePullRequestApprovalRuleContentInput & UpdatePullRequestApprovalRuleContentInput)[K]
    }>): Request<UpdatePullRequestApprovalRuleContentOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestApprovalRuleContent(
          this.ops["UpdatePullRequestApprovalRuleContent"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePullRequestApprovalState(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestApprovalStateInput & keyof UpdatePullRequestApprovalStateInput]: (UpdatePullRequestApprovalStateInput & UpdatePullRequestApprovalStateInput)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestApprovalState(
          this.ops["UpdatePullRequestApprovalState"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePullRequestDescription(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestDescriptionInput & keyof UpdatePullRequestDescriptionInput]: (UpdatePullRequestDescriptionInput & UpdatePullRequestDescriptionInput)[K]
    }>): Request<UpdatePullRequestDescriptionOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestDescription(
          this.ops["UpdatePullRequestDescription"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePullRequestStatus(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestStatusInput & keyof UpdatePullRequestStatusInput]: (UpdatePullRequestStatusInput & UpdatePullRequestStatusInput)[K]
    }>): Request<UpdatePullRequestStatusOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestStatus(
          this.ops["UpdatePullRequestStatus"].applicator.apply(partialParams)
        );
    }

    invokeUpdatePullRequestTitle(partialParams: ToOptional<{
      [K in keyof UpdatePullRequestTitleInput & keyof UpdatePullRequestTitleInput]: (UpdatePullRequestTitleInput & UpdatePullRequestTitleInput)[K]
    }>): Request<UpdatePullRequestTitleOutput, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updatePullRequestTitle(
          this.ops["UpdatePullRequestTitle"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRepositoryDescription(partialParams: ToOptional<{
      [K in keyof UpdateRepositoryDescriptionInput & keyof Omit<UpdateRepositoryDescriptionInput, "repositoryName">]: (UpdateRepositoryDescriptionInput & Omit<UpdateRepositoryDescriptionInput, "repositoryName">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRepositoryDescription(
          this.ops["UpdateRepositoryDescription"].applicator.apply(partialParams)
        );
    }

    invokeUpdateRepositoryName(partialParams: ToOptional<{
      [K in keyof UpdateRepositoryNameInput & keyof Omit<UpdateRepositoryNameInput, "oldName"|"newName">]: (UpdateRepositoryNameInput & Omit<UpdateRepositoryNameInput, "oldName"|"newName">)[K]
    }>): Request<void, AWSError> {
        //console.log(this.capitalizedParams['Bucket'])
        //console.log(this.capitalizedParams['Bucket'].value)
        this.boot();
        return this.client.updateRepositoryName(
          this.ops["UpdateRepositoryName"].applicator.apply(partialParams)
        );
    }
}