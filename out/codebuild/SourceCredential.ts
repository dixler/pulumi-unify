
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {
    BatchDeleteBuildsInput,
    BatchGetBuildBatchesInput,
    BatchGetBuildsInput,
    BatchGetProjectsInput,
    BatchGetReportGroupsInput,
    BatchGetReportsInput,
    CreateProjectInput,
    CreateReportGroupInput,
    CreateWebhookInput,
    DeleteBuildBatchInput,
    DeleteProjectInput,
    DeleteReportInput,
    DeleteReportGroupInput,
    DeleteResourcePolicyInput,
    DeleteSourceCredentialsInput,
    DeleteWebhookInput,
    DescribeCodeCoveragesInput,
    DescribeTestCasesInput,
    GetReportGroupTrendInput,
    GetResourcePolicyInput,
    ImportSourceCredentialsInput,
    InvalidateProjectCacheInput,
    ListBuildsForProjectInput,
    ListReportsForReportGroupInput,
    PutResourcePolicyInput,
    StartBuildInput,
    StartBuildBatchInput,
    StopBuildInput,
    StopBuildBatchInput,
    UpdateProjectInput,
    UpdateProjectVisibilityInput,
    UpdateReportGroupInput,
    UpdateWebhookInput,
    BatchDeleteBuildsOutput,
    BatchGetBuildBatchesOutput,
    BatchGetBuildsOutput,
    BatchGetProjectsOutput,
    BatchGetReportGroupsOutput,
    BatchGetReportsOutput,
    CreateProjectOutput,
    CreateReportGroupOutput,
    CreateWebhookOutput,
    DeleteBuildBatchOutput,
    DeleteProjectOutput,
    DeleteReportOutput,
    DeleteReportGroupOutput,
    DeleteResourcePolicyOutput,
    DeleteSourceCredentialsOutput,
    DeleteWebhookOutput,
    DescribeCodeCoveragesOutput,
    DescribeTestCasesOutput,
    GetReportGroupTrendOutput,
    GetResourcePolicyOutput,
    ImportSourceCredentialsOutput,
    InvalidateProjectCacheOutput,
    ListBuildsForProjectOutput,
    ListReportsForReportGroupOutput,
    PutResourcePolicyOutput,
    StartBuildOutput,
    StartBuildBatchOutput,
    StopBuildOutput,
    StopBuildBatchOutput,
    UpdateProjectOutput,
    UpdateProjectVisibilityOutput,
    UpdateReportGroupOutput,
    UpdateWebhookOutput
} from "aws-sdk/clients/codebuild";

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codebuild.SourceCredential {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.codebuild.SourceCredential>) {
        super(...args)
        this.client = new awssdk.CodeBuild()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/codebuild-2016-10-06.normal.json"), this.client)
    }

    invokeBatchDeleteBuilds(partialParams: ToOptional<{
      [K in keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput & keyof BatchDeleteBuildsInput]: (BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput & BatchDeleteBuildsInput)[K]
    }>): BatchDeleteBuildsOutput {
        return this.client.batchDeleteBuilds(
            this.ops["BatchDeleteBuilds"].apply(partialParams)
        );
    }

    invokeBatchGetBuildBatches(partialParams: ToOptional<{
      [K in keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput & keyof BatchGetBuildBatchesInput]: (BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput & BatchGetBuildBatchesInput)[K]
    }>): BatchGetBuildBatchesOutput {
        return this.client.batchGetBuildBatches(
            this.ops["BatchGetBuildBatches"].apply(partialParams)
        );
    }

    invokeBatchGetBuilds(partialParams: ToOptional<{
      [K in keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput & keyof BatchGetBuildsInput]: (BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput & BatchGetBuildsInput)[K]
    }>): BatchGetBuildsOutput {
        return this.client.batchGetBuilds(
            this.ops["BatchGetBuilds"].apply(partialParams)
        );
    }

    invokeBatchGetProjects(partialParams: ToOptional<{
      [K in keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput & keyof BatchGetProjectsInput]: (BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput & BatchGetProjectsInput)[K]
    }>): BatchGetProjectsOutput {
        return this.client.batchGetProjects(
            this.ops["BatchGetProjects"].apply(partialParams)
        );
    }

    invokeBatchGetReportGroups(partialParams: ToOptional<{
      [K in keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput & keyof BatchGetReportGroupsInput]: (BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput & BatchGetReportGroupsInput)[K]
    }>): BatchGetReportGroupsOutput {
        return this.client.batchGetReportGroups(
            this.ops["BatchGetReportGroups"].apply(partialParams)
        );
    }

    invokeBatchGetReports(partialParams: ToOptional<{
      [K in keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput & keyof BatchGetReportsInput]: (BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput & BatchGetReportsInput)[K]
    }>): BatchGetReportsOutput {
        return this.client.batchGetReports(
            this.ops["BatchGetReports"].apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput & keyof CreateProjectInput]: (CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput & CreateProjectInput)[K]
    }>): CreateProjectOutput {
        return this.client.createProject(
            this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeCreateReportGroup(partialParams: ToOptional<{
      [K in keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput & keyof CreateReportGroupInput]: (CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput & CreateReportGroupInput)[K]
    }>): CreateReportGroupOutput {
        return this.client.createReportGroup(
            this.ops["CreateReportGroup"].apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput & keyof CreateWebhookInput]: (CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput & CreateWebhookInput)[K]
    }>): CreateWebhookOutput {
        return this.client.createWebhook(
            this.ops["CreateWebhook"].apply(partialParams)
        );
    }

    invokeDeleteBuildBatch(partialParams: ToOptional<{
      [K in keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput & keyof DeleteBuildBatchInput]: (DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput & DeleteBuildBatchInput)[K]
    }>): DeleteBuildBatchOutput {
        return this.client.deleteBuildBatch(
            this.ops["DeleteBuildBatch"].apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput & keyof DeleteProjectInput]: (DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput & DeleteProjectInput)[K]
    }>): DeleteProjectOutput {
        return this.client.deleteProject(
            this.ops["DeleteProject"].apply(partialParams)
        );
    }

    invokeDeleteReport(partialParams: ToOptional<{
      [K in keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput & keyof DeleteReportInput]: (DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput & DeleteReportInput)[K]
    }>): DeleteReportOutput {
        return this.client.deleteReport(
            this.ops["DeleteReport"].apply(partialParams)
        );
    }

    invokeDeleteReportGroup(partialParams: ToOptional<{
      [K in keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput & keyof DeleteReportGroupInput]: (DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput & DeleteReportGroupInput)[K]
    }>): DeleteReportGroupOutput {
        return this.client.deleteReportGroup(
            this.ops["DeleteReportGroup"].apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput & keyof DeleteResourcePolicyInput]: (DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput & DeleteResourcePolicyInput)[K]
    }>): DeleteResourcePolicyOutput {
        return this.client.deleteResourcePolicy(
            this.ops["DeleteResourcePolicy"].apply(partialParams)
        );
    }

    invokeDeleteSourceCredentials(partialParams: ToOptional<{
      [K in keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput & keyof DeleteSourceCredentialsInput]: (DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput & DeleteSourceCredentialsInput)[K]
    }>): DeleteSourceCredentialsOutput {
        return this.client.deleteSourceCredentials(
            this.ops["DeleteSourceCredentials"].apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput & keyof DeleteWebhookInput]: (DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput & DeleteWebhookInput)[K]
    }>): DeleteWebhookOutput {
        return this.client.deleteWebhook(
            this.ops["DeleteWebhook"].apply(partialParams)
        );
    }

    invokeDescribeCodeCoverages(partialParams: ToOptional<{
      [K in keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput & keyof DescribeCodeCoveragesInput]: (DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput & DescribeCodeCoveragesInput)[K]
    }>): DescribeCodeCoveragesOutput {
        return this.client.describeCodeCoverages(
            this.ops["DescribeCodeCoverages"].apply(partialParams)
        );
    }

    invokeDescribeTestCases(partialParams: ToOptional<{
      [K in keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput & keyof DescribeTestCasesInput]: (DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput & DescribeTestCasesInput)[K]
    }>): DescribeTestCasesOutput {
        return this.client.describeTestCases(
            this.ops["DescribeTestCases"].apply(partialParams)
        );
    }

    invokeGetReportGroupTrend(partialParams: ToOptional<{
      [K in keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput & keyof GetReportGroupTrendInput]: (GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput & GetReportGroupTrendInput)[K]
    }>): GetReportGroupTrendOutput {
        return this.client.getReportGroupTrend(
            this.ops["GetReportGroupTrend"].apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput & keyof GetResourcePolicyInput]: (GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput & GetResourcePolicyInput)[K]
    }>): GetResourcePolicyOutput {
        return this.client.getResourcePolicy(
            this.ops["GetResourcePolicy"].apply(partialParams)
        );
    }

    invokeImportSourceCredentials(partialParams: ToOptional<{
      [K in keyof ImportSourceCredentialsInput & keyof Omit<ImportSourceCredentialsInput, "authType"> & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput & keyof ImportSourceCredentialsInput]: (ImportSourceCredentialsInput & Omit<ImportSourceCredentialsInput, "authType"> & ImportSourceCredentialsInput & ImportSourceCredentialsInput & ImportSourceCredentialsInput)[K]
    }>): ImportSourceCredentialsOutput {
        return this.client.importSourceCredentials(
            this.ops["ImportSourceCredentials"].apply(partialParams)
        );
    }

    invokeInvalidateProjectCache(partialParams: ToOptional<{
      [K in keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput & keyof InvalidateProjectCacheInput]: (InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput & InvalidateProjectCacheInput)[K]
    }>): InvalidateProjectCacheOutput {
        return this.client.invalidateProjectCache(
            this.ops["InvalidateProjectCache"].apply(partialParams)
        );
    }

    invokeListBuildsForProject(partialParams: ToOptional<{
      [K in keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput & keyof ListBuildsForProjectInput]: (ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput & ListBuildsForProjectInput)[K]
    }>): ListBuildsForProjectOutput {
        return this.client.listBuildsForProject(
            this.ops["ListBuildsForProject"].apply(partialParams)
        );
    }

    invokeListReportsForReportGroup(partialParams: ToOptional<{
      [K in keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput & keyof ListReportsForReportGroupInput]: (ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput & ListReportsForReportGroupInput)[K]
    }>): ListReportsForReportGroupOutput {
        return this.client.listReportsForReportGroup(
            this.ops["ListReportsForReportGroup"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput & keyof PutResourcePolicyInput]: (PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput & PutResourcePolicyInput)[K]
    }>): PutResourcePolicyOutput {
        return this.client.putResourcePolicy(
            this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokeStartBuild(partialParams: ToOptional<{
      [K in keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput & keyof StartBuildInput]: (StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput & StartBuildInput)[K]
    }>): StartBuildOutput {
        return this.client.startBuild(
            this.ops["StartBuild"].apply(partialParams)
        );
    }

    invokeStartBuildBatch(partialParams: ToOptional<{
      [K in keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput & keyof StartBuildBatchInput]: (StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput & StartBuildBatchInput)[K]
    }>): StartBuildBatchOutput {
        return this.client.startBuildBatch(
            this.ops["StartBuildBatch"].apply(partialParams)
        );
    }

    invokeStopBuild(partialParams: ToOptional<{
      [K in keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput & keyof StopBuildInput]: (StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput & StopBuildInput)[K]
    }>): StopBuildOutput {
        return this.client.stopBuild(
            this.ops["StopBuild"].apply(partialParams)
        );
    }

    invokeStopBuildBatch(partialParams: ToOptional<{
      [K in keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput & keyof StopBuildBatchInput]: (StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput & StopBuildBatchInput)[K]
    }>): StopBuildBatchOutput {
        return this.client.stopBuildBatch(
            this.ops["StopBuildBatch"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput & keyof UpdateProjectInput]: (UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput & UpdateProjectInput)[K]
    }>): UpdateProjectOutput {
        return this.client.updateProject(
            this.ops["UpdateProject"].apply(partialParams)
        );
    }

    invokeUpdateProjectVisibility(partialParams: ToOptional<{
      [K in keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput & keyof UpdateProjectVisibilityInput]: (UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput & UpdateProjectVisibilityInput)[K]
    }>): UpdateProjectVisibilityOutput {
        return this.client.updateProjectVisibility(
            this.ops["UpdateProjectVisibility"].apply(partialParams)
        );
    }

    invokeUpdateReportGroup(partialParams: ToOptional<{
      [K in keyof Omit<UpdateReportGroupInput, "arn"> & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput & keyof UpdateReportGroupInput]: (Omit<UpdateReportGroupInput, "arn"> & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput & UpdateReportGroupInput)[K]
    }>): UpdateReportGroupOutput {
        return this.client.updateReportGroup(
            this.ops["UpdateReportGroup"].apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput & keyof UpdateWebhookInput]: (UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput & UpdateWebhookInput)[K]
    }>): UpdateWebhookOutput {
        return this.client.updateWebhook(
            this.ops["UpdateWebhook"].apply(partialParams)
        );
    }
}