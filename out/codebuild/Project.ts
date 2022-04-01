
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

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
    ListBuildBatchesInput,
    ListBuildBatchesForProjectInput,
    ListBuildsInput,
    ListBuildsForProjectInput,
    ListCuratedEnvironmentImagesInput,
    ListProjectsInput,
    ListReportGroupsInput,
    ListReportsInput,
    ListReportsForReportGroupInput,
    ListSharedProjectsInput,
    ListSharedReportGroupsInput,
    ListSourceCredentialsInput,
    PutResourcePolicyInput,
    RetryBuildInput,
    RetryBuildBatchInput,
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
    ListBuildBatchesOutput,
    ListBuildBatchesForProjectOutput,
    ListBuildsOutput,
    ListBuildsForProjectOutput,
    ListCuratedEnvironmentImagesOutput,
    ListProjectsOutput,
    ListReportGroupsOutput,
    ListReportsOutput,
    ListReportsForReportGroupOutput,
    ListSharedProjectsOutput,
    ListSharedReportGroupsOutput,
    ListSourceCredentialsOutput,
    PutResourcePolicyOutput,
    RetryBuildOutput,
    RetryBuildBatchOutput,
    StartBuildOutput,
    StartBuildBatchOutput,
    StopBuildOutput,
    StopBuildBatchOutput,
    UpdateProjectOutput,
    UpdateProjectVisibilityOutput,
    UpdateReportGroupOutput,
    UpdateWebhookOutput
} from "aws-sdk/clients/codebuild";
const schema = require("../apis/codebuild-2016-10-06.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.codebuild.Project {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.codebuild.Project>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.CodeBuild()
        this.capitalizedParams = {};
        Object.entries(this).forEach(([key, value]: [string, any]) => {
          this.capitalizedParams[upperCamelCase(key)] = value;
          if ((this as any)[upperCamelCase(this.constructor.name)+upperCamelCase(key)] === undefined) {
              this.capitalizedParams[this.constructor.name+upperCamelCase(key)] = value;
          }
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

    invokeBatchDeleteBuilds(partialParams: ToOptional<{
      [K in keyof BatchDeleteBuildsInput]: (BatchDeleteBuildsInput)[K]
    }>): Request<BatchDeleteBuildsOutput, AWSError> {
        this.boot();
        return this.client.batchDeleteBuilds(
          this.ops["BatchDeleteBuilds"].apply(partialParams)
        );
    }

    invokeBatchGetBuildBatches(partialParams: ToOptional<{
      [K in keyof BatchGetBuildBatchesInput]: (BatchGetBuildBatchesInput)[K]
    }>): Request<BatchGetBuildBatchesOutput, AWSError> {
        this.boot();
        return this.client.batchGetBuildBatches(
          this.ops["BatchGetBuildBatches"].apply(partialParams)
        );
    }

    invokeBatchGetBuilds(partialParams: ToOptional<{
      [K in keyof BatchGetBuildsInput]: (BatchGetBuildsInput)[K]
    }>): Request<BatchGetBuildsOutput, AWSError> {
        this.boot();
        return this.client.batchGetBuilds(
          this.ops["BatchGetBuilds"].apply(partialParams)
        );
    }

    invokeBatchGetProjects(partialParams: ToOptional<{
      [K in keyof BatchGetProjectsInput]: (BatchGetProjectsInput)[K]
    }>): Request<BatchGetProjectsOutput, AWSError> {
        this.boot();
        return this.client.batchGetProjects(
          this.ops["BatchGetProjects"].apply(partialParams)
        );
    }

    invokeBatchGetReportGroups(partialParams: ToOptional<{
      [K in keyof BatchGetReportGroupsInput]: (BatchGetReportGroupsInput)[K]
    }>): Request<BatchGetReportGroupsOutput, AWSError> {
        this.boot();
        return this.client.batchGetReportGroups(
          this.ops["BatchGetReportGroups"].apply(partialParams)
        );
    }

    invokeBatchGetReports(partialParams: ToOptional<{
      [K in keyof BatchGetReportsInput]: (BatchGetReportsInput)[K]
    }>): Request<BatchGetReportsOutput, AWSError> {
        this.boot();
        return this.client.batchGetReports(
          this.ops["BatchGetReports"].apply(partialParams)
        );
    }

    invokeCreateProject(partialParams: ToOptional<{
      [K in keyof CreateProjectInput]: (CreateProjectInput)[K]
    }>): Request<CreateProjectOutput, AWSError> {
        this.boot();
        return this.client.createProject(
          this.ops["CreateProject"].apply(partialParams)
        );
    }

    invokeCreateReportGroup(partialParams: ToOptional<{
      [K in keyof CreateReportGroupInput]: (CreateReportGroupInput)[K]
    }>): Request<CreateReportGroupOutput, AWSError> {
        this.boot();
        return this.client.createReportGroup(
          this.ops["CreateReportGroup"].apply(partialParams)
        );
    }

    invokeCreateWebhook(partialParams: ToOptional<{
      [K in keyof CreateWebhookInput]: (CreateWebhookInput)[K]
    }>): Request<CreateWebhookOutput, AWSError> {
        this.boot();
        return this.client.createWebhook(
          this.ops["CreateWebhook"].apply(partialParams)
        );
    }

    invokeDeleteBuildBatch(partialParams: ToOptional<{
      [K in keyof DeleteBuildBatchInput]: (DeleteBuildBatchInput)[K]
    }>): Request<DeleteBuildBatchOutput, AWSError> {
        this.boot();
        return this.client.deleteBuildBatch(
          this.ops["DeleteBuildBatch"].apply(partialParams)
        );
    }

    invokeDeleteProject(partialParams: ToOptional<{
      [K in keyof DeleteProjectInput]: (DeleteProjectInput)[K]
    }>): Request<DeleteProjectOutput, AWSError> {
        this.boot();
        return this.client.deleteProject(
          this.ops["DeleteProject"].apply(partialParams)
        );
    }

    invokeDeleteReport(partialParams: ToOptional<{
      [K in keyof DeleteReportInput]: (DeleteReportInput)[K]
    }>): Request<DeleteReportOutput, AWSError> {
        this.boot();
        return this.client.deleteReport(
          this.ops["DeleteReport"].apply(partialParams)
        );
    }

    invokeDeleteReportGroup(partialParams: ToOptional<{
      [K in keyof DeleteReportGroupInput]: (DeleteReportGroupInput)[K]
    }>): Request<DeleteReportGroupOutput, AWSError> {
        this.boot();
        return this.client.deleteReportGroup(
          this.ops["DeleteReportGroup"].apply(partialParams)
        );
    }

    invokeDeleteResourcePolicy(partialParams: ToOptional<{
      [K in keyof DeleteResourcePolicyInput]: (DeleteResourcePolicyInput)[K]
    }>): Request<DeleteResourcePolicyOutput, AWSError> {
        this.boot();
        return this.client.deleteResourcePolicy(
          this.ops["DeleteResourcePolicy"].apply(partialParams)
        );
    }

    invokeDeleteSourceCredentials(partialParams: ToOptional<{
      [K in keyof DeleteSourceCredentialsInput]: (DeleteSourceCredentialsInput)[K]
    }>): Request<DeleteSourceCredentialsOutput, AWSError> {
        this.boot();
        return this.client.deleteSourceCredentials(
          this.ops["DeleteSourceCredentials"].apply(partialParams)
        );
    }

    invokeDeleteWebhook(partialParams: ToOptional<{
      [K in keyof DeleteWebhookInput]: (DeleteWebhookInput)[K]
    }>): Request<DeleteWebhookOutput, AWSError> {
        this.boot();
        return this.client.deleteWebhook(
          this.ops["DeleteWebhook"].apply(partialParams)
        );
    }

    invokeDescribeCodeCoverages(partialParams: ToOptional<{
      [K in keyof DescribeCodeCoveragesInput]: (DescribeCodeCoveragesInput)[K]
    }>): Request<DescribeCodeCoveragesOutput, AWSError> {
        this.boot();
        return this.client.describeCodeCoverages(
          this.ops["DescribeCodeCoverages"].apply(partialParams)
        );
    }

    invokeDescribeTestCases(partialParams: ToOptional<{
      [K in keyof DescribeTestCasesInput]: (DescribeTestCasesInput)[K]
    }>): Request<DescribeTestCasesOutput, AWSError> {
        this.boot();
        return this.client.describeTestCases(
          this.ops["DescribeTestCases"].apply(partialParams)
        );
    }

    invokeGetReportGroupTrend(partialParams: ToOptional<{
      [K in keyof GetReportGroupTrendInput]: (GetReportGroupTrendInput)[K]
    }>): Request<GetReportGroupTrendOutput, AWSError> {
        this.boot();
        return this.client.getReportGroupTrend(
          this.ops["GetReportGroupTrend"].apply(partialParams)
        );
    }

    invokeGetResourcePolicy(partialParams: ToOptional<{
      [K in keyof GetResourcePolicyInput]: (GetResourcePolicyInput)[K]
    }>): Request<GetResourcePolicyOutput, AWSError> {
        this.boot();
        return this.client.getResourcePolicy(
          this.ops["GetResourcePolicy"].apply(partialParams)
        );
    }

    invokeImportSourceCredentials(partialParams: ToOptional<{
      [K in keyof ImportSourceCredentialsInput]: (ImportSourceCredentialsInput)[K]
    }>): Request<ImportSourceCredentialsOutput, AWSError> {
        this.boot();
        return this.client.importSourceCredentials(
          this.ops["ImportSourceCredentials"].apply(partialParams)
        );
    }

    invokeInvalidateProjectCache(partialParams: ToOptional<{
      [K in keyof InvalidateProjectCacheInput]: (InvalidateProjectCacheInput)[K]
    }>): Request<InvalidateProjectCacheOutput, AWSError> {
        this.boot();
        return this.client.invalidateProjectCache(
          this.ops["InvalidateProjectCache"].apply(partialParams)
        );
    }

    invokeListBuildBatches(partialParams: ToOptional<{
      [K in keyof ListBuildBatchesInput]: (ListBuildBatchesInput)[K]
    }>): Request<ListBuildBatchesOutput, AWSError> {
        this.boot();
        return this.client.listBuildBatches(
          this.ops["ListBuildBatches"].apply(partialParams)
        );
    }

    invokeListBuildBatchesForProject(partialParams: ToOptional<{
      [K in keyof ListBuildBatchesForProjectInput]: (ListBuildBatchesForProjectInput)[K]
    }>): Request<ListBuildBatchesForProjectOutput, AWSError> {
        this.boot();
        return this.client.listBuildBatchesForProject(
          this.ops["ListBuildBatchesForProject"].apply(partialParams)
        );
    }

    invokeListBuilds(partialParams: ToOptional<{
      [K in keyof ListBuildsInput]: (ListBuildsInput)[K]
    }>): Request<ListBuildsOutput, AWSError> {
        this.boot();
        return this.client.listBuilds(
          this.ops["ListBuilds"].apply(partialParams)
        );
    }

    invokeListBuildsForProject(partialParams: ToOptional<{
      [K in keyof ListBuildsForProjectInput]: (ListBuildsForProjectInput)[K]
    }>): Request<ListBuildsForProjectOutput, AWSError> {
        this.boot();
        return this.client.listBuildsForProject(
          this.ops["ListBuildsForProject"].apply(partialParams)
        );
    }

    invokeListCuratedEnvironmentImages(partialParams: ToOptional<{
      [K in keyof ListCuratedEnvironmentImagesInput]: (ListCuratedEnvironmentImagesInput)[K]
    }>): Request<ListCuratedEnvironmentImagesOutput, AWSError> {
        this.boot();
        return this.client.listCuratedEnvironmentImages(
          this.ops["ListCuratedEnvironmentImages"].apply(partialParams)
        );
    }

    invokeListProjects(partialParams: ToOptional<{
      [K in keyof ListProjectsInput]: (ListProjectsInput)[K]
    }>): Request<ListProjectsOutput, AWSError> {
        this.boot();
        return this.client.listProjects(
          this.ops["ListProjects"].apply(partialParams)
        );
    }

    invokeListReportGroups(partialParams: ToOptional<{
      [K in keyof ListReportGroupsInput]: (ListReportGroupsInput)[K]
    }>): Request<ListReportGroupsOutput, AWSError> {
        this.boot();
        return this.client.listReportGroups(
          this.ops["ListReportGroups"].apply(partialParams)
        );
    }

    invokeListReports(partialParams: ToOptional<{
      [K in keyof ListReportsInput]: (ListReportsInput)[K]
    }>): Request<ListReportsOutput, AWSError> {
        this.boot();
        return this.client.listReports(
          this.ops["ListReports"].apply(partialParams)
        );
    }

    invokeListReportsForReportGroup(partialParams: ToOptional<{
      [K in keyof ListReportsForReportGroupInput]: (ListReportsForReportGroupInput)[K]
    }>): Request<ListReportsForReportGroupOutput, AWSError> {
        this.boot();
        return this.client.listReportsForReportGroup(
          this.ops["ListReportsForReportGroup"].apply(partialParams)
        );
    }

    invokeListSharedProjects(partialParams: ToOptional<{
      [K in keyof ListSharedProjectsInput]: (ListSharedProjectsInput)[K]
    }>): Request<ListSharedProjectsOutput, AWSError> {
        this.boot();
        return this.client.listSharedProjects(
          this.ops["ListSharedProjects"].apply(partialParams)
        );
    }

    invokeListSharedReportGroups(partialParams: ToOptional<{
      [K in keyof ListSharedReportGroupsInput]: (ListSharedReportGroupsInput)[K]
    }>): Request<ListSharedReportGroupsOutput, AWSError> {
        this.boot();
        return this.client.listSharedReportGroups(
          this.ops["ListSharedReportGroups"].apply(partialParams)
        );
    }

    invokeListSourceCredentials(partialParams: ToOptional<{
      [K in keyof ListSourceCredentialsInput]: (ListSourceCredentialsInput)[K]
    }>): Request<ListSourceCredentialsOutput, AWSError> {
        this.boot();
        return this.client.listSourceCredentials(
          this.ops["ListSourceCredentials"].apply(partialParams)
        );
    }

    invokePutResourcePolicy(partialParams: ToOptional<{
      [K in keyof PutResourcePolicyInput]: (PutResourcePolicyInput)[K]
    }>): Request<PutResourcePolicyOutput, AWSError> {
        this.boot();
        return this.client.putResourcePolicy(
          this.ops["PutResourcePolicy"].apply(partialParams)
        );
    }

    invokeRetryBuild(partialParams: ToOptional<{
      [K in keyof RetryBuildInput]: (RetryBuildInput)[K]
    }>): Request<RetryBuildOutput, AWSError> {
        this.boot();
        return this.client.retryBuild(
          this.ops["RetryBuild"].apply(partialParams)
        );
    }

    invokeRetryBuildBatch(partialParams: ToOptional<{
      [K in keyof RetryBuildBatchInput]: (RetryBuildBatchInput)[K]
    }>): Request<RetryBuildBatchOutput, AWSError> {
        this.boot();
        return this.client.retryBuildBatch(
          this.ops["RetryBuildBatch"].apply(partialParams)
        );
    }

    invokeStartBuild(partialParams: ToOptional<{
      [K in keyof StartBuildInput]: (StartBuildInput)[K]
    }>): Request<StartBuildOutput, AWSError> {
        this.boot();
        return this.client.startBuild(
          this.ops["StartBuild"].apply(partialParams)
        );
    }

    invokeStartBuildBatch(partialParams: ToOptional<{
      [K in keyof StartBuildBatchInput]: (StartBuildBatchInput)[K]
    }>): Request<StartBuildBatchOutput, AWSError> {
        this.boot();
        return this.client.startBuildBatch(
          this.ops["StartBuildBatch"].apply(partialParams)
        );
    }

    invokeStopBuild(partialParams: ToOptional<{
      [K in keyof StopBuildInput]: (StopBuildInput)[K]
    }>): Request<StopBuildOutput, AWSError> {
        this.boot();
        return this.client.stopBuild(
          this.ops["StopBuild"].apply(partialParams)
        );
    }

    invokeStopBuildBatch(partialParams: ToOptional<{
      [K in keyof StopBuildBatchInput]: (StopBuildBatchInput)[K]
    }>): Request<StopBuildBatchOutput, AWSError> {
        this.boot();
        return this.client.stopBuildBatch(
          this.ops["StopBuildBatch"].apply(partialParams)
        );
    }

    invokeUpdateProject(partialParams: ToOptional<{
      [K in keyof UpdateProjectInput]: (UpdateProjectInput)[K]
    }>): Request<UpdateProjectOutput, AWSError> {
        this.boot();
        return this.client.updateProject(
          this.ops["UpdateProject"].apply(partialParams)
        );
    }

    invokeUpdateProjectVisibility(partialParams: ToOptional<{
      [K in keyof UpdateProjectVisibilityInput]: (UpdateProjectVisibilityInput)[K]
    }>): Request<UpdateProjectVisibilityOutput, AWSError> {
        this.boot();
        return this.client.updateProjectVisibility(
          this.ops["UpdateProjectVisibility"].apply(partialParams)
        );
    }

    invokeUpdateReportGroup(partialParams: ToOptional<{
      [K in keyof UpdateReportGroupInput]: (UpdateReportGroupInput)[K]
    }>): Request<UpdateReportGroupOutput, AWSError> {
        this.boot();
        return this.client.updateReportGroup(
          this.ops["UpdateReportGroup"].apply(partialParams)
        );
    }

    invokeUpdateWebhook(partialParams: ToOptional<{
      [K in keyof UpdateWebhookInput]: (UpdateWebhookInput)[K]
    }>): Request<UpdateWebhookOutput, AWSError> {
        this.boot();
        return this.client.updateWebhook(
          this.ops["UpdateWebhook"].apply(partialParams)
        );
    }
}