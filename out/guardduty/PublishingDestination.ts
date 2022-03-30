
import * as aws from "@pulumi/aws";
import * as awssdk from "aws-sdk";
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
    GetMasterAccountRequest,
    GetMemberDetectorsRequest,
    GetMembersRequest,
    GetThreatIntelSetRequest,
    GetUsageStatisticsRequest,
    InviteMembersRequest,
    ListFiltersRequest,
    ListFindingsRequest,
    ListIPSetsRequest,
    ListMembersRequest,
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
    GetMasterAccountResponse,
    GetMemberDetectorsResponse,
    GetMembersResponse,
    GetThreatIntelSetResponse,
    GetUsageStatisticsResponse,
    InviteMembersResponse,
    ListFiltersResponse,
    ListFindingsResponse,
    ListIPSetsResponse,
    ListMembersResponse,
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

import {getResourceOperations} from "../parse";

type UndefinedProperties<T> = {
    [P in keyof T]-?: undefined extends T[P] ? P : never
}[keyof T]

type ToOptional<T> = Partial<Pick<T, UndefinedProperties<T>>> & Pick<T, Exclude<keyof T, UndefinedProperties<T>>>

export default class extends aws.guardduty.PublishingDestination {
    private ops: any
    private client: any
    constructor(...args: ConstructorParameters<typeof aws.guardduty.PublishingDestination>) {
        super(...args)
        this.client = new awssdk.GuardDuty()
        this.ops = getResourceOperations(this as any, require("../../aws-sdk-js/apis/guardduty-2017-11-28.normal.json"), this.client)
    }

    invokeAcceptInvitation(partialParams: ToOptional<{
      [K in keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest & keyof AcceptInvitationRequest]: (AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest & AcceptInvitationRequest)[K]
    }>): AcceptInvitationResponse {
        return this.client.acceptInvitation(
            this.ops["AcceptInvitation"].apply(partialParams)
        );
    }

    invokeArchiveFindings(partialParams: ToOptional<{
      [K in keyof ArchiveFindingsRequest & keyof ArchiveFindingsRequest & keyof ArchiveFindingsRequest & keyof ArchiveFindingsRequest]: (ArchiveFindingsRequest & ArchiveFindingsRequest & ArchiveFindingsRequest & ArchiveFindingsRequest)[K]
    }>): ArchiveFindingsResponse {
        return this.client.archiveFindings(
            this.ops["ArchiveFindings"].apply(partialParams)
        );
    }

    invokeCreateDetector(partialParams: ToOptional<{
      [K in keyof CreateDetectorRequest & keyof CreateDetectorRequest & keyof CreateDetectorRequest & keyof CreateDetectorRequest]: (CreateDetectorRequest & CreateDetectorRequest & CreateDetectorRequest & CreateDetectorRequest)[K]
    }>): CreateDetectorResponse {
        return this.client.createDetector(
            this.ops["CreateDetector"].apply(partialParams)
        );
    }

    invokeCreateFilter(partialParams: ToOptional<{
      [K in keyof CreateFilterRequest & keyof CreateFilterRequest & keyof CreateFilterRequest & keyof CreateFilterRequest]: (CreateFilterRequest & CreateFilterRequest & CreateFilterRequest & CreateFilterRequest)[K]
    }>): CreateFilterResponse {
        return this.client.createFilter(
            this.ops["CreateFilter"].apply(partialParams)
        );
    }

    invokeCreateIPSet(partialParams: ToOptional<{
      [K in keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest & keyof CreateIPSetRequest]: (CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest & CreateIPSetRequest)[K]
    }>): CreateIPSetResponse {
        return this.client.createIPSet(
            this.ops["CreateIPSet"].apply(partialParams)
        );
    }

    invokeCreateMembers(partialParams: ToOptional<{
      [K in keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest & keyof CreateMembersRequest]: (CreateMembersRequest & CreateMembersRequest & CreateMembersRequest & CreateMembersRequest)[K]
    }>): CreateMembersResponse {
        return this.client.createMembers(
            this.ops["CreateMembers"].apply(partialParams)
        );
    }

    invokeCreatePublishingDestination(partialParams: ToOptional<{
      [K in keyof CreatePublishingDestinationRequest & keyof CreatePublishingDestinationRequest & keyof CreatePublishingDestinationRequest & keyof CreatePublishingDestinationRequest]: (CreatePublishingDestinationRequest & CreatePublishingDestinationRequest & CreatePublishingDestinationRequest & CreatePublishingDestinationRequest)[K]
    }>): CreatePublishingDestinationResponse {
        return this.client.createPublishingDestination(
            this.ops["CreatePublishingDestination"].apply(partialParams)
        );
    }

    invokeCreateSampleFindings(partialParams: ToOptional<{
      [K in keyof CreateSampleFindingsRequest & keyof CreateSampleFindingsRequest & keyof CreateSampleFindingsRequest & keyof CreateSampleFindingsRequest]: (CreateSampleFindingsRequest & CreateSampleFindingsRequest & CreateSampleFindingsRequest & CreateSampleFindingsRequest)[K]
    }>): CreateSampleFindingsResponse {
        return this.client.createSampleFindings(
            this.ops["CreateSampleFindings"].apply(partialParams)
        );
    }

    invokeCreateThreatIntelSet(partialParams: ToOptional<{
      [K in keyof CreateThreatIntelSetRequest & keyof CreateThreatIntelSetRequest & keyof CreateThreatIntelSetRequest & keyof CreateThreatIntelSetRequest]: (CreateThreatIntelSetRequest & CreateThreatIntelSetRequest & CreateThreatIntelSetRequest & CreateThreatIntelSetRequest)[K]
    }>): CreateThreatIntelSetResponse {
        return this.client.createThreatIntelSet(
            this.ops["CreateThreatIntelSet"].apply(partialParams)
        );
    }

    invokeDeclineInvitations(partialParams: ToOptional<{
      [K in keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest & keyof DeclineInvitationsRequest]: (DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest & DeclineInvitationsRequest)[K]
    }>): DeclineInvitationsResponse {
        return this.client.declineInvitations(
            this.ops["DeclineInvitations"].apply(partialParams)
        );
    }

    invokeDeleteDetector(partialParams: ToOptional<{
      [K in keyof DeleteDetectorRequest & keyof DeleteDetectorRequest & keyof DeleteDetectorRequest & keyof DeleteDetectorRequest]: (DeleteDetectorRequest & DeleteDetectorRequest & DeleteDetectorRequest & DeleteDetectorRequest)[K]
    }>): DeleteDetectorResponse {
        return this.client.deleteDetector(
            this.ops["DeleteDetector"].apply(partialParams)
        );
    }

    invokeDeleteFilter(partialParams: ToOptional<{
      [K in keyof DeleteFilterRequest & keyof DeleteFilterRequest & keyof DeleteFilterRequest & keyof DeleteFilterRequest]: (DeleteFilterRequest & DeleteFilterRequest & DeleteFilterRequest & DeleteFilterRequest)[K]
    }>): DeleteFilterResponse {
        return this.client.deleteFilter(
            this.ops["DeleteFilter"].apply(partialParams)
        );
    }

    invokeDeleteIPSet(partialParams: ToOptional<{
      [K in keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest & keyof DeleteIPSetRequest]: (DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest & DeleteIPSetRequest)[K]
    }>): DeleteIPSetResponse {
        return this.client.deleteIPSet(
            this.ops["DeleteIPSet"].apply(partialParams)
        );
    }

    invokeDeleteInvitations(partialParams: ToOptional<{
      [K in keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest & keyof DeleteInvitationsRequest]: (DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest & DeleteInvitationsRequest)[K]
    }>): DeleteInvitationsResponse {
        return this.client.deleteInvitations(
            this.ops["DeleteInvitations"].apply(partialParams)
        );
    }

    invokeDeleteMembers(partialParams: ToOptional<{
      [K in keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest & keyof DeleteMembersRequest]: (DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest & DeleteMembersRequest)[K]
    }>): DeleteMembersResponse {
        return this.client.deleteMembers(
            this.ops["DeleteMembers"].apply(partialParams)
        );
    }

    invokeDeletePublishingDestination(partialParams: ToOptional<{
      [K in keyof DeletePublishingDestinationRequest & keyof DeletePublishingDestinationRequest & keyof DeletePublishingDestinationRequest & keyof DeletePublishingDestinationRequest]: (DeletePublishingDestinationRequest & DeletePublishingDestinationRequest & DeletePublishingDestinationRequest & DeletePublishingDestinationRequest)[K]
    }>): DeletePublishingDestinationResponse {
        return this.client.deletePublishingDestination(
            this.ops["DeletePublishingDestination"].apply(partialParams)
        );
    }

    invokeDeleteThreatIntelSet(partialParams: ToOptional<{
      [K in keyof DeleteThreatIntelSetRequest & keyof DeleteThreatIntelSetRequest & keyof DeleteThreatIntelSetRequest & keyof DeleteThreatIntelSetRequest]: (DeleteThreatIntelSetRequest & DeleteThreatIntelSetRequest & DeleteThreatIntelSetRequest & DeleteThreatIntelSetRequest)[K]
    }>): DeleteThreatIntelSetResponse {
        return this.client.deleteThreatIntelSet(
            this.ops["DeleteThreatIntelSet"].apply(partialParams)
        );
    }

    invokeDescribeOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest & keyof DescribeOrganizationConfigurationRequest]: (DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest & DescribeOrganizationConfigurationRequest)[K]
    }>): DescribeOrganizationConfigurationResponse {
        return this.client.describeOrganizationConfiguration(
            this.ops["DescribeOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeDescribePublishingDestination(partialParams: ToOptional<{
      [K in keyof DescribePublishingDestinationRequest & keyof DescribePublishingDestinationRequest & keyof DescribePublishingDestinationRequest & keyof DescribePublishingDestinationRequest]: (DescribePublishingDestinationRequest & DescribePublishingDestinationRequest & DescribePublishingDestinationRequest & DescribePublishingDestinationRequest)[K]
    }>): DescribePublishingDestinationResponse {
        return this.client.describePublishingDestination(
            this.ops["DescribePublishingDestination"].apply(partialParams)
        );
    }

    invokeDisableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest & keyof DisableOrganizationAdminAccountRequest]: (DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest & DisableOrganizationAdminAccountRequest)[K]
    }>): DisableOrganizationAdminAccountResponse {
        return this.client.disableOrganizationAdminAccount(
            this.ops["DisableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeDisassociateFromMasterAccount(partialParams: ToOptional<{
      [K in keyof DisassociateFromMasterAccountRequest & keyof DisassociateFromMasterAccountRequest & keyof Omit<DisassociateFromMasterAccountRequest, "DetectorId"> & keyof DisassociateFromMasterAccountRequest]: (DisassociateFromMasterAccountRequest & DisassociateFromMasterAccountRequest & Omit<DisassociateFromMasterAccountRequest, "DetectorId"> & DisassociateFromMasterAccountRequest)[K]
    }>): DisassociateFromMasterAccountResponse {
        return this.client.disassociateFromMasterAccount(
            this.ops["DisassociateFromMasterAccount"].apply(partialParams)
        );
    }

    invokeDisassociateMembers(partialParams: ToOptional<{
      [K in keyof DisassociateMembersRequest & keyof DisassociateMembersRequest & keyof Omit<DisassociateMembersRequest, "DetectorId"> & keyof DisassociateMembersRequest]: (DisassociateMembersRequest & DisassociateMembersRequest & Omit<DisassociateMembersRequest, "DetectorId"> & DisassociateMembersRequest)[K]
    }>): DisassociateMembersResponse {
        return this.client.disassociateMembers(
            this.ops["DisassociateMembers"].apply(partialParams)
        );
    }

    invokeEnableOrganizationAdminAccount(partialParams: ToOptional<{
      [K in keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest & keyof EnableOrganizationAdminAccountRequest]: (EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest & EnableOrganizationAdminAccountRequest)[K]
    }>): EnableOrganizationAdminAccountResponse {
        return this.client.enableOrganizationAdminAccount(
            this.ops["EnableOrganizationAdminAccount"].apply(partialParams)
        );
    }

    invokeGetDetector(partialParams: ToOptional<{
      [K in keyof GetDetectorRequest & keyof GetDetectorRequest & keyof Omit<GetDetectorRequest, "DetectorId"> & keyof GetDetectorRequest]: (GetDetectorRequest & GetDetectorRequest & Omit<GetDetectorRequest, "DetectorId"> & GetDetectorRequest)[K]
    }>): GetDetectorResponse {
        return this.client.getDetector(
            this.ops["GetDetector"].apply(partialParams)
        );
    }

    invokeGetFilter(partialParams: ToOptional<{
      [K in keyof GetFilterRequest & keyof GetFilterRequest & keyof Omit<GetFilterRequest, "DetectorId"> & keyof GetFilterRequest]: (GetFilterRequest & GetFilterRequest & Omit<GetFilterRequest, "DetectorId"> & GetFilterRequest)[K]
    }>): GetFilterResponse {
        return this.client.getFilter(
            this.ops["GetFilter"].apply(partialParams)
        );
    }

    invokeGetFindings(partialParams: ToOptional<{
      [K in keyof GetFindingsRequest & keyof GetFindingsRequest & keyof Omit<GetFindingsRequest, "DetectorId"> & keyof GetFindingsRequest]: (GetFindingsRequest & GetFindingsRequest & Omit<GetFindingsRequest, "DetectorId"> & GetFindingsRequest)[K]
    }>): GetFindingsResponse {
        return this.client.getFindings(
            this.ops["GetFindings"].apply(partialParams)
        );
    }

    invokeGetFindingsStatistics(partialParams: ToOptional<{
      [K in keyof GetFindingsStatisticsRequest & keyof GetFindingsStatisticsRequest & keyof Omit<GetFindingsStatisticsRequest, "DetectorId"> & keyof GetFindingsStatisticsRequest]: (GetFindingsStatisticsRequest & GetFindingsStatisticsRequest & Omit<GetFindingsStatisticsRequest, "DetectorId"> & GetFindingsStatisticsRequest)[K]
    }>): GetFindingsStatisticsResponse {
        return this.client.getFindingsStatistics(
            this.ops["GetFindingsStatistics"].apply(partialParams)
        );
    }

    invokeGetIPSet(partialParams: ToOptional<{
      [K in keyof GetIPSetRequest & keyof GetIPSetRequest & keyof Omit<GetIPSetRequest, "DetectorId"> & keyof GetIPSetRequest]: (GetIPSetRequest & GetIPSetRequest & Omit<GetIPSetRequest, "DetectorId"> & GetIPSetRequest)[K]
    }>): GetIPSetResponse {
        return this.client.getIPSet(
            this.ops["GetIPSet"].apply(partialParams)
        );
    }

    invokeGetMasterAccount(partialParams: ToOptional<{
      [K in keyof GetMasterAccountRequest & keyof GetMasterAccountRequest & keyof Omit<GetMasterAccountRequest, "DetectorId"> & keyof GetMasterAccountRequest]: (GetMasterAccountRequest & GetMasterAccountRequest & Omit<GetMasterAccountRequest, "DetectorId"> & GetMasterAccountRequest)[K]
    }>): GetMasterAccountResponse {
        return this.client.getMasterAccount(
            this.ops["GetMasterAccount"].apply(partialParams)
        );
    }

    invokeGetMemberDetectors(partialParams: ToOptional<{
      [K in keyof GetMemberDetectorsRequest & keyof GetMemberDetectorsRequest & keyof Omit<GetMemberDetectorsRequest, "DetectorId"> & keyof GetMemberDetectorsRequest]: (GetMemberDetectorsRequest & GetMemberDetectorsRequest & Omit<GetMemberDetectorsRequest, "DetectorId"> & GetMemberDetectorsRequest)[K]
    }>): GetMemberDetectorsResponse {
        return this.client.getMemberDetectors(
            this.ops["GetMemberDetectors"].apply(partialParams)
        );
    }

    invokeGetMembers(partialParams: ToOptional<{
      [K in keyof GetMembersRequest & keyof GetMembersRequest & keyof Omit<GetMembersRequest, "DetectorId"> & keyof GetMembersRequest]: (GetMembersRequest & GetMembersRequest & Omit<GetMembersRequest, "DetectorId"> & GetMembersRequest)[K]
    }>): GetMembersResponse {
        return this.client.getMembers(
            this.ops["GetMembers"].apply(partialParams)
        );
    }

    invokeGetThreatIntelSet(partialParams: ToOptional<{
      [K in keyof GetThreatIntelSetRequest & keyof GetThreatIntelSetRequest & keyof Omit<GetThreatIntelSetRequest, "DetectorId"> & keyof GetThreatIntelSetRequest]: (GetThreatIntelSetRequest & GetThreatIntelSetRequest & Omit<GetThreatIntelSetRequest, "DetectorId"> & GetThreatIntelSetRequest)[K]
    }>): GetThreatIntelSetResponse {
        return this.client.getThreatIntelSet(
            this.ops["GetThreatIntelSet"].apply(partialParams)
        );
    }

    invokeGetUsageStatistics(partialParams: ToOptional<{
      [K in keyof GetUsageStatisticsRequest & keyof GetUsageStatisticsRequest & keyof Omit<GetUsageStatisticsRequest, "DetectorId"> & keyof GetUsageStatisticsRequest]: (GetUsageStatisticsRequest & GetUsageStatisticsRequest & Omit<GetUsageStatisticsRequest, "DetectorId"> & GetUsageStatisticsRequest)[K]
    }>): GetUsageStatisticsResponse {
        return this.client.getUsageStatistics(
            this.ops["GetUsageStatistics"].apply(partialParams)
        );
    }

    invokeInviteMembers(partialParams: ToOptional<{
      [K in keyof InviteMembersRequest & keyof InviteMembersRequest & keyof Omit<InviteMembersRequest, "DetectorId"> & keyof InviteMembersRequest]: (InviteMembersRequest & InviteMembersRequest & Omit<InviteMembersRequest, "DetectorId"> & InviteMembersRequest)[K]
    }>): InviteMembersResponse {
        return this.client.inviteMembers(
            this.ops["InviteMembers"].apply(partialParams)
        );
    }

    invokeListFilters(partialParams: ToOptional<{
      [K in keyof ListFiltersRequest & keyof ListFiltersRequest & keyof Omit<ListFiltersRequest, "DetectorId"> & keyof ListFiltersRequest]: (ListFiltersRequest & ListFiltersRequest & Omit<ListFiltersRequest, "DetectorId"> & ListFiltersRequest)[K]
    }>): ListFiltersResponse {
        return this.client.listFilters(
            this.ops["ListFilters"].apply(partialParams)
        );
    }

    invokeListFindings(partialParams: ToOptional<{
      [K in keyof ListFindingsRequest & keyof ListFindingsRequest & keyof Omit<ListFindingsRequest, "DetectorId"> & keyof ListFindingsRequest]: (ListFindingsRequest & ListFindingsRequest & Omit<ListFindingsRequest, "DetectorId"> & ListFindingsRequest)[K]
    }>): ListFindingsResponse {
        return this.client.listFindings(
            this.ops["ListFindings"].apply(partialParams)
        );
    }

    invokeListIPSets(partialParams: ToOptional<{
      [K in keyof ListIPSetsRequest & keyof ListIPSetsRequest & keyof Omit<ListIPSetsRequest, "DetectorId"> & keyof ListIPSetsRequest]: (ListIPSetsRequest & ListIPSetsRequest & Omit<ListIPSetsRequest, "DetectorId"> & ListIPSetsRequest)[K]
    }>): ListIPSetsResponse {
        return this.client.listIPSets(
            this.ops["ListIPSets"].apply(partialParams)
        );
    }

    invokeListMembers(partialParams: ToOptional<{
      [K in keyof ListMembersRequest & keyof ListMembersRequest & keyof Omit<ListMembersRequest, "DetectorId"> & keyof ListMembersRequest]: (ListMembersRequest & ListMembersRequest & Omit<ListMembersRequest, "DetectorId"> & ListMembersRequest)[K]
    }>): ListMembersResponse {
        return this.client.listMembers(
            this.ops["ListMembers"].apply(partialParams)
        );
    }

    invokeListPublishingDestinations(partialParams: ToOptional<{
      [K in keyof ListPublishingDestinationsRequest & keyof ListPublishingDestinationsRequest & keyof Omit<ListPublishingDestinationsRequest, "DetectorId"> & keyof ListPublishingDestinationsRequest]: (ListPublishingDestinationsRequest & ListPublishingDestinationsRequest & Omit<ListPublishingDestinationsRequest, "DetectorId"> & ListPublishingDestinationsRequest)[K]
    }>): ListPublishingDestinationsResponse {
        return this.client.listPublishingDestinations(
            this.ops["ListPublishingDestinations"].apply(partialParams)
        );
    }

    invokeListTagsForResource(partialParams: ToOptional<{
      [K in keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest & keyof ListTagsForResourceRequest]: (ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest & ListTagsForResourceRequest)[K]
    }>): ListTagsForResourceResponse {
        return this.client.listTagsForResource(
            this.ops["ListTagsForResource"].apply(partialParams)
        );
    }

    invokeListThreatIntelSets(partialParams: ToOptional<{
      [K in keyof ListThreatIntelSetsRequest & keyof ListThreatIntelSetsRequest & keyof Omit<ListThreatIntelSetsRequest, "DetectorId"> & keyof ListThreatIntelSetsRequest]: (ListThreatIntelSetsRequest & ListThreatIntelSetsRequest & Omit<ListThreatIntelSetsRequest, "DetectorId"> & ListThreatIntelSetsRequest)[K]
    }>): ListThreatIntelSetsResponse {
        return this.client.listThreatIntelSets(
            this.ops["ListThreatIntelSets"].apply(partialParams)
        );
    }

    invokeStartMonitoringMembers(partialParams: ToOptional<{
      [K in keyof StartMonitoringMembersRequest & keyof StartMonitoringMembersRequest & keyof Omit<StartMonitoringMembersRequest, "DetectorId"> & keyof StartMonitoringMembersRequest]: (StartMonitoringMembersRequest & StartMonitoringMembersRequest & Omit<StartMonitoringMembersRequest, "DetectorId"> & StartMonitoringMembersRequest)[K]
    }>): StartMonitoringMembersResponse {
        return this.client.startMonitoringMembers(
            this.ops["StartMonitoringMembers"].apply(partialParams)
        );
    }

    invokeStopMonitoringMembers(partialParams: ToOptional<{
      [K in keyof StopMonitoringMembersRequest & keyof StopMonitoringMembersRequest & keyof Omit<StopMonitoringMembersRequest, "DetectorId"> & keyof StopMonitoringMembersRequest]: (StopMonitoringMembersRequest & StopMonitoringMembersRequest & Omit<StopMonitoringMembersRequest, "DetectorId"> & StopMonitoringMembersRequest)[K]
    }>): StopMonitoringMembersResponse {
        return this.client.stopMonitoringMembers(
            this.ops["StopMonitoringMembers"].apply(partialParams)
        );
    }

    invokeTagResource(partialParams: ToOptional<{
      [K in keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest & keyof TagResourceRequest]: (TagResourceRequest & TagResourceRequest & TagResourceRequest & TagResourceRequest)[K]
    }>): TagResourceResponse {
        return this.client.tagResource(
            this.ops["TagResource"].apply(partialParams)
        );
    }

    invokeUnarchiveFindings(partialParams: ToOptional<{
      [K in keyof UnarchiveFindingsRequest & keyof UnarchiveFindingsRequest & keyof Omit<UnarchiveFindingsRequest, "DetectorId"> & keyof UnarchiveFindingsRequest]: (UnarchiveFindingsRequest & UnarchiveFindingsRequest & Omit<UnarchiveFindingsRequest, "DetectorId"> & UnarchiveFindingsRequest)[K]
    }>): UnarchiveFindingsResponse {
        return this.client.unarchiveFindings(
            this.ops["UnarchiveFindings"].apply(partialParams)
        );
    }

    invokeUntagResource(partialParams: ToOptional<{
      [K in keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest & keyof UntagResourceRequest]: (UntagResourceRequest & UntagResourceRequest & UntagResourceRequest & UntagResourceRequest)[K]
    }>): UntagResourceResponse {
        return this.client.untagResource(
            this.ops["UntagResource"].apply(partialParams)
        );
    }

    invokeUpdateDetector(partialParams: ToOptional<{
      [K in keyof UpdateDetectorRequest & keyof UpdateDetectorRequest & keyof Omit<UpdateDetectorRequest, "DetectorId"> & keyof UpdateDetectorRequest]: (UpdateDetectorRequest & UpdateDetectorRequest & Omit<UpdateDetectorRequest, "DetectorId"> & UpdateDetectorRequest)[K]
    }>): UpdateDetectorResponse {
        return this.client.updateDetector(
            this.ops["UpdateDetector"].apply(partialParams)
        );
    }

    invokeUpdateFilter(partialParams: ToOptional<{
      [K in keyof UpdateFilterRequest & keyof UpdateFilterRequest & keyof Omit<UpdateFilterRequest, "DetectorId"> & keyof UpdateFilterRequest]: (UpdateFilterRequest & UpdateFilterRequest & Omit<UpdateFilterRequest, "DetectorId"> & UpdateFilterRequest)[K]
    }>): UpdateFilterResponse {
        return this.client.updateFilter(
            this.ops["UpdateFilter"].apply(partialParams)
        );
    }

    invokeUpdateFindingsFeedback(partialParams: ToOptional<{
      [K in keyof UpdateFindingsFeedbackRequest & keyof UpdateFindingsFeedbackRequest & keyof Omit<UpdateFindingsFeedbackRequest, "DetectorId"> & keyof UpdateFindingsFeedbackRequest]: (UpdateFindingsFeedbackRequest & UpdateFindingsFeedbackRequest & Omit<UpdateFindingsFeedbackRequest, "DetectorId"> & UpdateFindingsFeedbackRequest)[K]
    }>): UpdateFindingsFeedbackResponse {
        return this.client.updateFindingsFeedback(
            this.ops["UpdateFindingsFeedback"].apply(partialParams)
        );
    }

    invokeUpdateIPSet(partialParams: ToOptional<{
      [K in keyof UpdateIPSetRequest & keyof UpdateIPSetRequest & keyof Omit<UpdateIPSetRequest, "DetectorId"> & keyof UpdateIPSetRequest]: (UpdateIPSetRequest & UpdateIPSetRequest & Omit<UpdateIPSetRequest, "DetectorId"> & UpdateIPSetRequest)[K]
    }>): UpdateIPSetResponse {
        return this.client.updateIPSet(
            this.ops["UpdateIPSet"].apply(partialParams)
        );
    }

    invokeUpdateMemberDetectors(partialParams: ToOptional<{
      [K in keyof UpdateMemberDetectorsRequest & keyof UpdateMemberDetectorsRequest & keyof Omit<UpdateMemberDetectorsRequest, "DetectorId"> & keyof UpdateMemberDetectorsRequest]: (UpdateMemberDetectorsRequest & UpdateMemberDetectorsRequest & Omit<UpdateMemberDetectorsRequest, "DetectorId"> & UpdateMemberDetectorsRequest)[K]
    }>): UpdateMemberDetectorsResponse {
        return this.client.updateMemberDetectors(
            this.ops["UpdateMemberDetectors"].apply(partialParams)
        );
    }

    invokeUpdateOrganizationConfiguration(partialParams: ToOptional<{
      [K in keyof UpdateOrganizationConfigurationRequest & keyof UpdateOrganizationConfigurationRequest & keyof Omit<UpdateOrganizationConfigurationRequest, "DetectorId"> & keyof UpdateOrganizationConfigurationRequest]: (UpdateOrganizationConfigurationRequest & UpdateOrganizationConfigurationRequest & Omit<UpdateOrganizationConfigurationRequest, "DetectorId"> & UpdateOrganizationConfigurationRequest)[K]
    }>): UpdateOrganizationConfigurationResponse {
        return this.client.updateOrganizationConfiguration(
            this.ops["UpdateOrganizationConfiguration"].apply(partialParams)
        );
    }

    invokeUpdatePublishingDestination(partialParams: ToOptional<{
      [K in keyof UpdatePublishingDestinationRequest & keyof UpdatePublishingDestinationRequest & keyof Omit<UpdatePublishingDestinationRequest, "DetectorId"> & keyof UpdatePublishingDestinationRequest]: (UpdatePublishingDestinationRequest & UpdatePublishingDestinationRequest & Omit<UpdatePublishingDestinationRequest, "DetectorId"> & UpdatePublishingDestinationRequest)[K]
    }>): UpdatePublishingDestinationResponse {
        return this.client.updatePublishingDestination(
            this.ops["UpdatePublishingDestination"].apply(partialParams)
        );
    }

    invokeUpdateThreatIntelSet(partialParams: ToOptional<{
      [K in keyof UpdateThreatIntelSetRequest & keyof UpdateThreatIntelSetRequest & keyof Omit<UpdateThreatIntelSetRequest, "DetectorId"> & keyof UpdateThreatIntelSetRequest]: (UpdateThreatIntelSetRequest & UpdateThreatIntelSetRequest & Omit<UpdateThreatIntelSetRequest, "DetectorId"> & UpdateThreatIntelSetRequest)[K]
    }>): UpdateThreatIntelSetResponse {
        return this.client.updateThreatIntelSet(
            this.ops["UpdateThreatIntelSet"].apply(partialParams)
        );
    }
}