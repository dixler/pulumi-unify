
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
import {Request} from 'aws-sdk/lib/request';
import {AWSError} from 'aws-sdk/lib/error';

import {
    AcceptInvitationRequest,
    ArchiveFindingsRequest,
    CreateDetectorRequest,
    CreateFilterRequest,
    CreateIPSetRequest,
    CreateMembersRequest,
    CreatePublishingDestinationRequest,
    CreateSampleFindingsRequest,
    CreateThreatIntelSetRequest,
    DeclineInvitationsRequest,
    DeleteDetectorRequest,
    DeleteFilterRequest,
    DeleteIPSetRequest,
    DeleteInvitationsRequest,
    DeleteMembersRequest,
    DeletePublishingDestinationRequest,
    DeleteThreatIntelSetRequest,
    DescribeOrganizationConfigurationRequest,
    DescribePublishingDestinationRequest,
    DisableOrganizationAdminAccountRequest,
    DisassociateFromMasterAccountRequest,
    DisassociateMembersRequest,
    EnableOrganizationAdminAccountRequest,
    GetDetectorRequest,
    GetFilterRequest,
    GetFindingsRequest,
    GetFindingsStatisticsRequest,
    GetIPSetRequest,
    GetInvitationsCountRequest,
    GetMasterAccountRequest,
    GetMemberDetectorsRequest,
    GetMembersRequest,
    GetThreatIntelSetRequest,
    GetUsageStatisticsRequest,
    InviteMembersRequest,
    ListDetectorsRequest,
    ListFiltersRequest,
    ListFindingsRequest,
    ListIPSetsRequest,
    ListInvitationsRequest,
    ListMembersRequest,
    ListOrganizationAdminAccountsRequest,
    ListPublishingDestinationsRequest,
    ListTagsForResourceRequest,
    ListThreatIntelSetsRequest,
    StartMonitoringMembersRequest,
    StopMonitoringMembersRequest,
    TagResourceRequest,
    UnarchiveFindingsRequest,
    UntagResourceRequest,
    UpdateDetectorRequest,
    UpdateFilterRequest,
    UpdateFindingsFeedbackRequest,
    UpdateIPSetRequest,
    UpdateMemberDetectorsRequest,
    UpdateOrganizationConfigurationRequest,
    UpdatePublishingDestinationRequest,
    UpdateThreatIntelSetRequest,
    AcceptInvitationResponse,
    ArchiveFindingsResponse,
    CreateDetectorResponse,
    CreateFilterResponse,
    CreateIPSetResponse,
    CreateMembersResponse,
    CreatePublishingDestinationResponse,
    CreateSampleFindingsResponse,
    CreateThreatIntelSetResponse,
    DeclineInvitationsResponse,
    DeleteDetectorResponse,
    DeleteFilterResponse,
    DeleteIPSetResponse,
    DeleteInvitationsResponse,
    DeleteMembersResponse,
    DeletePublishingDestinationResponse,
    DeleteThreatIntelSetResponse,
    DescribeOrganizationConfigurationResponse,
    DescribePublishingDestinationResponse,
    DisableOrganizationAdminAccountResponse,
    DisassociateFromMasterAccountResponse,
    DisassociateMembersResponse,
    EnableOrganizationAdminAccountResponse,
    GetDetectorResponse,
    GetFilterResponse,
    GetFindingsResponse,
    GetFindingsStatisticsResponse,
    GetIPSetResponse,
    GetInvitationsCountResponse,
    GetMasterAccountResponse,
    GetMemberDetectorsResponse,
    GetMembersResponse,
    GetThreatIntelSetResponse,
    GetUsageStatisticsResponse,
    InviteMembersResponse,
    ListDetectorsResponse,
    ListFiltersResponse,
    ListFindingsResponse,
    ListIPSetsResponse,
    ListInvitationsResponse,
    ListMembersResponse,
    ListOrganizationAdminAccountsResponse,
    ListPublishingDestinationsResponse,
    ListTagsForResourceResponse,
    ListThreatIntelSetsResponse,
    StartMonitoringMembersResponse,
    StopMonitoringMembersResponse,
    TagResourceResponse,
    UnarchiveFindingsResponse,
    UntagResourceResponse,
    UpdateDetectorResponse,
    UpdateFilterResponse,
    UpdateFindingsFeedbackResponse,
    UpdateIPSetResponse,
    UpdateMemberDetectorsResponse,
    UpdateOrganizationConfigurationResponse,
    UpdatePublishingDestinationResponse,
    UpdateThreatIntelSetResponse
} from "aws-sdk/clients/guardduty";
const schema = require("../apis/guardduty-2017-11-28.normal.json")
import {getResourceOperations, upperCamelCase} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.guardduty.PublishingDestination {
    public ops: any // TODO make private
    private client: any
    capitalizedParams: {[key: string]: any}
    booted: boolean
    constructor(...args: ConstructorParameters<typeof aws.guardduty.PublishingDestination>) {
        super(...args)
        this.booted = false;
        this.client = new awssdk.GuardDuty()
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
      [K in keyof AcceptInvitationRequest & keyof Omit<AcceptInvitationRequest, "DetectorId">]: (AcceptInvitationRequest)[K]
    }>): Request<AcceptInvitationResponse, AWSError> {
        this.boot();
        return this.client.acceptInvitation(
          this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeArchiveFindings(partialParams: ToOptional<{
      [K in keyof ArchiveFindingsRequest & keyof Omit<ArchiveFindingsRequest, "DetectorId">]: (ArchiveFindingsRequest)[K]
    }>): Request<ArchiveFindingsResponse, AWSError> {
        this.boot();
        return this.client.archiveFindings(
          this.ops["ArchiveFindings"].apply(partialParams)
        );
    }

    invokeCreateDetector(partialParams: ToOptional<{
      [K in keyof CreateDetectorRequest]: (CreateDetectorRequest)[K]
    }>): Request<CreateDetectorResponse, AWSError> {
        this.boot();
        return this.client.createDetector(
          this.ops["CreateDetector"].apply(partialParams)
        );
    }

    invokeCreateFilter(partialParams: ToOptional<{
      [K in keyof CreateFilterRequest & keyof Omit<CreateFilterRequest, "DetectorId">]: (CreateFilterRequest)[K]
    }>): Request<CreateFilterResponse, AWSError> {
        this.boot();
        return this.client.createFilter(
          this.ops["CreateFilter"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof Omit<CreateIPSetRequest, "DetectorId">]: (CreateIPSetRequest)[K]
    }>): Request<CreateIPSetResponse, AWSError> {
        this.boot();
        return this.client.createIPSet(
          this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof Omit<CreateMembersRequest, "DetectorId">]: (CreateMembersRequest)[K]
    }>): Request<CreateMembersResponse, AWSError> {
        this.boot();
        return this.client.createMembers(
          this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeCreatePublishingDestination(partialParams: ToOptional<{
      [K in keyof CreatePublishingDestinationRequest & keyof Omit<CreatePublishingDestinationRequest, "DetectorId" | "DestinationType">]: (CreatePublishingDestinationRequest)[K]
    }>): Request<CreatePublishingDestinationResponse, AWSError> {
        this.boot();
        return this.client.createPublishingDestination(
          this.ops["CreatePublishingDestination"].apply(partialParams)
        );
    }

    invokeCreateSampleFindings(partialParams: ToOptional<{
      [K in keyof CreateSampleFindingsRequest & keyof Omit<CreateSampleFindingsRequest, "DetectorId">]: (CreateSampleFindingsRequest)[K]
    }>): Request<CreateSampleFindingsResponse, AWSError> {
        this.boot();
        return this.client.createSampleFindings(
          this.ops["CreateSampleFindings"].apply(partialParams)
        );
    }

    invokeCreateThreatIntelSet(partialParams: ToOptional<{
      [K in keyof CreateThreatIntelSetRequest & keyof Omit<CreateThreatIntelSetRequest, "DetectorId">]: (CreateThreatIntelSetRequest)[K]
    }>): Request<CreateThreatIntelSetResponse, AWSError> {
        this.boot();
        return this.client.createThreatIntelSet(
          this.ops["CreateThreatIntelSet"].apply(partialParams)
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

    invokeDeleteDetector(partialParams: ToOptional<{
      [K in keyof DeleteDetectorRequest & keyof Omit<DeleteDetectorRequest, "DetectorId">]: (DeleteDetectorRequest)[K]
    }>): Request<DeleteDetectorResponse, AWSError> {
        this.boot();
        return this.client.deleteDetector(
          this.ops["DeleteDetector"].apply(partialParams)
        );
    }

    invokeDeleteFilter(partialParams: ToOptional<{
      [K in keyof DeleteFilterRequest & keyof Omit<DeleteFilterRequest, "DetectorId">]: (DeleteFilterRequest)[K]
    }>): Request<DeleteFilterResponse, AWSError> {
        this.boot();
        return this.client.deleteFilter(
          this.ops["DeleteFilter"].apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof Omit<DeleteIPSetRequest, "DetectorId">]: (DeleteIPSetRequest)[K]
    }>): Request<DeleteIPSetResponse, AWSError> {
        this.boot();
        return this.client.deleteIPSet(
          this.ops["DeleteIPSet"].apply(partialParams)
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

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof Omit<DeleteMembersRequest, "DetectorId">]: (DeleteMembersRequest)[K]
    }>): Request<DeleteMembersResponse, AWSError> {
        this.boot();
        return this.client.deleteMembers(
          this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDeletePublishingDestination(partialParams: ToOptional<{
      [K in keyof DeletePublishingDestinationRequest & keyof Omit<DeletePublishingDestinationRequest, "DetectorId">]: (DeletePublishingDestinationRequest)[K]
    }>): Request<DeletePublishingDestinationResponse, AWSError> {
        this.boot();
        return this.client.deletePublishingDestination(
          this.ops["DeletePublishingDestination"].apply(partialParams)
        );
    }

    invokeDeleteThreatIntelSet(partialParams: ToOptional<{
      [K in keyof DeleteThreatIntelSetRequest & keyof Omit<DeleteThreatIntelSetRequest, "DetectorId">]: (DeleteThreatIntelSetRequest)[K]
    }>): Request<DeleteThreatIntelSetResponse, AWSError> {
        this.boot();
        return this.client.deleteThreatIntelSet(
          this.ops["DeleteThreatIntelSet"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest & keyof Omit<DescribeOrganizationConfigurationRequest, "DetectorId">]: (DescribeOrganizationConfigurationRequest)[K]
    }>): Request<DescribeOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.describeOrganizationConfiguration(
          this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeDescribePublishingDestination(partialParams: ToOptional<{
      [K in keyof DescribePublishingDestinationRequest & keyof Omit<DescribePublishingDestinationRequest, "DetectorId">]: (DescribePublishingDestinationRequest)[K]
    }>): Request<DescribePublishingDestinationResponse, AWSError> {
        this.boot();
        return this.client.describePublishingDestination(
          this.ops["DescribePublishingDestination"].apply(partialParams)
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

    invokeDisassociateFromMasterAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromMasterAccountRequest & keyof Omit<DisassociateFromMasterAccountRequest, "DetectorId">]: (DisassociateFromMasterAccountRequest)[K]
    }>): Request<DisassociateFromMasterAccountResponse, AWSError> {
        this.boot();
        return this.client.disassociateFromMasterAccount(
          this.ops["DisassociateFromMasterAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest & keyof Omit<DisassociateMembersRequest, "DetectorId">]: (DisassociateMembersRequest)[K]
    }>): Request<DisassociateMembersResponse, AWSError> {
        this.boot();
        return this.client.disassociateMembers(
          this.ops["DisassociateMembers"].apply(partialParams)
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

    invokeGetDetector(partialParams: ToOptional<{
      [K in keyof GetDetectorRequest & keyof Omit<GetDetectorRequest, "DetectorId">]: (GetDetectorRequest)[K]
    }>): Request<GetDetectorResponse, AWSError> {
        this.boot();
        return this.client.getDetector(
          this.ops["GetDetector"].apply(partialParams)
        );
    }

    invokeGetFilter(partialParams: ToOptional<{
      [K in keyof GetFilterRequest & keyof Omit<GetFilterRequest, "DetectorId">]: (GetFilterRequest)[K]
    }>): Request<GetFilterResponse, AWSError> {
        this.boot();
        return this.client.getFilter(
          this.ops["GetFilter"].apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest & keyof Omit<GetFindingsRequest, "DetectorId">]: (GetFindingsRequest)[K]
    }>): Request<GetFindingsResponse, AWSError> {
        this.boot();
        return this.client.getFindings(
          this.ops["GetFindings"].apply(partialParams)
        );
    }

    invokeGetFindingsStatistics(partialParams: ToOptional<{
      [K in keyof GetFindingsStatisticsRequest & keyof Omit<GetFindingsStatisticsRequest, "DetectorId">]: (GetFindingsStatisticsRequest)[K]
    }>): Request<GetFindingsStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getFindingsStatistics(
          this.ops["GetFindingsStatistics"].apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof Omit<GetIPSetRequest, "DetectorId">]: (GetIPSetRequest)[K]
    }>): Request<GetIPSetResponse, AWSError> {
        this.boot();
        return this.client.getIPSet(
          this.ops["GetIPSet"].apply(partialParams)
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

    invokeGetMasterAccount(partialParams: ToOptional<{
      [K in keyof GetMasterAccountRequest & keyof Omit<GetMasterAccountRequest, "DetectorId">]: (GetMasterAccountRequest)[K]
    }>): Request<GetMasterAccountResponse, AWSError> {
        this.boot();
        return this.client.getMasterAccount(
          this.ops["GetMasterAccount"].apply(partialParams)
        );
    }

    invokeGetMemberDetectors(partialParams: ToOptional<{
      [K in keyof GetMemberDetectorsRequest & keyof Omit<GetMemberDetectorsRequest, "DetectorId">]: (GetMemberDetectorsRequest)[K]
    }>): Request<GetMemberDetectorsResponse, AWSError> {
        this.boot();
        return this.client.getMemberDetectors(
          this.ops["GetMemberDetectors"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof Omit<GetMembersRequest, "DetectorId">]: (GetMembersRequest)[K]
    }>): Request<GetMembersResponse, AWSError> {
        this.boot();
        return this.client.getMembers(
          this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeGetThreatIntelSet(partialParams: ToOptional<{
      [K in keyof GetThreatIntelSetRequest & keyof Omit<GetThreatIntelSetRequest, "DetectorId">]: (GetThreatIntelSetRequest)[K]
    }>): Request<GetThreatIntelSetResponse, AWSError> {
        this.boot();
        return this.client.getThreatIntelSet(
          this.ops["GetThreatIntelSet"].apply(partialParams)
        );
    }

    invokeGetUsageStatistics(partialParams: ToOptional<{
      [K in keyof GetUsageStatisticsRequest & keyof Omit<GetUsageStatisticsRequest, "DetectorId">]: (GetUsageStatisticsRequest)[K]
    }>): Request<GetUsageStatisticsResponse, AWSError> {
        this.boot();
        return this.client.getUsageStatistics(
          this.ops["GetUsageStatistics"].apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest & keyof Omit<InviteMembersRequest, "DetectorId">]: (InviteMembersRequest)[K]
    }>): Request<InviteMembersResponse, AWSError> {
        this.boot();
        return this.client.inviteMembers(
          this.ops["InviteMembers"].apply(partialParams)
        );
    }

    invokeListDetectors(partialParams: ToOptional<{
      [K in keyof ListDetectorsRequest]: (ListDetectorsRequest)[K]
    }>): Request<ListDetectorsResponse, AWSError> {
        this.boot();
        return this.client.listDetectors(
          this.ops["ListDetectors"].apply(partialParams)
        );
    }

    invokeListFilters(partialParams: ToOptional<{
      [K in keyof ListFiltersRequest & keyof Omit<ListFiltersRequest, "DetectorId">]: (ListFiltersRequest)[K]
    }>): Request<ListFiltersResponse, AWSError> {
        this.boot();
        return this.client.listFilters(
          this.ops["ListFilters"].apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest & keyof Omit<ListFindingsRequest, "DetectorId">]: (ListFindingsRequest)[K]
    }>): Request<ListFindingsResponse, AWSError> {
        this.boot();
        return this.client.listFindings(
          this.ops["ListFindings"].apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest & keyof Omit<ListIPSetsRequest, "DetectorId">]: (ListIPSetsRequest)[K]
    }>): Request<ListIPSetsResponse, AWSError> {
        this.boot();
        return this.client.listIPSets(
          this.ops["ListIPSets"].apply(partialParams)
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

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest & keyof Omit<ListMembersRequest, "DetectorId">]: (ListMembersRequest)[K]
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

    invokeListPublishingDestinations(partialParams: ToOptional<{
      [K in keyof ListPublishingDestinationsRequest & keyof Omit<ListPublishingDestinationsRequest, "DetectorId">]: (ListPublishingDestinationsRequest)[K]
    }>): Request<ListPublishingDestinationsResponse, AWSError> {
        this.boot();
        return this.client.listPublishingDestinations(
          this.ops["ListPublishingDestinations"].apply(partialParams)
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

    invokeListThreatIntelSets(partialParams: ToOptional<{
      [K in keyof ListThreatIntelSetsRequest & keyof Omit<ListThreatIntelSetsRequest, "DetectorId">]: (ListThreatIntelSetsRequest)[K]
    }>): Request<ListThreatIntelSetsResponse, AWSError> {
        this.boot();
        return this.client.listThreatIntelSets(
          this.ops["ListThreatIntelSets"].apply(partialParams)
        );
    }

    invokeStartMonitoringMembers(partialParams: ToOptional<{
      [K in keyof StartMonitoringMembersRequest & keyof Omit<StartMonitoringMembersRequest, "DetectorId">]: (StartMonitoringMembersRequest)[K]
    }>): Request<StartMonitoringMembersResponse, AWSError> {
        this.boot();
        return this.client.startMonitoringMembers(
          this.ops["StartMonitoringMembers"].apply(partialParams)
        );
    }

    invokeStopMonitoringMembers(partialParams: ToOptional<{
      [K in keyof StopMonitoringMembersRequest & keyof Omit<StopMonitoringMembersRequest, "DetectorId">]: (StopMonitoringMembersRequest)[K]
    }>): Request<StopMonitoringMembersResponse, AWSError> {
        this.boot();
        return this.client.stopMonitoringMembers(
          this.ops["StopMonitoringMembers"].apply(partialParams)
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

    invokeUnarchiveFindings(partialParams: ToOptional<{
      [K in keyof UnarchiveFindingsRequest & keyof Omit<UnarchiveFindingsRequest, "DetectorId">]: (UnarchiveFindingsRequest)[K]
    }>): Request<UnarchiveFindingsResponse, AWSError> {
        this.boot();
        return this.client.unarchiveFindings(
          this.ops["UnarchiveFindings"].apply(partialParams)
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

    invokeUpdateDetector(partialParams: ToOptional<{
      [K in keyof UpdateDetectorRequest & keyof Omit<UpdateDetectorRequest, "DetectorId">]: (UpdateDetectorRequest)[K]
    }>): Request<UpdateDetectorResponse, AWSError> {
        this.boot();
        return this.client.updateDetector(
          this.ops["UpdateDetector"].apply(partialParams)
        );
    }

    invokeUpdateFilter(partialParams: ToOptional<{
      [K in keyof UpdateFilterRequest & keyof Omit<UpdateFilterRequest, "DetectorId">]: (UpdateFilterRequest)[K]
    }>): Request<UpdateFilterResponse, AWSError> {
        this.boot();
        return this.client.updateFilter(
          this.ops["UpdateFilter"].apply(partialParams)
        );
    }

    invokeUpdateFindingsFeedback(partialParams: ToOptional<{
      [K in keyof UpdateFindingsFeedbackRequest & keyof Omit<UpdateFindingsFeedbackRequest, "DetectorId">]: (UpdateFindingsFeedbackRequest)[K]
    }>): Request<UpdateFindingsFeedbackResponse, AWSError> {
        this.boot();
        return this.client.updateFindingsFeedback(
          this.ops["UpdateFindingsFeedback"].apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof Omit<UpdateIPSetRequest, "DetectorId">]: (UpdateIPSetRequest)[K]
    }>): Request<UpdateIPSetResponse, AWSError> {
        this.boot();
        return this.client.updateIPSet(
          this.ops["UpdateIPSet"].apply(partialParams)
        );
    }

    invokeUpdateMemberDetectors(partialParams: ToOptional<{
      [K in keyof UpdateMemberDetectorsRequest & keyof Omit<UpdateMemberDetectorsRequest, "DetectorId">]: (UpdateMemberDetectorsRequest)[K]
    }>): Request<UpdateMemberDetectorsResponse, AWSError> {
        this.boot();
        return this.client.updateMemberDetectors(
          this.ops["UpdateMemberDetectors"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof Omit<UpdateOrganizationConfigurationRequest, "DetectorId">]: (UpdateOrganizationConfigurationRequest)[K]
    }>): Request<UpdateOrganizationConfigurationResponse, AWSError> {
        this.boot();
        return this.client.updateOrganizationConfiguration(
          this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeUpdatePublishingDestination(partialParams: ToOptional<{
      [K in keyof UpdatePublishingDestinationRequest & keyof Omit<UpdatePublishingDestinationRequest, "DetectorId">]: (UpdatePublishingDestinationRequest)[K]
    }>): Request<UpdatePublishingDestinationResponse, AWSError> {
        this.boot();
        return this.client.updatePublishingDestination(
          this.ops["UpdatePublishingDestination"].apply(partialParams)
        );
    }

    invokeUpdateThreatIntelSet(partialParams: ToOptional<{
      [K in keyof UpdateThreatIntelSetRequest & keyof Omit<UpdateThreatIntelSetRequest, "DetectorId">]: (UpdateThreatIntelSetRequest)[K]
    }>): Request<UpdateThreatIntelSetResponse, AWSError> {
        this.boot();
        return this.client.updateThreatIntelSet(
          this.ops["UpdateThreatIntelSet"].apply(partialParams)
        );
    }
}