
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptInvitationRequest,
    BatchGetCustomDataIdentifiersRequest,
    CreateClassificationJobRequest,
    CreateCustomDataIdentifierRequest,
    CreateFindingsFilterRequest,
    CreateInvitationsRequest,
    CreateMemberRequest,
    CreateSampleFindingsRequest,
    DeclineInvitationsRequest,
    DeleteCustomDataIdentifierRequest,
    DeleteFindingsFilterRequest,
    DeleteInvitationsRequest,
    DeleteMemberRequest,
    DescribeBucketsRequest,
    DescribeClassificationJobRequest,
    DescribeOrganizationConfigurationRequest,
    DisableMacieRequest,
    DisableOrganizationAdminAccountRequest,
    DisassociateFromAdministratorAccountRequest,
    DisassociateFromMasterAccountRequest,
    DisassociateMemberRequest,
    EnableMacieRequest,
    EnableOrganizationAdminAccountRequest,
    GetAdministratorAccountRequest,
    GetBucketStatisticsRequest,
    GetClassificationExportConfigurationRequest,
    GetCustomDataIdentifierRequest,
    GetFindingStatisticsRequest,
    GetFindingsRequest,
    GetFindingsFilterRequest,
    GetFindingsPublicationConfigurationRequest,
    GetInvitationsCountRequest,
    GetMacieSessionRequest,
    GetMasterAccountRequest,
    GetMemberRequest,
    GetUsageStatisticsRequest,
    GetUsageTotalsRequest,
    ListClassificationJobsRequest,
    ListCustomDataIdentifiersRequest,
    ListFindingsRequest,
    ListFindingsFiltersRequest,
    ListInvitationsRequest,
    ListManagedDataIdentifiersRequest,
    ListMembersRequest,
    ListOrganizationAdminAccountsRequest,
    ListTagsForResourceRequest,
    PutClassificationExportConfigurationRequest,
    PutFindingsPublicationConfigurationRequest,
    SearchResourcesRequest,
    TagResourceRequest,
    TestCustomDataIdentifierRequest,
    UntagResourceRequest,
    UpdateClassificationJobRequest,
    UpdateFindingsFilterRequest,
    UpdateMacieSessionRequest,
    UpdateMemberSessionRequest,
    UpdateOrganizationConfigurationRequest,
    AcceptInvitationResponse,
    BatchGetCustomDataIdentifiersResponse,
    CreateClassificationJobResponse,
    CreateCustomDataIdentifierResponse,
    CreateFindingsFilterResponse,
    CreateInvitationsResponse,
    CreateMemberResponse,
    CreateSampleFindingsResponse,
    DeclineInvitationsResponse,
    DeleteCustomDataIdentifierResponse,
    DeleteFindingsFilterResponse,
    DeleteInvitationsResponse,
    DeleteMemberResponse,
    DescribeBucketsResponse,
    DescribeClassificationJobResponse,
    DescribeOrganizationConfigurationResponse,
    DisableMacieResponse,
    DisableOrganizationAdminAccountResponse,
    DisassociateFromAdministratorAccountResponse,
    DisassociateFromMasterAccountResponse,
    DisassociateMemberResponse,
    EnableMacieResponse,
    EnableOrganizationAdminAccountResponse,
    GetAdministratorAccountResponse,
    GetBucketStatisticsResponse,
    GetClassificationExportConfigurationResponse,
    GetCustomDataIdentifierResponse,
    GetFindingStatisticsResponse,
    GetFindingsResponse,
    GetFindingsFilterResponse,
    GetFindingsPublicationConfigurationResponse,
    GetInvitationsCountResponse,
    GetMacieSessionResponse,
    GetMasterAccountResponse,
    GetMemberResponse,
    GetUsageStatisticsResponse,
    GetUsageTotalsResponse,
    ListClassificationJobsResponse,
    ListCustomDataIdentifiersResponse,
    ListFindingsResponse,
    ListFindingsFiltersResponse,
    ListInvitationsResponse,
    ListManagedDataIdentifiersResponse,
    ListMembersResponse,
    ListOrganizationAdminAccountsResponse,
    ListTagsForResourceResponse,
    PutClassificationExportConfigurationResponse,
    PutFindingsPublicationConfigurationResponse,
    SearchResourcesResponse,
    TagResourceResponse,
    TestCustomDataIdentifierResponse,
    UntagResourceResponse,
    UpdateClassificationJobResponse,
    UpdateFindingsFilterResponse,
    UpdateMacieSessionResponse,
    UpdateMemberSessionResponse,
    UpdateOrganizationConfigurationResponse
} from "aws-sdk/clients/macie2";
const schema = require("../apis/macie2-2020-01-01.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.macie2.OrganizationAdminAccount {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.macie2.OrganizationAdminAccount>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.Macie2()
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

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest]: (AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeBatchGetCustomDataIdentifiers(partialParams: ToOptional<{
      [K in keyof BatchGetCustomDataIdentifiersRequest]: (BatchGetCustomDataIdentifiersRequest)[K]
    }>): Request<BatchGetCustomDataIdentifiersResponse, AWSError> {
        this.boot();
        return this.client.batchGetCustomDataIdentifiers(
          this.ops["BatchGetCustomDataIdentifiers"].apply(partialParams)
        );
    }

    invokeCreateClassificationJob(partialParams: ToOptional<{
      [K in keyof CreateClassificationJobRequest]: (CreateClassificationJobRequest)[K]
    }>): Request<CreateClassificationJobResponse, AWSError> {
        this.boot();
        return this.client.createClassificationJob(
          this.ops["CreateClassificationJob"].apply(partialParams)
        );
    }

    invokeCreateCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof CreateCustomDataIdentifierRequest]: (CreateCustomDataIdentifierRequest)[K]
    }>): Request<CreateCustomDataIdentifierResponse, AWSError> {
        this.boot();
        return this.client.createCustomDataIdentifier(
          this.ops["CreateCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeCreateFindingsFilter(partialParams: ToOptional<{
      [K in keyof CreateFindingsFilterRequest]: (CreateFindingsFilterRequest)[K]
    }>): Request<CreateFindingsFilterResponse, AWSError> {
        this.boot();
        return this.client.createFindingsFilter(
          this.ops["CreateFindingsFilter"].apply(partialParams)
        );
    }

    invokeCreateInvitations(partialParams: ToOptional<{
      [K in keyof CreateInvitationsRequest]: (CreateInvitationsRequest)[K]
    }>): Request<CreateInvitationsResponse, AWSError> {
        this.boot();
        return this.client.createInvitations(
          this.ops["CreateInvitations"].apply(partialParams)
        );
    }

    invokeCreateMember(partialParams: ToOptional<{
      [K in keyof CreateMemberRequest]: (CreateMemberRequest)[K]
    }>): Request<CreateMemberResponse, AWSError> {
        this.boot();
        return this.client.createMember(
          this.ops["CreateMember"].apply(partialParams)
        );
    }

    invokeCreateSampleFindings(partialParams: ToOptional<{
      [K in keyof CreateSampleFindingsRequest]: (CreateSampleFindingsRequest)[K]
    }>): Request<CreateSampleFindingsResponse, AWSError> {
        this.boot();
        return this.client.createSampleFindings(
          this.ops["CreateSampleFindings"].apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest)[K]
    }>): Request<DeclineInvitationsResponse, AWSError> {
        this.boot();
        return this.client.declineInvitations(
          this.ops["DeclineInvitations"].apply(partialParams)
        );
    }

    invokeDeleteCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof DeleteCustomDataIdentifierRequest]: (DeleteCustomDataIdentifierRequest)[K]
    }>): Request<DeleteCustomDataIdentifierResponse, AWSError> {
        this.boot();
        return this.client.deleteCustomDataIdentifier(
          this.ops["DeleteCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeDeleteFindingsFilter(partialParams: ToOptional<{
      [K in keyof DeleteFindingsFilterRequest]: (DeleteFindingsFilterRequest)[K]
    }>): Request<DeleteFindingsFilterResponse, AWSError> {
        this.boot();
        return this.client.deleteFindingsFilter(
          this.ops["DeleteFindingsFilter"].apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest)[K]
    }>): Request<DeleteInvitationsResponse, AWSError> {
        this.boot();
        return this.client.deleteInvitations(
          this.ops["DeleteInvitations"].apply(partialParams)
        );
    }

    invokeDeleteMember(partialParams: ToOptional<{
      [K in keyof DeleteMemberRequest]: (DeleteMemberRequest)[K]
    }>): Request<DeleteMemberResponse, AWSError> {
        this.boot();
        return this.client.deleteMember(
          this.ops["DeleteMember"].apply(partialParams)
        );
    }

    invokeDescribeBuckets(partialParams: ToOptional<{
      [K in keyof DescribeBucketsRequest]: (DescribeBucketsRequest)[K]
    }>): Request<DescribeBucketsResponse, AWSError> {
        this.boot();
        return this.client.describeBuckets(
          this.ops["DescribeBuckets"].apply(partialParams)
        );
    }

    invokeDescribeClassificationJob(partialParams: ToOptional<{
      [K in keyof DescribeClassificationJobRequest]: (DescribeClassificationJobRequest)[K]
    }>): Request<DescribeClassificationJobResponse, AWSError> {
        this.boot();
        return this.client.describeClassificationJob(
          this.ops["DescribeClassificationJob"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest]: (DescribeOrganizationConfigurationRequest)[K]
    }>): Request<DescribeOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeOrganizationConfiguration(
          this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeDisableMacie(partialParams: ToOptional<{
      [K in keyof DisableMacieRequest]: (DisableMacieRequest)[K]
    }>): Request<DisableMacieResponse, AWSError> {
        this.boot();
        return this.client.disableMacie(
          this.ops["DisableMacie"].apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest)[K]
    }>): Request<DisableOrganizationAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.disableOrganizationAdminAccount(
          this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisassociateFromAdministratorAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromAdministratorAccountRequest]: (DisassociateFromAdministratorAccountRequest)[K]
    }>): Request<DisassociateFromAdministratorAccountResponse, AWSError> {
        this.boot();
        return this.client.disassociateFromAdministratorAccount(
          this.ops["DisassociateFromAdministratorAccount"].apply(partialParams)
        );
    }

    invokeDisassociateFromMasterAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromMasterAccountRequest]: (DisassociateFromMasterAccountRequest)[K]
    }>): Request<DisassociateFromMasterAccountResponse, AWSError> {
        this.boot();
        return this.client.disassociateFromMasterAccount(
          this.ops["DisassociateFromMasterAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMember(partialParams: ToOptional<{
      [K in keyof DisassociateMemberRequest]: (DisassociateMemberRequest)[K]
    }>): Request<DisassociateMemberResponse, AWSError> {
        this.boot();
        return this.client.disassociateMember(
          this.ops["DisassociateMember"].apply(partialParams)
        );
    }

    invokeEnableMacie(partialParams: ToOptional<{
      [K in keyof EnableMacieRequest]: (EnableMacieRequest)[K]
    }>): Request<EnableMacieResponse, AWSError> {
        this.boot();
        return this.client.enableMacie(
          this.ops["EnableMacie"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest)[K]
    }>): Request<EnableOrganizationAdminAccountResponse, AWSError> {
        this.boot();
        return this.client.enableOrganizationAdminAccount(
          this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetAdministratorAccount(partialParams: ToOptional<{
      [K in keyof GetAdministratorAccountRequest]: (GetAdministratorAccountRequest)[K]
    }>): Request<GetAdministratorAccountResponse, AWSError> {
        this.boot();
        return this.client.getAdministratorAccount(
          this.ops["GetAdministratorAccount"].apply(partialParams)
        );
    }

    invokeGetBucketStatistics(partialParams: ToOptional<{
      [K in keyof GetBucketStatisticsRequest]: (GetBucketStatisticsRequest)[K]
    }>): Request<GetBucketStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getBucketStatistics(
          this.ops["GetBucketStatistics"].apply(partialParams)
        );
    }

    invokeGetClassificationExportConfiguration(partialParams: ToOptional<{
      [K in keyof GetClassificationExportConfigurationRequest]: (GetClassificationExportConfigurationRequest)[K]
    }>): Request<GetClassificationExportConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getClassificationExportConfiguration(
          this.ops["GetClassificationExportConfiguration"].apply(partialParams)
        );
    }

    invokeGetCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof GetCustomDataIdentifierRequest]: (GetCustomDataIdentifierRequest)[K]
    }>): Request<GetCustomDataIdentifierResponse, AWSError> {
        this.boot();
        return this.client.getCustomDataIdentifier(
          this.ops["GetCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeGetFindingStatistics(partialParams: ToOptional<{
      [K in keyof GetFindingStatisticsRequest]: (GetFindingStatisticsRequest)[K]
    }>): Request<GetFindingStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getFindingStatistics(
          this.ops["GetFindingStatistics"].apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest]: (GetFindingsRequest)[K]
    }>): Request<GetFindingsResponse, AWSError> {
        this.boot();
        return this.client.getFindings(
          this.ops["GetFindings"].apply(partialParams)
        );
    }

    invokeGetFindingsFilter(partialParams: ToOptional<{
      [K in keyof GetFindingsFilterRequest]: (GetFindingsFilterRequest)[K]
    }>): Request<GetFindingsFilterResponse, AWSError> {
        this.boot();
        return this.client.getFindingsFilter(
          this.ops["GetFindingsFilter"].apply(partialParams)
        );
    }

    invokeGetFindingsPublicationConfiguration(partialParams: ToOptional<{
      [K in keyof GetFindingsPublicationConfigurationRequest]: (GetFindingsPublicationConfigurationRequest)[K]
    }>): Request<GetFindingsPublicationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.getFindingsPublicationConfiguration(
          this.ops["GetFindingsPublicationConfiguration"].apply(partialParams)
        );
    }

    invokeGetInvitationsCount(partialParams: ToOptional<{
      [K in keyof GetInvitationsCountRequest]: (GetInvitationsCountRequest)[K]
    }>): Request<GetInvitationsCountResponse, AWSError> {
        this.boot();
        return this.client.getInvitationsCount(
          this.ops["GetInvitationsCount"].apply(partialParams)
        );
    }

    invokeGetMacieSession(partialParams: ToOptional<{
      [K in keyof GetMacieSessionRequest]: (GetMacieSessionRequest)[K]
    }>): Request<GetMacieSessionResponse, AWSError> {
        this.boot();
        return this.client.getMacieSession(
          this.ops["GetMacieSession"].apply(partialParams)
        );
    }

    invokeGetMasterAccount(partialParams: ToOptional<{
      [K in keyof GetMasterAccountRequest]: (GetMasterAccountRequest)[K]
    }>): Request<GetMasterAccountResponse, AWSError> {
        this.boot();
        return this.client.getMasterAccount(
          this.ops["GetMasterAccount"].apply(partialParams)
        );
    }

    invokeGetMember(partialParams: ToOptional<{
      [K in keyof GetMemberRequest]: (GetMemberRequest)[K]
    }>): Request<GetMemberResponse, AWSError> {
        this.boot();
        return this.client.getMember(
          this.ops["GetMember"].apply(partialParams)
        );
    }

    invokeGetUsageStatistics(partialParams: ToOptional<{
      [K in keyof GetUsageStatisticsRequest]: (GetUsageStatisticsRequest)[K]
    }>): Request<GetUsageStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getUsageStatistics(
          this.ops["GetUsageStatistics"].apply(partialParams)
        );
    }

    invokeGetUsageTotals(partialParams: ToOptional<{
      [K in keyof GetUsageTotalsRequest]: (GetUsageTotalsRequest)[K]
    }>): Request<GetUsageTotalsResponse, AWSError> {
        this.boot();
        return this.client.getUsageTotals(
          this.ops["GetUsageTotals"].apply(partialParams)
        );
    }

    invokeListClassificationJobs(partialParams: ToOptional<{
      [K in keyof ListClassificationJobsRequest]: (ListClassificationJobsRequest)[K]
    }>): Request<ListClassificationJobsResponse, AWSError> {
        this.boot();
        return this.client.listClassificationJobs(
          this.ops["ListClassificationJobs"].apply(partialParams)
        );
    }

    invokeListCustomDataIdentifiers(partialParams: ToOptional<{
      [K in keyof ListCustomDataIdentifiersRequest]: (ListCustomDataIdentifiersRequest)[K]
    }>): Request<ListCustomDataIdentifiersResponse, AWSError> {
        this.boot();
        return this.client.listCustomDataIdentifiers(
          this.ops["ListCustomDataIdentifiers"].apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest]: (ListFindingsRequest)[K]
    }>): Request<ListFindingsResponse, AWSError> {
        this.boot();
        return this.client.listFindings(
          this.ops["ListFindings"].apply(partialParams)
        );
    }

    invokeListFindingsFilters(partialParams: ToOptional<{
      [K in keyof ListFindingsFiltersRequest]: (ListFindingsFiltersRequest)[K]
    }>): Request<ListFindingsFiltersResponse, AWSError> {
        this.boot();
        return this.client.listFindingsFilters(
          this.ops["ListFindingsFilters"].apply(partialParams)
        );
    }

    invokeListInvitations(partialParams: ToOptional<{
      [K in keyof ListInvitationsRequest]: (ListInvitationsRequest)[K]
    }>): Request<ListInvitationsResponse, AWSError> {
        this.boot();
        return this.client.listInvitations(
          this.ops["ListInvitations"].apply(partialParams)
        );
    }

    invokeListManagedDataIdentifiers(partialParams: ToOptional<{
      [K in keyof ListManagedDataIdentifiersRequest]: (ListManagedDataIdentifiersRequest)[K]
    }>): Request<ListManagedDataIdentifiersResponse, AWSError> {
        this.boot();
        return this.client.listManagedDataIdentifiers(
          this.ops["ListManagedDataIdentifiers"].apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest]: (ListMembersRequest)[K]
    }>): Request<ListMembersResponse, AWSError> {
        this.boot();
        return this.client.listMembers(
          this.ops["ListMembers"].apply(partialParams)
        );
    }

    invokeListOrganizationAdminAccounts(partialParams: ToOptional<{
      [K in keyof ListOrganizationAdminAccountsRequest]: (ListOrganizationAdminAccountsRequest)[K]
    }>): Request<ListOrganizationAdminAccountsResponse, AWSError> {
        this.boot();
        return this.client.listOrganizationAdminAccounts(
          this.ops["ListOrganizationAdminAccounts"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest)[K]
    }>): Request<ListTagsForResourceResponse, AWSError> {
        this.boot();
        return this.client.listTagsForResource(
          this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokePutClassificationExportConfiguration(partialParams: ToOptional<{
      [K in keyof PutClassificationExportConfigurationRequest]: (PutClassificationExportConfigurationRequest)[K]
    }>): Request<PutClassificationExportConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putClassificationExportConfiguration(
          this.ops["PutClassificationExportConfiguration"].apply(partialParams)
        );
    }

    invokePutFindingsPublicationConfiguration(partialParams: ToOptional<{
      [K in keyof PutFindingsPublicationConfigurationRequest]: (PutFindingsPublicationConfigurationRequest)[K]
    }>): Request<PutFindingsPublicationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.putFindingsPublicationConfiguration(
          this.ops["PutFindingsPublicationConfiguration"].apply(partialParams)
        );
    }

    invokeSearchResources(partialParams: ToOptional<{
      [K in keyof SearchResourcesRequest]: (SearchResourcesRequest)[K]
    }>): Request<SearchResourcesResponse, AWSError> {
        this.boot();
        return this.client.searchResources(
          this.ops["SearchResources"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest]: (TagResourceRequest)[K]
    }>): Request<TagResourceResponse, AWSError> {
        this.boot();
        return this.client.tagResource(
          this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeTestCustomDataIdentifier(partialParams: ToOptional<{
      [K in keyof TestCustomDataIdentifierRequest]: (TestCustomDataIdentifierRequest)[K]
    }>): Request<TestCustomDataIdentifierResponse, AWSError> {
        this.boot();
        return this.client.testCustomDataIdentifier(
          this.ops["TestCustomDataIdentifier"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest]: (UntagResourceRequest)[K]
    }>): Request<UntagResourceResponse, AWSError> {
        this.boot();
        return this.client.untagResource(
          this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateClassificationJob(partialParams: ToOptional<{
      [K in keyof UpdateClassificationJobRequest]: (UpdateClassificationJobRequest)[K]
    }>): Request<UpdateClassificationJobResponse, AWSError> {
        this.boot();
        return this.client.updateClassificationJob(
          this.ops["UpdateClassificationJob"].apply(partialParams)
        );
    }

    invokeUpdateFindingsFilter(partialParams: ToOptional<{
      [K in keyof UpdateFindingsFilterRequest]: (UpdateFindingsFilterRequest)[K]
    }>): Request<UpdateFindingsFilterResponse, AWSError> {
        this.boot();
        return this.client.updateFindingsFilter(
          this.ops["UpdateFindingsFilter"].apply(partialParams)
        );
    }

    invokeUpdateMacieSession(partialParams: ToOptional<{
      [K in keyof UpdateMacieSessionRequest]: (UpdateMacieSessionRequest)[K]
    }>): Request<UpdateMacieSessionResponse, AWSError> {
        this.boot();
        return this.client.updateMacieSession(
          this.ops["UpdateMacieSession"].apply(partialParams)
        );
    }

    invokeUpdateMemberSession(partialParams: ToOptional<{
      [K in keyof UpdateMemberSessionRequest]: (UpdateMemberSessionRequest)[K]
    }>): Request<UpdateMemberSessionResponse, AWSError> {
        this.boot();
        return this.client.updateMemberSession(
          this.ops["UpdateMemberSession"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest)[K]
    }>): Request<UpdateOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateOrganizationConfiguration(
          this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }
}